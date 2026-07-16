/**
 * HyperCore JS Optimizer Configuration
 */

export const JSConfig = {


    // Enable script detection
    enableDetection: true,


    // Delay third party scripts
    delayThirdParty: true,


    // Delay events
    triggerEvents: [
        "scroll",
        "click",
        "mousemove",
        "touchstart"
    ],


    // Delay timeout
    delayTime: 3000,


    // Scripts to delay

    delayPatterns: [

        "google-analytics",
        "googletagmanager",
        "gtag",
        "facebook",
        "fbevents",
        "hotjar",
        "clarity",
        "chat",
        "intercom",
        "hubspot",
        "recaptcha"

    ],


    // Ignore scripts

    ignorePatterns: [

        "jquery",
        "bootstrap",
        "app.js",
        "main.js"

    ]


};
