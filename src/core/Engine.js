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
            Version.get().version;





        this.options = {


            debug:true,

            safeMode:true,


            autoDetect:true,


            ...options


        };






        /**
         * Config
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
         * Events
         */

        this.events =
            new Events();






        /**
         * Framework
         */

        this.framework =
        this.options.autoDetect
        ?
        Framework.detect()
        :
        "Manual";







        /**
         * Loader
         */

        this.loader =
            new Loader(
                this
            );






        this.modules = [];



        this.initialized = false;






        /**
         * Module Context
         */


        this.context = {


            core:this,


            config:this.config,


            logger:this.logger,


            events:this.events,


            loader:this.loader


        };



    }











    /**
     * Register Module
     */


    register(module){



        this.loader.register(
            module
        );



        this.modules = [
            ...this.loader.modules
        ];



        return this;


    }









    /**
     * Start Engine
     */


    async init(){



        if(
            this.initialized
        ){


            this.logger.warn(
                "HyperCore already initialized"
            );


            return this;


        }







        this.logger.info(
            `HyperCore v${this.version} Starting 🚀`
        );






        this.logger.info(
            `Framework: ${this.framework}`
        );





        try{



            await this.loader.loadAll();




            this.initialized =
                true;





            await this.events.emit(
                "core:ready",
                {

                    version:this.version,

                    framework:this.framework,

                    modules:this.modules.length

                }
            );







            this.logger.info(
                "HyperCore Ready ✅"
            );



            return this;



        }



        catch(error){



            this.logger.error(
                "Initialization Failed",
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
     * Engine Status
     */


    status(){



        return {


            version:this.version,


            framework:this.framework,


            initialized:this.initialized,


            modules:
            this.loader.getStatus()


        };


    }









    /**
     * Destroy Engine
     */


    destroy(){



        this.modules.forEach(
            module=>{


                if(
                    typeof module.destroy === "function"
                ){


                    module.destroy(
                        this.context
                    );


                }


            }
        );






        this.loader.modules = [];

        this.modules = [];



        this.initialized=false;





        this.events.emit(
            "core:destroy"
        );





        this.logger.info(
            "HyperCore destroyed"
        );



    }




}
