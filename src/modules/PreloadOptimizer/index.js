/**
 * HyperCore Preload Optimizer
 */


import { PreloadConfig } from "./config.js";


import {

    addPreconnect,
    addDNSPrefetch,
    preloadResource,
    getFonts,
    getImages

} from "./helpers.js";





const PreloadOptimizer = {


    name: "PreloadOptimizer",




    init(context){


        const {

            logger,
            events

        } = context;





        if(
            !PreloadConfig.enabled
        ){

            return;

        }





        let optimized = 0;





        // Preconnect

        if(
            PreloadConfig.enablePreconnect
        ){


            PreloadConfig
            .preconnectDomains
            .forEach(domain=>{


                addPreconnect(
                    domain
                );


                optimized++;


            });


        }






        // DNS Prefetch

        if(
            PreloadConfig.enableDNSPrefetch
        ){


            PreloadConfig
            .preconnectDomains
            .forEach(domain=>{


                addDNSPrefetch(
                    domain
                );


            });


        }







        // Font preload

        if(
            PreloadConfig.enableFontPreload
        ){


            const fonts =
                getFonts();



            fonts.forEach(font=>{


                preloadResource(
                    font.href,
                    "font"
                );


                optimized++;


            });



        }








        // Image preload

        if(
            PreloadConfig.enableImagePreload
        ){


            const images =
                getImages();



            if(images.length){


                preloadResource(
                    images[0].currentSrc ||
                    images[0].src,
                    "image"
                );


                optimized++;


            }


        }







        events.emit(
            "preload:optimized",
            {

                optimized

            }
        );






        logger.info(
            `${optimized} resources optimized with preload 🚀`
        );



    }


};



export default PreloadOptimizer;
