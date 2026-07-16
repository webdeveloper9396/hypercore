/**
 * HyperCore Font Helper Functions
 */


export function getFontLinks(){


    return Array.from(
        document.querySelectorAll(
            'link[href*="font"]'
        )
    );

}





export function isGoogleFont(link, config){


    return config.googleFontDomains.some(
        domain =>
        link.href.includes(domain)
    );


}




export function addPreload(link){


    const exists =
        document.querySelector(
            `link[rel="preload"][href="${link.href}"]`
        );


    if(exists){

        return;

    }



    const preload =
        document.createElement(
            "link"
        );


    preload.rel =
        "preload";


    preload.as =
        "style";


    preload.href =
        link.href;



    document.head.appendChild(
        preload
    );


}





export function optimizeFontCSS(link){


    if(
        !link.href.includes(
            "display="
        )
    ){

        link.href +=
            link.href.includes("?")
            ?
            "&display=swap"
            :
            "?display=swap";

    }


}
