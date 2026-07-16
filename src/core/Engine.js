/**
 * HyperCore Engine
 * Main Controller
 *
 * Version: 1.0.0
 */

import { Logger } from "./Logger.js";
import { Config } from "./Config.js";
import { Framework } from "./Framework.js";
import { Loader } from "./Loader.js";
import { Events } from "./Events.js";
import { Version } from "./Version.js";


export class HyperCore {


    constructor(options = {}) {


        // Configuration
        this.config = new Config(options);


        // Logger
        this.logger = new Logger(
            this.config.get("debug")
        );


        // Framework detector
        this.framework = new Framework();


        // Module loader
        this.loader = new Loader(
            this.logger
        );


        // Event system
        this.events = new Events();


        // Version
        this.version = new Version();


        // State
        this.started = false;


    }



    /**
     * Initialize Engine
     */

    init() {


        if (this.started) {

            this.logger.warn(
                "HyperCore already initialized"
            );

            return;

        }



        try {


            this.logger.info(
                `HyperCore Engine v${this.version.get()} Started 🚀`
            );



            // Detect framework

            const framework =
                this.framework.detect();



            this.logger.info(
                `Framework Detected: ${framework}`
            );



            // Store framework

            this.frameworkName =
                framework;



            // Dispatch ready event

            this.events.emit(
                "engine:init",
                {

                    version:
                    this.version.get(),

                    framework

                }
            );



            // Load registered modules

            this.loader.loadAll({

                config:
                this.config,

                logger:
                this.logger,

                events:
                this.events,

                framework

            });



            this.started = true;



            this.logger.info(
                "HyperCore Ready ✅"
            );



            // Expose globally

            window.HyperCore =
            this;



        }


        catch(error){


            this.logger.error(
                "Engine initialization failed"
            );


            this.logger.error(error);


        }


    }




    /**
     * Register Optimization Module
     */

    register(module){


        this.loader.register(
            module
        );


    }




    /**
     * Listen Events
     */

    on(event, callback){


        this.events.on(
            event,
            callback
        );


    }




    /**
     * Trigger Events
     */

    emit(event,data){


        this.events.emit(
            event,
            data
        );


    }





    /**
     * Get Engine Info
     */

    info(){


        return {


            name:
            "HyperCore",


            version:
            this.version.get(),


            framework:
            this.frameworkName || "Unknown",


            status:
            this.started
            ? "Running"
            : "Stopped"


        };


    }



}
