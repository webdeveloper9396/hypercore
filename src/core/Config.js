/**
 * HyperCore Configuration
 * Global optimization settings
 */

export class Config {


    constructor(options = {}) {


        this.settings = {

            // Engine
            enabled: true,

            debug: true,


            // Images
            optimizeImages: true,
            lazyImages: true,
            preloadLCP: true,


            // CSS
            optimizeCSS: true,


            // Javascript
            optimizeJS: true,


            // Fonts
            optimizeFonts: true,


            // Safety
            safeMode: true,


            ...options

        };


    }


    get(key) {

        return this.settings[key];

    }


    set(key, value) {

        this.settings[key] = value;

    }


    all() {

        return this.settings;

    }


}
