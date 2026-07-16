/**
 * HyperCore JS Helper Functions
 */


export function getScripts(){


    return Array.from(
        document.querySelectorAll(
            "script[src]"
        )
    );


}




export function shouldDelay(script, config){


    const src =
        script.src.toLowerCase();



    // Ignore system scripts

    const ignored =
        config.ignorePatterns.some(
            item =>
            src.includes(
                item
            )
        );


    if(ignored){

        return false;

    }



    return config.delayPatterns.some(
        pattern =>
        src.includes(
            pattern
        )
    );


}





export function replaceScript(script){


    const clone =
        document.createElement(
            "script"
        );


    clone.type =
        "text/plain";



    clone.dataset.hypercore =
        "delayed";



    clone.dataset.src =
        script.src;



    script.replaceWith(
        clone
    );



}





export function loadDelayedScripts(){


    const scripts =
        document.querySelectorAll(
            "script[data-hypercore='delayed']"
        );



    scripts.forEach(script=>{


        const newScript =
            document.createElement(
                "script"
            );



        newScript.src =
            script.dataset.src;



        newScript.async = true;



        document.body.appendChild(
            newScript
        );



        script.remove();


    });


}
