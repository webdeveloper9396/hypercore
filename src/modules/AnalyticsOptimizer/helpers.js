/**
 * HyperCore Analytics Helper Functions
 */



export function getScripts(){


    return Array.from(
        document.querySelectorAll(
            "script[src]"
        )
    );


}





export function isAnalyticsScript(
    script,
    config
){


    const src =
        script.src.toLowerCase();



    return config.analyticsPatterns.some(
        pattern =>
        src.includes(pattern)
    );


}





export function createPlaceholder(
    script
){


    const placeholder =
        document.createElement(
            "script"
        );



    placeholder.type =
        "text/hypercore-delayed";



    placeholder.dataset.src =
        script.src;



    placeholder.dataset.original =
        "analytics";



    script.replaceWith(
        placeholder
    );



}





export function loadAnalyticsScripts(){


    const scripts =
        document.querySelectorAll(
            'script[type="text/hypercore-delayed"]'
        );



    scripts.forEach(script=>{


        const newScript =
            document.createElement(
                "script"
            );



        newScript.src =
            script.dataset.src;



        newScript.async =
            true;



        document.head.appendChild(
            newScript
        );



        script.remove();


    });


}





export function hasAnalyticsLoaded(){


    return document.querySelector(
        'script[type="text/hypercore-delayed"]'
    );


}
