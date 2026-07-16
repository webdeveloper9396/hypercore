/**
 * HyperCore
 * Frontend Performance Optimization Engine
 * Version: 1.0.0
 */

import { HyperCore } from "./core/Engine.js";

import ImageOptimizer from "./modules/ImageOptimizer/index.js";
import LCPOptimizer from "./modules/LCPOptimizer/index.js";

import CSSOptimizer from "./modules/CSSOptimizer/index.js";

import JSOptimizer from "./modules/JSOptimizer/index.js";

import FontOptimizer from "./modules/FontOptimizer/index.js";

import LazyLoader from "./modules/LazyLoader/index.js";

import DOMOptimizer from "./modules/DOMOptimizer/index.js";

import PreloadOptimizer from "./modules/PreloadOptimizer/index.js";


// Create HyperCore instance

const hypercore = new HyperCore({

    debug: true,

    safeMode: true

});


// Register optimization modules

hypercore.register(ImageOptimizer);

hypercore.register(LCPOptimizer);

hypercore.register(CSSOptimizer);

hypercore.register(JSOptimizer);

hypercore.register(FontOptimizer);

hypercore.register(LazyLoader);

hypercore.register(DOMOptimizer);

hypercore.register(PreloadOptimizer);


// Start Engine

hypercore.init();


// Export instance

export default hypercore;
