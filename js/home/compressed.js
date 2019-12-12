/* main */ ! function (e)
{
	"use strict";
	e(".mobile-menu nav").meanmenu(
	{
		meanMenuContainer: ".mobile-menu-area",
		meanScreenWidth: "991",
		meanRevealPosition: "right"
	}), (new WOW).init(), e(".htc__product__container").imagesLoaded(function ()
	{
		e(".product__menu").on("click", "button", function ()
		{
			var i = e(this).attr("data-filter");
			o.isotope(
			{
				filter: i
			})
		});
		var o = e(".product__list").isotope(
		{
			itemSelector: ".single__pro",
			percentPosition: !0,
			transitionDuration: "0.7s",
			layoutMode: "fitRows",
			masonry:
			{
				columnWidth: 1
			}
		})
	}), e(".product__menu button").on("click", function (o)
	{
		e(this).siblings(".is-checked").removeClass("is-checked"), e(this).addClass("is-checked"), o.preventDefault()
	});
	var o = e(window),
		i = e("#sticky-header-with-topbar");
	o.on("scroll", function ()
	{
		o.scrollTop() < 245 ? i.removeClass("scroll-header") : i.addClass("scroll-header")
	}), e.scrollUp(
	{
		scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
		easingType: "linear",
		scrollSpeed: 900,
		animation: "fade"
	}), e('[data-toggle="tooltip"]').tooltip(
	{
		animated: "fade",
		placement: "top",
		container: "body"
	}), window.sr = ScrollReveal(
	{
		duration: 800,
		reset: !1
	}), sr.reveal(".foo"), sr.reveal(".bar");
	var s = e(".htc__foooter__area");
	e(".fixed__footer").css(
	{
		"margin-bottom": s.height() + "px"
	}), e(".search__open").on("click", function ()
	{
		return e("body").toggleClass("search__box__show__hide"), !1
	}), e(".search__close__btn .search__close__btn_icon").on("click", function ()
	{
		return e("body").toggleClass("search__box__show__hide"), !1
	}), e(".toggle__menu").on("click", function ()
	{
		e(".offsetmenu").addClass("offsetmenu__on"), e(".body__overlay").addClass("is-visible")
	}), e(".offsetmenu__close__btn").on("click", function ()
	{
		e(".offsetmenu").removeClass("offsetmenu__on"), e(".body__overlay").removeClass("is-visible")
	}), e(".cart__menu").on("click", function ()
	{
		e(".shopping__cart").addClass("shopping__cart__on"), e(".body__overlay").addClass("is-visible")
	}), e(".offsetmenu__close__btn").on("click", function ()
	{
		e(".shopping__cart").removeClass("shopping__cart__on"), e(".body__overlay").removeClass("is-visible")
	}), e(".filter__menu").on("click", function ()
	{
		e(".filter__wrap").addClass("filter__menu__on"), e(".body__overlay").addClass("is-visible")
	}), e(".filter__menu__close__btn").on("click", function ()
	{
		e(".filter__wrap").removeClass("filter__menu__on"), e(".body__overlay").removeClass("is-visible")
	}), e(".user__menu").on("click", function ()
	{
		e(".user__meta").addClass("user__meta__on"), e(".body__overlay").addClass("is-visible")
	}), e(".offsetmenu__close__btn").on("click", function ()
	{
		e(".user__meta").removeClass("user__meta__on"), e(".body__overlay").removeClass("is-visible")
	}), e(".body__overlay").on("click", function ()
	{
		e(this).removeClass("is-visible"), e(".offsetmenu").removeClass("offsetmenu__on"), e(".shopping__cart").removeClass("shopping__cart__on"), e(".filter__wrap").removeClass("filter__menu__on"), e(".user__meta").removeClass("user__meta__on")
	}), e(".slider__activation__wrap").length && e(".slider__activation__wrap").owlCarousel(
	{
		loop: !0,
		margin: 0,
		nav: !0,
		autoplay: !1,
		navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
		autoplayTimeout: 1e4,
		items: 1,
		dots: !1,
		lazyLoad: !0,
		responsive:
		{
			0:
			{
				items: 1
			},
			1920:
			{
				items: 1
			}
		}
	}), e(".slider__activation__02").length && e(".slider__activation__02").owlCarousel(
	{
		loop: !0,
		margin: 0,
		nav: !1,
		autoplay: !1,
		autoplayTimeout: 1e4,
		items: 1,
		dots: !1,
		lazyLoad: !0,
		responsive:
		{
			0:
			{
				items: 1
			},
			1920:
			{
				items: 1
			}
		}
	}), e(".popular__product__wrap").owlCarousel(
	{
		loop: !0,
		margin: 0,
		nav: !0,
		autoplay: !1,
		navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
		autoplayTimeout: 1e4,
		items: 3,
		dots: !1,
		lazyLoad: !0,
		responsive:
		{
			0:
			{
				items: 1
			},
			600:
			{
				items: 2
			},
			800:
			{
				items: 2
			},
			1024:
			{
				items: 3
			},
			1200:
			{
				items: 3
			},
			1400:
			{
				items: 3
			},
			1920:
			{
				items: 3
			}
		}
	}), e(".testimonial__wrap").owlCarousel(
	{
		loop: !0,
		margin: 0,
		nav: !1,
		autoplay: !1,
		navText: !1,
		autoplayTimeout: 1e4,
		items: 1,
		dots: !1,
		lazyLoad: !0,
		responsive:
		{
			0:
			{
				items: 1
			},
			600:
			{
				items: 1
			},
			800:
			{
				items: 1
			},
			1024:
			{
				items: 1
			},
			1200:
			{
				items: 1
			},
			1400:
			{
				items: 1
			},
			1920:
			{
				items: 1
			}
		}
	}), e(".video-popup").magnificPopup(
	{
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: !1,
		zoom:
		{
			enabled: !0
		}
	}), e(".image-popup").magnificPopup(
	{
		type: "image",
		mainClass: "mfp-fade",
		removalDelay: 100,
		gallery:
		{
			enabled: !0
		}
	}), e("#slider-range").slider(
	{
		range: !0,
		min: 10,
		max: 500,
		values: [110, 400],
		slide: function (o, i)
		{
			e("#amount").val("$" + i.values[0] + " - $" + i.values[1])
		}
	}), e("#amount").val("$" + e("#slider-range").slider("values", 0) + " - $" + e("#slider-range").slider("values", 1)), e(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>'), e(".qtybutton").on("click", function ()
	{
		var o = e(this),
			i = o.parent().find("input").val();
		if ("+" == o.text()) var s = parseFloat(i) + 1;
		else if (i > 1) s = parseFloat(i) - 1;
		else s = 1;
		o.parent().find("input").val(s)
	}), e(".onepage--menu").onePageNav(
	{
		scrollOffset: 0
	})
}(jQuery);

/* plugins */
! function ()
{
	for (var t, e = function () {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], n = i.length, o = window.console = window.console ||
		{}; n--;) o[t = i[n]] || (o[t] = e)
}(),
function (t, e, i)
{
	"use strict";
	t.fn.scrollUp = function (e)
	{
		t.data(i.body, "scrollUp") || (t.data(i.body, "scrollUp", !0), t.fn.scrollUp.init(e))
	}, t.fn.scrollUp.init = function (n)
	{
		var o, s, r, a, l, u, c = t.fn.scrollUp.settings = t.extend(
			{}, t.fn.scrollUp.defaults, n),
			h = !1;
		switch (u = c.scrollTrigger ? t(c.scrollTrigger) : t("<a/>",
		{
			id: c.scrollName,
			href: "#top"
		}), c.scrollTitle && u.attr("title", c.scrollTitle), u.appendTo("body"), c.scrollImg || c.scrollTrigger || u.html(c.scrollText), u.css(
		{
			display: "none",
			position: "fixed",
			zIndex: c.zIndex
		}), c.activeOverlay && t("<div/>",
		{
			id: c.scrollName + "-active"
		}).css(
		{
			position: "absolute",
			top: c.scrollDistance + "px",
			width: "100%",
			borderTop: "1px dotted" + c.activeOverlay,
			zIndex: c.zIndex
		}).appendTo("body"), c.animation)
		{
		case "fade":
			o = "fadeIn", s = "fadeOut", r = c.animationSpeed;
			break;
		case "slide":
			o = "slideDown", s = "slideUp", r = c.animationSpeed;
			break;
		default:
			o = "show", s = "hide", r = 0
		}
		a = "top" === c.scrollFrom ? c.scrollDistance : t(i).height() - t(e).height() - c.scrollDistance, t(e).scroll(function ()
		{
			t(e).scrollTop() > a ? h || (u[o](r), h = !0) : h && (u[s](r), h = !1)
		}), c.scrollTarget ? "number" == typeof c.scrollTarget ? l = c.scrollTarget : "string" == typeof c.scrollTarget && (l = Math.floor(t(c.scrollTarget).offset().top)) : l = 0, u.click(function (e)
		{
			e.preventDefault(), t("html, body").animate(
			{
				scrollTop: l
			}, c.scrollSpeed, c.easingType)
		})
	}, t.fn.scrollUp.defaults = {
		scrollName: "scrollUp",
		scrollDistance: 300,
		scrollFrom: "top",
		scrollSpeed: 300,
		easingType: "linear",
		animation: "fade",
		animationSpeed: 200,
		scrollTrigger: !1,
		scrollTarget: !1,
		scrollText: "Scroll to top",
		scrollTitle: !1,
		scrollImg: !1,
		activeOverlay: !1,
		zIndex: 2147483647
	}, t.fn.scrollUp.destroy = function (n)
	{
		t.removeData(i.body, "scrollUp"), t("#" + t.fn.scrollUp.settings.scrollName).remove(), t("#" + t.fn.scrollUp.settings.scrollName + "-active").remove(), t.fn.jquery.split(".")[1] >= 7 ? t(e).off("scroll", n) : t(e).unbind("scroll", n)
	}, t.scrollUp = t.fn.scrollUp
}(jQuery, window, document),
function ()
{
	var t, e, i, n, o, s = function (t, e)
		{
			return function ()
			{
				return t.apply(e, arguments)
			}
		},
		r = [].indexOf || function (t)
		{
			for (var e = 0, i = this.length; i > e; e++)
				if (e in this && this[e] === t) return e;
			return -1
		};
	e = function ()
	{
		function t()
		{}
		return t.prototype.extend = function (t, e)
		{
			var i, n;
			for (i in e) n = e[i], null == t[i] && (t[i] = n);
			return t
		}, t.prototype.isMobile = function (t)
		{
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
		}, t.prototype.createEvent = function (t, e, i, n)
		{
			var o;
			return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
		}, t.prototype.emitEvent = function (t, e)
		{
			return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
		}, t.prototype.addEvent = function (t, e, i)
		{
			return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
		}, t.prototype.removeEvent = function (t, e, i)
		{
			return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
		}, t.prototype.innerHeight = function ()
		{
			return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
		}, t
	}(), i = this.WeakMap || this.MozWeakMap || (i = function ()
	{
		function t()
		{
			this.keys = [], this.values = []
		}
		return t.prototype.get = function (t)
		{
			var e, i, n, o;
			for (e = i = 0, n = (o = this.keys).length; n > i; e = ++i)
				if (o[e] === t) return this.values[e]
		}, t.prototype.set = function (t, e)
		{
			var i, n, o, s;
			for (i = n = 0, o = (s = this.keys).length; o > n; i = ++n)
				if (s[i] === t) return void(this.values[i] = e);
			return this.keys.push(t), this.values.push(e)
		}, t
	}()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function ()
	{
		function t()
		{
			"undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
		}
		return t.notSupported = !0, t.prototype.observe = function () {}, t
	}()), n = this.getComputedStyle || function (t)
	{
		return this.getPropertyValue = function (e)
		{
			var i;
			return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function (t, e)
			{
				return e.toUpperCase()
			}), (null != (i = t.currentStyle) ? i[e] : void 0) || null
		}, this
	}, o = /(\-([a-z]){1})/g, this.WOW = function ()
	{
		function o(t)
		{
			null == t && (t = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
		}
		return o.prototype.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			callback: null,
			scrollContainer: null
		}, o.prototype.init = function ()
		{
			var t;
			return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
		}, o.prototype.start = function ()
		{
			var e, i, n, o;
			if (this.stopped = !1, this.boxes = function ()
				{
					var t, i, n, o;
					for (o = [], t = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > t; t++) e = n[t], o.push(e);
					return o
				}.call(this), this.all = function ()
				{
					var t, i, n, o;
					for (o = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], o.push(e);
					return o
				}.call(this), this.boxes.length)
				if (this.disabled()) this.resetStyle();
				else
					for (i = 0, n = (o = this.boxes).length; n > i; i++) e = o[i], this.applyStyle(e, !0);
			return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t)
			{
				return function (e)
				{
					var i, n, o, s, r;
					for (r = [], i = 0, n = e.length; n > i; i++) s = e[i], r.push(function ()
					{
						var t, e, i, n;
						for (n = [], t = 0, e = (i = s.addedNodes || []).length; e > t; t++) o = i[t], n.push(this.doSync(o));
						return n
					}.call(t));
					return r
				}
			}(this)).observe(document.body,
			{
				childList: !0,
				subtree: !0
			}) : void 0
		}, o.prototype.stop = function ()
		{
			return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
		}, o.prototype.sync = function ()
		{
			return t.notSupported ? this.doSync(this.element) : void 0
		}, o.prototype.doSync = function (t)
		{
			var e, i, n, o, s;
			if (null == t && (t = this.element), 1 === t.nodeType)
			{
				for (s = [], i = 0, n = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) e = o[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
				return s
			}
		}, o.prototype.show = function (t)
		{
			return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
		}, o.prototype.applyStyle = function (t, e)
		{
			var i, n, o, s;
			return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate((s = this, function ()
			{
				return s.customStyle(t, e, n, i, o)
			}))
		}, o.prototype.animate = "requestAnimationFrame" in window ? function (t)
		{
			return window.requestAnimationFrame(t)
		} : function (t)
		{
			return t()
		}, o.prototype.resetStyle = function ()
		{
			var t, e, i, n, o;
			for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], o.push(t.style.visibility = "visible");
			return o
		}, o.prototype.resetAnimation = function (t)
		{
			var e;
			return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
		}, o.prototype.customStyle = function (t, e, i, n, o)
		{
			return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style,
			{
				animationDuration: i
			}), n && this.vendorSet(t.style,
			{
				animationDelay: n
			}), o && this.vendorSet(t.style,
			{
				animationIterationCount: o
			}), this.vendorSet(t.style,
			{
				animationName: e ? "none" : this.cachedAnimationName(t)
			}), t
		}, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function (t, e)
		{
			var i, n, o, s;
			for (i in n = [], e) o = e[i], t["" + i] = o, n.push(function ()
			{
				var e, n, r, a;
				for (a = [], e = 0, n = (r = this.vendors).length; n > e; e++) s = r[e], a.push(t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = o);
				return a
			}.call(this));
			return n
		}, o.prototype.vendorCSS = function (t, e)
		{
			var i, o, s, r, a, l;
			for (r = (a = n(t)).getPropertyCSSValue(e), i = 0, o = (s = this.vendors).length; o > i; i++) l = s[i], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
			return r
		}, o.prototype.animationName = function (t)
		{
			var e;
			try
			{
				e = this.vendorCSS(t, "animation-name").cssText
			}
			catch (i)
			{
				e = n(t).getPropertyValue("animation-name")
			}
			return "none" === e ? "" : e
		}, o.prototype.cacheAnimationName = function (t)
		{
			return this.animationNameCache.set(t, this.animationName(t))
		}, o.prototype.cachedAnimationName = function (t)
		{
			return this.animationNameCache.get(t)
		}, o.prototype.scrollHandler = function ()
		{
			return this.scrolled = !0
		}, o.prototype.scrollCallback = function ()
		{
			var t;
			return !this.scrolled || (this.scrolled = !1, this.boxes = function ()
			{
				var e, i, n, o;
				for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++)(t = n[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
				return o
			}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
		}, o.prototype.offsetTop = function (t)
		{
			for (var e; void 0 === t.offsetTop;) t = t.parentNode;
			for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
			return e
		}, o.prototype.isVisible = function (t)
		{
			var e, i, n, o, s;
			return i = t.getAttribute("data-wow-offset") || this.config.offset, o = (s = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (n = this.offsetTop(t)) + t.clientHeight, o >= n && e >= s
		}, o.prototype.util = function ()
		{
			return null != this._util ? this._util : this._util = new e
		}, o.prototype.disabled = function ()
		{
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, o
	}()
}.call(this),
	function ()
	{
		function t()
		{}

		function e(t, e)
		{
			for (var i = t.length; i--;)
				if (t[i].listener === e) return i;
			return -1
		}

		function i(t)
		{
			return function ()
			{
				return this[t].apply(this, arguments)
			}
		}
		var n = t.prototype,
			o = this,
			s = o.EventEmitter;
		n.getListeners = function (t)
		{
			var e, i, n = this._getEvents();
			if ("object" == typeof t)
				for (i in e = {}, n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
			else e = n[t] || (n[t] = []);
			return e
		}, n.flattenListeners = function (t)
		{
			var e, i = [];
			for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
			return i
		}, n.getListenersAsObject = function (t)
		{
			var e, i = this.getListeners(t);
			return i instanceof Array && ((e = {})[t] = i), e || i
		}, n.addListener = function (t, i)
		{
			var n, o = this.getListenersAsObject(t),
				s = "object" == typeof i;
			for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i :
			{
				listener: i,
				once: !1
			});
			return this
		}, n.on = i("addListener"), n.addOnceListener = function (t, e)
		{
			return this.addListener(t,
			{
				listener: e,
				once: !0
			})
		}, n.once = i("addOnceListener"), n.defineEvent = function (t)
		{
			return this.getListeners(t), this
		}, n.defineEvents = function (t)
		{
			for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
			return this
		}, n.removeListener = function (t, i)
		{
			var n, o, s = this.getListenersAsObject(t);
			for (o in s) s.hasOwnProperty(o) && (-1 !== (n = e(s[o], i)) && s[o].splice(n, 1));
			return this
		}, n.off = i("removeListener"), n.addListeners = function (t, e)
		{
			return this.manipulateListeners(!1, t, e)
		}, n.removeListeners = function (t, e)
		{
			return this.manipulateListeners(!0, t, e)
		}, n.manipulateListeners = function (t, e, i)
		{
			var n, o, s = t ? this.removeListener : this.addListener,
				r = t ? this.removeListeners : this.addListeners;
			if ("object" != typeof e || e instanceof RegExp)
				for (n = i.length; n--;) s.call(this, e, i[n]);
			else
				for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
			return this
		}, n.removeEvent = function (t)
		{
			var e, i = typeof t,
				n = this._getEvents();
			if ("string" === i) delete n[t];
			else if ("object" === i)
				for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
			else delete this._events;
			return this
		}, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e)
		{
			var i, n, o, s = this.getListenersAsObject(t);
			for (o in s)
				if (s.hasOwnProperty(o))
					for (n = s[o].length; n--;) !0 === (i = s[o][n]).once && this.removeListener(t, i.listener), i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
			return this
		}, n.trigger = i("emitEvent"), n.emit = function (t)
		{
			var e = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(t, e)
		}, n.setOnceReturnValue = function (t)
		{
			return this._onceReturnValue = t, this
		}, n._getOnceReturnValue = function ()
		{
			return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
		}, n._getEvents = function ()
		{
			return this._events || (this._events = {})
		}, t.noConflict = function ()
		{
			return o.EventEmitter = s, t
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function ()
		{
			return t
		}) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
	}.call(this),
	function (t)
	{
		function e(e)
		{
			var i = t.event;
			return i.target = i.target || i.srcElement || e, i
		}
		var i = document.documentElement,
			n = function () {};
		i.addEventListener ? n = function (t, e, i)
		{
			t.addEventListener(e, i, !1)
		} : i.attachEvent && (n = function (t, i, n)
		{
			t[i + n] = n.handleEvent ? function ()
			{
				var i = e(t);
				n.handleEvent.call(n, i)
			} : function ()
			{
				var i = e(t);
				n.call(t, i)
			}, t.attachEvent("on" + i, t[i + n])
		});
		var o = function () {};
		i.removeEventListener ? o = function (t, e, i)
		{
			t.removeEventListener(e, i, !1)
		} : i.detachEvent && (o = function (t, e, i)
		{
			t.detachEvent("on" + e, t[e + i]);
			try
			{
				delete t[e + i]
			}
			catch (n)
			{
				t[e + i] = void 0
			}
		});
		var s = {
			bind: n,
			unbind: o
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", s) : t.eventie = s
	}(this),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n)
		{
			return e(t, i, n)
		}) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
	}(window, function (t, e, i)
	{
		function n(t, e)
		{
			for (var i in e) t[i] = e[i];
			return t
		}

		function o(t)
		{
			var e = [];
			if (function (t)
				{
					return "[object Array]" === h.call(t)
				}(t)) e = t;
			else if ("number" == typeof t.length)
				for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
			else e.push(t);
			return e
		}

		function s(t, e, i)
		{
			if (!(this instanceof s)) return new s(t, e);
			"string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = n(
			{}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), l && (this.jqDeferred = new l.Deferred);
			var r = this;
			setTimeout(function ()
			{
				r.check()
			})
		}

		function r(t)
		{
			this.img = t
		}

		function a(t)
		{
			this.src = t, d[t] = this
		}
		var l = t.jQuery,
			u = t.console,
			c = void 0 !== u,
			h = Object.prototype.toString;
		s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function ()
		{
			this.images = [];
			for (var t = 0, e = this.elements.length; e > t; t++)
			{
				var i = this.elements[t];
				"IMG" === i.nodeName && this.addImage(i);
				var n = i.nodeType;
				if (n && (1 === n || 9 === n || 11 === n))
					for (var o = i.querySelectorAll("img"), s = 0, r = o.length; r > s; s++)
					{
						var a = o[s];
						this.addImage(a)
					}
			}
		}, s.prototype.addImage = function (t)
		{
			var e = new r(t);
			this.images.push(e)
		}, s.prototype.check = function ()
		{
			function t(t, o)
			{
				return e.options.debug && c && u.log("confirm", t, o), e.progress(t), ++i === n && e.complete(), !0
			}
			var e = this,
				i = 0,
				n = this.images.length;
			if (this.hasAnyBroken = !1, n)
				for (var o = 0; n > o; o++)
				{
					var s = this.images[o];
					s.on("confirm", t), s.check()
				}
			else this.complete()
		}, s.prototype.progress = function (t)
		{
			this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
			var e = this;
			setTimeout(function ()
			{
				e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
			})
		}, s.prototype.complete = function ()
		{
			var t = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var e = this;
			setTimeout(function ()
			{
				if (e.emit(t, e), e.emit("always", e), e.jqDeferred)
				{
					var i = e.hasAnyBroken ? "reject" : "resolve";
					e.jqDeferred[i](e)
				}
			})
		}, l && (l.fn.imagesLoaded = function (t, e)
		{
			return new s(this, t, e).jqDeferred.promise(l(this))
		}), r.prototype = new e, r.prototype.check = function ()
		{
			var t = d[this.img.src] || new a(this.img.src);
			if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
			else if (this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
			else
			{
				var e = this;
				t.on("confirm", function (t, i)
				{
					return e.confirm(t.isLoaded, i), !0
				}), t.check()
			}
		}, r.prototype.confirm = function (t, e)
		{
			this.isLoaded = t, this.emit("confirm", this, e)
		};
		var d = {};
		return a.prototype = new e, a.prototype.check = function ()
		{
			if (!this.isChecked)
			{
				var t = new Image;
				i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
			}
		}, a.prototype.handleEvent = function (t)
		{
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, a.prototype.onload = function (t)
		{
			this.confirm(!0, "onload"), this.unbindProxyEvents(t)
		}, a.prototype.onerror = function (t)
		{
			this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
		}, a.prototype.confirm = function (t, e)
		{
			this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
		}, a.prototype.unbindProxyEvents = function (t)
		{
			i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
		}, s
	}),
	function (t)
	{
		function e()
		{}

		function i(t)
		{
			function i(e)
			{
				e.prototype.option || (e.prototype.option = function (e)
				{
					t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
				})
			}

			function o(e, i)
			{
				t.fn[e] = function (o)
				{
					if ("string" == typeof o)
					{
						for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++)
						{
							var u = this[a],
								c = t.data(u, e);
							if (c)
								if (t.isFunction(c[o]) && "_" !== o.charAt(0))
								{
									var h = c[o].apply(c, r);
									if (void 0 !== h) return h
								}
							else s("no such method '" + o + "' for " + e + " instance");
							else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
						}
						return this
					}
					return this.each(function ()
					{
						var n = t.data(this, e);
						n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
					})
				}
			}
			if (t)
			{
				var s = "undefined" == typeof console ? e : function (t)
				{
					console.error(t)
				};
				return t.bridget = function (t, e)
				{
					i(e), o(t, e)
				}, t.bridget
			}
		}
		var n = Array.prototype.slice;
		"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
	}(window),
	function (t)
	{
		function e(e)
		{
			var i = t.event;
			return i.target = i.target || i.srcElement || e, i
		}
		var i = document.documentElement,
			n = function () {};
		i.addEventListener ? n = function (t, e, i)
		{
			t.addEventListener(e, i, !1)
		} : i.attachEvent && (n = function (t, i, n)
		{
			t[i + n] = n.handleEvent ? function ()
			{
				var i = e(t);
				n.handleEvent.call(n, i)
			} : function ()
			{
				var i = e(t);
				n.call(t, i)
			}, t.attachEvent("on" + i, t[i + n])
		});
		var o = function () {};
		i.removeEventListener ? o = function (t, e, i)
		{
			t.removeEventListener(e, i, !1)
		} : i.detachEvent && (o = function (t, e, i)
		{
			t.detachEvent("on" + e, t[e + i]);
			try
			{
				delete t[e + i]
			}
			catch (n)
			{
				t[e + i] = void 0
			}
		});
		var s = {
			bind: n,
			unbind: o
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
	}(window),
	function ()
	{
		function t()
		{}

		function e(t, e)
		{
			for (var i = t.length; i--;)
				if (t[i].listener === e) return i;
			return -1
		}

		function i(t)
		{
			return function ()
			{
				return this[t].apply(this, arguments)
			}
		}
		var n = t.prototype,
			o = this,
			s = o.EventEmitter;
		n.getListeners = function (t)
		{
			var e, i, n = this._getEvents();
			if (t instanceof RegExp)
				for (i in e = {}, n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
			else e = n[t] || (n[t] = []);
			return e
		}, n.flattenListeners = function (t)
		{
			var e, i = [];
			for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
			return i
		}, n.getListenersAsObject = function (t)
		{
			var e, i = this.getListeners(t);
			return i instanceof Array && ((e = {})[t] = i), e || i
		}, n.addListener = function (t, i)
		{
			var n, o = this.getListenersAsObject(t),
				s = "object" == typeof i;
			for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i :
			{
				listener: i,
				once: !1
			});
			return this
		}, n.on = i("addListener"), n.addOnceListener = function (t, e)
		{
			return this.addListener(t,
			{
				listener: e,
				once: !0
			})
		}, n.once = i("addOnceListener"), n.defineEvent = function (t)
		{
			return this.getListeners(t), this
		}, n.defineEvents = function (t)
		{
			for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
			return this
		}, n.removeListener = function (t, i)
		{
			var n, o, s = this.getListenersAsObject(t);
			for (o in s) s.hasOwnProperty(o) && (-1 !== (n = e(s[o], i)) && s[o].splice(n, 1));
			return this
		}, n.off = i("removeListener"), n.addListeners = function (t, e)
		{
			return this.manipulateListeners(!1, t, e)
		}, n.removeListeners = function (t, e)
		{
			return this.manipulateListeners(!0, t, e)
		}, n.manipulateListeners = function (t, e, i)
		{
			var n, o, s = t ? this.removeListener : this.addListener,
				r = t ? this.removeListeners : this.addListeners;
			if ("object" != typeof e || e instanceof RegExp)
				for (n = i.length; n--;) s.call(this, e, i[n]);
			else
				for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
			return this
		}, n.removeEvent = function (t)
		{
			var e, i = typeof t,
				n = this._getEvents();
			if ("string" === i) delete n[t];
			else if (t instanceof RegExp)
				for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
			else delete this._events;
			return this
		}, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e)
		{
			var i, n, o, s = this.getListenersAsObject(t);
			for (o in s)
				if (s.hasOwnProperty(o))
					for (n = s[o].length; n--;) !0 === (i = s[o][n]).once && this.removeListener(t, i.listener), i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
			return this
		}, n.trigger = i("emitEvent"), n.emit = function (t)
		{
			var e = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(t, e)
		}, n.setOnceReturnValue = function (t)
		{
			return this._onceReturnValue = t, this
		}, n._getOnceReturnValue = function ()
		{
			return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
		}, n._getEvents = function ()
		{
			return this._events || (this._events = {})
		}, t.noConflict = function ()
		{
			return o.EventEmitter = s, t
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function ()
		{
			return t
		}) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
	}.call(this),
	function (t)
	{
		function e(t)
		{
			if (t)
			{
				if ("string" == typeof n[t]) return t;
				t = t.charAt(0).toUpperCase() + t.slice(1);
				for (var e, o = 0, s = i.length; s > o; o++)
					if (e = i[o] + t, "string" == typeof n[e]) return e
			}
		}
		var i = "Webkit Moz ms Ms O".split(" "),
			n = document.documentElement.style;
		"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function ()
		{
			return e
		}) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
	}(window),
	function (t)
	{
		function e(t)
		{
			var e = parseFloat(t);
			return -1 === t.indexOf("%") && !isNaN(e) && e
		}

		function i(i)
		{
			function s()
			{
				if (!c)
				{
					c = !0;
					var o = t.getComputedStyle;
					if (a = function ()
						{
							var t = o ? function (t)
							{
								return o(t, null)
							} : function (t)
							{
								return t.currentStyle
							};
							return function (e)
							{
								var i = t(e);
								return i || n("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
							}
						}(), l = i("boxSizing"))
					{
						var s = document.createElement("div");
						s.style.width = "200px", s.style.padding = "1px 2px 3px 4px", s.style.borderStyle = "solid", s.style.borderWidth = "1px 2px 3px 4px", s.style[l] = "border-box";
						var r = document.body || document.documentElement;
						r.appendChild(s);
						var h = a(s);
						u = 200 === e(h.width), r.removeChild(s)
					}
				}
			}

			function r(e, i)
			{
				if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
				var n = e.style,
					o = n.left,
					s = e.runtimeStyle,
					r = s && s.left;
				return r && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, r && (s.left = r), i
			}
			var a, l, u, c = !1;
			return function (t)
			{
				if (s(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType)
				{
					var i = a(t);
					if ("none" === i.display) return function ()
					{
						for (var t = {
								width: 0,
								height: 0,
								innerWidth: 0,
								innerHeight: 0,
								outerWidth: 0,
								outerHeight: 0
							}, e = 0, i = o.length; i > e; e++) t[o[e]] = 0;
						return t
					}();
					var n = {};
					n.width = t.offsetWidth, n.height = t.offsetHeight;
					for (var c = n.isBorderBox = !(!l || !i[l] || "border-box" !== i[l]), h = 0, d = o.length; d > h; h++)
					{
						var p = o[h],
							f = i[p];
						f = r(t, f);
						var m = parseFloat(f);
						n[p] = isNaN(m) ? 0 : m
					}
					var g = n.paddingLeft + n.paddingRight,
						v = n.paddingTop + n.paddingBottom,
						y = n.marginLeft + n.marginRight,
						_ = n.marginTop + n.marginBottom,
						b = n.borderLeftWidth + n.borderRightWidth,
						w = n.borderTopWidth + n.borderBottomWidth,
						x = c && u,
						C = e(i.width);
					!1 !== C && (n.width = C + (x ? 0 : g + b));
					var E = e(i.height);
					return !1 !== E && (n.height = E + (x ? 0 : v + w)), n.innerWidth = n.width - (g + b), n.innerHeight = n.height - (v + w), n.outerWidth = n.width + y, n.outerHeight = n.height + _, n
				}
			}
		}
		var n = "undefined" == typeof console ? function () {} : function (t)
			{
				console.error(t)
			},
			o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], i) : "object" == typeof exports ? module.exports = i(require("desandro-get-style-property")) : t.getSize = i(t.getStyleProperty)
	}(window),
	function (t)
	{
		function e(t)
		{
			"function" == typeof t && (e.isReady ? t() : r.push(t))
		}

		function i(t)
		{
			var i = "readystatechange" === t.type && "complete" !== s.readyState;
			e.isReady || i || n()
		}

		function n()
		{
			e.isReady = !0;
			for (var t = 0, i = r.length; i > t; t++)
			{
				(0, r[t])()
			}
		}

		function o(o)
		{
			return "complete" === s.readyState ? n() : (o.bind(s, "DOMContentLoaded", i), o.bind(s, "readystatechange", i), o.bind(t, "load", i)), e
		}
		var s = t.document,
			r = [];
		e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
	}(window),
	function (t)
	{
		function e(t, e)
		{
			return t[o](e)
		}

		function i(t)
		{
			t.parentNode || document.createDocumentFragment().appendChild(t)
		}
		var n, o = function ()
		{
			if (t.matches) return "matches";
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++)
			{
				var o = e[i] + "MatchesSelector";
				if (t[o]) return o
			}
		}();
		if (o)
		{
			var s = e(document.createElement("div"), "div");
			n = s ? e : function (t, n)
			{
				return i(t), e(t, n)
			}
		}
		else n = function (t, e)
		{
			i(t);
			for (var n = t.parentNode.querySelectorAll(e), o = 0, s = n.length; s > o; o++)
				if (n[o] === t) return !0;
			return !1
		};
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function ()
		{
			return n
		}) : "object" == typeof exports ? module.exports = n : window.matchesSelector = n
	}(Element.prototype),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, n)
		{
			return e(t, i, n)
		}) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
	}(window, function (t, e, i)
	{
		var n = {
				extend: function (t, e)
				{
					for (var i in e) t[i] = e[i];
					return t
				},
				modulo: function (t, e)
				{
					return (t % e + e) % e
				}
			},
			o = Object.prototype.toString;
		n.isArray = function (t)
		{
			return "[object Array]" == o.call(t)
		}, n.makeArray = function (t)
		{
			var e = [];
			if (n.isArray(t)) e = t;
			else if (t && "number" == typeof t.length)
				for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
			else e.push(t);
			return e
		}, n.indexOf = Array.prototype.indexOf ? function (t, e)
		{
			return t.indexOf(e)
		} : function (t, e)
		{
			for (var i = 0, n = t.length; n > i; i++)
				if (t[i] === e) return i;
			return -1
		}, n.removeFrom = function (t, e)
		{
			var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
		}, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t)
		{
			return t instanceof HTMLElement
		} : function (t)
		{
			return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
		}, n.setText = function ()
		{
			var t;
			return function (e, i)
			{
				e[t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = i
			}
		}(), n.getParent = function (t, e)
		{
			for (; t != document.body;)
				if (t = t.parentNode, i(t, e)) return t
		}, n.getQueryElement = function (t)
		{
			return "string" == typeof t ? document.querySelector(t) : t
		}, n.handleEvent = function (t)
		{
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, n.filterFindElements = function (t, e)
		{
			for (var o = [], s = 0, r = (t = n.makeArray(t)).length; r > s; s++)
			{
				var a = t[s];
				if (n.isElement(a))
					if (e)
					{
						i(a, e) && o.push(a);
						for (var l = a.querySelectorAll(e), u = 0, c = l.length; c > u; u++) o.push(l[u])
					}
				else o.push(a)
			}
			return o
		}, n.debounceMethod = function (t, e, i)
		{
			var n = t.prototype[e],
				o = e + "Timeout";
			t.prototype[e] = function ()
			{
				var t = this[o];
				t && clearTimeout(t);
				var e = arguments,
					s = this;
				this[o] = setTimeout(function ()
				{
					n.apply(s, e), delete s[o]
				}, i || 100)
			}
		}, n.toDashed = function (t)
		{
			return t.replace(/(.)([A-Z])/g, function (t, e, i)
			{
				return e + "-" + i
			}).toLowerCase()
		};
		var s = t.console;
		return n.htmlInit = function (i, o)
		{
			e(function ()
			{
				for (var e = n.toDashed(o), r = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = r.length; u > l; l++)
				{
					var c, h = r[l],
						d = h.getAttribute(a);
					try
					{
						c = d && JSON.parse(d)
					}
					catch (t)
					{
						s && s.error("Error parsing " + a + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + t);
						continue
					}
					var p = new i(h, c),
						f = t.jQuery;
					f && f.data(h, o, p)
				}
			})
		}, n
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, n, o, s)
		{
			return e(t, i, n, o, s)
		}) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
	}(window, function (t, e, i, n, o)
	{
		function s(t, e)
		{
			t && (this.element = t, this.layout = e, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}
		var r = t.getComputedStyle,
			a = r ? function (t)
			{
				return r(t, null)
			} : function (t)
			{
				return t.currentStyle
			},
			l = n("transition"),
			u = n("transform"),
			c = l && u,
			h = !!n("perspective"),
			d = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "otransitionend",
				transition: "transitionend"
			}[l],
			p = ["transform", "transition", "transitionDuration", "transitionProperty"],
			f = function ()
			{
				for (var t = {}, e = 0, i = p.length; i > e; e++)
				{
					var o = p[e],
						s = n(o);
					s && s !== o && (t[o] = s)
				}
				return t
			}();
		o.extend(s.prototype, e.prototype), s.prototype._create = function ()
		{
			this._transn = {
				ingProperties:
				{},
				clean:
				{},
				onEnd:
				{}
			}, this.css(
			{
				position: "absolute"
			})
		}, s.prototype.handleEvent = function (t)
		{
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, s.prototype.getSize = function ()
		{
			this.size = i(this.element)
		}, s.prototype.css = function (t)
		{
			var e = this.element.style;
			for (var i in t)
			{
				e[f[i] || i] = t[i]
			}
		}, s.prototype.getPosition = function ()
		{
			var t = a(this.element),
				e = this.layout.options,
				i = e.isOriginLeft,
				n = e.isOriginTop,
				o = parseInt(t[i ? "left" : "right"], 10),
				s = parseInt(t[n ? "top" : "bottom"], 10);
			o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s;
			var r = this.layout.size;
			o -= i ? r.paddingLeft : r.paddingRight, s -= n ? r.paddingTop : r.paddingBottom, this.position.x = o, this.position.y = s
		}, s.prototype.layoutPosition = function ()
		{
			var t = this.layout.size,
				e = this.layout.options,
				i = {},
				n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
				o = e.isOriginLeft ? "left" : "right",
				s = e.isOriginLeft ? "right" : "left",
				r = this.position.x + t[n];
			r = e.percentPosition && !e.isHorizontal ? r / t.width * 100 + "%" : r + "px", i[o] = r, i[s] = "";
			var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
				l = e.isOriginTop ? "top" : "bottom",
				u = e.isOriginTop ? "bottom" : "top",
				c = this.position.y + t[a];
			c = e.percentPosition && e.isHorizontal ? c / t.height * 100 + "%" : c + "px", i[l] = c, i[u] = "", this.css(i), this.emitEvent("layout", [this])
		};
		var m = h ? function (t, e)
		{
			return "translate3d(" + t + "px, " + e + "px, 0)"
		} : function (t, e)
		{
			return "translate(" + t + "px, " + e + "px)"
		};
		s.prototype._transitionTo = function (t, e)
		{
			this.getPosition();
			var i = this.position.x,
				n = this.position.y,
				o = parseInt(t, 10),
				s = parseInt(e, 10),
				r = o === this.position.x && s === this.position.y;
			if (this.setPosition(t, e), !r || this.isTransitioning)
			{
				var a = t - i,
					l = e - n,
					u = {},
					c = this.layout.options;
				a = c.isOriginLeft ? a : -a, l = c.isOriginTop ? l : -l, u.transform = m(a, l), this.transition(
				{
					to: u,
					onTransitionEnd:
					{
						transform: this.layoutPosition
					},
					isCleaning: !0
				})
			}
			else this.layoutPosition()
		}, s.prototype.goTo = function (t, e)
		{
			this.setPosition(t, e), this.layoutPosition()
		}, s.prototype.moveTo = c ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function (t, e)
		{
			this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
		}, s.prototype._nonTransition = function (t)
		{
			for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
		}, s.prototype._transition = function (t)
		{
			if (parseFloat(this.layout.options.transitionDuration))
			{
				var e = this._transn;
				for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
				for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
				if (t.from)
				{
					this.css(t.from);
					this.element.offsetHeight;
					null
				}
				this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
			}
			else this._nonTransition(t)
		};
		var g = u && o.toDashed(u) + ",opacity";
		s.prototype.enableTransition = function ()
		{
			this.isTransitioning || (this.css(
			{
				transitionProperty: g,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(d, this, !1))
		}, s.prototype.transition = s.prototype[l ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function (t)
		{
			this.ontransitionend(t)
		}, s.prototype.onotransitionend = function (t)
		{
			this.ontransitionend(t)
		};
		var v = {
			"-webkit-transform": "transform",
			"-moz-transform": "transform",
			"-o-transform": "transform"
		};
		s.prototype.ontransitionend = function (t)
		{
			if (t.target === this.element)
			{
				var e = this._transn,
					i = v[t.propertyName] || t.propertyName;
				if (delete e.ingProperties[i], function (t)
					{
						for (var e in t) return !1;
						return !0
					}(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
				this.emitEvent("transitionEnd", [this])
			}
		}, s.prototype.disableTransition = function ()
		{
			this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
		}, s.prototype._removeStyles = function (t)
		{
			var e = {};
			for (var i in t) e[i] = "";
			this.css(e)
		};
		var y = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return s.prototype.removeTransitionStyles = function ()
		{
			this.css(y)
		}, s.prototype.removeElem = function ()
		{
			this.element.parentNode.removeChild(this.element), this.css(
			{
				display: ""
			}), this.emitEvent("remove", [this])
		}, s.prototype.remove = function ()
		{
			if (l && parseFloat(this.layout.options.transitionDuration))
			{
				var t = this;
				this.once("transitionEnd", function ()
				{
					t.removeElem()
				}), this.hide()
			}
			else this.removeElem()
		}, s.prototype.reveal = function ()
		{
			delete this.isHidden, this.css(
			{
				display: ""
			});
			var t = this.layout.options,
				e = {};
			e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition(
			{
				from: t.hiddenStyle,
				to: t.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: e
			})
		}, s.prototype.onRevealTransitionEnd = function ()
		{
			this.isHidden || this.emitEvent("reveal")
		}, s.prototype.getHideRevealTransitionEndProperty = function (t)
		{
			var e = this.layout.options[t];
			if (e.opacity) return "opacity";
			for (var i in e) return i
		}, s.prototype.hide = function ()
		{
			this.isHidden = !0, this.css(
			{
				display: ""
			});
			var t = this.layout.options,
				e = {};
			e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition(
			{
				from: t.visibleStyle,
				to: t.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: e
			})
		}, s.prototype.onHideTransitionEnd = function ()
		{
			this.isHidden && (this.css(
			{
				display: "none"
			}), this.emitEvent("hide"))
		}, s.prototype.destroy = function ()
		{
			this.css(
			{
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, s
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s, r)
		{
			return e(t, i, n, o, s, r)
		}) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
	}(window, function (t, e, i, n, o, s)
	{
		function r(t, e)
		{
			var i = o.getQueryElement(t);
			if (i)
			{
				this.element = i, l && (this.$element = l(this.element)), this.options = o.extend(
				{}, this.constructor.defaults), this.option(e);
				var n = ++c;
				this.element.outlayerGUID = n, h[n] = this, this._create(), this.options.isInitLayout && this.layout()
			}
			else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
		}
		var a = t.console,
			l = t.jQuery,
			u = function () {},
			c = 0,
			h = {};
		return r.namespace = "outlayer", r.Item = s, r.defaults = {
			containerStyle:
			{
				position: "relative"
			},
			isInitLayout: !0,
			isOriginLeft: !0,
			isOriginTop: !0,
			isResizeBound: !0,
			isResizingContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle:
			{
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle:
			{
				opacity: 1,
				transform: "scale(1)"
			}
		}, o.extend(r.prototype, i.prototype), r.prototype.option = function (t)
		{
			o.extend(this.options, t)
		}, r.prototype._create = function ()
		{
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
		}, r.prototype.reloadItems = function ()
		{
			this.items = this._itemize(this.element.children)
		}, r.prototype._itemize = function (t)
		{
			for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, s = e.length; s > o; o++)
			{
				var r = new i(e[o], this);
				n.push(r)
			}
			return n
		}, r.prototype._filterFindItemElements = function (t)
		{
			return o.filterFindElements(t, this.options.itemSelector)
		}, r.prototype.getItemElements = function ()
		{
			for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
			return t
		}, r.prototype.layout = function ()
		{
			this._resetLayout(), this._manageStamps();
			var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			this.layoutItems(this.items, t), this._isLayoutInited = !0
		}, r.prototype._init = r.prototype.layout, r.prototype._resetLayout = function ()
		{
			this.getSize()
		}, r.prototype.getSize = function ()
		{
			this.size = n(this.element)
		}, r.prototype._getMeasurement = function (t, e)
		{
			var i, s = this.options[t];
			s ? ("string" == typeof s ? i = this.element.querySelector(s) : o.isElement(s) && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
		}, r.prototype.layoutItems = function (t, e)
		{
			t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
		}, r.prototype._getItemsForLayout = function (t)
		{
			for (var e = [], i = 0, n = t.length; n > i; i++)
			{
				var o = t[i];
				o.isIgnored || e.push(o)
			}
			return e
		}, r.prototype._layoutItems = function (t, e)
		{
			if (this._emitCompleteOnItems("layout", t), t && t.length)
			{
				for (var i = [], n = 0, o = t.length; o > n; n++)
				{
					var s = t[n],
						r = this._getItemLayoutPosition(s);
					r.item = s, r.isInstant = e || s.isLayoutInstant, i.push(r)
				}
				this._processLayoutQueue(i)
			}
		}, r.prototype._getItemLayoutPosition = function ()
		{
			return {
				x: 0,
				y: 0
			}
		}, r.prototype._processLayoutQueue = function (t)
		{
			for (var e = 0, i = t.length; i > e; e++)
			{
				var n = t[e];
				this._positionItem(n.item, n.x, n.y, n.isInstant)
			}
		}, r.prototype._positionItem = function (t, e, i, n)
		{
			n ? t.goTo(e, i) : t.moveTo(e, i)
		}, r.prototype._postLayout = function ()
		{
			this.resizeContainer()
		}, r.prototype.resizeContainer = function ()
		{
			if (this.options.isResizingContainer)
			{
				var t = this._getContainerSize();
				t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
			}
		}, r.prototype._getContainerSize = u, r.prototype._setContainerMeasure = function (t, e)
		{
			if (void 0 !== t)
			{
				var i = this.size;
				i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
			}
		}, r.prototype._emitCompleteOnItems = function (t, e)
		{
			function i()
			{
				o.emitEvent(t + "Complete", [e])
			}

			function n()
			{
				++r === s && i()
			}
			var o = this,
				s = e.length;
			if (e && s)
				for (var r = 0, a = 0, l = e.length; l > a; a++)
				{
					e[a].once(t, n)
				}
			else i()
		}, r.prototype.ignore = function (t)
		{
			var e = this.getItem(t);
			e && (e.isIgnored = !0)
		}, r.prototype.unignore = function (t)
		{
			var e = this.getItem(t);
			e && delete e.isIgnored
		}, r.prototype.stamp = function (t)
		{
			if (t = this._find(t))
			{
				this.stamps = this.stamps.concat(t);
				for (var e = 0, i = t.length; i > e; e++)
				{
					var n = t[e];
					this.ignore(n)
				}
			}
		}, r.prototype.unstamp = function (t)
		{
			if (t = this._find(t))
				for (var e = 0, i = t.length; i > e; e++)
				{
					var n = t[e];
					o.removeFrom(this.stamps, n), this.unignore(n)
				}
		}, r.prototype._find = function (t)
		{
			return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
		}, r.prototype._manageStamps = function ()
		{
			if (this.stamps && this.stamps.length)
			{
				this._getBoundingRect();
				for (var t = 0, e = this.stamps.length; e > t; t++)
				{
					var i = this.stamps[t];
					this._manageStamp(i)
				}
			}
		}, r.prototype._getBoundingRect = function ()
		{
			var t = this.element.getBoundingClientRect(),
				e = this.size;
			this._boundingRect = {
				left: t.left + e.paddingLeft + e.borderLeftWidth,
				top: t.top + e.paddingTop + e.borderTopWidth,
				right: t.right - (e.paddingRight + e.borderRightWidth),
				bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
			}
		}, r.prototype._manageStamp = u, r.prototype._getElementOffset = function (t)
		{
			var e = t.getBoundingClientRect(),
				i = this._boundingRect,
				o = n(t);
			return {
				left: e.left - i.left - o.marginLeft,
				top: e.top - i.top - o.marginTop,
				right: i.right - e.right - o.marginRight,
				bottom: i.bottom - e.bottom - o.marginBottom
			}
		}, r.prototype.handleEvent = function (t)
		{
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, r.prototype.bindResize = function ()
		{
			this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
		}, r.prototype.unbindResize = function ()
		{
			this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
		}, r.prototype.onresize = function ()
		{
			this.resizeTimeout && clearTimeout(this.resizeTimeout);
			var t = this;
			this.resizeTimeout = setTimeout(function ()
			{
				t.resize(), delete t.resizeTimeout
			}, 100)
		}, r.prototype.resize = function ()
		{
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, r.prototype.needsResizeLayout = function ()
		{
			var t = n(this.element);
			return this.size && t && t.innerWidth !== this.size.innerWidth
		}, r.prototype.addItems = function (t)
		{
			var e = this._itemize(t);
			return e.length && (this.items = this.items.concat(e)), e
		}, r.prototype.appended = function (t)
		{
			var e = this.addItems(t);
			e.length && (this.layoutItems(e, !0), this.reveal(e))
		}, r.prototype.prepended = function (t)
		{
			var e = this._itemize(t);
			if (e.length)
			{
				var i = this.items.slice(0);
				this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
			}
		}, r.prototype.reveal = function (t)
		{
			this._emitCompleteOnItems("reveal", t);
			for (var e = t && t.length, i = 0; e && e > i; i++)
			{
				t[i].reveal()
			}
		}, r.prototype.hide = function (t)
		{
			this._emitCompleteOnItems("hide", t);
			for (var e = t && t.length, i = 0; e && e > i; i++)
			{
				t[i].hide()
			}
		}, r.prototype.revealItemElements = function (t)
		{
			var e = this.getItems(t);
			this.reveal(e)
		}, r.prototype.hideItemElements = function (t)
		{
			var e = this.getItems(t);
			this.hide(e)
		}, r.prototype.getItem = function (t)
		{
			for (var e = 0, i = this.items.length; i > e; e++)
			{
				var n = this.items[e];
				if (n.element === t) return n
			}
		}, r.prototype.getItems = function (t)
		{
			for (var e = [], i = 0, n = (t = o.makeArray(t)).length; n > i; i++)
			{
				var s = t[i],
					r = this.getItem(s);
				r && e.push(r)
			}
			return e
		}, r.prototype.remove = function (t)
		{
			var e = this.getItems(t);
			if (this._emitCompleteOnItems("remove", e), e && e.length)
				for (var i = 0, n = e.length; n > i; i++)
				{
					var s = e[i];
					s.remove(), o.removeFrom(this.items, s)
				}
		}, r.prototype.destroy = function ()
		{
			var t = this.element.style;
			t.height = "", t.position = "", t.width = "";
			for (var e = 0, i = this.items.length; i > e; e++)
			{
				this.items[e].destroy()
			}
			this.unbindResize();
			var n = this.element.outlayerGUID;
			delete h[n], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
		}, r.data = function (t)
		{
			var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
			return e && h[e]
		}, r.create = function (t, e)
		{
			function i()
			{
				r.apply(this, arguments)
			}
			return Object.create ? i.prototype = Object.create(r.prototype) : o.extend(i.prototype, r.prototype), i.prototype.constructor = i, i.defaults = o.extend(
			{}, r.defaults), o.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = r.data, i.Item = function ()
			{
				s.apply(this, arguments)
			}, i.Item.prototype = new s, o.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
		}, r.Item = s, r
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope ||
		{}, t.Isotope.Item = e(t.Outlayer))
	}(window, function (t)
	{
		function e()
		{
			t.Item.apply(this, arguments)
		}
		e.prototype = new t.Item, e.prototype._create = function ()
		{
			this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
		}, e.prototype.updateSortData = function ()
		{
			if (!this.isIgnored)
			{
				this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
				var t = this.layout.options.getSortData,
					e = this.layout._sorters;
				for (var i in t)
				{
					var n = e[i];
					this.sortData[i] = n(this.element, this)
				}
			}
		};
		var i = e.prototype.destroy;
		return e.prototype.destroy = function ()
		{
			i.apply(this, arguments), this.css(
			{
				display: ""
			})
		}, e
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope ||
		{}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
	}(window, function (t, e)
	{
		function i(t)
		{
			this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
		}
		return function ()
		{
			function t(t)
			{
				return function ()
				{
					return e.prototype[t].apply(this.isotope, arguments)
				}
			}
			for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, s = n.length; s > o; o++)
			{
				var r = n[o];
				i.prototype[r] = t(r)
			}
		}(), i.prototype.needsVerticalResizeLayout = function ()
		{
			var e = t(this.isotope.element);
			return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
		}, i.prototype._getMeasurement = function ()
		{
			this.isotope._getMeasurement.apply(this, arguments)
		}, i.prototype.getColumnWidth = function ()
		{
			this.getSegmentSize("column", "Width")
		}, i.prototype.getRowHeight = function ()
		{
			this.getSegmentSize("row", "Height")
		}, i.prototype.getSegmentSize = function (t, e)
		{
			var i = t + e,
				n = "outer" + e;
			if (this._getMeasurement(i, n), !this[i])
			{
				var o = this.getFirstItemSize();
				this[i] = o && o[n] || this.isotope.size["inner" + e]
			}
		}, i.prototype.getFirstItemSize = function ()
		{
			var e = this.isotope.filteredItems[0];
			return e && e.element && t(e.element)
		}, i.prototype.layout = function ()
		{
			this.isotope.layout.apply(this.isotope, arguments)
		}, i.prototype.getSize = function ()
		{
			this.isotope.getSize(), this.size = this.isotope.size
		}, i.modes = {}, i.create = function (t, e)
		{
			function n()
			{
				i.apply(this, arguments)
			}
			return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
		}, i
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
	}(window, function (t, e, i)
	{
		var n = t.create("masonry");
		return n.prototype._resetLayout = function ()
		{
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var t = this.cols;
			for (this.colYs = []; t--;) this.colYs.push(0);
			this.maxY = 0
		}, n.prototype.measureColumns = function ()
		{
			if (this.getContainerWidth(), !this.columnWidth)
			{
				var t = this.items[0],
					i = t && t.element;
				this.columnWidth = i && e(i).outerWidth || this.containerWidth
			}
			var n = this.columnWidth += this.gutter,
				o = this.containerWidth + this.gutter,
				s = o / n,
				r = n - o % n;
			s = Math[r && 1 > r ? "round" : "floor"](s), this.cols = Math.max(s, 1)
		}, n.prototype.getContainerWidth = function ()
		{
			var t = this.options.isFitWidth ? this.element.parentNode : this.element,
				i = e(t);
			this.containerWidth = i && i.innerWidth
		}, n.prototype._getItemLayoutPosition = function (t)
		{
			t.getSize();
			var e = t.size.outerWidth % this.columnWidth,
				n = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
			n = Math.min(n, this.cols);
			for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = i.indexOf(o, s), a = {
					x: this.columnWidth * r,
					y: s
				}, l = s + t.size.outerHeight, u = this.cols + 1 - o.length, c = 0; u > c; c++) this.colYs[r + c] = l;
			return a
		}, n.prototype._getColGroup = function (t)
		{
			if (2 > t) return this.colYs;
			for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
			{
				var o = this.colYs.slice(n, n + t);
				e[n] = Math.max.apply(Math, o)
			}
			return e
		}, n.prototype._manageStamp = function (t)
		{
			var i = e(t),
				n = this._getElementOffset(t),
				o = this.options.isOriginLeft ? n.left : n.right,
				s = o + i.outerWidth,
				r = Math.floor(o / this.columnWidth);
			r = Math.max(0, r);
			var a = Math.floor(s / this.columnWidth);
			a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
			for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = r; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
		}, n.prototype._getContainerSize = function ()
		{
			this.maxY = Math.max.apply(Math, this.colYs);
			var t = {
				height: this.maxY
			};
			return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
		}, n.prototype._getContainerFitWidth = function ()
		{
			for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
			return (this.cols - t) * this.columnWidth - this.gutter
		}, n.prototype.needsResizeLayout = function ()
		{
			var t = this.containerWidth;
			return this.getContainerWidth(), t !== this.containerWidth
		}, n
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
	}(window, function (t, e)
	{
		var i = t.create("masonry"),
			n = i.prototype._getElementOffset,
			o = i.prototype.layout,
			s = i.prototype._getMeasurement;
		(function (t, e)
		{
			for (var i in e) t[i] = e[i]
		})(i.prototype, e.prototype), i.prototype._getElementOffset = n, i.prototype.layout = o, i.prototype._getMeasurement = s;
		var r = i.prototype.measureColumns;
		i.prototype.measureColumns = function ()
		{
			this.items = this.isotope.filteredItems, r.call(this)
		};
		var a = i.prototype._manageStamp;
		return i.prototype._manageStamp = function ()
		{
			this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments)
		}, i
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
	}(window, function (t)
	{
		var e = t.create("fitRows");
		return e.prototype._resetLayout = function ()
		{
			this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
		}, e.prototype._getItemLayoutPosition = function (t)
		{
			t.getSize();
			var e = t.size.outerWidth + this.gutter,
				i = this.isotope.size.innerWidth + this.gutter;
			0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
			var n = {
				x: this.x,
				y: this.y
			};
			return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
		}, e.prototype._getContainerSize = function ()
		{
			return {
				height: this.maxY
			}
		}, e
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
	}(window, function (t)
	{
		var e = t.create("vertical",
		{
			horizontalAlignment: 0
		});
		return e.prototype._resetLayout = function ()
		{
			this.y = 0
		}, e.prototype._getItemLayoutPosition = function (t)
		{
			t.getSize();
			var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
				i = this.y;
			return this.y += t.size.outerHeight,
			{
				x: e,
				y: i
			}
		}, e.prototype._getContainerSize = function ()
		{
			return {
				height: this.y
			}
		}, e
	}),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, o, s, r, a)
		{
			return e(t, i, n, o, s, r, a)
		}) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
	}(window, function (t, e, i, n, o, s, r)
	{
		var a = t.jQuery,
			l = String.prototype.trim ? function (t)
			{
				return t.trim()
			} : function (t)
			{
				return t.replace(/^\s+|\s+$/g, "")
			},
			u = document.documentElement.textContent ? function (t)
			{
				return t.textContent
			} : function (t)
			{
				return t.innerText
			},
			c = e.create("isotope",
			{
				layoutMode: "masonry",
				isJQueryFiltering: !0,
				sortAscending: !0
			});
		c.Item = s, c.LayoutMode = r, c.prototype._create = function ()
		{
			for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
		}, c.prototype.reloadItems = function ()
		{
			this.itemGUID = 0, e.prototype.reloadItems.call(this)
		}, c.prototype._itemize = function ()
		{
			for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++)
			{
				t[i].id = this.itemGUID++
			}
			return this._updateItemsSortData(t), t
		}, c.prototype._initLayoutMode = function (t)
		{
			var e = r.modes[t],
				i = this.options[t] ||
				{};
			this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
		}, c.prototype.layout = function ()
		{
			return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
		}, c.prototype._layout = function ()
		{
			var t = this._getIsInstant();
			this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
		}, c.prototype.arrange = function (t)
		{
			function e()
			{
				n.reveal(i.needReveal), n.hide(i.needHide)
			}
			this.option(t), this._getIsInstant();
			var i = this._filter(this.items);
			this.filteredItems = i.matches;
			var n = this;
			this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
		}, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function ()
		{
			var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			return this._isInstant = t, t
		}, c.prototype._bindArrangeComplete = function ()
		{
			function t()
			{
				e && i && n && o.emitEvent("arrangeComplete", [o.filteredItems])
			}
			var e, i, n, o = this;
			this.once("layoutComplete", function ()
			{
				e = !0, t()
			}), this.once("hideComplete", function ()
			{
				i = !0, t()
			}), this.once("revealComplete", function ()
			{
				n = !0, t()
			})
		}, c.prototype._filter = function (t)
		{
			var e = this.options.filter;
			e = e || "*";
			for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0, a = t.length; a > r; r++)
			{
				var l = t[r];
				if (!l.isIgnored)
				{
					var u = s(l);
					u && i.push(l), u && l.isHidden ? n.push(l) : u || l.isHidden || o.push(l)
				}
			}
			return {
				matches: i,
				needReveal: n,
				needHide: o
			}
		}, c.prototype._getFilterTest = function (t)
		{
			return a && this.options.isJQueryFiltering ? function (e)
			{
				return a(e.element).is(t)
			} : "function" == typeof t ? function (e)
			{
				return t(e.element)
			} : function (e)
			{
				return n(e.element, t)
			}
		}, c.prototype.updateSortData = function (t)
		{
			var e;
			t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
		}, c.prototype._getSorters = function ()
		{
			var t = this.options.getSortData;
			for (var e in t)
			{
				var i = t[e];
				this._sorters[e] = h(i)
			}
		}, c.prototype._updateItemsSortData = function (t)
		{
			for (var e = t && t.length, i = 0; e && e > i; i++)
			{
				t[i].updateSortData()
			}
		};
		var h = function ()
		{
			return function (t)
			{
				if ("string" != typeof t) return t;
				var e = l(t).split(" "),
					i = e[0],
					n = i.match(/^\[(.+)\]$/),
					o = function (t, e)
					{
						return t ? function (e)
						{
							return e.getAttribute(t)
						} : function (t)
						{
							var i = t.querySelector(e);
							return i && u(i)
						}
					}(n && n[1], i),
					s = c.sortDataParsers[e[1]];
				return s ? function (t)
				{
					return t && s(o(t))
				} : function (t)
				{
					return t && o(t)
				}
			}
		}();
		c.sortDataParsers = {
			parseInt: function (t)
			{
				return parseInt(t, 10)
			},
			parseFloat: function (t)
			{
				return parseFloat(t)
			}
		}, c.prototype._sort = function ()
		{
			var t = this.options.sortBy;
			if (t)
			{
				var e = function (t, e)
				{
					return function (i, n)
					{
						for (var o = 0, s = t.length; s > o; o++)
						{
							var r = t[o],
								a = i.sortData[r],
								l = n.sortData[r];
							if (a > l || l > a) return (a > l ? 1 : -1) * ((void 0 !== e[r] ? e[r] : e) ? 1 : -1)
						}
						return 0
					}
				}([].concat.apply(t, this.sortHistory), this.options.sortAscending);
				this.filteredItems.sort(e), t != this.sortHistory[0] && this.sortHistory.unshift(t)
			}
		}, c.prototype._mode = function ()
		{
			var t = this.options.layoutMode,
				e = this.modes[t];
			if (!e) throw Error("No layout mode: " + t);
			return e.options = this.options[t], e
		}, c.prototype._resetLayout = function ()
		{
			e.prototype._resetLayout.call(this), this._mode()._resetLayout()
		}, c.prototype._getItemLayoutPosition = function (t)
		{
			return this._mode()._getItemLayoutPosition(t)
		}, c.prototype._manageStamp = function (t)
		{
			this._mode()._manageStamp(t)
		}, c.prototype._getContainerSize = function ()
		{
			return this._mode()._getContainerSize()
		}, c.prototype.needsResizeLayout = function ()
		{
			return this._mode().needsResizeLayout()
		}, c.prototype.appended = function (t)
		{
			var e = this.addItems(t);
			if (e.length)
			{
				var i = this._filterRevealAdded(e);
				this.filteredItems = this.filteredItems.concat(i)
			}
		}, c.prototype.prepended = function (t)
		{
			var e = this._itemize(t);
			if (e.length)
			{
				this._resetLayout(), this._manageStamps();
				var i = this._filterRevealAdded(e);
				this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
			}
		}, c.prototype._filterRevealAdded = function (t)
		{
			var e = this._filter(t);
			return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
		}, c.prototype.insert = function (t)
		{
			var e = this.addItems(t);
			if (e.length)
			{
				var i, n, o = e.length;
				for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
				var s = this._filter(e).matches;
				for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
				for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
				this.reveal(s)
			}
		};
		var d = c.prototype.remove;
		return c.prototype.remove = function (t)
		{
			t = o.makeArray(t);
			var e = this.getItems(t);
			d.call(this, t);
			var i = e && e.length;
			if (i)
				for (var n = 0; i > n; n++)
				{
					var s = e[n];
					o.removeFrom(this.filteredItems, s)
				}
		}, c.prototype.shuffle = function ()
		{
			for (var t = 0, e = this.items.length; e > t; t++)
			{
				this.items[t].sortData.random = Math.random()
			}
			this.options.sortBy = "random", this._sort(), this._layout()
		}, c.prototype._noTransition = function (t)
		{
			var e = this.options.transitionDuration;
			this.options.transitionDuration = 0;
			var i = t.call(this);
			return this.options.transitionDuration = e, i
		}, c.prototype.getFilteredItemElements = function ()
		{
			for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
			return t
		}, c
	}),
	function (t)
	{
		"use strict";
		t.fn.meanmenu = function (e)
		{
			var i = {
				meanMenuTarget: jQuery(this),
				meanMenuContainer: ".mobile-menu-area .container",
				meanMenuClose: "X",
				meanMenuCloseSize: "18px",
				meanMenuOpen: "<span /><span /><span />",
				meanRevealPosition: "right",
				meanRevealPositionDistance: "0",
				meanRevealColour: "",
				meanScreenWidth: "767",
				meanNavPush: "",
				meanShowChildren: !0,
				meanExpandableChildren: !0,
				meanExpand: "+",
				meanContract: "-",
				meanRemoveAttrs: !1,
				onePage: !1,
				meanDisplay: "block",
				removeElements: ""
			};
			e = t.extend(i, e);
			var n = window.innerWidth || document.documentElement.clientWidth;
			return this.each(function ()
			{
				var t = e.meanMenuTarget,
					i = e.meanMenuContainer,
					o = e.meanMenuClose,
					s = e.meanMenuCloseSize,
					r = e.meanMenuOpen,
					a = e.meanRevealPosition,
					l = e.meanRevealPositionDistance,
					u = e.meanRevealColour,
					c = e.meanScreenWidth,
					h = e.meanNavPush,
					d = e.meanShowChildren,
					p = e.meanExpandableChildren,
					f = e.meanExpand,
					m = e.meanContract,
					g = e.meanRemoveAttrs,
					v = e.onePage,
					y = e.meanDisplay,
					_ = e.removeElements,
					b = !1;
				(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (b = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
				var w = "",
					x = function ()
					{
						if ("center" === a)
						{
							var t = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
							w = "left:" + t + ";right:auto;", b ? jQuery(".meanmenu-reveal").animate(
							{
								left: t
							}) : jQuery(".meanmenu-reveal").css("left", t)
						}
					},
					C = !1,
					E = !1;
				"right" === a && (w = "right:" + l + ";left:auto;"), "left" === a && (w = "left:" + l + ";right:auto;"), x();
				var I = "",
					S = function ()
					{
						jQuery(".mean-bar,.mean-push").remove(), jQuery(i).removeClass("mean-container"), jQuery(t).css("display", y), C = !1, E = !1, jQuery(_).removeClass("mean-remove")
					},
					T = function ()
					{
						var e = "background:" + u + ";color:" + u + ";" + w;
						if (n <= c)
						{
							jQuery(_).addClass("mean-remove"), E = !0, jQuery(i).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
							var a = jQuery(t).html();
							jQuery(".mean-nav").html(a), g && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function ()
							{
								jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
							}), jQuery(t).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", h), jQuery(t).hide(), jQuery(".meanmenu-reveal").show(), jQuery(".meanmenu-reveal").html(r), I = jQuery(".meanmenu-reveal"), jQuery(".mean-nav ul").hide(), d ? p ? (jQuery(".mean-nav ul ul").each(function ()
							{
								jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + s + '">' + f + "</a>")
							}), jQuery(".mean-expand").on("click", function (t)
							{
								t.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(f), jQuery(this).prev("ul").slideUp(300, function () {})) : (jQuery(this).text(m), jQuery(this).prev("ul").slideDown(300, function () {})), jQuery(this).toggleClass("mean-clicked")
							})) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), I.removeClass("meanclose"), jQuery(I).click(function (t)
							{
								t.preventDefault(), !1 === C ? (I.css("text-align", "center"), I.css("text-indent", "0"), I.css("font-size", s), jQuery(".mean-nav ul:first").slideDown(), C = !0) : (jQuery(".mean-nav ul:first").slideUp(), C = !1), I.toggleClass("meanclose"), jQuery(I).is(".meanmenu-reveal.meanclose") ? I.html(o) : I.html(r), jQuery(_).addClass("mean-remove")
							}), v && jQuery(".mean-nav ul > li > a:first-child").on("click", function ()
							{
								jQuery(".mean-nav ul:first").slideUp(), C = !1, jQuery(I).toggleClass("meanclose").html(r)
							})
						}
						else S()
					};
				b || jQuery(window).resize(function ()
				{
					n = window.innerWidth || document.documentElement.clientWidth, S(), n <= c ? (T(), x()) : S()
				}), jQuery(window).resize(function ()
				{
					n = window.innerWidth || document.documentElement.clientWidth, b ? (x(), n <= c ? !1 === E && T() : S()) : (S(), n <= c && (T(), x()))
				}), T()
			})
		}
	}(jQuery),
	function (t)
	{
		"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
	}(function (t)
	{
		t.ui = t.ui ||
		{}, t.ui.version = "1.12.1";
		var e = 0,
			i = Array.prototype.slice;
		t.cleanData = function (e)
		{
			return function (i)
			{
				var n, o, s;
				for (s = 0; null != (o = i[s]); s++) try
				{
					(n = t._data(o, "events")) && n.remove && t(o).triggerHandler("remove")
				}
				catch (t)
				{}
				e(i)
			}
		}(t.cleanData), t.widget = function (e, i, n)
		{
			var o, s, r, a = {},
				l = e.split(".")[0],
				u = l + "-" + (e = e.split(".")[1]);
			return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [
			{}].concat(n))), t.expr[":"][u.toLowerCase()] = function (e)
			{
				return !!t.data(e, u)
			}, t[l] = t[l] ||
			{}, o = t[l][e], s = t[l][e] = function (t, e)
			{
				return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new s(t, e)
			}, t.extend(s, o,
			{
				version: n.version,
				_proto: t.extend(
				{}, n),
				_childConstructors: []
			}), (r = new i).options = t.widget.extend(
			{}, r.options), t.each(n, function (e, n)
			{
				return t.isFunction(n) ? void(a[e] = function ()
				{
					function t()
					{
						return i.prototype[e].apply(this, arguments)
					}

					function o(t)
					{
						return i.prototype[e].apply(this, t)
					}
					return function ()
					{
						var e, i = this._super,
							s = this._superApply;
						return this._super = t, this._superApply = o, e = n.apply(this, arguments), this._super = i, this._superApply = s, e
					}
				}()) : void(a[e] = n)
			}), s.prototype = t.widget.extend(r,
			{
				widgetEventPrefix: o && r.widgetEventPrefix || e
			}, a,
			{
				constructor: s,
				namespace: l,
				widgetName: e,
				widgetFullName: u
			}), o ? (t.each(o._childConstructors, function (e, i)
			{
				var n = i.prototype;
				t.widget(n.namespace + "." + n.widgetName, s, i._proto)
			}), delete o._childConstructors) : i._childConstructors.push(s), t.widget.bridge(e, s), s
		}, t.widget.extend = function (e)
		{
			for (var n, o, s = i.call(arguments, 1), r = 0, a = s.length; a > r; r++)
				for (n in s[r]) o = s[r][n], s[r].hasOwnProperty(n) && void 0 !== o && (e[n] = t.isPlainObject(o) ? t.isPlainObject(e[n]) ? t.widget.extend(
				{}, e[n], o) : t.widget.extend(
				{}, o) : o);
			return e
		}, t.widget.bridge = function (e, n)
		{
			var o = n.prototype.widgetFullName || e;
			t.fn[e] = function (s)
			{
				var r = "string" == typeof s,
					a = i.call(arguments, 1),
					l = this;
				return r ? this.length || "instance" !== s ? this.each(function ()
				{
					var i, n = t.data(this, o);
					return "instance" === s ? (l = n, !1) : n ? t.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
				}) : l = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function ()
				{
					var e = t.data(this, o);
					e ? (e.option(s ||
					{}), e._init && e._init()) : t.data(this, o, new n(s, this))
				})), l
			}
		}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options:
			{
				classes:
				{},
				disabled: !1,
				create: null
			},
			_createWidget: function (i, n)
			{
				n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element,
				{
					remove: function (t)
					{
						t.target === n && this.destroy()
					}
				}), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend(
				{}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: function ()
			{
				return {}
			},
			_getCreateEventData: t.noop,
			_create: t.noop,
			_init: t.noop,
			destroy: function ()
			{
				var e = this;
				this._destroy(), t.each(this.classesElementLookup, function (t, i)
				{
					e._removeClass(i, t)
				}), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
			},
			_destroy: t.noop,
			widget: function ()
			{
				return this.element
			},
			option: function (e, i)
			{
				var n, o, s, r = e;
				if (0 === arguments.length) return t.widget.extend(
				{}, this.options);
				if ("string" == typeof e)
					if (r = {}, n = e.split("."), e = n.shift(), n.length)
					{
						for (o = r[e] = t.widget.extend(
							{}, this.options[e]), s = 0; n.length - 1 > s; s++) o[n[s]] = o[n[s]] ||
						{}, o = o[n[s]];
						if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
						o[e] = i
					}
				else
				{
					if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
					r[e] = i
				}
				return this._setOptions(r), this
			},
			_setOptions: function (t)
			{
				var e;
				for (e in t) this._setOption(e, t[e]);
				return this
			},
			_setOption: function (t, e)
			{
				return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
			},
			_setOptionClasses: function (e)
			{
				var i, n, o;
				for (i in e) o = this.classesElementLookup[i], e[i] !== this.options.classes[i] && o && o.length && (n = t(o.get()), this._removeClass(o, i), n.addClass(this._classes(
				{
					element: n,
					keys: i,
					classes: e,
					add: !0
				})))
			},
			_setOptionDisabled: function (t)
			{
				this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
			},
			enable: function ()
			{
				return this._setOptions(
				{
					disabled: !1
				})
			},
			disable: function ()
			{
				return this._setOptions(
				{
					disabled: !0
				})
			},
			_classes: function (e)
			{
				function i(i, s)
				{
					var r, a;
					for (a = 0; i.length > a; a++) r = o.classesElementLookup[i[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), o.classesElementLookup[i[a]] = r, n.push(i[a]), s && e.classes[i[a]] && n.push(e.classes[i[a]])
				}
				var n = [],
					o = this;
				return e = t.extend(
				{
					element: this.element,
					classes: this.options.classes ||
					{}
				}, e), this._on(e.element,
				{
					remove: "_untrackClassesElement"
				}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
			},
			_untrackClassesElement: function (e)
			{
				var i = this;
				t.each(i.classesElementLookup, function (n, o)
				{
					-1 !== t.inArray(e.target, o) && (i.classesElementLookup[n] = t(o.not(e.target).get()))
				})
			},
			_removeClass: function (t, e, i)
			{
				return this._toggleClass(t, e, i, !1)
			},
			_addClass: function (t, e, i)
			{
				return this._toggleClass(t, e, i, !0)
			},
			_toggleClass: function (t, e, i, n)
			{
				n = "boolean" == typeof n ? n : i;
				var o = "string" == typeof t || null === t,
					s = {
						extra: o ? e : i,
						keys: o ? t : e,
						element: o ? this.element : t,
						add: n
					};
				return s.element.toggleClass(this._classes(s), n), this
			},
			_on: function (e, i, n)
			{
				var o, s = this;
				"boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, function (n, r)
				{
					function a()
					{
						return e || !0 !== s.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
					}
					"string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
					var l = n.match(/^([\w:-]*)\s*(.*)$/),
						u = l[1] + s.eventNamespace,
						c = l[2];
					c ? o.on(u, c, a) : i.on(u, a)
				})
			},
			_off: function (e, i)
			{
				i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
			},
			_delay: function (t, e)
			{
				var i = this;
				return setTimeout(function ()
				{
					return ("string" == typeof t ? i[t] : t).apply(i, arguments)
				}, e || 0)
			},
			_hoverable: function (e)
			{
				this.hoverable = this.hoverable.add(e), this._on(e,
				{
					mouseenter: function (e)
					{
						this._addClass(t(e.currentTarget), null, "ui-state-hover")
					},
					mouseleave: function (e)
					{
						this._removeClass(t(e.currentTarget), null, "ui-state-hover")
					}
				})
			},
			_focusable: function (e)
			{
				this.focusable = this.focusable.add(e), this._on(e,
				{
					focusin: function (e)
					{
						this._addClass(t(e.currentTarget), null, "ui-state-focus")
					},
					focusout: function (e)
					{
						this._removeClass(t(e.currentTarget), null, "ui-state-focus")
					}
				})
			},
			_trigger: function (e, i, n)
			{
				var o, s, r = this.options[e];
				if (n = n ||
					{}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
					for (o in s) o in i || (i[o] = s[o]);
				return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
			}
		}, t.each(
		{
			show: "fadeIn",
			hide: "fadeOut"
		}, function (e, i)
		{
			t.Widget.prototype["_" + e] = function (n, o, s)
			{
				"string" == typeof o && (o = {
					effect: o
				});
				var r, a = o ? !0 === o || "number" == typeof o ? i : o.effect || i : e;
				"number" == typeof (o = o ||
				{}) && (o = {
					duration: o
				}), r = !t.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), r && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, s) : n.queue(function (i)
				{
					t(this)[e](), s && s.call(n[0]), i()
				})
			}
		}), t.widget, t.ui.keyCode = {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}, t.fn.extend(
		{
			uniqueId: function ()
			{
				var t = 0;
				return function ()
				{
					return this.each(function ()
					{
						this.id || (this.id = "ui-id-" + ++t)
					})
				}
			}(),
			removeUniqueId: function ()
			{
				return this.each(function ()
				{
					/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
				})
			}
		}), t.widget("ui.accordion",
		{
			version: "1.12.1",
			options:
			{
				active: 0,
				animate:
				{},
				classes:
				{
					"ui-accordion-header": "ui-corner-top",
					"ui-accordion-header-collapsed": "ui-corner-all",
					"ui-accordion-content": "ui-corner-bottom"
				},
				collapsible: !1,
				event: "click",
				header: "> li > :first-child, > :not(li):even",
				heightStyle: "auto",
				icons:
				{
					activeHeader: "ui-icon-triangle-1-s",
					header: "ui-icon-triangle-1-e"
				},
				activate: null,
				beforeActivate: null
			},
			hideProps:
			{
				borderTopWidth: "hide",
				borderBottomWidth: "hide",
				paddingTop: "hide",
				paddingBottom: "hide",
				height: "hide"
			},
			showProps:
			{
				borderTopWidth: "show",
				borderBottomWidth: "show",
				paddingTop: "show",
				paddingBottom: "show",
				height: "show"
			},
			_create: function ()
			{
				var e = this.options;
				this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
			},
			_getCreateEventData: function ()
			{
				return {
					header: this.active,
					panel: this.active.length ? this.active.next() : t()
				}
			},
			_createIcons: function ()
			{
				var e, i, n = this.options.icons;
				n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
			},
			_destroyIcons: function ()
			{
				this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
			},
			_destroy: function ()
			{
				var t;
				this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
			},
			_setOption: function (t, e)
			{
				return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
			},
			_setOptionDisabled: function (t)
			{
				this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
			},
			_keydown: function (e)
			{
				if (!e.altKey && !e.ctrlKey)
				{
					var i = t.ui.keyCode,
						n = this.headers.length,
						o = this.headers.index(e.target),
						s = !1;
					switch (e.keyCode)
					{
					case i.RIGHT:
					case i.DOWN:
						s = this.headers[(o + 1) % n];
						break;
					case i.LEFT:
					case i.UP:
						s = this.headers[(o - 1 + n) % n];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(e);
						break;
					case i.HOME:
						s = this.headers[0];
						break;
					case i.END:
						s = this.headers[n - 1]
					}
					s && (t(e.target).attr("tabIndex", -1), t(s).attr("tabIndex", 0), t(s).trigger("focus"), e.preventDefault())
				}
			},
			_panelKeyDown: function (e)
			{
				e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
			},
			refresh: function ()
			{
				var e = this.options;
				this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
			},
			_processPanels: function ()
			{
				var t = this.headers,
					e = this.panels;
				this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
			},
			_refresh: function ()
			{
				var e, i = this.options,
					n = i.heightStyle,
					o = this.element.parent();
				this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function ()
				{
					var e = t(this),
						i = e.uniqueId().attr("id"),
						n = e.next(),
						o = n.uniqueId().attr("id");
					e.attr("aria-controls", o), n.attr("aria-labelledby", i)
				}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr(
				{
					"aria-selected": "false",
					"aria-expanded": "false",
					tabIndex: -1
				}).next().attr(
				{
					"aria-hidden": "true"
				}).hide(), this.active.length ? this.active.attr(
				{
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				}).next().attr(
				{
					"aria-hidden": "false"
				}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = o.height(), this.element.siblings(":visible").each(function ()
				{
					var i = t(this),
						n = i.css("position");
					"absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
				}), this.headers.each(function ()
				{
					e -= t(this).outerHeight(!0)
				}), this.headers.next().each(function ()
				{
					t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
				}).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function ()
				{
					var i = t(this).is(":visible");
					i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
				}).height(e))
			},
			_activate: function (e)
			{
				var i = this._findActive(e)[0];
				i !== this.active[0] && (i = i || this.active[0], this._eventHandler(
				{
					target: i,
					currentTarget: i,
					preventDefault: t.noop
				}))
			},
			_findActive: function (e)
			{
				return "number" == typeof e ? this.headers.eq(e) : t()
			},
			_setupEvents: function (e)
			{
				var i = {
					keydown: "_keydown"
				};
				e && t.each(e.split(" "), function (t, e)
				{
					i[e] = "_eventHandler"
				}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(),
				{
					keydown: "_panelKeyDown"
				}), this._hoverable(this.headers), this._focusable(this.headers)
			},
			_eventHandler: function (e)
			{
				var i, n, o = this.options,
					s = this.active,
					r = t(e.currentTarget),
					a = r[0] === s[0],
					l = a && o.collapsible,
					u = l ? t() : r.next(),
					c = s.next(),
					h = {
						oldHeader: s,
						oldPanel: c,
						newHeader: l ? t() : r,
						newPanel: u
					};
				e.preventDefault(), a && !o.collapsible || !1 === this._trigger("beforeActivate", e, h) || (o.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(h), this._removeClass(s, "ui-accordion-header-active", "ui-state-active"), o.icons && (i = s.children(".ui-accordion-header-icon"), this._removeClass(i, null, o.icons.activeHeader)._addClass(i, null, o.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), o.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, o.icons.header)._addClass(n, null, o.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
			},
			_toggle: function (e)
			{
				var i = e.newPanel,
					n = this.prevShow.length ? this.prevShow : e.oldPanel;
				this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr(
				{
					"aria-hidden": "true"
				}), n.prev().attr(
				{
					"aria-selected": "false",
					"aria-expanded": "false"
				}), i.length && n.length ? n.prev().attr(
				{
					tabIndex: -1,
					"aria-expanded": "false"
				}) : i.length && this.headers.filter(function ()
				{
					return 0 === parseInt(t(this).attr("tabIndex"), 10)
				}).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr(
				{
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				})
			},
			_animate: function (t, e, i)
			{
				var n, o, s, r = this,
					a = 0,
					l = t.css("box-sizing"),
					u = t.length && (!e.length || t.index() < e.index()),
					c = this.options.animate ||
					{},
					h = u && c.down || c,
					d = function ()
					{
						r._toggleComplete(i)
					};
				return "number" == typeof h && (s = h), "string" == typeof h && (o = h), o = o || h.easing || c.easing, s = s || h.duration || c.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps,
				{
					duration: s,
					easing: o,
					step: function (t, e)
					{
						e.now = Math.round(t)
					}
				}), void t.hide().animate(this.showProps,
				{
					duration: s,
					easing: o,
					complete: d,
					step: function (t, i)
					{
						i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0)
					}
				})) : e.animate(this.hideProps, s, o, d) : t.animate(this.showProps, s, o, d)
			},
			_toggleComplete: function (t)
			{
				var e = t.oldPanel,
					i = e.prev();
				this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
			}
		})
	}),
	function (t, e, i)
	{
		"use strict";
		t.fn.scrollUp = function (e)
		{
			t.data(i.body, "scrollUp") || (t.data(i.body, "scrollUp", !0), t.fn.scrollUp.init(e))
		}, t.fn.scrollUp.init = function (n)
		{
			var o, s, r, a, l, u, c = t.fn.scrollUp.settings = t.extend(
				{}, t.fn.scrollUp.defaults, n),
				h = !1;
			switch (u = c.scrollTrigger ? t(c.scrollTrigger) : t("<a/>",
			{
				id: c.scrollName,
				href: "#top"
			}), c.scrollTitle && u.attr("title", c.scrollTitle), u.appendTo("body"), c.scrollImg || c.scrollTrigger || u.html(c.scrollText), u.css(
			{
				display: "none",
				position: "fixed",
				zIndex: c.zIndex
			}), c.activeOverlay && t("<div/>",
			{
				id: c.scrollName + "-active"
			}).css(
			{
				position: "absolute",
				top: c.scrollDistance + "px",
				width: "100%",
				borderTop: "1px dotted" + c.activeOverlay,
				zIndex: c.zIndex
			}).appendTo("body"), c.animation)
			{
			case "fade":
				o = "fadeIn", s = "fadeOut", r = c.animationSpeed;
				break;
			case "slide":
				o = "slideDown", s = "slideUp", r = c.animationSpeed;
				break;
			default:
				o = "show", s = "hide", r = 0
			}
			a = "top" === c.scrollFrom ? c.scrollDistance : t(i).height() - t(e).height() - c.scrollDistance, t(e).scroll(function ()
			{
				t(e).scrollTop() > a ? h || (u[o](r), h = !0) : h && (u[s](r), h = !1)
			}), c.scrollTarget ? "number" == typeof c.scrollTarget ? l = c.scrollTarget : "string" == typeof c.scrollTarget && (l = Math.floor(t(c.scrollTarget).offset().top)) : l = 0, u.click(function (e)
			{
				e.preventDefault(), t("html, body").animate(
				{
					scrollTop: l
				}, c.scrollSpeed, c.easingType)
			})
		}, t.fn.scrollUp.defaults = {
			scrollName: "scrollUp",
			scrollDistance: 300,
			scrollFrom: "top",
			scrollSpeed: 300,
			easingType: "linear",
			animation: "fade",
			animationSpeed: 200,
			scrollTrigger: !1,
			scrollTarget: !1,
			scrollText: "Scroll to top",
			scrollTitle: !1,
			scrollImg: !1,
			activeOverlay: !1,
			zIndex: 2147483647
		}, t.fn.scrollUp.destroy = function (n)
		{
			t.removeData(i.body, "scrollUp"), t("#" + t.fn.scrollUp.settings.scrollName).remove(), t("#" + t.fn.scrollUp.settings.scrollName + "-active").remove(), t.fn.jquery.split(".")[1] >= 7 ? t(e).off("scroll", n) : t(e).unbind("scroll", n)
		}, t.scrollUp = t.fn.scrollUp
	}(jQuery, window, document),
	function ()
	{
		"use strict";

		function t(i)
		{
			return void 0 === this || Object.getPrototypeOf(this) !== t.prototype ? new t(i) : ((m = this).version = "3.3.2", m.tools = new f, m.isSupported() ? (m.tools.extend(m.defaults, i ||
			{}), m.defaults.container = e(m.defaults), m.store = {
				elements:
				{},
				containers: []
			}, m.sequences = {}, m.history = [], m.uid = 0, m.initialized = !1) : "undefined" != typeof console && console, m)
		}

		function e(t)
		{
			if (t && t.container)
			{
				if ("string" == typeof t.container) return window.document.documentElement.querySelector(t.container);
				if (m.tools.isNode(t.container)) return t.container
			}
			return m.defaults.container
		}

		function i()
		{
			return ++m.uid
		}

		function n(t, e, i)
		{
			e.container && (e.container = i), t.config ? t.config = m.tools.extendClone(t.config, e) : t.config = m.tools.extendClone(m.defaults, e), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X"
		}

		function o(t)
		{
			var e = window.getComputedStyle(t.domEl);
			t.styles || (t.styles = {
				transition:
				{},
				transform:
				{},
				computed:
				{}
			}, t.styles.inline = t.domEl.getAttribute("style") || "", t.styles.inline += "; visibility: visible; ", t.styles.computed.opacity = e.opacity, e.transition && "all 0s ease 0s" !== e.transition ? t.styles.computed.transition = e.transition + ", " : t.styles.computed.transition = ""), t.styles.transition.instant = s(t, 0), t.styles.transition.delayed = s(t, t.config.delay), t.styles.transform.initial = " -webkit-transform:", t.styles.transform.target = " -webkit-transform:", r(t), t.styles.transform.initial += "transform:", t.styles.transform.target += "transform:", r(t)
		}

		function s(t, e)
		{
			var i = t.config;
			return "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s; transition: " + t.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s; "
		}

		function r(t)
		{
			var e, i = t.config,
				n = t.styles.transform;
			e = "top" === i.origin || "left" === i.origin ? /^-/.test(i.distance) ? i.distance.substr(1) : "-" + i.distance : i.distance, parseInt(i.distance) && (n.initial += " translate" + i.axis + "(" + e + ")", n.target += " translate" + i.axis + "(0)"), i.scale && (n.initial += " scale(" + i.scale + ")", n.target += " scale(1)"), i.rotate.x && (n.initial += " rotateX(" + i.rotate.x + "deg)", n.target += " rotateX(0)"), i.rotate.y && (n.initial += " rotateY(" + i.rotate.y + "deg)", n.target += " rotateY(0)"), i.rotate.z && (n.initial += " rotateZ(" + i.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + i.opacity + ";", n.target += "; opacity: " + t.styles.computed.opacity + ";"
		}

		function a(t)
		{
			var e = t.config.container;
			e && -1 === m.store.containers.indexOf(e) && m.store.containers.push(t.config.container), m.store.elements[t.id] = t
		}

		function l()
		{
			if (m.isSupported())
			{
				c();
				for (var t = 0; t < m.store.containers.length; t++) m.store.containers[t].addEventListener("scroll", u), m.store.containers[t].addEventListener("resize", u);
				m.initialized || (window.addEventListener("scroll", u), window.addEventListener("resize", u), m.initialized = !0)
			}
			return m
		}

		function u()
		{
			g(c)
		}

		function c()
		{
			var t, e;
			(function ()
			{
				var t, e, i;
				m.tools.forOwn(m.sequences, function (n)
				{
					i = m.sequences[n], t = !1;
					for (var o = 0; o < i.elemIds.length; o++) e = i.elemIds[o], p(m.store.elements[e]) && !t && (t = !0);
					i.active = t
				})
			})(), m.tools.forOwn(m.store.elements, function (i)
			{
				e = m.store.elements[i], t = function (t)
					{
						var e = t.config.useDelay;
						return "always" === e || "onload" === e && !m.initialized || "once" === e && !t.seen
					}(e),
					function (t)
					{
						if (t.sequence)
						{
							var e = m.sequences[t.sequence.id];
							return e.active && !e.blocked && !t.revealing && !t.disabled
						}
						return p(t) && !t.revealing && !t.disabled
					}(e) ? (e.config.beforeReveal(e.domEl), t ? e.domEl.setAttribute("style", e.styles.inline + e.styles.transform.target + e.styles.transition.delayed) : e.domEl.setAttribute("style", e.styles.inline + e.styles.transform.target + e.styles.transition.instant), h("reveal", e, t), e.revealing = !0, e.seen = !0, e.sequence && function (t, e)
					{
						var i = 0,
							n = 0,
							o = m.sequences[t.sequence.id];
						o.blocked = !0, e && "onload" === t.config.useDelay && (n = t.config.delay), t.sequence.timer && (i = Math.abs(t.sequence.timer.started - new Date), window.clearTimeout(t.sequence.timer)), t.sequence.timer = {
							started: new Date
						}, t.sequence.timer.clock = window.setTimeout(function ()
						{
							o.blocked = !1, t.sequence.timer = null, u()
						}, Math.abs(o.interval) + n - i)
					}(e, t)) : function (t)
					{
						if (t.sequence)
						{
							var e = m.sequences[t.sequence.id];
							return !e.active && t.config.reset && t.revealing && !t.disabled
						}
						return !p(t) && t.config.reset && t.revealing && !t.disabled
					}(e) && (e.config.beforeReset(e.domEl), e.domEl.setAttribute("style", e.styles.inline + e.styles.transform.initial + e.styles.transition.instant), h("reset", e), e.revealing = !1)
			})
		}

		function h(t, e, i)
		{
			var n = 0,
				o = 0,
				s = "after";
			switch (t)
			{
			case "reveal":
				o = e.config.duration, i && (o += e.config.delay), s += "Reveal";
				break;
			case "reset":
				o = e.config.duration, s += "Reset"
			}
			e.timer && (n = Math.abs(e.timer.started - new Date), window.clearTimeout(e.timer.clock)), e.timer = {
				started: new Date
			}, e.timer.clock = window.setTimeout(function ()
			{
				e.config[s](e.domEl), e.timer = null
			}, o - n)
		}

		function d(t)
		{
			var e = 0,
				i = 0,
				n = t.offsetHeight,
				o = t.offsetWidth;
			do {
				isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft), t = t.offsetParent
			} while (t);
			return {
				top: e,
				left: i,
				height: n,
				width: o
			}
		}

		function p(t)
		{
			var e = d(t.domEl),
				i = function (t)
				{
					return {
						width: t.clientWidth,
						height: t.clientHeight
					}
				}(t.config.container),
				n = function (t)
				{
					if (t && t !== window.document.documentElement)
					{
						var e = d(t);
						return {
							x: t.scrollLeft + e.left,
							y: t.scrollTop + e.top
						}
					}
					return {
						x: window.pageXOffset,
						y: window.pageYOffset
					}
				}(t.config.container),
				o = t.config.viewFactor,
				s = e.height,
				r = e.width,
				a = e.top,
				l = e.left,
				u = a + s,
				c = l + r;
			return function ()
			{
				var e = a + s * o,
					h = l + r * o,
					d = u - s * o,
					p = c - r * o,
					f = n.y + t.config.viewOffset.top,
					m = n.x + t.config.viewOffset.left,
					g = n.y - t.config.viewOffset.bottom + i.height,
					v = n.x - t.config.viewOffset.right + i.width;
				return e < g && d > f && h > m && p < v
			}() || "fixed" === window.getComputedStyle(t.domEl).position
		}

		function f()
		{}
		var m, g;
		t.prototype.defaults = {
			origin: "bottom",
			distance: "20px",
			duration: 500,
			delay: 0,
			rotate:
			{
				x: 0,
				y: 0,
				z: 0
			},
			opacity: 0,
			scale: .9,
			easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
			container: window.document.documentElement,
			mobile: !0,
			reset: !1,
			useDelay: "always",
			viewFactor: .2,
			viewOffset:
			{
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			},
			beforeReveal: function (t) {},
			beforeReset: function (t) {},
			afterReveal: function (t) {},
			afterReset: function (t) {}
		}, t.prototype.isSupported = function ()
		{
			var t = document.documentElement.style;
			return "WebkitTransition" in t && "WebkitTransform" in t || "transition" in t && "transform" in t
		}, t.prototype.reveal = function (t, s, r, u)
		{
			var c, h, d, p, f, g;
			if (void 0 !== s && "number" == typeof s ? (r = s, s = {}) : null != s || (s = {}), !(h = function (t, e)
				{
					return "string" == typeof t ? Array.prototype.slice.call(e.querySelectorAll(t)) : m.tools.isNode(t) ? [t] : m.tools.isNodeList(t) ? Array.prototype.slice.call(t) : []
				}(t, c = e(s))).length) return m;
			r && "number" == typeof r && (g = i(), f = m.sequences[g] = {
				id: g,
				interval: r,
				elemIds: [],
				active: !1
			});
			for (var v = 0; v < h.length; v++)(p = h[v].getAttribute("data-sr-id")) ? d = m.store.elements[p] : (d = {
				id: i(),
				domEl: h[v],
				seen: !1,
				revealing: !1
			}).domEl.setAttribute("data-sr-id", d.id), f && (d.sequence = {
				id: f.id,
				index: f.elemIds.length
			}, f.elemIds.push(d.id)), n(d, s, c), o(d), a(d), m.tools.isMobile() && !d.config.mobile || !m.isSupported() ? (d.domEl.setAttribute("style", d.styles.inline), d.disabled = !0) : d.revealing || d.domEl.setAttribute("style", d.styles.inline + d.styles.transform.initial);
			return !u && m.isSupported() && (function (t, e, i)
			{
				var n = {
					target: t,
					config: e,
					interval: i
				};
				m.history.push(n)
			}(t, s, r), m.initTimeout && window.clearTimeout(m.initTimeout), m.initTimeout = window.setTimeout(l, 0)), m
		}, t.prototype.sync = function ()
		{
			if (m.history.length && m.isSupported())
			{
				for (var t = 0; t < m.history.length; t++)
				{
					var e = m.history[t];
					m.reveal(e.target, e.config, e.interval, !0)
				}
				l()
			}
			return m
		}, f.prototype.isObject = function (t)
		{
			return null !== t && "object" == typeof t && t.constructor === Object
		}, f.prototype.isNode = function (t)
		{
			return "object" == typeof window.Node ? t instanceof window.Node : t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
		}, f.prototype.isNodeList = function (t)
		{
			var e = Object.prototype.toString.call(t);
			return "object" == typeof window.NodeList ? t instanceof window.NodeList : t && "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(e) && "number" == typeof t.length && (0 === t.length || this.isNode(t[0]))
		}, f.prototype.forOwn = function (t, e)
		{
			if (!this.isObject(t)) throw new TypeError('Expected "object", but received "' + typeof t + '".');
			for (var i in t) t.hasOwnProperty(i) && e(i)
		}, f.prototype.extend = function (t, e)
		{
			return this.forOwn(e, function (i)
			{
				this.isObject(e[i]) ? (t[i] && this.isObject(t[i]) || (t[i] = {}), this.extend(t[i], e[i])) : t[i] = e[i]
			}.bind(this)), t
		}, f.prototype.extendClone = function (t, e)
		{
			return this.extend(this.extend(
			{}, t), e)
		}, f.prototype.isMobile = function ()
		{
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		}, g = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t)
		{
			window.setTimeout(t, 1e3 / 60)
		}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function ()
		{
			return t
		}) : "undefined" != typeof module && module.exports ? module.exports = t : window.ScrollReveal = t
	}(),
	function (t)
	{
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto)
	}(function (t)
	{
		var e, i, n, o, s, r, a = function () {},
			l = !!window.jQuery,
			u = t(window),
			c = function (t, i)
			{
				e.ev.on("mfp" + t + ".mfp", i)
			},
			h = function (e, i, n, o)
			{
				var s = document.createElement("div");
				return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
			},
			d = function (i, n)
			{
				e.ev.triggerHandler("mfp" + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
			},
			p = function (i)
			{
				return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
			},
			f = function ()
			{
				t.magnificPopup.instance || ((e = new a).init(), t.magnificPopup.instance = e)
			};
		a.prototype = {
			constructor: a,
			init: function ()
			{
				var i = navigator.appVersion;
				e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function ()
				{
					var t = document.createElement("p").style,
						e = ["ms", "O", "Moz", "Webkit"];
					if (void 0 !== t.transition) return !0;
					for (; e.length;)
						if (e.pop() + "Transition" in t) return !0;
					return !1
				}(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
			},
			open: function (i)
			{
				var o;
				if (!1 === i.isObj)
				{
					e.items = i.items.toArray(), e.index = 0;
					var r, a = i.items;
					for (o = 0; o < a.length; o++)
						if ((r = a[o]).parsed && (r = r.el[0]), r === i.el[0])
						{
							e.index = o;
							break
						}
				}
				else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
				if (!e.isOpen)
				{
					e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0,
					{}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = h("bg").on("click.mfp", function ()
					{
						e.close()
					}), e.wrap = h("wrap").attr("tabindex", -1).on("click.mfp", function (t)
					{
						e._checkIfClose(t.target) && e.close()
					}), e.container = h("container", e.wrap)), e.contentContainer = h("content"), e.st.preloader && (e.preloader = h("preloader", e.container, e.st.tLoading));
					var l = t.magnificPopup.modules;
					for (o = 0; o < l.length; o++)
					{
						var f = l[o];
						f = f.charAt(0).toUpperCase() + f.slice(1), e["init" + f].call(e)
					}
					d("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (c("MarkupParse", function (t, e, i, n)
					{
						i.close_replaceWith = p(n.type)
					}), s += " mfp-close-btn-in") : e.wrap.append(p())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css(
					{
						overflow: e.st.overflowY,
						overflowX: "hidden",
						overflowY: e.st.overflowY
					}) : e.wrap.css(
					{
						top: u.scrollTop(),
						position: "absolute"
					}), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css(
					{
						height: n.height(),
						position: "absolute"
					}), e.st.enableEscapeKey && n.on("keyup.mfp", function (t)
					{
						27 === t.keyCode && e.close()
					}), u.on("resize.mfp", function ()
					{
						e.updateSize()
					}), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
					var m = e.wH = u.height(),
						g = {};
					if (e.fixedContentPos && e._hasScrollBar(m))
					{
						var v = e._getScrollbarSize();
						v && (g.marginRight = v)
					}
					e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : g.overflow = "hidden");
					var y = e.st.mainClass;
					return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), d("BuildControls"), t("html").css(g), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function ()
					{
						e.content ? (e._addClassToMFP("mfp-ready"), e._setFocus()) : e.bgOverlay.addClass("mfp-ready"), n.on("focusin.mfp", e._onFocusIn)
					}, 16), e.isOpen = !0, e.updateSize(m), d("Open"), i
				}
				e.updateItemHTML()
			},
			close: function ()
			{
				e.isOpen && (d("BeforeClose"), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP("mfp-removing"), setTimeout(function ()
				{
					e._close()
				}, e.st.removalDelay)) : e._close())
			},
			_close: function ()
			{
				d("Close");
				var i = "mfp-removing mfp-ready ";
				if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos)
				{
					var o = {
						marginRight: ""
					};
					e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
				}
				n.off("keyup.mfp focusin.mfp"), e.ev.off(".mfp"), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, d("AfterClose")
			},
			updateSize: function (t)
			{
				if (e.isIOS)
				{
					var i = document.documentElement.clientWidth / window.innerWidth,
						n = window.innerHeight * i;
					e.wrap.css("height", n), e.wH = n
				}
				else e.wH = t || u.height();
				e.fixedContentPos || e.wrap.css("height", e.wH), d("Resize")
			},
			updateItemHTML: function ()
			{
				var i = e.items[e.index];
				e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
				var n = i.type;
				if (d("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n])
				{
					var s = !!e.st[n] && e.st[n].markup;
					d("FirstMarkupParse", s), e.currTemplate[n] = !s || t(s)
				}
				o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
				var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
				e.appendContent(r, n), i.preloaded = !0, d("Change", i), o = i.type, e.container.prepend(e.contentContainer), d("AfterChange")
			},
			appendContent: function (t, i)
			{
				e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(p()) : e.content = t : e.content = "", d("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
			},
			parseEl: function (i)
			{
				var n, o = e.items[i];
				if (o.tagName ? o = {
						el: t(o)
					} : (n = o.type, o = {
						data: o,
						src: o.src
					}), o.el)
				{
					for (var s = e.types, r = 0; r < s.length; r++)
						if (o.el.hasClass("mfp-" + s[r]))
						{
							n = s[r];
							break
						}
					o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
				}
				return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, d("ElementParse", o), e.items[i]
			},
			addGroup: function (t, i)
			{
				var n = function (n)
				{
					n.mfpEl = this, e._openClick(n, t, i)
				};
				i || (i = {});
				var o = "click.magnificPopup";
				i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
			},
			_openClick: function (i, n, o)
			{
				if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey))
				{
					var s = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
					if (s)
						if (t.isFunction(s))
						{
							if (!s.call(e)) return !0
						}
					else if (u.width() < s) return !0;
					i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
				}
			},
			updateStatus: function (t, n)
			{
				if (e.preloader)
				{
					i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
					var o = {
						status: t,
						text: n
					};
					d("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function (t)
					{
						t.stopImmediatePropagation()
					}), e.container.addClass("mfp-s-" + t), i = t
				}
			},
			_checkIfClose: function (i)
			{
				if (!t(i).hasClass("mfp-prevent-close"))
				{
					var n = e.st.closeOnContentClick,
						o = e.st.closeOnBgClick;
					if (n && o) return !0;
					if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
					if (i === e.content[0] || t.contains(e.content[0], i))
					{
						if (n) return !0
					}
					else if (o && t.contains(document, i)) return !0;
					return !1
				}
			},
			_addClassToMFP: function (t)
			{
				e.bgOverlay.addClass(t), e.wrap.addClass(t)
			},
			_removeClassFromMFP: function (t)
			{
				this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
			},
			_hasScrollBar: function (t)
			{
				return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || u.height())
			},
			_setFocus: function ()
			{
				(e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
			},
			_onFocusIn: function (i)
			{
				if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target)) return e._setFocus(), !1
			},
			_parseMarkup: function (e, i, n)
			{
				var o;
				n.data && (i = t.extend(n.data, i)), d("MarkupParse", [e, i, n]), t.each(i, function (i, n)
				{
					if (void 0 === n || !1 === n) return !0;
					if ((o = i.split("_")).length > 1)
					{
						var s = e.find(".mfp-" + o[0]);
						if (s.length > 0)
						{
							var r = o[1];
							"replaceWith" === r ? s[0] !== n[0] && s.replaceWith(n) : "img" === r ? s.is("img") ? s.attr("src", n) : s.replaceWith(t("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(o[1], n)
						}
					}
					else e.find(".mfp-" + i).html(n)
				})
			},
			_getScrollbarSize: function ()
			{
				if (void 0 === e.scrollbarSize)
				{
					var t = document.createElement("div");
					t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
				}
				return e.scrollbarSize
			}
		}, t.magnificPopup = {
			instance: null,
			proto: a.prototype,
			modules: [],
			open: function (e, i)
			{
				return f(), (e = e ? t.extend(!0,
				{}, e) :
				{}).isObj = !0, e.index = i || 0, this.instance.open(e)
			},
			close: function ()
			{
				return t.magnificPopup.instance && t.magnificPopup.instance.close()
			},
			registerModule: function (e, i)
			{
				i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
			},
			defaults:
			{
				disableOn: 0,
				key: null,
				midClick: !1,
				mainClass: "",
				preloader: !0,
				focus: "",
				closeOnContentClick: !1,
				closeOnBgClick: !0,
				closeBtnInside: !0,
				showCloseBtn: !0,
				enableEscapeKey: !0,
				modal: !1,
				alignTop: !1,
				removalDelay: 0,
				prependTo: null,
				fixedContentPos: "auto",
				fixedBgPos: "auto",
				overflowY: "auto",
				closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
				tClose: "Close (Esc)",
				tLoading: "Loading...",
				autoFocusLast: !0
			}
		}, t.fn.magnificPopup = function (i)
		{
			f();
			var n = t(this);
			if ("string" == typeof i)
				if ("open" === i)
				{
					var o, s = l ? n.data("magnificPopup") : n[0].magnificPopup,
						r = parseInt(arguments[1], 10) || 0;
					s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), e._openClick(
					{
						mfpEl: o
					}, n, s)
				}
			else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
			else i = t.extend(!0,
			{}, i), l ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
			return n
		};
		var m, g, v, y = function ()
		{
			v && (g.after(v.addClass(m)).detach(), v = null)
		};
		t.magnificPopup.registerModule("inline",
		{
			options:
			{
				hiddenClass: "hide",
				markup: "",
				tNotFound: "Content not found"
			},
			proto:
			{
				initInline: function ()
				{
					e.types.push("inline"), c("Close.inline", function ()
					{
						y()
					})
				},
				getInline: function (i, n)
				{
					if (y(), i.src)
					{
						var o = e.st.inline,
							s = t(i.src);
						if (s.length)
						{
							var r = s[0].parentNode;
							r && r.tagName && (g || (m = o.hiddenClass, g = h(m), m = "mfp-" + m), v = s.after(g).detach().removeClass(m)), e.updateStatus("ready")
						}
						else e.updateStatus("error", o.tNotFound), s = t("<div>");
						return i.inlineElement = s, s
					}
					return e.updateStatus("ready"), e._parseMarkup(n,
					{}, i), n
				}
			}
		});
		var _, b = function ()
			{
				_ && t(document.body).removeClass(_)
			},
			w = function ()
			{
				b(), e.req && e.req.abort()
			};
		t.magnificPopup.registerModule("ajax",
		{
			options:
			{
				settings: null,
				cursor: "mfp-ajax-cur",
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			proto:
			{
				initAjax: function ()
				{
					e.types.push("ajax"), _ = e.st.ajax.cursor, c("Close.ajax", w), c("BeforeChange.ajax", w)
				},
				getAjax: function (i)
				{
					_ && t(document.body).addClass(_), e.updateStatus("loading");
					var n = t.extend(
					{
						url: i.src,
						success: function (n, o, s)
						{
							var r = {
								data: n,
								xhr: s
							};
							d("ParseAjax", r), e.appendContent(t(r.data), "ajax"), i.finished = !0, b(), e._setFocus(), setTimeout(function ()
							{
								e.wrap.addClass("mfp-ready")
							}, 16), e.updateStatus("ready"), d("AjaxContentAdded")
						},
						error: function ()
						{
							b(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
						}
					}, e.st.ajax.settings);
					return e.req = t.ajax(n), ""
				}
			}
		});
		var x, C = function (i)
		{
			if (i.data && void 0 !== i.data.title) return i.data.title;
			var n = e.st.image.titleSrc;
			if (n)
			{
				if (t.isFunction(n)) return n.call(e, i);
				if (i.el) return i.el.attr(n) || ""
			}
			return ""
		};
		t.magnificPopup.registerModule("image",
		{
			options:
			{
				markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
				cursor: "mfp-zoom-out-cur",
				titleSrc: "title",
				verticalFit: !0,
				tError: '<a href="%url%">The image</a> could not be loaded.'
			},
			proto:
			{
				initImage: function ()
				{
					var i = e.st.image,
						n = ".image";
					e.types.push("image"), c("Open" + n, function ()
					{
						"image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
					}), c("Close" + n, function ()
					{
						i.cursor && t(document.body).removeClass(i.cursor), u.off("resize.mfp")
					}), c("Resize" + n, e.resizeImage), e.isLowIE && c("AfterChange", e.resizeImage)
				},
				resizeImage: function ()
				{
					var t = e.currItem;
					if (t && t.img && e.st.image.verticalFit)
					{
						var i = 0;
						e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
					}
				},
				_onImageHasSize: function (t)
				{
					t.img && (t.hasSize = !0, x && clearInterval(x), t.isCheckingImgSize = !1, d("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
				},
				findImageSize: function (t)
				{
					var i = 0,
						n = t.img[0],
						o = function (s)
						{
							x && clearInterval(x), x = setInterval(function ()
							{
								n.naturalWidth > 0 ? e._onImageHasSize(t) : (i > 200 && clearInterval(x), 3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500))
							}, s)
						};
					o(1)
				},
				getImage: function (i, n)
				{
					var o = 0,
						s = function ()
						{
							i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, d("ImageLoadComplete")) : ++o < 200 ? setTimeout(s, 100) : r())
						},
						r = function ()
						{
							i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
						},
						a = e.st.image,
						l = n.find(".mfp-img");
					if (l.length)
					{
						var u = document.createElement("img");
						u.className = "mfp-img", i.el && i.el.find("img").length && (u.alt = i.el.find("img").attr("alt")), i.img = t(u).on("load.mfploader", s).on("error.mfploader", r), u.src = i.src, l.is("img") && (i.img = i.img.clone()), (u = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1)
					}
					return e._parseMarkup(n,
					{
						title: C(i),
						img_replaceWith: i.img
					}, i), e.resizeImage(), i.hasSize ? (x && clearInterval(x), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
				}
			}
		});
		var E;
		t.magnificPopup.registerModule("zoom",
		{
			options:
			{
				enabled: !1,
				easing: "ease-in-out",
				duration: 300,
				opener: function (t)
				{
					return t.is("img") ? t : t.find("img")
				}
			},
			proto:
			{
				initZoom: function ()
				{
					var t, i = e.st.zoom,
						n = ".zoom";
					if (i.enabled && e.supportsTransition)
					{
						var o, s, r = i.duration,
							a = function (t)
							{
								var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
									n = "all " + i.duration / 1e3 + "s " + i.easing,
									o = {
										position: "fixed",
										zIndex: 9999,
										left: 0,
										top: 0,
										"-webkit-backface-visibility": "hidden"
									},
									s = "transition";
								return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, e.css(o), e
							},
							l = function ()
							{
								e.content.css("visibility", "visible")
							};
						c("BuildControls" + n, function ()
						{
							if (e._allowZoom())
							{
								if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void l();
								(s = a(t)).css(e._getOffset()), e.wrap.append(s), o = setTimeout(function ()
								{
									s.css(e._getOffset(!0)), o = setTimeout(function ()
									{
										l(), setTimeout(function ()
										{
											s.remove(), t = s = null, d("ZoomAnimationEnded")
										}, 16)
									}, r)
								}, 16)
							}
						}), c("BeforeClose" + n, function ()
						{
							if (e._allowZoom())
							{
								if (clearTimeout(o), e.st.removalDelay = r, !t)
								{
									if (!(t = e._getItemToZoom())) return;
									s = a(t)
								}
								s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function ()
								{
									s.css(e._getOffset())
								}, 16)
							}
						}), c("Close" + n, function ()
						{
							e._allowZoom() && (l(), s && s.remove(), t = null)
						})
					}
				},
				_allowZoom: function ()
				{
					return "image" === e.currItem.type
				},
				_getItemToZoom: function ()
				{
					return !!e.currItem.hasSize && e.currItem.img
				},
				_getOffset: function (i)
				{
					var n, o = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
						s = parseInt(n.css("padding-top"), 10),
						r = parseInt(n.css("padding-bottom"), 10);
					o.top -= t(window).scrollTop() - s;
					var a = {
						width: n.width(),
						height: (l ? n.innerHeight() : n[0].offsetHeight) - r - s
					};
					return void 0 === E && (E = void 0 !== document.createElement("p").style.MozTransform), E ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
				}
			}
		});
		var I = function (t)
		{
			if (e.currTemplate.iframe)
			{
				var i = e.currTemplate.iframe.find("iframe");
				i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
			}
		};
		t.magnificPopup.registerModule("iframe",
		{
			options:
			{
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
				srcAction: "iframe_src",
				patterns:
				{
					youtube:
					{
						index: "youtube.com",
						id: "v=",
						src: "https://www.youtube.com/embed/%id%?autoplay=1"
					},
					vimeo:
					{
						index: "vimeo.com/",
						id: "/",
						src: "https://player.vimeo.com/video/%id%?autoplay=1"
					},
					gmaps:
					{
						index: "//maps.google.",
						src: "%id%&output=embed"
					}
				}
			},
			proto:
			{
				initIframe: function ()
				{
					e.types.push("iframe"), c("BeforeChange", function (t, e, i)
					{
						e !== i && ("iframe" === e ? I() : "iframe" === i && I(!0))
					}), c("Close.iframe", function ()
					{
						I()
					})
				},
				getIframe: function (i, n)
				{
					var o = i.src,
						s = e.st.iframe;
					t.each(s.patterns, function ()
					{
						if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
					});
					var r = {};
					return s.srcAction && (r[s.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
				}
			}
		});
		var S = function (t)
			{
				var i = e.items.length;
				return t > i - 1 ? t - i : t < 0 ? i + t : t
			},
			T = function (t, e, i)
			{
				return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
			};
		t.magnificPopup.registerModule("gallery",
		{
			options:
			{
				enabled: !1,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				preload: [0, 2],
				navigateByImgClick: !0,
				arrows: !0,
				tPrev: "Previous (Left arrow key)",
				tNext: "Next (Right arrow key)",
				tCounter: "%curr% of %total%"
			},
			proto:
			{
				initGallery: function ()
				{
					var i = e.st.gallery,
						o = ".mfp-gallery";
					if (e.direction = !0, !i || !i.enabled) return !1;
					s += " mfp-gallery", c("Open" + o, function ()
					{
						i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function ()
						{
							if (e.items.length > 1) return e.next(), !1
						}), n.on("keydown" + o, function (t)
						{
							37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
						})
					}), c("UpdateStatus" + o, function (t, i)
					{
						i.text && (i.text = T(i.text, e.currItem.index, e.items.length))
					}), c("MarkupParse" + o, function (t, n, o, s)
					{
						var r = e.items.length;
						o.counter = r > 1 ? T(i.tCounter, s.index, r) : ""
					}), c("BuildControls" + o, function ()
					{
						if (e.items.length > 1 && i.arrows && !e.arrowLeft)
						{
							var n = i.arrowMarkup,
								o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
								s = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
							o.click(function ()
							{
								e.prev()
							}), s.click(function ()
							{
								e.next()
							}), e.container.append(o.add(s))
						}
					}), c("Change" + o, function ()
					{
						e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function ()
						{
							e.preloadNearbyImages(), e._preloadTimeout = null
						}, 16)
					}), c("Close" + o, function ()
					{
						n.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
					})
				},
				next: function ()
				{
					e.direction = !0, e.index = S(e.index + 1), e.updateItemHTML()
				},
				prev: function ()
				{
					e.direction = !1, e.index = S(e.index - 1), e.updateItemHTML()
				},
				goTo: function (t)
				{
					e.direction = t >= e.index, e.index = t, e.updateItemHTML()
				},
				preloadNearbyImages: function ()
				{
					var t, i = e.st.gallery.preload,
						n = Math.min(i[0], e.items.length),
						o = Math.min(i[1], e.items.length);
					for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
					for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
				},
				_preloadItem: function (i)
				{
					if (i = S(i), !e.items[i].preloaded)
					{
						var n = e.items[i];
						n.parsed || (n = e.parseEl(i)), d("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function ()
						{
							n.hasSize = !0
						}).on("error.mfploader", function ()
						{
							n.hasSize = !0, n.loadError = !0, d("LazyLoadError", n)
						}).attr("src", n.src)), n.preloaded = !0
					}
				}
			}
		});
		t.magnificPopup.registerModule("retina",
		{
			options:
			{
				replaceSrc: function (t)
				{
					return t.src.replace(/\.\w+$/, function (t)
					{
						return "@2x" + t
					})
				},
				ratio: 1
			},
			proto:
			{
				initRetina: function ()
				{
					if (window.devicePixelRatio > 1)
					{
						var t = e.st.retina,
							i = t.ratio;
						(i = isNaN(i) ? i() : i) > 1 && (c("ImageHasSize.retina", function (t, e)
						{
							e.img.css(
							{
								"max-width": e.img[0].naturalWidth / i,
								width: "100%"
							})
						}), c("ElementParse.retina", function (e, n)
						{
							n.src = t.replaceSrc(n, i)
						}))
					}
				}
			}
		}), f()
	}),
	function (t)
	{
		"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
	}(function (t)
	{
		function e(e, n)
		{
			var o, s, r, a = e.nodeName.toLowerCase();
			return "area" === a ? (s = (o = e.parentNode).name, !(!e.href || !s || "map" !== o.nodeName.toLowerCase()) && (!!(r = t("img[usemap='#" + s + "']")[0]) && i(r))) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a && e.href || n) && i(e)
		}

		function i(e)
		{
			return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function ()
			{
				return "hidden" === t.css(this, "visibility")
			}).length
		}
		t.ui = t.ui ||
		{}, t.extend(t.ui,
		{
			version: "1.11.4",
			keyCode:
			{
				BACKSPACE: 8,
				COMMA: 188,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				LEFT: 37,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SPACE: 32,
				TAB: 9,
				UP: 38
			}
		}), t.fn.extend(
		{
			scrollParent: function (e)
			{
				var i = this.css("position"),
					n = "absolute" === i,
					o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
					s = this.parents().filter(function ()
					{
						var e = t(this);
						return (!n || "static" !== e.css("position")) && o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
					}).eq(0);
				return "fixed" !== i && s.length ? s : t(this[0].ownerDocument || document)
			},
			uniqueId: function ()
			{
				var t = 0;
				return function ()
				{
					return this.each(function ()
					{
						this.id || (this.id = "ui-id-" + ++t)
					})
				}
			}(),
			removeUniqueId: function ()
			{
				return this.each(function ()
				{
					/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
				})
			}
		}), t.extend(t.expr[":"],
		{
			data: t.expr.createPseudo ? t.expr.createPseudo(function (e)
			{
				return function (i)
				{
					return !!t.data(i, e)
				}
			}) : function (e, i, n)
			{
				return !!t.data(e, n[3])
			},
			focusable: function (i)
			{
				return e(i, !isNaN(t.attr(i, "tabindex")))
			},
			tabbable: function (i)
			{
				var n = t.attr(i, "tabindex"),
					o = isNaN(n);
				return (o || n >= 0) && e(i, !o)
			}
		}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (e, i)
		{
			function n(e, i, n, s)
			{
				return t.each(o, function ()
				{
					i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
				}), i
			}
			var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
				s = i.toLowerCase(),
				r = {
					innerWidth: t.fn.innerWidth,
					innerHeight: t.fn.innerHeight,
					outerWidth: t.fn.outerWidth,
					outerHeight: t.fn.outerHeight
				};
			t.fn["inner" + i] = function (e)
			{
				return void 0 === e ? r["inner" + i].call(this) : this.each(function ()
				{
					t(this).css(s, n(this, e) + "px")
				})
			}, t.fn["outer" + i] = function (e, o)
			{
				return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function ()
				{
					t(this).css(s, n(this, e, !0, o) + "px")
				})
			}
		}), t.fn.addBack || (t.fn.addBack = function (t)
		{
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e)
		{
			return function (i)
			{
				return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
			}
		}(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend(
		{
			focus: function (e)
			{
				return function (i, n)
				{
					return "number" == typeof i ? this.each(function ()
					{
						var e = this;
						setTimeout(function ()
						{
							t(e).focus(), n && n.call(e)
						}, i)
					}) : e.apply(this, arguments)
				}
			}(t.fn.focus),
			disableSelection: function ()
			{
				var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
				return function ()
				{
					return this.bind(t + ".ui-disableSelection", function (t)
					{
						t.preventDefault()
					})
				}
			}(),
			enableSelection: function ()
			{
				return this.unbind(".ui-disableSelection")
			},
			zIndex: function (e)
			{
				if (void 0 !== e) return this.css("zIndex", e);
				if (this.length)
					for (var i, n, o = t(this[0]); o.length && o[0] !== document;)
					{
						if (("absolute" === (i = o.css("position")) || "relative" === i || "fixed" === i) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
						o = o.parent()
					}
				return 0
			}
		}), t.ui.plugin = {
			add: function (e, i, n)
			{
				var o, s = t.ui[e].prototype;
				for (o in n) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([i, n[o]])
			},
			call: function (t, e, i, n)
			{
				var o, s = t.plugins[e];
				if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
					for (o = 0; s.length > o; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
			}
		};
		var n = 0,
			o = Array.prototype.slice;
		t.cleanData = function (e)
		{
			return function (i)
			{
				var n, o, s;
				for (s = 0; null != (o = i[s]); s++) try
				{
					(n = t._data(o, "events")) && n.remove && t(o).triggerHandler("remove")
				}
				catch (t)
				{}
				e(i)
			}
		}(t.cleanData), t.widget = function (e, i, n)
		{
			var o, s, r, a, l = {},
				u = e.split(".")[0];
			return e = e.split(".")[1], o = u + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function (e)
			{
				return !!t.data(e, o)
			}, t[u] = t[u] ||
			{}, s = t[u][e], r = t[u][e] = function (t, e)
			{
				return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
			}, t.extend(r, s,
			{
				version: n.version,
				_proto: t.extend(
				{}, n),
				_childConstructors: []
			}), (a = new i).options = t.widget.extend(
			{}, a.options), t.each(n, function (e, n)
			{
				return t.isFunction(n) ? void(l[e] = function ()
				{
					var t = function ()
						{
							return i.prototype[e].apply(this, arguments)
						},
						o = function (t)
						{
							return i.prototype[e].apply(this, t)
						};
					return function ()
					{
						var e, i = this._super,
							s = this._superApply;
						return this._super = t, this._superApply = o, e = n.apply(this, arguments), this._super = i, this._superApply = s, e
					}
				}()) : void(l[e] = n)
			}), r.prototype = t.widget.extend(a,
			{
				widgetEventPrefix: s && a.widgetEventPrefix || e
			}, l,
			{
				constructor: r,
				namespace: u,
				widgetName: e,
				widgetFullName: o
			}), s ? (t.each(s._childConstructors, function (e, i)
			{
				var n = i.prototype;
				t.widget(n.namespace + "." + n.widgetName, r, i._proto)
			}), delete s._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), r
		}, t.widget.extend = function (e)
		{
			for (var i, n, s = o.call(arguments, 1), r = 0, a = s.length; a > r; r++)
				for (i in s[r]) n = s[r][i], s[r].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend(
				{}, e[i], n) : t.widget.extend(
				{}, n) : n);
			return e
		}, t.widget.bridge = function (e, i)
		{
			var n = i.prototype.widgetFullName || e;
			t.fn[e] = function (s)
			{
				var r = "string" == typeof s,
					a = o.call(arguments, 1),
					l = this;
				return r ? this.each(function ()
				{
					var i, o = t.data(this, n);
					return "instance" === s ? (l = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a)) !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
				}) : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function ()
				{
					var e = t.data(this, n);
					e ? (e.option(s ||
					{}), e._init && e._init()) : t.data(this, n, new i(s, this))
				})), l
			}
		}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options:
			{
				disabled: !1,
				create: null
			},
			_createWidget: function (e, i)
			{
				i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element,
				{
					remove: function (t)
					{
						t.target === i && this.destroy()
					}
				}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend(
				{}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: t.noop,
			_getCreateEventData: t.noop,
			_create: t.noop,
			_init: t.noop,
			destroy: function ()
			{
				this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
			},
			_destroy: t.noop,
			widget: function ()
			{
				return this.element
			},
			option: function (e, i)
			{
				var n, o, s, r = e;
				if (0 === arguments.length) return t.widget.extend(
				{}, this.options);
				if ("string" == typeof e)
					if (r = {}, n = e.split("."), e = n.shift(), n.length)
					{
						for (o = r[e] = t.widget.extend(
							{}, this.options[e]), s = 0; n.length - 1 > s; s++) o[n[s]] = o[n[s]] ||
						{}, o = o[n[s]];
						if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
						o[e] = i
					}
				else
				{
					if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
					r[e] = i
				}
				return this._setOptions(r), this
			},
			_setOptions: function (t)
			{
				var e;
				for (e in t) this._setOption(e, t[e]);
				return this
			},
			_setOption: function (t, e)
			{
				return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
			},
			enable: function ()
			{
				return this._setOptions(
				{
					disabled: !1
				})
			},
			disable: function ()
			{
				return this._setOptions(
				{
					disabled: !0
				})
			},
			_on: function (e, i, n)
			{
				var o, s = this;
				"boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, function (n, r)
				{
					function a()
					{
						return e || !0 !== s.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
					}
					"string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
					var l = n.match(/^([\w:-]*)\s*(.*)$/),
						u = l[1] + s.eventNamespace,
						c = l[2];
					c ? o.delegate(c, u, a) : i.bind(u, a)
				})
			},
			_off: function (e, i)
			{
				i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
			},
			_delay: function (t, e)
			{
				var i = this;
				return setTimeout(function ()
				{
					return ("string" == typeof t ? i[t] : t).apply(i, arguments)
				}, e || 0)
			},
			_hoverable: function (e)
			{
				this.hoverable = this.hoverable.add(e), this._on(e,
				{
					mouseenter: function (e)
					{
						t(e.currentTarget).addClass("ui-state-hover")
					},
					mouseleave: function (e)
					{
						t(e.currentTarget).removeClass("ui-state-hover")
					}
				})
			},
			_focusable: function (e)
			{
				this.focusable = this.focusable.add(e), this._on(e,
				{
					focusin: function (e)
					{
						t(e.currentTarget).addClass("ui-state-focus")
					},
					focusout: function (e)
					{
						t(e.currentTarget).removeClass("ui-state-focus")
					}
				})
			},
			_trigger: function (e, i, n)
			{
				var o, s, r = this.options[e];
				if (n = n ||
					{}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
					for (o in s) o in i || (i[o] = s[o]);
				return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
			}
		}, t.each(
		{
			show: "fadeIn",
			hide: "fadeOut"
		}, function (e, i)
		{
			t.Widget.prototype["_" + e] = function (n, o, s)
			{
				"string" == typeof o && (o = {
					effect: o
				});
				var r, a = o ? !0 === o || "number" == typeof o ? i : o.effect || i : e;
				"number" == typeof (o = o ||
				{}) && (o = {
					duration: o
				}), r = !t.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), r && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, s) : n.queue(function (i)
				{
					t(this)[e](), s && s.call(n[0]), i()
				})
			}
		}), t.widget;
		var s = !1;
		t(document).mouseup(function ()
		{
			s = !1
		}), t.widget("ui.mouse",
		{
			version: "1.11.4",
			options:
			{
				cancel: "input,textarea,button,select,option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function ()
			{
				var e = this;
				this.element.bind("mousedown." + this.widgetName, function (t)
				{
					return e._mouseDown(t)
				}).bind("click." + this.widgetName, function (i)
				{
					return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
				}), this.started = !1
			},
			_mouseDestroy: function ()
			{
				this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
			},
			_mouseDown: function (e)
			{
				if (!s)
				{
					this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
					var i = this,
						n = 1 === e.which,
						o = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
					return !(n && !o && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function ()
					{
						i.mouseDelayMet = !0
					}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t)
					{
						return i._mouseMove(t)
					}, this._mouseUpDelegate = function (t)
					{
						return i._mouseUp(t)
					}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), s = !0, !0))
				}
			},
			_mouseMove: function (e)
			{
				if (this._mouseMoved)
				{
					if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
					if (!e.which) return this._mouseUp(e)
				}
				return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
			},
			_mouseUp: function (e)
			{
				return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), s = !1, !1
			},
			_mouseDistanceMet: function (t)
			{
				return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
			},
			_mouseDelayMet: function ()
			{
				return this.mouseDelayMet
			},
			_mouseStart: function () {},
			_mouseDrag: function () {},
			_mouseStop: function () {},
			_mouseCapture: function ()
			{
				return !0
			}
		}), t.widget("ui.slider", t.ui.mouse,
		{
			version: "1.11.4",
			widgetEventPrefix: "slide",
			options:
			{
				animate: !1,
				distance: 0,
				max: 100,
				min: 0,
				orientation: "horizontal",
				range: !1,
				step: 1,
				value: 0,
				values: null,
				change: null,
				slide: null,
				start: null,
				stop: null
			},
			numPages: 5,
			_create: function ()
			{
				this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
			},
			_refresh: function ()
			{
				this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
			},
			_createHandles: function ()
			{
				var e, i, n = this.options,
					o = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
					s = [];
				for (i = n.values && n.values.length || 1, o.length > i && (o.slice(i).remove(), o = o.slice(0, i)), e = o.length; i > e; e++) s.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
				this.handles = o.add(t(s.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e)
				{
					t(this).data("ui-slider-handle-index", e)
				})
			},
			_createRange: function ()
			{
				var e = this.options,
					i = "";
				e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css(
				{
					left: "",
					bottom: ""
				}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
			},
			_setupEvents: function ()
			{
				this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
			},
			_destroy: function ()
			{
				this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
			},
			_mouseCapture: function (e)
			{
				var i, n, o, s, r, a, l, u = this,
					c = this.options;
				return !c.disabled && (this.elementSize = {
					width: this.element.outerWidth(),
					height: this.element.outerHeight()
				}, this.elementOffset = this.element.offset(), i = {
					x: e.pageX,
					y: e.pageY
				}, n = this._normValueFromMouse(i), o = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e)
				{
					var i = Math.abs(n - u.values(e));
					(o > i || o === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (o = i, s = t(this), r = e)
				}), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, s.addClass("ui-state-active").focus(), a = s.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ?
				{
					left: 0,
					top: 0
				} :
				{
					left: e.pageX - a.left - s.width() / 2,
					top: e.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
				}, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
			},
			_mouseStart: function ()
			{
				return !0
			},
			_mouseDrag: function (t)
			{
				var e = {
						x: t.pageX,
						y: t.pageY
					},
					i = this._normValueFromMouse(e);
				return this._slide(t, this._handleIndex, i), !1
			},
			_mouseStop: function (t)
			{
				return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
			},
			_detectOrientation: function ()
			{
				this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
			},
			_normValueFromMouse: function (t)
			{
				var e, i, n, o, s;
				return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (n = i / e) > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), o = this._valueMax() - this._valueMin(), s = this._valueMin() + n * o, this._trimAlignValue(s)
			},
			_start: function (t, e)
			{
				var i = {
					handle: this.handles[e],
					value: this.value()
				};
				return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
			},
			_slide: function (t, e, i)
			{
				var n, o, s;
				this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && ((o = this.values())[e] = i, s = this._trigger("slide", t,
				{
					handle: this.handles[e],
					value: i,
					values: o
				}), n = this.values(e ? 0 : 1), !1 !== s && this.values(e, i))) : i !== this.value() && (!1 !== (s = this._trigger("slide", t,
				{
					handle: this.handles[e],
					value: i
				})) && this.value(i))
			},
			_stop: function (t, e)
			{
				var i = {
					handle: this.handles[e],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
			},
			_change: function (t, e)
			{
				if (!this._keySliding && !this._mouseSliding)
				{
					var i = {
						handle: this.handles[e],
						value: this.value()
					};
					this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
				}
			},
			value: function (t)
			{
				return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
			},
			values: function (e, i)
			{
				var n, o, s;
				if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
				if (!arguments.length) return this._values();
				if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
				for (n = this.options.values, o = arguments[0], s = 0; n.length > s; s += 1) n[s] = this._trimAlignValue(o[s]), this._change(null, s);
				this._refreshValue()
			},
			_setOption: function (e, i)
			{
				var n, o = 0;
				switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (o = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e)
				{
				case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), n = 0; o > n; n += 1) this._change(null, n);
					this._animateOff = !1;
					break;
				case "step":
				case "min":
				case "max":
					this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
				}
			},
			_value: function ()
			{
				var t = this.options.value;
				return this._trimAlignValue(t)
			},
			_values: function (t)
			{
				var e, i, n;
				if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
				if (this.options.values && this.options.values.length)
				{
					for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
					return i
				}
				return []
			},
			_trimAlignValue: function (t)
			{
				if (this._valueMin() >= t) return this._valueMin();
				if (t >= this._valueMax()) return this._valueMax();
				var e = this.options.step > 0 ? this.options.step : 1,
					i = (t - this._valueMin()) % e,
					n = t - i;
				return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
			},
			_calculateNewMax: function ()
			{
				var t = this.options.max,
					e = this._valueMin(),
					i = this.options.step;
				t = Math.floor(+(t - e).toFixed(this._precision()) / i) * i + e, this.max = parseFloat(t.toFixed(this._precision()))
			},
			_precision: function ()
			{
				var t = this._precisionOf(this.options.step);
				return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
			},
			_precisionOf: function (t)
			{
				var e = "" + t,
					i = e.indexOf(".");
				return -1 === i ? 0 : e.length - i - 1
			},
			_valueMin: function ()
			{
				return this.options.min
			},
			_valueMax: function ()
			{
				return this.max
			},
			_refreshValue: function ()
			{
				var e, i, n, o, s, r = this.options.range,
					a = this.options,
					l = this,
					u = !this._animateOff && a.animate,
					c = {};
				this.options.values && this.options.values.length ? this.handles.each(function (n)
				{
					i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"](
					{
						left: i + "%"
					}, a.animate), 1 === n && l.range[u ? "animate" : "css"](
					{
						width: i - e + "%"
					},
					{
						queue: !1,
						duration: a.animate
					})) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"](
					{
						bottom: i + "%"
					}, a.animate), 1 === n && l.range[u ? "animate" : "css"](
					{
						height: i - e + "%"
					},
					{
						queue: !1,
						duration: a.animate
					}))), e = i
				}) : (n = this.value(), o = this._valueMin(), s = this._valueMax(), i = s !== o ? (n - o) / (s - o) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"](
				{
					width: i + "%"
				}, a.animate), "max" === r && "horizontal" === this.orientation && this.range[u ? "animate" : "css"](
				{
					width: 100 - i + "%"
				},
				{
					queue: !1,
					duration: a.animate
				}), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"](
				{
					height: i + "%"
				}, a.animate), "max" === r && "vertical" === this.orientation && this.range[u ? "animate" : "css"](
				{
					height: 100 - i + "%"
				},
				{
					queue: !1,
					duration: a.animate
				}))
			},
			_handleEvents:
			{
				keydown: function (e)
				{
					var i, n, o, s = t(e.target).data("ui-slider-handle-index");
					switch (e.keyCode)
					{
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_UP:
					case t.ui.keyCode.PAGE_DOWN:
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), !1 === this._start(e, s))) return
					}
					switch (o = this.options.step, i = n = this.options.values && this.options.values.length ? this.values(s) : this.value(), e.keyCode)
					{
					case t.ui.keyCode.HOME:
						n = this._valueMin();
						break;
					case t.ui.keyCode.END:
						n = this._valueMax();
						break;
					case t.ui.keyCode.PAGE_UP:
						n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
						if (i === this._valueMax()) return;
						n = this._trimAlignValue(i + o);
						break;
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (i === this._valueMin()) return;
						n = this._trimAlignValue(i - o)
					}
					this._slide(e, s, n)
				},
				keyup: function (e)
				{
					var i = t(e.target).data("ui-slider-handle-index");
					this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
				}
			}
		})
	}),
	function (t, e, i, n)
	{
		var o = function (n, o)
		{
			this.elem = n, this.$elem = t(n), this.options = o, this.metadata = this.$elem.data("plugin-options"), this.$win = t(e), this.sections = {}, this.didScroll = !1, this.$doc = t(i), this.docHeight = this.$doc.height()
		};
		o.defaults = (o.prototype = {
			defaults:
			{
				navItems: "a",
				currentClass: "current",
				changeHash: !1,
				easing: "swing",
				filter: "",
				scrollSpeed: 750,
				scrollThreshold: .5,
				begin: !1,
				end: !1,
				scrollChange: !1
			},
			init: function ()
			{
				return this.config = t.extend(
				{}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)), this
			},
			adjustNav: function (t, e)
			{
				t.$elem.find("." + t.config.currentClass).removeClass(t.config.currentClass), e.addClass(t.config.currentClass)
			},
			bindInterval: function ()
			{
				var t, e = this;
				e.$win.on("scroll.onePageNav", function ()
				{
					e.didScroll = !0
				}), e.t = setInterval(function ()
				{
					t = e.$doc.height(), e.didScroll && (e.didScroll = !1, e.scrollChange()), t !== e.docHeight && (e.docHeight = t, e.getPositions())
				}, 250)
			},
			getHash: function (t)
			{
				return t.attr("href").split("#")[1]
			},
			getPositions: function ()
			{
				var e, i, n, o = this;
				o.$nav.each(function ()
				{
					e = o.getHash(t(this)), (n = t("#" + e)).length && (i = n.offset().top, o.sections[e] = Math.round(i))
				})
			},
			getSection: function (t)
			{
				var e = null,
					i = Math.round(this.$win.height() * this.config.scrollThreshold);
				for (var n in this.sections) this.sections[n] - i < t && (e = n);
				return e
			},
			handleClick: function (i)
			{
				var n = this,
					o = t(i.currentTarget),
					s = o.parent(),
					r = "#" + n.getHash(o);
				s.hasClass(n.config.currentClass) || (n.config.begin && n.config.begin(), n.adjustNav(n, s), n.unbindInterval(), n.scrollTo(r, function ()
				{
					n.config.changeHash && (e.location.hash = r), n.bindInterval(), n.config.end && n.config.end()
				})), i.preventDefault()
			},
			scrollChange: function ()
			{
				var t, e = this.$win.scrollTop(),
					i = this.getSection(e);
				null !== i && ((t = this.$elem.find('a[href$="#' + i + '"]').parent()).hasClass(this.config.currentClass) || (this.adjustNav(this, t), this.config.scrollChange && this.config.scrollChange(t)))
			},
			scrollTo: function (e, i)
			{
				var n = t(e).offset().top;
				t("html, body").animate(
				{
					scrollTop: n - this.config.scrollOffset
				}, this.config.scrollSpeed, this.config.easing, i)
			},
			unbindInterval: function ()
			{
				clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
			}
		}).defaults, t.fn.onePageNav = function (t)
		{
			return this.each(function ()
			{
				new o(this, t).init()
			})
		}
	}(jQuery, window, document),
	function (t, e)
	{
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery)
	}(this, function (t)
	{
		"use strict";
		var e = "scrolly",
			i = {
				bgParallax: !1
			};

		function n(n, o)
		{
			this.element = n, this.$element = t(this.element), this.options = t.extend(
			{}, i, o), this._defaults = i, this._name = e, this.init()
		}
		n.prototype.init = function ()
		{
			var e = this;
			this.startPosition = this.$element.position().top, this.offsetTop = this.$element.offset().top, this.height = this.$element.outerHeight(!0), this.velocity = this.$element.attr("data-velocity"), this.bgStart = parseInt(this.$element.attr("data-fit"), 10), t(document).scroll(function ()
			{
				e.didScroll = !0
			}), setInterval(function ()
			{
				e.didScroll && (e.didScroll = !1, e.scrolly())
			}, 10)
		}, n.prototype.scrolly = function ()
		{
			var e = t(window).scrollTop(),
				i = t(window).height(),
				n = this.startPosition;
			this.offsetTop >= e + i ? this.$element.addClass("scrolly-invisible") : n = this.$element.hasClass("scrolly-invisible") ? this.startPosition + (e + (i - this.offsetTop)) * this.velocity : this.startPosition + e * this.velocity, this.bgStart && (n += this.bgStart), !0 === this.options.bgParallax ? this.$element.css(
			{
				backgroundPosition: "50% " + n + "px"
			}) : this.$element.css(
			{
				top: n
			})
		}, t.fn[e] = function (i)
		{
			return this.each(function ()
			{
				t.data(this, "plugin_" + e) || t.data(this, "plugin_" + e, new n(this, i))
			})
		}
	}), $(function ()
	{
		var t = $("#contact-form"),
			e = $(".form-messege");
		$(t).submit(function (i)
		{
			i.preventDefault();
			var n = $(t).serialize();
			$.ajax(
			{
				type: "POST",
				url: $(t).attr("action"),
				data: n
			}).done(function (t)
			{
				$(e).removeClass("error"), $(e).addClass("success"), $(e).text(t), $("#contact-form input,#contact-form textarea").val("")
			}).fail(function (t)
			{
				$(e).removeClass("success"), $(e).addClass("error"), "" !== t.responseText ? $(e).text(t.responseText) : $(e).text("Oops! An error occured and your message could not be sent.")
			})
		})
	});

/* google */
AOS.init();
var OneSignal = window.OneSignal || [];
OneSignal.push(function ()
{
	OneSignal.init(
	{
		appId: "56959eb3-2a61-41f0-9219-bc7ef3cbe6fb"
	})
});
var uid = "252266",
	wid = "521007";

function gtag()
{
	dataLayer.push(arguments)
}
window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "UA-148031841-1"), (adsbygoogle = window.adsbygoogle || []).push(
{
	google_ad_client: "ca-pub-5731588986654370",
	enable_page_level_ads: !0
});
window.addEventListener("load", function ()
{
	window.wpcc.init(
	{
		"colors":
		{
			"popup":
			{
				"background": "#222222",
				"text": "#ffffff",
				"border": "#e6b3b3"
			},
			"button":
			{
				"background": "#e6b3b3",
				"text": "#000000"
			}
		},
		"corners": "large",
		"transparency": "20",
		"fontsize": "small",
		"content":
		{
			"href": "https://www.websitepolicies.com/policies/view/nrNTUgOr",
			"message": "This website utilizes cookies to ensure you get the best experience on our website"
		},
		"margin": "large"
	})
});

/* search */
function getInputValue()
{
	var e = "https://dve4ever.github.io/search?q=" + document.getElementById("myInput").value;
	window.open(e)
}
