(() => {
    var e, t = {
            277: () => {
                ! function(e) {
                    "use strict";
                    var t;
                    jQuery(document).on("ready", (function() {
                        e(".header-nav-center .nav-link").on("click", (function(t) {
                            e(".header-nav-center .navbar-collapse").collapse("hide"), e(".header-nav-center .menu.ripplemenu").removeClass("active")
                        })), e("header").offset().top > 50 ? e("body").addClass("fixed-header") : e("body").removeClass("fixed-header"), e(window).on("scroll", (function() {
                            e("header").offset().top > 50 ? e("body").addClass("fixed-header") : e("body").removeClass("fixed-header")
                        })), document.querySelectorAll(".effect-letter").forEach((function(e) {
                            var t = document.createElement("div");
                            e.textContent.trim().split("").forEach((function(e, s, i) {
                                var n = document.createElement("span"),
                                    a = s >= i.length / 2 ? -1 : 1,
                                    o = (s >= i.length / 2 ? i.length / 2 - s + (i.length / 2 - 1) : s) / (i.length / 2),
                                    r = 1 - o;
                                n.innerHTML = e.trim() ? e : "&nbsp;", n.style.setProperty("--move", o), n.style.setProperty("--rotate", r), n.style.setProperty("--part", a), t.appendChild(n)
                            })), e.innerHTML = t.outerHTML, e.addEventListener("mouseenter", (function(t) {
                                e.classList.contains("out") || e.classList.add("in")
                            })), e.addEventListener("mouseleave", (function(t) {
                                e.classList.contains("in") && (e.classList.add("out"), setTimeout((function() {
                                    return e.classList.remove("in", "out")
                                }), 950))
                            }))
                        })), document.querySelectorAll(".menu").forEach((function(e) {
                            e.addEventListener("click", (function(t) {
                                e.classList.toggle("active")
                            }))
                        })), e("body").scrollspy({
                            target: ".navbar",
                            offset: 50
                        }), e("#myNavbar a").on("click", (function(t) {
                            if ("" !== this.hash) {
                                t.preventDefault();
                                var s = this.hash;
                                e("html, body").animate({
                                    scrollTop: e(s).offset().top
                                }, 800, (function() {
                                    window.location.hash = s
                                }))
                            }
                        })), e(".collapse").on("show.bs.collapse", (function() {
                            e(this).siblings(".card-header").addClass("active")
                        })), e(".collapse").on("hide.bs.collapse", (function() {
                            e(this).siblings(".card-header").removeClass("active")
                        })), e("select[data-menu]").each((function() {
                            var t = e(this),
                                s = t.find("option"),
                                i = e("<div />").addClass("select-menu"),
                                n = e("<div />").addClass("button"),
                                a = e("<ul />");
                            e("<em />").prependTo(n);
                            s.each((function(t) {
                                var s = e(this);
                                a.append(e("<li />").text(s.text()))
                            })), i.css("--t", -41 * t.find(":selected").index() + "px"), t.wrap(i), n.append(a).insertAfter(t), a.clone().insertAfter(n)
                        })), e(document).on("click", ".select-menu", (function(t) {
                            var s = e(this);
                            s.hasClass("open") || s.addClass("open")
                        })), e(document).on("click", ".select-menu > ul > li", (function(t) {
                            var s = e(this),
                                i = s.parent().parent(),
                                n = i.children("select"),
                                a = n.find("option:selected"),
                                o = s.index();
                            i.css("--t", -41 * o + "px"), a.attr("selected", !1), n.find("option").eq(o).attr("selected", !0), i.addClass(o > a.index() ? "tilt-down" : "tilt-up"), setTimeout((function() {
                                i.removeClass("open tilt-up tilt-down")
                            }), 500)
                        })), e(document).on("click", (function(t) {
                            t.stopPropagation(), 0 === e(".select-menu").has(t.target).length && e(".select-menu").removeClass("open")
                        })), e("#show_hide_password").on("click", "a", (function(t) {
                            t.preventDefault(), "text" == e("#show_hide_password input").attr("type") ? (e("#show_hide_password input").attr("type", "password"), e("#show_hide_password .hide_show span").addClass("hidden_outlined"), e("#show_hide_password .hide_show span").removeClass("visible_outlined")) : "password" == e("#show_hide_password input").attr("type") && (e("#show_hide_password input").attr("type", "text"), e("#show_hide_password .hide_show span").removeClass("hidden_outlined"), e("#show_hide_password .hide_show span").addClass("visible_outlined"))
                        })), setTimeout((function() {
                            e("body").addClass("loaded_page")
                        }), 3e3);
                        var t = document.querySelector(".prgoress_indicator path"),
                            s = t.getTotalLength();
                        t.style.transition = t.style.WebkitTransition = "none", t.style.strokeDasharray = s + " " + s, t.style.strokeDashoffset = s, t.getBoundingClientRect(), t.style.transition = t.style.WebkitTransition = "stroke-dashoffset 10ms linear";
                        var i = function() {
                            var i = e(window).scrollTop(),
                                n = e(document).height() - e(window).height(),
                                a = s - i * s / n;
                            t.style.strokeDashoffset = a
                        };
                        i(), e(window).on("scroll", i);
                        jQuery(window).on("scroll", (function() {
                            jQuery(this).scrollTop() > 250 ? jQuery(".prgoress_indicator").addClass("active-progress") : jQuery(".prgoress_indicator").removeClass("active-progress")
                        })), jQuery(".prgoress_indicator").on("click", (function(e) {
                            return e.preventDefault(), jQuery("html, body").animate({
                                scrollTop: 0
                            }, 550), !1
                        }));
                        var n = new Swiper(".img_persong", {
                            spaceBetween: 10,
                            slidesPerView: 4,
                            freeMode: !0,
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0
                        });
                        new Swiper(".content_swiper", {
                            spaceBetween: 10,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: !0
                            },
                            thumbs: {
                                swiper: n
                            }
                        }), n = new Swiper(".person_thumbs", {
                            spaceBetween: 10,
                            slidesPerView: 4,
                            freeMode: !0,
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0
                        }), new Swiper(".swipe_circle", {
                            spaceBetween: 10,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: !0
                            },
                            thumbs: {
                                swiper: n
                            }
                        }), new Swiper(".swiper_default", {
                            pagination: {
                                el: ".swiper-pagination",
                                dynamicBullets: !0
                            },
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: !0
                            }
                        }), new Swiper(".swipe_basic_topic", {
                            slidesPerView: 4,
                            spaceBetween: 30,
                            freeMode: !0,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: !1
                            },
                            breakpoints: {
                                240: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                }
                            }
                        }), new Swiper(".feature_strories", {
                            slidesPerView: 4,
                            spaceBetween: 30,
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            },
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: !0
                            },
                            breakpoints: {
                                240: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                }
                            }
                        }), new Swiper(".case-studies", {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            },
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: !0
                            },
                            breakpoints: {
                                240: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                540: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }
                            }
                        });
                        e(".countdown").countdown();
                        e(".progress-bar").each((function(t) {
                            e(this).delay(400 * t).animate({
                                width: e(this).attr("aria-valuenow") + "%"
                            }, 400)
                        })), e(".bxslider").bxSlider({
                            minSlides: 1,
                            maxSlides: 8,
                            slideWidth: 160,
                            slideMargin: 0,
                            ticker: !0,
                            speed: 2e4
                        }), e(".counter").counterUp({
                            delay: 10,
                            time: 1e3
                        });
                        new Swiper(".swiper__center", {
                            slidesPerView: 3,
                            centeredSlides: !1,
                            spaceBetween: 30,
                            grabCursor: !0,
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            },
                            breakpoints: {
                                240: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }
                            }
                        });
                        e(".dropdown.dropdown-hover").hover((function() {
                            e(this).addClass("show")
                        }), (function() {
                            e(this).removeClass("show")
                        })), e(".dropdown-submenu.dropdown-hover").hover((function() {
                            e(this).addClass("show")
                        }), (function() {
                            e(this).removeClass("show")
                        }));
                        var a, o = document.getElementsByClassName("dropdown_menu");
                        for (a = 0; a < o.length; a++) o[a].addEventListener("click", (function() {
                            this.classList.toggle("active");
                            var t = this.nextElementSibling;
                            "0px" == e(t).css("height") ? e(t).css("height", t.scrollHeight + "px") : e(t).css("height", "")
                        }))
                    })), e(".btn_video").on("click", (function() {
                        t = e(this).data("src")
                    })), e("#mdllVideo").on("shown.bs.modal", (function(s) {
                        e("#video").attr("src", t + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0")
                    })), e("#mdllVideo").on("hide.bs.modal", (function(s) {
                        e("#video").attr("src", t)
                    })), setTimeout((function() {
                        e("#myTost").toast("show")
                    }), 8e3), AOS.init({
                        easing: "ease-in-out",
                        once: !1,
                        duration: 500
                    });
                    var s = document.getElementsByClassName("cover-parallax");
                    new simpleParallax(s, {
                        delay: .6,
                        transition: "cubic-bezier(0,0,0,1)"
                    });
                    s = document.getElementsByClassName("basic-parallax");
                    new simpleParallax(s, {
                        delay: .6,
                        transition: "cubic-bezier(0,0,0,1)"
                    });
                    s = document.getElementsByClassName("horizontal-parallax");
                    new simpleParallax(s, {
                        orientation: "right"
                    });
                    s = document.getElementsByClassName("scale-parallax");
                    new simpleParallax(s, {
                        scale: 1.5
                    });
                    s = document.getElementsByClassName("transition-parallax");
                    new simpleParallax(s, {
                        delay: .6,
                        transition: "cubic-bezier(0,0,0,1)"
                    }), e(".checkbox-item .item-select").on("click", (function() {
                        e(this).parent().find(".item-select.active").removeClass("active"), e(this).addClass("active")
                    }));
                    new Swiper(".blog-slider", {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0
                        },
                        breakpoints: {
                            240: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }
                    }), new Swiper(".swiper_vertical", {
                        direction: "vertical",
                        slidesPerView: 1,
                        paginationClickable: !0,
                        spaceBetween: 20,
                        loop: !0,
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: !1
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0
                        }
                    });
                    e((function() {
                        e('[data-toggle="tooltip"]').tooltip()
                    }));
                    new Sticky(".fixSide_scroll")
                }(jQuery);
                new ScrollMagic.Controller
            },
            617: () => {},
            686: () => {},
            888: () => {}
        },
        s = {};

    function i(e) {
        var n = s[e];
        if (void 0 !== n) return n.exports;
        var a = s[e] = {
            exports: {}
        };
        return t[e](a, a.exports, i), a.exports
    }
    i.m = t, e = [], i.O = (t, s, n, a) => {
        if (!s) {
            var o = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [s, n, a] = e[c], r = !0, l = 0; l < s.length; l++)(!1 & a || o >= a) && Object.keys(i.O).every((e => i.O[e](s[l]))) ? s.splice(l--, 1) : (r = !1, a < o && (o = a));
                if (r) {
                    e.splice(c--, 1);
                    var d = n();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        a = a || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
        e[c] = [s, n, a]
    }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {
            522: 0,
            870: 0,
            117: 0,
            38: 0
        };
        i.O.j = t => 0 === e[t];
        var t = (t, s) => {
                var n, a, [o, r, l] = s,
                    d = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (n in r) i.o(r, n) && (i.m[n] = r[n]);
                    if (l) var c = l(i)
                }
                for (t && t(s); d < o.length; d++) a = o[d], i.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return i.O(c)
            },
            s = self.webpackChunk = self.webpackChunk || [];
        s.forEach(t.bind(null, 0)), s.push = t.bind(null, s.push.bind(s))
    })(), i.O(void 0, [870, 117, 38], (() => i(277))), i.O(void 0, [870, 117, 38], (() => i(617))), i.O(void 0, [870, 117, 38], (() => i(686)));
    var n = i.O(void 0, [870, 117, 38], (() => i(888)));
    n = i.O(n)
})();