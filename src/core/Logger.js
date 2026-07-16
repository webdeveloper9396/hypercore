/**
 * HyperCore Logger
 * Version: 1.0.0
 */


export default class Logger {



    constructor(
        debug = true,
        options = {}
    ){


        this.enabled = debug;


        this.options = {


            prefix:
            "HyperCore",


            storeLogs:
            true,


            maxLogs:
            100,


            ...options


        };



        this.logs = [];


    }








    /**
     * Create Log Entry
     */


    createEntry(
        level,
        message,
        data = null
    ){



        return {


            time:
            new Date()
            .toISOString(),


            level,


            message,


            data



        };


    }









    /**
     * Store Logs
     */


    store(
        entry
    ){



        if(
            !this.options.storeLogs
        ){

            return;

        }






        this.logs.push(
            entry
        );





        if(
            this.logs.length >
            this.options.maxLogs
        ){


            this.logs.shift();


        }



    }









    /**
     * Format Prefix
     */


    prefix(){


        return `[${this.options.prefix}]`;


    }









    /**
     * INFO
     */


    info(
        message,
        data = null
    ){



        const entry =
        this.createEntry(
            "INFO",
            message,
            data
        );



        this.store(
            entry
        );





        if(
            this.enabled
        ){


            console.log(

                this.prefix(),

                message,

                data || ""

            );


        }



    }









    /**
     * WARNING
     */


    warn(
        message,
        data = null
    ){



        const entry =
        this.createEntry(
            "WARN",
            message,
            data
        );



        this.store(
            entry
        );






        if(
            this.enabled
        ){


            console.warn(

                this.prefix(),

                message,

                data || ""

            );


        }



    }









    /**
     * ERROR
     */


    error(
        message,
        error = null
    ){



        const entry =
        this.createEntry(
            "ERROR",
            message,
            error
        );



        this.store(
            entry
        );






        console.error(

            this.prefix(),

            message,

            error || ""

        );



    }









    /**
     * DEBUG
     */


    debug(
        message,
        data = null
    ){



        const entry =
        this.createEntry(
            "DEBUG",
            message,
            data
        );



        this.store(
            entry
        );






        if(
            this.enabled
        ){


            console.debug(

                this.prefix(),

                message,

                data || ""

            );


        }


    }









    /**
     * Group Logs
     */


    group(
        title
    ){



        if(
            this.enabled &&
            console.group
        ){


            console.group(
                `${this.prefix()} ${title}`
            );


        }


    }








    groupEnd(){


        if(
            this.enabled &&
            console.groupEnd
        ){


            console.groupEnd();


        }


    }









    /**
     * Table Output
     */


    table(
        data
    ){



        if(
            this.enabled &&
            console.table
        ){


            console.table(
                data
            );


        }


    }









    /**
     * Get Stored Logs
     */


    getLogs(){



        return this.logs;


    }









    /**
     * Clear Logs
     */


    clear(){


        this.logs = [];


    }





}
