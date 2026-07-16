/**
 * HyperCore LCP Optimizer
 */


import { LCPConfig } from "./config.js";

import {

    optimizeLCPImage,
    preloadImage,
    getImageFromElement

} from "./helpers.js";




const LCPOptimizer = {


    name: "LCPOptimizer",



    init(context){


        const {

            logger,
            events

        } = context;



        if(
            !("PerformanceObserver" in window)
        ){

            logger.warn(
                "LCP Observer not supported"
            );

            return;

        }




        let optimized = false;



        const observer =
        new PerformanceObserver(
            (entryList)=>{


                const entries =
                entryList.getEntries();



                const lastEntry =
                entries[
                    entries.length - 1
                ];



                if(!lastEntry || optimized){

                    return;

                }



                const element =
                lastEntry.element;



                const image =
                getImageFromElement(
                    element
                );



                if(image){



                    optimizeLCPImage(
                        image,
                        LCPConfig
                    );



                    if(
                        LCPConfig.enablePreload
                    ){

                        preloadImage(
                            image
                        );

                    }




                    optimized = true;



                    logger.info(
                        "LCP Image Optimized 🚀"
                    );



                    events.emit(
                        "lcp:optimized",
                        {

                            image:
                            image.src

                        }
                    );



                    observer.disconnect();


                }


            }

        );




        observer.observe({

            type:
            "largest-contentful-paint",

            buffered:
            true

        });




        setTimeout(()=>{


            observer.disconnect();



        }, LCPConfig.observerTimeout);



    }


};



export default LCPOptimizer;
