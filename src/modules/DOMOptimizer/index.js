/**
 * HyperCore DOM Optimizer
 */


import { DOMConfig } from "./config.js";


import {

    getDOMSize,
    findDeepElements,
    findImagesWithoutDimensions,
    findAnimations

} from "./helpers.js";





const DOMOptimizer = {


    name: "DOMOptimizer",



    init(context){


        const {

            logger,
            events

        } = context;




        if(
            !DOMConfig.enabled
        ){

            return;

        }




        const report = {

            domNodes: 0,

            deepElements: 0,

            imagesWithoutDimensions: 0,

            animations: 0

        };





        // DOM size check

        report.domNodes =
            getDOMSize();





        if(
            report.domNodes >
            DOMConfig.maxDOMNodes
        ){


            logger.warn(
                `Large DOM detected: ${report.domNodes} nodes`
            );


        }






        // Deep nesting

        if(
            DOMConfig.checkDepth
        ){


            report.deepElements =
            findDeepElements(
                DOMConfig.maxDepth
            ).length;


        }







        // Image dimensions

        if(
            DOMConfig.checkImageDimensions
        ){


            report.imagesWithoutDimensions =
            findImagesWithoutDimensions()
            .length;


        }






        // Animations

        if(
            DOMConfig.checkAnimations
        ){


            report.animations =
            findAnimations()
            .length;


        }







        events.emit(
            "dom:optimized",
            report
        );




        logger.info(
            "DOM analysis completed ✅"
        );


        logger.debug(
            report
        );



    }


};



export default DOMOptimizer;
