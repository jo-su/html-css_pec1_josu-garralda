// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jKtUw":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "09c8269470045596";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8c3OQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _keenSliderMinCss = require("keen-slider/keen-slider.min.css");
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
var _motion = require("motion");
const feather = require("ffc670af9b2cf02");
(function() {
    feather.replace();
    document.getElementById("alien").addEventListener("click", function() {
        (0, _motion.animate)("#alien", {
            opacity: 1,
            transform: "rotate(360deg)"
        });
    });
    document.getElementById("flower").addEventListener("click", function() {
        (0, _motion.animate)("#flower", {
            opacity: 1,
            transform: "rotate(360deg)"
        });
    });
    var video = document.getElementById("home-video");
    var video_sound_button = document.getElementById("home-video-sound");
    if (video && video_sound_button) video_sound_button.addEventListener("click", function() {
        video.muted = !video.muted;
        if (video.muted) video_sound_button.innerHTML = feather.icons["volume-2"].toSvg();
        else video_sound_button.innerHTML = feather.icons["volume-x"].toSvg();
    });
    var menu = document.getElementById("menu");
    var menu_full = document.getElementById("menu-full");
    if (menu && menu_full) menu.addEventListener("click", function() {
        if (menu.getAttribute("state") == "open") {
            menu.innerHTML = feather.icons["x"].toSvg();
            menu.setAttribute("state", "closed");
            menu_full.classList.remove("nav__full--hidden");
        } else {
            menu.innerHTML = feather.icons["menu"].toSvg();
            menu.setAttribute("state", "open");
            menu_full.classList.add("nav__full--hidden");
        }
    });
    var sliderReparto = new (0, _keenSliderDefault.default)("#slider-reparto", {
        breakpoints: {
            "(min-width: 500px)": {
                slides: {
                    perView: 2,
                    spacing: 10
                }
            },
            "(min-width: 700px)": {
                slides: {
                    perView: 3,
                    spacing: 10
                }
            },
            "(min-width: 1000px)": {
                slides: {
                    perView: 4,
                    spacing: 15
                }
            }
        },
        slides: {
            perView: 1,
            spacing: 10
        }
    });
    var slider_reparto_prev = document.getElementById("slider-reparto-prev");
    var slider_reparto_next = document.getElementById("slider-reparto-next");
    if (slider_reparto_prev && slider_reparto_next) {
        slider_reparto_prev.addEventListener("click", sliderReparto.prev);
        slider_reparto_next.addEventListener("click", sliderReparto.next);
    }
    var sliderDireccion = new (0, _keenSliderDefault.default)("#slider-direccion", {
        breakpoints: {
            "(min-width: 500px)": {
                slides: {
                    perView: 2,
                    spacing: 10
                }
            },
            "(min-width: 700px)": {
                slides: {
                    perView: 3,
                    spacing: 10
                }
            },
            "(min-width: 1000px)": {
                slides: {
                    perView: 4,
                    spacing: 15
                }
            }
        },
        slides: {
            perView: 1,
            spacing: 10
        }
    });
    var slider_direccion_prev = document.getElementById("slider-direccion-prev");
    var slider_direccion_next = document.getElementById("slider-direccion-next");
    if (slider_direccion_prev && slider_direccion_next) {
        slider_direccion_prev.addEventListener("click", sliderDireccion.prev);
        slider_direccion_next.addEventListener("click", sliderDireccion.next);
    }
    var sliderImagenes = new (0, _keenSliderDefault.default)("#slider-imagenes", {
        breakpoints: {
            "(min-width: 500px)": {
                slides: {
                    perView: 1,
                    spacing: 10
                }
            },
            "(min-width: 700px)": {
                slides: {
                    perView: 2,
                    spacing: 10
                }
            },
            "(min-width: 1000px)": {
                slides: {
                    perView: 3,
                    spacing: 15
                }
            }
        },
        slides: {
            perView: 1,
            spacing: 10
        }
    });
    var slider_imagenes_prev = document.getElementById("slider-imagenes-prev");
    var slider_imagenes_next = document.getElementById("slider-imagenes-next");
    if (slider_imagenes_prev && slider_imagenes_next) {
        slider_imagenes_prev.addEventListener("click", sliderImagenes.prev);
        slider_imagenes_next.addEventListener("click", sliderImagenes.next);
    }
})();

},{"keen-slider/keen-slider.min.css":"cOg1L","keen-slider":"4GIfd","motion":"aqnbF","ffc670af9b2cf02":"94idb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOg1L":[function() {},{}],"4GIfd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>y);
var n = function() {
    return n = Object.assign || function(n) {
        for(var t, i = 1, e = arguments.length; i < e; i++)for(var r in t = arguments[i])Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n;
    }, n.apply(this, arguments);
};
function t(n, t, i) {
    if (i || 2 === arguments.length) for(var e, r = 0, a = t.length; r < a; r++)!e && r in t || (e || (e = Array.prototype.slice.call(t, 0, r)), e[r] = t[r]);
    return n.concat(e || Array.prototype.slice.call(t));
}
function i(n) {
    return Array.prototype.slice.call(n);
}
function e(n, t) {
    var i = Math.floor(n);
    return i === t || i + 1 === t ? n : t;
}
function r() {
    return Date.now();
}
function a(n, t, i) {
    if (t = "data-keen-slider-" + t, null === i) return n.removeAttribute(t);
    n.setAttribute(t, i || "");
}
function o(n, t) {
    return t = t || document, "function" == typeof n && (n = n(t)), Array.isArray(n) ? n : "string" == typeof n ? i(t.querySelectorAll(n)) : n instanceof HTMLElement ? [
        n
    ] : n instanceof NodeList ? i(n) : [];
}
function u(n) {
    n.raw && (n = n.raw), n.cancelable && !n.defaultPrevented && n.preventDefault();
}
function s(n) {
    n.raw && (n = n.raw), n.stopPropagation && n.stopPropagation();
}
function c() {
    var n = [];
    return {
        add: function(t, i, e, r) {
            t.addListener ? t.addListener(e) : t.addEventListener(i, e, r), n.push([
                t,
                i,
                e,
                r
            ]);
        },
        input: function(n, t, i, e) {
            this.add(n, t, function(n) {
                return function(t) {
                    t.nativeEvent && (t = t.nativeEvent);
                    var i = t.changedTouches || [], e = t.targetTouches || [], r = t.detail && t.detail.x ? t.detail : null;
                    return n({
                        id: r ? r.identifier ? r.identifier : "i" : e[0] ? e[0] ? e[0].identifier : "e" : "d",
                        idChanged: r ? r.identifier ? r.identifier : "i" : i[0] ? i[0] ? i[0].identifier : "e" : "d",
                        raw: t,
                        x: r && r.x ? r.x : e[0] ? e[0].screenX : r ? r.x : t.pageX,
                        y: r && r.y ? r.y : e[0] ? e[0].screenY : r ? r.y : t.pageY
                    });
                };
            }(i), e);
        },
        purge: function() {
            n.forEach(function(n) {
                n[0].removeListener ? n[0].removeListener(n[2]) : n[0].removeEventListener(n[1], n[2], n[3]);
            }), n = [];
        }
    };
}
function d(n, t, i) {
    return Math.min(Math.max(n, t), i);
}
function l(n) {
    return (n > 0 ? 1 : 0) - (n < 0 ? 1 : 0) || +n;
}
function f(n) {
    var t = n.getBoundingClientRect();
    return {
        height: e(t.height, n.offsetHeight),
        width: e(t.width, n.offsetWidth)
    };
}
function p(n, t, i, e) {
    var r = n && n[t];
    return null == r ? i : e && "function" == typeof r ? r() : r;
}
function v(n) {
    return Math.round(1e6 * n) / 1e6;
}
function h(n) {
    var t, i, e, r, a, o;
    function u(t) {
        o || (o = t), s(!0);
        var a = t - o;
        a > e && (a = e);
        var l = r[i];
        if (l[3] < a) return i++, u(t);
        var f = l[2], p = l[4], v = l[0], h = l[1] * (0, l[5])(0 === p ? 1 : (a - f) / p);
        if (h && n.track.to(v + h), a < e) return d();
        o = null, s(!1), c(null), n.emit("animationEnded");
    }
    function s(n) {
        t.active = n;
    }
    function c(n) {
        t.targetIdx = n;
    }
    function d() {
        var n;
        n = u, a = window.requestAnimationFrame(n);
    }
    function l() {
        var t;
        t = a, window.cancelAnimationFrame(t), s(!1), c(null), o && n.emit("animationStopped"), o = null;
    }
    return t = {
        active: !1,
        start: function(t) {
            if (l(), n.track.details) {
                var a = 0, o = n.track.details.position;
                i = 0, e = 0, r = t.map(function(n) {
                    var t, i = Number(o), r = null !== (t = n.earlyExit) && void 0 !== t ? t : n.duration, u = n.easing, s = n.distance * u(r / n.duration) || 0;
                    o += s;
                    var c = e;
                    return e += r, a += s, [
                        i,
                        n.distance,
                        c,
                        e,
                        n.duration,
                        u
                    ];
                }), c(n.track.distToIdx(a)), d(), n.emit("animationStarted");
            }
        },
        stop: l,
        targetIdx: null
    };
}
function m(n) {
    var i, e, a, o, u, s, c, f, h, m, g, b, x, k, y = 1 / 0, w = [], M = null, T = 0;
    function C(n) {
        _(T + n);
    }
    function E(n) {
        var t = z(T + n).abs;
        return D(t) ? t : null;
    }
    function z(n) {
        var i = Math.floor(Math.abs(v(n / e))), r = v((n % e + e) % e);
        r === e && (r = 0);
        var a = l(n), o = c.indexOf(t([], c, !0).reduce(function(n, t) {
            return Math.abs(t - r) < Math.abs(n - r) ? t : n;
        })), u = o;
        return a < 0 && i++, o === s && (u = 0, i += a > 0 ? 1 : -1), {
            abs: u + i * s * a,
            origin: o,
            rel: u
        };
    }
    function I(n, t, i) {
        var e;
        if (t || !S()) return A(n, i);
        if (!D(n)) return null;
        var r = z(null != i ? i : T), a = r.abs, o = n - r.rel, u = a + o;
        e = A(u);
        var c = A(u - s * l(o));
        return (null !== c && Math.abs(c) < Math.abs(e) || null === e) && (e = c), v(e);
    }
    function A(n, t) {
        if (null == t && (t = v(T)), !D(n) || null === n) return null;
        n = Math.round(n);
        var i = z(t), r = i.abs, a = i.rel, o = i.origin, u = O(n), d = (t % e + e) % e, l = c[o], f = Math.floor((n - (r - a)) / s) * e;
        return v(l - d - l + c[u] + f + (o === s ? e : 0));
    }
    function D(n) {
        return L(n) === n;
    }
    function L(n) {
        return d(n, h, m);
    }
    function S() {
        return o.loop;
    }
    function O(n) {
        return (n % s + s) % s;
    }
    function _(t) {
        var i;
        i = t - T, w.push({
            distance: i,
            timestamp: r()
        }), w.length > 6 && (w = w.slice(-6)), T = v(t);
        var e = H().abs;
        if (e !== M) {
            var a = null !== M;
            M = e, a && n.emit("slideChanged");
        }
    }
    function H(t) {
        var r = t ? null : function() {
            if (s) {
                var n = S(), t = n ? (T % e + e) % e : T, i = (n ? T % e : T) - u[0][2], r = 0 - (i < 0 && n ? e - Math.abs(i) : i), c = 0, d = z(T), f = d.abs, p = d.rel, v = u[p][2], y = u.map(function(t, i) {
                    var a = r + c;
                    (a < 0 - t[0] || a > 1) && (a += (Math.abs(a) > e - 1 && n ? e : 0) * l(-a));
                    var u = i - p, d = l(u), h = u + f;
                    n && (-1 === d && a > v && (h += s), 1 === d && a < v && (h -= s), null !== g && h < g && (a += e), null !== b && h > b && (a -= e));
                    var m = a + t[0] + t[1], x = Math.max(a >= 0 && m <= 1 ? 1 : m < 0 || a > 1 ? 0 : a < 0 ? Math.min(1, (t[0] + a) / t[0]) : (1 - a) / t[0], 0);
                    return c += t[0] + t[1], {
                        abs: h,
                        distance: o.rtl ? -1 * a + 1 - t[0] : a,
                        portion: x,
                        size: t[0]
                    };
                });
                return f = L(f), p = O(f), {
                    abs: L(f),
                    length: a,
                    max: k,
                    maxIdx: m,
                    min: x,
                    minIdx: h,
                    position: T,
                    progress: n ? t / e : T / a,
                    rel: p,
                    slides: y,
                    slidesLength: e
                };
            }
        }();
        return i.details = r, n.emit("detailsChanged"), r;
    }
    return i = {
        absToRel: O,
        add: C,
        details: null,
        distToIdx: E,
        idxToDist: I,
        init: function(t) {
            if (function() {
                if (o = n.options, u = (o.trackConfig || []).map(function(n) {
                    return [
                        p(n, "size", 1),
                        p(n, "spacing", 0),
                        p(n, "origin", 0)
                    ];
                }), s = u.length) {
                    e = v(u.reduce(function(n, t) {
                        return n + t[0] + t[1];
                    }, 0));
                    var t, i = s - 1;
                    a = v(e + u[0][2] - u[i][0] - u[i][2] - u[i][1]), c = u.reduce(function(n, i) {
                        if (!n) return [
                            0
                        ];
                        var e = u[n.length - 1], r = n[n.length - 1] + (e[0] + e[2]) + e[1];
                        return r -= i[2], n[n.length - 1] > r && (r = n[n.length - 1]), r = v(r), n.push(r), (!t || t < r) && (f = n.length - 1), t = r, n;
                    }, null), 0 === a && (f = 0), c.push(v(e));
                }
            }(), !s) return H(!0);
            var i;
            !function() {
                var t = n.options.range, i = n.options.loop;
                g = h = i ? p(i, "min", -1 / 0) : 0, b = m = i ? p(i, "max", y) : f;
                var e = p(t, "min", null), r = p(t, "max", null);
                null !== e && (h = e), null !== r && (m = r), x = h === -1 / 0 ? h : n.track.idxToDist(h || 0, !0, 0), k = m === y ? m : I(m, !0, 0), null === r && (b = m), p(t, "align", !1) && m !== y && 0 === u[O(m)][2] && (k -= 1 - u[O(m)][0], m = E(k - T)), x = v(x), k = v(k);
            }(), i = t, Number(i) === i ? C(A(L(t))) : H();
        },
        to: _,
        velocity: function() {
            var n = r(), t = w.reduce(function(t, i) {
                var e = i.distance, r = i.timestamp;
                return n - r > 200 || (l(e) !== l(t.distance) && t.distance && (t = {
                    distance: 0,
                    lastTimestamp: 0,
                    time: 0
                }), t.time && (t.distance += e), t.lastTimestamp && (t.time += r - t.lastTimestamp), t.lastTimestamp = r), t;
            }, {
                distance: 0,
                lastTimestamp: 0,
                time: 0
            });
            return t.distance / t.time || 0;
        }
    };
}
function g(n) {
    var t, i, e, r, a, o, u, s;
    function c(n) {
        return 2 * n;
    }
    function f(n) {
        return d(n, u, s);
    }
    function p(n) {
        return 1 - Math.pow(1 - n, 3);
    }
    function v() {
        return e ? n.track.velocity() : 0;
    }
    function h() {
        b();
        var t = "free-snap" === n.options.mode, i = n.track, e = v();
        r = l(e);
        var u = n.track.details, s = [];
        if (e || !t) {
            var d = m(e), h = d.dist, g = d.dur;
            if (g = c(g), h *= r, t) {
                var x = i.idxToDist(i.distToIdx(h), !0);
                x && (h = x);
            }
            s.push({
                distance: h,
                duration: g,
                easing: p
            });
            var k = u.position, y = k + h;
            if (y < a || y > o) {
                var w = y < a ? a - k : o - k, M = 0, T = e;
                if (l(w) === r) {
                    var C = Math.min(Math.abs(w) / Math.abs(h), 1), E = function(n) {
                        return 1 - Math.pow(1 - n, 1 / 3);
                    }(C) * g;
                    s[0].earlyExit = E, T = e * (1 - C);
                } else s[0].earlyExit = 0, M += w;
                var z = m(T, 100), I = z.dist * r;
                n.options.rubberband && (s.push({
                    distance: I,
                    duration: c(z.dur),
                    easing: p
                }), s.push({
                    distance: -I + M,
                    duration: 500,
                    easing: p
                }));
            }
            n.animator.start(s);
        } else n.moveToIdx(f(u.abs), !0, {
            duration: 500,
            easing: function(n) {
                return 1 + --n * n * n * n * n;
            }
        });
    }
    function m(n, t) {
        void 0 === t && (t = 1e3);
        var i = 147e-9 + (n = Math.abs(n)) / t;
        return {
            dist: Math.pow(n, 2) / i,
            dur: n / i
        };
    }
    function g() {
        var t = n.track.details;
        t && (a = t.min, o = t.max, u = t.minIdx, s = t.maxIdx);
    }
    function b() {
        n.animator.stop();
    }
    n.on("updated", g), n.on("optionsChanged", g), n.on("created", g), n.on("dragStarted", function() {
        e = !1, b(), t = i = n.track.details.abs;
    }), n.on("dragChecked", function() {
        e = !0;
    }), n.on("dragEnded", function() {
        var e = n.options.mode;
        "snap" === e && function() {
            var e = n.track, r = n.track.details, u = r.position, s = l(v());
            (u > o || u < a) && (s = 0);
            var c = t + s;
            0 === r.slides[e.absToRel(c)].portion && (c -= s), t !== i && (c = i), l(e.idxToDist(c, !0)) !== s && (c += s), c = f(c);
            var d = e.idxToDist(c, !0);
            n.animator.start([
                {
                    distance: d,
                    duration: 500,
                    easing: function(n) {
                        return 1 + --n * n * n * n * n;
                    }
                }
            ]);
        }(), "free" !== e && "free-snap" !== e || h();
    }), n.on("dragged", function() {
        i = n.track.details.abs;
    });
}
function b(n) {
    var t, i, e, r, a, f, p, v, h, m, g, b, x, k, y, w, M, T, C = c();
    function E(t) {
        if (f && v === t.id) {
            var o = D(t);
            if (h) {
                if (!A(t)) return I(t);
                m = o, h = !1, n.emit("dragChecked");
            }
            if (w) return m = o;
            u(t);
            var c = function(t) {
                if (M === -1 / 0 && T === 1 / 0) return t;
                var e = n.track.details, o = e.length, u = e.position, s = d(t, M - u, T - u);
                if (0 === o) return 0;
                if (!n.options.rubberband) return s;
                if (u <= T && u >= M) return t;
                if (u < M && i > 0 || u > T && i < 0) return t;
                var c = (u < M ? u - M : u - T) / o, l = r * o, f = Math.abs(c * l), p = Math.max(0, 1 - f / a * 2);
                return p * p * t;
            }(p(m - o) / r * e);
            i = l(c);
            var x = n.track.details.position;
            (x > M && x < T || x === M && i > 0 || x === T && i < 0) && s(t), g += c, !b && Math.abs(g * r) > 5 && (b = !0), n.track.add(c), m = o, n.emit("dragged");
        }
    }
    function z(t) {
        !f && n.track.details && n.track.details.length && (g = 0, f = !0, b = !1, h = !0, v = t.id, A(t), m = D(t), n.emit("dragStarted"));
    }
    function I(t) {
        f && v === t.idChanged && (f = !1, n.emit("dragEnded"));
    }
    function A(n) {
        var t = L(), i = t ? n.y : n.x, e = t ? n.x : n.y, r = void 0 !== x && void 0 !== k && Math.abs(k - e) <= Math.abs(x - i);
        return x = i, k = e, r;
    }
    function D(n) {
        return L() ? n.y : n.x;
    }
    function L() {
        return n.options.vertical;
    }
    function S() {
        r = n.size, a = L() ? window.innerHeight : window.innerWidth;
        var t = n.track.details;
        t && (M = t.min, T = t.max);
    }
    function O(n) {
        b && (s(n), u(n));
    }
    function _() {
        if (C.purge(), n.options.drag && !n.options.disabled) {
            var i;
            i = n.options.dragSpeed || 1, p = "function" == typeof i ? i : function(n) {
                return n * i;
            }, e = n.options.rtl ? -1 : 1, S(), t = n.container, function() {
                var n = "data-keen-slider-clickable";
                o("[".concat(n, "]:not([").concat(n, "=false])"), t).map(function(n) {
                    C.add(n, "dragstart", s), C.add(n, "mousedown", s), C.add(n, "touchstart", s);
                });
            }(), C.add(t, "dragstart", function(n) {
                u(n);
            }), C.add(t, "click", O, {
                capture: !0
            }), C.input(t, "ksDragStart", z), C.input(t, "ksDrag", E), C.input(t, "ksDragEnd", I), C.input(t, "mousedown", z), C.input(t, "mousemove", E), C.input(t, "mouseleave", I), C.input(t, "mouseup", I), C.input(t, "touchstart", z, {
                passive: !0
            }), C.input(t, "touchmove", E, {
                passive: !1
            }), C.input(t, "touchend", I), C.input(t, "touchcancel", I), C.add(window, "wheel", function(n) {
                f && u(n);
            });
            var r = "data-keen-slider-scrollable";
            o("[".concat(r, "]:not([").concat(r, "=false])"), n.container).map(function(n) {
                return function(n) {
                    var t;
                    C.input(n, "touchstart", function(n) {
                        t = D(n), w = !0, y = !0;
                    }, {
                        passive: !0
                    }), C.input(n, "touchmove", function(i) {
                        var e = L(), r = e ? n.scrollHeight - n.clientHeight : n.scrollWidth - n.clientWidth, a = t - D(i), o = e ? n.scrollTop : n.scrollLeft, s = e && "scroll" === n.style.overflowY || !e && "scroll" === n.style.overflowX;
                        if (t = D(i), (a < 0 && o > 0 || a > 0 && o < r) && y && s) return w = !0;
                        y = !1, u(i), w = !1;
                    }), C.input(n, "touchend", function() {
                        w = !1;
                    });
                }(n);
            });
        }
    }
    n.on("updated", S), n.on("optionsChanged", _), n.on("created", _), n.on("destroyed", C.purge);
}
function x(n) {
    var t, i, e = null;
    function r(t, i, e) {
        n.animator.active ? o(t, i, e) : requestAnimationFrame(function() {
            return o(t, i, e);
        });
    }
    function a() {
        r(!1, !1, i);
    }
    function o(i, r, a) {
        var o = 0, u = n.size, d = n.track.details;
        if (d && t) {
            var l = d.slides;
            t.forEach(function(n, t) {
                if (i) !e && r && s(n, null, a), c(n, null, a);
                else {
                    if (!l[t]) return;
                    var d = l[t].size * u;
                    !e && r && s(n, d, a), c(n, l[t].distance * u - o, a), o += d;
                }
            });
        }
    }
    function u(t) {
        return "performance" === n.options.renderMode ? Math.round(t) : t;
    }
    function s(n, t, i) {
        var e = i ? "height" : "width";
        null !== t && (t = u(t) + "px"), n.style["min-" + e] = t, n.style["max-" + e] = t;
    }
    function c(n, t, i) {
        if (null !== t) {
            t = u(t);
            var e = i ? t : 0;
            t = "translate3d(".concat(i ? 0 : t, "px, ").concat(e, "px, 0)");
        }
        n.style.transform = t, n.style["-webkit-transform"] = t;
    }
    function d() {
        t && (o(!0, !0, i), t = null), n.on("detailsChanged", a, !0);
    }
    function l() {
        r(!1, !0, i);
    }
    function f() {
        d(), i = n.options.vertical, n.options.disabled || "custom" === n.options.renderMode || (e = "auto" === p(n.options.slides, "perView", null), n.on("detailsChanged", a), (t = n.slides).length && l());
    }
    n.on("created", f), n.on("optionsChanged", f), n.on("beforeOptionsChanged", function() {
        d();
    }), n.on("updated", l), n.on("destroyed", d);
}
function k(t, i) {
    return function(e) {
        var r, u, s, d, l, v, h = c();
        function m(n) {
            var t;
            a(e.container, "reverse", "rtl" !== (t = e.container, window.getComputedStyle(t, null).getPropertyValue("direction")) || n ? null : ""), a(e.container, "v", e.options.vertical && !n ? "" : null), a(e.container, "disabled", e.options.disabled && !n ? "" : null);
        }
        function g() {
            b() && M();
        }
        function b() {
            var t = null;
            if (d.forEach(function(n) {
                n.matches && (t = n.__media);
            }), t === r) return !1;
            r || e.emit("beforeOptionsChanged"), r = t;
            var i = t ? s.breakpoints[t] : s;
            return e.options = n(n({}, s), i), m(), I(), A(), C(), !0;
        }
        function x(n) {
            var t = f(n);
            return (e.options.vertical ? t.height : t.width) / e.size || 1;
        }
        function k() {
            return e.options.trackConfig.length;
        }
        function y(t) {
            for(var a in r = !1, s = n(n({}, i), t), h.purge(), u = e.size, d = [], s.breakpoints || []){
                var o = window.matchMedia(a);
                o.__media = a, d.push(o), h.add(o, "change", g);
            }
            h.add(window, "orientationchange", z), h.add(window, "resize", E), b();
        }
        function w(n) {
            e.animator.stop();
            var t = e.track.details;
            e.track.init(null != n ? n : t ? t.abs : 0);
        }
        function M(n) {
            w(n), e.emit("optionsChanged");
        }
        function T(n, t) {
            if (n) return y(n), void M(t);
            I(), A();
            var i = k();
            C(), k() !== i ? M(t) : w(t), e.emit("updated");
        }
        function C() {
            var n = e.options.slides;
            if ("function" == typeof n) return e.options.trackConfig = n(e.size, e.slides);
            for(var t = e.slides, i = t.length, r = "number" == typeof n ? n : p(n, "number", i, !0), a = [], o = p(n, "perView", 1, !0), u = p(n, "spacing", 0, !0) / e.size || 0, s = "auto" === o ? u : u / o, c = p(n, "origin", "auto"), d = 0, l = 0; l < r; l++){
                var f = "auto" === o ? x(t[l]) : 1 / o - u + s, v = "center" === c ? .5 - f / 2 : "auto" === c ? 0 : c;
                a.push({
                    origin: v,
                    size: f,
                    spacing: u
                }), d += f;
            }
            if (d += u * (r - 1), "auto" === c && !e.options.loop && 1 !== o) {
                var h = 0;
                a.map(function(n) {
                    var t = d - h;
                    return h += n.size + u, t >= 1 || (n.origin = 1 - t - (d > 1 ? 0 : 1 - d)), n;
                });
            }
            e.options.trackConfig = a;
        }
        function E() {
            I();
            var n = e.size;
            e.options.disabled || n === u || (u = n, T());
        }
        function z() {
            E(), setTimeout(E, 500), setTimeout(E, 2e3);
        }
        function I() {
            var n = f(e.container);
            e.size = (e.options.vertical ? n.height : n.width) || 1;
        }
        function A() {
            e.slides = o(e.options.selector, e.container);
        }
        e.container = (v = o(t, l || document)).length ? v[0] : null, e.destroy = function() {
            h.purge(), e.emit("destroyed"), m(!0);
        }, e.prev = function() {
            e.moveToIdx(e.track.details.abs - 1, !0);
        }, e.next = function() {
            e.moveToIdx(e.track.details.abs + 1, !0);
        }, e.update = T, y(e.options);
    };
}
var y = function(n, i, e) {
    try {
        return function(n, t) {
            var i, e = {};
            return i = {
                emit: function(n) {
                    e[n] && e[n].forEach(function(n) {
                        n(i);
                    });
                    var t = i.options && i.options[n];
                    t && t(i);
                },
                moveToIdx: function(n, t, e) {
                    var r = i.track.idxToDist(n, t);
                    if (r) {
                        var a = i.options.defaultAnimation;
                        i.animator.start([
                            {
                                distance: r,
                                duration: p(e || a, "duration", 500),
                                easing: p(e || a, "easing", function(n) {
                                    return 1 + --n * n * n * n * n;
                                })
                            }
                        ]);
                    }
                },
                on: function(n, t, i) {
                    void 0 === i && (i = !1), e[n] || (e[n] = []);
                    var r = e[n].indexOf(t);
                    r > -1 ? i && delete e[n][r] : i || e[n].push(t);
                },
                options: n
            }, function() {
                if (i.track = m(i), i.animator = h(i), t) for(var n = 0, e = t; n < e.length; n++)(0, e[n])(i);
                i.track.init(i.options.initial || 0), i.emit("created");
            }(), i;
        }(i, t([
            k(n, {
                drag: !0,
                mode: "snap",
                renderMode: "precision",
                rubberband: !0,
                selector: ".keen-slider__slide"
            }),
            x,
            b,
            g
        ], e || [], !0));
    } catch (n) {
        console.error(n);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aqnbF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _animateEsJs.animate));
var _dom = require("@motionone/dom");
parcelHelpers.exportAll(_dom, exports);
var _types = require("@motionone/types");
parcelHelpers.exportAll(_types, exports);
var _animateEsJs = require("./animate.es.js");

},{"@motionone/dom":false,"@motionone/types":false,"./animate.es.js":"lEsDf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krEZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _indexEsJs.animate));
parcelHelpers.export(exports, "createAnimate", ()=>(0, _createAnimateEsJs.createAnimate));
parcelHelpers.export(exports, "animateStyle", ()=>(0, _animateStyleEsJs.animateStyle));
parcelHelpers.export(exports, "timeline", ()=>(0, _indexEsJs1.timeline));
parcelHelpers.export(exports, "stagger", ()=>(0, _staggerEsJs.stagger));
parcelHelpers.export(exports, "spring", ()=>(0, _indexEsJs2.spring));
parcelHelpers.export(exports, "glide", ()=>(0, _indexEsJs3.glide));
parcelHelpers.export(exports, "style", ()=>(0, _styleEsJs.style));
parcelHelpers.export(exports, "inView", ()=>(0, _inViewEsJs.inView));
parcelHelpers.export(exports, "resize", ()=>(0, _indexEsJs4.resize));
parcelHelpers.export(exports, "scroll", ()=>(0, _indexEsJs5.scroll));
parcelHelpers.export(exports, "ScrollOffset", ()=>(0, _presetsEsJs.ScrollOffset));
parcelHelpers.export(exports, "withControls", ()=>(0, _controlsEsJs.withControls));
parcelHelpers.export(exports, "getAnimationData", ()=>(0, _dataEsJs.getAnimationData));
parcelHelpers.export(exports, "getStyleName", ()=>(0, _getStyleNameEsJs.getStyleName));
parcelHelpers.export(exports, "createMotionState", ()=>(0, _indexEsJs6.createMotionState));
parcelHelpers.export(exports, "mountedStates", ()=>(0, _indexEsJs6.mountedStates));
parcelHelpers.export(exports, "createStyles", ()=>(0, _styleObjectEsJs.createStyles));
parcelHelpers.export(exports, "createStyleString", ()=>(0, _styleStringEsJs.createStyleString));
var _indexEsJs = require("./animate/index.es.js");
var _createAnimateEsJs = require("./animate/create-animate.es.js");
var _animateStyleEsJs = require("./animate/animate-style.es.js");
var _indexEsJs1 = require("./timeline/index.es.js");
var _staggerEsJs = require("./utils/stagger.es.js");
var _indexEsJs2 = require("./easing/spring/index.es.js");
var _indexEsJs3 = require("./easing/glide/index.es.js");
var _styleEsJs = require("./animate/style.es.js");
var _inViewEsJs = require("./gestures/in-view.es.js");
var _indexEsJs4 = require("./gestures/resize/index.es.js");
var _indexEsJs5 = require("./gestures/scroll/index.es.js");
var _presetsEsJs = require("./gestures/scroll/offsets/presets.es.js");
var _controlsEsJs = require("./animate/utils/controls.es.js");
var _dataEsJs = require("./animate/data.es.js");
var _getStyleNameEsJs = require("./animate/utils/get-style-name.es.js");
var _indexEsJs6 = require("./state/index.es.js");
var _styleObjectEsJs = require("./animate/utils/style-object.es.js");
var _styleStringEsJs = require("./animate/utils/style-string.es.js");

},{"./animate/index.es.js":"4V5Bk","./animate/create-animate.es.js":false,"./animate/animate-style.es.js":false,"./timeline/index.es.js":false,"./utils/stagger.es.js":false,"./easing/spring/index.es.js":false,"./easing/glide/index.es.js":false,"./animate/style.es.js":false,"./gestures/in-view.es.js":false,"./gestures/resize/index.es.js":false,"./gestures/scroll/index.es.js":false,"./gestures/scroll/offsets/presets.es.js":false,"./animate/utils/controls.es.js":"39ePr","./animate/data.es.js":false,"./animate/utils/get-style-name.es.js":false,"./state/index.es.js":false,"./animate/utils/style-object.es.js":false,"./animate/utils/style-string.es.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4V5Bk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
var _animation = require("@motionone/animation");
var _createAnimateEsJs = require("./create-animate.es.js");
const animate = (0, _createAnimateEsJs.createAnimate)((0, _animation.Animation));

},{"@motionone/animation":"ebY3Z","./create-animate.es.js":"acg4f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebY3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>(0, _animationEsJs.Animation));
parcelHelpers.export(exports, "getEasingFunction", ()=>(0, _easingEsJs.getEasingFunction));
var _animationEsJs = require("./Animation.es.js");
var _easingEsJs = require("./utils/easing.es.js");

},{"./Animation.es.js":"lESA9","./utils/easing.es.js":"ajTA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lESA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>Animation);
var _utils = require("@motionone/utils");
var _easingEsJs = require("./utils/easing.es.js");
class Animation {
    constructor(output, keyframes = [
        0,
        1
    ], { easing, duration: initialDuration = (0, _utils.defaults).duration, delay = (0, _utils.defaults).delay, endDelay = (0, _utils.defaults).endDelay, repeat = (0, _utils.defaults).repeat, offset, direction = "normal" } = {}){
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = (0, _utils.noopReturn);
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || (0, _utils.defaults).easing;
        if ((0, _utils.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = (0, _utils.isEasingList)(easing) ? (0, _utils.noopReturn) : (0, _easingEsJs.getEasingFunction)(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = (0, _utils.interpolate)(keyframes, offset, (0, _utils.isEasingList)(easing) ? easing.map((0, _easingEsJs.getEasingFunction)) : (0, _utils.noopReturn));
        this.tick = (timestamp)=>{
            var _a;
            // TODO: Temporary fix for OptionsResolver typing
            delay;
            let t = 0;
            if (this.pauseTime !== undefined) t = this.pauseTime;
            else t = (timestamp - this.startTime) * this.rate;
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */ if (this.playState === "finished" && this.pauseTime === undefined) t = this.totalDuration;
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) iterationProgress = 1;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) iterationProgress = 1 - iterationProgress;
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined && (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 || _a.call(this, latest);
            } else if (this.playState !== "idle") this.frameRequestId = requestAnimationFrame(this.tick);
        };
        this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) this.startTime = now - this.pauseTime;
        else if (!this.startTime) this.startTime = now;
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) cancelAnimationFrame(this.frameRequestId);
        (_a = this.reject) === null || _a === void 0 || _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() {}
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) this.pauseTime = t;
        else this.startTime = performance.now() - t / this.rate;
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}

},{"@motionone/utils":"krBNu","./utils/easing.es.js":"ajTA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krBNu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>(0, _arrayEsJs.addUniqueItem));
parcelHelpers.export(exports, "removeItem", ()=>(0, _arrayEsJs.removeItem));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampEsJs.clamp));
parcelHelpers.export(exports, "defaults", ()=>(0, _defaultsEsJs.defaults));
parcelHelpers.export(exports, "getEasingForSegment", ()=>(0, _easingEsJs.getEasingForSegment));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateEsJs.interpolate));
parcelHelpers.export(exports, "isCubicBezier", ()=>(0, _isCubicBezierEsJs.isCubicBezier));
parcelHelpers.export(exports, "isEasingGenerator", ()=>(0, _isEasingGeneratorEsJs.isEasingGenerator));
parcelHelpers.export(exports, "isEasingList", ()=>(0, _isEasingListEsJs.isEasingList));
parcelHelpers.export(exports, "isFunction", ()=>(0, _isFunctionEsJs.isFunction));
parcelHelpers.export(exports, "isNumber", ()=>(0, _isNumberEsJs.isNumber));
parcelHelpers.export(exports, "isString", ()=>(0, _isStringEsJs.isString));
parcelHelpers.export(exports, "mix", ()=>(0, _mixEsJs.mix));
parcelHelpers.export(exports, "noop", ()=>(0, _noopEsJs.noop));
parcelHelpers.export(exports, "noopReturn", ()=>(0, _noopEsJs.noopReturn));
parcelHelpers.export(exports, "defaultOffset", ()=>(0, _offsetEsJs.defaultOffset));
parcelHelpers.export(exports, "fillOffset", ()=>(0, _offsetEsJs.fillOffset));
parcelHelpers.export(exports, "progress", ()=>(0, _progressEsJs.progress));
parcelHelpers.export(exports, "time", ()=>(0, _timeEsJs.time));
parcelHelpers.export(exports, "velocityPerSecond", ()=>(0, _velocityEsJs.velocityPerSecond));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapEsJs.wrap));
var _arrayEsJs = require("./array.es.js");
var _clampEsJs = require("./clamp.es.js");
var _defaultsEsJs = require("./defaults.es.js");
var _easingEsJs = require("./easing.es.js");
var _interpolateEsJs = require("./interpolate.es.js");
var _isCubicBezierEsJs = require("./is-cubic-bezier.es.js");
var _isEasingGeneratorEsJs = require("./is-easing-generator.es.js");
var _isEasingListEsJs = require("./is-easing-list.es.js");
var _isFunctionEsJs = require("./is-function.es.js");
var _isNumberEsJs = require("./is-number.es.js");
var _isStringEsJs = require("./is-string.es.js");
var _mixEsJs = require("./mix.es.js");
var _noopEsJs = require("./noop.es.js");
var _offsetEsJs = require("./offset.es.js");
var _progressEsJs = require("./progress.es.js");
var _timeEsJs = require("./time.es.js");
var _velocityEsJs = require("./velocity.es.js");
var _wrapEsJs = require("./wrap.es.js");

},{"./array.es.js":"lV7u8","./clamp.es.js":"eARWM","./defaults.es.js":"4Xx6A","./easing.es.js":false,"./interpolate.es.js":"dDlur","./is-cubic-bezier.es.js":"hF8Ai","./is-easing-generator.es.js":"jOIrz","./is-easing-list.es.js":"gFRon","./is-function.es.js":"8kyHJ","./is-number.es.js":"3cDKd","./is-string.es.js":"8dcJ3","./mix.es.js":false,"./noop.es.js":"cIUEQ","./offset.es.js":false,"./progress.es.js":"3PqyP","./time.es.js":"98Uct","./velocity.es.js":false,"./wrap.es.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lV7u8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>addUniqueItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eARWM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>Math.min(Math.max(v, min), max);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xx6A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults);
const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9U1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingForSegment", ()=>getEasingForSegment);
var _isEasingListEsJs = require("./is-easing-list.es.js");
var _wrapEsJs = require("./wrap.es.js");
function getEasingForSegment(easing, i) {
    return (0, _isEasingListEsJs.isEasingList)(easing) ? easing[(0, _wrapEsJs.wrap)(0, easing.length, i)] : easing;
}

},{"./is-easing-list.es.js":"gFRon","./wrap.es.js":"1iRdr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gFRon":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingList", ()=>isEasingList);
var _isNumberEsJs = require("./is-number.es.js");
const isEasingList = (easing)=>Array.isArray(easing) && !(0, _isNumberEsJs.isNumber)(easing[0]);

},{"./is-number.es.js":"3cDKd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cDKd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
const isNumber = (value)=>typeof value === "number";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1iRdr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wrap", ()=>wrap);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDlur":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _mixEsJs = require("./mix.es.js");
var _noopEsJs = require("./noop.es.js");
var _offsetEsJs = require("./offset.es.js");
var _progressEsJs = require("./progress.es.js");
var _easingEsJs = require("./easing.es.js");
var _clampEsJs = require("./clamp.es.js");
function interpolate(output, input = (0, _offsetEsJs.defaultOffset)(output.length), easing = (0, _noopEsJs.noopReturn)) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */ const remainder = length - input.length;
    remainder > 0 && (0, _offsetEsJs.fillOffset)(input, remainder);
    return (t)=>{
        let i = 0;
        for(; i < length - 2; i++){
            if (t < input[i + 1]) break;
        }
        let progressInRange = (0, _clampEsJs.clamp)(0, 1, (0, _progressEsJs.progress)(input[i], input[i + 1], t));
        const segmentEasing = (0, _easingEsJs.getEasingForSegment)(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return (0, _mixEsJs.mix)(output[i], output[i + 1], progressInRange);
    };
}

},{"./mix.es.js":"Y3RWW","./noop.es.js":"cIUEQ","./offset.es.js":"4q1NU","./progress.es.js":"3PqyP","./easing.es.js":"b9U1C","./clamp.es.js":"eARWM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y3RWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
const mix = (min, max, progress)=>-progress * min + progress * max + min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIUEQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "noopReturn", ()=>noopReturn);
const noop = ()=>{};
const noopReturn = (v)=>v;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q1NU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
parcelHelpers.export(exports, "fillOffset", ()=>fillOffset);
var _mixEsJs = require("./mix.es.js");
var _progressEsJs = require("./progress.es.js");
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, _progressEsJs.progress)(0, remaining, i);
        offset.push((0, _mixEsJs.mix)(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [
        0
    ];
    fillOffset(offset, length - 1);
    return offset;
}

},{"./mix.es.js":"Y3RWW","./progress.es.js":"3PqyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PqyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (min, max, value)=>max - min === 0 ? 1 : (value - min) / (max - min);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hF8Ai":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCubicBezier", ()=>isCubicBezier);
var _isNumberEsJs = require("./is-number.es.js");
const isCubicBezier = (easing)=>Array.isArray(easing) && (0, _isNumberEsJs.isNumber)(easing[0]);

},{"./is-number.es.js":"3cDKd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOIrz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingGenerator", ()=>isEasingGenerator);
const isEasingGenerator = (easing)=>typeof easing === "object" && Boolean(easing.createAnimation);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kyHJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
const isFunction = (value)=>typeof value === "function";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dcJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isString", ()=>isString);
const isString = (value)=>typeof value === "string";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98Uct":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
const time = {
    ms: (seconds)=>seconds * 1000,
    s: (milliseconds)=>milliseconds / 1000
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajTA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingFunction", ()=>getEasingFunction);
var _easing = require("@motionone/easing");
var _utils = require("@motionone/utils");
const namedEasings = {
    ease: (0, _easing.cubicBezier)(0.25, 0.1, 0.25, 1.0),
    "ease-in": (0, _easing.cubicBezier)(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": (0, _easing.cubicBezier)(0.42, 0.0, 0.58, 1.0),
    "ease-out": (0, _easing.cubicBezier)(0.0, 0.0, 0.58, 1.0)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
    // If already an easing function, return
    if ((0, _utils.isFunction)(definition)) return definition;
    // If an easing curve definition, return bezier function
    if ((0, _utils.isCubicBezier)(definition)) return (0, _easing.cubicBezier)(...definition);
    // If we have a predefined easing function, return
    if (namedEasings[definition]) return namedEasings[definition];
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return (0, _easing.steps)(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return 0, _utils.noopReturn;
}

},{"@motionone/easing":"k1EJx","@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1EJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierEsJs.cubicBezier));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsEsJs.steps));
var _cubicBezierEsJs = require("./cubic-bezier.es.js");
var _stepsEsJs = require("./steps.es.js");

},{"./cubic-bezier.es.js":"ajXFr","./steps.es.js":"gpf57","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajXFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var _utils = require("@motionone/utils");
/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, _utils.noopReturn;
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gpf57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "steps", ()=>steps);
var _utils = require("@motionone/utils");
const steps = (steps, direction = "end")=>(progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * steps;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, _utils.clamp)(0, 1, rounded / steps);
    };

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acg4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnimate", ()=>createAnimate);
var _heyListen = require("hey-listen");
var _animateStyleEsJs = require("./animate-style.es.js");
var _optionsEsJs = require("./utils/options.es.js");
var _resolveElementsEsJs = require("../utils/resolve-elements.es.js");
var _controlsEsJs = require("./utils/controls.es.js");
var _staggerEsJs = require("../utils/stagger.es.js");
function createAnimate(AnimatePolyfill) {
    return function animate(elements, keyframes, options = {}) {
        elements = (0, _resolveElementsEsJs.resolveElements)(elements);
        const numElements = elements.length;
        (0, _heyListen.invariant)(Boolean(numElements), "No valid element provided.");
        (0, _heyListen.invariant)(Boolean(keyframes), "No keyframes defined.");
        /**
         * Create and start new animations
         */ const animationFactories = [];
        for(let i = 0; i < numElements; i++){
            const element = elements[i];
            for(const key in keyframes){
                const valueOptions = (0, _optionsEsJs.getOptions)(options, key);
                valueOptions.delay = (0, _staggerEsJs.resolveOption)(valueOptions.delay, i, numElements);
                const animation = (0, _animateStyleEsJs.animateStyle)(element, key, keyframes[key], valueOptions, AnimatePolyfill);
                animationFactories.push(animation);
            }
        }
        return (0, _controlsEsJs.withControls)(animationFactories, options, /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */ options.duration);
    };
}

},{"hey-listen":"8yK8Z","./animate-style.es.js":"3Iur2","./utils/options.es.js":"fCKN3","../utils/resolve-elements.es.js":"KZgGT","./utils/controls.es.js":"39ePr","../utils/stagger.es.js":"ihQdi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yK8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var warning = function() {};
var invariant = function() {};
warning = function(check, message) {
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = function(check, message) {
    if (!check) throw new Error(message);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Iur2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateStyle", ()=>animateStyle);
var _dataEsJs = require("./data.es.js");
var _cssVarEsJs = require("./utils/css-var.es.js");
var _utils = require("@motionone/utils");
var _transformsEsJs = require("./utils/transforms.es.js");
var _easingEsJs = require("./utils/easing.es.js");
var _featureDetectionEsJs = require("./utils/feature-detection.es.js");
var _keyframesEsJs = require("./utils/keyframes.es.js");
var _styleEsJs = require("./style.es.js");
var _getStyleNameEsJs = require("./utils/get-style-name.es.js");
var _stopAnimationEsJs = require("./utils/stop-animation.es.js");
var _getUnitEsJs = require("./utils/get-unit.es.js");
function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = (0, _utils.defaults).duration, delay = (0, _utils.defaults).delay, endDelay = (0, _utils.defaults).endDelay, repeat = (0, _utils.defaults).repeat, easing = (0, _utils.defaults).easing, persist = false, direction, offset, allowWebkitAcceleration = false } = options;
    const data = (0, _dataEsJs.getAnimationData)(element);
    const valueIsTransform = (0, _transformsEsJs.isTransform)(key);
    let canAnimateNatively = (0, _featureDetectionEsJs.supports).waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */ valueIsTransform && (0, _transformsEsJs.addTransformToElement)(element, key);
    const name = (0, _getStyleNameEsJs.getStyleName)(key);
    const motionValue = (0, _dataEsJs.getMotionValue)(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */ const definition = (0, _transformsEsJs.transformDefinitions).get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */ (0, _stopAnimationEsJs.stopAnimation)(motionValue.animation, !((0, _utils.isEasingGenerator)(easing) && motionValue.generator) && options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */ return ()=>{
        const readInitialValue = ()=>{
            var _a, _b;
            return (_b = (_a = (0, _styleEsJs.style).get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
        };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */ let keyframes = (0, _keyframesEsJs.hydrateKeyframes)((0, _keyframesEsJs.keyframesList)(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */ const toUnit = (0, _getUnitEsJs.getUnitConverter)(keyframes, definition);
        if ((0, _utils.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */ if ((0, _cssVarEsJs.isCssVar)(name)) {
            if ((0, _featureDetectionEsJs.supports).cssRegisterProperty()) (0, _cssVarEsJs.registerCssVariable)(name);
            else canAnimateNatively = false;
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */ if (valueIsTransform && !(0, _featureDetectionEsJs.supports).linearEasing() && ((0, _utils.isFunction)(easing) || (0, _utils.isEasingList)(easing) && easing.some((0, _utils.isFunction)))) canAnimateNatively = false;
        /**
         * If we can animate this value with WAAPI, do so.
         */ if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */ if (definition) keyframes = keyframes.map((value)=>(0, _utils.isNumber)(value) ? definition.toDefaultUnit(value) : value);
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */ if (keyframes.length === 1 && (!(0, _featureDetectionEsJs.supports).partialKeyframes() || isRecording)) keyframes.unshift(readInitialValue());
            const animationOptions = {
                delay: (0, _utils.time).ms(delay),
                duration: (0, _utils.time).ms(duration),
                endDelay: (0, _utils.time).ms(endDelay),
                easing: !(0, _utils.isEasingList)(easing) ? (0, _easingEsJs.convertEasing)(easing, duration) : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both"
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: (0, _utils.isEasingList)(easing) ? easing.map((thisEasing)=>(0, _easingEsJs.convertEasing)(thisEasing, duration)) : undefined
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */ if (!animation.finished) animation.finished = new Promise((resolve, reject)=>{
                animation.onfinish = resolve;
                animation.oncancel = reject;
            });
            const target = keyframes[keyframes.length - 1];
            animation.finished.then(()=>{
                if (persist) return;
                // Apply styles to target
                (0, _styleEsJs.style).set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            }).catch((0, _utils.noop));
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */ if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
        /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */ } else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */ keyframes = keyframes.map((value)=>typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */ if (keyframes.length === 1) keyframes.unshift(parseFloat(readInitialValue()));
            animation = new AnimationPolyfill((latest)=>{
                (0, _styleEsJs.style).set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), {
                duration,
                easing
            }));
        } else {
            const target = keyframes[keyframes.length - 1];
            (0, _styleEsJs.style).set(element, name, definition && (0, _utils.isNumber)(target) ? definition.toDefaultUnit(target) : target);
        }
        if (isRecording) record(element, key, keyframes, {
            duration,
            delay: delay,
            easing,
            repeat,
            offset
        }, "motion-one");
        motionValue.setAnimation(animation);
        return animation;
    };
}

},{"./data.es.js":"jdGoo","./utils/css-var.es.js":"eE8uy","@motionone/utils":"krBNu","./utils/transforms.es.js":"3akS9","./utils/easing.es.js":"45L34","./utils/feature-detection.es.js":"98zUZ","./utils/keyframes.es.js":"e1Tay","./style.es.js":"gYtky","./utils/get-style-name.es.js":"ksBTX","./utils/stop-animation.es.js":"jktqe","./utils/get-unit.es.js":"ldpTn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdGoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnimationData", ()=>getAnimationData);
parcelHelpers.export(exports, "getMotionValue", ()=>getMotionValue);
var _types = require("@motionone/types");
const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) data.set(element, {
        transforms: [],
        values: new Map()
    });
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) motionValues.set(name, new (0, _types.MotionValue)());
    return motionValues.get(name);
}

},{"@motionone/types":"6rLrg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rLrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>(0, _motionValueEsJs.MotionValue));
var _motionValueEsJs = require("./MotionValue.es.js");

},{"./MotionValue.es.js":"alVre","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alVre":[function(require,module,exports) {
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>MotionValue);
class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 || animation.finished.then(()=>this.clearAnimation()).catch(()=>{});
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eE8uy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCssVar", ()=>isCssVar);
parcelHelpers.export(exports, "registerCssVariable", ()=>registerCssVariable);
parcelHelpers.export(exports, "registeredProperties", ()=>registeredProperties);
var _transformsEsJs = require("./transforms.es.js");
const isCssVar = (name)=>name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name)) return;
    registeredProperties.add(name);
    try {
        const { syntax, initialValue } = (0, _transformsEsJs.transformDefinitions).has(name) ? (0, _transformsEsJs.transformDefinitions).get(name) : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue
        });
    } catch (e) {}
}

},{"./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3akS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addTransformToElement", ()=>addTransformToElement);
parcelHelpers.export(exports, "asTransformCssVar", ()=>asTransformCssVar);
parcelHelpers.export(exports, "axes", ()=>axes);
parcelHelpers.export(exports, "buildTransformTemplate", ()=>buildTransformTemplate);
parcelHelpers.export(exports, "compareTransformOrder", ()=>compareTransformOrder);
parcelHelpers.export(exports, "isTransform", ()=>isTransform);
parcelHelpers.export(exports, "transformAlias", ()=>transformAlias);
parcelHelpers.export(exports, "transformDefinitions", ()=>transformDefinitions);
var _utils = require("@motionone/utils");
var _dataEsJs = require("../data.es.js");
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */ const axes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */ const order = [
    "translate",
    "scale",
    "rotate",
    "skew"
];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v)=>v + "deg"
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v)=>v + "px"
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: (0, _utils.noopReturn)
    },
    skew: rotation
};
const transformDefinitions = new Map();
const asTransformCssVar = (name)=>`--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */ const transforms = [
    "x",
    "y",
    "z"
];
order.forEach((name)=>{
    axes.forEach((axis)=>{
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */ const compareTransformOrder = (a, b)=>transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */ const transformLookup = new Set(transforms);
const isTransform = (name)=>transformLookup.has(name);
const addTransformToElement = (element, name)=>{
    // Map x to translateX etc
    if (transformAlias[name]) name = transformAlias[name];
    const { transforms } = (0, _dataEsJs.getAnimationData)(element);
    (0, _utils.addUniqueItem)(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */ element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms)=>transforms.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name)=>`${template} ${name}(var(${asTransformCssVar(name)}))`;

},{"@motionone/utils":"krBNu","../data.es.js":"jdGoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45L34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertEasing", ()=>convertEasing);
parcelHelpers.export(exports, "cubicBezierAsString", ()=>cubicBezierAsString);
parcelHelpers.export(exports, "generateLinearEasingPoints", ()=>generateLinearEasingPoints);
var _utils = require("@motionone/utils");
var _featureDetectionEsJs = require("./feature-detection.es.js");
// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration)=>{
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for(let i = 0; i < numPoints; i++)points += easing((0, _utils.progress)(0, numPoints - 1, i)) + ", ";
    return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration)=>{
    if ((0, _utils.isFunction)(easing)) return (0, _featureDetectionEsJs.supports).linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : (0, _utils.defaults).easing;
    else return (0, _utils.isCubicBezier)(easing) ? cubicBezierAsString(easing) : easing;
};
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;

},{"@motionone/utils":"krBNu","./feature-detection.es.js":"98zUZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98zUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supports", ()=>supports);
const testAnimation = (keyframes, options)=>document.createElement("div").animate(keyframes, options);
const featureTests = {
    cssRegisterProperty: ()=>typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: ()=>{
        try {
            testAnimation({
                opacity: [
                    1
                ]
            });
        } catch (e) {
            return false;
        }
        return true;
    },
    finished: ()=>Boolean(testAnimation({
            opacity: [
                0,
                1
            ]
        }, {
            duration: 0.001
        }).finished),
    linearEasing: ()=>{
        try {
            testAnimation({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            });
        } catch (e) {
            return false;
        }
        return true;
    }
};
const results = {};
const supports = {};
for(const key in featureTests)supports[key] = ()=>{
    if (results[key] === undefined) results[key] = featureTests[key]();
    return results[key];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1Tay":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hydrateKeyframes", ()=>hydrateKeyframes);
parcelHelpers.export(exports, "keyframesList", ()=>keyframesList);
function hydrateKeyframes(keyframes, readInitialValue) {
    for(let i = 0; i < keyframes.length; i++)if (keyframes[i] === null) keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    return keyframes;
}
const keyframesList = (keyframes)=>Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYtky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "style", ()=>style);
var _cssVarEsJs = require("./utils/css-var.es.js");
var _getStyleNameEsJs = require("./utils/get-style-name.es.js");
var _transformsEsJs = require("./utils/transforms.es.js");
const style = {
    get: (element, name)=>{
        name = (0, _getStyleNameEsJs.getStyleName)(name);
        let value = (0, _cssVarEsJs.isCssVar)(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
        if (!value && value !== 0) {
            const definition = (0, _transformsEsJs.transformDefinitions).get(name);
            if (definition) value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value)=>{
        name = (0, _getStyleNameEsJs.getStyleName)(name);
        if ((0, _cssVarEsJs.isCssVar)(name)) element.style.setProperty(name, value);
        else element.style[name] = value;
    }
};

},{"./utils/css-var.es.js":"eE8uy","./utils/get-style-name.es.js":"ksBTX","./utils/transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksBTX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStyleName", ()=>getStyleName);
var _transformsEsJs = require("./transforms.es.js");
function getStyleName(key) {
    if ((0, _transformsEsJs.transformAlias)[key]) key = (0, _transformsEsJs.transformAlias)[key];
    return (0, _transformsEsJs.isTransform)(key) ? (0, _transformsEsJs.asTransformCssVar)(key) : key;
}

},{"./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jktqe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stopAnimation", ()=>stopAnimation);
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished") return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) animation.stop();
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    } catch (e) {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldpTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUnitConverter", ()=>getUnitConverter);
var _utils = require("@motionone/utils");
function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || (0, _utils.noopReturn);
    const finalKeyframe = keyframes[keyframes.length - 1];
    if ((0, _utils.isString)(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit) toUnit = (value)=>value + unit;
    }
    return toUnit;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCKN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptions", ()=>getOptions);
const getOptions = (options, key)=>/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */ options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"KZgGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveElements", ()=>resolveElements);
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
            elements = selectorCache[elements];
        } else elements = document.querySelectorAll(elements);
    } else if (elements instanceof Element) elements = [
        elements
    ];
    /**
     * Return an empty array
     */ return Array.from(elements || []);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39ePr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "controls", ()=>controls);
parcelHelpers.export(exports, "withControls", ()=>withControls);
var _utils = require("@motionone/utils");
var _stopAnimationEsJs = require("./stop-animation.es.js");
const createAnimation = (factory)=>factory();
const withControls = (animationFactory, options, duration = (0, _utils.defaults).duration)=>{
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */ const getActiveAnimation = (state)=>state.animations[0];
const controls = {
    get: (target, key)=>{
        const activeAnimation = getActiveAnimation(target);
        switch(key){
            case "duration":
                return target.duration;
            case "currentTime":
                return (0, _utils.time).s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) target.finished = Promise.all(target.animations.map(selectFinished)).catch((0, _utils.noop));
                return target.finished;
            case "stop":
                return ()=>{
                    target.animations.forEach((animation)=>(0, _stopAnimationEsJs.stopAnimation)(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */ return (callback)=>{
                    target.animations.forEach((animation)=>callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : ()=>target.animations.forEach((animation)=>animation[key]());
        }
    },
    set: (target, key, value)=>{
        switch(key){
            case "currentTime":
                value = (0, _utils.time).ms(value);
            // Fall-through
            case "playbackRate":
                for(let i = 0; i < target.animations.length; i++)target.animations[i][key] = value;
                return true;
        }
        return false;
    }
};
const selectFinished = (animation)=>animation.finished;

},{"@motionone/utils":"krBNu","./stop-animation.es.js":"jktqe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ihQdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFromIndex", ()=>getFromIndex);
parcelHelpers.export(exports, "resolveOption", ()=>resolveOption);
parcelHelpers.export(exports, "stagger", ()=>stagger);
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function stagger(duration = 0.1, { start = 0, from = 0, easing } = {}) {
    return (i, total)=>{
        const fromIndex = (0, _utils.isNumber)(from) ? from : getFromIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = (0, _animation.getEasingFunction)(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function getFromIndex(from, total) {
    if (from === "first") return 0;
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function resolveOption(option, i, total) {
    return (0, _utils.isFunction)(option) ? option(i, total) : option;
}

},{"@motionone/utils":"krBNu","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEsDf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "animateProgress", ()=>animateProgress);
var _dom = require("@motionone/dom");
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function animateProgress(target, options = {}) {
    return (0, _dom.withControls)([
        ()=>{
            const animation = new (0, _animation.Animation)(target, [
                0,
                1
            ], options);
            animation.finished.catch(()=>{});
            return animation;
        }
    ], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
    const factory = (0, _utils.isFunction)(target) ? animateProgress : (0, _dom.animate);
    return factory(target, keyframesOrOptions, options);
}

},{"@motionone/dom":"krEZT","@motionone/utils":"krBNu","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94idb":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(typeof self !== "undefined" ? self : this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                /******/ configurable: false,
                /******/ enumerable: true,
                /******/ get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/ }({
        /***/ "./dist/icons.json": /*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/ /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */ /***/ function(module1) {
            module1.exports = {
                "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                "airplay": '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                "anchor": '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                "aperture": '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                "archive": '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                "award": '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                "battery": '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "bell": '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                "bluetooth": '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                "bold": '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                "bookmark": '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                "box": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                "cast": '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                "check": '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                "chrome": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                "circle": '<circle cx="12" cy="12" r="10"></circle>',
                "clipboard": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                "clock": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                "code": '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                "codepen": '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                "codesandbox": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                "columns": '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                "command": '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                "compass": '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                "cpu": '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                "crop": '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                "crosshair": '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                "database": '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                "delete": '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                "disc": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                "divide": '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                "dribbble": '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                "edit": '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "eye": '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                "feather": '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                "figma": '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                "file": '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                "film": '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                "framer": '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                "frown": '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                "gift": '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                "github": '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                "gitlab": '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                "globe": '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                "grid": '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                "hash": '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                "headphones": '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "hexagon": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                "home": '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                "image": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                "inbox": '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                "info": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                "instagram": '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                "italic": '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                "key": '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                "layers": '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                "layout": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                "list": '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                "loader": '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                "lock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                "mail": '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                "meh": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                "menu": '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                "minimize": '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus": '<line x1="5" y1="12" x2="19" y2="12"></line>',
                "monitor": '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                "move": '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                "music": '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                "navigation": '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                "octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                "package": '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                "pause": '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                "percent": '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                "play": '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus": '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                "pocket": '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                "power": '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                "printer": '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                "radio": '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                "repeat": '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                "rewind": '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                "rss": '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                "save": '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                "scissors": '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                "search": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                "send": '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                "server": '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                "settings": '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                "share": '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                "shuffle": '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                "sidebar": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                "slack": '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                "slash": '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                "sliders": '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                "smile": '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                "speaker": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                "square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                "sun": '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                "sunrise": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                "sunset": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                "table": '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',
                "tablet": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                "target": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                "terminal": '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                "trash": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                "trello": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                "triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                "truck": '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                "tv": '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                "twitch": '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"></path>',
                "twitter": '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                "type": '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                "umbrella": '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                "underline": '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                "unlock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "video": '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                "voicemail": '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                "volume": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                "watch": '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                "wifi": '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                "wind": '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                "x": '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                "youtube": '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
            };
        /***/ },
        /***/ "./node_modules/classnames/dedupe.js": /*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ 
            /* global define */ (function() {
                "use strict";
                var classNames = function() {
                    // don't inherit from Object so we can skip hasOwnProperty check later
                    // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
                    function StorageObject() {}
                    StorageObject.prototype = Object.create(null);
                    function _parseArray(resultSet, array) {
                        var length = array.length;
                        for(var i = 0; i < length; ++i)_parse(resultSet, array[i]);
                    }
                    var hasOwn = {}.hasOwnProperty;
                    function _parseNumber(resultSet, num) {
                        resultSet[num] = true;
                    }
                    function _parseObject(resultSet, object) {
                        for(var k in object)if (hasOwn.call(object, k)) // set value to false instead of deleting it to avoid changing object structure
                        // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
                        resultSet[k] = !!object[k];
                    }
                    var SPACE = /\s+/;
                    function _parseString(resultSet, str) {
                        var array = str.split(SPACE);
                        var length = array.length;
                        for(var i = 0; i < length; ++i)resultSet[array[i]] = true;
                    }
                    function _parse(resultSet, arg) {
                        if (!arg) return;
                        var argType = typeof arg;
                        // 'foo bar'
                        if (argType === "string") _parseString(resultSet, arg);
                        else if (Array.isArray(arg)) _parseArray(resultSet, arg);
                        else if (argType === "object") _parseObject(resultSet, arg);
                        else if (argType === "number") _parseNumber(resultSet, arg);
                    }
                    function _classNames() {
                        // don't leak arguments
                        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
                        var len = arguments.length;
                        var args = Array(len);
                        for(var i = 0; i < len; i++)args[i] = arguments[i];
                        var classSet = new StorageObject();
                        _parseArray(classSet, args);
                        var list = [];
                        for(var k in classSet)if (classSet[k]) list.push(k);
                        return list.join(" ");
                    }
                    return _classNames;
                }();
                if (typeof module1 !== "undefined" && module1.exports) module1.exports = classNames;
                else // register as 'classnames', consistent with npm package name
                __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return classNames;
                }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            })();
        /***/ },
        /***/ "./node_modules/core-js/es/array/from.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
            __webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
            var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");
            module1.exports = path.Array.from;
        /***/ },
        /***/ "./node_modules/core-js/internals/a-function.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != "function") throw TypeError(String(it) + " is not a function");
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/an-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            module1.exports = function(it) {
                if (!isObject(it)) throw TypeError(String(it) + " is not an object");
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/array-from.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
            var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
            var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
            var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
            var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
            var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
            var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
            // `Array.from` method
            // https://tc39.github.io/ecma262/#sec-array.from
            module1.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
                var O = toObject(arrayLike);
                var C = typeof this == "function" ? this : Array;
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var index = 0;
                var iteratorMethod = getIteratorMethod(O);
                var length, result, step, iterator;
                if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
                // if the target is not iterable or it's an array with the default iterator - use a simple case
                if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                    iterator = iteratorMethod.call(O);
                    result = new C();
                    for(; !(step = iterator.next()).done; index++)createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                        step.value,
                        index
                    ], true) : step.value);
                } else {
                    length = toLength(O.length);
                    result = new C(length);
                    for(; length > index; index++)createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                }
                result.length = index;
                return result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/array-includes.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
            var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
            // `Array.prototype.{ indexOf, includes }` methods implementation
            // false -> Array#indexOf
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            // true  -> Array#includes
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            module1.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el) while(length > index){
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                    }
                    else for(; length > index; index++)if (IS_INCLUDES || index in O) {
                        if (O[index] === el) return IS_INCLUDES || index || 0;
                    }
                    return !IS_INCLUDES && -1;
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/bind-context.js": /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
            // optional / simple context binding
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 0:
                        return function() {
                            return fn.call(that);
                        };
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": /*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            // call something on iterator step with safe closing on error
            module1.exports = function(iterator, fn, value, ENTRIES) {
                try {
                    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
                } catch (error) {
                    var returnMethod = iterator["return"];
                    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
                    throw error;
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js": /*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var ITERATOR = wellKnownSymbol("iterator");
            var SAFE_CLOSING = false;
            try {
                var called = 0;
                var iteratorWithReturn = {
                    next: function() {
                        return {
                            done: !!called++
                        };
                    },
                    "return": function() {
                        SAFE_CLOSING = true;
                    }
                };
                iteratorWithReturn[ITERATOR] = function() {
                    return this;
                };
                // eslint-disable-next-line no-throw-literal
                Array.from(iteratorWithReturn, function() {
                    throw 2;
                });
            } catch (error) {}
            module1.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                var ITERATION_SUPPORT = false;
                try {
                    var object = {};
                    object[ITERATOR] = function() {
                        return {
                            next: function() {
                                return {
                                    done: ITERATION_SUPPORT = true
                                };
                            }
                        };
                    };
                    exec(object);
                } catch (error) {}
                return ITERATION_SUPPORT;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/classof-raw.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var toString = {}.toString;
            module1.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/classof.js": /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            // ES3 wrong here
            var CORRECT_ARGUMENTS = classofRaw(function() {
                return arguments;
            }()) == "Arguments";
            // fallback for IE11 Script Access Denied error
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (error) {}
            };
            // getting tag from ES6+ `Object.prototype.toString`
            module1.exports = function(it) {
                var O, tag, result;
                return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/copy-constructor-properties.js": /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
            var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            module1.exports = function(target, source) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/correct-prototype-getter.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            module1.exports = !fails(function() {
                function F() {}
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F()) !== F.prototype;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/create-iterator-constructor.js": /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
            var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var returnThis = function() {
                return this;
            };
            module1.exports = function(IteratorConstructor, NAME, next) {
                var TO_STRING_TAG = NAME + " Iterator";
                IteratorConstructor.prototype = create(IteratorPrototype, {
                    next: createPropertyDescriptor(1, next)
                });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/create-property-descriptor.js": /*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/create-property.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            module1.exports = function(object, key, value) {
                var propertyKey = toPrimitive(key);
                if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                else object[propertyKey] = value;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/define-iterator.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
            var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
            var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
            var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
            var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");
            var IteratorPrototype = IteratorsCore.IteratorPrototype;
            var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
            var ITERATOR = wellKnownSymbol("iterator");
            var KEYS = "keys";
            var VALUES = "values";
            var ENTRIES = "entries";
            var returnThis = function() {
                return this;
            };
            module1.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch(KIND){
                        case KEYS:
                            return function keys() {
                                return new IteratorConstructor(this, KIND);
                            };
                        case VALUES:
                            return function values() {
                                return new IteratorConstructor(this, KIND);
                            };
                        case ENTRIES:
                            return function entries() {
                                return new IteratorConstructor(this, KIND);
                            };
                    }
                    return function() {
                        return new IteratorConstructor(this);
                    };
                };
                var TO_STRING_TAG = NAME + " Iterator";
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                // fix native
                if (anyNativeIterator) {
                    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                        if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                            if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                            else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") hide(CurrentIteratorPrototype, ITERATOR, returnThis);
                        }
                        // Set @@toStringTag to native iterators
                        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                    INCORRECT_VALUES_NAME = true;
                    defaultIterator = function values() {
                        return nativeIterator.call(this);
                    };
                }
                // define iterator
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) hide(IterablePrototype, ITERATOR, defaultIterator);
                Iterators[NAME] = defaultIterator;
                // export additional methods
                if (DEFAULT) {
                    methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    };
                    if (FORCED) {
                        for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
                    } else $({
                        target: NAME,
                        proto: true,
                        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                    }, methods);
                }
                return methods;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/descriptors.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            // Thank's IE8 for his funny defineProperty
            module1.exports = !fails(function() {
                return Object.defineProperty({}, "a", {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/document-create-element.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var document1 = global.document;
            // typeof document.createElement is 'object' in old IE
            var exist = isObject(document1) && isObject(document1.createElement);
            module1.exports = function(it) {
                return exist ? document1.createElement(it) : {};
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/enum-bug-keys.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            // IE8- don't enum bug keys
            module1.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
            ];
        /***/ },
        /***/ "./node_modules/core-js/internals/export.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
            var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
            /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module1.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) target = global;
                else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {});
                else target = (global[TARGET] || {}).prototype;
                if (target) for(key in source){
                    sourceProperty = source[key];
                    if (options.noTargetGet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                    // contained in target
                    if (!FORCED && targetProperty !== undefined) {
                        if (typeof sourceProperty === typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    // add a flag to not completely full polyfills
                    if (options.sham || targetProperty && targetProperty.sham) hide(sourceProperty, "sham", true);
                    // extend global
                    redefine(target, key, sourceProperty, options);
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/fails.js": /*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return true;
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/function-to-string.js": /*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            module1.exports = shared("native-function-to-string", Function.toString);
        /***/ },
        /***/ "./node_modules/core-js/internals/get-iterator-method.js": /*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var ITERATOR = wellKnownSymbol("iterator");
            module1.exports = function(it) {
                if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/global.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                var O = "object";
                var check = function(it) {
                    return it && it.Math == Math && it;
                };
                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                module1.exports = // eslint-disable-next-line no-undef
                check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global == O && global) || // eslint-disable-next-line no-new-func
                Function("return this")();
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"));
        /***/ },
        /***/ "./node_modules/core-js/internals/has.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module1.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/hidden-keys.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = {};
        /***/ },
        /***/ "./node_modules/core-js/internals/hide.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            module1.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/html.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var document1 = global.document;
            module1.exports = document1 && document1.documentElement;
        /***/ },
        /***/ "./node_modules/core-js/internals/ie8-dom-define.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
            // Thank's IE8 for his funny defineProperty
            module1.exports = !DESCRIPTORS && !fails(function() {
                return Object.defineProperty(createElement("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/indexed-object.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
            var split = "".split;
            module1.exports = fails(function() {
                // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
                // eslint-disable-next-line no-prototype-builtins
                return !Object("z").propertyIsEnumerable(0);
            }) ? function(it) {
                return classof(it) == "String" ? split.call(it, "") : Object(it);
            } : Object;
        /***/ },
        /***/ "./node_modules/core-js/internals/internal-state.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var WeakMap = global.WeakMap;
            var set, get, has;
            var enforce = function(it) {
                return has(it) ? get(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
                return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                    return state;
                };
            };
            if (NATIVE_WEAK_MAP) {
                var store = new WeakMap();
                var wmget = store.get;
                var wmhas = store.has;
                var wmset = store.set;
                set = function(it, metadata) {
                    wmset.call(store, it, metadata);
                    return metadata;
                };
                get = function(it) {
                    return wmget.call(store, it) || {};
                };
                has = function(it) {
                    return wmhas.call(store, it);
                };
            } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                    hide(it, STATE, metadata);
                    return metadata;
                };
                get = function(it) {
                    return objectHas(it, STATE) ? it[STATE] : {};
                };
                has = function(it) {
                    return objectHas(it, STATE);
                };
            }
            module1.exports = {
                set: set,
                get: get,
                has: has,
                enforce: enforce,
                getterFor: getterFor
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-array-iterator-method.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var ITERATOR = wellKnownSymbol("iterator");
            var ArrayPrototype = Array.prototype;
            // check on default Array iterator
            module1.exports = function(it) {
                return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-forced.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = "N";
            var POLYFILL = isForced.POLYFILL = "P";
            module1.exports = isForced;
        /***/ },
        /***/ "./node_modules/core-js/internals/is-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-pure.js": /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = false;
        /***/ },
        /***/ "./node_modules/core-js/internals/iterators-core.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var ITERATOR = wellKnownSymbol("iterator");
            var BUGGY_SAFARI_ITERATORS = false;
            var returnThis = function() {
                return this;
            };
            // `%IteratorPrototype%` object
            // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
            if ([].keys) {
                arrayIterator = [].keys();
                // Safari 8 has buggy iterators w/o `next`
                if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
                else {
                    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
            }
            if (IteratorPrototype == undefined) IteratorPrototype = {};
            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
            module1.exports = {
                IteratorPrototype: IteratorPrototype,
                BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/iterators.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = {};
        /***/ },
        /***/ "./node_modules/core-js/internals/native-symbol.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            module1.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                // Chrome 38 Symbol has incorrect toString conversion
                // eslint-disable-next-line no-undef
                return !String(Symbol());
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/native-weak-map.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
            var WeakMap = global.WeakMap;
            module1.exports = typeof WeakMap === "function" && /native code/.test(nativeFunctionToString.call(WeakMap));
        /***/ },
        /***/ "./node_modules/core-js/internals/object-create.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
            var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var IE_PROTO = sharedKey("IE_PROTO");
            var PROTOTYPE = "prototype";
            var Empty = function() {};
            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = documentCreateElement("iframe");
                var length = enumBugKeys.length;
                var lt = "<";
                var script = "script";
                var gt = ">";
                var js = "java" + script + ":";
                var iframeDocument;
                iframe.style.display = "none";
                html.appendChild(iframe);
                iframe.src = String(js);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + script + gt + "document.F=Object" + lt + "/" + script + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while(length--)delete createDict[PROTOTYPE][enumBugKeys[length]];
                return createDict();
            };
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            module1.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : defineProperties(result, Properties);
            };
            hiddenKeys[IE_PROTO] = true;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-define-properties.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
            module1.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var i = 0;
                var key;
                while(length > i)definePropertyModule.f(O, key = keys[i++], Properties[key]);
                return O;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-define-property.js": /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var nativeDefineProperty = Object.defineProperty;
            exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return nativeDefineProperty(O, P, Attributes);
                } catch (error) {}
                if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js": /*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
            var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE) try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {}
                if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-names.js": /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
            var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            var hiddenKeys = enumBugKeys.concat("length", "prototype");
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js": /*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            exports.f = Object.getOwnPropertySymbols;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-prototype-of.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");
            var IE_PROTO = sharedKey("IE_PROTO");
            var ObjectPrototype = Object.prototype;
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            module1.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
                return O instanceof Object ? ObjectPrototype : null;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-keys-internal.js": /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var arrayIndexOf = arrayIncludes(false);
            module1.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
                return result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-keys.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            module1.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-property-is-enumerable.js": /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            // Nashorn ~ JDK8 bug
            var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
                1: 2
            }, 1);
            exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : nativePropertyIsEnumerable;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-set-prototype-of.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
            // Works with __proto__ only. Old v8 can't work with null proto objects.
            /* eslint-disable no-proto */ module1.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var correctSetter = false;
                var test = {};
                var setter;
                try {
                    setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                    setter.call(test, []);
                    correctSetter = test instanceof Array;
                } catch (error) {}
                return function setPrototypeOf(O, proto) {
                    validateSetPrototypeOfArguments(O, proto);
                    if (correctSetter) setter.call(O, proto);
                    else O.__proto__ = proto;
                    return O;
                };
            }() : undefined);
        /***/ },
        /***/ "./node_modules/core-js/internals/own-keys.js": /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
            var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var Reflect = global.Reflect;
            // all object keys, includes non-enumerable and symbols
            module1.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/path.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        /***/ },
        /***/ "./node_modules/core-js/internals/redefine.js": /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
            var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
            var getInternalState = InternalStateModule.get;
            var enforceInternalState = InternalStateModule.enforce;
            var TEMPLATE = String(nativeFunctionToString).split("toString");
            shared("inspectSource", function(it) {
                return nativeFunctionToString.call(it);
            });
            (module1.exports = function(O, key, value, options) {
                var unsafe = options ? !!options.unsafe : false;
                var simple = options ? !!options.enumerable : false;
                var noTargetGet = options ? !!options.noTargetGet : false;
                if (typeof value == "function") {
                    if (typeof key == "string" && !has(value, "name")) hide(value, "name", key);
                    enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
                }
                if (O === global) {
                    if (simple) O[key] = value;
                    else setGlobal(key, value);
                    return;
                } else if (!unsafe) delete O[key];
                else if (!noTargetGet && O[key]) simple = true;
                if (simple) O[key] = value;
                else hide(O, key, value);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, "toString", function toString() {
                return typeof this == "function" && getInternalState(this).source || nativeFunctionToString.call(this);
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/require-object-coercible.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            // `RequireObjectCoercible` abstract operation
            // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on " + it);
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/set-global.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            module1.exports = function(key, value) {
                try {
                    hide(global, key, value);
                } catch (error) {
                    global[key] = value;
                }
                return value;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/set-to-string-tag.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            module1.exports = function(it, TAG, STATIC) {
                if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) defineProperty(it, TO_STRING_TAG, {
                    configurable: true,
                    value: TAG
                });
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/shared-key.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
            var keys = shared("keys");
            module1.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/shared.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var SHARED = "__core-js_shared__";
            var store = global[SHARED] || setGlobal(SHARED, {});
            (module1.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {});
            })("versions", []).push({
                version: "3.1.3",
                mode: IS_PURE ? "pure" : "global",
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/string-at.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            // CONVERT_TO_STRING: true  -> String#at
            // CONVERT_TO_STRING: false -> String#codePointAt
            module1.exports = function(that, pos, CONVERT_TO_STRING) {
                var S = String(requireObjectCoercible(that));
                var position = toInteger(pos);
                var size = S.length;
                var first, second;
                if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
                first = S.charCodeAt(position);
                return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-absolute-index.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var max = Math.max;
            var min = Math.min;
            // Helper for a popular repeating case of the spec:
            // Let integer be ? ToInteger(index).
            // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
            module1.exports = function(index, length) {
                var integer = toInteger(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-indexed-object.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // toObject with fallback for non-array-like ES3 strings
            var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            module1.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-integer.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var ceil = Math.ceil;
            var floor = Math.floor;
            // `ToInteger` abstract operation
            // https://tc39.github.io/ecma262/#sec-tointeger
            module1.exports = function(argument) {
                return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-length.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var min = Math.min;
            // `ToLength` abstract operation
            // https://tc39.github.io/ecma262/#sec-tolength
            module1.exports = function(argument) {
                return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            // `ToObject` abstract operation
            // https://tc39.github.io/ecma262/#sec-toobject
            module1.exports = function(argument) {
                return Object(requireObjectCoercible(argument));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-primitive.js": /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module1.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
                if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/uid.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var id = 0;
            var postfix = Math.random();
            module1.exports = function(key) {
                return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + postfix).toString(36));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": /*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            module1.exports = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null) throw TypeError("Can't set " + String(proto) + " as a prototype");
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/well-known-symbol.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
            var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
            var Symbol1 = global.Symbol;
            var store = shared("wks");
            module1.exports = function(name) {
                return store[name] || (store[name] = NATIVE_SYMBOL && Symbol1[name] || (NATIVE_SYMBOL ? Symbol1 : uid)("Symbol." + name));
            };
        /***/ },
        /***/ "./node_modules/core-js/modules/es.array.from.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
            var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
            var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
            var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
                Array.from(iterable);
            });
            // `Array.from` method
            // https://tc39.github.io/ecma262/#sec-array.from
            $({
                target: "Array",
                stat: true,
                forced: INCORRECT_ITERATION
            }, {
                from: from
            });
        /***/ },
        /***/ "./node_modules/core-js/modules/es.string.iterator.js": /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
            var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
            var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
            var STRING_ITERATOR = "String Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
            // `String.prototype[@@iterator]` method
            // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
            defineIterator(String, "String", function(iterated) {
                setInternalState(this, {
                    type: STRING_ITERATOR,
                    string: String(iterated),
                    index: 0
                });
            // `%StringIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
            }, function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index = state.index;
                var point;
                if (index >= string.length) return {
                    value: undefined,
                    done: true
                };
                point = codePointAt(string, index, true);
                state.index += point.length;
                return {
                    value: point,
                    done: false
                };
            });
        /***/ },
        /***/ "./node_modules/webpack/buildin/global.js": /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var g;
            // This works in non-strict mode
            g = function() {
                return this;
            }();
            try {
                // This works if eval is allowed (see CSP)
                g = g || Function("return this")() || (0, eval)("this");
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module1.exports = g;
        /***/ },
        /***/ "./src/default-attrs.json": /*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/ /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */ /***/ function(module1) {
            module1.exports = {
                "xmlns": "http://www.w3.org/2000/svg",
                "width": 24,
                "height": 24,
                "viewBox": "0 0 24 24",
                "fill": "none",
                "stroke": "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            };
        /***/ },
        /***/ "./src/icon.js": /*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
            var _dedupe2 = _interopRequireDefault(_dedupe);
            var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");
            var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var Icon = function() {
                function Icon(name, contents) {
                    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                    _classCallCheck(this, Icon);
                    this.name = name;
                    this.contents = contents;
                    this.tags = tags;
                    this.attrs = _extends({}, _defaultAttrs2.default, {
                        class: "feather feather-" + name
                    });
                }
                /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */ _createClass(Icon, [
                    {
                        key: "toSvg",
                        value: function toSvg() {
                            var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            var combinedAttrs = _extends({}, this.attrs, attrs, {
                                class: (0, _dedupe2.default)(this.attrs.class, attrs.class)
                            });
                            return "<svg " + attrsToString(combinedAttrs) + ">" + this.contents + "</svg>";
                        }
                    },
                    {
                        key: "toString",
                        value: function toString() {
                            return this.contents;
                        }
                    }
                ]);
                return Icon;
            }();
            /**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */ function attrsToString(attrs) {
                return Object.keys(attrs).map(function(key) {
                    return key + '="' + attrs[key] + '"';
                }).join(" ");
            }
            exports.default = Icon;
        /***/ },
        /***/ "./src/icons.js": /*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");
            var _icon2 = _interopRequireDefault(_icon);
            var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");
            var _icons2 = _interopRequireDefault(_icons);
            var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");
            var _tags2 = _interopRequireDefault(_tags);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.default = Object.keys(_icons2.default).map(function(key) {
                return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
            }).reduce(function(object, icon) {
                object[icon.name] = icon;
                return object;
            }, {});
        /***/ },
        /***/ "./src/index.js": /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");
            var _toSvg2 = _interopRequireDefault(_toSvg);
            var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");
            var _replace2 = _interopRequireDefault(_replace);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            module1.exports = {
                icons: _icons2.default,
                toSvg: _toSvg2.default,
                replace: _replace2.default
            };
        /***/ },
        /***/ "./src/replace.js": /*!************************!*\
  !*** ./src/replace.js ***!
  \************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            }; /* eslint-env browser */ 
            var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
            var _dedupe2 = _interopRequireDefault(_dedupe);
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            /**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */ function replace() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (typeof document === "undefined") throw new Error("`feather.replace()` only works in a browser environment.");
                var elementsToReplace = document.querySelectorAll("[data-feather]");
                Array.from(elementsToReplace).forEach(function(element) {
                    return replaceElement(element, attrs);
                });
            }
            /**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */ function replaceElement(element) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var elementAttrs = getAttrs(element);
                var name = elementAttrs["data-feather"];
                delete elementAttrs["data-feather"];
                var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, {
                    class: (0, _dedupe2.default)(attrs.class, elementAttrs.class)
                }));
                var svgDocument = new DOMParser().parseFromString(svgString, "image/svg+xml");
                var svgElement = svgDocument.querySelector("svg");
                element.parentNode.replaceChild(svgElement, element);
            }
            /**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */ function getAttrs(element) {
                return Array.from(element.attributes).reduce(function(attrs, attr) {
                    attrs[attr.name] = attr.value;
                    return attrs;
                }, {});
            }
            exports.default = replace;
        /***/ },
        /***/ "./src/tags.json": /*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/ /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */ /***/ function(module1) {
            module1.exports = {
                "activity": [
                    "pulse",
                    "health",
                    "action",
                    "motion"
                ],
                "airplay": [
                    "stream",
                    "cast",
                    "mirroring"
                ],
                "alert-circle": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "alert-octagon": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "alert-triangle": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "align-center": [
                    "text alignment",
                    "center"
                ],
                "align-justify": [
                    "text alignment",
                    "justified"
                ],
                "align-left": [
                    "text alignment",
                    "left"
                ],
                "align-right": [
                    "text alignment",
                    "right"
                ],
                "anchor": [],
                "archive": [
                    "index",
                    "box"
                ],
                "at-sign": [
                    "mention",
                    "at",
                    "email",
                    "message"
                ],
                "award": [
                    "achievement",
                    "badge"
                ],
                "aperture": [
                    "camera",
                    "photo"
                ],
                "bar-chart": [
                    "statistics",
                    "diagram",
                    "graph"
                ],
                "bar-chart-2": [
                    "statistics",
                    "diagram",
                    "graph"
                ],
                "battery": [
                    "power",
                    "electricity"
                ],
                "battery-charging": [
                    "power",
                    "electricity"
                ],
                "bell": [
                    "alarm",
                    "notification",
                    "sound"
                ],
                "bell-off": [
                    "alarm",
                    "notification",
                    "silent"
                ],
                "bluetooth": [
                    "wireless"
                ],
                "book-open": [
                    "read",
                    "library"
                ],
                "book": [
                    "read",
                    "dictionary",
                    "booklet",
                    "magazine",
                    "library"
                ],
                "bookmark": [
                    "read",
                    "clip",
                    "marker",
                    "tag"
                ],
                "box": [
                    "cube"
                ],
                "briefcase": [
                    "work",
                    "bag",
                    "baggage",
                    "folder"
                ],
                "calendar": [
                    "date"
                ],
                "camera": [
                    "photo"
                ],
                "cast": [
                    "chromecast",
                    "airplay"
                ],
                "chevron-down": [
                    "expand"
                ],
                "chevron-up": [
                    "collapse"
                ],
                "circle": [
                    "off",
                    "zero",
                    "record"
                ],
                "clipboard": [
                    "copy"
                ],
                "clock": [
                    "time",
                    "watch",
                    "alarm"
                ],
                "cloud-drizzle": [
                    "weather",
                    "shower"
                ],
                "cloud-lightning": [
                    "weather",
                    "bolt"
                ],
                "cloud-rain": [
                    "weather"
                ],
                "cloud-snow": [
                    "weather",
                    "blizzard"
                ],
                "cloud": [
                    "weather"
                ],
                "codepen": [
                    "logo"
                ],
                "codesandbox": [
                    "logo"
                ],
                "code": [
                    "source",
                    "programming"
                ],
                "coffee": [
                    "drink",
                    "cup",
                    "mug",
                    "tea",
                    "cafe",
                    "hot",
                    "beverage"
                ],
                "columns": [
                    "layout"
                ],
                "command": [
                    "keyboard",
                    "cmd",
                    "terminal",
                    "prompt"
                ],
                "compass": [
                    "navigation",
                    "safari",
                    "travel",
                    "direction"
                ],
                "copy": [
                    "clone",
                    "duplicate"
                ],
                "corner-down-left": [
                    "arrow",
                    "return"
                ],
                "corner-down-right": [
                    "arrow"
                ],
                "corner-left-down": [
                    "arrow"
                ],
                "corner-left-up": [
                    "arrow"
                ],
                "corner-right-down": [
                    "arrow"
                ],
                "corner-right-up": [
                    "arrow"
                ],
                "corner-up-left": [
                    "arrow"
                ],
                "corner-up-right": [
                    "arrow"
                ],
                "cpu": [
                    "processor",
                    "technology"
                ],
                "credit-card": [
                    "purchase",
                    "payment",
                    "cc"
                ],
                "crop": [
                    "photo",
                    "image"
                ],
                "crosshair": [
                    "aim",
                    "target"
                ],
                "database": [
                    "storage",
                    "memory"
                ],
                "delete": [
                    "remove"
                ],
                "disc": [
                    "album",
                    "cd",
                    "dvd",
                    "music"
                ],
                "dollar-sign": [
                    "currency",
                    "money",
                    "payment"
                ],
                "droplet": [
                    "water"
                ],
                "edit": [
                    "pencil",
                    "change"
                ],
                "edit-2": [
                    "pencil",
                    "change"
                ],
                "edit-3": [
                    "pencil",
                    "change"
                ],
                "eye": [
                    "view",
                    "watch"
                ],
                "eye-off": [
                    "view",
                    "watch",
                    "hide",
                    "hidden"
                ],
                "external-link": [
                    "outbound"
                ],
                "facebook": [
                    "logo",
                    "social"
                ],
                "fast-forward": [
                    "music"
                ],
                "figma": [
                    "logo",
                    "design",
                    "tool"
                ],
                "file-minus": [
                    "delete",
                    "remove",
                    "erase"
                ],
                "file-plus": [
                    "add",
                    "create",
                    "new"
                ],
                "file-text": [
                    "data",
                    "txt",
                    "pdf"
                ],
                "film": [
                    "movie",
                    "video"
                ],
                "filter": [
                    "funnel",
                    "hopper"
                ],
                "flag": [
                    "report"
                ],
                "folder-minus": [
                    "directory"
                ],
                "folder-plus": [
                    "directory"
                ],
                "folder": [
                    "directory"
                ],
                "framer": [
                    "logo",
                    "design",
                    "tool"
                ],
                "frown": [
                    "emoji",
                    "face",
                    "bad",
                    "sad",
                    "emotion"
                ],
                "gift": [
                    "present",
                    "box",
                    "birthday",
                    "party"
                ],
                "git-branch": [
                    "code",
                    "version control"
                ],
                "git-commit": [
                    "code",
                    "version control"
                ],
                "git-merge": [
                    "code",
                    "version control"
                ],
                "git-pull-request": [
                    "code",
                    "version control"
                ],
                "github": [
                    "logo",
                    "version control"
                ],
                "gitlab": [
                    "logo",
                    "version control"
                ],
                "globe": [
                    "world",
                    "browser",
                    "language",
                    "translate"
                ],
                "hard-drive": [
                    "computer",
                    "server",
                    "memory",
                    "data"
                ],
                "hash": [
                    "hashtag",
                    "number",
                    "pound"
                ],
                "headphones": [
                    "music",
                    "audio",
                    "sound"
                ],
                "heart": [
                    "like",
                    "love",
                    "emotion"
                ],
                "help-circle": [
                    "question mark"
                ],
                "hexagon": [
                    "shape",
                    "node.js",
                    "logo"
                ],
                "home": [
                    "house",
                    "living"
                ],
                "image": [
                    "picture"
                ],
                "inbox": [
                    "email"
                ],
                "instagram": [
                    "logo",
                    "camera"
                ],
                "key": [
                    "password",
                    "login",
                    "authentication",
                    "secure"
                ],
                "layers": [
                    "stack"
                ],
                "layout": [
                    "window",
                    "webpage"
                ],
                "life-buoy": [
                    "help",
                    "life ring",
                    "support"
                ],
                "link": [
                    "chain",
                    "url"
                ],
                "link-2": [
                    "chain",
                    "url"
                ],
                "linkedin": [
                    "logo",
                    "social media"
                ],
                "list": [
                    "options"
                ],
                "lock": [
                    "security",
                    "password",
                    "secure"
                ],
                "log-in": [
                    "sign in",
                    "arrow",
                    "enter"
                ],
                "log-out": [
                    "sign out",
                    "arrow",
                    "exit"
                ],
                "mail": [
                    "email",
                    "message"
                ],
                "map-pin": [
                    "location",
                    "navigation",
                    "travel",
                    "marker"
                ],
                "map": [
                    "location",
                    "navigation",
                    "travel"
                ],
                "maximize": [
                    "fullscreen"
                ],
                "maximize-2": [
                    "fullscreen",
                    "arrows",
                    "expand"
                ],
                "meh": [
                    "emoji",
                    "face",
                    "neutral",
                    "emotion"
                ],
                "menu": [
                    "bars",
                    "navigation",
                    "hamburger"
                ],
                "message-circle": [
                    "comment",
                    "chat"
                ],
                "message-square": [
                    "comment",
                    "chat"
                ],
                "mic-off": [
                    "record",
                    "sound",
                    "mute"
                ],
                "mic": [
                    "record",
                    "sound",
                    "listen"
                ],
                "minimize": [
                    "exit fullscreen",
                    "close"
                ],
                "minimize-2": [
                    "exit fullscreen",
                    "arrows",
                    "close"
                ],
                "minus": [
                    "subtract"
                ],
                "monitor": [
                    "tv",
                    "screen",
                    "display"
                ],
                "moon": [
                    "dark",
                    "night"
                ],
                "more-horizontal": [
                    "ellipsis"
                ],
                "more-vertical": [
                    "ellipsis"
                ],
                "mouse-pointer": [
                    "arrow",
                    "cursor"
                ],
                "move": [
                    "arrows"
                ],
                "music": [
                    "note"
                ],
                "navigation": [
                    "location",
                    "travel"
                ],
                "navigation-2": [
                    "location",
                    "travel"
                ],
                "octagon": [
                    "stop"
                ],
                "package": [
                    "box",
                    "container"
                ],
                "paperclip": [
                    "attachment"
                ],
                "pause": [
                    "music",
                    "stop"
                ],
                "pause-circle": [
                    "music",
                    "audio",
                    "stop"
                ],
                "pen-tool": [
                    "vector",
                    "drawing"
                ],
                "percent": [
                    "discount"
                ],
                "phone-call": [
                    "ring"
                ],
                "phone-forwarded": [
                    "call"
                ],
                "phone-incoming": [
                    "call"
                ],
                "phone-missed": [
                    "call"
                ],
                "phone-off": [
                    "call",
                    "mute"
                ],
                "phone-outgoing": [
                    "call"
                ],
                "phone": [
                    "call"
                ],
                "play": [
                    "music",
                    "start"
                ],
                "pie-chart": [
                    "statistics",
                    "diagram"
                ],
                "play-circle": [
                    "music",
                    "start"
                ],
                "plus": [
                    "add",
                    "new"
                ],
                "plus-circle": [
                    "add",
                    "new"
                ],
                "plus-square": [
                    "add",
                    "new"
                ],
                "pocket": [
                    "logo",
                    "save"
                ],
                "power": [
                    "on",
                    "off"
                ],
                "printer": [
                    "fax",
                    "office",
                    "device"
                ],
                "radio": [
                    "signal"
                ],
                "refresh-cw": [
                    "synchronise",
                    "arrows"
                ],
                "refresh-ccw": [
                    "arrows"
                ],
                "repeat": [
                    "loop",
                    "arrows"
                ],
                "rewind": [
                    "music"
                ],
                "rotate-ccw": [
                    "arrow"
                ],
                "rotate-cw": [
                    "arrow"
                ],
                "rss": [
                    "feed",
                    "subscribe"
                ],
                "save": [
                    "floppy disk"
                ],
                "scissors": [
                    "cut"
                ],
                "search": [
                    "find",
                    "magnifier",
                    "magnifying glass"
                ],
                "send": [
                    "message",
                    "mail",
                    "email",
                    "paper airplane",
                    "paper aeroplane"
                ],
                "settings": [
                    "cog",
                    "edit",
                    "gear",
                    "preferences"
                ],
                "share-2": [
                    "network",
                    "connections"
                ],
                "shield": [
                    "security",
                    "secure"
                ],
                "shield-off": [
                    "security",
                    "insecure"
                ],
                "shopping-bag": [
                    "ecommerce",
                    "cart",
                    "purchase",
                    "store"
                ],
                "shopping-cart": [
                    "ecommerce",
                    "cart",
                    "purchase",
                    "store"
                ],
                "shuffle": [
                    "music"
                ],
                "skip-back": [
                    "music"
                ],
                "skip-forward": [
                    "music"
                ],
                "slack": [
                    "logo"
                ],
                "slash": [
                    "ban",
                    "no"
                ],
                "sliders": [
                    "settings",
                    "controls"
                ],
                "smartphone": [
                    "cellphone",
                    "device"
                ],
                "smile": [
                    "emoji",
                    "face",
                    "happy",
                    "good",
                    "emotion"
                ],
                "speaker": [
                    "audio",
                    "music"
                ],
                "star": [
                    "bookmark",
                    "favorite",
                    "like"
                ],
                "stop-circle": [
                    "media",
                    "music"
                ],
                "sun": [
                    "brightness",
                    "weather",
                    "light"
                ],
                "sunrise": [
                    "weather",
                    "time",
                    "morning",
                    "day"
                ],
                "sunset": [
                    "weather",
                    "time",
                    "evening",
                    "night"
                ],
                "tablet": [
                    "device"
                ],
                "tag": [
                    "label"
                ],
                "target": [
                    "logo",
                    "bullseye"
                ],
                "terminal": [
                    "code",
                    "command line",
                    "prompt"
                ],
                "thermometer": [
                    "temperature",
                    "celsius",
                    "fahrenheit",
                    "weather"
                ],
                "thumbs-down": [
                    "dislike",
                    "bad",
                    "emotion"
                ],
                "thumbs-up": [
                    "like",
                    "good",
                    "emotion"
                ],
                "toggle-left": [
                    "on",
                    "off",
                    "switch"
                ],
                "toggle-right": [
                    "on",
                    "off",
                    "switch"
                ],
                "tool": [
                    "settings",
                    "spanner"
                ],
                "trash": [
                    "garbage",
                    "delete",
                    "remove",
                    "bin"
                ],
                "trash-2": [
                    "garbage",
                    "delete",
                    "remove",
                    "bin"
                ],
                "triangle": [
                    "delta"
                ],
                "truck": [
                    "delivery",
                    "van",
                    "shipping",
                    "transport",
                    "lorry"
                ],
                "tv": [
                    "television",
                    "stream"
                ],
                "twitch": [
                    "logo"
                ],
                "twitter": [
                    "logo",
                    "social"
                ],
                "type": [
                    "text"
                ],
                "umbrella": [
                    "rain",
                    "weather"
                ],
                "unlock": [
                    "security"
                ],
                "user-check": [
                    "followed",
                    "subscribed"
                ],
                "user-minus": [
                    "delete",
                    "remove",
                    "unfollow",
                    "unsubscribe"
                ],
                "user-plus": [
                    "new",
                    "add",
                    "create",
                    "follow",
                    "subscribe"
                ],
                "user-x": [
                    "delete",
                    "remove",
                    "unfollow",
                    "unsubscribe",
                    "unavailable"
                ],
                "user": [
                    "person",
                    "account"
                ],
                "users": [
                    "group"
                ],
                "video-off": [
                    "camera",
                    "movie",
                    "film"
                ],
                "video": [
                    "camera",
                    "movie",
                    "film"
                ],
                "voicemail": [
                    "phone"
                ],
                "volume": [
                    "music",
                    "sound",
                    "mute"
                ],
                "volume-1": [
                    "music",
                    "sound"
                ],
                "volume-2": [
                    "music",
                    "sound"
                ],
                "volume-x": [
                    "music",
                    "sound",
                    "mute"
                ],
                "watch": [
                    "clock",
                    "time"
                ],
                "wifi-off": [
                    "disabled"
                ],
                "wifi": [
                    "connection",
                    "signal",
                    "wireless"
                ],
                "wind": [
                    "weather",
                    "air"
                ],
                "x-circle": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "x-octagon": [
                    "delete",
                    "stop",
                    "alert",
                    "warning",
                    "times",
                    "clear"
                ],
                "x-square": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "x": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "youtube": [
                    "logo",
                    "video",
                    "play"
                ],
                "zap-off": [
                    "flash",
                    "camera",
                    "lightning"
                ],
                "zap": [
                    "flash",
                    "camera",
                    "lightning"
                ],
                "zoom-in": [
                    "magnifying glass"
                ],
                "zoom-out": [
                    "magnifying glass"
                ]
            };
        /***/ },
        /***/ "./src/to-svg.js": /*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            /**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */ function toSvg(name) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.");
                if (!name) throw new Error("The required `key` (icon name) parameter is missing.");
                if (!_icons2.default[name]) throw new Error("No icon matching '" + name + "'. See the complete list of icons at https://feathericons.com");
                return _icons2.default[name].toSvg(attrs);
            }
            exports.default = toSvg;
        /***/ },
        /***/ 0: /*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(/*! core-js/es/array/from */ "./node_modules/core-js/es/array/from.js");
            module1.exports = __webpack_require__(/*! /home/runner/work/feather/feather/src/index.js */ "./src/index.js");
        /***/ }
    });
});

},{}]},["jKtUw","8c3OQ"], "8c3OQ", "parcelRequire7280")

//# sourceMappingURL=index.70045596.js.map
