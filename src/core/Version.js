/**
 * HyperCore Version Manager
 */

export class Version {


    constructor(){

        this.version = "1.0.0";

    }



    get(){

        return this.version;

    }



    info(){

        return {

            name: "HyperCore",

            version: this.version,

            engine: "Frontend Performance Optimization Engine"

        };


    }


}
