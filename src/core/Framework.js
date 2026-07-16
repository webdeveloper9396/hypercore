/**
 * HyperCore Framework Detector
 * Version: 1.0.0
 */


export default class Framework {



    static detect(){


        const checks = [

            this.detectWordPress(),

            this.detectLaravel(),

            this.detectWix(),

            this.detectShopify(),

            this.detectNext(),

            this.detectReact(),

            this.detectVite()

        ];





        const result =
            checks.find(
                item =>
                item.detected === true
            );






        if(result){


            return result.name;


        }





        return "Unknown";



    }









    /**
     * Detailed Detection
     */


    static info(){



        const frameworks = [

            this.detectWordPress(),

            this.detectLaravel(),

            this.detectWix(),

            this.detectShopify(),

            this.detectNext(),

            this.detectReact(),

            this.detectVite()

        ];





        const detected =
            frameworks.find(
                item =>
                item.detected
            );





        return detected || {


            name:
            "Unknown",


            confidence:
            0



        };



    }









    /**
     * WordPress
     */


    static detectWordPress(){



        const html =
            document.documentElement.innerHTML;





        const detected =

            html.includes(
                "wp-content"
            )
            ||

            html.includes(
                "wp-includes"
            )
            ||

            window.wp !== undefined;





        return {


            name:
            "WordPress",


            detected,


            confidence:
            detected ? 95 : 0



        };



    }









    /**
     * Laravel
     */


    static detectLaravel(){



        const cookies =
            document.cookie;



        const html =
            document.documentElement.innerHTML;





        const detected =


            cookies.includes(
                "laravel_session"
            )
            ||

            html.includes(
                "csrf-token"
            )
            ||

            document.querySelector(
                'meta[name="csrf-token"]'
            ) !== null;





        return {


            name:
            "Laravel",


            detected,


            confidence:
            detected ? 90 : 0



        };


    }









    /**
     * Wix
     */


    static detectWix(){



        const html =
            document.documentElement.innerHTML;





        const detected =


            html.includes(
                "wix"
            )
            ||

            window.wixBiSession !== undefined
            ||

            window.wix !== undefined;





        return {


            name:
            "Wix",


            detected,


            confidence:
            detected ? 90 : 0



        };


    }









    /**
     * Shopify
     */


    static detectShopify(){



        const detected =


            window.Shopify !== undefined
            ||

            location.hostname.includes(
                "myshopify"
            );





        return {


            name:
            "Shopify",


            detected,


            confidence:
            detected ? 95 : 0



        };


    }









    /**
     * Next.js
     */


    static detectNext(){



        const detected =


            window.__NEXT_DATA__ !== undefined
            ||

            document.querySelector(
                "#__next"
            ) !== null;





        return {


            name:
            "Next.js",


            detected,


            confidence:
            detected ? 95 : 0



        };


    }









    /**
     * React
     */


    static detectReact(){



        const elements =
            document.querySelectorAll("*");



        let detected = false;





        elements.forEach(
            element=>{


                const keys =
                Object.keys(
                    element
                );



                if(
                    keys.some(
                        key =>
                        key.startsWith(
                            "__react"
                        )
                    )
                ){


                    detected = true;


                }



            }
        );





        return {


            name:
            "React",


            detected,


            confidence:
            detected ? 85 : 0



        };



    }









    /**
     * Vite
     */


    static detectVite(){



        const detected =


            document.querySelector(
                'script[src*="/@vite/"]'
            ) !== null
            ||

            document.documentElement.innerHTML
            .includes(
                "@vite"
            );





        return {


            name:
            "Vite",


            detected,


            confidence:
            detected ? 80 : 0



        };


    }









    /**
     * Get Framework Rules
     */


    static rules(){



        return {


            WordPress:{


                optimize:
                [

                    "delay plugins",

                    "lazy images",

                    "defer scripts"

                ]


            },




            Laravel:{


                optimize:
                [

                    "blade optimization",

                    "asset compression",

                    "cache headers"

                ]


            },




            Wix:{


                optimize:
                [

                    "third party delay",

                    "image optimization",

                    "css cleanup"

                ]


            }



        };



    }




}
