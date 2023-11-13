! function(t, e) {
    "use strict";
    var a = function(t) {
        this.elem = t
    };
    a.init = function() {
        var t, r = e.querySelectorAll("[data-sharer]"),
            s = r.length;
        for (t = 0; t < s; t++) r[t].addEventListener("click", a.add)
    }, a.add = function(t) {
        var e = t.currentTarget || t.srcElement;
        new a(e).share()
    }, a.prototype = {
        constructor: a,
        getValue: function(t) {
            var e = this.elem.getAttribute("data-" + t);
            return e && "hashtag" === t && (e.startsWith("#") || (e = "#" + e)), e
        },
        share: function() {
            var t = this.getValue("sharer").toLowerCase(),
                e = {
                    facebook: {
                        shareUrl: "https://www.facebook.com/sharer/sharer.php",
                        params: {
                            u: this.getValue("url"),
                            hashtag: this.getValue("hashtag")
                        }
                    },
                    linkedin: {
                        shareUrl: "https://www.linkedin.com/shareArticle",
                        params: {
                            url: this.getValue("url"),
                            mini: !0
                        }
                    },
                    twitter: {
                        shareUrl: "https://twitter.com/intent/tweet/",
                        params: {
                            text: this.getValue("title"),
                            url: this.getValue("url"),
                            hashtags: this.getValue("hashtags"),
                            via: this.getValue("via")
                        }
                    },
                    email: {
                        shareUrl: "mailto:" + this.getValue("to") || "",
                        params: {
                            subject: this.getValue("subject"),
                            body: this.getValue("title") + "\n" + this.getValue("url")
                        },
                        isLink: !0
                    },
                    whatsapp: {
                        shareUrl: null !== this.getValue("web") ? "https://api.whatsapp.com/send" : "whatsapp://send",
                        params: {
                            text: this.getValue("title") + " " + this.getValue("url")
                        },
                        isLink: !0
                    },
                    telegram: {
                        shareUrl: null !== this.getValue("web") ? "https://telegram.me/share" : "tg://msg_url",
                        params: {
                            text: this.getValue("title"),
                            url: this.getValue("url"),
                            to: this.getValue("to")
                        },
                        isLink: !0
                    },
                    viber: {
                        shareUrl: "viber://forward",
                        params: {
                            text: this.getValue("title") + " " + this.getValue("url")
                        },
                        isLink: !0
                    },
                    line: {
                        shareUrl: "http://line.me/R/msg/text/?" + encodeURIComponent(this.getValue("title") + " " + this.getValue("url")),
                        isLink: !0
                    },
                    pinterest: {
                        shareUrl: "https://www.pinterest.com/pin/create/button/",
                        params: {
                            url: this.getValue("url"),
                            media: this.getValue("image"),
                            description: this.getValue("description")
                        }
                    },
                    tumblr: {
                        shareUrl: "http://tumblr.com/widgets/share/tool",
                        params: {
                            canonicalUrl: this.getValue("url"),
                            content: this.getValue("url"),
                            posttype: "link",
                            title: this.getValue("title"),
                            caption: this.getValue("caption"),
                            tags: this.getValue("tags")
                        }
                    },
                    hackernews: {
                        shareUrl: "https://news.ycombinator.com/submitlink",
                        params: {
                            u: this.getValue("url"),
                            t: this.getValue("title")
                        }
                    },
                    reddit: {
                        shareUrl: "https://www.reddit.com/submit",
                        params: {
                            url: this.getValue("url")
                        }
                    },
                    vk: {
                        shareUrl: "http://vk.com/share.php",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title"),
                            description: this.getValue("caption"),
                            image: this.getValue("image")
                        }
                    },
                    xing: {
                        shareUrl: "https://www.xing.com/app/user",
                        params: {
                            op: "share",
                            url: this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    buffer: {
                        shareUrl: "https://buffer.com/add",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title"),
                            via: this.getValue("via"),
                            picture: this.getValue("picture")
                        }
                    },
                    instapaper: {
                        shareUrl: "http://www.instapaper.com/edit",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title"),
                            description: this.getValue("description")
                        }
                    },
                    pocket: {
                        shareUrl: "https://getpocket.com/save",
                        params: {
                            url: this.getValue("url")
                        }
                    },
                    digg: {
                        shareUrl: "http://www.digg.com/submit",
                        params: {
                            url: this.getValue("url")
                        }
                    },
                    stumbleupon: {
                        shareUrl: "http://www.stumbleupon.com/submit",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    mashable: {
                        shareUrl: "https://mashable.com/submit",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    mix: {
                        shareUrl: "https://mix.com/add",
                        params: {
                            url: this.getValue("url")
                        }
                    },
                    flipboard: {
                        shareUrl: "https://share.flipboard.com/bookmarklet/popout",
                        params: {
                            v: 2,
                            title: this.getValue("title"),
                            url: this.getValue("url"),
                            t: Date.now()
                        }
                    },
                    weibo: {
                        shareUrl: "http://service.weibo.com/share/share.php",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title"),
                            pic: this.getValue("image"),
                            appkey: this.getValue("appkey"),
                            ralateUid: this.getValue("ralateuid"),
                            language: "zh_cn"
                        }
                    },
                    renren: {
                        shareUrl: "http://share.renren.com/share/buttonshare",
                        params: {
                            link: this.getValue("url")
                        }
                    },
                    myspace: {
                        shareUrl: "https://myspace.com/post",
                        params: {
                            u: this.getValue("url"),
                            t: this.getValue("title"),
                            c: this.getValue("description")
                        }
                    },
                    blogger: {
                        shareUrl: "https://www.blogger.com/blog-this.g",
                        params: {
                            u: this.getValue("url"),
                            n: this.getValue("title"),
                            t: this.getValue("description")
                        }
                    },
                    baidu: {
                        shareUrl: "http://cang.baidu.com/do/add",
                        params: {
                            it: this.getValue("title"),
                            iu: this.getValue("url")
                        }
                    },
                    douban: {
                        shareUrl: "https://www.douban.com/share/service",
                        params: {
                            name: this.getValue("title"),
                            href: this.getValue("url"),
                            image: this.getValue("image")
                        }
                    },
                    okru: {
                        shareUrl: "https://connect.ok.ru/dk",
                        params: {
                            "st.cmd": "WidgetSharePreview",
                            "st.shareUrl": this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    mailru: {
                        shareUrl: "http://connect.mail.ru/share",
                        params: {
                            share_url: this.getValue("url"),
                            linkname: this.getValue("title"),
                            linknote: this.getValue("description"),
                            type: "page"
                        }
                    },
                    evernote: {
                        shareUrl: "http://www.evernote.com/clip.action",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    skype: {
                        shareUrl: "https://web.skype.com/share",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    quora: {
                        shareUrl: "https://www.quora.com/share",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    delicious: {
                        shareUrl: "https://del.icio.us/post",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    sms: {
                        shareUrl: "sms://",
                        params: {
                            body: this.getValue("body")
                        }
                    },
                    trello: {
                        shareUrl: "https://trello.com/add-card",
                        params: {
                            url: this.getValue("url"),
                            name: this.getValue("title"),
                            desc: this.getValue("description"),
                            mode: "popup"
                        }
                    },
                    messenger: {
                        shareUrl: "fb-messenger://share",
                        params: {
                            link: this.getValue("url")
                        }
                    },
                    odnoklassniki: {
                        shareUrl: "https://connect.ok.ru/dk",
                        params: {
                            st: {
                                cmd: "WidgetSharePreview",
                                deprecated: 1,
                                shareUrl: this.getValue("url")
                            }
                        }
                    },
                    meneame: {
                        shareUrl: "https://www.meneame.net/submit",
                        params: {
                            url: this.getValue("url")
                        }
                    },
                    diaspora: {
                        shareUrl: "https://share.diasporafoundation.org",
                        params: {
                            title: this.getValue("title"),
                            url: this.getValue("url")
                        }
                    },
                    googlebookmarks: {
                        shareUrl: "https://www.google.com/bookmarks/mark",
                        params: {
                            op: "edit",
                            bkmk: this.getValue("url"),
                            title: this.getValue("title")
                        }
                    },
                    qzone: {
                        shareUrl: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
                        params: {
                            url: this.getValue("url")
                        }
                    },
                    refind: {
                        shareUrl: "https://refind.com",
                        params: {
                            url: this.getValue("url")
                        }
                    },
                    surfingbird: {
                        shareUrl: "https://surfingbird.ru/share",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title"),
                            description: this.getValue("description")
                        }
                    },
                    yahoomail: {
                        shareUrl: "http://compose.mail.yahoo.com",
                        params: {
                            to: this.getValue("to"),
                            subject: this.getValue("subject"),
                            body: this.getValue("body")
                        }
                    },
                    wordpress: {
                        shareUrl: "https://wordpress.com/wp-admin/press-this.php",
                        params: {
                            u: this.getValue("url"),
                            t: this.getValue("title"),
                            s: this.getValue("title")
                        }
                    },
                    amazon: {
                        shareUrl: "https://www.amazon.com/gp/wishlist/static-add",
                        params: {
                            u: this.getValue("url"),
                            t: this.getValue("title")
                        }
                    },
                    pinboard: {
                        shareUrl: "https://pinboard.in/add",
                        params: {
                            url: this.getValue("url"),
                            title: this.getValue("title"),
                            description: this.getValue("description")
                        }
                    },
                    threema: {
                        shareUrl: "threema://compose",
                        params: {
                            text: this.getValue("text"),
                            id: this.getValue("id")
                        }
                    },
                    kakaostory: {
                        shareUrl: "https://story.kakao.com/share",
                        params: {
                            url: this.getValue("url")
                        }
                    }
                }[t];
            return e && (e.width = this.getValue("width"), e.height = this.getValue("height")), void 0 !== e && this.urlSharer(e)
        },
        urlSharer: function(e) {
            var a, r = e.params || {},
                s = Object.keys(r),
                l = s.length > 0 ? "?" : "";
            for (a = 0; a < s.length; a++) "?" !== l && (l += "&"), r[s[a]] && (l += s[a] + "=" + encodeURIComponent(r[s[a]]));
            if (e.shareUrl += l, e.isLink) t.location.href = e.shareUrl;
            else {
                var i = e.width || 600,
                    h = e.height || 480,
                    u = t.innerWidth / 2 - i / 2 + t.screenX,
                    o = "scrollbars=no, width=" + i + ", height=" + h + ", top=" + (t.innerHeight / 2 - h / 2 + t.screenY) + ", left=" + u,
                    p = t.open(e.shareUrl, "", o);
                t.focus && p.focus()
            }
        }
    }, "complete" === e.readyState || "loading" !== e.readyState ? a.init() : e.addEventListener("DOMContentLoaded", a.init), t.addEventListener("page:load", a.init), t.addEventListener("turbolinks:load", a.init), t.Sharer = a
}(window, document);