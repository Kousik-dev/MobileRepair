! function(e, n) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == typeof exports ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, (function(e, n, o) {
    "use strict";
    var t = "animation.gsap",
        r = window.console || {},
        i = Function.prototype.bind.call(r.error || r.log || function() {}, r);
    e || i("(" + t + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), n || i("(" + t + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), e.Scene.addOption("tweenChanges", !1, (function(e) {
        return !!e
    })), e.Scene.extend((function() {
        var e, r = this,
            i = function() {
                r._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + t + ")", "->"), r._log.apply(this, arguments))
            };
        r.on("progress.plugin_gsap", (function() {
            a()
        })), r.on("destroy.plugin_gsap", (function(e) {
            r.removeTween(e.reset)
        }));
        var a = function() {
            if (e) {
                var n = r.progress(),
                    o = r.state();
                e.repeat && -1 === e.repeat() ? "DURING" === o && e.paused() ? e.play() : "DURING" === o || e.paused() || e.pause() : n != e.progress() && (0 === r.duration() ? n > 0 ? e.play() : e.reverse() : r.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause())
            }
        };
        r.setTween = function(t, l, s) {
            var c;
            arguments.length > 1 && (arguments.length < 3 && (s = l, l = 1), t = n.to(t, l, s));
            try {
                (c = o ? new o({
                    smoothChildTiming: !0
                }).add(t) : t).pause()
            } catch (e) {
                return i(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), r
            }
            if (e && r.removeTween(), e = c, t.repeat && -1 === t.repeat() && (e.repeat(-1), e.yoyo(t.yoyo())), r.tweenChanges() && !e.tweenTo && i(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), e && r.controller() && r.triggerElement() && r.loglevel() >= 2) {
                var u = n.getTweensOf(r.triggerElement()),
                    p = r.controller().info("vertical");
                u.forEach((function(e, n) {
                    var o = e.vars.css || e.vars;
                    if (p ? void 0 !== o.top || void 0 !== o.bottom : void 0 !== o.left || void 0 !== o.right) return i(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1
                }))
            }
            if (parseFloat(TweenLite.version) >= 1.14)
                for (var d, g, f = e.getChildren ? e.getChildren(!0, !0, !1) : [e], w = function() {
                        i(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                    }, h = 0; h < f.length; h++) d = f[h], g !== w && (g = d.vars.onOverwrite, d.vars.onOverwrite = function() {
                    g && g.apply(this, arguments), w.apply(this, arguments)
                });
            return i(3, "added tween"), a(), r
        }, r.removeTween = function(n) {
            return e && (n && e.progress(0).pause(), e.kill(), e = void 0, i(3, "removed tween (reset: " + (n ? "true" : "false") + ")")), r
        }
    }))
}));