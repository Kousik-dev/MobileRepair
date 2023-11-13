! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, (function() {
    "use strict";
    var e = function() {
        o.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
    };
    e.version = "2.0.5", window.addEventListener("mousewheel", (function() {}));
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) {
        var i, l, s = "ScrollMagic.Controller",
            a = "REVERSE",
            c = "PAUSED",
            u = n.defaults,
            f = this,
            d = o.extend({}, u, r),
            g = [],
            p = !1,
            h = 0,
            v = c,
            m = !0,
            w = 0,
            y = !0,
            S = function() {
                d.refreshInterval > 0 && (l = window.setTimeout(F, d.refreshInterval))
            },
            E = function() {
                return d.vertical ? o.get.scrollTop(d.container) : o.get.scrollLeft(d.container)
            },
            b = function() {
                return d.vertical ? o.get.height(d.container) : o.get.width(d.container)
            },
            R = this._setScrollPos = function(e) {
                d.vertical ? m ? window.scrollTo(o.get.scrollLeft(), e) : d.container.scrollTop = e : m ? window.scrollTo(e, o.get.scrollTop()) : d.container.scrollLeft = e
            },
            T = function() {
                if (y && p) {
                    var e = o.type.Array(p) ? p : g.slice(0);
                    p = !1;
                    var t = h,
                        n = (h = f.scrollPos()) - t;
                    0 !== n && (v = n > 0 ? "FORWARD" : a), v === a && e.reverse(), e.forEach((function(t, n) {
                        O(3, "updating Scene " + (n + 1) + "/" + e.length + " (" + g.length + " total)"), t.update(!0)
                    })), 0 === e.length && d.loglevel >= 3 && O(3, "updating 0 Scenes (nothing added to controller)")
                }
            },
            C = function() {
                i = o.rAF(T)
            },
            x = function(e) {
                O(3, "event fired causing an update:", e.type), "resize" == e.type && (w = b(), v = c), !0 !== p && (p = !0, C())
            },
            F = function() {
                if (!m && w != b()) {
                    var e;
                    try {
                        e = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (t) {
                        (e = document.createEvent("Event")).initEvent("resize", !1, !1)
                    }
                    d.container.dispatchEvent(e)
                }
                g.forEach((function(e, t) {
                    e.refresh()
                })), S()
            },
            O = this._log = function(e, t) {
                d.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"), o.log.apply(window, arguments))
            };
        this._options = d;
        var z = function(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort((function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            })), t
        };
        return this.addScene = function(t) {
                if (o.type.Array(t)) t.forEach((function(e, t) {
                    f.addScene(e)
                }));
                else if (t instanceof e.Scene) {
                    if (t.controller() !== f) t.addTo(f);
                    else if (g.indexOf(t) < 0) {
                        for (var n in g.push(t), g = z(g), t.on("shift.controller_sort", (function() {
                                g = z(g)
                            })), d.globalSceneOptions) t[n] && t[n].call(t, d.globalSceneOptions[n]);
                        O(3, "adding Scene (now " + g.length + " total)")
                    }
                } else O(1, "ERROR: invalid argument supplied for '.addScene()'");
                return f
            }, this.removeScene = function(e) {
                if (o.type.Array(e)) e.forEach((function(e, t) {
                    f.removeScene(e)
                }));
                else {
                    var t = g.indexOf(e);
                    t > -1 && (e.off("shift.controller_sort"), g.splice(t, 1), O(3, "removing Scene (now " + g.length + " left)"), e.remove())
                }
                return f
            }, this.updateScene = function(t, n) {
                return o.type.Array(t) ? t.forEach((function(e, t) {
                    f.updateScene(e, n)
                })) : n ? t.update(!0) : !0 !== p && t instanceof e.Scene && (-1 == (p = p || []).indexOf(t) && p.push(t), p = z(p), C()), f
            }, this.update = function(e) {
                return x({
                    type: "resize"
                }), e && T(), f
            }, this.scrollTo = function(n, r) {
                if (o.type.Number(n)) R.call(d.container, n, r);
                else if (n instanceof e.Scene) n.controller() === f ? f.scrollTo(n.scrollOffset(), r) : O(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", n);
                else if (o.type.Function(n)) R = n;
                else {
                    var i = o.get.elements(n)[0];
                    if (i) {
                        for (; i.parentNode.hasAttribute(t);) i = i.parentNode;
                        var l = d.vertical ? "top" : "left",
                            s = o.get.offset(d.container),
                            a = o.get.offset(i);
                        m || (s[l] -= f.scrollPos()), f.scrollTo(a[l] - s[l], r)
                    } else O(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", n)
                }
                return f
            }, this.scrollPos = function(e) {
                return arguments.length ? (o.type.Function(e) ? E = e : O(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), f) : E.call(f)
            }, this.info = function(e) {
                var t = {
                    size: w,
                    vertical: d.vertical,
                    scrollPos: h,
                    scrollDirection: v,
                    container: d.container,
                    isDocument: m
                };
                return arguments.length ? void 0 !== t[e] ? t[e] : void O(1, 'ERROR: option "' + e + '" is not available') : t
            }, this.loglevel = function(e) {
                return arguments.length ? (d.loglevel != e && (d.loglevel = e), f) : d.loglevel
            }, this.enabled = function(e) {
                return arguments.length ? (y != e && (y = !!e, f.updateScene(g, !0)), f) : y
            }, this.destroy = function(e) {
                window.clearTimeout(l);
                for (var t = g.length; t--;) g[t].destroy(e);
                return d.container.removeEventListener("resize", x), d.container.removeEventListener("scroll", x), o.cAF(i), O(3, "destroyed " + s + " (reset: " + (e ? "true" : "false") + ")"), null
            },
            function() {
                for (var t in d) u.hasOwnProperty(t) || (O(2, 'WARNING: Unknown option "' + t + '"'), delete d[t]);
                if (d.container = o.get.elements(d.container)[0], !d.container) throw O(1, "ERROR creating object " + s + ": No valid scroll container supplied"), s + " init failed.";
                (m = d.container === window || d.container === document.body || !document.body.contains(d.container)) && (d.container = window), w = b(), d.container.addEventListener("resize", x), d.container.addEventListener("scroll", x), d.refreshInterval = parseInt(d.refreshInterval) || u.refreshInterval, S(), O(3, "added new " + s + " controller (v" + e.version + ")")
            }(), f
    };
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function(e, t) {
        n.defaults[e] = t
    }, e.Controller.extend = function(t) {
        var n = this;
        e.Controller = function() {
            return n.apply(this, arguments), this.$super = o.extend({}, this), t.apply(this, arguments) || this
        }, o.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function(n) {
        var i, l, s = "ScrollMagic.Scene",
            a = "BEFORE",
            c = "DURING",
            u = "AFTER",
            f = r.defaults,
            d = this,
            g = o.extend({}, f, n),
            p = a,
            h = 0,
            v = {
                start: 0,
                end: 0
            },
            m = 0,
            w = !0,
            y = {};
        this.on = function(e, t) {
            return o.type.Function(t) ? (e = e.trim().split(" ")).forEach((function(e) {
                var n = e.split("."),
                    r = n[0],
                    o = n[1];
                "*" != r && (y[r] || (y[r] = []), y[r].push({
                    namespace: o || "",
                    callback: t
                }))
            })) : S(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"), d
        }, this.off = function(e, t) {
            return e ? ((e = e.trim().split(" ")).forEach((function(e, n) {
                var r = e.split("."),
                    o = r[0],
                    i = r[1] || "";
                ("*" === o ? Object.keys(y) : [o]).forEach((function(e) {
                    for (var n = y[e] || [], r = n.length; r--;) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                    }
                    n.length || delete y[e]
                }))
            })), d) : (S(1, "ERROR: Invalid event name supplied."), d)
        }, this.trigger = function(t, n) {
            if (t) {
                var r = t.trim().split("."),
                    o = r[0],
                    i = r[1],
                    l = y[o];
                S(3, "event fired:", o, n ? "->" : "", n || ""), l && l.forEach((function(t, r) {
                    i && i !== t.namespace || t.callback.call(d, new e.Event(o, t.namespace, d, n))
                }))
            } else S(1, "ERROR: Invalid event name supplied.");
            return d
        }, d.on("change.internal", (function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? C() : "reverse" === e.what && d.update())
        })).on("shift.internal", (function(e) {
            R(), d.update()
        }));
        var S = this._log = function(e, t) {
            g.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"), o.log.apply(window, arguments))
        };
        this.addTo = function(t) {
            return t instanceof e.Controller ? l != t && (l && l.removeScene(d), l = t, O(), T(!0), C(!0), R(), l.info("container").addEventListener("resize", x), t.addScene(d), d.trigger("add", {
                controller: l
            }), S(3, "added " + s + " to controller"), d.update()) : S(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), d
        }, this.enabled = function(e) {
            return arguments.length ? (w != e && (w = !!e, d.update(!0)), d) : w
        }, this.remove = function() {
            if (l) {
                l.info("container").removeEventListener("resize", x);
                var e = l;
                l = void 0, e.removeScene(d), d.trigger("remove"), S(3, "removed " + s + " from controller")
            }
            return d
        }, this.destroy = function(e) {
            return d.trigger("destroy", {
                reset: e
            }), d.remove(), d.off("*.*"), S(3, "destroyed " + s + " (reset: " + (e ? "true" : "false") + ")"), null
        }, this.update = function(e) {
            if (l)
                if (e)
                    if (l.enabled() && w) {
                        var t, n = l.info("scrollPos");
                        t = g.duration > 0 ? (n - v.start) / (v.end - v.start) : n >= v.start ? 1 : 0, d.trigger("update", {
                            startPos: v.start,
                            endPos: v.end,
                            scrollPos: n
                        }), d.progress(t)
                    } else E && p === c && A(!0);
            else l.updateScene(d, !1);
            return d
        }, this.refresh = function() {
            return T(), C(), d
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1,
                    n = p,
                    r = l ? l.info("scrollDirection") : "PAUSED",
                    o = g.reverse || e >= h;
                if (0 === g.duration ? (t = h != e, p = 0 === (h = e < 1 && o ? 0 : 1) ? a : c) : e < 0 && p !== a && o ? (h = 0, p = a, t = !0) : e >= 0 && e < 1 && o ? (h = e, p = c, t = !0) : e >= 1 && p !== u ? (h = 1, p = u, t = !0) : p !== c || o || A(), t) {
                    var i = {
                            progress: h,
                            state: p,
                            scrollDirection: r
                        },
                        s = p != n,
                        f = function(e) {
                            d.trigger(e, i)
                        };
                    s && n !== c && (f("enter"), f(n === a ? "start" : "end")), f("progress"), s && p !== c && (f(p === a ? "start" : "end"), f("leave"))
                }
                return d
            }
            return h
        };
        var E, b, R = function() {
                v = {
                    start: m + g.offset
                }, l && g.triggerElement && (v.start -= l.info("size") * g.triggerHook), v.end = v.start + g.duration
            },
            T = function(e) {
                if (i) {
                    var t = "duration";
                    z(t, i.call(d)) && !e && (d.trigger("change", {
                        what: t,
                        newval: g.duration
                    }), d.trigger("shift", {
                        reason: t
                    }))
                }
            },
            C = function(e) {
                var n = 0,
                    r = g.triggerElement;
                if (l && r) {
                    for (var i = l.info(), s = o.get.offset(i.container), a = i.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode;
                    var c = o.get.offset(r);
                    i.isDocument || (s[a] -= l.scrollPos()), n = c[a] - s[a]
                }
                var u = n != m;
                m = n, u && !e && d.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            },
            x = function(e) {
                g.triggerHook > 0 && d.trigger("shift", {
                    reason: "containerResize"
                })
            },
            F = o.extend(r.validate, {
                duration: function(e) {
                    if (o.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                        var t = parseFloat(e) / 100;
                        e = function() {
                            return l ? l.info("size") * t : 0
                        }
                    }
                    if (o.type.Function(e)) {
                        i = e;
                        try {
                            e = parseFloat(i())
                        } catch (t) {
                            e = -1
                        }
                    }
                    if (e = parseFloat(e), !o.type.Number(e) || e < 0) throw i ? (i = void 0, ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
                    return e
                }
            }),
            O = function(e) {
                (e = arguments.length ? [e] : Object.keys(F)).forEach((function(e, t) {
                    var n;
                    if (F[e]) try {
                        n = F[e](g[e])
                    } catch (t) {
                        n = f[e];
                        var r = o.type.String(t) ? [t] : t;
                        o.type.Array(r) ? (r[0] = "ERROR: " + r[0], r.unshift(1), S.apply(this, r)) : S(1, "ERROR: Problem executing validation callback for option '" + e + "':", t.message)
                    } finally {
                        g[e] = n
                    }
                }))
            },
            z = function(e, t) {
                var n = !1,
                    r = g[e];
                return g[e] != t && (g[e] = t, O(e), n = r != g[e]), n
            },
            P = function(e) {
                d[e] || (d[e] = function(t) {
                    return arguments.length ? ("duration" === e && (i = void 0), z(e, t) && (d.trigger("change", {
                        what: e,
                        newval: g[e]
                    }), r.shifts.indexOf(e) > -1 && d.trigger("shift", {
                        reason: e
                    })), d) : g[e]
                })
            };
        this.controller = function() {
            return l
        }, this.state = function() {
            return p
        }, this.scrollOffset = function() {
            return v.start
        }, this.triggerPosition = function() {
            var e = g.offset;
            return l && (g.triggerElement ? e += m : e += l.info("size") * d.triggerHook()), e
        }, d.on("shift.internal", (function(e) {
            var t = "duration" === e.reason;
            (p === u && t || p === c && 0 === g.duration) && A(), t && L()
        })).on("progress.internal", (function(e) {
            A()
        })).on("add.internal", (function(e) {
            L()
        })).on("destroy.internal", (function(e) {
            d.removePin(e.reset)
        }));
        var A = function(e) {
                if (E && l) {
                    var t = l.info(),
                        n = b.spacer.firstChild;
                    if (e || p !== c) {
                        var r = {
                                position: b.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            i = o.css(n, "position") != r.position;
                        b.pushFollowers ? g.duration > 0 && (p === u && 0 === parseFloat(o.css(b.spacer, "padding-top")) || p === a && 0 === parseFloat(o.css(b.spacer, "padding-bottom"))) && (i = !0) : r[t.vertical ? "top" : "left"] = g.duration * h, o.css(n, r), i && L()
                    } else {
                        "fixed" != o.css(n, "position") && (o.css(n, {
                            position: "fixed"
                        }), L());
                        var s = o.get.offset(b.spacer, !0),
                            f = g.reverse || 0 === g.duration ? t.scrollPos - v.start : Math.round(h * g.duration * 10) / 10;
                        s[t.vertical ? "top" : "left"] += f, o.css(b.spacer.firstChild, {
                            top: s.top,
                            left: s.left
                        })
                    }
                }
            },
            L = function() {
                if (E && l && b.inFlow) {
                    var e = p === c,
                        t = l.info("vertical"),
                        n = b.spacer.firstChild,
                        r = o.isMarginCollapseType(o.css(b.spacer, "display")),
                        i = {};
                    b.relSize.width || b.relSize.autoFullWidth ? e ? o.css(E, {
                        width: o.get.width(b.spacer)
                    }) : o.css(E, {
                        width: "100%"
                    }) : (i["min-width"] = o.get.width(t ? E : n, !0, !0), i.width = e ? i["min-width"] : "auto"), b.relSize.height ? e ? o.css(E, {
                        height: o.get.height(b.spacer) - (b.pushFollowers ? g.duration : 0)
                    }) : o.css(E, {
                        height: "100%"
                    }) : (i["min-height"] = o.get.height(t ? n : E, !0, !r), i.height = e ? i["min-height"] : "auto"), b.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = g.duration * h, i["padding" + (t ? "Bottom" : "Right")] = g.duration * (1 - h)), o.css(b.spacer, i)
                }
            },
            I = function() {
                l && E && p === c && !l.info("isDocument") && A()
            },
            N = function() {
                l && E && p === c && ((b.relSize.width || b.relSize.autoFullWidth) && o.get.width(window) != o.get.width(b.spacer.parentNode) || b.relSize.height && o.get.height(window) != o.get.height(b.spacer.parentNode)) && L()
            },
            _ = function(e) {
                l && E && p === c && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
            };
        this.setPin = function(e, n) {
            if (n = o.extend({}, {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                }, n), !(e = o.get.elements(e)[0])) return S(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), d;
            if ("fixed" === o.css(e, "position")) return S(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), d;
            if (E) {
                if (E === e) return d;
                d.removePin()
            }
            var r = (E = e).parentNode.style.display,
                i = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            E.parentNode.style.display = "none";
            var l = "absolute" != o.css(E, "position"),
                s = o.css(E, i.concat(["display"])),
                a = o.css(E, ["width", "height"]);
            E.parentNode.style.display = r, !l && n.pushFollowers && (S(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), n.pushFollowers = !1), window.setTimeout((function() {
                E && 0 === g.duration && n.pushFollowers && S(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
            }), 0);
            var c = E.parentNode.insertBefore(document.createElement("div"), E),
                u = o.extend(s, {
                    position: l ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            if (l || o.extend(u, o.css(E, ["width", "height"])), o.css(c, u), c.setAttribute(t, ""), o.addClass(c, n.spacerClass), b = {
                    spacer: c,
                    relSize: {
                        width: "%" === a.width.slice(-1),
                        height: "%" === a.height.slice(-1),
                        autoFullWidth: "auto" === a.width && l && o.isMarginCollapseType(s.display)
                    },
                    pushFollowers: n.pushFollowers,
                    inFlow: l
                }, !E.___origStyle) {
                E.___origStyle = {};
                var f = E.style;
                i.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach((function(e) {
                    E.___origStyle[e] = f[e] || ""
                }))
            }
            return b.relSize.width && o.css(c, {
                width: a.width
            }), b.relSize.height && o.css(c, {
                height: a.height
            }), c.appendChild(E), o.css(E, {
                position: l ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (b.relSize.width || b.relSize.autoFullWidth) && o.css(E, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", I), window.addEventListener("resize", I), window.addEventListener("resize", N), E.addEventListener("mousewheel", _), E.addEventListener("DOMMouseScroll", _), S(3, "added pin"), A(), d
        }, this.removePin = function(e) {
            if (E) {
                if (p === c && A(!0), e || !l) {
                    var n = b.spacer.firstChild;
                    if (n.hasAttribute(t)) {
                        var r = b.spacer.style;
                        margins = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach((function(e) {
                            margins[e] = r[e] || ""
                        })), o.css(n, margins)
                    }
                    b.spacer.parentNode.insertBefore(n, b.spacer), b.spacer.parentNode.removeChild(b.spacer), E.parentNode.hasAttribute(t) || (o.css(E, E.___origStyle), delete E.___origStyle)
                }
                window.removeEventListener("scroll", I), window.removeEventListener("resize", I), window.removeEventListener("resize", N), E.removeEventListener("mousewheel", _), E.removeEventListener("DOMMouseScroll", _), E = void 0, S(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
            }
            return d
        };
        var M, k = [];
        return d.on("destroy.internal", (function(e) {
                d.removeClassToggle(e.reset)
            })), this.setClassToggle = function(e, t) {
                var n = o.get.elements(e);
                return 0 !== n.length && o.type.String(t) ? (k.length > 0 && d.removeClassToggle(), M = t, k = n, d.on("enter.internal_class leave.internal_class", (function(e) {
                    var t = "enter" === e.type ? o.addClass : o.removeClass;
                    k.forEach((function(e, n) {
                        t(e, M)
                    }))
                })), d) : (S(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."), d)
            }, this.removeClassToggle = function(e) {
                return e && k.forEach((function(e, t) {
                    o.removeClass(e, M)
                })), d.off("start.internal_class end.internal_class"), M = void 0, k = [], d
            },
            function() {
                for (var e in g) f.hasOwnProperty(e) || (S(2, 'WARNING: Unknown option "' + e + '"'), delete g[e]);
                for (var t in f) P(t);
                O()
            }(), d
    };
    var r = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !o.type.Number(e)) throw ['Invalid value for option "offset":', e];
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = o.get.elements(e)[0];
                    if (!t) throw ['Element defined in option "triggerElement" was not found:', e];
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (o.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw ['Invalid value for option "triggerHook": ', e];
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            },
            loglevel: function(e) {
                if (e = parseInt(e), !o.type.Number(e) || e < 0 || e > 3) throw ['Invalid value for option "loglevel":', e];
                return e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(t, n, o, i) {
        t in r.defaults ? e._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + t + "', because it already exists.") : (r.defaults[t] = n, r.validate[t] = o, i && r.shifts.push(t))
    }, e.Scene.extend = function(t) {
        var n = this;
        e.Scene = function() {
            return n.apply(this, arguments), this.$super = o.extend({}, this), t.apply(this, arguments) || this
        }, o.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function(e, t, n, r) {
        for (var o in r = r || {}) this[o] = r[o];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var o = e._util = function(e) {
        var t, n = {},
            r = function(e) {
                return parseFloat(e) || 0
            },
            o = function(t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
            },
            i = function(t, n, i, l) {
                if ((n = n === document ? e : n) === e) l = !1;
                else if (!p.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var s = (i ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                if (i && l) {
                    var a = o(n);
                    s += "Height" === t ? r(a.marginTop) + r(a.marginBottom) : r(a.marginLeft) + r(a.marginRight)
                }
                return s
            },
            l = function(e) {
                return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, (function(e) {
                    return e[1].toUpperCase()
                }))
            };
        n.extend = function(e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }, n.isMarginCollapseType = function(e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        };
        var s = 0,
            a = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
        for (t = 0; !c && t < a.length; ++t) c = e[a[t] + "RequestAnimationFrame"], u = e[a[t] + "CancelAnimationFrame"] || e[a[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - s)),
                o = e.setTimeout((function() {
                    t(n + r)
                }), r);
            return s = n + r, o
        }), u || (u = function(t) {
            e.clearTimeout(t)
        }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = ["error", "warn", "log"],
            d = e.console || {};
        for (d.log = d.log || function() {}, t = 0; t < f.length; t++) {
            var g = f[t];
            d[g] || (d[g] = d.log)
        }
        n.log = function(e) {
            (e > f.length || e <= 0) && (e = f.length);
            var t = new Date,
                n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
                r = f[e - 1],
                o = Array.prototype.splice.call(arguments, 1),
                i = Function.prototype.bind.call(d[r], d);
            o.unshift(n), i.apply(d, o)
        };
        var p = n.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        p.String = function(e) {
            return "string" === p(e)
        }, p.Function = function(e) {
            return "function" === p(e)
        }, p.Array = function(e) {
            return Array.isArray(e)
        }, p.Number = function(e) {
            return !p.Array(e) && e - parseFloat(e) + 1 >= 0
        }, p.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var h = n.get = {};
        return h.elements = function(t) {
            var n = [];
            if (p.String(t)) try {
                t = document.querySelectorAll(t)
            } catch (e) {
                return n
            }
            if ("nodelist" === p(t) || p.Array(t))
                for (var r = 0, o = n.length = t.length; r < o; r++) {
                    var i = t[r];
                    n[r] = p.DomElement(i) ? i : h.elements(i)
                } else(p.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }, h.scrollTop = function(t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, h.scrollLeft = function(t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, h.width = function(e, t, n) {
            return i("width", e, t, n)
        }, h.height = function(e, t, n) {
            return i("height", e, t, n)
        }, h.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += h.scrollTop(), n.left += h.scrollLeft())
            }
            return n
        }, n.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, n.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, n.css = function(e, t) {
            if (p.String(t)) return o(e)[l(t)];
            if (p.Array(t)) {
                var n = {},
                    r = o(e);
                return t.forEach((function(e, t) {
                    n[e] = r[l(e)]
                })), n
            }
            for (var i in t) {
                var s = t[i];
                s == parseFloat(s) && (s += "px"), e.style[l(i)] = s
            }
        }, n
    }(window || {});
    return e.Scene.prototype.addIndicators = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
    }, e.Scene.prototype.removeIndicators = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
    }, e.Scene.prototype.setTween = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
    }, e.Scene.prototype.removeTween = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
    }, e.Scene.prototype.setVelocity = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
    }, e.Scene.prototype.removeVelocity = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
    }, e
}));