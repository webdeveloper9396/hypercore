/**
 * HyperCore DOM Helper Functions
 */



export function getDOMSize(){


    return document.querySelectorAll("*").length;


}





export function getDOMDepth(element){


    let depth = 0;


    while(element.parentElement){


        depth++;


        element =
            element.parentElement;


    }


    return depth;

}





export function findDeepElements(
    maxDepth
){


    const elements =
        document.querySelectorAll("*");


    const result = [];



    elements.forEach(element=>{


        const depth =
            getDOMDepth(
                element
            );


        if(depth > maxDepth){


            result.push({

                element,

                depth

            });


        }


    });



    return result;


}





export function findImagesWithoutDimensions(){


    const images =
        document.querySelectorAll(
            "img"
        );


    const missing = [];



    images.forEach(image=>{


        if(
            !image.width ||
            !image.height
        ){


            missing.push(
                image
            );


        }


    });



    return missing;


}





export function findAnimations(){


    const elements =
        document.querySelectorAll("*");


    const animated = [];



    elements.forEach(element=>{


        const style =
            window.getComputedStyle(
                element
            );



        if(
            style.animationName !== "none" ||
            style.transitionProperty !== "none"
        ){


            animated.push(
                element
            );


        }


    });



    return animated;


}
