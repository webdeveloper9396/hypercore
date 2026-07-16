/**
 * HyperCore Analytics Optimizer Configuration
 */

export const AnalyticsConfig = {


    enabled: true,


    // Delay analytics loading

    enableDelay: true,


    // Delay time

    delayTime: 4000,


    // User interaction triggers

    triggerEvents: [

        "scroll",
        "click",
        "mousemove",
        "touchstart"

    ],



    // Analytics patterns

    analyticsPatterns: [

        "google-analytics.com",
        "googletagmanager.com",
        "gtag",
        "analytics.js",
        "fbevents.js",
        "facebook.net",
        "clarity.ms",
        "hotjar"

    ],



    // Do not delay

    ignorePatterns: [

        "payment",
        "checkout"

    ]


};
