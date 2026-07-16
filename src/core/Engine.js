/**
 * HyperCore Engine
 * Frontend Performance Optimization Engine
 * Version: 1.0.0
 */


import Logger from "./Logger.js";

import Events from "./Events.js";

import Framework from "./Framework.js";

import Version from "./Version.js";




export class HyperCore {


    constructor(options = {}){


        this.version =
            Version.version ||
            "1.0.0";



        this.options = {


            debug:
            true,


            safeMode:
            true,


            ...options


        };





        this.modules = [];



        this.moduleNames =
            new Set();




        this.logger =
            new Logger(
                this.options.debug
            );



        this.events =
            new Events();




        this.framework =
            Framework.detect();



        this.initialized =
            false;




        this.context = {


            logger:
            this.logger,


            events:
            this.events,


            core:
            this


        };




    }






    /**
     * Register Module
     */


    register(module){



        if(
            !module ||
            !module.name
        ){


            this.logger.warn(
                "Invalid module skipped"
            );


            return this;


        }






        if(
            this.moduleNames.has(
                module.name
            )
        ){


            this.logger.warn(
                `Duplicate module ignored: ${module.name}`
            );


            return this;


        }






        this.modules.push(
            module
        );



        this.moduleNames.add(
            module.name
        );




        this.logger.info(
            `Module Registered: ${module.name}`
        );



        return this;


    }









    /**
     * Initialize Engine
     */


    init(){



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





        this.modules.forEach(
            module=>{


                this.loadModule(
                    module
                );


            }
        );





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










    /**
     * Load Module Safely
     */


    loadModule(module){



        try{


            if(
                typeof module.init !== "function"
            ){


                this.logger.warn(
                    `${module.name} has no init method`
                );


                return;


            }





            module.init(
                this.context
            );




            this.logger.info(
                `${module.name} initialized`
            );





        }


        catch(error){



            if(
                this.options.safeMode
            ){


                this.logger.error(
                    `${module.name} failed safely`,
                    error
                );


                return;


            }





            throw error;



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
     * Destroy Engine
     */


    destroy(){



        this.modules = [];

        this.moduleNames.clear();



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
