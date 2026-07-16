/**
 * HyperCore LazyLoader Helper Functions
 */



export function shouldIgnore(
    element,
    config
){


    return config.ignoreSelectors.some(
        selector =>
        element.matches(selector)
    );


}





export function isLoaded(element){


    return (
        element.dataset.hypercoreLoaded === "true"
    );


}





export function markLoaded(element){


    element.dataset.hypercoreLoaded = "true";


}





export function loadImage(image){



    if(
        image.dataset.src
    ){

        image.src =
            image.dataset.src;


    }



    if(
        image.dataset.srcset
    ){

        image.srcset =
            image.dataset.srcset;

    }


}





export function loadIframe(iframe){



    if(
        iframe.dataset.src
    ){

        iframe.src =
            iframe.dataset.src;

    }


}





export function loadVideo(video){



    if(
        video.dataset.src
    ){

        video.src =
            video.dataset.src;

    }


}





export function loadBackground(element){



    const bg =
        element.dataset.bg;



    if(bg){


        element.style.backgroundImage =
            `url(${bg})`;


    }


}





export function loadElement(element){


    const tag =
        element.tagName.toLowerCase();



    if(tag === "img"){


        loadImage(element);


    }


    else if(tag === "iframe"){


        loadIframe(element);


    }


    else if(tag === "video"){


        loadVideo(element);


    }


    else if(
        element.dataset.bg
    ){


        loadBackground(element);


    }


    markLoaded(element);


}
