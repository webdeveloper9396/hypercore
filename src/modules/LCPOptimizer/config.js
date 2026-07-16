/**
 * HyperCore LCP Optimizer Configuration
 */

export const LCPConfig = {

    // Enable preload for LCP image
    enablePreload: true,


    // Add fetchpriority high
    enableFetchPriority: true,


    // Remove lazy loading
    removeLazyLoading: true,


    // Add async decoding
    enableAsyncDecoding: true,


    // Delay before observing LCP
    observerTimeout: 5000

};
