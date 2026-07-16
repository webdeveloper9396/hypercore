/**
 * HyperCore Analytics Optimizer
 */


import { AnalyticsConfig } from "./config.js";


import {

    getScripts,
    isAnalyticsScript,
    createPlaceholder,
    loadAnalyticsScripts

} from "./helpers.js";





const AnalyticsOptimizer = {


    name: "AnalyticsOptimizer",




    init(context){


        const {

            logger,
            events

        } = context;




        if(
            !AnalyticsConfig.enabled
        ){

            return;

        }





        const scripts =
            getScripts();





        let delayed = 0;





        scripts.forEach(script=>{


            if(
                isAnalyticsScript(
                    script,
                    AnalyticsConfig
                )
            ){


                createPlaceholder(
                    script
                );


                delayed++;


            }


        });







        if(
            delayed
            &&
            AnalyticsConfig.enableDelay
        ){


            let loaded = false;




            const loadAnalytics =
            ()=>{


                if(loaded){

                    return;

                }


                loaded = true;



                loadAnalyticsScripts();



                logger.info(
                    `${delayed} analytics scripts loaded`
                );



                events.emit(
                    "analytics:loaded",
                    {

                        count:
                        delayed

                    }
                );


            };





            AnalyticsConfig
            .triggerEvents
            .forEach(event=>{


                window.addEventListener(
                    event,
                    loadAnalytics,
                    {

                        once:true,

                        passive:true

                    }
                );


            });





            setTimeout(
                loadAnalytics,
                AnalyticsConfig.delayTime
            );



        }




        logger.info(
            "Analytics optimization completed ✅"
        );



    }


};



export default AnalyticsOptimizer;
