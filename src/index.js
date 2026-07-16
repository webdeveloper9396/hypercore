/**
 * HyperCore
 * Frontend Performance Optimization Engine
 * Version: 1.0.0
 */

import { HyperCore } from "./core/Engine.js";


const hypercore = new HyperCore({

    debug: true,

    safeMode: true

});


hypercore.init();


export default hypercore;
