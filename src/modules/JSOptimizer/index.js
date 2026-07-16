/**
 * HyperCore JS Optimizer
 */


import { JSConfig } from "./config.js";

import {

    getScripts,
    shouldDelay,
    replaceScript,
    loadDelayedScripts

} from "./helpers.js";





const JSOptimizer = {


    name: "JSOptimizer",




    init(context){


        const {

            logger,
            events

        } = context;




        if(
            !JSConfig.enableDetection
        ){

            return;

        }




        const scripts =
            getScripts();




        let delayed = 0;




        scripts.forEach(script=>{


            if(
                shouldDelay(
                    script,
                    JSConfig
                )
            ){


                replaceScript(
                    script
                );


                delayed++;


            }


        });






        if(
            delayed > 0
        ){


            let loaded = false;



            const load =
            ()=>{


                if(loaded){

                    return;

                }


                loaded = true;


                loadDelayedScripts();



                logger.info(
                    `${delayed} JS files delayed`
                );


                events.emit(
                    "js:optimized",
                    {

                        delayed

                    }
                );


            };



            JSConfig.triggerEvents
            .forEach(event=>{


                window.addEventListener(
                    event,
                    load,
                    {
                        once:true,
                        passive:true
                    }
                );


            });



            setTimeout(
                load,
                JSConfig.delayTime
            );


        }





        logger.info(
            "JS optimization completed ✅"
        );



    }


};



export default JSOptimizer;
