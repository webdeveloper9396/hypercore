/**
 * HyperCore CSS Helper Functions
 */


export function getStylesheets(){

    return Array.from(
        document.querySelectorAll(
            'link[rel="stylesheet"]'
        )
    );

}




export function getCSSSize(link){

    try {

        const sheet =
            link.sheet;


        if(!sheet){

            return 0;

        }


        return sheet.cssRules.length;


    }

    catch(error){

        return 0;

    }

}





export function isExternal(link){

    return (
        link.href &&
        !link.href.includes(
            window.location.hostname
        )
    );

}





export function hasDuplicateCSS(links){


    const urls =
        new Set();


    const duplicates = [];



    links.forEach(link=>{


        if(urls.has(link.href)){


            duplicates.push(
                link
            );


        }


        urls.add(
            link.href
        );


    });



    return duplicates;

}




export function preloadCSS(link){


    if(!link.href){

        return;

    }



    const preload =
        document.createElement(
            "link"
        );


    preload.rel = "preload";

    preload.as = "style";

    preload.href = link.href;



    preload.onload = function(){

        preload.rel = "stylesheet";

    };



    document.head.appendChild(
        preload
    );


}
