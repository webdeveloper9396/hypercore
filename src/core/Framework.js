/**
 * HyperCore Framework Detector
 * Detects website technology
 */

export class Framework {


    detect() {


        const html = document.documentElement.innerHTML;


        // Laravel detection
        if (
            html.includes("laravel") ||
            document.querySelector('meta[name="csrf-token"]')
        ) {

            return "Laravel";

        }


        // WordPress detection
        if (
            html.includes("wp-content") ||
            html.includes("wp-includes")
        ) {

            return "WordPress";

        }


        // Wix detection
        if (
            html.includes("wix") ||
            window.wixBiSession
        ) {

            return "Wix";

        }


        // React detection
        if (
            document.querySelector("[data-reactroot]") ||
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__
        ) {

            return "React";

        }


        // Default

        return "Unknown";

    }


}
