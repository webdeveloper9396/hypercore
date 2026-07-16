/**
 * HyperCore Logger
 * Handles console messages
 */

export class Logger {

    constructor(enabled = true) {
        this.enabled = enabled;
    }


    info(message) {

        if (!this.enabled) return;

        console.log(
            `%c[HyperCore] ${message}`,
            "color:#00b894;font-weight:bold;"
        );

    }


    warn(message) {

        if (!this.enabled) return;

        console.warn(
            `[HyperCore Warning] ${message}`
        );

    }


    error(message) {

        console.error(
            `[HyperCore Error] ${message}`
        );

    }


    debug(data) {

        if (!this.enabled) return;

        console.log(
            "[HyperCore Debug]",
            data
        );

    }

}
