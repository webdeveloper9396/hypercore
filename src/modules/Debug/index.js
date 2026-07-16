/**
 * HyperCore Debug Module
 */


import { DebugConfig } from "./config.js";


import {

    getPerformanceMetrics,
    getMemoryUsage,
    printDashboard

} from "./helpers.js";





const Debug = {


    name: "Debug",



    init(context){


        const {

            logger,
            events,
            core

        } = context;





        if(
            !DebugConfig.enabled
        ){

            return;

        }





        const report = {


            version:
            core.version || "1.0.0",



            framework:
            core.framework || "Unknown",



            modules:
            core.modules?.length || 0,



            images:
            0,


            css:
            0,


            js:
            0,


            fonts:
            0,


            lcp:
            "Waiting",



            metrics:
            DebugConfig.collectMetrics
            ?
            getPerformanceMetrics()
            :
            null,



            memory:
            getMemoryUsage()


        };





        // Listen optimization events


        events.on(
            "images:optimized",
            data=>{


                report.images =
                data.total || 0;


            }
        );




        events.on(
            "lcp:optimized",
            ()=>{


                report.lcp =
                "Optimized";


            }
        );





        events.on(
            "css:optimized",
            data=>{


                report.css =
                data.files || 0;


            }
        );





        events.on(
            "js:optimized",
            data=>{


                report.js =
                data.delayed || 0;


            }
        );






        events.on(
            "fonts:optimized",
            data=>{


                report.fonts =
                data.optimized || 0;


            }
        );







        window.addEventListener(
            "load",
            ()=>{


                setTimeout(()=>{


                    if(
                        DebugConfig.showDashboard
                    ){

                        printDashboard(
                            report
                        );


                    }



                },1000);



            }
        );





        logger.info(
            "Debug module initialized ✅"
        );



    }


};



export default Debug;
