/**
 * HyperCore Module Loader
 * Loads optimization modules safely
 */

export class Loader {


    constructor(logger) {

        this.logger = logger;
        this.modules = [];

    }


    register(module) {

        if (!module) return;


        this.modules.push(module);


        this.logger.debug(
            `Module Registered: ${module.name || "Unknown"}`
        );

    }



    loadAll(context) {


        this.modules.forEach(module => {


            try {


                if (
                    typeof module.init === "function"
                ) {

                    module.init(context);


                    this.logger.info(
                        `${module.name} initialized`
                    );

                }


            } catch(error) {


                this.logger.error(
                    `${module.name} failed`
                );


                this.logger.error(error);


            }


        });


    }


}
