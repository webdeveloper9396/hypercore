/**
 * HyperCore Image Optimizer Configuration
 */

export const ImageConfig = {


    // First images to check for LCP
    lcpPriorityCount: 1,


    // Add lazy loading to images
    enableLazyLoad: true,


    // Add async decoding
    enableAsyncDecoding: true,


    // Add width and height attributes
    enableDimensions: true,


    // Minimum image size for lazy loading
    lazyLoadThreshold: 800,


    // Ignore images
    ignoreSelectors: [

        "svg",
        ".no-optimize",
        "[data-no-optimize]"

    ]

};
