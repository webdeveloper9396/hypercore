/**
 * HyperCore LazyLoader Configuration
 */

export const LazyConfig = {


    enabled: true,


    // Elements to lazy load

    selectors: [

        "img",
        "iframe",
        "video",
        "[data-bg]"

    ],



    // Intersection observer settings

    rootMargin: "200px",


    threshold: 0.01,



    // Ignore elements

    ignoreSelectors: [

        ".no-lazy",
        "[data-no-lazy]",
        ".lazy-ignore"

    ]

};
