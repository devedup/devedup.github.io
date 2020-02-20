(function(r) {
    var n = {};
    function i(e) {
        if (n[e])
            return n[e].exports;
        var t = n[e] = {
            i: e,
            l: false,
            exports: {}
        };
        r[e].call(t.exports, t, t.exports, i);
        t.l = true;
        return t.exports
    }
    i.m = r;
    i.c = n;
    i.d = function(e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: true,
            get: r
        })
    };
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    i.t = function(t, e) {
        1 & e && (t = i(t));
        if (8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        i.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: t
        });
        if (2 & e && "string" != typeof t)
            for (var n in t)
                i.d(r, n, function(e) {
                    return t[e]
                }.bind(null, n));
        return r
    };
    i.n = function(t) {
        var e = t && t.__esModule ? function e() {
            return t["default"]
        } : function e() {
            return t
        };
        i.d(e, "a", e);
        return e
    };
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    i.p = "https://assets.squarespace.com/universal/scripts-compressed/";
    return i(i.s = "./src/main/webapp/universal/src/apps/Performance/bootstrap.js")
})({
    "./node_modules/webpack/buildin/global.js": function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (1, eval)("this")
        } catch (e) {
            "object" === typeof window && (r = window)
        }
        e.exports = r
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js": function(e, t) {
        function r(e, t, r) {
            t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
            }) : e[t] = r;
            return e
        }
        e.exports = r
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(e, t) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = r
    },
    "./src/main/webapp/universal/node_modules/@sqs/praetor/build/module/index.js": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = "true";
        var o = "default";
        var a;
        (function(e) {
            e["FEATURE_TOGGLE"] = "FEATURE_TOGGLE";
            e["AB_TEST"] = "AB_TEST"
        })(a = a || {});
        var i = function() {
            function e(e) {
                var t = this;
                this.experiments = {};
                this.isConfigurationLoaded = Boolean(e.isConfigurationLoaded);
                Array.isArray(e.experimentContextList) && e.experimentContextList.forEach(function(e) {
                    null !== e && "object" === typeof e && e.hasOwnProperty("name") && (t.experiments[e.name] = e)
                })
            }
            e.prototype.isValid = function() {
                return this.isConfigurationLoaded
            };
            e.prototype.getContext = function(e) {
                return this.experiments[e]
            };
            return e
        }();
        var s = function() {
            function e(e) {
                this.configuration = new i(e)
            }
            e.prototype.getFeatureToggle = function(e, t) {
                var r = this.getContextValidity(e, a.FEATURE_TOGGLE),
                    n = r.context,
                    i = r.error;
                if (i || null === n)
                    return {
                        enabled: t,
                        error: i
                    };
                if (n.containsError)
                    return {
                        enabled: this.isFeatureToggleEnabled(n),
                        error: "The specified feature has an invalid server-side definition"
                    };
                return {
                    enabled: this.isFeatureToggleEnabled(n)
                }
            };
            e.prototype.getABTestVariant = function(e, t) {
                var r = this.getContextValidity(e, a.AB_TEST),
                    n = r.context,
                    i = r.error;
                if (i || null === n)
                    return {
                        error: i,
                        segment: o,
                        variant: t
                    };
                if (n.containsError)
                    return {
                        error: "The specified feature has an invalid server-side definition",
                        segment: n.segmentName,
                        variant: n.variant
                    };
                return {
                    segment: n.segmentName,
                    variant: n.variant
                }
            };
            e.prototype.getAllExperiments = function() {
                return this.configuration
            };
            e.prototype.getContextValidity = function(e, t) {
                if (!this.configuration.isValid())
                    return {
                        context: null,
                        error: "The underlying Praetor configuration is not loaded"
                    };
                var r = this.configuration.getContext(e);
                if (void 0 === r)
                    return {
                        context: null,
                        error: "The specified feature does not exist"
                    };
                if (r.experimentType !== t)
                    return {
                        context: null,
                        error: "The specified feature is not a " + t
                    };
                return {
                    context: r
                }
            };
            e.prototype.isFeatureToggleEnabled = function(e) {
                return e.variant === n
            };
            return e
        }();
        var u = s;
        r.d(t, "StaticPraetorClient", function() {
            return u
        });
        r.d(t, "Configuration", function() {
            return i
        });
        r.d(t, "ExperimentType", function() {
            return a
        })
    },
    "./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js": function(e, t, r) {
        "use strict";
        r.r(t);
        var i = r("./src/main/webapp/universal/node_modules/@sqs/praetor/build/module/index.js");
        var n = r("./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js");
        var o = "/api/1/performance";
        var a = "/records";
        var s = "/settings";
        var u = "/error";
        var c = "2.2.0";
        var f = function(e) {
            return {
                app: "a",
                data: {
                    __encoding_config__: e,
                    __encoding_key__: "d"
                },
                event: "e",
                pageLoadId: "pl",
                ts: "t"
            }
        };
        var d = {
            downlink: "do",
            effectiveType: "ef",
            rtt: "rtt",
            saveData: "sd"
        };
        var p = {
            devicePixelRatio: "dpr",
            screenHeight: "sh",
            screenWidth: "sw",
            viewportHeight: "vh",
            viewportWidth: "vw"
        };
        var l = {
            deviceMemory: "dm",
            hardwareConcurrency: "hc"
        };
        var v = {
            abTest: "ab",
            analyticsId: "aid",
            connectEnd: "ce",
            connectStart: "c",
            connection: {
                __encoding_config__: d,
                __encoding_key__: "con"
            },
            context: "ctx",
            decodedBodySize: "db",
            deliveryType: "dt",
            display: {
                __encoding_config__: p,
                __encoding_key__: "disp"
            },
            domComplete: "dc",
            domContentLoadedEventEnd: "de",
            domContentLoadedEventStart: "ds",
            domInteractive: "di",
            domLoading: "d",
            domainLookupEnd: "dle",
            domainLookupStart: "dl",
            encodedBodySize: "eb",
            fetchStart: "f",
            firstContentfulPaint: "fcp",
            firstInputDelay: "fid",
            firstInteraction: "fi",
            firstPaint: "fp",
            hardware: {
                __encoding_config__: l,
                __encoding_key__: "hdw"
            },
            hash: "h",
            hostname: "hn",
            loadEventEnd: "le",
            loadEventStart: "l",
            marketingId: "mid",
            memberId: "mem",
            navigationStart: "n",
            navigationType: "nt",
            nextHopProtocol: "nh",
            pathname: "p",
            redirectCount: "rc",
            redirectEnd: "rde",
            redirectStart: "rd",
            requestStart: "r",
            responseEnd: "re",
            responseStart: "rs",
            secureConnectionStart: "s",
            supportLevel: "sl",
            transferSize: "t",
            tti: "tti",
            unloadEventEnd: "ue",
            unloadEventStart: "u",
            version: "v",
            visibilityStateOnDCL: "vs"
        };
        var m = {
            duration: "d",
            endMarkDetail: "e",
            measureDetail: "m",
            name: "n",
            startMarkDetail: "s",
            startTime: "st"
        };
        var h = {
            info: {
                __encoding_config__: {
                    img: {
                        __encoding_config__: {
                            __encoding_config__: {
                                assetUrl: "a",
                                naturalHeight: "nh",
                                naturalWidth: "nw",
                                parentHeight: "ph",
                                parentWidth: "pw",
                                squarespaceSize: "s",
                                visibleInSession: "vs",
                                visibleOnLoad: "vl"
                            },
                            __encoding_skip__: true
                        },
                        __encoding_key__: "img"
                    }
                },
                __encoding_key__: "i"
            },
            timings: "t"
        };
        var g = Object.keys(v);
        var y = Object.keys(m);
        var w = Object.keys(h);
        var E = "userTiming";
        var T = "mark";
        var _ = "measure";
        var S = ["click", "mousedown", "keydown", "touchstart", "pointerdown"];
        var b = "DOMContentLoaded";
        var O = "load";
        var C = "sqsImageLoad";
        var A = [b, O];
        var P = "beforeunload";
        var I = "pagehide";
        var L = "resourcetimingbufferfull";
        var R = ["first-paint", "first-contentful-paint"];
        var D = [C, P, O, L, I];
        var N = [O, P, I];
        var x = "rum-";
        var k = "ss_ab";
        var j = "SS_MID";
        var B = "SS_ANALYTICS_ID";
        var M = 2e3;
        var q = 3e4;
        var F = 5e4;
        var H = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;
        function U(e) {
            var t = e.timeStamp;
            var r = t > 1e12 ? +new Date : window.performance.now();
            var n = Math.max(r - t, 0);
            return {
                firstInputDelay: n,
                firstInteraction: r
            }
        }
        function z() {
            return !!(window.performance && window.performance.now && window.addEventListener)
        }
        function V() {
            return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
        }
        function Y() {
            return window.hasOwnProperty("PerformanceObserver")
        }
        function X() {
            return window.performance && window.performance.getEntriesByType && void 0 !== window.PerformanceNavigationTiming && window.performance.getEntriesByType("navigation")[0] instanceof PerformanceNavigationTiming
        }
        function G() {
            return window.performance && window.performance.hasOwnProperty("timing")
        }
        function W() {
            return "function" === typeof window.navigator.sendBeacon && !H.test(window.navigator.userAgent)
        }
        function K(e) {
            var t = {};
            for (var r in e)
                "function" !== typeof e[r] && (t[r] = e[r]);
            return t
        }
        function $() {
            var e = {};
            if (window.performance) {
                if (X()) {
                    e.supportLevel = 2;
                    Object.assign(e, K(window.performance.getEntriesByType("navigation")[0]))
                } else if (G()) {
                    e.supportLevel = 1;
                    Object.assign(e, window.performance.timing)
                }
                if (performance.navigation) {
                    e.navigationType = window.performance.navigation.type;
                    e.redirectCount = window.performance.navigation.redirectCount
                }
            }
            return e
        }
        function Z(e) {
            var t = new RegExp("(^| )" + e + "=([^;]+)");
            var r = document.cookie.match(t);
            if (r)
                return r[2];
            return ""
        }
        function J(e) {
            if (window.localStorage && window.localStorage.getItem)
                return window.localStorage.getItem(e);
            return null
        }
        var Q;
        (function(e) {
            e["Beacon"] = "beacon";
            e["XHR"] = "xhr"
        })(Q = Q || {});
        function ee() {
            var e = re();
            var t = ne();
            var r = oe();
            return {
                abTest: te(),
                analyticsId: Z(B),
                connection: e,
                deliveryType: W() ? Q.Beacon : Q.XHR,
                display: t,
                hardware: r,
                hash: window.location.hash || "",
                hostname: window.location.hostname || "",
                marketingId: Z(j),
                memberId: ie(),
                pathname: window.location.pathname || "/",
                version: c
            }
        }
        function te() {
            if (!window.atob)
                return null;
            var e = J(k);
            if (e)
                try {
                    return JSON.parse(window.atob(e))
                } catch (e) {
                    return null
                }
            return null
        }
        function re() {
            var e = {};
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (t) {
                var r = (1e3 * t.downlink).toString();
                e = {
                    downlink: parseInt(r, 10),
                    effectiveType: t.effectiveType,
                    rtt: t.rtt,
                    saveData: t.saveData
                }
            }
            return e
        }
        function ne() {
            var e = window.devicePixelRatio;
            var t = window.screen,
                r = t.width,
                n = t.height;
            var i = document.documentElement,
                o = i.clientHeight,
                a = i.clientWidth;
            var s = {
                devicePixelRatio: e,
                screenHeight: n,
                screenWidth: r,
                viewportHeight: o,
                viewportWidth: a
            };
            return s
        }
        function ie() {
            try {
                return window.Static.SQUARESPACE_CONTEXT.authenticatedAccount.id
            } catch (e) {
                return ""
            }
        }
        function oe() {
            return {
                deviceMemory: navigator.deviceMemory,
                hardwareConcurrency: navigator.hardwareConcurrency
            }
        }
        function ae(e) {
            var t;
            var r = e.name,
                n = e.startTime;
            if (R.indexOf(r) >= 0)
                return t = {}, t[se(r)] = n, t;
            return {}
        }
        function se(e) {
            return e.replace(/-([a-zA-Z])/g, function(e, t) {
                var r = t && t.toUpperCase();
                return r || e
            })
        }
        function ue(d, p) {
            var l = {};
            Object.keys(p).forEach(function(e) {
                var t = p[e];
                var r;
                var n;
                var i = d[e] || d;
                var o = typeof i;
                var a = "string" === o;
                var s = "object" === o || "undefined" === i;
                if (!a && !s)
                    return;
                if (a) {
                    r = i;
                    n = ce(t)
                } else {
                    var u = i.__encoding_skip__;
                    var c = i.__encoding_config__;
                    var f = i.__encoding_fn__;
                    if (!u && !c && !d)
                        throw new Error("Invalid encoding map");
                    r = u ? e : i.__encoding_key__;
                    n = c ? ue(c, t) : f ? f(t) : t
                }
                r && (l["" + r] = n)
            });
            return l
        }
        function ce(e) {
            if ("boolean" === typeof e)
                return e ? 1 : 0;
            if (fe(e))
                return e.toString(36);
            return e
        }
        function fe(e) {
            return ("number" === typeof e || e instanceof Number) && isFinite(e)
        }
        var de;
        var pe = [];
        function le(e, t) {
            if (W() && navigator.sendBeacon(e, t))
                return;
            var r = new XMLHttpRequest;
            r.open("POST", e, true);
            r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            r.send(t)
        }
        function ve(r) {
            N.forEach(function(t) {
                window.addEventListener(t, function() {
                    try {
                        if (t === O)
                            de = window.setTimeout(he, q, r);
                        else if ("number" === typeof de) {
                            window.clearTimeout(de);
                            de = void 0
                        }
                        he(r)
                    } catch (e) {
                        r(e, t)
                    }
                })
            })
        }
        function me(e) {
            pe.push(e)
        }
        function he(t) {
            try {
                if (pe.length) {
                    var e = [];
                    while (pe.length) {
                        var r = pe.pop();
                        var n = JSON.stringify(r);
                        if (!(n.length <= F && r))
                            throw new Error("Omitting individual metric because it's over the PER_METRIC_DELIVERY_SIZE (metric is " + n.length + " bytes, delivered from " + window.location.href + ")");
                        e.push(r)
                    }
                    if (e.length) {
                        var i = JSON.stringify(e);
                        le(o + a, i)
                    }
                }
            } catch (e) {
                t(e)
            }
        }
        function ge(e) {
            le(o + u, e)
        }
        function ye(e, t) {
            var r = ue(e, t);
            if (!r)
                throw new Error("Data is empty");
            me(r)
        }
        var we = [];
        function Ee() {
            return we
        }
        function Te(e) {
            we.push(e)
        }
        function _e(e, t, r, n) {
            var i = Object.freeze({
                app: e,
                data: n,
                event: t,
                pageLoadId: r,
                ts: Date.now()
            });
            Te(i);
            return i
        }
        var Se;
        (function(e) {
            e["OBSERVE"] = "observe";
            e["GATHER"] = "gather";
            e["BOTH"] = "both";
            e["NONE"] = ""
        })(Se = Se || {});
        var be = function() {
            function e() {
                this.requiresContext = false;
                this.context = {};
                this.deliveryBuffer = [];
                this.entryTypes = [e.eventName];
                this.fireOnce = false;
                this.gatherEvents = [];
                this.supportType = Se.NONE;
                this.encodeConfig = f({});
                this.appName = "";
                this.pageLoadId = ""
            }
            e.prototype.getDeliveryBuffer = function() {
                return this.deliveryBuffer
            };
            e.prototype.getEventName = function() {
                return this.constructor.eventName
            };
            e.prototype.getEntryTypes = function() {
                return this.entryTypes
            };
            e.prototype.getGatherEvents = function() {
                return this.gatherEvents
            };
            e.prototype.getSupportType = function() {
                return this.supportType
            };
            e.prototype.shouldFireOnce = function() {
                return this.fireOnce
            };
            e.prototype.observerParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.gather = function(e) {
                return e
            };
            e.prototype.gatherParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.deliver = function() {
                while (this.deliveryBuffer.length) {
                    var e = this.deliveryBuffer.shift();
                    if (e) {
                        var t = _e(this.appName, this.getEventName(), this.pageLoadId, e);
                        ye(this.getEncodeConfig(), t)
                    }
                }
                this.deliveryBuffer = []
            };
            e.prototype.getEncodeConfig = function() {
                return this.encodeConfig
            };
            e.prototype.setApp = function(e) {
                this.appName = e;
                return this
            };
            e.prototype.setId = function(e) {
                this.pageLoadId = e;
                return this
            };
            e.eventName = "";
            return e
        }();
        var Oe = be;
        var Ce = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t)
                        t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);
                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var Ae = (void 0, function() {
            Ae = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            };
            return Ae.apply(this, arguments)
        });
        var Pe = function(r) {
            Ce(e, r);
            function e() {
                var e;
                var t = r.call(this) || this;
                t.requiresContext = true;
                t.fireOnce = true;
                t.gatherEvents = [O, P, I];
                t.entryTypes = ["paint", "longtask"];
                t.supportType = Se.BOTH;
                t.deliveryBuffer = [{}];
                t.encodeConfig = f(v);
                t.visibilityStateOnDCL = "";
                t.metricsCollected = {
                    load: false
                };
                window.addEventListener("DOMContentLoaded", function() {
                    return t.visibilityStateOnDCL = document.visibilityState || ""
                });
                if (z()) {
                    t.metricsCollected.interaction = false;
                    (e = t.gatherEvents).push.apply(e, S)
                }
                Y() && (t.metricsCollected.paint = false);
                t.setupTTI();
                return t
            }
            e.prototype.gather = function(e) {
                if (e.type === O) {
                    this.metricsCollected.load = true;
                    return Ae(Ae({
                        context: this.context,
                        visibilityStateOnDCL: this.visibilityStateOnDCL
                    }, ee()), $())
                }
                if (-1 !== S.indexOf(e.type) && false === this.metricsCollected.interaction) {
                    this.metricsCollected.interaction = true;
                    return U(e)
                }
                e.type === P && (this.metricsCollected = {});
                return {}
            };
            e.prototype.gatherParse = function(e) {
                return this.parse(e)
            };
            e.prototype.observerParse = function(e) {
                if ("paint" === e.entryType) {
                    this.metricsCollected.paint = true;
                    return this.parse(ae(e))
                }
                "longtask" === e.entryType && window.__tti && window.__tti.e.push(e);
                return false
            };
            e.prototype.parse = function(r) {
                var t = this;
                this.deliveryBuffer.length && g.reduce(function(e, t) {
                    t in r && (e[t] = r[t]);
                    return e
                }, this.deliveryBuffer[0]);
                var e = Object.keys(this.metricsCollected).every(function(e) {
                    return t.metricsCollected[e]
                });
                return e
            };
            e.prototype.setupTTI = function() {
                var t = this;
                if (window.PerformanceLongTaskTiming && window.PerformanceObserver) {
                    window.__tti = {
                        e: []
                    };
                    this.metricsCollected.tti = false;
                    Object(n["getFirstConsistentlyInteractive"])().then(function(e) {
                        t.metricsCollected.tti = true;
                        t.parse({
                            tti: e
                        })
                    })
                }
            };
            e.eventName = "page_speed";
            return e
        }(Oe);
        var Ie = Pe;
        var Le = r("./src/main/webapp/universal/node_modules/resourcetiming-compression/src/resourcetiming-compression.js");
        var Re = r.n(Le);
        var De = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t)
                        t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);
                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var Ne = (void 0, function() {
            Ne = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            };
            return Ne.apply(this, arguments)
        });
        var xe = (void 0, function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
        });
        var ke = (void 0, function() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                e += arguments[t].length;
            for (var n = Array(e), i = 0, t = 0; t < r; t++)
                for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
                    n[i] = o[a];
            return n
        });
        var je = function(t) {
            De(e, t);
            function e() {
                var e = t.call(this) || this;
                e.entryTypes = ["resource"];
                e.gatherEvents = D;
                e.encodeConfig = f(h);
                e.readyToDeliver = false;
                e.dataBuffer = {
                    info: {},
                    timings: {}
                };
                e.resourceTimingData = [];
                window.performance && window.performance.getEntriesByType && window.performance.clearResourceTimings && window.PerformanceResourceTiming && window.performance.getEntriesByType("resource")[0] instanceof PerformanceResourceTiming ? e.supportType = Se.GATHER : e.supportType = Se.NONE;
                e.initImageLoaderData();
                return e
            }
            e.prototype.gather = function(e) {
                if (e.type === C) {
                    var t = e.detail.imageData,
                        r = void 0 === t ? {} : t;
                    Object.assign(this.dataBuffer.info.img, this.gatherImageInfo(r));
                    return this.dataBuffer
                }
                e.type === P && (this.readyToDeliver = true);
                this.resourceTimingData = ke(this.resourceTimingData, this.gatherImageTimingData());
                return this.dataBuffer
            };
            e.prototype.gatherParse = function() {
                if (this.readyToDeliver) {
                    var e = Re.a.compressResourceTiming(window, this.resourceTimingData, [], false).restiming;
                    this.dataBuffer.timings = e;
                    this.deliveryBuffer = [this.dataBuffer]
                }
                return this.readyToDeliver
            };
            e.prototype.initImageLoaderData = function() {
                var t = this;
                this.dataBuffer.info.img = {};
                if (window.ImageLoader && window.ImageLoader.imageInfo && Object.keys(window.ImageLoader.imageInfo).length) {
                    var r = window.ImageLoader.imageInfo;
                    Object.keys(r).forEach(function(e) {
                        Object.assign(t.dataBuffer.info.img, t.gatherImageInfo(r[e], true))
                    })
                }
            };
            e.prototype.isSquarespaceImage = function(e) {
                var t = e.name,
                    r = e.initiatorType;
                var n = document.createElement("a");
                n.href = t;
                var i = n.hostname,
                    o = n.pathname;
                return Boolean("img" === r && (i.indexOf("images.squarespace-cdn.com") > -1 || (i.indexOf("squarespace.com") || i.indexOf("sqsp.net") > -1 || i.indexOf("squarespace.net") > -1) && o.indexOf("static") > -1))
            };
            e.prototype.gatherImageTimingData = function() {
                var e = window.performance.getEntriesByType("resource").filter(this.isSquarespaceImage);
                window.performance.clearResourceTimings();
                return e
            };
            e.prototype.gatherImageInfo = function(e, t) {
                var r;
                void 0 === t && (t = false);
                var n = e.naturalDimensions,
                    i = void 0 === n ? {} : n,
                    o = e.parentElementDimensions,
                    a = void 0 === o ? {} : o,
                    s = e.isVisible,
                    u = void 0 !== s && s,
                    c = e.assetUrl,
                    f = e.squarespaceSize,
                    d = xe(e, ["naturalDimensions", "parentElementDimensions", "isVisible", "assetUrl", "squarespaceSize"]);
                if (!c || !f)
                    return {};
                var p = c + "?format=" + e.squarespaceSize;
                var l = Ne({
                    assetUrl: p,
                    squarespaceSize: f
                }, d);
                if (i.hasOwnProperty("height") && i.hasOwnProperty("width")) {
                    l.naturalHeight = Math.round(i.height);
                    l.naturalWidth = Math.round(i.width)
                }
                if (a.hasOwnProperty("height") && a.hasOwnProperty("width")) {
                    l.parentHeight = Math.round(a.height);
                    l.parentWidth = Math.round(a.width)
                }
                l.visibleInSession = u;
                l.visibleOnLoad = t && u;
                return r = {}, r[p] = l, r
            };
            e.eventName = "resource";
            return e
        }(Oe);
        var Be = je;
        function Me(e) {
            return "string" === typeof e && e.substring && "rum-" === e.substring(0, 4)
        }
        function qe(e) {
            return "number" === typeof e ? Math.round(e) : e
        }
        var Fe = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t)
                        t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);
                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var He = (void 0, function() {
            He = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            };
            return He.apply(this, arguments)
        });
        var Ue = function(o) {
            Fe(e, o);
            function e() {
                var e = o.call(this) || this;
                e.gatherEvents = [E];
                e.encodeConfig = f(m);
                e.supportType = Se.GATHER;
                e.detailCache = {};
                e.measureMarkCache = {};
                if (V()) {
                    var t = window.performance.getEntriesByType("measure");
                    for (var r = 0, n = t; r < n.length; r++) {
                        var i = n[r];
                        e.parse(K(i))
                    }
                } else
                    e.supportType = Se.NONE;
                return e
            }
            e.prototype.gather = function(e) {
                if (e && Ye(e.detail) && Ye(e.detail.userTimingEntry)) {
                    var t = e.detail,
                        r = t.userTimingEntry,
                        n = t.startMark,
                        i = t.endMark,
                        o = t.detail;
                    if (r.entryType === T)
                        this.addDetail(r.name, o);
                    else if (r.entryType === _) {
                        this.addMeasure(r.name, n, i);
                        return He(He(He({}, K(r)), this.getDetails(r.name)), {
                            measureDetail: o
                        })
                    }
                }
                return {}
            };
            e.prototype.gatherParse = function(e) {
                this.parse(e);
                return true
            };
            e.prototype.parse = function(e) {
                if (!Me(e.name))
                    return false;
                var t = {};
                for (var r = 0, n = y; r < n.length; r++) {
                    var i = n[r];
                    e.hasOwnProperty(i) && (t[i] = qe(e[i]))
                }
                this.deliveryBuffer.push(t);
                return true
            };
            e.prototype.addMeasure = function(e, t, r) {
                this.measureMarkCache[e] = {
                    startMarkName: t,
                    endMarkName: r
                }
            };
            e.prototype.addDetail = function(e, t) {
                this.detailCache[e] = Ve(t)
            };
            e.prototype.getDetails = function(e) {
                var t = {};
                var r = this.measureMarkCache[e];
                if (void 0 !== r) {
                    delete this.measureMarkCache[e];
                    var n = r.startMarkName,
                        i = r.endMarkName;
                    if (void 0 !== n && this.detailCache.hasOwnProperty(n)) {
                        t.startMarkDetail = this.detailCache[n];
                        delete this.detailCache[n]
                    }
                    if (void 0 !== i && this.detailCache.hasOwnProperty(i)) {
                        t.endMarkDetail = this.detailCache[i];
                        delete this.detailCache[i]
                    }
                }
                return t
            };
            e.eventName = "user";
            return e
        }(Oe);
        var ze = Ue;
        function Ve(e) {
            if ("object" !== typeof e || null === e)
                return e;
            var t = {};
            for (var r in e)
                r in e && (t[r] = e[r]);
            return t
        }
        function Ye(e) {
            return null !== e && "object" === typeof e
        }
        var Xe = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t)
                        t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);
                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var Ge = function(t) {
            Xe(e, t);
            function e() {
                var e = t.call(this) || this;
                e.gatherEvents = [P, I];
                e.supportType = Se.GATHER;
                e.encodeConfig = f();
                W() || (e.supportType = Se.NONE);
                return e
            }
            e.prototype.gather = function() {
                if (Ke())
                    return window.YUI.stats.getSerializedDataForReporter();
                return {}
            };
            e.prototype.gatherParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.eventName = "yui_stats";
            return e
        }(Oe);
        var We = Ge;
        function Ke() {
            return window.YUI && window.YUI.stats && window.YUI.stats.getSerializedDataForReporter && "function" === typeof window.YUI.stats.getSerializedDataForReporter
        }
        var $e = [Ie, ze, Be, We];
        function Ze(r, e, n, i) {
            e.forEach(function(e) {
                A.indexOf(e) > -1 && et() ? r({
                    type: e
                }) : window.addEventListener(e, function e(t) {
                    try {
                        n && window.removeEventListener(t.type, e);
                        return r(t)
                    } catch (e) {
                        i(e, {
                            fireOnce: n,
                            event: t
                        })
                    }
                })
            })
        }
        function Je(r, n) {
            if (!("PerformanceObserver" in window))
                return;
            var i = function(e) {
                e.forEach(function(e) {
                    var t = new CustomEvent(Qe(e.entryType), {
                        detail: e.toJSON()
                    });
                    window.dispatchEvent(t)
                })
            };
            var t = function(e) {
                var t = e.entryType;
                return r.indexOf(t) > -1
            };
            var o = function(e) {
                var t = e.entryType;
                return "navigation" === t
            };
            i(performance.getEntries().filter(function(e) {
                return t(e) && !o(e) || et() && o(e)
            }));
            var e = new window.PerformanceObserver(function(e) {
                var t;
                try {
                    t = e.getEntries();
                    i(t)
                } catch (e) {
                    n(e, t)
                }
            });
            if (r.length > 0)
                try {
                    e.observe({
                        entryTypes: r
                    })
                } catch (e) {}
        }
        function Qe(e) {
            return e + "-observer"
        }
        function et() {
            return "complete" === document.readyState
        }
        var tt = [];
        var rt;
        var nt = 2e3;
        function it(e, t, r) {
            void 0 === r && (r = false);
            if (window.requestIdleCallback && !r) {
                tt.push(e);
                rt = rt || window.requestIdleCallback(function(e) {
                    return ot(e, t)
                }, {
                    timeout: nt
                })
            } else
                e.deliver()
        }
        function ot(e, t) {
            try {
                while ((e.timeRemaining() > 0 || e.didTimeout) && tt.length) {
                    var r = tt.shift();
                    r && r.deliver()
                }
                rt = tt.length ? window.requestIdleCallback(function(e) {
                    return ot(e, t)
                }, {
                    timeout: nt
                }) : void 0
            } catch (e) {
                t(e)
            }
        }
        var at = {
            passive: true,
            capture: true
        };
        function st(t, e, r) {
            var n = function() {
                try {
                    e(t);
                    o()
                } catch (e) {
                    r(e, t)
                }
            };
            var i = function() {
                try {
                    o()
                } catch (e) {
                    r(e)
                }
            };
            function o() {
                window.removeEventListener("pointerup", n, at);
                window.removeEventListener("pointercancel", i, at)
            }
            window.addEventListener("pointerup", n, at);
            window.addEventListener("pointercancel", i, at)
        }
        function ut(i) {
            return function(e, t) {
                void 0 === t && (t = false);
                var r = i.getABTestVariant(e + "-rollout", t.toString()).variant;
                var n = "true" === r;
                return n
            }
        }
        function ct(i, o, a, s) {
            return function(e, t) {
                var r = i(t.eventName + "-plugin");
                if (r) {
                    var n = (new t).setApp(o).setId(a);
                    n.requiresContext && (n.context = s);
                    e.push(n)
                }
                return e
            }
        }
        function ft(r, n, i) {
            return function(e) {
                var t = e.detail;
                try {
                    r.observerParse(t) && it(r, i)
                } catch (e) {
                    i(e, {
                        observerEventType: n,
                        parsedData: r.getDeliveryBuffer(),
                        observerData: t
                    })
                }
            }
        }
        function dt(n, i) {
            function e(e) {
                var t;
                try {
                    t = n.gather(e);
                    if ("pointerdown" === t.eventType)
                        st(t, function(e) {
                            return pt(n, e, i)
                        }, i);
                    else {
                        var r = e.type === P || e.type === I;
                        pt(n, t, i, r)
                    }
                } catch (e) {
                    i(e, {
                        eventName: n.getEventName(),
                        parsedData: n.getDeliveryBuffer(),
                        rawData: t
                    })
                }
            }
            return e
        }
        function pt(e, t, r, n) {
            void 0 === n && (n = false);
            var i = e.gatherParse(t);
            i && it(e, r, n)
        }
        function lt() {
            return new Promise(function(t, r) {
                var n = new XMLHttpRequest;
                n.timeout = M;
                n.onreadystatechange = function() {
                    if (n.readyState === XMLHttpRequest.DONE)
                        if (200 === n.status)
                            try {
                                var e = JSON.parse(n.response);
                                t(e)
                            } catch (e) {
                                r(e)
                            }
                        else
                            r(n.status)
                };
                n.ontimeout = function() {
                    r("Metric settings request timeout")
                };
                n.open("GET", o + s, true);
                n.send()
            })
        }
        var vt = function(r, n) {
            return function(e, t) {
                ge("RUMError[" + r + "]: " + e);
                n && n(e, t)
            }
        };
        var mt = function(e) {
            var t = {
                appName: e.appName || "",
                context: e.context || {},
                enabled: "boolean" !== typeof e.enabled || e.enabled
            };
            t.captureException = vt(t.appName, e.captureException);
            return t
        };
        function ht(e) {
            var a = mt(e);
            var n;
            return lt().then(function(e) {
                n = e.pageLoadId;
                if (!n)
                    throw new Error("Unable to resolve pageLoadId");
                return new i["StaticPraetorClient"](e)
            }).then(function(e) {
                var t = ut(e);
                if (["rum", a.appName + "-app"].some(function(e) {
                    return !t(e)
                }))
                    return;
                var r = $e.reduce(ct(t, a.appName, n, a.context), []);
                var o = [];
                r.forEach(function(n) {
                    var e = n.getSupportType();
                    if (e === Se.OBSERVE || e === Se.BOTH) {
                        var t = n.getEntryTypes();
                        t.forEach(function(e) {
                            var t = Qe(e);
                            o.push(e);
                            var r = ft(n, t, a.captureException);
                            window.addEventListener(t, r)
                        })
                    }
                    if (e === Se.GATHER || e === Se.BOTH) {
                        var r = n.getGatherEvents();
                        var i = dt(n, a.captureException);
                        Ze(i, r, n.shouldFireOnce(), a.captureException)
                    }
                });
                Je(o, a.captureException);
                a.enabled && ve(a.captureException)
            }).catch(function(e) {
                a.captureException(e, a)
            })
        }
        function gt(e, t) {
            "function" === typeof window.dispatchEvent && "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent(e, {
                detail: t
            }))
        }
        function yt(e, t) {
            try {
                if (!Tt())
                    return;
                var r = x + e;
                window.performance.mark(r);
                var n = {
                    userTimingEntry: _t(r)
                };
                "object" === typeof t && null !== t && (n.detail = t.detail);
                gt(E, n)
            } catch (e) {
                ge("RUMError[mark]: " + e)
            }
        }
        function wt(e, t) {
            try {
                if (!(Tt() && Et()))
                    return;
                var r = "object" === typeof t && null !== t;
                var n = r && "string" === typeof t.end;
                var i = r && "string" === typeof t.start;
                var o = x + e;
                var a = i ? x + t.start : o;
                var s = n ? x + t.end : void 0;
                try {
                    window.performance.measure(o, a, s)
                } catch (e) {
                    if (!(e instanceof DOMException))
                        throw e;
                    St(o, a, s)
                }
                var u = _t(o);
                var c = {
                    detail: r ? t.detail : void 0,
                    endMark: s,
                    startMark: a,
                    userTimingEntry: u
                };
                gt(E, c);
                return u
            } catch (e) {
                ge("RUMError[measure]: " + e)
            }
        }
        function Et() {
            return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
        }
        function Tt() {
            return "mark" in window.performance && "measure" in window.performance
        }
        function _t(e) {
            var t = window.performance.getEntriesByName(e);
            return t[t.length - 1]
        }
        function St(e, t, r) {
            var n = "navigationStart";
            var i;
            window.performance.getEntriesByName(t, "mark").length && (n = t);
            r && window.performance.getEntriesByName(r, "mark").length && (i = r);
            window.performance.measure(e, n, i)
        }
        r.d(t, "default", function() {
            return ht
        });
        r.d(t, "getPerformanceData", function() {
            return Ee
        });
        r.d(t, "mark", function() {
            return yt
        });
        r.d(t, "measure", function() {
            return wt
        })
    },
    "./src/main/webapp/universal/node_modules/resourcetiming-compression/src/resourcetiming-compression.js": function(r, n, e) {
        var i,
            o;
        (function(v) {
            "use strict";
            var e;
            var t;
            if ("undefined" !== typeof v) {
                e = v;
                t = e.ResourceTimingCompression
            }
            var l = {};
            l.HOSTNAMES_REVERSED = true;
            l.INITIATOR_TYPES = {
                other: 0,
                img: 1,
                link: 2,
                script: 3,
                css: 4,
                xmlhttprequest: 5,
                html: 6,
                image: 7,
                beacon: 8,
                fetch: 9,
                iframe: "a",
                subdocument: "a",
                body: "b",
                input: "c",
                frame: "a",
                object: "d",
                video: "e",
                audio: "f",
                source: "g",
                track: "h",
                embed: "i",
                eventsource: "j",
                navigation: 6
            };
            l.DEFAULT_XSS_BREAK_WORDS = [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi];
            l.XSS_BREAK_DELIM = "\n";
            l.DEFAULT_URL_LIMIT = 500;
            l.SPECIAL_DATA_PREFIX = "*";
            l.SPECIAL_DATA_DIMENSION_TYPE = "0";
            l.SPECIAL_DATA_SIZE_TYPE = "1";
            l.SPECIAL_DATA_SCRIPT_TYPE = "2";
            l.SPECIAL_DATA_SCRIPT_ASYNC_ATTR = 1;
            l.SPECIAL_DATA_SCRIPT_DEFER_ATTR = 2;
            l.SPECIAL_DATA_SCRIPT_LOCAT_ATTR = 4;
            l.SPECIAL_DATA_SERVERTIMING_TYPE = "3";
            l.SPECIAL_DATA_LINK_ATTR_TYPE = "4";
            l.REL_TYPES = {
                prefetch: 1,
                preload: 2,
                prerender: 3,
                stylesheet: 4
            };
            l.HOSTNAME_REGEX = /^(https?:\/\/)([^\/]+)(.*)/;
            l.trimUrls = [];
            l.xssBreakWords = l.DEFAULT_XSS_BREAK_WORDS;
            l.noConflict = function() {
                e.ResourceTimingCompression = t;
                return l
            };
            l.convertToTrie = function(e) {
                var t = {},
                    r,
                    n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    c;
                for (r in e) {
                    if (!e.hasOwnProperty(r))
                        continue;
                    n = r;
                    for (i = 0; i < this.xssBreakWords.length; i++)
                        n = n.replace(this.xssBreakWords[i], "$1" + l.XSS_BREAK_DELIM + "$2");
                    o = e[r];
                    a = n.split("");
                    u = t;
                    for (i = 0; i < a.length; i++) {
                        s = a[i];
                        c = u[s];
                        "undefined" === typeof c ? u = u[s] = i === a.length - 1 ? o : {} : "string" === typeof c ? u = u[s] = {
                            "|": c
                        } : i === a.length - 1 ? u[s]["|"] = o : u = u[s]
                    }
                }
                return t
            };
            l.optimizeTrie = function(e, t) {
                var r = 0,
                    n,
                    i,
                    o;
                var a = [];
                for (n in e)
                    e.hasOwnProperty(n) && a.push(n);
                for (var s = 0; s < a.length; s++) {
                    n = a[s];
                    if ("object" === typeof e[n]) {
                        i = this.optimizeTrie(e[n], false);
                        if (i) {
                            delete e[n];
                            if (n === l.XSS_BREAK_DELIM) {
                                n = i.name;
                                r++
                            } else
                                n += i.name;
                            e[n] = i.value
                        }
                    }
                    r++
                }
                if (1 === r) {
                    if (t) {
                        o = {};
                        o[n] = e[n];
                        return o
                    }
                    return {
                        name: n,
                        value: e[n]
                    }
                }
                if (t)
                    return e;
                return false
            };
            l.trimTiming = function(e, t) {
                "number" !== typeof e && (e = 0);
                "number" !== typeof t && (t = 0);
                var r = Math.round(e || 0),
                    n = Math.round(t || 0);
                return 0 === r ? 0 : r - n
            };
            l.getNavStartTime = function(e) {
                var t = 0,
                    r;
                if (!e)
                    return t;
                try {
                    r = e.location && e.location.href;
                    "performance" in e && e.performance && e.performance.timing && e.performance.timing.navigationStart && (t = e.performance.timing.navigationStart)
                } catch (e) {}
                return t
            };
            l.findPerformanceEntriesForFrame = function(e, t, r, n) {
                var i = [],
                    o,
                    a,
                    s,
                    u,
                    c,
                    f,
                    d,
                    p,
                    l,
                    v = {},
                    m = {},
                    h;
                "undefined" === typeof t && (t = true);
                "undefined" === typeof r && (r = 0);
                "undefined" === typeof n && (n = 0);
                if (n > 10)
                    return i;
                try {
                    s = this.getNavStartTime(e);
                    h = e.document.createElement("a");
                    w(h, m, "script");
                    w(h, v, "link");
                    if (e.frames)
                        for (o = 0; o < e.frames.length; o++) {
                            u = this.getNavStartTime(e.frames[o]);
                            c = 0;
                            u > s && (c = r + (u - s));
                            i = i.concat(this.findPerformanceEntriesForFrame(e.frames[o], false, c, ++n))
                        }
                    try {
                        p = e.location && e.location.href;
                        if (!("performance" in e) || !e.performance || !e.performance.getEntriesByType)
                            return i
                    } catch (e) {
                        return i
                    }
                    if (t) {
                        a = e.performance.getEntriesByType("navigation");
                        if (a && 1 === a.length) {
                            f = a[0];
                            i.push({
                                name: e.location.href,
                                startTime: 0,
                                initiatorType: "html",
                                redirectStart: f.redirectStart,
                                redirectEnd: f.redirectEnd,
                                fetchStart: f.fetchStart,
                                domainLookupStart: f.domainLookupStart,
                                domainLookupEnd: f.domainLookupEnd,
                                connectStart: f.connectStart,
                                secureConnectionStart: f.secureConnectionStart,
                                connectEnd: f.connectEnd,
                                requestStart: f.requestStart,
                                responseStart: f.responseStart,
                                responseEnd: f.responseEnd,
                                serverTiming: f.serverTiming || []
                            })
                        } else if (e.performance.timing) {
                            d = e.performance.timing;
                            0 !== d.navigationStart && d.responseEnd <= d.navigationStart + 36e5 && i.push({
                                name: e.location.href,
                                startTime: 0,
                                initiatorType: "html",
                                redirectStart: d.redirectStart ? d.redirectStart - d.navigationStart : 0,
                                redirectEnd: d.redirectEnd ? d.redirectEnd - d.navigationStart : 0,
                                fetchStart: d.fetchStart ? d.fetchStart - d.navigationStart : 0,
                                domainLookupStart: d.domainLookupStart ? d.domainLookupStart - d.navigationStart : 0,
                                domainLookupEnd: d.domainLookupEnd ? d.domainLookupEnd - d.navigationStart : 0,
                                connectStart: d.connectStart ? d.connectStart - d.navigationStart : 0,
                                secureConnectionStart: d.secureConnectionStart ? d.secureConnectionStart - d.navigationStart : 0,
                                connectEnd: d.connectEnd ? d.connectEnd - d.navigationStart : 0,
                                requestStart: d.requestStart ? d.requestStart - d.navigationStart : 0,
                                responseStart: d.responseStart ? d.responseStart - d.navigationStart : 0,
                                responseEnd: d.responseEnd ? d.responseEnd - d.navigationStart : 0
                            })
                        }
                    }
                    var g = e.performance.getEntriesByType("resource");
                    var y = [];
                    for (o = 0; g && o < g.length; o++) {
                        d = g[o];
                        l = {
                            name: d.name,
                            initiatorType: d.initiatorType,
                            startTime: d.startTime + r,
                            redirectStart: d.redirectStart ? d.redirectStart + r : 0,
                            redirectEnd: d.redirectEnd ? d.redirectEnd + r : 0,
                            fetchStart: d.fetchStart ? d.fetchStart + r : 0,
                            domainLookupStart: d.domainLookupStart ? d.domainLookupStart + r : 0,
                            domainLookupEnd: d.domainLookupEnd ? d.domainLookupEnd + r : 0,
                            connectStart: d.connectStart ? d.connectStart + r : 0,
                            secureConnectionStart: d.secureConnectionStart ? d.secureConnectionStart + r : 0,
                            connectEnd: d.connectEnd ? d.connectEnd + r : 0,
                            requestStart: d.requestStart ? d.requestStart + r : 0,
                            responseStart: d.responseStart ? d.responseStart + r : 0,
                            responseEnd: d.responseEnd ? d.responseEnd + r : 0
                        };
                        if (d.encodedBodySize || d.decodedBodySize || d.transferSize) {
                            l.encodedBodySize = d.encodedBodySize;
                            l.decodedBodySize = d.decodedBodySize;
                            l.transferSize = d.transferSize
                        }
                        d.serverTiming && d.serverTiming.length && (l.serverTiming = d.serverTiming);
                        this.updateScriptFlags(m, d, l);
                        this.updateLinkFlags(v, d, l);
                        y.push(l)
                    }
                    i = i.concat(y)
                } catch (e) {
                    return i
                }
                return i
            };
            l.updateScriptFlags = function(e, t, r) {
                if (("script" === t.initiatorType || "link" === t.initiatorType) && e[t.name]) {
                    var n = e[t.name];
                    r.scriptAttrs = (n.async ? l.SPECIAL_DATA_SCRIPT_ASYNC_ATTR : 0) | (n.defer ? l.SPECIAL_DATA_SCRIPT_DEFER_ATTR : 0);
                    while (1 === n.nodeType && "BODY" !== n.nodeName)
                        n = n.parentNode;
                    r.scriptAttrs |= "BODY" === n.nodeName ? l.SPECIAL_DATA_SCRIPT_LOCAT_ATTR : 0
                }
            };
            l.updateLinkFlags = function(e, t, r) {
                "link" === t.initiatorType && e[t.name] && e[t.name].rel.split(/[\u0009\u000A\u000C\u000D\u0020]+/).find(function(e) {
                    e = e.toLowerCase();
                    if (l.REL_TYPES[e]) {
                        r.linkAttrs = l.REL_TYPES[e];
                        return true
                    }
                    return false
                })
            };
            l.toBase36 = function(e) {
                if ("number" === typeof e && 0 !== e)
                    return e.toString(36);
                return "string" === typeof e ? e : ""
            };
            function w(t, r, e) {
                Array.prototype.forEach.call(t.ownerDocument.getElementsByTagName(e), function(e) {
                    t.href = e.currentSrc || e.src || e.getAttribute("xlink:href") || e.href;
                    t.href.match(/^https?:\/\//) && (r[t.href] = e)
                })
            }
            l.getVisibleEntries = function(e) {
                if (!e)
                    return {};
                var t = ["img", "iframe", "image"],
                    c = {},
                    f,
                    d,
                    p = e.document,
                    l = p.createElement("A");
                f = void 0 !== e.pageXOffset ? e.pageXOffset : (p.documentElement || p.body.parentNode || p.body).scrollLeft;
                d = void 0 !== e.pageYOffset ? e.pageYOffset : (p.documentElement || p.body.parentNode || p.body).scrollTop;
                t.forEach(function(e) {
                    var t = p.getElementsByTagName(e),
                        r,
                        n,
                        i,
                        o;
                    for (n = 0; n < t.length; n++) {
                        r = t[n];
                        if (!r)
                            continue;
                        o = r.currentSrc || r.src || "function" === typeof r.getAttribute && r.getAttribute("src") || r.getAttribute("xlink:href");
                        l.href = o;
                        o = l.href;
                        if (!o || c[o])
                            continue;
                        i = r.getBoundingClientRect();
                        if ((i.height || r.offsetHeight) && (i.width || r.offsetWidth)) {
                            c[o] = [i.height || r.offsetHeight, i.width || r.offsetWidth, Math.round(i.top + d), Math.round(i.left + f)];
                            if (!r.naturalHeight && !r.naturalWidth)
                                continue;
                            var a,
                                s,
                                u;
                            if (r.currentSrc && (r.srcset || r.parentNode && r.parentNode.nodeName && "PICTURE" === r.parentNode.nodeName.toUpperCase())) {
                                a = r.isConnected ? r.ownerDocument.createElement("IMG") : new v.Image;
                                a.src = o
                            } else
                                a = r;
                            s = a.naturalHeight || r.naturalHeight;
                            u = a.naturalWidth || r.naturalWidth;
                            !s && !u || c[o][0] === s && c[o][1] === u || c[o].push(s, u)
                        }
                    }
                });
                return c
            };
            l.inArray = function(e, t) {
                var r;
                if ("undefined" === typeof e || "undefined" === typeof t || !t.length)
                    return false;
                for (r = 0; r < t.length; r++)
                    if (t[r] === e)
                        return true;
                return false
            };
            l.getFilteredResourceTiming = function(e, t, r, n) {
                var i = this.findPerformanceEntriesForFrame(e, true, 0, 0),
                    o,
                    a,
                    s = this.getNavStartTime(e),
                    u = {};
                if (!i || !i.length)
                    return {
                        entries: []
                    };
                var c = [];
                for (o = 0; o < i.length; o++) {
                    a = i[o];
                    if (0 === a.name.indexOf("about:") || 0 === a.name.indexOf("javascript:"))
                        continue;
                    if (t && s + a.startTime < t)
                        continue;
                    if (r && s + a.startTime > r)
                        break;
                    if ("undefined" !== typeof n && "*" !== n && n.length && (!a.initiatorType || !this.inArray(a.initiatorType, n)))
                        continue;
                    l.accumulateServerTimingEntries(u, a.serverTiming);
                    c.push(a)
                }
                var f = l.compressServerTiming(u);
                return {
                    entries: c,
                    serverTiming: {
                        lookup: f,
                        indexed: l.indexServerTiming(f)
                    }
                }
            };
            l.compressSize = function(e) {
                var t,
                    r,
                    n,
                    i;
                if (e.encodedBodySize || e.decodedBodySize || e.transferSize) {
                    t = e.transferSize;
                    r = e.encodedBodySize;
                    n = e.decodedBodySize;
                    i = [r, t ? t - r : "_", n - r];
                    return i.map(this.toBase36).join(",").replace(/,+$/, "")
                }
                return ""
            };
            l.cleanupURL = function(e, t) {
                var r;
                if (!e || "[object Array]" === Object.prototype.toString.call(e))
                    return "";
                if ("undefined" !== typeof t && e && e.length > t) {
                    r = e.indexOf("?");
                    e = -1 !== r && r < t ? e.substr(0, r) + "?..." : e.substr(0, t - 3) + "..."
                }
                return e
            };
            l.trimUrl = function(e, t) {
                var r,
                    n,
                    i;
                if (e && t)
                    for (r = 0; r < t.length; r++) {
                        i = t[r];
                        if ("string" === typeof i) {
                            n = e.indexOf(i);
                            if (-1 !== n) {
                                e = e.substr(0, n + i.length) + "...";
                                break
                            }
                        } else
                            i instanceof RegExp && i.test(e) && (e = e.replace(i, "$1") + "...")
                    }
                return this.cleanupURL(e, l.DEFAULT_URL_LIMIT)
            };
            l.getResourceTiming = function(e, t, r, n) {
                "undefined" === typeof e && (e = v);
                var i = l.getFilteredResourceTiming(e, t, r);
                var o = i.entries,
                    a = i.serverTiming;
                if (!o || !o.length)
                    return {};
                return l.compressResourceTiming(e, o, a, n)
            };
            l.compressResourceTiming = function(e, t, o, r) {
                var n,
                    i,
                    a = {},
                    s,
                    u,
                    c,
                    f,
                    d = {};
                r || (d = this.getVisibleEntries(e));
                for (n = 0; n < t.length; n++) {
                    i = t[n];
                    s = this.INITIATOR_TYPES[i.initiatorType];
                    "undefined" === typeof s && (s = 0);
                    f = s + [this.trimTiming(i.startTime, 0), this.trimTiming(i.responseEnd, i.startTime), this.trimTiming(i.responseStart, i.startTime), this.trimTiming(i.requestStart, i.startTime), this.trimTiming(i.connectEnd, i.startTime), this.trimTiming(i.secureConnectionStart, i.startTime), this.trimTiming(i.connectStart, i.startTime), this.trimTiming(i.domainLookupEnd, i.startTime), this.trimTiming(i.domainLookupStart, i.startTime), this.trimTiming(i.redirectEnd, i.startTime), this.trimTiming(i.redirectStart, i.startTime)].map(this.toBase36).join(",").replace(/,+$/, "");
                    var p = this.compressSize(i);
                    "" !== p && (f += l.SPECIAL_DATA_PREFIX + l.SPECIAL_DATA_SIZE_TYPE + p);
                    i.hasOwnProperty("scriptAttrs") && (f += l.SPECIAL_DATA_PREFIX + l.SPECIAL_DATA_SCRIPT_TYPE + i.scriptAttrs);
                    i.hasOwnProperty("linkAttrs") && (f += l.SPECIAL_DATA_PREFIX + l.SPECIAL_DATA_LINK_ATTR_TYPE + i.linkAttrs);
                    i.serverTiming && i.serverTiming.length && (f += l.SPECIAL_DATA_PREFIX + l.SPECIAL_DATA_SERVERTIMING_TYPE + i.serverTiming.reduce(function(e, t, r) {
                        var n = String(t.duration);
                        "0." === n.substring(0, 2) && (n = n.substring(1));
                        var i = l.identifyServerTimingEntry(o.indexed[t.name].index, o.indexed[t.name].descriptions[t.description]);
                        e += (r > 0 ? "," : "") + n + i;
                        return e
                    }, ""));
                    c = u = this.trimUrl(i.name, this.trimUrls);
                    l.HOSTNAMES_REVERSED && (c = this.reverseHostname(u));
                    void 0 !== a[c] ? a[c] += "|" + f : void 0 !== d[u] ? a[c] = l.SPECIAL_DATA_PREFIX + l.SPECIAL_DATA_DIMENSION_TYPE + d[u].map(this.toBase36).join(",").replace(/,+$/, "") + "|" + f : a[c] = f
                }
                return {
                    restiming: this.optimizeTrie(this.convertToTrie(a), true),
                    servertiming: o.lookup
                }
            };
            l.reverseHostname = function(e) {
                return e.replace(l.HOSTNAME_REGEX, function(e, t, r, n) {
                    return t + l.reverseString(r) + n
                })
            };
            l.reverseString = function(e) {
                var t = e.length,
                    r = "";
                while (t--)
                    r += e[t];
                return r
            };
            l.accumulateServerTimingEntries = function(r, e) {
                (e || []).forEach(function(e) {
                    "undefined" === typeof r[e.name] && (r[e.name] = {
                        count: 0,
                        counts: {}
                    });
                    var t = r[e.name];
                    t.counts[e.description] = t.counts[e.description] || 0;
                    t.counts[e.description]++;
                    t.count++
                })
            };
            l.compressServerTiming = function(n) {
                return Object.keys(n).sort(function(e, t) {
                    return n[t].count - n[e].count
                }).reduce(function(e, r) {
                    var t = Object.keys(n[r].counts).sort(function(e, t) {
                        return n[r].counts[t] - n[r].counts[e]
                    });
                    e.push(1 === t.length && "" === t[0] ? r : [r].concat(t));
                    return e
                }, [])
            };
            l.indexServerTiming = function(e) {
                return e.reduce(function(e, t, r) {
                    var n,
                        i;
                    if (Array.isArray(t)) {
                        n = t[0];
                        i = t.slice(1).reduce(function(e, t, r) {
                            e[t] = r;
                            return e
                        }, {})
                    } else {
                        n = t;
                        i = {
                            "": 0
                        }
                    }
                    e[n] = {
                        index: r,
                        descriptions: i
                    };
                    return e
                }, {})
            };
            l.identifyServerTimingEntry = function(e, t) {
                var r = "";
                e && (r += e);
                t && (r += "." + t);
                r.length && (r = ":" + r);
                return r
            };
            true;
            !(i = [], o = function() {
                return l
            }.apply(n, i), void 0 !== o && (r.exports = o))
        })("undefined" !== typeof window ? window : void 0)
    },
    "./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js": function(O, C, e) {
        (function(_) {
            var S,
                b;
            (function() {
                var t = "undefined" != typeof window && window === this ? this : "undefined" != typeof _ && null != _ ? _ : this,
                    r = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, r) {
                        e != Array.prototype && e != Object.prototype && (e[t] = r.value)
                    };
                function n() {
                    n = function() {};
                    t.Symbol || (t.Symbol = e)
                }
                var i = 0;
                function e(e) {
                    return "jscomp_symbol_" + (e || "") + i++
                }
                function o() {
                    n();
                    var e = t.Symbol.iterator;
                    e = e || (t.Symbol.iterator = t.Symbol("iterator"));
                    "function" != typeof Array.prototype[e] && r(Array.prototype, e, {
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return a(this)
                        }
                    });
                    o = function() {}
                }
                function a(e) {
                    var t = 0;
                    return s(function() {
                        return t < e.length ? {
                            done: !1,
                            value: e[t++]
                        } : {
                            done: !0
                        }
                    })
                }
                function s(e) {
                    o();
                    e = {
                        next: e
                    };
                    e[t.Symbol.iterator] = function() {
                        return this
                    };
                    return e
                }
                function u(e) {
                    o();
                    var t = e[Symbol.iterator];
                    return t ? t.call(e) : a(e)
                }
                function c(e) {
                    if (!(e instanceof Array)) {
                        e = u(e);
                        for (var t, r = []; !(t = e.next()).done;)
                            r.push(t.value);
                        e = r
                    }
                    return e
                }
                var f = 0;
                function d(i, o) {
                    var a = XMLHttpRequest.prototype.send,
                        s = f++;
                    XMLHttpRequest.prototype.send = function(e) {
                        for (var t = [], r = 0; r < arguments.length; ++r)
                            t[r - 0] = arguments[r];
                        var n = this;
                        i(s);
                        this.addEventListener("readystatechange", function() {
                            4 === n.readyState && o(s)
                        });
                        return a.apply(this, t)
                    }
                }
                function p(o, a) {
                    var s = fetch;
                    fetch = function(e) {
                        for (var i = [], t = 0; t < arguments.length; ++t)
                            i[t - 0] = arguments[t];
                        return new Promise(function(t, r) {
                            var n = f++;
                            o(n);
                            s.apply(null, [].concat(c(i))).then(function(e) {
                                a(n);
                                t(e)
                            }, function(e) {
                                a(e);
                                r(e)
                            })
                        })
                    }
                }
                var l = "img script iframe link audio video source".split(" ");
                function v(e, t) {
                    e = u(e);
                    for (var r = e.next(); !r.done; r = e.next())
                        if (r = r.value, t.includes(r.nodeName.toLowerCase()) || v(r.children, t))
                            return !0;
                    return !1
                }
                function m(r) {
                    var e = new MutationObserver(function(e) {
                        e = u(e);
                        for (var t = e.next(); !t.done; t = e.next())
                            t = t.value, "childList" == t.type && v(t.addedNodes, l) ? r(t) : "attributes" == t.type && l.includes(t.target.tagName.toLowerCase()) && r(t)
                    });
                    e.observe(document, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["href", "src"]
                    });
                    return e
                }
                function h(e, t) {
                    if (2 < e.length)
                        return performance.now();
                    var r = [];
                    t = u(t);
                    for (var n = t.next(); !n.done; n = t.next())
                        n = n.value, r.push({
                            timestamp: n.start,
                            type: "requestStart"
                        }), r.push({
                            timestamp: n.end,
                            type: "requestEnd"
                        });
                    t = u(e);
                    for (n = t.next(); !n.done; n = t.next())
                        r.push({
                            timestamp: n.value,
                            type: "requestStart"
                        });
                    r.sort(function(e, t) {
                        return e.timestamp - t.timestamp
                    });
                    e = e.length;
                    for (t = r.length - 1; 0 <= t; t--)
                        switch (n = r[t], n.type) {
                        case "requestStart":
                            e--;
                            break;
                        case "requestEnd":
                            e++;
                            if (2 < e)
                                return n.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                        }
                    return 0
                }
                function g(e) {
                    e = e || {};
                    this.w = !!e.useMutationObserver;
                    this.u = e.minValue || null;
                    e = window.__tti && window.__tti.e;
                    var t = window.__tti && window.__tti.o;
                    this.a = e ? e.map(function(e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    }) : [];
                    t && t.disconnect();
                    this.b = [];
                    this.f = new Map;
                    this.j = null;
                    this.v = -1 / 0;
                    this.i = !1;
                    this.h = this.c = this.s = null;
                    d(this.m.bind(this), this.l.bind(this));
                    p(this.m.bind(this), this.l.bind(this));
                    E(this);
                    this.w && (this.h = m(this.B.bind(this)))
                }
                g.prototype.getFirstConsistentlyInteractive = function() {
                    var t = this;
                    return new Promise(function(e) {
                        t.s = e;
                        "complete" == document.readyState ? y(t) : window.addEventListener("load", function() {
                            y(t)
                        })
                    })
                };
                function y(e) {
                    e.i = !0;
                    var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                        r = h(e.g, e.b);
                    w(e, Math.max(r + 5e3, t))
                }
                function w(o, e) {
                    !o.i || o.v > e || (clearTimeout(o.j), o.j = setTimeout(function() {
                        var e = performance.timing.navigationStart,
                            t = h(o.g, o.b),
                            e = (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) || performance.timing.domContentLoadedEventEnd - e;
                        if (o.u)
                            var r = o.u;
                        else
                            r = performance.timing.domContentLoadedEventEnd ? (r = performance.timing, r.domContentLoadedEventEnd - r.navigationStart) : null;
                        var n = performance.now();
                        null === r && w(o, Math.max(t + 5e3, n + 1e3));
                        var i = o.a;
                        t = 5e3 > n - t ? null : (t = i.length ? i[i.length - 1].end : e, 5e3 > n - t ? null : Math.max(t, r));
                        t && (o.s(t), clearTimeout(o.j), o.i = !1, o.c && o.c.disconnect(), o.h && o.h.disconnect());
                        w(o, performance.now() + 1e3)
                    }, e - performance.now()), o.v = e)
                }
                function E(n) {
                    n.c = new PerformanceObserver(function(e) {
                        e = u(e.getEntries());
                        for (var t = e.next(); !t.done; t = e.next())
                            if (t = t.value, "resource" === t.entryType && (n.b.push({
                                start: t.fetchStart,
                                end: t.responseEnd
                            }), w(n, h(n.g, n.b) + 5e3)), "longtask" === t.entryType) {
                                var r = t.startTime + t.duration;
                                n.a.push({
                                    start: t.startTime,
                                    end: r
                                });
                                w(n, r + 5e3)
                            }
                    });
                    n.c.observe({
                        entryTypes: ["longtask", "resource"]
                    })
                }
                g.prototype.m = function(e) {
                    this.f.set(e, performance.now())
                };
                g.prototype.l = function(e) {
                    this.f.delete(e)
                };
                g.prototype.B = function() {
                    w(this, performance.now() + 5e3)
                };
                t.Object.defineProperties(g.prototype, {
                    g: {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return [].concat(c(this.f.values()))
                        }
                    }
                });
                var T = {
                    getFirstConsistentlyInteractive: function(e) {
                        e = e || {};
                        return "PerformanceLongTaskTiming" in window ? new g(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                    }
                };
                true, O.exports ? O.exports = T : (true, !(S = [], b = function() {
                    return T
                }.apply(C, S), void 0 !== b && (O.exports = b)))
            })()
        }).call(this, e("./node_modules/webpack/buildin/global.js"))
    },
    "./src/main/webapp/universal/packages/enums/PageTypes.js": function(e, t) {
        var r = {
            MAIN_CONTENT: 1,
            CONTENT_COLLECTION: 1,
            PAGE: 2,
            SPLASH_PAGE: 3,
            CONTENT_ITEM: 50,
            NOT_FOUND: 100,
            ERROR: 101,
            SEARCH: 102,
            LOCK_SCREEN: 103,
            POPUP_OVERLAY: 104,
            PROTECTED_CONTENT: 105,
            SHOW_CART: 200,
            CHECKOUT: 201,
            ORDER_CONFIRMED: 202,
            DONATE: 203,
            CONTRIBUTION_CONFIRMED: 204,
            COMMERCE_CART_V2: 205,
            SUBSCRIPTION_CONFIRMED: 206,
            ORDER_RECEIVED: 207,
            MEMBERSHIP_CONFIRMED: 208,
            NEWSLETTER_UNSUBSCRIBE: 300,
            COMMERCE_EMAIL_PREVIEW: 301
        };
        e.exports = r
    },
    "./src/main/webapp/universal/packages/enums/StatusConstants.js": function(e, t) {
        var r = {
            EXPIRED: 1,
            PASTDUE: 2,
            TRIAL: 3,
            BETA: 4,
            REMOVED: 5,
            INTERNAL: 6,
            COMPED: 7,
            PAID: 8,
            V5_LINKED: 11,
            ACTIVE_PARKING_PAGE: 12,
            RESOLD: 13,
            RESOLD_GRACE_PERIOD: 14
        };
        e.exports = r
    },
    "./src/main/webapp/universal/src/apps/Performance/bootstrap.js": function(e, t, r) {
        "use strict";
        var n = r("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        var i = n(r("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js"));
        var o = n(r("./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js"));
        var u = n(r("./src/main/webapp/universal/packages/enums/StatusConstants.js"));
        var a = n(r("./src/main/webapp/universal/packages/enums/PageTypes.js"));
        function s(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }));
                r.push.apply(r, n)
            }
            return r
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(r), true).forEach(function(e) {
                    (0, i.default)(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }
        var f = window.Static && window.Static.SQUARESPACE_CONTEXT;
        var d = window.top !== window;
        var p = Object.freeze((0, i.default)({}, a.default.COMMERCE_CART_V2, "commerce-cart"));
        function l() {
            var e = window.location && window.location.pathname || "";
            return !d && /^\/config(\/.*)?$/.test(e)
        }
        function v() {
            return {
                inFrame: d,
                templateId: f.templateId || "",
                impersonatedSession: !!f.impersonatedSession,
                pageType: "number" === typeof f.pageType ? f.pageType : -1
            }
        }
        function m() {
            var e = f.website,
                t = void 0 === e ? {} : e;
            return {
                authenticUrl: t.authenticUrl || "",
                cloneable: !!t.cloneable,
                developerMode: !!t.developerMode,
                isHstsEnabled: !!t.isHstsEnabled,
                language: t.language || "",
                timeZone: t.timeZone || "",
                websiteId: t.id || "",
                websiteType: t.websiteType || -1
            }
        }
        function h() {
            var e = f.websiteSettings,
                t = void 0 === e ? {} : e;
            return {
                ampEnabled: !!t.ampEnabled
            }
        }
        function g() {
            var e = f.collection,
                t = void 0 === e ? {} : e;
            return {
                collectionType: t.type || -1
            }
        }
        function y() {
            return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace
        }
        function w() {
            if (f.hasOwnProperty("templateVersion"))
                return f.templateVersion.replace(".", "_");
            if (y())
                return "8";
            return null
        }
        function E(e) {
            var t = l();
            var r = p[f.pageType];
            var n = {
                appName: r || "v".concat(e, "-").concat(t ? "config" : "user-sites"),
                context: c({}, v(), {}, m(), {}, h(), {}, g())
            };
            if (t) {
                var i = f.website.siteStatus.value === u.default.INTERNAL;
                var o = f.authenticatedAccount,
                    a = o.createdOn,
                    s = o.id;
                n.context.isInternal = i;
                n.context.createdOn = a;
                n.context.memberId = s
            }
            return n
        }
        function T() {
            if (true, f) {
                var e = w();
                if (null === e)
                    return;
                var t = E(e);
                (0, o.default)(t)
            }
        }
        T()
    }
});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-0c2288f746b03ea258873-min.en-US.js.map

