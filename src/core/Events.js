/**
 * HyperCore Event Manager
 */

export class Events {


    constructor() {

        this.events = {};

    }



    on(event, callback) {


        if (!this.events[event]) {

            this.events[event] = [];

        }


        this.events[event].push(callback);


    }




    emit(event, data = null) {


        if (!this.events[event]) return;


        this.events[event].forEach(callback => {


            try {

                callback(data);

            }

            catch(error){

                console.error(
                    "[HyperCore Event Error]",
                    error
                );

            }


        });


    }



    remove(event, callback) {


        if (!this.events[event]) return;


        this.events[event] =
            this.events[event]
            .filter(
                item => item !== callback
            );


    }


}
