import { Logger } from "./Logger.js";
import { Config } from "./Config.js";
import { Framework } from "./Framework.js";

export class HyperCore {

    constructor(options = {}) {

        this.config = new Config(options);
        this.logger = new Logger();
        this.framework = new Framework();

    }


    init() {

        this.logger.info(
            "HyperCore Engine Started 🚀"
        );


        const framework = this.framework.detect();


        this.logger.info(
            `Framework Detected: ${framework}`
        );

    }

}
