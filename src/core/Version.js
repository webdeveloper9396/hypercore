/**
 * HyperCore Version Manager
 * Version: 1.0.0
 */


export default class Version {



    static version = "1.0.0";


    static name = "HyperCore";



    static build = "20260716";



    static environment = "production";





    /**
     * Get Current Version
     */


    static get(){


        return {


            name:
            this.name,


            version:
            this.version,


            build:
            this.build,


            environment:
            this.environment



        };


    }









    /**
     * Compare Versions
     *
     * return:
     * 1  = current greater
     * 0  = equal
     * -1 = older
     */


    static compare(
        version
    ){



        const current =
            this.version
            .split(".")
            .map(Number);



        const target =
            version
            .split(".")
            .map(Number);






        for(
            let i = 0;
            i < 3;
            i++
        ){



            if(
                current[i] >
                target[i]
            ){

                return 1;

            }



            if(
                current[i] <
                target[i]
            ){

                return -1;

            }



        }





        return 0;


    }









    /**
     * Check Compatibility
     */


    static compatible(
        requiredVersion
    ){



        return (

            this.compare(
                requiredVersion
            )
            >=
            0

        );


    }









    /**
     * Release Information
     */


    static release(){



        return {


            version:
            this.version,


            build:
            this.build,


            released:
            "2026-07-16",



            features:[


                "Image Optimization",


                "LCP Optimization",


                "CSS Optimization",


                "JS Delay",


                "Font Optimization",


                "Lazy Loading",


                "DOM Analysis",


                "Preload System",


                "Analytics Delay"



            ]



        };


    }









    /**
     * Module Compatibility
     */


    static checkModule(
        module
    ){



        if(
            !module
        ){

            return false;

        }






        if(
            !module.requiredVersion
        ){

            return true;

        }






        return this.compatible(
            module.requiredVersion
        );


    }









    /**
     * Update Runtime Version
     */


    static set(
        version
    ){



        this.version =
            version;


    }





}
