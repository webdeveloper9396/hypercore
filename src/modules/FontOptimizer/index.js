/**
 * HyperCore Font Optimizer
 */


import { FontConfig } from "./config.js";

import {

    getFontLinks,
    isGoogleFont,
    addPreload,
    optimizeFontCSS

} from "./helpers.js";





const FontOptimizer = {


    name: "FontOptimizer",



    init(context){


        const {

            logger,
            events

        } = context;




        if(
            !FontConfig.enabled
        ){

            return;

        }




        const fonts =
            getFontLinks();




        if(
            !fonts.length
        ){


            logger.info(
                "No font files found"
            );


            return;

        }




        let optimized = 0;




        fonts.forEach(font=>{


            if(
                isGoogleFont(
                    font,
                    FontConfig
                )
            ){



                // Add swap

                if(
                    FontConfig.enableFontSwap
                ){

                    optimizeFontCSS(
                        font
                    );


                }





                // Preload

                if(
                    FontConfig.enablePreload
                ){

                    addPreload(
                        font
                    );


                }



                optimized++;


            }



        });





        events.emit(
            "fonts:optimized",
            {

                optimized

            }
        );




        logger.info(
            `${optimized} fonts optimized ✅`
        );



    }


};



export default FontOptimizer;
