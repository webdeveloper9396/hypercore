/**
 * HyperCore Preload Optimizer Configuration
 */

export const PreloadConfig = {


    enabled: true,


    // Enable resource hints

    enablePreconnect: true,

    enableDNSPrefetch: true,


    // Enable image preload

    enableImagePreload: true,


    // Enable font preload

    enableFontPreload: true,


    // Domains to preconnect

    preconnectDomains: [

        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com"

    ],


    // Font extensions

    fontExtensions: [

        ".woff",
        ".woff2",
        ".ttf",
        ".otf"

    ]

};
