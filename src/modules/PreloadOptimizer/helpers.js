/**
 * HyperCore Preload Helper Functions
 */



export function resourceExists(
    href,
    rel
){


    return document.querySelector(
        `link[rel="${rel}"][href="${href}"]`
    );


}





export function addLink(
    rel,
    href,
    as = null
){



    if(
        resourceExists(
            href,
            rel
        )
    ){

        return;

    }




    const link =
        document.createElement(
            "link"
        );


    link.rel =
        rel;


    link.href =
        href;



    if(as){

        link.as =
            as;

    }



    document.head.appendChild(
        link
    );


}





export function addPreconnect(domain){


    addLink(
        "preconnect",
        domain
    );


}




export function addDNSPrefetch(domain){


    addLink(
        "dns-prefetch",
        domain
    );


}





export function preloadResource(
    href,
    type
){


    addLink(
        "preload",
        href,
        type
    );


}




export function getFonts(){


    return Array.from(
        document.querySelectorAll(
            'link[href]'
        )
    )
    .filter(link=>{


        return (
            link.href.includes(".woff") ||
            link.href.includes(".woff2") ||
            link.href.includes(".ttf")
        );


    });


}





export function getImages(){


    return Array.from(
        document.images
    );


}
