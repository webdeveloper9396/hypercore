/**
 * HyperCore Event System
 * Version: 1.0.0
 */


export default class Events {



    constructor(){


        this.events = new Map();


    }






    /**
     * Add Event Listener
     */


    on(
        event,
        callback
    ){



        if(
            typeof callback !== "function"
        ){


            return;


        }






        if(
            !this.events.has(event)
        ){


            this.events.set(
                event,
                []
            );


        }






        this.events
            .get(event)
            .push({

                callback,

                once:false

            });





        return this;


    }









    /**
     * Add Once Listener
     */


    once(
        event,
        callback
    ){



        if(
            typeof callback !== "function"
        ){

            return;

        }






        if(
            !this.events.has(event)
        ){


            this.events.set(
                event,
                []
            );


        }






        this.events
        .get(event)
        .push({

            callback,

            once:true

        });





        return this;


    }









    /**
     * Remove Event Listener
     */


    off(
        event,
        callback
    ){



        if(
            !this.events.has(event)
        ){

            return this;

        }





        const listeners =
            this.events.get(
                event
            );






        const filtered =
        listeners.filter(
            listener =>
            listener.callback !== callback
        );






        this.events.set(
            event,
            filtered
        );





        return this;


    }









    /**
     * Emit Event
     */


    async emit(
        event,
        data = {}
    ){



        const listeners = [

            ...(this.events.get(event) || [])

        ];





        // Wildcard listeners


        const wildcard =
            this.events.get("*") || [];





        listeners.push(
            ...wildcard
        );







        for(
            const listener of listeners
        ){



            try{


                await listener.callback(
                    data
                );





            }

            catch(error){


                console.error(
                    `[HyperCore Event Error] ${event}`,
                    error
                );


            }





            if(
                listener.once
            ){



                this.off(
                    event,
                    listener.callback
                );


            }



        }





        return this;


    }









    /**
     * Check Event Exists
     */


    has(
        event
    ){



        return this.events.has(
            event
        );


    }









    /**
     * Remove All Events
     */


    clear(){


        this.events.clear();


        return this;


    }









    /**
     * Get Event Listeners
     */


    listeners(
        event
    ){


        return (
            this.events.get(event)
            ||
            []
        );


    }









    /**
     * Debug Information
     */


    getStats(){



        let total = 0;




        this.events.forEach(
            listeners=>{


                total +=
                listeners.length;


            }
        );





        return {


            events:
            this.events.size,


            listeners:
            total


        };


    }





}
