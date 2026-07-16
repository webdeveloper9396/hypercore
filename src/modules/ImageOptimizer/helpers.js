/**
 * Image Optimizer Helper Functions
 */


export function isIgnored(image, config){


    return config.ignoreSelectors.some(selector => {

        return image.matches(selector);

    });


}



export function isVisible(image){


    const rect =
        image.getBoundingClientRect();


    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );


}




export function addDimensions(image){


    if(
        !image.width &&
        image.naturalWidth
    ){

        image.setAttribute(
            "width",
            image.naturalWidth
        );

    }



    if(
        !image.height &&
        image.naturalHeight
    ){

        image.setAttribute(
            "height",
            image.naturalHeight
        );

    }


}




export function optimizeImage(image, config){



    // Async decoding

    if(config.enableAsyncDecoding){

        image.setAttribute(
            "decoding",
            "async"
        );

    }



    // Width height

    if(config.enableDimensions){

        addDimensions(image);

    }



}




export function setLCPPriority(image){


    image.setAttribute(
        "fetchpriority",
        "high"
    );


    image.setAttribute(
        "loading",
        "eager"
    );


    image.setAttribute(
        "decoding",
        "async"
    );


    image.removeAttribute(
        "loading"
    );


}
