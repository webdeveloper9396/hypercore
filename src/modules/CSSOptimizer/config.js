/**
 * HyperCore CSS Optimizer Configuration
 */

export const CSSConfig = {


    // Enable stylesheet scanning
    scanStylesheets: true,


    // Enable duplicate CSS detection
    removeDuplicateCSS: true,


    // Convert stylesheet preload candidates
    enablePreload: true,


    // Ignore CSS files
    ignorePatterns: [

        "font",
        "icon",
        "admin"

    ],


    // Minimum size to consider optimization
    minCSSSize: 10000

};
