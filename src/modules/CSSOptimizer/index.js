/**
 * HyperCore CSS Optimizer
 */


import { CSSConfig } from "./config.js";

import {

    getStylesheets,
    hasDuplicateCSS,
    preloadCSS

} from "./helpers.js";




const CSSOptimizer = {


    name: "CSSOptimizer",



    init(context){


        const {

            logger,
            events

        } = context;



        const stylesheets =
            getStylesheets();



        if(!stylesheets.length){


            logger.info(
                "No CSS files found"
            );


            return;

        }



        logger.info(
            `Found ${stylesheets.length} CSS files`
        );




        let optimizedCount = 0;



        // Duplicate CSS detection

        if(
            CSSConfig.removeDuplicateCSS
        ){


            const duplicates =
            hasDuplicateCSS(
                stylesheets
            );



            duplicates.forEach(css=>{


                css.remove();



                optimizedCount++;


            });



        }





        // Preload external CSS

        if(
            CSSConfig.enablePreload
        ){


            stylesheets.forEach(css=>{


                if(
                    css.media === "print"
                ){

                    return;

                }



                if(
                    css.href
                ){

                    preloadCSS(
                        css
                    );


                    optimizedCount++;

                }


            });


        }





        events.emit(
            "css:optimized",
            {

                files:
                stylesheets.length,

                optimized:
                optimizedCount

            }
        );



        logger.info(
            "CSS optimization completed ✅"
        );



    }


};



export default CSSOptimizer;
