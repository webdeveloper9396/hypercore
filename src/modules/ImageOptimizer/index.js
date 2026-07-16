/**
 * HyperCore Image Optimizer
 */


import { ImageConfig } from "./config.js";

import {

    isIgnored,
    isVisible,
    optimizeImage,
    setLCPPriority

} from "./helpers.js";




const ImageOptimizer = {


    name: "ImageOptimizer",



    init(context){


        const {

            logger,
            events

        } = context;



        const images =
            Array.from(
                document.images
            );



        if(!images.length){


            logger.info(
                "No images found"
            );


            return;

        }




        logger.info(
            `Optimizing ${images.length} images`
        );



        let lcpFound = false;



        images.forEach((image,index)=>{


            if(
                isIgnored(
                    image,
                    ImageConfig
                )
            ){

                return;

            }



            optimizeImage(
                image,
                ImageConfig
            );




            // First visible image = LCP candidate

            if(
                !lcpFound &&
                isVisible(image)
            ){

                setLCPPriority(
                    image
                );


                lcpFound = true;



                logger.info(
                    "LCP image optimized"
                );


                return;

            }





            // Lazy load other images

            if(
                ImageConfig.enableLazyLoad
            ){


                image.setAttribute(
                    "loading",
                    "lazy"
                );


            }



        });





        events.emit(
            "images:optimized",
            {

                total:
                images.length

            }
        );



        logger.info(
            "Image optimization completed ✅"
        );


    }


};



export default ImageOptimizer;
