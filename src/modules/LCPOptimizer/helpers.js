/**
 * HyperCore LCP Helper Functions
 */


export function isImage(element) {

    return (
        element &&
        element.tagName === "IMG"
    );

}



export function optimizeLCPImage(
    image,
    config
) {


    if(!image) return;



    // fetchpriority

    if(config.enableFetchPriority){

        image.setAttribute(
            "fetchpriority",
            "high"
        );

    }



    // Remove lazy loading

    if(config.removeLazyLoading){

        image.setAttribute(
            "loading",
            "eager"
        );

    }



    // Async decode

    if(config.enableAsyncDecoding){

        image.setAttribute(
            "decoding",
            "async"
        );

    }


}




export function preloadImage(image) {


    if(!image || !image.src) return;



    // Check existing preload

    const existing =
        document.querySelector(
            `link[rel="preload"][href="${image.src}"]`
        );



    if(existing){

        return;

    }




    const link =
        document.createElement(
            "link"
        );


    link.rel = "preload";

    link.as = "image";

    link.href = image.currentSrc || image.src;



    document.head.appendChild(
        link
    );


}



export function getImageFromElement(element){

    if(
        isImage(element)
    ){

        return element;

    }


    const image =
        element?.querySelector(
            "img"
        );


    return image || null;

}
