/**
 * HyperCore Engine
 * Frontend Performance Optimization Engine
 * Version: 1.0.0
 */


import Logger from "./Logger.js";

import Events from "./Events.js";

import Framework from "./Framework.js";

import Version from "./Version.js";

import Config from "./Config.js";

import Loader from "./Loader.js";





export class HyperCore {



    constructor(options = {}){


        this.version =
            Version.version ||
            "1.0.0";





        this.options = {


            debug:true,


            safeMode:true,


            ...options


        };






        /**
         * Configuration System
         */

        this.config =
            new Config(
                this.options.config || {}
            );








        /**
         * Logger
         */

        this.logger =
            new Logger(

                this.options.debug

            );







        /**
         * Event System
         */

        this.events =
            new Events();







        /**
         * Framework Detection
         */

        this.framework =
            Framework.detect();







        /**
         * Module Loader
         */

        this.loader =
            new Loader(
                this
            );








        this.modules =
            [];





        this.initialized =
            false;








        /**
         * Shared Module Context
         */


        this.context = {


            core:this,


            config:this.config,


            logger:this.logger,


            events:this.events



        };






    }









    /**
     * Register Module
     */


    register(module){



        this.loader.register(
            module
        );



        this.modules =
            this.loader.modules;



        return this;


    }









    /**
     * Initialize HyperCore
     */


    async init(){



        if(
            this.initialized
        ){



            this.logger.warn(
                "HyperCore already initialized"
            );


            return;


        }






        this.logger.info(
            `HyperCore Engine v${this.version} Started 🚀`
        );







        this.logger.info(
            `Framework Detected: ${this.framework}`
        );







        try{



            await this.loader.loadAll();





            this.initialized =
                true;






            this.events.emit(
                "core:ready",
                {


                    version:
                    this.version,


                    modules:
                    this.modules.length


                }
            );







            this.logger.info(
                "HyperCore Ready ✅"
            );





        }



        catch(error){



            this.logger.error(
                "HyperCore initialization failed",
                error
            );





            if(
                !this.options.safeMode
            ){


                throw error;


            }



        }





    }









    /**
     * Get Module
     */


    getModule(name){



        return this.modules.find(

            module =>
            module.name === name

        );


    }









    /**
     * Get Status
     */


    status(){



        return {


            version:
            this.version,


            framework:
            this.framework,


            initialized:
            this.initialized,


            modules:
            this.loader.getStatus()



        };



    }









    /**
     * Destroy HyperCore
     */


    destroy(){



        this.loader.modules = [];

        this.modules = [];



        this.initialized =
            false;





        this.events.emit(
            "core:destroy"
        );





        this.logger.info(
            "HyperCore destroyed"
        );



    }





}
