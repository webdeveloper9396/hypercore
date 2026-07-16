/**
 * HyperCore
 * Frontend Performance Optimization Engine
 *
 * Version: 1.0.0
 */


import { HyperCore } from "./core/Engine.js";




// Core Modules

import ImageOptimizer 
from "./modules/ImageOptimizer/index.js";


import LCPOptimizer 
from "./modules/LCPOptimizer/index.js";


import CSSOptimizer 
from "./modules/CSSOptimizer/index.js";


import JSOptimizer 
from "./modules/JSOptimizer/index.js";


import FontOptimizer 
from "./modules/FontOptimizer/index.js";


import LazyLoader 
from "./modules/LazyLoader/index.js";


import DOMOptimizer 
from "./modules/DOMOptimizer/index.js";


import PreloadOptimizer 
from "./modules/PreloadOptimizer/index.js";


import AnalyticsOptimizer 
from "./modules/AnalyticsOptimizer/index.js";


import Debug 
from "./modules/Debug/index.js";








/**
 * Create HyperCore Instance
 */


const hypercore = new HyperCore({


    debug:true,


    safeMode:true,


    autoDetect:true



});









/**
 * Register Modules
 */


hypercore.register(
    LCPOptimizer
);


hypercore.register(
    ImageOptimizer
);


hypercore.register(
    CSSOptimizer
);


hypercore.register(
    JSOptimizer
);


hypercore.register(
    FontOptimizer
);


hypercore.register(
    PreloadOptimizer
);


hypercore.register(
    LazyLoader
);


hypercore.register(
    DOMOptimizer
);


hypercore.register(
    AnalyticsOptimizer
);


hypercore.register(
    Debug
);









/**
 * Initialize Engine
 */


if(
    typeof window !== "undefined"
){



    window.HyperCore =
        hypercore;





    window.addEventListener(
        "DOMContentLoaded",
        ()=>{


            hypercore.init();



        }
    );



}






/**
 * Export Instance
 */


export default hypercore;
