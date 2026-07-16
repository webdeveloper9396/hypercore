/**
 * HyperCore Module Loader
 * Version: 1.0.0
 */


export default class Loader {


    constructor(core){


        this.core = core;


        this.modules = [];


        this.loaded = new Set();


        this.failed = new Set();


    }





    /**
     * Add Module
     */

    register(module){


        if(
            !module ||
            !module.name
        ){


            this.core.logger.warn(
                "Invalid module"
            );


            return;


        }





        this.modules.push(
            module
        );


    }









    /**
     * Sort Modules By Priority
     */


    sortModules(){


        this.modules.sort(
            (a,b)=>{


                return (
                    (a.priority || 50)
                    -
                    (b.priority || 50)
                );


            }
        );


    }









    /**
     * Load All Modules
     */


    async loadAll(){



        this.sortModules();




        for(
            const module of this.modules
        ){


            await this.load(
                module
            );


        }



    }









    /**
     * Load Single Module
     */


    async load(module){



        if(
            this.loaded.has(
                module.name
            )
        ){


            return;


        }






        try{


            // Check Dependencies


            if(
                module.dependencies
            ){


                await this.loadDependencies(
                    module.dependencies
                );


            }







            this.core.logger.info(
                `Loading module: ${module.name}`
            );







            if(
                typeof module.init === "function"
            ){



                const result =
                module.init(
                    this.core.context
                );





                // Support async modules


                if(
                    result instanceof Promise
                ){


                    await result;


                }



            }







            this.loaded.add(
                module.name
            );




            this.core.events.emit(
                "module:loaded",
                {

                    name:
                    module.name

                }
            );






            this.core.logger.info(
                `${module.name} loaded ✅`
            );




        }





        catch(error){



            this.failed.add(
                module.name
            );





            this.handleError(
                module,
                error
            );



        }



    }









    /**
     * Dependency Loader
     */


    async loadDependencies(
        dependencies
    ){



        for(
            const dependency of dependencies
        ){



            const module =
            this.modules.find(
                item =>
                item.name === dependency
            );





            if(
                module &&
                !this.loaded.has(
                    dependency
                )
            ){


                await this.load(
                    module
                );


            }



        }



    }









    /**
     * Error Handler
     */


    handleError(
        module,
        error
    ){



        if(
            this.core.options.safeMode
        ){



            this.core.logger.error(

                `${module.name} failed safely`,

                error

            );



            return;


        }




        throw error;



    }









    /**
     * Status Report
     */


    getStatus(){



        return {


            total:
            this.modules.length,


            loaded:
            Array.from(
                this.loaded
            ),


            failed:
            Array.from(
                this.failed
            )

        };


    }







    /**
     * Remove Module
     */


    remove(name){



        this.modules =
            this.modules.filter(
                module =>
                module.name !== name
            );



        this.loaded.delete(
            name
        );



    }






}
