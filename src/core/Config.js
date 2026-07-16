/**
 * HyperCore Configuration Manager
 * Version: 1.0.0
 */


export default class Config {



    constructor(
        userConfig = {}
    ){



        this.defaults = {


            core: {


                version:
                "1.0.0",


                debug:
                true,


                safeMode:
                true



            },





            image: {


                enabled:
                true,


                lazyLoad:
                true,


                fetchPriority:
                true,


                preload:
                true



            },







            lcp: {


                enabled:
                true,


                preload:
                true,


                fetchPriority:
                true



            },







            css: {


                enabled:
                true,


                preload:
                true,


                removeDuplicate:
                true



            },







            javascript: {


                enabled:
                true,


                delayThirdParty:
                true,


                delayTime:
                3000



            },







            fonts: {


                enabled:
                true,


                fontDisplaySwap:
                true,


                preload:
                true



            },







            lazyLoader: {


                enabled:
                true,


                rootMargin:
                "200px"



            },







            analytics: {


                enabled:
                true,


                delay:
                true,


                delayTime:
                4000



            },







            dom: {


                enabled:
                true,


                maxNodes:
                1500



            }






        };





        this.config =
            this.merge(

                this.defaults,

                userConfig

            );



    }









    /**
     * Deep Merge
     */


    merge(
        target,
        source
    ){



        const output =
            {
                ...target
            };






        if(
            this.isObject(target)
            &&
            this.isObject(source)
        ){



            Object.keys(source)
            .forEach(key=>{





                if(
                    this.isObject(
                        source[key]
                    )
                ){


                    output[key] =
                    this.merge(

                        target[key] || {},

                        source[key]

                    );



                }


                else{


                    output[key] =
                    source[key];


                }





            });




        }




        return output;



    }









    isObject(
        value
    ){


        return (

            value &&
            typeof value === "object" &&
            !Array.isArray(value)

        );


    }









    /**
     * Get Config
     */


    get(
        path
    ){



        return path
        .split(".")
        .reduce(

            (obj,key)=>
            obj?.[key],

            this.config

        );



    }









    /**
     * Set Config
     */


    set(
        path,
        value
    ){



        const keys =
            path.split(".");



        let current =
            this.config;





        keys.forEach(
            (key,index)=>{





                if(
                    index === keys.length - 1
                ){



                    current[key] =
                    value;



                }


                else{



                    if(
                        !current[key]
                    ){


                        current[key] = {};

                    }



                    current =
                    current[key];


                }





            }
        );



        return this;


    }









    /**
     * Get Full Config
     */


    all(){



        return this.config;


    }









    /**
     * Reset Config
     */


    reset(){



        this.config =
        structuredClone(
            this.defaults
        );



    }





}
