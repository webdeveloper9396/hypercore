/**
 * HyperCore Debug Helper Functions
 */



export function getPerformanceMetrics(){


    const navigation =
        performance.getEntriesByType(
            "navigation"
        )[0];



    if(!navigation){

        return {};

    }




    return {


        domReady:
        Math.round(
            navigation.domContentLoadedEventEnd
        ),


        loadTime:
        Math.round(
            navigation.loadEventEnd
        ),


        responseTime:
        Math.round(
            navigation.responseEnd
        )


    };


}






export function getMemoryUsage(){


    if(
        performance.memory
    ){


        return {


            used:
            Math.round(
                performance.memory.usedJSHeapSize /
                1048576
            ) + " MB",



            total:
            Math.round(
                performance.memory.totalJSHeapSize /
                1048576
            ) + " MB"


        };


    }



    return null;


}







export function printDashboard(data){



    console.group(
        "🚀 HyperCore Performance Report"
    );



    console.table({

        Version:
        data.version,


        Framework:
        data.framework,


        Modules:
        data.modules,


        Images:
        data.images,


        CSS:
        data.css,


        JS:
        data.js,


        Fonts:
        data.fonts,


        LCP:
        data.lcp,


    });



    if(data.metrics){


        console.log(
            "Performance Metrics",
            data.metrics
        );


    }



    if(data.memory){


        console.log(
            "Memory Usage",
            data.memory
        );


    }



    console.groupEnd();


}
