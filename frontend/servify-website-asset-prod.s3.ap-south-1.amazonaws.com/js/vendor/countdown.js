! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}((function(t) {
    "use strict";
    var s = function(e, i) {
        this.$element = t(e), this.defaults = t.extend({}, s.defaults, this.$element.data(), t.isPlainObject(i) ? i : {}), this.init()
    };
    s.prototype = {
        constructor: s,
        init: function() {
            var t = this.$element.html(),
                s = new Date(this.defaults.date || t);
            s.getTime() && (this.content = t, this.date = s, this.find(), this.defaults.autoStart && this.start())
        },
        find: function() {
            var t = this.$element;
            this.$days = t.find("[data-days]"), this.$hours = t.find("[data-hours]"), this.$minutes = t.find("[data-minutes]"), this.$seconds = t.find("[data-seconds]"), this.$days.length + this.$hours.length + this.$minutes.length + this.$seconds.length > 0 && (this.found = !0)
        },
        reset: function() {
            this.found ? (this.output("days"), this.output("hours"), this.output("minutes"), this.output("seconds")) : this.output()
        },
        ready: function() {
            var t, s = this.date,
                e = 36e5,
                i = 864e5,
                n = {};
            return !!s && ((t = s.getTime() - (new Date).getTime()) <= 0 ? (this.end(), !1) : (n.days = t, n.hours = n.days % i, n.minutes = n.hours % e, n.seconds = n.minutes % 6e4, n.milliseconds = n.seconds % 1e3, this.days = Math.floor(n.days / i), this.hours = Math.floor(n.hours / e), this.minutes = Math.floor(n.minutes / 6e4), this.seconds = Math.floor(n.seconds / 1e3), this.deciseconds = Math.floor(n.milliseconds / 100), !0))
        },
        start: function() {
            !this.active && this.ready() && (this.active = !0, this.reset(), this.autoUpdate = this.defaults.fast ? setInterval(t.proxy(this.fastUpdate, this), 100) : setInterval(t.proxy(this.update, this), 1e3))
        },
        stop: function() {
            this.active && (this.active = !1, clearInterval(this.autoUpdate))
        },
        end: function() {
            this.date && (this.stop(), this.days = 0, this.hours = 0, this.minutes = 0, this.seconds = 0, this.deciseconds = 0, this.reset(), this.defaults.end())
        },
        destroy: function() {
            this.date && (this.stop(), this.$days = null, this.$hours = null, this.$minutes = null, this.$seconds = null, this.$element.empty().html(this.content), this.$element.removeData("countdown"))
        },
        fastUpdate: function() {
            --this.deciseconds >= 0 ? this.output("deciseconds") : (this.deciseconds = 9, this.update())
        },
        update: function() {
            --this.seconds >= 0 ? this.output("seconds") : (this.seconds = 59, --this.minutes >= 0 ? this.output("minutes") : (this.minutes = 59, --this.hours >= 0 ? this.output("hours") : (this.hours = 23, --this.days >= 0 ? this.output("days") : this.end())))
        },
        output: function(t) {
            if (this.found) switch (t) {
                case "deciseconds":
                    this.$seconds.text(this.getSecondsText());
                    break;
                case "seconds":
                    this.$seconds.text(this.seconds);
                    break;
                case "minutes":
                    this.$minutes.text(this.minutes);
                    break;
                case "hours":
                    this.$hours.text(this.hours);
                    break;
                case "days":
                    this.$days.text(this.days)
            } else this.$element.empty().html(this.template())
        },
        template: function() {
            return this.defaults.text.replace("%s", this.days).replace("%s", this.hours).replace("%s", this.minutes).replace("%s", this.getSecondsText())
        },
        getSecondsText: function() {
            return this.active && this.defaults.fast ? this.seconds + "." + this.deciseconds : this.seconds
        }
    }, s.defaults = {
        autoStart: !0,
        date: null,
        fast: !1,
        end: t.noop,
        text: "%s days, %s hours, %s minutes, %s seconds"
    }, s.setDefaults = function(e) {
        t.extend(s.defaults, e)
    }, t.fn.countdown = function(e) {
        return this.each((function() {
            var i = t(this),
                n = i.data("countdown");
            n || i.data("countdown", n = new s(this, e)), "string" == typeof e && t.isFunction(n[e]) && n[e]()
        }))
    }, t.fn.countdown.constructor = s, t.fn.countdown.setDefaults = s.setDefaults, t((function() {
        t("[countdown]").countdown()
    }))
}));