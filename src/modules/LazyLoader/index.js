/**
 * HyperCore LazyLoader
 */


import { LazyConfig } from "./config.js";


import {

    shouldIgnore,
    isLoaded,
    loadElement

} from "./helpers.js";





const LazyLoader = {


    name: "LazyLoader",



    init(context){


        const {

            logger,
            events

        } = context;




        if(
            !LazyConfig.enabled
        ){

            return;

        }





        if(
            !("IntersectionObserver" in window)
        ){


            logger.warn(
                "IntersectionObserver not supported"
            );


            return;

        }




        const elements =
        document.querySelectorAll(
            LazyConfig.selectors.join(",")
        );





        let loaded = 0;




        const observer =
        new IntersectionObserver(

            entries => {


                entries.forEach(entry=>{


                    if(
                        !entry.isIntersecting
                    ){

                        return;

                    }



                    const element =
                    entry.target;



                    if(
                        shouldIgnore(
                            element,
                            LazyConfig
                        )
                    ){

                        observer.unobserve(
                            element
                        );

                        return;

                    }




                    if(
                        !isLoaded(
                            element
                        )
                    ){


                        loadElement(
                            element
                        );


                        loaded++;


                    }




                    observer.unobserve(
                        element
                    );


                });


            },


            {

                rootMargin:
                LazyConfig.rootMargin,


                threshold:
                LazyConfig.threshold

            }


        );





        elements.forEach(element=>{


            observer.observe(
                element
            );


        });





        events.emit(
            "lazy:initialized",
            {

                elements:
                elements.length,

                loaded

            }
        );





        logger.info(
            `${elements.length} elements lazy loading enabled ✅`
        );



    }


};



export default LazyLoader;
