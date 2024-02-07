(function (z, H) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = H())
    : typeof define == "function" && define.amd
    ? define(H)
    : ((z = typeof globalThis < "u" ? globalThis : z || self),
      (z.PublisherAnalyticsSDK = H()));
})(this, function () {
  "use strict";
  var sa = Object.defineProperty;
  var na = (z, H, ut) =>
    H in z
      ? sa(z, H, { enumerable: !0, configurable: !0, writable: !0, value: ut })
      : (z[H] = ut);
  var $ = (z, H, ut) => (na(z, typeof H != "symbol" ? H + "" : H, ut), ut);
  class z {
    constructor(e, i, s) {
      $(this, "variant");
      $(this, "articleElement");
      $(this, "observer");
      $(this, "pluginApi");
      (this.pluginApi = e),
        (this.variant = i),
        (this.articleElement = s),
        (this.observer = new IntersectionObserver(
          this.newImpression.bind(this),
          { threshold: 1 }
        ));
    }
    updateTexts() {
      this.replaceTitle(), this.replaceDescription(), this.replaceImage();
    }
    setupAnchors() {
      this.articleElement.anchorElements.forEach((e) => {
        e.addEventListener("click", () => {
          this.pluginApi.sendVariantAssociatedClick(this.variant.articleUrl);
        });
      });
    }
    setupImpressionObserver() {
      this.observer.observe(this.articleElement.mainElement);
    }
    replaceTitle() {
      const e = this.variant.title;
      let i = this.articleElement.titleElement;
      !e || !i || ((i = i.querySelector("a") || i), (i.textContent = e));
    }
    replaceDescription() {
      const e = this.variant.description;
      let i = this.articleElement.descriptionElement;
      !e || !i || ((i = i.querySelector("a") || i), (i.textContent = e));
    }
    replaceImage() {
      const e = this.variant.imageUrl,
        i = this.variant.imageAlt || "";
      let s = this.articleElement.imageElement;
      !e || !s || ((s.src = e), (s.alt = i), s.srcset && (s.srcset = e));
    }
    newImpression(e, i) {
      const s = [];
      e.forEach((n) => {
        n.isIntersecting && (i.unobserve(n.target), s.push(this.variant.id));
      }),
        s.length > 0 && this.pluginApi.sendImpressions(s);
    }
  }
  function H(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var pt = {
      name: "npawlib",
      type: "lib",
      tech: "js",
      author: "NicePeopleAtWork",
      version: "7.0.56",
      built: "2023-08-23",
      repo: "https://bitbucket.org/npaw/lib-npaw-js.git",
    }.version,
    Qi = function () {
      (Function.prototype.bind =
        Function.prototype.bind ||
        function (t) {
          var e = Array.prototype.slice,
            i = this,
            s = e.call(arguments, 1);
          function n() {
            var r = i.prototype && this instanceof i;
            return i.apply((!r && t) || this, s.concat(e.call(arguments)));
          }
          return (n.prototype = i.prototype), n;
        }),
        (Array.prototype.forEach =
          Array.prototype.forEach ||
          function (t, e) {
            if (typeof t != "function")
              throw new TypeError(t + " is not a function!");
            for (var i = this.length, s = 0; s < i; s++)
              t.call(e, this[s], s, this);
          }),
        (Math.trunc =
          Math.trunc ||
          function (t) {
            return isNaN(t) ? NaN : t > 0 ? Math.floor(t) : Math.ceil(t);
          });
    },
    Zi = Qi,
    ke = function (t) {
      if (t == null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var e = Object(t), i = 1; i < arguments.length; i++) {
        var s = arguments[i];
        if (s != null) for (var n in s) s.hasOwnProperty(n) && (e[n] = s[n]);
      }
      return e;
    },
    xe = function () {},
    Ki = function (t) {
      if (arguments.length > 1) throw Error("Second argument not supported");
      if (t === null) throw Error("Cannot set a null [[Prototype]]");
      if (typeof t != "object") throw TypeError("Argument must be an object");
      return (xe.prototype = t), new xe();
    },
    Ve = ke,
    ts = Ki,
    Vt = function () {};
  (Vt.prototype = { constructor: function () {} }),
    (Vt.extend = function (t, e) {
      var i = this,
        s;
      return (
        t && t.hasOwnProperty("constructor")
          ? (s = t.constructor)
          : (s = function () {
              return i.apply(this, arguments);
            }),
        Ve(s, i, e),
        (s.prototype = ts(i.prototype)),
        t && Ve(s.prototype, t),
        (s.prototype.constructor = s),
        (s.__super__ = i.prototype),
        s
      );
    });
  var k = Vt,
    Mt = function (t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    },
    es = k,
    Me = Mt,
    is = es.extend({
      on: function (t, e) {
        if (((this._listeners = this._listeners || {}), typeof e == "function"))
          return (
            (this._listeners[t] = this._listeners[t] || []),
            this._listeners[t].push(e),
            this
          );
      },
      off: function (t, e) {
        if (((this._listeners = this._listeners || {}), this._listeners[t])) {
          var i = this._listeners[t].indexOf(e);
          i !== -1 && this._listeners[t].splice(i, 1);
        }
        return this;
      },
      emit: function (t, e) {
        return (
          (this._listeners = this._listeners || {}),
          (e = e || {}),
          Me(this._listeners[t]) &&
            this._listeners[t].forEach(this._eachCallback.bind(this, t, e)),
          Me(this._listeners["*"]) &&
            this._listeners["*"].forEach(this._eachCallback.bind(this, t, e)),
          this
        );
      },
      _eachCallback: function (t, e, i) {
        if (typeof i == "function") {
          var s = { type: t, data: e, target: this };
          i(s);
        }
      },
    }),
    J = is,
    ss = k,
    ns = ss.extend(
      {
        setPlugin: function (t) {
          this.plugin = t;
        },
        init: function () {},
      },
      {}
    ),
    Fe = ns,
    rs = J,
    as = Mt,
    C = {
      _emitter: new rs(),
      on: function () {
        C._emitter.on.apply(C._emitter, arguments);
      },
      off: function () {
        C._emitter.off.apply(C._emitter, arguments);
      },
      emit: function () {
        C._emitter.emit.apply(C._emitter, arguments);
      },
      Level: {
        SILENT: 6,
        ERROR: 5,
        WARNING: 4,
        NOTICE: 3,
        DEBUG: 2,
        VERBOSE: 1,
      },
      Event: { LOG: "log" },
      logLevel: 5,
      plainLogs: !1,
      report: function (t, e, i) {
        if (typeof console < "u" && console.log && typeof document < "u") {
          (e = e || C.Level.NOTICE), (i = i || "darkcyan");
          var s = { 5: "e", 4: "w", 3: "n", 2: "d", 1: "v" },
            n = s[e],
            r = "[Npaw]" + C._getCurrentTime() + " " + n + ":";
          if (
            (this.emit("log", { level: e, msg: t, prefix: r }), C.logLevel <= e)
          )
            if (C.plainLogs || document.documentMode) C._plainReport(t, r);
            else {
              var o;
              e === C.Level.ERROR && console.error
                ? (o = console.error)
                : e === C.Level.WARNING && console.warn
                ? (o = console.warn)
                : e === C.Level.DEBUG && console.debug
                ? (o = console.debug)
                : (o = console.log),
                (r = "%c" + r),
                as(t)
                  ? (t.splice(0, 0, r, "color: " + i), o.apply(console, t))
                  : o.call(console, r, "color: " + i, t);
            }
        }
      },
      _getCurrentTime: function () {
        var t = new Date(),
          e = ("0" + t.getDate()).slice(-2),
          i = ("0" + t.getMinutes()).slice(-2),
          s = ("0" + t.getSeconds()).slice(-2),
          n = ("00" + t.getMilliseconds()).slice(-3);
        return "[" + e + ":" + i + ":" + s + "." + n + "]";
      },
      _plainReport: function (t, e) {
        if (t instanceof Array) for (var i in t) C._plainReport(t[i], e);
        else
          typeof t == "string"
            ? console.log(e + " " + t)
            : (console.log(e + " <next line>"), console.log(t));
      },
      error: function () {
        C.report([].slice.call(arguments), C.Level.ERROR, "darkred");
      },
      warn: function () {
        C.report([].slice.call(arguments), C.Level.WARNING, "darkorange");
      },
      notice: function () {
        C.report([].slice.call(arguments), C.Level.NOTICE, "darkgreen");
      },
      debug: function () {
        C.report([].slice.call(arguments), C.Level.DEBUG, "indigo");
      },
      verbose: function () {
        C.report([].slice.call(arguments), C.Level.VERBOSE, "navy");
      },
      loadLevelFromUrl: function () {
        typeof window < "u" &&
          window.location &&
          this._parseLevelFromUrl(window.location.search);
      },
      _parseLevelFromUrl: function (t) {
        if (t) {
          var e = /\?.*&*npaw-debug=(.+)/i.exec(t);
          e !== null && (C.logLevel = e[1]);
          var i = /\?.*&*npaw-debug=plain/i.exec(t);
          i !== null && (C.plainLogs = !0);
        }
      },
    },
    O = C,
    st = O,
    os = {
      stripProtocol: function (t) {
        var e = t;
        try {
          e = t.replace(/^(.*?:\/\/|\/\/)/i, "");
        } catch (i) {
          st.warn(i);
        }
        return e;
      },
      splitUrl: function (t) {
        var e = t.match(
          /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
        );
        return (
          e && {
            href: t,
            protocol: e[1],
            host: e[2],
            hostname: e[3],
            port: e[4],
            pathname: e[5],
            search: e[6],
            hash: e[7],
          }
        );
      },
      parseBoolean: function (t) {
        return typeof t == "string" || t instanceof String
          ? t.toLowerCase() === "true"
          : !!t;
      },
      elementIsInPage: function (t) {
        try {
          return t === document.body ? !1 : document.body.contains(t);
        } catch (e) {
          st.warn(e);
        }
        return !0;
      },
      addProtocol: function (t, e) {
        var i = "http://localhost/";
        try {
          (i = "http://" + t),
            e ||
            (typeof window < "u" &&
              window.location.protocol.indexOf("https") === 0)
              ? (i = "https://" + t)
              : typeof window < "u" &&
                window.location.protocol.indexOf("http") === 0 &&
                (i = "//" + t);
        } catch (s) {
          st.warn(s);
        }
        return i;
      },
      parseNumber: function (t, e) {
        return !isNaN(t) &&
          t >= 0 &&
          t !== 1 / 0 &&
          t !== -1 / 0 &&
          t !== null &&
          typeof t < "u"
          ? t
          : e;
      },
      logAllEvents: function (t, e, i) {
        try {
          if (st.logLevel <= st.Level.DEBUG) {
            i =
              i ||
              function (r) {
                st.debug("Event: " + r.type);
              };
            var s = [
              "canplay",
              "buffering",
              "waiting",
              "ended",
              "play",
              "playing",
              "pause",
              "resume",
              "error",
              "abort",
              "seek",
              "seeking",
              "seeked",
              "stalled",
              "dispose",
              "loadeddata",
              "loadstart",
            ];
            e && (e[0] === null ? (e.shift(), (s = e)) : (s = s.concat(e)));
            for (var n = 0; n < s.length; n++)
              typeof t == "function"
                ? t.call(window, s[n], i)
                : t.on
                ? t.on(s[n], i)
                : t.addEventListener && t.addEventListener(s[n], i);
          }
        } catch (r) {
          st.error(r);
        }
      },
      buildRenditionString: function (t, e, i) {
        arguments.length === 1 && ((i = t), (t = null), (e = null));
        var s = null;
        return (
          t && e && (s = t + "x" + e),
          typeof i == "number" &&
            !isNaN(i) &&
            i >= 1 &&
            (s ? (s += "@") : (s = ""),
            i < 1e3
              ? (s += Math.round(i) + "bps")
              : i < 1e6
              ? ((i = Math.round(i / 1e3)), (s += i + "Kbps"))
              : ((i = Math.round(i / 1e4) / 100), (s += i + "Mbps"))),
          s
        );
      },
      buildErrorParams: function (t, e, i) {
        var s = {};
        return (
          typeof t == "object" && t !== null
            ? (s = t)
            : ((s.errorCode = t || "FAILURE"),
              (s.msg = e || s.errorCode),
              (s.errorMetadata = i)),
          s
        );
      },
      buildSessionErrorParams: function (t, e, i, s, n) {
        var r = {};
        return (
          typeof t == "object" && t !== null
            ? (r = t)
            : ((r.errorCode = t || "FAILURE"),
              (r.msg = e || r.errorCode),
              i && (r.errorMetadata = i),
              s && (r.errorType = s),
              n && (r.errorCategory = n)),
          r
        );
      },
      calculateAdViewability: function (t, e) {
        var i = !0;
        if (
          typeof window < "u" &&
          t &&
          typeof t.getBoundingClientRect == "function"
        ) {
          var s = t.getBoundingClientRect();
          if (
            s.top >= window.innerHeight ||
            s.bottom <= 0 ||
            s.right <= 0 ||
            s.left >= window.innerWidth
          )
            i = !1;
          else {
            var n = Math.trunc(s.height * s.width),
              r = s.top > 0 ? s.top : 0,
              o = s.bottom > window.innerHeight ? window.innerHeight : s.bottom,
              a = s.left > 0 ? s.left : 0,
              l = s.right > window.innerWidth ? window.innerWidth : s.right,
              v = (l - a) * (o - r);
            i = v * 100 > n * (e || 50);
          }
        }
        return i;
      },
      getMetricsFrom: function (t, e) {
        var i = t || e;
        for (var s in i)
          if (typeof i[s] != "object" || !i[s].value) {
            var n = {};
            (n.value = i[s]), (i[s] = n);
          }
        return i;
      },
      assign: ke,
      isArray: Mt,
    },
    q = os,
    us = k,
    ls = us.extend({
      getCdnTraffic: function () {
        var t = null;
        if (typeof CdnBalancerStats < "u" && CdnBalancerStats.cdn)
          t = CdnBalancerStats.cdn.totalDownloadedBytes;
        else if (typeof Streamroot < "u")
          t =
            this._getStreamrootPeerObject("cdn", !1) ||
            this._getStreamrootInstanceObject("cdnDownload");
        else if (typeof peer5 < "u" && peer5.getStats)
          t = peer5.getStats().totalHttpDownloaded;
        else if (typeof teltoo < "u" && teltoo.getStats) {
          var e = teltoo.getStats();
          t = e.totalReceivedBytes - e.p2pReceivedBytes;
        }
        return t;
      },
      getMultiCdnInfo: function () {
        var t = null;
        if (
          typeof CdnBalancerStats < "u" &&
          CdnBalancerStats.cdn &&
          CdnBalancerStats.cdn.cdns
        ) {
          var e = CdnBalancerStats.p2p;
          (t = {
            P2P: {
              downloaded_bytes: e.downloadedBytes,
              uploaded_bytes: e.uploadedBytes,
              downloaded_chunks: e.downloadedSegments,
              uploaded_chunks: e.uploadedSegments,
              errors: e.failedRequests ? e.failedRequests.total : 0,
              missed_downloaded_chunks: e.failedRequests
                ? e.failedRequests.absent
                : 0,
              timeout_errors: e.failedRequests ? e.failedRequests.timeout : 0,
              other_errors: e.failedRequests ? e.failedRequests.error : 0,
              late_uploaded_chunks: e.discardedUploadedSegments,
              late_uploaded_bytes: e.discardedUploadedBytes,
              late_downloaded_bytes: e.discardedDownloadedBytes,
              time: e.downloadMillis,
              active_peers: e.activePeers,
              peers: e.totalPeers,
            },
          }),
            CdnBalancerStats.cdn.cdns.forEach(function (i) {
              t[i.name] = {
                downloaded_bytes: i.bytes,
                downloaded_chunks: i.chunks,
                errors: i.failures,
                time: i.downloadMillis,
              };
            });
        }
        return t;
      },
      getSegmentDuration: function () {
        var t = null;
        return typeof CdnBalancerStats < "u" && CdnBalancerStats.segmentDuration
          ? CdnBalancerStats.segmentDuration
          : t;
      },
      getBalancerResponseId: function () {
        var t = null;
        return typeof CdnBalancerStats < "u" && CdnBalancerStats.cdn
          ? CdnBalancerStats.cdn.responseUUID
          : t;
      },
      getP2PTraffic: function () {
        var t = null;
        return (
          typeof CdnBalancerStats < "u" && CdnBalancerStats.p2p
            ? (t = CdnBalancerStats.p2p.downloadedBytes)
            : typeof Streamroot < "u"
            ? (t =
                this._getStreamrootPeerObject("p2p", !0) ||
                this._getStreamrootInstanceObject("dnaDownload"))
            : typeof peer5 < "u" && peer5.getStats
            ? (t = peer5.getStats().totalP2PDownloaded)
            : typeof teltoo < "u" &&
              teltoo.getStats &&
              (t = teltoo.getStats().p2pReceivedBytes),
          t
        );
      },
      getUploadTraffic: function () {
        var t = null;
        return (
          typeof CdnBalancerStats < "u" && CdnBalancerStats.p2p
            ? (t = CdnBalancerStats.p2p.uploadedBytes)
            : typeof Streamroot < "u"
            ? (t =
                this._getStreamrootPeerObject("upload", !0) ||
                this._getStreamrootInstanceObject("dnaUpload"))
            : typeof peer5 < "u" &&
              peer5.getStats &&
              (t = peer5.getStats().totalP2PUploaded),
          t
        );
      },
      getIsP2PEnabled: function () {
        var t = !1;
        if (typeof CdnBalancerStats < "u" && CdnBalancerStats.p2p)
          t = CdnBalancerStats.p2p.downloadEnabled;
        else if (typeof Streamroot < "u")
          if (Streamroot.p2pAvailable && Streamroot.peerAgents)
            for (var e in Streamroot.peerAgents)
              t = t || Streamroot.peerAgents[e].isP2PEnabled;
          else
            Streamroot.instances &&
              Streamroot.instances.forEach(function (i) {
                t = t || i.dnaDownloadEnabled || i.dnaUploadEnabled;
              });
        else
          typeof peer5 < "u" && peer5.isEnabled
            ? (t = peer5.isEnabled())
            : typeof teltoo < "u" && (t = !0);
        return t;
      },
      _getStreamrootPeerObject: function (t, e) {
        var i = null;
        if (Streamroot.p2pAvailable && Streamroot.peerAgents)
          for (var s in Streamroot.peerAgents) {
            var n = Streamroot.peerAgents[s];
            n.stats && (!e || n.isP2PEnabled) && (i += n.stats[t]);
          }
        return i;
      },
      _getStreamrootInstanceObject: function (t) {
        var e = null;
        return (
          Streamroot.instances &&
            Streamroot.instances.forEach(function (i) {
              i.stats &&
                i.stats.currentContent &&
                (e += i.stats.currentContent[t]);
            }),
          e
        );
      },
    }),
    Ue = ls,
    ds = k,
    qe = ds.extend({
      constructor: function () {
        this.reset();
      },
      reset: function () {
        (this.startTime = 0),
          (this.stopTime = 0),
          (this.pauseTime = 0),
          (this.offset = 0);
      },
      getDeltaTime: function (t) {
        var e = -1,
          i = new Date().getTime();
        if (this.startTime) {
          t && !this.stopTime && (this.stopTime = i);
          var s = this.pauseTime ? i - this.pauseTime : 0,
            n = this.stopTime ? this.stopTime : i;
          e = this.offset - s + (n - this.startTime);
        }
        return e;
      },
      start: function () {
        (this.startTime = new Date().getTime()),
          (this.stopTime = 0),
          (this.offset = 0);
      },
      stop: function () {
        return (
          this.pauseTime && this.resume(),
          (this.stopTime = new Date().getTime()),
          this.startTime ? this.offset + (this.stopTime - this.startTime) : -1
        );
      },
      pause: function () {
        this.pauseTime = new Date().getTime();
      },
      resume: function () {
        (this.offset -= new Date().getTime() - this.pauseTime),
          (this.pauseTime = 0);
      },
      clone: function () {
        var t = new qe();
        return (
          (t.startTime = this.startTime),
          (t.stopTime = this.stopTime),
          (t.offset = this.offset),
          t
        );
      },
    }),
    nt = qe,
    hs = k,
    cs = nt,
    fs = hs.extend({
      constructor: function (t, e) {
        (this.callback = t),
          (this.interval = e || 5e3),
          (this.isRunning = !1),
          (this._timer = null),
          (this.chrono = new cs());
      },
      updateInterval: function (t) {
        this.interval = t;
      },
      start: function () {
        this.isRunning || ((this.isRunning = !0), this._setTick());
      },
      stop: function () {
        if (((this.isRunning = !1), this._timer))
          try {
            clearTimeout(this._timer), (this._timer = null);
          } catch {
            typeof atv < "u" &&
              (atv.clearTimeout(this._timer), (this._timer = null));
          }
      },
      _setTick: function () {
        if (this.isRunning) {
          this.chrono.start();
          try {
            this._timer = setTimeout(
              function () {
                this.callback(this.chrono.stop()), this._setTick();
              }.bind(this),
              this.interval
            );
          } catch {
            typeof atv < "u" &&
              (this._timer = atv.setTimeout(
                function () {
                  this.callback(this.chrono.stop()), this._setTick();
                }.bind(this),
                this.interval
              ));
          }
        }
      },
    }),
    rt = fs,
    ps = { Preroll: "pre", Midroll: "mid", Postroll: "post" },
    gs = ps,
    ms = {
      START: "start",
      JOIN: "join",
      PAUSE: "pause",
      RESUME: "resume",
      SEEK_BEGIN: "seek-begin",
      SEEK_END: "seek-end",
      BUFFER_BEGIN: "buffer-begin",
      BUFFER_END: "buffer-end",
      ERROR: "error",
      STOP: "stop",
      CLICK: "click",
      MANIFEST: "manifest",
      PODSTART: "break-start",
      PODSTOP: "break-stop",
      QUARTILE: "quartile",
      VIDEO_EVENT: "video-event",
    },
    vs = ms,
    _s = vs,
    Ss = { Event: _s },
    gt = Ss,
    As = {
      NO_RESPONSE: "NO_RESPONSE",
      EMPTY: "EMPTY_RESPONSE",
      WRONG: "WRONG_RESPONSE",
    },
    Es = As,
    Ts = { GET: "get", POST: "post" },
    Ft = Ts,
    ys = {
      DATA: "/data",
      ADAPTERS: "/adapters",
      CONFIGURATION: "/configuration",
      APP_ANALYTICS_PLUGIN_LOGS: "/infinity/session/pluginLogs",
      VIDEO_PLUGIN_LOGS: "/infinity/video/pluginLogs",
      INIT: "/init",
      START: "/start",
      JOIN: "/joinTime",
      PAUSE: "/pause",
      RESUME: "/resume",
      SEEK: "/seek",
      BUFFER: "/bufferUnderrun",
      ERROR: "/error",
      STOP: "/stop",
      PING: "/ping",
      VIDEO_EVENT: "/infinity/video/event",
      AD_INIT: "/adInit",
      AD_START: "/adStart",
      AD_JOIN: "/adJoin",
      AD_PAUSE: "/adPause",
      AD_RESUME: "/adResume",
      AD_BUFFER: "/adBufferUnderrun",
      AD_STOP: "/adStop",
      AD_CLICK: "/adClick",
      AD_ERROR: "/adError",
      AD_MANIFEST: "/adManifest",
      AD_POD_START: "/adBreakStart",
      AD_POD_STOP: "/adBreakStop",
      AD_QUARTILE: "/adQuartile",
      EVENT: "/infinity/session/event",
      SESSION_START: "/infinity/session/start",
      SESSION_STOP: "/infinity/session/stop",
      SESSION_ERROR: "/infinity/session/error",
      NAV: "/infinity/session/nav",
      BEAT: "/infinity/session/beat",
      OFFLINE_EVENTS: "/offlineEvents",
    },
    bs = ys,
    Ls = {
      WILL_SEND_INIT: "will-send-init",
      WILL_SEND_START: "will-send-start",
      WILL_SEND_JOIN: "will-send-join",
      WILL_SEND_PAUSE: "will-send-pause",
      WILL_SEND_RESUME: "will-send-resume",
      WILL_SEND_SEEK: "will-send-seek",
      WILL_SEND_BUFFER: "will-send-buffer",
      WILL_SEND_ERROR: "will-send-error",
      WILL_SEND_FATAL_ERROR: "will-send-fatal-error",
      WILL_SEND_STOP: "will-send-stop",
      WILL_SEND_PING: "will-send-ping",
      WILL_SEND_VIDEO_EVENT: "will-send-video-event",
      WILL_SEND_AD_START: "will-send-ad-start",
      WILL_SEND_AD_JOIN: "will-send-ad-join",
      WILL_SEND_AD_PAUSE: "will-send-ad-pause",
      WILL_SEND_AD_RESUME: "will-send-ad-resume",
      WILL_SEND_AD_BUFFER: "will-send-ad-buffer",
      WILL_SEND_AD_STOP: "will-send-ad-stop",
      WILL_SEND_AD_CLICK: "will-send-ad-click",
      WILL_SEND_AD_ERROR: "will-send-ad-error",
      WILL_SEND_AD_MANIFEST: "will-send-ad-manifest",
      WILL_SEND_AD_POD_START: "will-send-ad-break-start",
      WILL_SEND_AD_POD_STOP: "will-send-ad-break-stop",
      WILL_SEND_AD_QUARTILE: "will-send-ad-quartile",
      WILL_SEND_SESSION_START: "will-send-session-start",
      WILL_SEND_SESSION_STOP: "will-send-session-stop",
      WILL_SEND_NAV: "will-send-nav",
      WILL_SEND_BEAT: "will-send-beat",
      WILL_SEND_EVENT: "will-send-event",
      WILL_SEND_OFFLINE_EVENTS: "will-send-offline-events",
    },
    ws = Ls,
    Ns = {
      WILL_SEND_LOG_PLUGIN_INIT: "will-send-log-plugin-init",
      WILL_SEND_LOG_PLUGIN_SET_OPTIONS: "will-send-log-plugin-set-options",
      WILL_SEND_LOG_PLUGIN_RECEIVE_DATA: "will-send-log-plugin-receive-data",
      WILL_SEND_LOG_INFINITY_BEGIN: "will-send-log-infinity-begin",
      WILL_SEND_LOG_INFINITY_START: "will-send-log-infinity-start",
      WILL_SEND_LOG_INFINITY_STOP: "will-send-log-infinity-stop",
      WILL_SEND_LOG_INFINITY_ERROR: "will-send-log-infinity-error",
      WILL_SEND_LOG_INFINITY_EVENT: "will-send-log-infinity-event",
      WILL_SEND_LOG_INFINITY_NAV: "will-send-log-infinity-nav",
      WILL_SEND_LOG_INFINITY_NEW_SESSION: "will-send-log-infinity-new-session",
    },
    Ds = Ns,
    Ps = { ClientSide: "csai", ServerSide: "ssai" },
    Is = Ps,
    Rs = gs,
    Cs = gt,
    Os = Es,
    Bs = Ft,
    ks = bs,
    xs = ws,
    Vs = Ds,
    Ms = Is,
    Fs = {
      AdPosition: Rs,
      ManifestError: Os,
      RequestMethod: Bs,
      Service: ks,
      WillSendEvent: xs,
      WillSendLog: Vs,
      AdInsertionType: Ms,
      Adapter: Cs,
    },
    j = Fs,
    Us = k,
    Q = O,
    qs = q,
    Y = Us.extend(
      {
        constructor: function (t, e, i, s, n) {
          (this.videoKey = n),
            (this.xhr = this.createXHR()),
            (this.host = t || ""),
            (this.service = e || ""),
            (this.params = i || {}),
            (this.options = qs.assign({}, Y.defaultOptions, s)),
            (this.retries = 0),
            (this.sendPostRequest = !1),
            (this.preparedPostRequest = !1),
            (this.onEventError = null),
            !this.options.cache &&
              !this.params.timemark &&
              this.setParam("timemark", new Date().getTime());
        },
        createXHR: function () {
          var t = {};
          try {
            XMLHttpRequest
              ? (t = new XMLHttpRequest())
              : (t = new ActiveXObject("Microsoft.XMLHTTP"));
          } catch (e) {
            Q.error(e);
          }
          return t;
        },
        getXHR: function () {
          return this.xhr;
        },
        getResponse: function () {
          return this.xhr.response;
        },
        getResponseText: function () {
          return this.xhr.responseText;
        },
        getResponseHeaders: function () {
          return this.xhr.getAllResponseHeaders();
        },
        getUrl: function () {
          return this.host + this.service + this.getParamString();
        },
        getVideoKey: function () {
          return this.videoKey;
        },
        on: function (t, e, i) {
          return (
            this.xhr.addEventListener
              ? this.xhr.addEventListener(t, e.bind(this, this, i))
              : t === Y.Event.SUCCESS &&
                (this.xhr.onreadystatechange = function () {
                  this.xhr.readyState === 4 && e.bind(this, this, i);
                }.bind(this)),
            this
          );
        },
        off: function (t, e) {
          return this.xhr.removeEventListener(t, e), this;
        },
        getParamString: function () {
          try {
            var t = "?";
            for (var e in this.params) {
              var i = this.params[e];
              if (i !== null && typeof i == "object") {
                var s = JSON.stringify(i);
                s !== "{}" &&
                  (t +=
                    encodeURIComponent(e) + "=" + encodeURIComponent(s) + "&");
              } else
                i !== null &&
                  typeof i < "u" &&
                  i !== "" &&
                  (t +=
                    encodeURIComponent(e) + "=" + encodeURIComponent(i) + "&");
            }
            return t.slice(0, -1);
          } catch (n) {
            return Q.error(n), "";
          }
        },
        getParam: function (t) {
          return this.params[t];
        },
        setParam: function (t, e) {
          return (this.params[t] = e), this;
        },
        setBody: function (t) {
          this.body = t;
        },
        setPostRequest: function (t) {
          this.sendPostRequest = t;
        },
        getParamsForPostMessages: function () {
          var t = {};
          try {
            var e = this.getParam("timemark"),
              i = this.getParam("code"),
              s = this.getParam("sessionRoot"),
              n = this.getParam("sessionId");
            e && (t.timemark = e),
              i && (t.code = i),
              s && (t.sessionRoot = s),
              n && (t.sessionId = n);
          } catch (r) {
            Q.error(r);
          }
          return t;
        },
        send: function () {
          try {
            try {
              this.sendPostRequest &&
                !this.preparedPostRequest &&
                ((this.options.method = "POST"),
                (this.body = JSON.stringify(this.params)),
                (this.params = this.getParamsForPostMessages()),
                (this.preparedPostRequest = !0));
            } catch {}
            if (
              (this.xhr.open(this.options.method, this.getUrl(), !0),
              this.options.requestHeaders)
            )
              for (var t in this.options.requestHeaders)
                this.options.requestHeaders.hasOwnProperty(t) &&
                  this.xhr.setRequestHeader(t, this.options.requestHeaders[t]);
            this.options.retryAfter > 0 &&
              this.options.maxRetries > 0 &&
              this.retries === 0 &&
              this.on(Y.Event.ERROR, this.onGenericError.bind(this)),
              Q.logLevel <= Q.Level.VERBOSE &&
                Q.verbose("XHR Req: " + this.getUrl());
            for (var e in Y._globalListeners)
              Y._globalListeners[e].forEach(
                function (i) {
                  this.on(e, i);
                }.bind(this)
              );
            return this.xhr.send(this.body);
          } catch (i) {
            Q.error(i);
          }
        },
        onGenericError: function () {
          if (this.retries >= this.options.maxRetries)
            Q.error(
              'Aborting failed request "' +
                this.service +
                '". Max retries reached.'
            );
          else if (((this.retries += 1), this.onEventError))
            try {
              setTimeout(
                function () {
                  Q.warn(
                    'YBRequest "' +
                      this.service +
                      '" failed. Retry ' +
                      this.retries +
                      " of " +
                      this.options.maxRetries +
                      " in " +
                      this.options.retryAfter +
                      "ms."
                  ),
                    this.onEventError(this);
                }.bind(this),
                this.options.retryAfter
              );
            } catch (t) {
              typeof atv < "u"
                ? atv.setTimeout(
                    function () {
                      Q.warn(
                        'YBRequest "' +
                          this.service +
                          '" failed. Retry ' +
                          this.retries +
                          " of " +
                          this.options.maxRetries +
                          " in " +
                          this.options.retryAfter +
                          "ms."
                      ),
                        this.onEventError(this);
                    }.bind(this),
                    this.options.retryAfter
                  )
                : Q.error(t);
            }
        },
      },
      {
        Event: {
          SUCCESS: "load",
          LOAD: "load",
          ERROR: "error",
          ABORT: "abort",
        },
        defaultOptions: {
          method: "GET",
          requestHeaders: {},
          maxRetries: 3,
          retryAfter: 5e3,
          cache: !1,
        },
        _globalListeners: {},
        onEvery: function (t, e) {
          (Y._globalListeners[t] = Y._globalListeners[t] || []),
            Y._globalListeners[t].push(e);
        },
        offEvery: function (t, e) {
          if (Y._globalListeners[t]) {
            var i = Y._globalListeners[t].indexOf(e);
            i !== -1 && Y._globalListeners[t].splice(i, 1);
          }
        },
      }
    ),
    X = Y,
    Ws = J,
    We = Ws.extend(
      {
        constructor: function () {
          (this._isBusy = !0),
            (this._sendRequest = !0),
            (this.transformName = "Transform");
        },
        parse: function (t) {},
        isBlocking: function (t) {
          return this._isBusy;
        },
        done: function () {
          (this._isBusy = !1), this.emit(We.Event.DONE);
        },
        hasToSend: function (t) {
          return this._sendRequest;
        },
        getState: function () {
          return this._sendRequest
            ? this._isBusy
              ? this.STATE_BLOCKED
              : this.STATE_NO_BLOCKED
            : this.STATE_OFFLINE;
        },
      },
      {
        STATE_OFFLINE: 2,
        STATE_BLOCKED: 1,
        STATE_NO_BLOCKED: 0,
        Event: { DONE: "done" },
      }
    ),
    et = We,
    Gs = k,
    Ge = O,
    Ut = X,
    at = et,
    Hs = j,
    js = Gs.extend({
      constructor: function (t) {
        (this.transforms = []),
          (this.pluginRef = t),
          (this._requests = []),
          (this.isProcessingRequests = !1);
      },
      sendRequest: function (t, e, i) {
        t &&
          (typeof e == "function" && t.on(Ut.Event.SUCCESS, e, i),
          this._registerRequest(t));
      },
      buildRequest: function (t, e, i, s) {
        i = i || {};
        var n = new Ut(t, e, i);
        typeof s == "function" && n.on(Ut.Event.SUCCESS, s),
          this._registerRequest(n);
      },
      addTransform: function (t) {
        t.parse && t.isBlocking
          ? (this.transforms.push(t),
            t.on(at.Event.DONE, this._processRequests.bind(this)))
          : Ge.warn(t + " is not a valid RequestTransform.");
      },
      removeTransform: function (t) {
        var e = this.transforms.indexOf(t);
        e !== -1
          ? this.transforms.splice(e, 1)
          : Ge.warn("Trying to remove unexisting Transform '" + t + "'.");
      },
      _registerRequest: function (t) {
        if (this.pluginRef) {
          var e = this.pluginRef.options;
          e.authToken &&
            (t.options.requestHeaders.Authorization =
              e.authType + " " + e.authToken);
        }
        t.service === Hs.Service.PING && (t.options.maxRetries = 0),
          this._requests.push(t),
          this._processRequests();
      },
      _processRequests: function () {
        if (!this.isProcessingRequests) {
          try {
            this.isProcessingRequests = !0;
            var t = this._requests;
            this._requests = [];
            for (var e = []; t.length; ) {
              var i = t.shift(),
                s = this._transform(i);
              s === at.STATE_NO_BLOCKED
                ? (this.pluginRef && (i.host = this.pluginRef.getHost()),
                  (i.onEventError = this.unshiftQueue.bind(this)),
                  i.send())
                : s === at.STATE_BLOCKED && e.push(i);
            }
            for (; e.length; ) this.unshiftQueue(e.pop());
          } catch {}
          this.isProcessingRequests = !1;
        }
      },
      unshiftQueue: function (t) {
        this._requests.unshift(t);
      },
      _transform: function (t) {
        var e = at.STATE_NO_BLOCKED;
        return (
          this.transforms.forEach(function (i) {
            if (i.isBlocking(t)) {
              e = at.STATE_BLOCKED;
              return;
            } else i.parse(t);
            i.getState() === at.STATE_OFFLINE && (e = at.STATE_OFFLINE);
          }),
          e
        );
      },
    }),
    mt = js,
    lt = X,
    He = et,
    it = O,
    $s = q,
    W = j,
    dt = He.extend(
      {
        constructor: function (t, e) {
          He.prototype.constructor.apply(this, arguments),
            (this.response = {}),
            (this._viewIndex = new Date().getTime()),
            (this._session = e),
            (this.plugin = t),
            (this._httpSecure = t.options["app.https"]),
            (this._fastDataHost = this.plugin.getFastDataHost()),
            (this.transformName = "FastData"),
            this._createConfigurationInterval();
        },
        _createConfigurationInterval: function () {
          this.plugin.isRefreshLMAConfigurationEnabled() &&
            !this._refreshInterval &&
            (this._refreshInterval = setInterval(
              this.loadConfiguration.bind(this),
              this.plugin.refreshLMAConfigurationSeconds() * 1e3
            ));
        },
        init: function () {
          if (this.plugin.options && this.plugin.options.offline)
            return (
              (this.response.host = "OFFLINE"),
              (this.response.code = "OFFLINE"),
              (this.response.pingTime = 60),
              (this.response.beatTime = 60),
              this.done(),
              null
            );
          if (this.plugin.storage.isEnabled()) {
            var t = new Date().getTime();
            if (
              t <
                this.plugin.appAnalytics.sessionExpire +
                  (Number(this.plugin.getDataTime()) || 0) &&
              this.plugin.getStoredData()
            )
              return this.setData(this.plugin.getStoredData()), null;
          }
          var e = W.Service.DATA,
            i = this.plugin.requestBuilder.buildParams(
              { outputformat: "json" },
              e,
              [this.plugin]
            );
          if ((this.loadConfiguration(), i !== null))
            try {
              it.notice(e + " " + i.system),
                i.system === "nicetest" &&
                  it.error(
                    "No accountCode has been set. Please set your accountCode inside plugin's options."
                  ),
                new lt(this._fastDataHost, e, i)
                  .on(lt.Event.SUCCESS, this._receiveData.bind(this))
                  .on(lt.Event.ERROR, this._failedData.bind(this))
                  .send();
            } catch {
              it.error("Error doing get data request to FastData service.");
            }
        },
        loadConfiguration: function () {
          var t = W.Service.CONFIGURATION,
            e = this.plugin.requestBuilder.buildParams({}, t, [this.plugin]);
          if (e !== null)
            try {
              new lt(this._fastDataHost, t, e)
                .on(lt.Event.SUCCESS, this._receiveConfiguration.bind(this))
                .on(lt.Event.ERROR, this._failedConfiguration.bind(this))
                .send();
            } catch {
              it.error(
                "Error doing get configuration request to FastData service."
              );
            }
        },
        setData: function (t) {
          try {
            var e = JSON.parse(t);
            this.plugin.options["parse.fdsResponseHost"] &&
              ((t = t.replace(
                e.q.h,
                this.plugin.options["parse.fdsResponseHost"](e.q.h)
              )),
              (e = JSON.parse(t))),
              (this.response.msg = t),
              (this.response.host = $s.addProtocol(e.q.h, this._httpSecure)),
              (this.response.code = e.q.c),
              (this.response.pingTime = e.q.pt || 5),
              (this.response.beatTime = e.q.i
                ? e.q.i.bt || this.plugin.getBeatDefaultTime()
                : this.plugin.getBeatDefaultTime()),
              (this.response.sessionExpire = (e.q.st && e.q.st) || 120),
              this.plugin.storage.setLocal(
                "sessionExpire",
                this.response.sessionExpire
              ),
              this.plugin.processFastDataResponse(this.response),
              this.done();
          } catch {
            it.error("Fastdata response is invalid.");
          }
        },
        setConfiguration: function (t) {
          try {
            (this.response.configurationOptions = JSON.parse(t)),
              this.emit(dt.Event.CONFIGURATION_LOADED);
          } catch {
            it.error("Configuration response is invalid.");
          }
        },
        _receiveData: function (t, e) {
          var i = t.getResponse();
          this.setData(i);
        },
        _receiveConfiguration: function (t, e) {
          var i = t.getResponse();
          this.setConfiguration(i);
        },
        _failedData: function (t, e) {
          it.error("Fastdata request has failed.");
        },
        _failedConfiguration: function (t, e) {
          it.error("Fastdata configuration request has failed.");
        },
        getSession: function () {
          return this._session;
        },
        setSession: function (t) {
          this._session = t;
        },
        setHost: function (t) {
          this.response.host = t;
        },
        parse: function (t) {
          (t.host = t.host || this.response.host),
            (t.params.system = this.plugin.getAccountCode()),
            (t.params.sessionRoot = t.params.sessionRoot || this.getSession()),
            dt.EventList.PingTime.indexOf(t.service) !== -1 &&
              (t.params.pingTime = t.params.pingTime || this.response.pingTime),
            dt.EventList.AppAnalytics.indexOf(t.service) === -1 &&
            dt.EventList.PluginAppLogs.indexOf(t.service) === -1
              ? this.plugin.videos.existsVideo(t.getVideoKey()) &&
                (t.params.code =
                  t.params.code ||
                  this.plugin.videos.getVideo(t.getVideoKey()).getViewCode())
              : (t.params.sessionId = t.params.sessionRoot),
            dt.EventList.CreateView.indexOf(t.service) !== -1 &&
              (this.plugin.appAnalytics.appAnalyticsStarted ||
                (this.plugin.storage.isEnabled() &&
                  this.plugin.storage.getLocal("appAnalyticsStarted"))) &&
              ((t.params.parentId = t.params.sessionRoot),
              (t.params.navContext =
                t.params.navContext || this.plugin.appAnalytics.getContext()));
        },
      },
      {
        EventList: {
          CreateView: [W.Service.START, W.Service.INIT, W.Service.ERROR],
          AppAnalytics: [
            W.Service.NAV,
            W.Service.SESSION_START,
            W.Service.SESSION_STOP,
            W.Service.SESSION_ERROR,
            W.Service.EVENT,
            W.Service.BEAT,
          ],
          PingTime: [W.Service.START, W.Service.PING],
          PluginAppLogs: [W.Service.APP_ANALYTICS_PLUGIN_LOGS],
          PluginVideoLogs: [W.Service.VIDEO_PLUGIN_LOGS],
        },
        Event: { DONE: "done", CONFIGURATION_LOADED: "configurationLoaded" },
      }
    ),
    je = dt,
    Js = J,
    $e = Js.extend(
      {
        constructor: function (t) {
          (this._realResource = null),
            (this._lastManifest = null),
            (this._transportFormat = null),
            (this.iterations = 3),
            (this._headers = t);
        },
        done: function () {
          (this.iterations = 3), this.emit($e.Event.DONE);
        },
        parse: function (t, e) {},
        getResource: function () {
          return this._realResource;
        },
        getTransportFormat: function () {
          return this._transportFormat;
        },
        getLastManifest: function () {
          return this._lastManifest;
        },
        shouldExecute: function (t) {
          return !0;
        },
      },
      { Event: { DONE: "done" } }
    ),
    vt = $e,
    Ys = { MP4: "MP4", MPEG2: "TS", CMF: "CMF" },
    _t = Ys,
    qt = X,
    Xs = vt,
    zs = O,
    Wt = _t,
    Qs = Xs.extend({
      parse: function (t, e, i) {
        i = i || "";
        var s = null;
        try {
          s =
            /((\S*?)(\.m3u8|\.m3u|\.ts|\.m4s|\.mp4|\.cmfv|\.m4a)((\?|;)\S*|\n|\r|$))/i.exec(
              t
                .replaceAll(
                  ",URI=",
                  `
`
                )
                .replaceAll('"', "")
                .replaceAll(
                  ",",
                  `
`
                )
            );
        } catch (v) {
          zs.warn("Parse HLS Regex failed", v), this.done();
        }
        if (s !== null) {
          var n = s[1].trim(),
            r = "",
            o = i.lastIndexOf("/");
          if (n.indexOf("http") !== 0 && o !== -1) {
            if (n[0] === "/" && n[1] !== "/") {
              var a = i.indexOf("/") + 1;
              (a += i.substr(a, i.length).indexOf("/") + 1),
                (a += i.substr(a, i.length).indexOf("/")),
                (n = i.slice(0, a) + n);
            } else n = i.slice(0, o) + "/" + n;
            r = i.slice(0, o) + "/";
          }
          if (s[3] === ".m3u8" || s[3] === ".m3u")
            if (e) this._parseWithManifest(e, r, s);
            else {
              var l = new qt(n, null, null, {
                cache: !0,
                requestHeaders: this._headers,
              });
              l.on(
                qt.Event.SUCCESS,
                function (v) {
                  this._parseWithManifest(v, r, s);
                }.bind(this)
              ),
                l.on(
                  qt.Event.ERROR,
                  function (v) {
                    this.done();
                  }.bind(this)
                ),
                l.send();
            }
          else {
            switch (s[3]) {
              case ".mp4":
              case ".m4s":
              case ".m4a":
                this._transportFormat = Wt.MP4;
                break;
              case ".ts":
                this._transportFormat = Wt.MPEG2;
                break;
              case ".cmfv":
                this._transportFormat = Wt.CMF;
            }
            (this._realResource = n), this.done();
          }
        } else this.done();
      },
      _parseWithManifest: function (t, e, i) {
        (this._lastManifest = t),
          this.parse(t.getResponseText(), null, e + i[2]);
      },
      shouldExecute: function (t) {
        var e = !0;
        if (t) {
          var i = t.getResponseText();
          e = i.indexOf("#EXTM3U") !== -1;
        }
        return e;
      },
    }),
    Je = Qs,
    Gt,
    Ye;
  function Zs() {
    return (
      Ye ||
        ((Ye = 1),
        (Gt = {
          cdnName: "LEVEL3",
          parsers: [
            {
              element: "host+type",
              headerName: "X-WR-Diag",
              regex: /Host:(.+)\sType:(.+)/,
            },
          ],
          requestHeaders: { "X-WR-Diag": "host" },
          parseType: function (t) {
            if (t) {
              if (
                t.indexOf("TCP_HIT") === 0 ||
                t.indexOf("TCP_MEM_HIT") === 0 ||
                t.indexOf("TCP_IMS_HIT") === 0
              )
                return 1;
              if (t.indexOf("TCP_MISS") === 0) return 2;
            }
            return 0;
          },
        })),
      Gt
    );
  }
  var Ht, Xe;
  function Ks() {
    return (
      Xe ||
        ((Xe = 1),
        (Ht = {
          cdnName: "CLOUDFRT",
          parsers: [
            { element: "host", headerName: "X-Amz-Cf-Id", regex: /(.+)/ },
            { element: "type", headerName: "X-Cache", regex: /(\S+)\s.+/ },
          ],
          parseType: function (t) {
            switch (t) {
              case "Hit":
                return 1;
              case "Miss":
                return 2;
              default:
                return 0;
            }
          },
        })),
      Ht
    );
  }
  var jt, ze;
  function tn() {
    return (
      ze ||
        ((ze = 1),
        (jt = {
          cdnName: "AKAMAI",
          parsers: [
            {
              element: "type+host",
              headerName: "X-Cache",
              regex: /(.+)\sfrom.+AkamaiGHost\/(.+)\).+/,
            },
            {
              element: "host",
              headerName: "akamai-mon-iucid-del",
              regex: /(.*)/,
            },
            {
              element: "type",
              headerName: "akamai-cache-status",
              regex: /(.+)\sfrom\schild/,
            },
          ],
          requestHeaders: { Pragma: "akamai-x-cache-on" },
          parseType: function (t) {
            var e = t.toLowerCase();
            return e.indexOf("hit") !== -1
              ? 1
              : e.indexOf("miss") !== -1
              ? 2
              : 0;
          },
        })),
      jt
    );
  }
  var $t, Qe;
  function en() {
    return (
      Qe ||
        ((Qe = 1),
        ($t = {
          cdnName: "HIGHNEGR",
          parsers: [
            {
              element: "host+type",
              headerName: "X-HW",
              regex: /.+,[0-9]+\.(.+)\.(.+)/,
            },
          ],
          parseType: function (t) {
            switch (t) {
              case "c":
              case "x":
                return 1;
              default:
                return 2;
            }
          },
        })),
      $t
    );
  }
  var Jt, Ze;
  function sn() {
    return (
      Ze ||
        ((Ze = 1),
        (Jt = {
          cdnName: "FASTLY",
          parsers: [
            { element: "host", headerName: "X-Served-By", regex: /([^,\s]+)$/ },
            { element: "type", headerName: "X-Cache", regex: /([^,\s]+)$/ },
          ],
          parseType: function (t) {
            switch (t) {
              case "HIT":
                return 1;
              case "MISS":
                return 2;
              default:
                return 0;
            }
          },
        })),
      Jt
    );
  }
  var Yt, Ke;
  function nn() {
    return (
      Ke ||
        ((Ke = 1),
        (Yt = {
          cdnName: "TELEFO",
          parsers: [
            {
              element: "host+type",
              headerName: "x-tcdn",
              regex: /Host:(.+)\sType:(.+)/,
            },
          ],
          requestHeaders: { "x-tcdn": "host" },
          parseType: function (t) {
            if (t) {
              if (t.indexOf("p") !== -1 || t.indexOf("c") !== -1) return 1;
              if (t.indexOf("i") !== -1 || t.indexOf("m") !== -1) return 2;
            }
            return 0;
          },
        })),
      Yt
    );
  }
  var Xt, ti;
  function rn() {
    return (
      ti ||
        ((ti = 1),
        (Xt = {
          cdnName: "AMAZON",
          parsers: [
            { element: "host", headerName: "x-amz-cf-pop", regex: /(.+)/ },
            { element: "type", headerName: "x-cache", regex: /(.+)\sfrom.+/ },
          ],
          parseType: function (t) {
            return t.toLowerCase().indexOf("hit") !== -1
              ? 1
              : t.toLowerCase().indexOf("miss") !== -1
              ? 2
              : 0;
          },
        })),
      Xt
    );
  }
  var zt, ei;
  function an() {
    return (
      ei ||
        ((ei = 1),
        (zt = {
          cdnName: "EDGECAST",
          parsers: [
            { element: "host", headerName: "Server", regex: /\((.+)\/.+\)/ },
            { element: "type", headerName: "X-Cache", regex: /(.+)/ },
          ],
          parseType: function (t) {
            switch (t) {
              case "HIT":
                return 1;
              case "MISS":
              default:
                return 2;
            }
          },
        })),
      zt
    );
  }
  var Qt, ii;
  function on() {
    return (
      ii ||
        ((ii = 1),
        (Qt = {
          parsers: [
            { element: "name", headerName: null, regex: /(.+)/ },
            { element: "host", headerName: null, regex: /(.+)/ },
          ],
        })),
      Qt
    );
  }
  var Zt, si;
  function un() {
    return (
      si ||
        ((si = 1),
        (Zt = {
          cdnName: "NOSOTT",
          parsers: [
            { element: "host", headerName: "X-NOS-Server", regex: /(.+)/ },
            { element: "type", headerName: "X-Cache", regex: /(.*)/ },
          ],
          parseType: function (t) {
            switch (t) {
              case "Hit":
                return 1;
              case "Miss":
                return 2;
              default:
                return 0;
            }
          },
        })),
      Zt
    );
  }
  var ln = J,
    ni = O,
    dn = q,
    Kt = X,
    x = ln.extend(
      {
        constructor: function (t) {
          (this._options = dn.assign(
            {
              cdnName: null,
              parsers: [],
              requestMethod: "HEAD",
              requestHeaders: {},
              parseType: function () {
                return 0;
              },
            },
            t
          )),
            (this._responses = {});
        },
        done: function () {
          this.emit(x.Event.DONE);
        },
        addParser: function (t) {
          return this._options.parsers.push(t), this;
        },
        setCdnName: function (t) {
          return (this._options.cdnName = t), this;
        },
        setRequestMethod: function (t) {
          return (this._options.requestMethod = t), this;
        },
        setRequestHeader: function (t, e) {
          return (this._options.requestHeaders[t] = e), this;
        },
        setParseType: function (t) {
          return (this._options.parseType = t), this;
        },
        getParsedCdnName: function () {
          return this._cdnName;
        },
        getParsedNodeHost: function () {
          return this._cdnNodeHost;
        },
        getParsedNodeTypeString: function () {
          return this._cdnNodeTypeString;
        },
        getParsedNodeType: function () {
          return this._cdnNodeType;
        },
        getResponses: function () {
          return this._responses;
        },
        parse: function (t, e) {
          this._responses = e || {};
          var i = JSON.stringify(this._options.requestHeaders);
          this._responses[i]
            ? this._parseResponse(this._responses[i])
            : this._requestResponse(t);
        },
        _requestResponse: function (t) {
          var e = JSON.stringify(this._options.requestHeaders),
            i = e !== "{}",
            s = new Kt(t, null, null, {
              method: this._options.requestMethod,
              maxRetries: 0,
              requestHeaders: this._options.requestHeaders,
              cache: !0,
            });
          s.on(
            Kt.Event.SUCCESS,
            function (n) {
              (this._responses[e] = n.getResponseHeaders()),
                this._parseResponse(this._responses[e]);
            }.bind(this)
          ),
            s.on(
              Kt.Event.ERROR,
              function (n) {
                i
                  ? ((this._options.requestHeaders = {}),
                    this._requestResponse(t))
                  : this.done();
              }.bind(this)
            ),
            s.send();
        },
        _parseResponse: function (t) {
          this._options.parsers.forEach(
            function (e) {
              if (typeof e.headerName == "string")
                this._parseHeaderResponse(t, e, e.headerName);
              else if (Array.isArray(e.headerName))
                for (var i = 0, s = e.headerName.length; i < s; i++) {
                  var n = e.headerName[i];
                  typeof n == "string" && this._parseHeaderResponse(t, e, n);
                }
            }.bind(this)
          ),
            this.done();
        },
        _parseHeaderResponse: function (t, e, i) {
          i &&
            ((i = i ? i.toLowerCase() : ""),
            t
              .split(
                `
`
              )
              .forEach(
                function (s) {
                  var n = s.indexOf(":");
                  if (n !== -1) {
                    var r = s.slice(0, n).toLowerCase();
                    r === i && this._executeParser(e, s.slice(n + 1));
                  }
                }.bind(this)
              ));
        },
        _executeParser: function (t, e) {
          try {
            var i = t.regex.exec(e.trim());
            if (i !== null)
              switch (
                (this._options.cdnName &&
                  (this._cdnName = this._options.cdnName),
                t.element)
              ) {
                case x.ElementType.HOST:
                  this._cdnNodeHost = i[1];
                  break;
                case x.ElementType.TYPE:
                  (this._cdnNodeTypeString = i[1]),
                    (this._cdnNodeType = this._options.parseType(
                      this._cdnNodeTypeString
                    ));
                  break;
                case x.ElementType.HOST_AND_TYPE:
                  (this._cdnNodeHost = i[1]),
                    (this._cdnNodeTypeString = i[2]),
                    (this._cdnNodeType = this._options.parseType(
                      this._cdnNodeTypeString
                    ));
                  break;
                case x.ElementType.TYPE_AND_HOST:
                  (this._cdnNodeTypeString = i[1]),
                    (this._cdnNodeType = this._options.parseType(
                      this._cdnNodeTypeString
                    )),
                    (this._cdnNodeHost = i[2]);
                  break;
                case x.ElementType.NAME:
                  this._cdnName = i[1].toUpperCase();
                  break;
              }
          } catch {
            ni.warn(
              "CDN parsing for " +
                this._options.cdnName +
                " could not parse header value " +
                e
            );
          }
        },
        shouldExecute: function () {
          return !0;
        },
      },
      {
        Event: { DONE: "done" },
        ElementType: {
          HOST: "host",
          TYPE: "type",
          HOST_AND_TYPE: "host+type",
          TYPE_AND_HOST: "type+host",
          NAME: "name",
        },
        _cdnConfigs: {},
        setBalancerHeaderName: function (t, e) {
          (x._cdnConfigs.Balancer.parsers[0].headerName = t),
            (x._cdnConfigs.Balancer.parsers[1].headerName = e);
        },
        create: function (t) {
          if (x._cdnConfigs[t]) return new x(x._cdnConfigs[t]);
          ni.warn("Tried to create an unexisting CdnParser named " + t);
        },
        add: function (t, e) {
          x._cdnConfigs[t] = e;
        },
      }
    );
  x.add("Level3", Zs()),
    x.add("Cloudfront", Ks()),
    x.add("Akamai", tn()),
    x.add("Highwinds", en()),
    x.add("Fastly", sn()),
    x.add("Telefonica", nn()),
    x.add("Amazon", rn()),
    x.add("Edgecast", an()),
    x.add("Balancer", on()),
    x.add("NosOtt", un());
  var ri = x,
    hn = J,
    cn = O,
    te = X,
    ee = hn.extend(
      {
        constructor: function (t) {
          (this.plugin = t), (this.headerName = "x-cdn");
        },
        init: function () {
          var t = null;
          this.plugin &&
            (this.plugin.getAdapter() &&
            this.plugin.getAdapter().getURLToParse()
              ? (t = this.plugin.getAdapter().getURLToParse())
              : (t = this.plugin.getResource())),
            this.plugin &&
              this.plugin.getAdapter() &&
              this.plugin.getAdapter().flags.isStarted &&
              this._request(t);
        },
        done: function (t) {
          this.emit(ee.Events.DONE, t);
        },
        error: function () {
          this.emit(ee.Events.ERROR);
        },
        _successfulRequest: function (t) {
          setTimeout(
            this.init.bind(this),
            parseInt(this.plugin.options["parse.cdnTTL"]) * 1e3
          );
          var e = t.getResponseHeaders().split(`
`),
            i = null;
          for (var s in e) {
            var n = e[s],
              r = n.indexOf(this.headerName);
            r > -1 &&
              (i = n
                .substring(r + this.headerName.length + 1, n.length - 1)
                .replace(" ", ""));
          }
          this.done(i);
        },
        _failedRequest: function () {
          setTimeout(
            this.init.bind(this),
            parseInt(this.plugin.options["parse.cdnTTL"]) * 1e3
          ),
            cn.warn("CDN switch detection request failed"),
            this.error();
        },
        _request: function (t) {
          var e = new te(t, null, null, { method: "HEAD", cache: !0 });
          e.on(te.Event.SUCCESS, this._successfulRequest.bind(this)),
            e.on(te.Event.ERROR, this._failedRequest.bind(this)),
            e.send();
        },
      },
      { Events: { DONE: "done", ERROR: "error" } }
    ),
    fn = ee,
    ie = X,
    pn = vt,
    se = O,
    ne = _t,
    gn = pn.extend({
      parse: function (t, e) {
        if (e) this.parseLocation(e, t);
        else {
          var i = new ie(t, null, null, {
            cache: !0,
            requestHeaders: this._headers,
          });
          i.on(
            ie.Event.SUCCESS,
            function (s) {
              this.parseLocation(s, t);
            }.bind(this)
          ),
            i.on(
              ie.Event.ERROR,
              function (s) {
                this.done();
              }.bind(this)
            ),
            i.send();
        }
      },
      parseLocation: function (t, e) {
        this.iterations--;
        var i = new RegExp(/<Location>([\s\S]+)<\/Location>/);
        try {
          this._lastManifest = t;
          var s = t.getResponseText(),
            n = i.exec(s);
          if (n && n[1])
            var r = this._htmlDecode(
              n[1].replace(
                `
`,
                ""
              )
            );
          r && r !== e && this.iterations > 0
            ? this.parse(r)
            : this.parseFinalResource(s, e);
        } catch {
          se.warn("Dash parse failed"), this.done();
        }
      },
      _htmlDecode: function (t) {
        if (
          typeof document < "u" &&
          typeof document.createElement == "function"
        ) {
          var e = document.createElement("textarea");
          return (
            (e.innerHTML = t),
            e.childNodes && e.childNodes.length ? e.childNodes[0].nodeValue : t
          );
        }
        return t;
      },
      parseFinalResource: function (t, e) {
        var i = new RegExp(/<BaseURL>[\r\n]*(.*?)[\r\n]*<\/BaseURL>/),
          s = new RegExp(/<SegmentURL[\s\S]*media="([^"]+)/),
          n = new RegExp(/<SegmentTemplate[\s\S]*media="([^"]+)/),
          r = null;
        try {
          (r = i.exec(t) || n.exec(t) || s.exec(t)),
            this._getManifestMetadata(t),
            r && r[1] && this._isFullUrl(r[1])
              ? r[1].indexOf('"') > 0
                ? (this._realResource = r[1]
                    .substr(0, r[1].indexOf('"'))
                    .replace(
                      `
`,
                      ""
                    ))
                : (this._realResource = r[1].replace(
                    `
`,
                    ""
                  ))
              : (this._realResource = e);
        } catch {
          se.warn("Dash manifest parse failed");
        }
        this.done();
      },
      _getManifestMetadata: function (t) {
        try {
          var e = new RegExp(/<AdaptationSet[\s\S]*mimeType="video\/([^"]+)/),
            i = e.exec(t),
            s = null;
          switch (i[1]) {
            case "mp4":
            case "m4s":
              s = ne.MP4;
              break;
            case "mp2t":
              s = ne.MPEG2;
              break;
            case "cmfv":
              s = ne.CMF;
              break;
          }
          this._transportFormat = s;
        } catch {
          se.warn("Couldnt find the transport format");
        }
      },
      _isFullUrl: function (t) {
        return t.indexOf("http") !== -1;
      },
      shouldExecute: function (t) {
        var e = !0;
        if (t) {
          var i = t.getResponseText();
          e = i.indexOf("<MPD") !== -1;
        }
        return e;
      },
    }),
    ai = gn,
    re = X,
    mn = vt,
    vn = mn.extend({
      parse: function (t, e) {
        if (e) this._parseWithManifest(e);
        else {
          this._realResource = t;
          var i = new re(t, null, null, {
            cache: !0,
            requestHeaders: this._headers,
          });
          i.on(
            re.Event.SUCCESS,
            function (s) {
              this._parseWithManifest(s);
            }.bind(this)
          ),
            i.on(
              re.Event.ERROR,
              function (s) {
                this.done();
              }.bind(this)
            ),
            i.send();
        }
      },
      _parseWithManifest: function (t) {
        this._lastManifest = t;
        var e = t.getResponseHeaders(),
          i = !1;
        t &&
        t.xhr &&
        t.xhr.responseURL &&
        t.xhr.responseURL !== this._realResource
          ? ((this._realResource = t.xhr.responseURL),
            this.parse(this._realResource),
            (i = !0))
          : e
              .split(
                `
`
              )
              .forEach(
                function (s) {
                  s.startsWith("Location:") &&
                    ((this._realResource = s.slice(10)),
                    this.parse(this._realResource),
                    (i = !0));
                }.bind(this)
              ),
          i || this.done();
      },
    }),
    oi = vn,
    _n = et,
    Sn = Je,
    ae = ri,
    oe = fn,
    An = ai,
    En = vt,
    Tn = oi,
    ui = O,
    yn = j,
    li = _n.extend({
      constructor: function (t) {
        li.__super__.constructor.apply(this, arguments),
          (this.plugin = t),
          (this._realResource = null),
          (this._transportFormat = null),
          (this._initResource = null),
          (this._cdnName = null),
          (this._cdnNodeHost = null),
          (this._cdnNodeTypeString = null),
          (this._cdnNodeType = null),
          (this._responses = {}),
          (this._isBusy = !1),
          (this._isFinished = !1),
          (this.transformName = "Resource");
      },
      getResource: function () {
        return this._realResource;
      },
      _getInitialCdnResource: function () {
        return this._realResource || this._initResource;
      },
      getTransportFormat: function () {
        return this._transportFormat;
      },
      getCdnName: function () {
        return this._cdnName;
      },
      getNodeHost: function () {
        return this._cdnNodeHost;
      },
      getNodeTypeString: function () {
        return this._cdnNodeTypeString;
      },
      getNodeType: function () {
        return this._cdnNodeType;
      },
      init: function (t) {
        if (!t) {
          this.done();
          return;
        }
        !this._isBusy &&
          !this._isFinished &&
          ((this._isBusy = !0),
          (this._initResource = t),
          (this._parseManifestEnabled = this.plugin.isParseManifest()),
          (this._cdnEnabled = this.plugin.isParseCdnNode()),
          (this._cdnList = this.plugin.getParseCdnNodeList().slice()),
          ae.setBalancerHeaderName(
            this.plugin.getParseCdnNodeNameHeader(),
            this.plugin.getParseNodeHeader()
          ),
          this._setTimeout(),
          this._parseManifestEnabled
            ? this._isFinalUrl(this._initResource)
              ? ((this._realResource = this._initResource),
                (this._isFinished = !0),
                this.done())
              : this.parseManifest()
            : this._parseCDN());
      },
      _isFinalUrl: function (t) {
        var e = [".ts", ".mp4", ".m4s", ".cmfv"];
        t = t || "";
        for (var i in e) {
          var s = e[i];
          if (t.lastIndexOf(s) === t.length - s.length) return !0;
        }
        return !1;
      },
      _setTimeout: function () {
        var t = function () {
          this._isBusy &&
            (this.done(),
            ui.warn(
              "ResourceTransform has exceeded the maximum execution time (3s) and will be aborted."
            ));
        }.bind(this);
        try {
          this._parseTimeout = setTimeout(t, 3e3);
        } catch (e) {
          typeof atv < "u"
            ? (this._parseTimeout = atv.setTimeout(t, 3e3))
            : ui.error(e);
        }
      },
      parseManifest: function (t, e) {
        var i = this.plugin.options["parse.manifest.auth"],
          s = [new Tn(i), new An(i), new Sn(i)];
        this._parseManifest(s, t, e || this._initResource);
      },
      _parseManifest: function (t, e, i, s) {
        if (t.length > 0) {
          var n = t[0];
          n.shouldExecute(e)
            ? (n.on(
                En.Event.DONE,
                function () {
                  this._parseManifest(
                    t.slice(1, t.length),
                    n.getLastManifest(),
                    n.getResource(),
                    n.getTransportFormat() || s
                  );
                }.bind(this)
              ),
              n.parse(i, e))
            : this._parseManifest(t.slice(1, t.length), e, i, s);
        } else
          (this._transportFormat = s),
            (this._realResource = i),
            this._parseCDN();
      },
      _parseCDN: function () {
        if (this.plugin.isCdnSwitch())
          (this.switchDetector = new oe(this.plugin)),
            this.switchDetector.on(
              oe.Events.DONE,
              function (i) {
                (this._cdnName = i.data), (this._isFinished = !0), this.done();
              }.bind(this)
            ),
            this.switchDetector.on(
              oe.Events.ERROR,
              function () {
                this.done();
              }.bind(this)
            ),
            this.switchDetector.init();
        else if (this._cdnEnabled && this._cdnList.length > 0) {
          var t = this._cdnList.shift();
          if (this.getNodeHost()) return;
          var e = ae.create(t);
          e
            ? (e.on(
                ae.Event.DONE,
                function () {
                  (this._responses = e.getResponses()),
                    (this._cdnName = e.getParsedCdnName()),
                    (this._cdnNodeHost = e.getParsedNodeHost()),
                    (this._cdnNodeTypeString = e.getParsedNodeTypeString()),
                    (this._cdnNodeType = e.getParsedNodeType()),
                    this.getNodeHost()
                      ? ((this._isFinished = !0), this.done())
                      : this._parseCDN();
                }.bind(this)
              ),
              e.parse(this._getInitialCdnResource(), this._responses))
            : this._parseCDN();
        } else this.done();
      },
      parse: function (t) {
        if (t.service === yn.Service.START) {
          var e = this.plugin.requestBuilder.lastSent;
          (e.parsedResource = t.params.parsedResource =
            this.getResource() || t.params.parsedResource),
            (e.transportFormat = t.params.transportFormat =
              this.getTransportFormat() || t.params.transportFormat),
            this._cdnEnabled &&
              ((e.cdn = t.params.cdn = t.params.cdn || this.getCdnName()),
              (e.nodeHost = t.params.nodeHost =
                this.getNodeHost() || t.params.nodeHost),
              (e.nodeType = t.params.nodeType =
                this.getNodeType() || t.params.nodeType),
              (e.nodeTypeString = t.params.nodeTypeString =
                this.getNodeTypeString() || t.params.nodeTypeString));
        }
      },
    }),
    ue = li,
    di = et,
    bn = di.extend({
      constructor: function (t, e) {
        (this._sendRequest = !1),
          (this._isBusy = !1),
          (this.plugin = t),
          (this.session = e),
          (this.transformName = "Offline");
      },
      parse: function (t) {
        t &&
          this.plugin.offlineStorage &&
          this.plugin.offlineStorage.addEvent(t.service, t.params);
      },
      hasToSend: function (t) {
        return !1;
      },
      getState: function () {
        return di.STATE_OFFLINE;
      },
    }),
    hi = bn,
    Ln = k,
    wn = O,
    le = Ln.extend(
      {
        exists: function (t) {
          return le.Dictionary.hasOwnProperty(t);
        },
        getNewName: function (t) {
          var e = le.Dictionary[t];
          return (
            wn.warn(
              'The option "' + t + '" is deprecated, use "' + e + '" instead'
            ),
            e
          );
        },
      },
      {
        Dictionary: {
          httpSecure: "app.https",
          username: "user.name",
          anonymousUser: "user.anonymousId",
          obfuscateIp: "user.obfuscateIp",
          userType: "user.type",
          "content.title2": "content.program",
          "background.settings.iphone": "background.settings.iOS",
          "parse.hls": "parse.manifest",
          "parse.dash": "parse.manifest",
          "parse.locationHeader": "parse.manifest",
          "extraparam.1": "content.customDimension.1",
          "extraparam.2": "content.customDimension.2",
          "extraparam.3": "content.customDimension.3",
          "extraparam.4": "content.customDimension.4",
          "extraparam.5": "content.customDimension.5",
          "extraparam.6": "content.customDimension.6",
          "extraparam.7": "content.customDimension.7",
          "extraparam.8": "content.customDimension.8",
          "extraparam.9": "content.customDimension.9",
          "extraparam.10": "content.customDimension.10",
          "extraparam.11": "content.customDimension.11",
          "extraparam.12": "content.customDimension.12",
          "extraparam.13": "content.customDimension.13",
          "extraparam.14": "content.customDimension.14",
          "extraparam.15": "content.customDimension.15",
          "extraparam.16": "content.customDimension.16",
          "extraparam.17": "content.customDimension.17",
          "extraparam.18": "content.customDimension.18",
          "extraparam.19": "content.customDimension.19",
          "extraparam.20": "content.customDimension.20",
          "ad.extraparam.1": "ad.customDimension.1",
          "ad.extraparam.2": "ad.customDimension.2",
          "ad.extraparam.3": "ad.customDimension.3",
          "ad.extraparam.4": "ad.customDimension.4",
          "ad.extraparam.5": "ad.customDimension.5",
          "ad.extraparam.6": "ad.customDimension.6",
          "ad.extraparam.7": "ad.customDimension.7",
          "ad.extraparam.8": "ad.customDimension.8",
          "ad.extraparam.9": "ad.customDimension.9",
          "ad.extraparam.10": "ad.customDimension.10",
        },
      }
    ),
    Nn = le,
    Dn = {
      HDS: "HDS",
      HLS: "HLS",
      MSS: "MSS",
      DASH: "DASH",
      RTMP: "RTMP",
      RTP: "RTP",
      RTSP: "RTSP",
      DVB: "DVB",
      DVBC: "DVB-C",
      DVBT: "DVB-T",
      DVBT2: "DVB-T2",
      MULTICAST: "MULTICAST",
    },
    ci = Dn,
    Pn = k,
    In = Nn,
    Rn = O,
    Cn = _t,
    On = ci,
    fi = Ft,
    de = Pn.extend(
      {
        constructor: function (t) {
          (this.enabled = !0),
            (this.host = "lma.npaw.com"),
            (this.adminApiHost = "admin-api.npaw.com"),
            (this.accountCode = "nicetest"),
            (this.authToken = null),
            (this.authType = "Bearer"),
            (this.preventZombieViews = !0),
            (this.offline = !1),
            (this.referer = null),
            (this.domain = null),
            (this.pathName = null),
            (this.pageTitle = null),
            (this.referral = null),
            (this.disableCookies = !0),
            (this.forceCookies = !1),
            (this.disableStorage = !1),
            (this["user.email"] = null),
            (this["user.type"] = null),
            (this["user.name"] = null),
            (this["user.obfuscateIp"] = !1),
            (this["user.anonymousId"] = null),
            (this["user.privacyProtocol"] = null),
            (this["parse.manifest"] = !1),
            (this["parse.manifest.auth"] = {}),
            (this["parse.cdnNameHeader"] = ["x-cdn-forward"]),
            (this["parse.cdnNodeHeader"] = ""),
            (this["parse.cdnNode"] = !1),
            (this["parse.cdnNode.list"] = [
              "Akamai",
              "Amazon",
              "Cloudfront",
              "Level3",
              "Fastly",
              "Highwinds",
              "Telefonica",
              "Edgecast",
              "NosOtt",
            ]),
            (this["parse.fdsResponseHost"] = null),
            (this["parse.cdnSwitchHeader"] = !1),
            (this["parse.cdnTTL"] = 60),
            (this["network.ip"] = null),
            (this["network.isp"] = null),
            (this["network.connectionType"] = null),
            (this["device.id"] = null),
            (this["device.id.autoGenerated"] = !1),
            (this["device.code"] = null),
            (this["device.model"] = null),
            (this["device.brand"] = null),
            (this["device.type"] = null),
            (this["device.name"] = null),
            (this["device.osName"] = null),
            (this["device.osVersion"] = null),
            (this["device.browserName"] = null),
            (this["device.browserVersion"] = null),
            (this["device.browserType"] = null),
            (this["device.browserEngine"] = null),
            (this["device.EDID"] = null),
            (this["device.isAnonymous"] = !1),
            (this["content.transactionCode"] = null),
            (this["content.resource"] = null),
            (this["content.isLive"] = null),
            (this["content.isLive.noSeek"] = !1),
            (this["content.isLive.noMonitor"] = !1),
            (this["content.title"] = null),
            (this["content.program"] = null),
            (this["content.duration"] = null),
            (this["content.fps"] = null),
            (this["content.segmentDuration"] = null),
            (this["content.bitrate"] = null),
            (this["content.totalBytes"] = null),
            (this["content.sendTotalBytes"] = !1),
            (this["content.throughput"] = null),
            (this["content.rendition"] = null),
            (this["content.cdn"] = null),
            (this["content.cdnNode"] = null),
            (this["content.cdnType"] = null),
            (this["content.metadata"] = {}),
            (this["content.metrics"] = {}),
            (this["content.streamingProtocol"] = null),
            (this["content.transportFormat"] = null),
            (this["content.package"] = null),
            (this["content.saga"] = null),
            (this["content.tvShow"] = null),
            (this["content.season"] = null),
            (this["content.episodeTitle"] = null),
            (this["content.channel"] = null),
            (this["content.id"] = null),
            (this["content.imdbId"] = null),
            (this["content.gracenoteId"] = null),
            (this["content.type"] = null),
            (this["content.genre"] = null),
            (this["content.language"] = null),
            (this["content.autodetect.language"] = !0),
            (this["content.subtitles"] = null),
            (this["content.autodetect.subtitles"] = !0),
            (this["content.contractedResolution"] = null),
            (this["content.cost"] = null),
            (this["content.price"] = null),
            (this["content.playbackType"] = null),
            (this["content.drm"] = null),
            (this["content.encoding.videoCodec"] = null),
            (this["content.encoding.audioCodec"] = null),
            (this["content.encoding.codecSettings"] = null),
            (this["content.encoding.codecProfile"] = null),
            (this["content.encoding.containerFormat"] = null),
            (this["productAnalytics.domain"] = null),
            (this["check.productAnalytics.enabled"] = !0),
            (this["utm.source"] = null),
            (this["utm.medium"] = null),
            (this["utm.campaign"] = null),
            (this["utm.term"] = null),
            (this["utm.content"] = null),
            (this["ad.metadata"] = {}),
            (this["ad.campaign"] = null),
            (this["ad.creativeId"] = null),
            (this["ad.provider"] = null),
            (this["ad.resource"] = null),
            (this["ad.title"] = null),
            (this["ad.duration"] = null),
            (this["ad.expectedPattern"] = null),
            (this["ad.givenAds"] = null),
            (this["ad.breaksTime"] = null),
            (this["ad.expectedBreaks"] = null),
            (this["ad.givenBreaks"] = null),
            (this["ad.ignore"] = !1),
            (this["ad.blockerDetected"] = null),
            (this["app.name"] = null),
            (this["app.releaseVersion"] = null),
            (this["app.https"] = !1),
            (this["background.enabled"] = !0),
            (this["background.settings"] = null),
            (this["background.settings.android"] = "stop"),
            (this["background.settings.iOS"] = "stop"),
            (this["background.settings.desktop"] = null),
            (this["background.settings.tv"] = "stop"),
            (this["background.settings.playstation"] = "stop"),
            (this["cdnbalancer.uuid"] = null),
            (this["cdnbalancer.profile"] = null),
            (this["cdnbalancer.bucket"] = null),
            (this["content.customDimensions"] = {}),
            (this["content.customDimension.1"] = null),
            (this["content.customDimension.2"] = null),
            (this["content.customDimension.3"] = null),
            (this["content.customDimension.4"] = null),
            (this["content.customDimension.5"] = null),
            (this["content.customDimension.6"] = null),
            (this["content.customDimension.7"] = null),
            (this["content.customDimension.8"] = null),
            (this["content.customDimension.9"] = null),
            (this["content.customDimension.10"] = null),
            (this["content.customDimension.11"] = null),
            (this["content.customDimension.12"] = null),
            (this["content.customDimension.13"] = null),
            (this["content.customDimension.14"] = null),
            (this["content.customDimension.15"] = null),
            (this["content.customDimension.16"] = null),
            (this["content.customDimension.17"] = null),
            (this["content.customDimension.18"] = null),
            (this["content.customDimension.19"] = null),
            (this["content.customDimension.20"] = null),
            (this["ad.customDimension.1"] = null),
            (this["ad.customDimension.2"] = null),
            (this["ad.customDimension.3"] = null),
            (this["ad.customDimension.4"] = null),
            (this["ad.customDimension.5"] = null),
            (this["ad.customDimension.6"] = null),
            (this["ad.customDimension.7"] = null),
            (this["ad.customDimension.8"] = null),
            (this["ad.customDimension.9"] = null),
            (this["ad.customDimension.10"] = null),
            (this.forceInit = !1),
            (this["session.metrics"] = {}),
            (this["session.context"] = !1),
            (this["errors.fatal"] = []),
            (this["errors.nonFatal"] = []),
            (this["errors.ignore"] = []),
            (this["pause.ignoreSmallEvents"] = !0),
            (this["check.playerExists"] = !0),
            (this["check.appAnalytics.autoBegin"] = !1),
            (this["check.appAnalytics.enabled"] = !0),
            (this["debug.playerLogs.enabled"] = !1),
            (this["debug.pluginLogs.enabled"] = !1),
            (this["check.videoAnalytics.enabled"] = !0),
            (this["lma.refresh.configuration.enabled"] = !1),
            (this["lma.refresh.configuration.seconds"] = 300),
            (this.linkedViewId = null),
            (this.waitForMetadata = !1),
            (this.pendingMetadata = []),
            (this.method = fi.GET),
            (this["playhead.monitor"] = !0),
            (this["readyState.monitor"] = !0),
            (this["adapters.overwrite"] = !1),
            (this["adapters.templates"] = {}),
            (this["adapters.properties"] = {}),
            (this["components.config"] = {}),
            this.setOptions(t);
        },
        setOptions: function (t, e) {
          var i = !1;
          if (e === void 0) {
            (e = this), (i = !0);
            var s = new In();
          }
          if (typeof t < "u")
            for (var n in t) {
              var r = !1,
                o = null;
              i &&
                (this.hasOwnProperty(n) ||
                  (s.exists(n)
                    ? ((o = s.getNewName(n)), (r = !0))
                    : typeof t[n] != "function" &&
                      Rn.warn(
                        'The option "' +
                          n +
                          '" does not exist, so it cannot be set'
                      ))),
                typeof e[n] == "object" &&
                e[n] !== null &&
                !Array.isArray(e[n]) &&
                n === "parse.cdnNode.list"
                  ? this.setOptions(t[n], e[n])
                  : r
                  ? (e[o] = t[n])
                  : (e[n] = t[n]);
            }
        },
        setExtraParams: function (t) {
          var e = 20;
          if (!(typeof t != "object" || !t.length)) {
            for (t.length >= e && (t = t.slice(0, e)); t.length < e; )
              t.push(null);
            t.forEach(
              function (i, s) {
                this["content.customDimension." + (s + 1).toString()] = i;
              }.bind(this)
            );
          }
        },
        setCustomDimensions: function () {
          de.prototype.setExtraParams.apply(this, arguments);
        },
        setAdExtraParams: function (t) {
          var e = 10;
          if (!(typeof t != "object" || !t.length)) {
            for (t.length >= e && (t = t.slice(0, e)); t.length < e; )
              t.push(null);
            t.forEach(
              function (i, s) {
                this["ad.customDimension." + (s + 1).toString()] = i;
              }.bind(this)
            );
          }
        },
        setAdCustomDimensions: function () {
          de.prototype.setAdExtraParams.apply(this, arguments);
        },
      },
      { StreamingProtocol: On, TransportFormat: Cn, RequestMethod: fi }
    ),
    he = de,
    Bn = J,
    pi = O,
    kn = Bn.extend({
      constructor: function (t) {
        (this.plugin = t), (this.videos = {});
      },
      existsVideo: function (t) {
        return (t = t || "default"), !!this.videos[t];
      },
      getVideo: function (t) {
        if (((t = t || "default"), this.videos[t])) return this.videos[t];
      },
      setVideo: function (t) {
        this.videos[this._parseVideoKey(t.getVideoKey())] = t;
      },
      getVideoKeys: function () {
        return Object.keys(this.videos);
      },
      existsAdapter: function (t) {
        return (
          (t = t || "default"), !!(this.videos[t] && this.videos[t]._adapter)
        );
      },
      getAdapter: function (t) {
        if (((t = t || "default"), this.videos[t]))
          return this.videos[t].getAdapter();
      },
      setAdapter: function (t, e) {
        (e = e || "default"),
          this.videos[e] && this.videos[e].setAdapter(t, this.plugin);
      },
      getAdsAdapter: function (t) {
        if (((t = t || "default"), this.videos[t]))
          return this.videos[t].getAdsAdapter();
      },
      removeAdapter: function (t, e) {
        e = e || "default";
        try {
          this.videos[e] && this.videos[e].removeAdapter();
        } catch {
          pi.error("Is not possible to remove adapter for video: " + e);
        }
      },
      sendRequest: function (t, e, i, s, n, r, o, a) {
        (t = t || "default"),
          this.videos[t]
            ? this.videos._send(this._key, e, i, s, n, r, o, a)
            : pi.error("Can't send request for not existent video object");
      },
      updateAllOptions: function (t) {
        for (var e in this.videos)
          for (var i in t) this.videos[e].options[i] = t[i];
        t["adapters.templates"] &&
          (this.plugin._setAdapterTemplates(t["adapters.templates"]),
          this.updateAdapterTemplates(t["adapters.templates"]));
      },
      updatePingInterval: function (t) {
        for (var e in this.videos) this.videos[e]._ping.interval = t;
      },
      updateAdapterTemplates: function (t) {
        if (t && this.videos)
          for (var e in this.videos)
            this.videos[e]._adapter &&
              this.videos[e]._adapter.updateAdapterTemplates(t);
      },
      resetVideo: function (t) {
        (t = t || "default"), this.video[t] && this.video[t]._reset();
      },
      _parseVideoKey: function (t) {
        return t || "default";
      },
    }),
    xn = kn,
    Vn = k,
    ht = nt,
    Mn = Vn.extend({
      constructor: function () {
        this.reset();
      },
      reset: function () {
        (this.join = new ht()),
          (this.seek = new ht()),
          (this.pause = new ht()),
          (this.buffer = new ht()),
          (this.total = new ht()),
          (this.viewedMax = []);
      },
    }),
    Fn = Mn,
    Un = k,
    qn = Un.extend({
      constructor: function () {
        this.reset();
      },
      reset: function () {
        (this.isStarted = !1),
          (this.isJoined = !1),
          (this.isPaused = !1),
          (this.isSeeking = !1),
          (this.isBuffering = !1),
          (this.isVideoStateBuffering = !1),
          (this.isEnded = !1),
          (this.isStopped = !1),
          (this.lastQuartileSent = 0);
      },
    }),
    Wn = qn,
    Gn = k,
    Hn = rt,
    jn = nt,
    ct = Gn.extend(
      {
        constructor: function (t, e, i) {
          (this._adapter = t),
            (this._seekEnabled = e & ct.Type.SEEK),
            (this._bufferEnabled = e & ct.Type.BUFFER),
            (i = i || 800),
            (this._chrono = new jn()),
            (this._lastPlayhead = 0),
            i > 0 && (this._timer = new Hn(this.progress.bind(this), i));
        },
        start: function () {
          this.stop(), this.canBeUsed() && this._timer.start();
        },
        stop: function () {
          (this._lastPlayhead = 0), this._timer && this._timer.stop();
        },
        skipNextTick: function () {
          this._lastPlayhead = 0;
        },
        progress: function () {
          var t = this._chrono.stop();
          this._chrono.start();
          var e = t * ct.kBUFFER_THRESHOLD_RATIO,
            i = t * ct.kSEEK_THRESHOLD_RATIO;
          this._adapter.getPlayrate &&
            this._adapter.getPlayrate() &&
            this._adapter.getPlayrate() !== 1 &&
            ((e *= this._adapter.getPlayrate()),
            (i *= this._adapter.getPlayrate()));
          var s = this._getPlayhead(),
            n = Math.abs(this._lastPlayhead - s) * 1e3;
          n < e
            ? this._bufferEnabled &&
              this._lastPlayhead > 0 &&
              !this._adapter.flags.isPaused &&
              !this._adapter.flags.isSeeking &&
              this._adapter.fireBufferBegin(null, !1, "playheadMonitor")
            : n > i
            ? this._seekEnabled &&
              this._lastPlayhead > 0 &&
              this._adapter.fireSeekBegin(null, !1, "playheadMonitor")
            : (this._seekEnabled &&
                this._adapter.fireSeekEnd(null, "playheadMonitor"),
              this._bufferEnabled &&
                this._adapter.fireBufferEnd(null, "playheadMonitor")),
            (this._lastPlayhead = s);
        },
        canBeUsed: function () {
          var t = this._adapter.getVideo(),
            e = this._adapter.getPlugin();
          return e &&
            e.getPlayheadMonitorEnabled() &&
            (this._seekEnabled || this._bufferEnabled)
            ? t && t.getIsLive()
              ? !e.options["content.isLive.noMonitor"]
              : !0
            : !1;
        },
        _getPlayhead: function () {
          return this._adapter.getPlayhead();
        },
      },
      {
        Type: { NONE: 0, BUFFER: 1, SEEK: 2 },
        kBUFFER_THRESHOLD_RATIO: 0.5,
        kSEEK_THRESHOLD_RATIO: 2,
      }
    ),
    gi = ct,
    $n = k,
    Jn = O,
    Yn = $n.extend({
      constructor: function (t, e) {
        (this._adapter = t),
          (this._videoElement = t.getVideoObject()),
          (this._startedStateCheck = !1),
          (this._intervalCheckId = null),
          (this._intervalMilliseconds = e || 300);
      },
      start: function () {
        var t = this._adapter.plugin;
        t &&
          t.getReadyStateMonitorEnabled() &&
          this._videoElement &&
          !this._startedStateCheck &&
          ((this._intervalCheckId = setInterval(
            this.checkStateProperty.bind(this),
            this._intervalMilliseconds
          )),
          (this._startedStateCheck = !0));
      },
      stop: function () {
        try {
          this._startedStateCheck &&
            this._intervalCheckId &&
            clearInterval(this._intervalCheckId),
            (this._intervalCheckId = null),
            (this._startedStateCheck = !1);
        } catch {
          Jn.error("Produced error stopping the network monitor");
        }
      },
      checkStateProperty: function (t) {
        try {
          this._videoElement &&
            this._adapter &&
            this._videoElement.readyState &&
            (this._videoElement.readyState > 3 && !this._adapter.flags.isSeeking
              ? this._adapter.flags.isBuffering
                ? this.fireBufferEnd({}, "stateMonitor")
                : this._adapter.flags.isJoined ||
                  this.fireJoin({}, "stateMonitor")
              : this._videoElement.readyState < 4 &&
                !this._adapter.flags.isBuffering &&
                this.fireBufferBegin({}, !1, "stateMonitor", !0));
        } catch {}
      },
    }),
    Xn = Yn,
    zn = function (t) {
      function e(b, y) {
        return (b << y) | (b >>> (32 - y));
      }
      function i(b, y) {
        var I, B, M, U, V;
        return (
          (M = b & 2147483648),
          (U = y & 2147483648),
          (I = b & 1073741824),
          (B = y & 1073741824),
          (V = (b & 1073741823) + (y & 1073741823)),
          I & B
            ? V ^ 2147483648 ^ M ^ U
            : I | B
            ? V & 1073741824
              ? V ^ 3221225472 ^ M ^ U
              : V ^ 1073741824 ^ M ^ U
            : V ^ M ^ U
        );
      }
      function s(b, y, I) {
        return (b & y) | (~b & I);
      }
      function n(b, y, I) {
        return (b & I) | (y & ~I);
      }
      function r(b, y, I) {
        return b ^ y ^ I;
      }
      function o(b, y, I) {
        return y ^ (b | ~I);
      }
      function a(b, y, I, B, M, U, V) {
        return (b = i(b, i(i(s(y, I, B), M), V))), i(e(b, U), y);
      }
      function l(b, y, I, B, M, U, V) {
        return (b = i(b, i(i(n(y, I, B), M), V))), i(e(b, U), y);
      }
      function v(b, y, I, B, M, U, V) {
        return (b = i(b, i(i(r(y, I, B), M), V))), i(e(b, U), y);
      }
      function T(b, y, I, B, M, U, V) {
        return (b = i(b, i(i(o(y, I, B), M), V))), i(e(b, U), y);
      }
      function d(b) {
        for (
          var y,
            I = b.length,
            B = I + 8,
            M = (B - (B % 64)) / 64,
            U = (M + 1) * 16,
            V = Array(U - 1),
            xt = 0,
            tt = 0;
          tt < I;

        )
          (y = (tt - (tt % 4)) / 4),
            (xt = (tt % 4) * 8),
            (V[y] = V[y] | (b.charCodeAt(tt) << xt)),
            tt++;
        return (
          (y = (tt - (tt % 4)) / 4),
          (xt = (tt % 4) * 8),
          (V[y] = V[y] | (128 << xt)),
          (V[U - 2] = I << 3),
          (V[U - 1] = I >>> 29),
          V
        );
      }
      function A(b) {
        var y = "",
          I = "",
          B,
          M;
        for (M = 0; M <= 3; M++)
          (B = (b >>> (M * 8)) & 255),
            (I = "0" + B.toString(16)),
            (y = y + I.substr(I.length - 2, 2));
        return y;
      }
      function N(b) {
        b = b.replace(/rn/g, "n");
        for (var y = "", I = 0; I < b.length; I++) {
          var B = b.charCodeAt(I);
          B < 128
            ? (y += String.fromCharCode(B))
            : B > 127 && B < 2048
            ? ((y += String.fromCharCode((B >> 6) | 192)),
              (y += String.fromCharCode((B & 63) | 128)))
            : ((y += String.fromCharCode((B >> 12) | 224)),
              (y += String.fromCharCode(((B >> 6) & 63) | 128)),
              (y += String.fromCharCode((B & 63) | 128)));
        }
        return y;
      }
      var g = Array(),
        u,
        S,
        m,
        E,
        L,
        c,
        h,
        f,
        p,
        R = 7,
        _ = 12,
        w = 17,
        F = 22,
        bt = 5,
        Lt = 9,
        wt = 14,
        Nt = 20,
        Dt = 4,
        Pt = 11,
        It = 16,
        Rt = 23,
        Ct = 6,
        Ot = 10,
        Bt = 15,
        kt = 21;
      for (
        t = N(t),
          g = d(t),
          c = 1732584193,
          h = 4023233417,
          f = 2562383102,
          p = 271733878,
          u = 0;
        u < g.length;
        u += 16
      )
        (S = c),
          (m = h),
          (E = f),
          (L = p),
          (c = a(c, h, f, p, g[u + 0], R, 3614090360)),
          (p = a(p, c, h, f, g[u + 1], _, 3905402710)),
          (f = a(f, p, c, h, g[u + 2], w, 606105819)),
          (h = a(h, f, p, c, g[u + 3], F, 3250441966)),
          (c = a(c, h, f, p, g[u + 4], R, 4118548399)),
          (p = a(p, c, h, f, g[u + 5], _, 1200080426)),
          (f = a(f, p, c, h, g[u + 6], w, 2821735955)),
          (h = a(h, f, p, c, g[u + 7], F, 4249261313)),
          (c = a(c, h, f, p, g[u + 8], R, 1770035416)),
          (p = a(p, c, h, f, g[u + 9], _, 2336552879)),
          (f = a(f, p, c, h, g[u + 10], w, 4294925233)),
          (h = a(h, f, p, c, g[u + 11], F, 2304563134)),
          (c = a(c, h, f, p, g[u + 12], R, 1804603682)),
          (p = a(p, c, h, f, g[u + 13], _, 4254626195)),
          (f = a(f, p, c, h, g[u + 14], w, 2792965006)),
          (h = a(h, f, p, c, g[u + 15], F, 1236535329)),
          (c = l(c, h, f, p, g[u + 1], bt, 4129170786)),
          (p = l(p, c, h, f, g[u + 6], Lt, 3225465664)),
          (f = l(f, p, c, h, g[u + 11], wt, 643717713)),
          (h = l(h, f, p, c, g[u + 0], Nt, 3921069994)),
          (c = l(c, h, f, p, g[u + 5], bt, 3593408605)),
          (p = l(p, c, h, f, g[u + 10], Lt, 38016083)),
          (f = l(f, p, c, h, g[u + 15], wt, 3634488961)),
          (h = l(h, f, p, c, g[u + 4], Nt, 3889429448)),
          (c = l(c, h, f, p, g[u + 9], bt, 568446438)),
          (p = l(p, c, h, f, g[u + 14], Lt, 3275163606)),
          (f = l(f, p, c, h, g[u + 3], wt, 4107603335)),
          (h = l(h, f, p, c, g[u + 8], Nt, 1163531501)),
          (c = l(c, h, f, p, g[u + 13], bt, 2850285829)),
          (p = l(p, c, h, f, g[u + 2], Lt, 4243563512)),
          (f = l(f, p, c, h, g[u + 7], wt, 1735328473)),
          (h = l(h, f, p, c, g[u + 12], Nt, 2368359562)),
          (c = v(c, h, f, p, g[u + 5], Dt, 4294588738)),
          (p = v(p, c, h, f, g[u + 8], Pt, 2272392833)),
          (f = v(f, p, c, h, g[u + 11], It, 1839030562)),
          (h = v(h, f, p, c, g[u + 14], Rt, 4259657740)),
          (c = v(c, h, f, p, g[u + 1], Dt, 2763975236)),
          (p = v(p, c, h, f, g[u + 4], Pt, 1272893353)),
          (f = v(f, p, c, h, g[u + 7], It, 4139469664)),
          (h = v(h, f, p, c, g[u + 10], Rt, 3200236656)),
          (c = v(c, h, f, p, g[u + 13], Dt, 681279174)),
          (p = v(p, c, h, f, g[u + 0], Pt, 3936430074)),
          (f = v(f, p, c, h, g[u + 3], It, 3572445317)),
          (h = v(h, f, p, c, g[u + 6], Rt, 76029189)),
          (c = v(c, h, f, p, g[u + 9], Dt, 3654602809)),
          (p = v(p, c, h, f, g[u + 12], Pt, 3873151461)),
          (f = v(f, p, c, h, g[u + 15], It, 530742520)),
          (h = v(h, f, p, c, g[u + 2], Rt, 3299628645)),
          (c = T(c, h, f, p, g[u + 0], Ct, 4096336452)),
          (p = T(p, c, h, f, g[u + 7], Ot, 1126891415)),
          (f = T(f, p, c, h, g[u + 14], Bt, 2878612391)),
          (h = T(h, f, p, c, g[u + 5], kt, 4237533241)),
          (c = T(c, h, f, p, g[u + 12], Ct, 1700485571)),
          (p = T(p, c, h, f, g[u + 3], Ot, 2399980690)),
          (f = T(f, p, c, h, g[u + 10], Bt, 4293915773)),
          (h = T(h, f, p, c, g[u + 1], kt, 2240044497)),
          (c = T(c, h, f, p, g[u + 8], Ct, 1873313359)),
          (p = T(p, c, h, f, g[u + 15], Ot, 4264355552)),
          (f = T(f, p, c, h, g[u + 6], Bt, 2734768916)),
          (h = T(h, f, p, c, g[u + 13], kt, 1309151649)),
          (c = T(c, h, f, p, g[u + 4], Ct, 4149444226)),
          (p = T(p, c, h, f, g[u + 11], Ot, 3174756917)),
          (f = T(f, p, c, h, g[u + 2], Bt, 718787259)),
          (h = T(h, f, p, c, g[u + 9], kt, 3951481745)),
          (c = i(c, S)),
          (h = i(h, m)),
          (f = i(f, E)),
          (p = i(p, L));
      var ia = A(c) + A(h) + A(f) + A(p);
      return ia.toLowerCase();
    },
    mi = zn,
    ce,
    vi;
  function Qn() {
    if (vi) return ce;
    vi = 1;
    var t = gt,
      e = nt,
      i = {
        getPosition: function () {
          return null;
        },
        getGivenBreaks: function () {
          return null;
        },
        getExpectedBreaks: function () {
          return null;
        },
        getExpectedPattern: function () {
          return null;
        },
        getBreaksTime: function () {
          return null;
        },
        getGivenAds: function () {
          return null;
        },
        getExpectedAds: function () {
          return null;
        },
        getIsVisible: function () {
          return !0;
        },
        getAudioEnabled: function () {
          return null;
        },
        getIsSkippable: function () {
          return null;
        },
        getIsFullscreen: function () {
          return null;
        },
        getCampaign: function () {
          return null;
        },
        getCreativeId: function () {
          return null;
        },
        getProvider: function () {
          return null;
        },
        getAdInsertionType: function () {
          return null;
        },
        fireClick: function (s) {
          typeof s == "string" && (s = { url: s }),
            this.emit(t.Event.CLICK, { params: s });
        },
        fireQuartile: function (s) {
          this.flags.isStarted &&
            typeof s == "number" &&
            s > this.flags.lastQuartileSent &&
            s < 4 &&
            (this.flags.lastQuartileSent++,
            this.emit(t.Event.QUARTILE, { params: { quartile: s } }));
        },
        startChronoView: function () {
          if (
            this.getIsVisible() &&
            this.plugin.backgroundDetector &&
            !this.plugin.backgroundDetector.isInBackground
          ) {
            var s = this.chronos.viewedMax;
            (s.length === 0 || s[s.length - 1].stopTime !== 0) &&
              (s.push(new e()), s[s.length - 1].start());
          }
        },
        stopChronoView: function () {
          var s = this.chronos.viewedMax;
          s[0] &&
            s.length > 0 &&
            s[s.length - 1].stopTime === 0 &&
            s[s.length - 1].stop();
        },
        fireManifest: function (s, n) {
          var r = { params: s };
          typeof s == "string" &&
            (r = { params: { errorType: s, errorMessage: n } }),
            this.emit(t.Event.MANIFEST, r);
        },
        fireSkip: function (s) {
          s === void 0 && (s = {}), (s.skipped = !0), this.fireStop(s);
        },
        fireBreakStart: function (s) {
          this.emit(t.Event.PODSTART, { params: s });
        },
        fireBreakStop: function (s) {
          this.emit(t.Event.PODSTOP, { params: s });
        },
      };
    return (ce = i), ce;
  }
  var fe, _i;
  function Zn() {
    if (_i) return fe;
    _i = 1;
    var t = gt,
      e = O,
      i = {
        getPlayrate: function () {
          return this.flags.isPaused ? 0 : 1;
        },
        getFramesPerSecond: function () {
          return null;
        },
        getDroppedFrames: function () {
          return null;
        },
        getThroughput: function () {
          return null;
        },
        getRendition: function () {
          return null;
        },
        getTitle2: function () {
          return null;
        },
        getIsLive: function () {
          return null;
        },
        getCdnTraffic: function () {
          return null;
        },
        getP2PTraffic: function () {
          return null;
        },
        getUploadTraffic: function () {
          return null;
        },
        getIsP2PEnabled: function () {
          return null;
        },
        getSegmentDuration: function () {
          return null;
        },
        getHouseholdId: function () {
          return null;
        },
        getLatency: function () {
          return null;
        },
        getPacketLoss: function () {
          return null;
        },
        getPacketSent: function () {
          return null;
        },
        getMetrics: function () {
          return null;
        },
        getAudioCodec: function () {
          return null;
        },
        getVideoCodec: function () {
          return null;
        },
        getURLToParse: function () {
          return null;
        },
        fireSeekBegin: function (s, n, r) {
          if (
            (this._discardFalseBuffers(),
            this.getVideo() &&
              this.getVideo().getIsLive() &&
              this.plugin.options["content.isLive.noSeek"])
          )
            return null;
          if (this.flags.isJoined && !this.flags.isSeeking) {
            if (this.flags.isBuffering)
              if (n !== !1)
                e.notice("Converting current buffer to seek"),
                  (this.chronos.seek = this.chronos.buffer.clone()),
                  this.chronos.buffer.reset(),
                  (this.flags.isBuffering = !1);
              else return;
            else this.chronos.seek.start();
            try {
              (this.fireEventsStruct.seek = []),
                r
                  ? this.fireEventsStruct.seek.push(r)
                  : this.fireEventsStruct.seek.push("undefinedEvent");
            } catch {}
            (this.flags.isSeeking = !0),
              this.emit(t.Event.SEEK_BEGIN, { params: s });
          }
        },
        fireSeekEnd: function (s, n) {
          if (
            this.getVideo() &&
            this.getVideo().getIsLive() &&
            this.plugin.options["content.isLive.noSeek"]
          )
            return null;
          if (this.flags.isJoined && this.flags.isSeeking) {
            try {
              n
                ? this.fireEventsStruct.seek.push(n)
                : this.fireEventsStruct.seek.push("undefinedEvent");
            } catch {}
            (s = s || {}),
              (s.triggeredEvents = this.fireEventsStruct.seek),
              this.cancelSeek(),
              this.emit(t.Event.SEEK_END, { params: s });
            try {
              this.chronos.pause.getDeltaTime(!1) > 0 &&
                this.chronos.pause.resume();
            } catch {}
          }
        },
        cancelSeek: function (s) {
          this.flags.isJoined &&
            this.flags.isSeeking &&
            ((this.flags.isSeeking = !1),
            this.chronos.seek.stop(),
            this.monitor && this.monitor.skipNextTick());
        },
        fireEvent: function (s, n, r, o) {
          var a = o || {};
          (a.name = s || ""),
            (a.dimensions = n || {}),
            (a.values = r || {}),
            this.emit(t.Event.VIDEO_EVENT, { params: a });
        },
      };
    return (fe = i), fe;
  }
  var pe, Si;
  function ft() {
    if (Si) return pe;
    Si = 1;
    var t = J,
      e = O,
      i = q,
      s = pt,
      n = Fn,
      r = Wn,
      o = gi,
      a = Xn,
      l = gt,
      v = mi,
      T = t.extend(
        {
          constructor: function (d, A, N, g, u, S) {
            (this._key = d),
              (this._setAdapter = !1),
              (this._npawVideo = A),
              (this._loadedAdapterImplementation = !1),
              (this.flags = new r()),
              (this.chronos = new n()),
              (this.fireEventsStruct = {}),
              (this.fireEventsStruct.buffer = []),
              (this.fireEventsStruct.seek = []),
              (this.monitor = null),
              (this.plugin = N),
              this.player && this.unregisterListeners(),
              (this.player = null),
              (this._isAdsAdapter = null),
              (this.log = O),
              this.log.loadLevelFromUrl(),
              (this.npaw = Xi()),
              this.setPlayer(u);
            var m,
              E = JSON.parse(S);
            if (
              ((this._adapterName = this.getAdapterName(E)),
              this.plugin &&
                this.plugin.canOverwriteAdapters() &&
                ((m = this._getAdapterFromTemplates(this._adapterName)),
                m && e.notice("Overwrite Adapter: " + this._adapterName)),
              !m)
            )
              if (!S) m = this._getAdapterFromTemplates(this._adapterName);
              else
                try {
                  m = E;
                } catch {
                  e.warn(
                    "Problem parsing adapter json code (to object conversion)"
                  );
                }
            (this.tag = this.player),
              m && (this.evalAdapterJson(m, !1), this.registerListeners()),
              e.notice(
                "Adapter " + this.getVersion() + " with Lib " + s + " is ready."
              );
          },
          _updatePlayer: function (d) {
            this.player && this.unregisterListeners(),
              (this.player = null),
              this.setPlayer(d),
              (this.tag = this.player),
              this.registerListeners();
          },
          isSetAdapter: function () {
            return this._setAdapter;
          },
          getVideo: function () {
            return this._npawVideo;
          },
          getRequestBuilder: function () {
            return this._npawVideo && this._npawVideo.requestBuilder
              ? this._npawVideo.requestBuilder
              : null;
          },
          getPlugin: function () {
            return this.plugin;
          },
          getNpawUtils: function () {
            return this.plugin.utils;
          },
          getNpawReference: function () {
            return this.npaw;
          },
          getLog: function () {
            return this.log;
          },
          isStarted: function () {
            return this.flags ? this.flags.isStarted : !1;
          },
          getAdapterClass: function (d) {
            if (this._npawVideo) {
              var A = this._npawVideo.getAdapterClasses() || {};
              if (A[d]) return A[d];
            }
            return null;
          },
          getAdapterName: function (d) {
            if (d && d["adapter,getVersion"])
              try {
                var A = window.Function(d["adapter,getVersion"]);
                return A();
              } catch {}
            return "undefined";
          },
          getAdapterClasses: function () {
            return this._npawVideo
              ? this._npawVideo.getAdapterClasses() || {}
              : null;
          },
          updateAdapterTemplates: function (d) {
            if (this.plugin.canOverwriteAdapters()) {
              var A = this._getAdapterFromTemplates(this._adapterName, d);
              A && (this.evalAdapterJson(A, !0), this.registerListeners());
            }
          },
          _getAdapterFromTemplates: function (d, A) {
            var N = null;
            A || (A = this.plugin.adapterTemplates);
            try {
              d &&
                A &&
                A[d.toLowerCase()] &&
                (N = JSON.parse(A[d.toLowerCase()]));
            } catch {
              e.warn("Adapter " + d + " not found on repository");
            }
            return N;
          },
          evalAdapterJson: function (d, A) {
            A = A || !1;
            var N = 0,
              g = 0,
              u = "";
            try {
              for (var S in d) {
                var m = S.split(","),
                  E = m.shift(),
                  L = m.shift();
                u = L;
                var c = null;
                if (m && m.length >= 1) {
                  var h = m;
                  c = window.Function(h, d[S]);
                } else c = window.Function(d[S]);
                c &&
                  (E.toLowerCase() === "adapter"
                    ? ((this[L] = c), N++)
                    : E.indexOf(".adapter") > 0
                    ? ((E = E.replace(".adapter", "")),
                      this.getAdapterClasses()[E] ||
                        (this.getAdapterClasses()[E] = new T(
                          this._key,
                          this._npawVideo,
                          this.getPlugin(),
                          null,
                          this.player,
                          null,
                          null,
                          {}
                        )),
                      (this.getAdapterClasses()[E][L] = c),
                      g++)
                    : (this.getAdapterClasses()[E] ||
                        ((this.getAdapterClasses()[E] = {}),
                        (this.getAdapterClasses()[E].constructor =
                          function () {}),
                        (this.getAdapterClasses()[E].plugin = this.plugin),
                        (this.getAdapterClasses()[E].getNpawUtils =
                          function () {
                            return this.plugin.utils;
                          })),
                      (this.getAdapterClasses()[E][L] = c),
                      g++));
              }
              (this._loadedAdapterImplementation = !0),
                (this._adapterEvaluatedCode = d);
              try {
                typeof d == "string"
                  ? (this.adapterHash = v(d.trim()))
                  : (this.adapterHash = v(JSON.stringify(d).trim()));
              } catch {
                this.adapterHash = "Undefined";
              }
              e.notice(
                "[" +
                  this.getAdapterKey() +
                  "] Loaded adapter (" +
                  this.getVersion() +
                  ") (Hash " +
                  this.adapterHash +
                  ") implementation from JSON; From templates: " +
                  A +
                  "; Integrated adapter methods: " +
                  N +
                  ", external methods: " +
                  g
              );
            } catch {
              e.error(
                "Can't be evaluated adapter json correctly; From templates: " +
                  A +
                  ", Last method evaluated: " +
                  u
              );
            }
          },
          getAdapterKey: function () {
            return this._key;
          },
          setPlayer: function (d) {
            typeof d == "string" && typeof document < "u"
              ? (this.player = document.getElementById(d))
              : (this.player = d);
          },
          registerListeners: function () {},
          unregisterListeners: function () {},
          dispose: function () {
            try {
              this.stopMonitor(),
                this.stopReadyStateMonitor(),
                this.fireStop(),
                this.unregisterListeners(),
                (this.player = null),
                (this.tag = null);
            } catch {
              e.error("Can't process dispose for video " + this._key);
            }
          },
          monitorPlayhead: function (d, A, N) {
            this.stopMonitor();
            var g = 0;
            d && (g |= o.Type.BUFFER),
              A && (g |= o.Type.SEEK),
              !this.monitor || !this.monitor._timer.isRunning
                ? (this.monitor = new o(this, g, N))
                : this.monitor.skipNextTick();
          },
          stopMonitor: function () {
            this.monitor && this.monitor.stop();
          },
          monitorReadyState: function (d) {
            this.stopReadyStateMonitor(), (this.stateMonitor = new a(this, d));
          },
          startReadyStateMonitor: function () {
            this.stateMonitor && this.stateMonitor.start();
          },
          stopReadyStateMonitor: function () {
            this.stateMonitor && this.stateMonitor.stop();
          },
          checkReadyState: function (d, A) {
            try {
              this.plugin &&
                this.plugin.getReadyStateMonitorEnabled() &&
                d &&
                (d > 3 && !this.flags.isSeeking
                  ? this.flags.isBuffering
                    ? this.fireBufferEnd({}, A + "-readyState")
                    : this.flags.isJoined ||
                      this.fireJoin({}, A + "-readyState")
                  : d < 4 &&
                    !this.flags.isBuffering &&
                    this.fireBufferBegin({}, !1, A + "-readyState", !0));
            } catch {
              e.error("Can't check readyState property correctly");
            }
          },
          getPlayhead: function () {
            return null;
          },
          getDuration: function () {
            return null;
          },
          getBitrate: function () {
            return null;
          },
          getTotalBytes: function () {
            return null;
          },
          supportTotalBytes: function () {
            return !1;
          },
          getTitle: function () {
            return null;
          },
          getResource: function () {
            return null;
          },
          getPlayerVersion: function () {
            return null;
          },
          getPlayerName: function () {
            return null;
          },
          getVersion: function () {
            return s + "-generic-js";
          },
          getVideoObject: function () {
            return null;
          },
          checkExistsPlayer: function () {
            return !0;
          },
          checkExistsObjectOnPage: function (d) {
            return i.elementIsInPage(d);
          },
          fireInit: function (d, A) {
            if (
              this._npawVideo &&
              this._npawVideo.controlPlayerExists() &&
              !this.checkExistsPlayer()
            )
              return (
                e.warn(
                  "Cannot fire init event because player not exists on the document"
                ),
                null
              );
            this.adapterHash &&
              ((d = d || {}), (d.pluginHash = this.adapterHash)),
              this._npawVideo && this._npawVideo.fireInit(d, A);
          },
          fireStart: function (d, A) {
            if (
              this._npawVideo &&
              this._npawVideo.controlPlayerExists() &&
              !this.checkExistsPlayer()
            )
              return (
                e.warn(
                  "Cannot fire start event because player not exists on the document"
                ),
                null
              );
            if (
              this.plugin &&
              this.plugin.backgroundDetector &&
              this.plugin.backgroundDetector.canBlockStartCalls()
            )
              return null;
            this.flags.isStarted ||
              ((this.flags.isStarted = !0),
              this.chronos.total.start(),
              this.chronos.join.start(),
              A && ((d = d || {}), (d.triggeredEvents = [A])),
              this.adapterHash &&
                ((d = d || {}), (d.pluginHash = this.adapterHash)),
              this.startReadyStateMonitor(),
              this.emit(l.Event.START, { params: d }),
              this.plugin._logSetAdapterEvent(this._adapterEvaluatedCode));
          },
          fireJoin: function (d, A) {
            !this.flags.isJoined &&
              !this.flags.isStarted &&
              !this._isAds() &&
              this._npawVideo &&
              this._npawVideo.isInitiated &&
              this.fireStart(),
              this.flags.isStarted &&
                !this.flags.isJoined &&
                ((this.flags.isStarted = !0),
                this.monitor && this.monitor.start(),
                (this.flags.isJoined = !0),
                this.chronos.join.stop(),
                A && ((d = d || {}), (d.triggeredEvents = [A])),
                this.emit(l.Event.JOIN, { params: d }));
          },
          firePause: function (d, A) {
            this._discardFalseBuffers(),
              this.flags.isBuffering &&
                this.fireBufferEnd(null, "firePauseCall"),
              this.flags.isJoined &&
                !this.flags.isPaused &&
                ((this.flags.isPaused = !0),
                this.chronos.pause.start(),
                A && ((d = d || {}), (d.triggeredEvents = [A])),
                this.emit(l.Event.PAUSE, { params: d }));
          },
          fireResume: function (d, A) {
            if (
              (this._discardFalseBuffers(),
              this.flags.isJoined && this.flags.isPaused)
            ) {
              this.flags.isPaused = !1;
              try {
                this._npawVideo.ignorePauseSmallEvents() &&
                this.chronos.pause.getDeltaTime(!1) <= 50
                  ? this.chronos.pause.reset()
                  : this.chronos.pause.stop();
              } catch {
                this.chronos.pause.stop();
              }
              this.monitor && this.monitor.skipNextTick(),
                A && ((d = d || {}), (d.triggeredEvents = [A])),
                this.emit(l.Event.RESUME, { params: d });
            }
          },
          fireBufferBegin: function (d, A, N, g) {
            if (
              ((g = g || !1), this.flags.isJoined && !this.flags.isBuffering)
            ) {
              if (this.flags.isSeeking)
                if (A)
                  e.notice("Converting current buffer to seek"),
                    (this.chronos.buffer = this.chronos.seek.clone()),
                    this.chronos.seek.reset(),
                    (this.flags.isSeeking = !1);
                else return;
              else this.chronos.buffer.start();
              try {
                (this.fireEventsStruct.buffer = []),
                  N
                    ? this.fireEventsStruct.buffer.push(N)
                    : this.fireEventsStruct.buffer.push("undefinedEvent");
              } catch {}
              (this.flags.isBuffering = !0),
                (this.flags.isVideoStateBuffering = g),
                this.emit(l.Event.BUFFER_BEGIN, { params: d });
            }
          },
          fireBufferEnd: function (d, A) {
            if (this.flags.isJoined && this.flags.isBuffering) {
              try {
                A
                  ? this.fireEventsStruct.buffer.push(A)
                  : this.fireEventsStruct.buffer.push("undefinedEvent");
              } catch {}
              (d = d || {}), (d.triggeredEvents = this.fireEventsStruct.buffer);
              try {
                var N = this.getRequestBuilder().getChangedEntities([
                  this,
                  this._npawVideo,
                  this.plugin,
                ]);
                N && (d.entites = N);
              } catch {}
              this.cancelBuffer(), this.emit(l.Event.BUFFER_END, { params: d });
              try {
                this.chronos.pause.getDeltaTime(!1) > 0 &&
                  this.chronos.pause.resume();
              } catch {}
            }
          },
          _discardFalseBuffers: function () {
            try {
              this.flags.isBuffering &&
                this.flags.isVideoStateBuffering &&
                this._getDeltaBufferTime() <= 100 &&
                this.cancelBuffer();
            } catch {}
          },
          cancelBuffer: function (d) {
            this.flags.isJoined &&
              this.flags.isBuffering &&
              ((this.flags.isBuffering = !1),
              (this.flags.isVideoStateBuffering = !1),
              this.chronos.buffer.stop(),
              this.monitor && this.monitor.skipNextTick());
          },
          _getDeltaBufferTime: function () {
            return this.chronos && this.chronos.buffer
              ? this.chronos.buffer.getDeltaTime(!1)
              : 0;
          },
          fireStop: function (d, A) {
            try {
              if (
                (this._isAds() || this._npawVideo._isStopReady()) &&
                ((this._isAds() && this.flags.isStarted) ||
                  (!this._isAds() &&
                    (this.flags.isStarted || this._npawVideo.isInitiated)))
              ) {
                this.stopMonitor(),
                  this.stopReadyStateMonitor(),
                  this.flags.reset(),
                  this.chronos.total.stop(),
                  this.chronos.join.reset(),
                  this.chronos.pause.stop(),
                  this.chronos.buffer.stop(),
                  this.chronos.seek.stop(),
                  A && ((d = d || {}), (d.triggeredEvents = [A]));
                try {
                  var N = this.getRequestBuilder().getChangedEntities([
                    this,
                    this._npawVideo,
                    this.plugin,
                  ]);
                  N && ((d = d || {}), (d.entites = N));
                } catch {}
                this.emit(l.Event.STOP, { params: d }),
                  this.chronos.pause.reset(),
                  this.chronos.buffer.reset(),
                  this.chronos.seek.reset(),
                  this.chronos.viewedMax.splice(
                    0,
                    this.chronos.viewedMax.length
                  );
              }
            } catch {
              e.warn("Issue firing Stop event");
            }
          },
          firePlayerLog: function (d, A) {
            if (this._npawVideo) {
              var N = { logs: A, logAction: d, logType: "playerEvent" };
              this._npawVideo.firePlayerLog(N);
            }
          },
          setIsAds: function (d) {
            this._isAdsAdapter = d;
          },
          _isAds: function () {
            return this._isAdsAdapter;
          },
          fireCasted: function (d, A) {
            d || (d = {}), (d.casted = !0), this.fireStop(d, A);
          },
          fireError: function (d, A, N, g, u, S) {
            var m = i.buildErrorParams(d, A, N);
            m.code && delete m.code,
              u && ((m = m || {}), (m.triggeredEvents = [u]));
            try {
              var E = this.getRequestBuilder().getChangedEntities([
                this,
                this._npawVideo,
                this.plugin,
              ]);
              E && ((m = m || {}), (m.entites = E));
            } catch {}
            var L = this._npawVideo ? this._npawVideo.options : {};
            (typeof m.errorCode < "u" &&
              L["errors.ignore"] &&
              L["errors.ignore"].indexOf(m.errorCode.toString()) > -1) ||
              ((S = S || !1),
              (S ||
                (typeof m.errorCode < "u" &&
                  L["errors.fatal"] &&
                  L["errors.fatal"].indexOf(m.errorCode.toString()) > -1)) &&
                this.flags.isJoined &&
                ((m = m || {}), (m.errorType = "fatal")),
              this.emit(l.Event.ERROR, { params: m }));
          },
          fireFatalError: function (d, A, N, g, u) {
            this.fireError(d, A, N, g, u, !0);
          },
        },
        { Event: l.Event }
      );
    return (
      i.assign(T.prototype, Qn()), i.assign(T.prototype, Zn()), (pe = T), pe
    );
  }
  var Kn = k,
    tr = O,
    ge = [
      "accountCode",
      "username",
      "anonymousUser",
      "rendition",
      "deviceInfo",
      "player",
      "title",
      "title2",
      "live",
      "segmentDuration",
      "mediaDuration",
      "mediaResource",
      "parsedResource",
      "transactionCode",
      "properties",
      "cdn",
      "playerVersion",
      "param1",
      "param2",
      "param3",
      "param4",
      "param5",
      "param6",
      "param7",
      "param8",
      "param9",
      "param10",
      "param11",
      "param12",
      "param13",
      "param14",
      "param15",
      "param16",
      "param17",
      "param18",
      "param19",
      "param20",
      "dimensions",
      "playerStartupTime",
      "obfuscateIp",
      "privacyProtocol",
      "p2pEnabled",
      "pluginVersion",
      "pluginInfo",
      "isp",
      "connectionType",
      "ip",
      "referer",
      "userType",
      "streamingProtocol",
      "transportFormat",
      "householdId",
      "adsBlocked",
      "adsExpected",
      "deviceUUID",
      "libVersion",
      "nodeHost",
      "nodeType",
      "appName",
      "appReleaseVersion",
      "package",
      "saga",
      "tvshow",
      "season",
      "titleEpisode",
      "channel",
      "imdbID",
      "gracenoteID",
      "contentType",
      "genre",
      "contentLanguage",
      "subtitles",
      "cost",
      "price",
      "playbackType",
      "email",
      "drm",
      "videoCodec",
      "audioCodec",
      "codecSettings",
      "codecProfile",
      "containerFormat",
      "contentId",
      "contractedResolution",
      "linkedViewId",
      "edid",
      "cdnBalancerResponseUUID",
      "cdnBalancerProfile",
      "cdnBalancerBucket",
      "utmSource",
      "utmMedium",
      "utmCampaign",
      "utmTerm",
      "utmContent",
    ],
    me = [
      "player",
      "playhead",
      "adTitle",
      "position",
      "adDuration",
      "adCampaign",
      "adCreativeId",
      "adProvider",
      "adResource",
      "adPlayerVersion",
      "adProperties",
      "adAdapterVersion",
      "adInsertionType",
      "extraparam1",
      "extraparam2",
      "extraparam3",
      "extraparam4",
      "extraparam5",
      "extraparam6",
      "extraparam7",
      "extraparam8",
      "extraparam9",
      "extraparam10",
      "fullscreen",
      "audio",
      "skippable",
      "adNumber",
      "adNumberInBreak",
      "breakNumber",
    ],
    ot = Kn.extend(
      {
        constructor: function () {
          this.lastSent = {};
        },
        fetchParams: function (t, e, i, s) {
          (t = t || {}), (e = e || []);
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (!t[r]) {
              var o = ot.getters[r],
                a = !1;
              for (var l in s)
                if (s[l] && s[l][o]) {
                  var v = s[l][o]();
                  v !== null &&
                    (!i || this.lastSent[r] !== v) &&
                    ((t[r] = v), (this.lastSent[r] = v)),
                    (a = !0);
                  break;
                }
              a || tr.warn("Trying to call undefined getter " + r + ":" + o);
            }
          }
          return t;
        },
        getGetters: function () {
          return ot.getters;
        },
        buildBody: function (t, e) {
          var i = null;
          return this.fetchParams(i, ot.bodyParams[t], !1, e);
        },
        buildParams: function (t, e, i) {
          return (
            (t = t || {}),
            this.fetchParams(t, ot.params[e], !1, i),
            this.fetchParams(t, ot.differentParams[e], !0, i),
            t
          );
        },
        getChangedEntities: function (t) {
          return this.fetchParams({}, ot.differentParams.entities, !0, t);
        },
      },
      {
        params: {
          "/data": ["system", "pluginVersion", "requestNumber", "username"],
          "/adapters": ["system", "pluginVersion", "requestNumber"],
          "/configuration": [
            "system",
            "pluginVersion",
            "requestNumber",
            "appName",
            "appReleaseVersion",
          ],
          "/infinity/session/pluginLogs": ["logAction", "logType"],
          "/infinity/video/pluginLogs": ["logAction", "logType"],
          "/init": ge,
          "/start": ge,
          "/joinTime": ["joinDuration", "playhead", "bitrate"],
          "/pause": ["playhead"],
          "/resume": ["pauseDuration", "playhead"],
          "/seek": ["seekDuration", "playhead"],
          "/bufferUnderrun": ["bufferDuration", "playhead"],
          "/error": ["player", "playhead"].concat(ge),
          "/stop": [
            "bitrate",
            "totalBytes",
            "playhead",
            "pauseDuration",
            "metrics",
            "cdnDownloadedTraffic",
            "multiCdnInfo",
            "p2pDownloadedTraffic",
            "uploadTraffic",
          ],
          "/infinity/video/event": ["bitrate", "playhead"],
          "/adInit": me,
          "/adStart": me,
          "/adJoin": [
            "playhead",
            "position",
            "adJoinDuration",
            "adPlayhead",
            "adNumber",
            "adNumberInBreak",
            "breakNumber",
          ],
          "/adPause": [
            "playhead",
            "position",
            "adPlayhead",
            "adNumber",
            "adNumberInBreak",
            "breakNumber",
          ],
          "/adResume": [
            "playhead",
            "position",
            "adPlayhead",
            "adPauseDuration",
            "adNumber",
            "adNumberInBreak",
            "breakNumber",
          ],
          "/adBufferUnderrun": [
            "playhead",
            "position",
            "adPlayhead",
            "adBufferDuration",
            "adNumber",
            "adNumberInBreak",
            "breakNumber",
          ],
          "/adStop": [
            "playhead",
            "position",
            "adPlayhead",
            "adBitrate",
            "adTotalDuration",
            "pauseDuration",
            "adViewedDuration",
            "adViewability",
            "adNumber",
            "adNumberInBreak",
            "breakNumber",
          ],
          "/adClick": [
            "playhead",
            "position",
            "adPlayhead",
            "adNumber",
            "adNumberInBreak",
            "breakNumber",
          ],
          "/adError": ["playhead"].concat(me),
          "/adManifest": [
            "givenBreaks",
            "expectedBreaks",
            "expectedPattern",
            "breaksTime",
          ],
          "/adBreakStart": [
            "position",
            "givenAds",
            "expectedAds",
            "breakNumber",
            "adInsertionType",
          ],
          "/adBreakStop": ["position", "breakNumber"],
          "/adQuartile": [
            "position",
            "adViewedDuration",
            "adViewability",
            "adNumber",
            "adNumberInBreak",
            "breakNumber",
          ],
          "/ping": [
            "droppedFrames",
            "playrate",
            "cdnDownloadedTraffic",
            "multiCdnInfo",
            "p2pDownloadedTraffic",
            "uploadTraffic",
            "latency",
            "packetLoss",
            "packetSent",
            "metrics",
            "totalBytes",
            "segmentDuration",
          ],
          "/infinity/session/start": [
            "accountCode",
            "username",
            "userType",
            "anonymousUser",
            "route",
            "page",
            "scrollDepth",
            "referer",
            "referral",
            "screenResolution",
            "language",
            "deviceInfo",
            "adsBlocked",
            "deviceUUID",
            "libVersion",
            "appName",
            "appReleaseVersion",
            "isp",
            "connectionType",
            "ip",
            "obfuscateIp",
            "privacyProtocol",
            "dimensions",
            "param1",
            "param2",
            "param3",
            "param4",
            "param5",
            "param6",
            "param7",
            "param8",
            "param9",
            "param10",
            "param11",
            "param12",
            "param13",
            "param14",
            "param15",
            "param16",
            "param17",
            "param18",
            "param19",
            "param20",
            "edid",
            "utmSource",
            "utmMedium",
            "utmCampaign",
            "utmTerm",
            "utmContent",
          ],
          "/infinity/session/stop": ["sessionMetrics"],
          "/infinity/session/error": [],
          "/infinity/session/nav": ["route", "page", "scrollDepth"],
          "/infinity/session/beat": ["sessionMetrics", "scrollMaxPosition"],
          "/infinity/session/event": ["accountCode"],
          "/offlineEvents": {},
        },
        bodyParams: { "/offlineEvents": ["viewJson"] },
        differentParams: {
          entities: [
            "rendition",
            "title",
            "title2",
            "param1",
            "param2",
            "param3",
            "param4",
            "param5",
            "param6",
            "param7",
            "param8",
            "param9",
            "param10",
            "param11",
            "param12",
            "param13",
            "param14",
            "param15",
            "param16",
            "param17",
            "param18",
            "param19",
            "param20",
            "cdn",
            "nodeHost",
            "nodeType",
            "nodeTypeString",
            "subtitles",
            "contentLanguage",
            "contentId",
          ],
        },
        getters: {
          requestNumber: "getRequestNumber",
          playhead: "getPlayhead",
          playrate: "getPlayrate",
          fps: "getFramesPerSecond",
          segmentDuration: "getSegmentDuration",
          droppedFrames: "getDroppedFrames",
          mediaDuration: "getDuration",
          bitrate: "getBitrate",
          totalBytes: "getTotalBytes",
          throughput: "getThroughput",
          rendition: "getRendition",
          title: "getTitle",
          title2: "getTitle2",
          live: "getIsLive",
          mediaResource: "getResource",
          parsedResource: "getParsedResource",
          transactionCode: "getTransactionCode",
          properties: "getMetadata",
          playerVersion: "getPlayerVersion",
          player: "getPlayerName",
          cdn: "getCdn",
          pluginVersion: "getPluginVersion",
          libVersion: "getLibVersion",
          userType: "getUserType",
          streamingProtocol: "getStreamingProtocol",
          transportFormat: "getTransportFormat",
          obfuscateIp: "getObfuscateIp",
          privacyProtocol: "getPrivacyProtocol",
          householdId: "getHouseholdId",
          latency: "getLatency",
          packetLoss: "getPacketLoss",
          packetSent: "getPacketSent",
          metrics: "getVideoMetrics",
          dimensions: "getCustomDimensions",
          param1: "getExtraparam1",
          param2: "getExtraparam2",
          param3: "getExtraparam3",
          param4: "getExtraparam4",
          param5: "getExtraparam5",
          param6: "getExtraparam6",
          param7: "getExtraparam7",
          param8: "getExtraparam8",
          param9: "getExtraparam9",
          param10: "getExtraparam10",
          param11: "getExtraparam11",
          param12: "getExtraparam12",
          param13: "getExtraparam13",
          param14: "getExtraparam14",
          param15: "getExtraparam15",
          param16: "getExtraparam16",
          param17: "getExtraparam17",
          param18: "getExtraparam18",
          param19: "getExtraparam19",
          param20: "getExtraparam20",
          extraparam1: "getAdExtraparam1",
          extraparam2: "getAdExtraparam2",
          extraparam3: "getAdExtraparam3",
          extraparam4: "getAdExtraparam4",
          extraparam5: "getAdExtraparam5",
          extraparam6: "getAdExtraparam6",
          extraparam7: "getAdExtraparam7",
          extraparam8: "getAdExtraparam8",
          extraparam9: "getAdExtraparam9",
          extraparam10: "getAdExtraparam10",
          position: "getAdPosition",
          adNumber: "getAdNumber",
          adNumberInBreak: "getAdNumberInBreak",
          breakNumber: "getBreakNumber",
          adPlayhead: "getAdPlayhead",
          adDuration: "getAdDuration",
          adCampaign: "getAdCampaign",
          adCreativeId: "getAdCreativeId",
          adBitrate: "getAdBitrate",
          adTitle: "getAdTitle",
          adResource: "getAdResource",
          adPlayerVersion: "getAdPlayerVersion",
          adProperties: "getAdMetadata",
          adAdapterVersion: "getAdAdapterVersion",
          givenBreaks: "getGivenBreaks",
          expectedBreaks: "getExpectedBreaks",
          expectedPattern: "getExpectedPattern",
          breaksTime: "getBreaksTime",
          givenAds: "getGivenAds",
          expectedAds: "getExpectedAds",
          adsExpected: "getAdsExpected",
          adViewedDuration: "getAdViewedDuration",
          adViewability: "getAdViewability",
          fullscreen: "getIsFullscreen",
          audio: "getAudioEnabled",
          skippable: "getIsSkippable",
          adProvider: "getAdProvider",
          adInsertionType: "getAdInsertionType",
          pluginInfo: "getPluginInfo",
          isp: "getIsp",
          connectionType: "getConnectionType",
          ip: "getIp",
          deviceInfo: "getDeviceInfo",
          edid: "getEDID",
          system: "getAccountCode",
          accountCode: "getAccountCode",
          username: "getUsername",
          anonymousUser: "getAnonymousUser",
          joinDuration: "getJoinDuration",
          bufferDuration: "getBufferDuration",
          seekDuration: "getSeekDuration",
          pauseDuration: "getPauseDuration",
          adJoinDuration: "getAdJoinDuration",
          adBufferDuration: "getAdBufferDuration",
          adPauseDuration: "getAdPauseDuration",
          adTotalDuration: "getAdTotalDuration",
          referer: "getReferer",
          referral: "getReferral",
          language: "getLanguage",
          screenResolution: "getScreenResolution",
          nodeHost: "getNodeHost",
          nodeType: "getNodeType",
          nodeTypeString: "getNodeTypeString",
          route: "getReferer",
          page: "getPageName",
          playerStartupTime: "getPlayerStartupTime",
          pageLoadTime: "getPageLoadTime",
          cdnDownloadedTraffic: "getCdnTraffic",
          multiCdnInfo: "getMultiCdnInfo",
          p2pDownloadedTraffic: "getP2PTraffic",
          p2pEnabled: "getIsP2PEnabled",
          uploadTraffic: "getUploadTraffic",
          cdnBalancerResponseUUID: "getBalancerResponseId",
          cdnBalancerProfile: "getBalancerProfile",
          cdnBalancerBucket: "getBalancerBucket",
          viewJson: "getOfflineView",
          deviceUUID: "getDeviceUUID",
          sessionMetrics: "getSessionMetrics",
          scrollDepth: "getScrollDepth",
          scrollMaxPosition: "getMaxScrollPercent",
          adsBlocked: "getIsBlocked",
          linkedViewId: "getLinkedViewId",
          appName: "getAppName",
          appReleaseVersion: "getAppReleaseVersion",
          package: "getPackage",
          saga: "getSaga",
          tvshow: "getTvShow",
          season: "getSeason",
          titleEpisode: "getEpisodeTitle",
          channel: "getChannel",
          drm: "getDRM",
          videoCodec: "getVideoCodec",
          audioCodec: "getAudioCodec",
          codecSettings: "getCodecSettings",
          codecProfile: "getCodecProfile",
          containerFormat: "getContainerFormat",
          contentId: "getID",
          imdbID: "getImdbId",
          gracenoteID: "getGracenoteID",
          contentType: "getType",
          genre: "getGenre",
          contentLanguage: "getVideoLanguage",
          subtitles: "getSubtitles",
          contractedResolution: "getContractedResolution",
          cost: "getCost",
          price: "getPrice",
          playbackType: "getPlaybackType",
          email: "getEmail",
          utmSource: "getUTMSource",
          utmMedium: "getUTMMedium",
          utmCampaign: "getUTMCampaign",
          utmTerm: "getUTMTerm",
          utmContent: "getUTMContent",
        },
      }
    ),
    St = ot,
    er = k,
    ir = er.extend({
      constructor: function (t, e) {
        (this.plugin = t),
          (this.video = e),
          (this.listenerReference = this._changeListener.bind(this)),
          (this.loadReference = this._loadListener.bind(this)),
          (this.isEnabled = !1),
          (this.pageHeight = 0),
          (this.maxHeight = 0),
          this.startDetection();
      },
      startDetection: function () {
        !this.isEnabled &&
          typeof window < "u" &&
          typeof window.addEventListener == "function" &&
          (window.addEventListener("scroll", this.listenerReference),
          window.addEventListener("resize", this.listenerReference),
          window.addEventListener("load", this.loadReference),
          (this.isEnabled = !0));
      },
      stopDetection: function () {
        this.isEnabled &&
          typeof window < "u" &&
          typeof window.removeEventListener == "function" &&
          (window.removeEventListener("scroll", this.listenerReference),
          window.removeEventListener("resize", this.listenerReference),
          window.removeEventListener("load", this.loadReference),
          (this.isEnabled = !1));
      },
      getScrollDepth: function () {
        var t = null;
        return (
          this.maxHeight &&
            this.pageHeight &&
            (t = Math.min(
              Math.trunc((this.maxHeight / this.pageHeight) * 100),
              100
            )),
          t
        );
      },
      _loadListener: function () {
        if (typeof document < "u") {
          var t = document.documentElement;
          t &&
            ((this.pageHeight = Math.round(
              t.scrollHeight,
              t.clientHeight,
              t.offsetHeight
            )),
            (this.maxHeight = window.innerHeight),
            this._updateCompletionRate());
        }
      },
      _changeListener: function () {
        if (this.pageHeight) {
          var t = this.maxHeight;
          (this.maxHeight = Math.max(
            this.maxHeight,
            window.pageYOffset + window.innerHeight
          )),
            t !== this.maxHeight && this._updateCompletionRate();
        }
        var e = this.video.getAdsAdapter();
        e &&
          e.flags.isStarted &&
          (e.getIsVisible() ? e.startChronoView() : e.stopChronoView());
      },
      _updateCompletionRate: function () {
        setTimeout(
          function () {
            this.plugin.storage.setSession(
              "pageScrollDepth",
              this.getScrollDepth()
            );
          }.bind(this),
          3e3
        );
      },
    }),
    sr = ir,
    ve,
    Ai;
  function nr() {
    if (Ai) return ve;
    Ai = 1;
    var t = j,
      e = q,
      i = O,
      s = ft(),
      n = {
        getAdsAdapter: function () {
          return this._adsAdapter;
        },
        setAdsAdapter: function (r, o, a) {
          if (((a = a || !1), r.isSetAdapter()))
            i.warn("Adapters can only be added to a single plugin");
          else
            try {
              this.removeAdsAdapter(),
                (this.plugin = o),
                (this._adsAdapter = r),
                this._adsAdapter.setIsAds(!0),
                (this.adsAdapterListeners = {}),
                (this.adsAdapterListeners[s.Event.START] =
                  this._adStartListener.bind(this)),
                (this.adsAdapterListeners[s.Event.JOIN] =
                  this._adJoinListener.bind(this)),
                (this.adsAdapterListeners[s.Event.PAUSE] =
                  this._adPauseListener.bind(this)),
                (this.adsAdapterListeners[s.Event.RESUME] =
                  this._adResumeListener.bind(this)),
                (this.adsAdapterListeners[s.Event.BUFFER_BEGIN] =
                  this._adBufferBeginListener.bind(this)),
                (this.adsAdapterListeners[s.Event.BUFFER_END] =
                  this._adBufferEndListener.bind(this)),
                (this.adsAdapterListeners[s.Event.STOP] =
                  this._adStopListener.bind(this)),
                (this.adsAdapterListeners[s.Event.ERROR] =
                  this._adErrorListener.bind(this)),
                (this.adsAdapterListeners[s.Event.CLICK] =
                  this._adClickListener.bind(this)),
                (this.adsAdapterListeners[s.Event.MANIFEST] =
                  this._adManifestListener.bind(this)),
                (this.adsAdapterListeners[s.Event.PODSTART] =
                  this._adBreakStartListener.bind(this)),
                (this.adsAdapterListeners[s.Event.PODSTOP] =
                  this._adBreakStopListener.bind(this)),
                (this.adsAdapterListeners[s.Event.QUARTILE] =
                  this._adQuartileListener.bind(this));
              for (var l in this.adsAdapterListeners)
                this._adsAdapter.on(l, this.adsAdapterListeners[l]);
              a &&
                (i.notice("Registering listeners for registered AdsAdapter"),
                this._adsAdapter.registerListeners());
            } catch {
              i.warn("Problem during setAdsAdapter process");
            }
        },
        removeAdsAdapter: function () {
          if (this._adsAdapter) {
            if ((this._adsAdapter.dispose(), this.adsAdapterListeners)) {
              for (var r in this.adsAdapterListeners)
                this._adsAdapter.off(r, this.adsAdapterListeners[r]);
              delete this.adsAdapterListeners;
            }
            this.resizeScrollDetector.stopDetection(),
              (this._adsAdapter = null);
          }
        },
        _adStartListener: function (r) {
          this._adapter
            ? (this._adapter.fireBufferEnd(null, "adStartListener"),
              this._adapter.fireSeekEnd(null, "adStartListener"),
              !this.isInitiated &&
                !this._adapter.flags.isStarted &&
                this._adapter.fireStart(),
              this._adapter.flags.isPaused &&
                this._adapter.chronos.pause.reset())
            : this.fireInit(),
            this._adsAdapter && (this._adsAdapter.chronos.viewedMax = []);
          var o = r.data.params || {};
          o.adNumber = this.getNewAdNumber();
          var a =
            (this.getAdResource() || this.getAdTitle()) &&
            typeof this.getAdDuration() == "number";
          a
            ? ((this.adStartSent = !0),
              this._adsAdapter.fireManifest(),
              this._adsAdapter.fireBreakStart(),
              (o.adNumberInBreak = this.getNewAdNumberInBreak()),
              this._sendAdEventIfAllowed(
                t.WillSendEvent.WILL_SEND_AD_START,
                t.Service.AD_START,
                o
              ))
            : ((this.adInitSent = !0),
              (o.adNumberInBreak = this.getNewAdNumberInBreak()),
              this._sendAdEventIfAllowed(
                t.WillSendEvent.WILL_SEND_AD_INIT,
                t.Service.AD_INIT,
                o
              ));
        },
        _adJoinListener: function (r) {
          var o = {};
          e.assign(o, r.data.params || {}),
            this.adInitSent &&
              !this.adStartSent &&
              (this._adsAdapter.fireManifest(),
              this._adsAdapter.fireBreakStart(),
              this._sendAdEventIfAllowed(
                t.WillSendEvent.WILL_SEND_AD_START,
                t.Service.AD_START,
                o
              )),
            this._adsAdapter.startChronoView(),
            this.adConnected &&
              ((this._adsAdapter.chronos.join.startTime = this.adConnectedTime),
              (this._adsAdapter.chronos.total.startTime = this.adConnectedTime),
              (this.adConnectedTime = 0),
              (this.adConnected = !1)),
            (o = r.data.params || {}),
            this._sendAdEventIfAllowed(
              t.WillSendEvent.WILL_SEND_AD_JOIN,
              t.Service.AD_JOIN,
              o
            ),
            (this.adInitSent = !1),
            (this.adStartSent = !1);
        },
        _adPauseListener: function (r) {
          var o = r.data.params || {};
          this._adsAdapter.stopChronoView(),
            this._sendAdEventIfAllowed(
              t.WillSendEvent.WILL_SEND_AD_PAUSE,
              t.Service.AD_PAUSE,
              o
            );
        },
        _adResumeListener: function (r) {
          var o = r.data.params || {};
          this._adsAdapter.startChronoView(),
            this._sendAdEventIfAllowed(
              t.WillSendEvent.WILL_SEND_AD_RESUME,
              t.Service.AD_RESUME,
              o
            );
        },
        _adBufferBeginListener: function (r) {
          i.notice(
            "[" +
              this.getViewCode() +
              "] (Video Space " +
              this.getVideoKey() +
              ") Ad Buffer Begin"
          ),
            this._adsAdapter.stopChronoView(),
            this._adsAdapter &&
              this._adsAdapter.flags.isPaused &&
              this._adsAdapter.chronos.pause.reset();
        },
        _adBufferEndListener: function (r) {
          var o = r.data.params || {};
          this._adsAdapter.startChronoView(),
            this._sendAdEventIfAllowed(
              t.WillSendEvent.WILL_SEND_AD_BUFFER,
              t.Service.AD_BUFFER,
              o
            );
        },
        _adStopListener: function (r) {
          this._adsAdapter.stopChronoView(),
            this._adsAdapter.flags.reset(),
            (this._totalPrerollsTime =
              (this._totalPrerollsTime || 0) +
              this._adsAdapter.chronos.total.getDeltaTime());
          var o = r.data.params || {};
          if (
            ((o.position = this.requestBuilder.lastSent.position),
            this._sendAdEventIfAllowed(
              t.WillSendEvent.WILL_SEND_AD_STOP,
              t.Service.AD_STOP,
              o
            ),
            this.requestBuilder.lastSent.position === t.AdPosition.Postroll)
          ) {
            var a = this.options["ad.expectedPattern"];
            this.playedPostrolls++,
              ((this.requestBuilder.lastSent.givenAds &&
                this.requestBuilder.lastSent.givenAds <=
                  this.playedPostrolls) ||
                (!this.requestBuilder.lastSent.givenAds &&
                  a &&
                  a.post &&
                  a.post[0] &&
                  a.post[0] <= this.playedPostrolls)) &&
                this.fireStop();
          }
          (this.adConnected = !0),
            (this.adConnectedTime = new Date().getTime());
        },
        _adErrorListener: function (r) {
          var o = r.data.params || {};
          if (
            this._adapter &&
            !this._adapter.flags.isStarted &&
            !this.isInitiated
          )
            return (this._savedAdError = r), null;
          if (this._blockAdError(r.data.params)) return null;
          this._adsAdapter &&
            (this._adsAdapter.fireManifest(),
            this._adsAdapter.fireBreakStart()),
            (!this._adsAdapter || !this._adsAdapter.flags.isStarted) &&
              ((o.adNumber = this.getNewAdNumber()),
              (o.adNumberInBreak = this.getNewAdNumberInBreak())),
            this.isBreakStarted || (o.breakNumber = this.getNewBreakNumber()),
            this._sendAdEventIfAllowed(
              t.WillSendEvent.WILL_SEND_AD_ERROR,
              t.Service.AD_ERROR,
              o
            );
        },
        _adSavedError: function () {
          this._savedAdError &&
            (this._adErrorListener(this._savedAdError),
            (this._savedAdError = null));
        },
        _adSavedManifest: function () {
          this._savedAdManifest &&
            (this._adManifestListener(this._savedAdManifest),
            (this._savedAdManifest = null));
        },
        _blockAdError: function (r) {
          var o = Date.now(),
            a =
              this._lastAdErrorParams &&
              this._lastAdErrorParams.errorCode === r.errorCode &&
              this._lastAdErrorParams.msg === r.msg &&
              this._lastAdErrorParams.adCreativeId === this.getAdCreativeId();
          return a && this._lastAdErrorTime + 5e3 > o
            ? ((this._lastAdErrorTime = o), !0)
            : ((this._lastAdErrorTime = o), (this._lastAdErrorParams = r), !1);
        },
        _adClickListener: function (r) {
          var o = r.data.params || {};
          this._adsAdapter.stopChronoView(),
            this._sendAdEventIfAllowed(
              t.WillSendEvent.WILL_SEND_AD_CLICK,
              t.Service.AD_CLICK,
              o
            );
        },
        _adManifestListener: function (r) {
          if (!this.isAdsManifestSent) {
            if (
              this._adapter &&
              !this._adapter.flags.isStarted &&
              !this.isInitiated
            )
              return (this._savedAdManifest = r), null;
            var o = r.data.params || {};
            (this.isAdsManifestSent = !0),
              this._sendAdEventIfAllowed(
                t.WillSendEvent.WILL_SEND_AD_MANIFEST,
                t.Service.AD_MANIFEST,
                o
              );
          }
        },
        _adBreakStartListener: function (r) {
          if (!this.isBreakStarted) {
            (this.isBreakStarted = !0),
              this._adapter && this._adapter.firePause();
            var o = r.data.params || {};
            (o.breakNumber = this.getNewBreakNumber()),
              this._sendAdEventIfAllowed(
                t.WillSendEvent.WILL_SEND_AD_POD_START,
                t.Service.AD_POD_START,
                o
              ),
              (this.adConnected = !1);
          }
        },
        _adBreakStopListener: function (r) {
          if (this.isBreakStarted) {
            this.isBreakStarted = !1;
            var o = r.data.params || {};
            (o.position = this.requestBuilder.lastSent.position),
              this._sendAdEventIfAllowed(
                t.WillSendEvent.WILL_SEND_AD_POD_STOP,
                t.Service.AD_POD_STOP,
                o
              ),
              (this.adConnected = !1),
              this._adapter && this._adapter.fireResume();
          }
        },
        _adQuartileListener: function (r) {
          var o = r.data.params || {};
          o.quartile &&
            this._sendAdEventIfAllowed(
              t.WillSendEvent.WILL_SEND_AD_QUARTILE,
              t.Service.AD_QUARTILE,
              o
            );
        },
        _sendAdEventIfAllowed: function (r, o, a) {
          this.options["ad.ignore"] || this._send(r, o, a),
            i.notice(
              "[" +
                this.getViewCode() +
                "] (Video Space " +
                this.getVideoKey() +
                ") " +
                o
            );
        },
      };
    return (ve = n), ve;
  }
  var _e, Ei;
  function rr() {
    if (Ei) return _e;
    Ei = 1;
    var t = j,
      e = O,
      i = q,
      s = {
        _startListener: function (n) {
          this.isInitiated
            ? this.initChrono.startTime !== 0 &&
              (this._adapter.chronos.join.startTime = this.initChrono.startTime)
            : (this.nextView(),
              this.plugin._initComm(this._key),
              this._startPings());
          try {
            if (this._adapter && this.resourceTransform) {
              var r = "";
              (r = this._adapter.getURLToParse()),
                r || (r = this._adapter.getResource()),
                this.resourceTransform.init(r);
            }
          } catch {}
          var o = n.data.params || {},
            a =
              this.getResource() &&
              typeof this.getIsLive() == "boolean" &&
              (this.getIsLive() ||
                (typeof this.getDuration() == "number" &&
                  this.getDuration() > 0)) &&
              this.getTitle();
          (a = this.options.forceInit ? !1 : a && this._isExtraMetadataReady()),
            a && !this.isInitiated
              ? (this._send(
                  t.WillSendEvent.WILL_SEND_START,
                  t.Service.START,
                  o
                ),
                this._adSavedError(),
                this._adSavedManifest(),
                e.notice(
                  "[" +
                    this.getViewCode() +
                    "] (Video Space " +
                    this.getVideoKey() +
                    ") " +
                    t.Service.START +
                    ", title/res: " +
                    (o.title || o.mediaResource) +
                    (o.triggeredEvents
                      ? ", eventsTriggered: " + o.triggeredEvents
                      : "")
                ),
                (this.isStarted = !0))
              : this.isInitiated ||
                ((this.isInitiated = !0),
                this._adapter.chronos.join.start(),
                this._send(t.WillSendEvent.WILL_SEND_INIT, t.Service.INIT, o),
                this._adSavedError(),
                this._adSavedManifest(),
                e.notice(
                  "[" +
                    this.getViewCode() +
                    "] (Video Space " +
                    this.getVideoKey() +
                    ") " +
                    t.Service.INIT +
                    ", title/res: " +
                    (o.title || o.mediaResource) +
                    (o.triggeredEvents
                      ? ", eventsTriggered: " + o.triggeredEvents
                      : "")
                ));
        },
        _retryStart: function (n) {
          this._isExtraMetadataReady() &&
            (this._send(t.WillSendEvent.WILL_SEND_START, t.Service.START, {}),
            (this.startDelayed = !1));
        },
        _joinListener: function (n) {
          var r = {};
          i.assign(r, n.data.params || {}),
            !this._adsAdapter || !this._adsAdapter.flags.isStarted
              ? (this._adapter &&
                  ((this._adapter.chronos.join.startTime = Math.min(
                    this._adapter.chronos.join.startTime +
                      (this._totalPrerollsTime || 0),
                    new Date().getTime()
                  )),
                  (this._totalPrerollsTime = 0)),
                this.isInitiated &&
                  !this.isStarted &&
                  (this._isExtraMetadataReady()
                    ? this._send(
                        t.WillSendEvent.WILL_SEND_START,
                        t.Service.START,
                        r
                      )
                    : (this.startDelayed = !0),
                  this._adSavedError(),
                  this._adSavedManifest(),
                  e.notice(
                    "[" +
                      this.getViewCode() +
                      "] (Video Space " +
                      this.getVideoKey() +
                      ") " +
                      t.Service.START +
                      ", title/res: " +
                      (r.title || r.mediaResource) +
                      (r.triggeredEvents
                        ? ", eventsTriggered: " + r.triggeredEvents
                        : "")
                  ),
                  (this.isStarted = !0)),
                (r = n.data.params || {}),
                this._adsAdapter &&
                  this.isBreakStarted &&
                  this._adsAdapter.fireBreakStop(),
                this._send(t.WillSendEvent.WILL_SEND_JOIN, t.Service.JOIN, r),
                e.notice(
                  "[" +
                    this.getViewCode() +
                    "] (Video Space " +
                    this.getVideoKey() +
                    ") " +
                    t.Service.JOIN +
                    ", duration: " +
                    r.joinDuration +
                    "ms" +
                    (r.triggeredEvents
                      ? ", eventsTriggered: " + r.triggeredEvents
                      : "")
                ))
              : (this._adapter.monitor && this._adapter.monitor.stop(),
                (this._adapter.flags.isJoined = !1),
                (this._adapter.chronos.join.stopTime = 0));
        },
        _pauseListener: function (n) {
          this._adapter &&
            (this._adapter.flags.isBuffering ||
              this._adapter.flags.isSeeking ||
              (this._adsAdapter && this._adsAdapter.flags.isStarted)) &&
            this._adapter.chronos.pause.reset();
          var r = n.data.params || {};
          this._send(t.WillSendEvent.WILL_SEND_PAUSE, t.Service.PAUSE, r),
            e.notice(
              "[" +
                this.getViewCode() +
                "] (Video Space " +
                this.getVideoKey() +
                ") " +
                t.Service.PAUSE +
                " at " +
                r.playhead +
                "s" +
                (r.triggeredEvents
                  ? ", eventsTriggered: " + r.triggeredEvents
                  : "")
            );
        },
        _resumeListener: function (n) {
          this._adsAdapter &&
            this.isBreakStarted &&
            !this._adsAdapter.flags.isStarted &&
            this._adsAdapter.fireBreakStop();
          var r = n.data.params || {};
          this._send(t.WillSendEvent.WILL_SEND_RESUME, t.Service.RESUME, r),
            e.notice(
              "[" +
                this.getViewCode() +
                "] (Video Space " +
                this.getVideoKey() +
                ") " +
                t.Service.RESUME +
                ", duration: " +
                r.pauseDuration +
                "ms" +
                (r.triggeredEvents
                  ? ", eventsTriggered: " + r.triggeredEvents
                  : "")
            ),
            this._adapter.chronos.pause.reset();
        },
        _seekBufferBeginListener: function (n) {
          this._adapter &&
            this._adapter.flags.isPaused &&
            this._adapter.chronos.pause.pause(),
            n.type && n.type.includes("buffer")
              ? e.notice(
                  "[" +
                    this.getViewCode() +
                    "] (Video Space " +
                    this.getVideoKey() +
                    ") " +
                    n.type +
                    ", eventsTriggered: " +
                    this._adapter.fireEventsStruct.buffer
                )
              : e.notice(
                  "[" +
                    this.getViewCode() +
                    "] (Video Space " +
                    this.getVideoKey() +
                    ") " +
                    n.type +
                    ", eventsTriggered: " +
                    this._adapter.fireEventsStruct.seek
                );
        },
        _seekEndListener: function (n) {
          var r = n.data.params || {};
          this._send(t.WillSendEvent.WILL_SEND_SEEK, t.Service.SEEK, r),
            e.notice(
              "[" +
                this.getViewCode() +
                "] (Video Space " +
                this.getVideoKey() +
                ") " +
                t.Service.SEEK +
                " to " +
                r.playhead +
                " in " +
                r.seekDuration +
                "ms" +
                (r.triggeredEvents
                  ? ", eventsTriggered: " + r.triggeredEvents
                  : "")
            );
        },
        _bufferEndListener: function (n) {
          var r = n.data.params || {};
          this._send(t.WillSendEvent.WILL_SEND_BUFFER, t.Service.BUFFER, r),
            e.notice(
              "[" +
                this.getViewCode() +
                "] (Video Space " +
                this.getVideoKey() +
                ") " +
                t.Service.BUFFER +
                " to " +
                r.playhead +
                " in " +
                r.bufferDuration +
                "ms" +
                (r.triggeredEvents
                  ? ", eventsTriggered: " + r.triggeredEvents
                  : "")
            );
        },
        _errorListener: function (n) {
          this._blockError(n.data.params) ||
            (this.fireError(n.data.params || {}),
            this._adSavedError(),
            this._adSavedManifest());
        },
        _blockError: function (n) {
          var r = Date.now(),
            o = this._lastErrorParams
              ? this._lastErrorParams.errorCode === n.errorCode &&
                this._lastErrorParams.msg === n.msg
              : !1;
          return o && this._lastErrorTime + 5e3 > r
            ? ((this._lastErrorTime = r), !0)
            : ((this._lastErrorTime = r), (this._lastErrorParams = n), !1);
        },
        _stopListener: function (n) {
          this.fireStop(n.data.params || {});
        },
        _isStopReady: function (n) {
          var r = !1;
          if (
            !this.requestBuilder.lastSent.live &&
            this._adsAdapter &&
            this._adapter &&
            (!this._adapter.getPlayhead() ||
              this._adapter.getPlayhead() >=
                this.requestBuilder.lastSent.mediaDuration - 1)
          ) {
            var o = 0,
              a = this.options["ad.expectedPattern"];
            if (a && a.post && a.post[0]) o = a.post[0];
            else if (this.requestBuilder.lastSent.breaksTime) {
              if (
                (this.requestBuilder.lastSent.position ===
                  t.AdPosition.Postroll &&
                  (o = this.requestBuilder.lastSent.givenAds),
                !o && this.requestBuilder.lastSent.breaksTime)
              ) {
                var l = this.requestBuilder.lastSent.breaksTime;
                if (
                  l.length > 0 &&
                  this.requestBuilder.lastSent.mediaDuration
                ) {
                  var v = Math.round(l[l.length - 1]);
                  v + 1 >= this.requestBuilder.lastSent.mediaDuration &&
                    (o = 1);
                }
              }
            } else r = !0;
            o <= this.playedPostrolls && (r = !0);
          } else r = !0;
          return r;
        },
        _videoEventListener: function (n) {
          this._send(
            t.WillSendEvent.WILL_SEND_VIDEO_EVENT,
            t.Service.VIDEO_EVENT,
            n.data.params
          );
        },
        _isExtraMetadataReady: function (n) {
          if (
            !this.options.waitForMetadata ||
            this.options.pendingMetadata.length < 1
          )
            return !0;
          try {
            var r = this.requestBuilder.getGetters();
            return (
              this.options.pendingMetadata
                .map(
                  function (o) {
                    if (r.hasOwnProperty(o)) {
                      if (this[r[o]]) return !!this[r[o]]();
                      if (this.plugin[r[o]]) return !!this.plugin[r[o]]();
                    }
                  }.bind(this)
                )
                .indexOf(!1) < 0
            );
          } catch {
            e.warn(
              "[" +
                this.getViewCode() +
                "] (Video Space " +
                this.getVideoKey() +
                ") Error processing isExtraMetadataReady method."
            );
          }
          return !0;
        },
      };
    return (_e = s), _e;
  }
  var Se, Ti;
  function ar() {
    if (Ti) return Se;
    Ti = 1;
    var t = q,
      e = O,
      i = pt,
      s = ci,
      n = _t,
      r = j,
      o = {
        getPlayhead: function () {
          var a = this._safeGetterAdapter("getPlayhead");
          return t.parseNumber(a, 0);
        },
        getPlayrate: function () {
          var a = 0;
          if (
            this._adapter &&
            this._adapter.flags &&
            !this._adapter.flags.isPaused
          )
            try {
              a = this._adapter.getPlayrate();
            } catch (l) {
              e.warn("An error occured while calling getPlayrate", l);
            }
          return a;
        },
        getFramesPerSecond: function () {
          return this._safeGetterAdapter("getFramesPerSecond", "content.fps");
        },
        getSegmentDuration: function () {
          return (
            this.hybridNetwork.getSegmentDuration() ||
            this._safeGetterAdapter(
              "getSegmentDuration",
              "content.segmentDuration"
            )
          );
        },
        getDroppedFrames: function () {
          var a = this._safeGetterAdapter("getDroppedFrames");
          return a || (a = this.getWebkitDroppedFrames()), t.parseNumber(a, 0);
        },
        getWebkitDroppedFrames: function () {
          return this._adapter &&
            this._adapter.tag &&
            this._adapter.tag.webkitDroppedFrameCount
            ? this._adapter.tag.webkitDroppedFrameCount
            : null;
        },
        getDuration: function () {
          var a =
            this._safeGetterAdapter("getDuration", "content.duration") || null;
          return t.parseNumber(Math.round(a), null);
        },
        getBitrate: function () {
          if (this._adapter && this._adapter.supportTotalBytes()) return null;
          var a = this._safeGetterAdapter("getBitrate", "content.bitrate");
          return (
            (!a || a === -1) && (a = this.getWebkitBitrate()),
            t.parseNumber(a, -1)
          );
        },
        getTotalBytes: function () {
          return this.options["content.sendTotalBytes"] ||
            (this._adapter && this._adapter.supportTotalBytes())
            ? this._safeGetterAdapter("getTotalBytes", "content.totalBytes")
            : null;
        },
        getWebkitBitrate: function () {
          try {
            if (
              this._adapter &&
              this._adapter.tag &&
              this._adapter.tag.webkitVideoDecodedByteCount
            ) {
              var a = this._adapter.tag.webkitVideoDecodedByteCount;
              if (this._lastWebkitBitrate) {
                var l =
                  this._adapter.tag.webkitVideoDecodedByteCount -
                  this._lastWebkitBitrate;
                a = Math.round(
                  (l / this.plugin.fastDataTransform.response.pingTime) * 8
                );
              }
              return (
                (this._lastWebkitBitrate =
                  this._adapter.tag.webkitVideoDecodedByteCount),
                a !== 0 ? a : -1
              );
            }
          } catch {}
          return -1;
        },
        getThroughput: function () {
          var a = this._safeGetterAdapter(
            "getThroughput",
            "content.throughput"
          );
          return t.parseNumber(a, -1);
        },
        getRendition: function () {
          return this._safeGetterAdapter("getRendition", "content.rendition");
        },
        getTitle: function () {
          return this._safeGetterAdapter("getTitle", "content.title");
        },
        getTitle2: function () {
          return this._safeGetterAdapter("getTitle2", "content.program");
        },
        getIsLive: function () {
          var a = this.options["content.isLive"];
          return (
            !a && a !== !1 && (a = this._safeGetterAdapter("getIsLive") || !1),
            a
          );
        },
        getResource: function () {
          return this._safeGetterAdapter("getResource", "content.resource");
        },
        getParsedResource: function () {
          var a = null;
          return (
            this.plugin.resourceTransform.isBlocking() ||
              (a = this.plugin.resourceTransform.getResource()),
            (a = a || this._safeGetterAdapter("getURLToParse")),
            a === this.getResource() ? null : a
          );
        },
        getTransactionCode: function () {
          return this.options["content.transactionCode"];
        },
        getMetadata: function () {
          return this.options["content.metadata"];
        },
        getPlayerVersion: function () {
          return this._safeGetterAdapter("getPlayerVersion") || "";
        },
        getPlayerName: function () {
          return this._safeGetterAdapter("getPlayerName") || "";
        },
        getCdn: function () {
          var a = null;
          return (
            this.plugin.resourceTransform.isBlocking() ||
              (a = this.plugin.resourceTransform.getCdnName()),
            a || this.options["content.cdn"]
          );
        },
        getPluginVersion: function () {
          var a = this.getAdapterVersion();
          return a || (a = i + "-adapterless-js"), a;
        },
        getAdapterVersion: function () {
          return this._safeGetterAdapter("getVersion");
        },
        getCdnTraffic: function () {
          return (
            this._safeGetterAdapter("getCdnTraffic") ||
            this.hybridNetwork.getCdnTraffic()
          );
        },
        getMultiCdnInfo: function () {
          return this.hybridNetwork.getMultiCdnInfo();
        },
        getBalancerResponseId: function () {
          var a = this.hybridNetwork.getBalancerResponseId();
          return !a && this.options["cdnbalancer.uuid"]
            ? this.options["cdnbalancer.uuid"]
            : a;
        },
        getBalancerProfile: function () {
          return this.options["cdnbalancer.profile"];
        },
        getBalancerBucket: function () {
          return this.options["cdnbalancer.bucket"];
        },
        getP2PTraffic: function () {
          return (
            this._safeGetterAdapter("getP2PTraffic") ||
            this.hybridNetwork.getP2PTraffic()
          );
        },
        getUploadTraffic: function () {
          return (
            this._safeGetterAdapter("getUploadTraffic") ||
            this.hybridNetwork.getUploadTraffic()
          );
        },
        getIsP2PEnabled: function () {
          return (
            this._safeGetterAdapter("getIsP2PEnabled") ||
            this.hybridNetwork.getIsP2PEnabled()
          );
        },
        getStreamingProtocol: function () {
          var a = this.options["content.streamingProtocol"];
          if (a) {
            for (var l in s) if (s[l] === a) return a;
          }
          return null;
        },
        getTransportFormat: function () {
          var a = this.options["content.transportFormat"];
          if (
            (!a &&
              this.options["parse.manifest"] &&
              !this.plugin.resourceTransform.isBlocking() &&
              (a = this.plugin.resourceTransform.getTransportFormat()),
            a)
          ) {
            for (var l in n) if (n[l] === a) return a;
          }
          return null;
        },
        getHouseholdId: function () {
          return this._safeGetterAdapter("getHouseholdId");
        },
        getLatency: function () {
          return this.getIsLive()
            ? this._safeGetterAdapter("getLatency")
            : null;
        },
        getPacketLoss: function () {
          return this._safeGetterAdapter("getPacketLoss");
        },
        getPacketSent: function () {
          return this._safeGetterAdapter("getPacketSent");
        },
        getVideoMetrics: function () {
          return t.getMetricsFrom(
            this._adapter ? this._adapter.getMetrics() : null,
            this.options["content.metrics"]
          );
        },
        getPlayerStartupTime: function () {
          return this.plugin.browserLoadTimes.getPlayerStartupTime();
        },
        getJoinDuration: function () {
          return this._adapter
            ? this._adapter.chronos.join.getDeltaTime(!1)
            : -1;
        },
        getBufferDuration: function () {
          return this._adapter
            ? this._adapter.chronos.buffer.getDeltaTime(!1)
            : -1;
        },
        getSeekDuration: function () {
          return this._adapter
            ? this._adapter.chronos.seek.getDeltaTime(!1)
            : -1;
        },
        getPauseDuration: function () {
          return this._adapter
            ? this._adapter.chronos.pause.getDeltaTime(!1)
            : 0;
        },
        getPackage: function () {
          return this.options["content.package"];
        },
        getSaga: function () {
          return this.options["content.saga"];
        },
        getTvShow: function () {
          return this.options["content.tvShow"];
        },
        getSeason: function () {
          return this.options["content.season"];
        },
        getEpisodeTitle: function () {
          return this.options["content.episodeTitle"];
        },
        getChannel: function () {
          return this.options["content.channel"];
        },
        getID: function () {
          return this.options["content.id"];
        },
        getImdbId: function () {
          return this.options["content.imdbId"];
        },
        getGracenoteID: function () {
          return this.options["content.gracenoteId"];
        },
        getType: function () {
          return this.options["content.type"];
        },
        getGenre: function () {
          return this.options["content.genre"];
        },
        getVideoLanguage: function () {
          return this.options["content.language"];
        },
        getSubtitles: function () {
          return this.options["content.subtitles"];
        },
        getContractedResolution: function () {
          return this.options["content.contractedResolution"];
        },
        getCost: function () {
          return this.options["content.cost"];
        },
        getPrice: function () {
          return this.options["content.price"];
        },
        getPlaybackType: function () {
          var a = this.options["content.playbackType"];
          if (!a) {
            var l = this.options["content.isLive"];
            typeof l != "boolean" && (l = this._safeGetterAdapter("getIsLive")),
              typeof l == "boolean" && (a = l ? "Live" : "VoD");
          }
          return a;
        },
        getDRM: function () {
          return this.options["content.drm"];
        },
        getVideoCodec: function () {
          return this._safeGetterAdapter(
            "getVideoCodec",
            "content.encoding.videoCodec"
          );
        },
        getAudioCodec: function () {
          return this._safeGetterAdapter(
            "getAudioCodec",
            "content.encoding.audioCodec"
          );
        },
        getCodecSettings: function () {
          return this.options["content.encoding.codecSettings"];
        },
        getCodecProfile: function () {
          return this.options["content.encoding.codecProfile"];
        },
        getContainerFormat: function () {
          return this.options["content.encoding.containerFormat"];
        },
        getLinkedViewId: function () {
          return this.options.linkedViewId;
        },
        _safeGetterAdapter: function (a, l) {
          var v = null;
          if (l && this.options[l]) v = this.options[l];
          else
            try {
              this._adapter &&
                typeof this._adapter[a] == "function" &&
                (v = this._adapter[a]());
            } catch (T) {
              e.warn("An error occured while calling " + a, T);
            }
          return v;
        },
        getCustomDimensions: function () {
          var a = this.options["content.customDimensions"];
          return typeof a == "object" ? a : null;
        },
        getAdExtraparam1: function () {
          return this.options["ad.customDimension.1"];
        },
        getAdExtraparam2: function () {
          return this.options["ad.customDimension.2"];
        },
        getAdExtraparam3: function () {
          return this.options["ad.customDimension.3"];
        },
        getAdExtraparam4: function () {
          return this.options["ad.customDimension.4"];
        },
        getAdExtraparam5: function () {
          return this.options["ad.customDimension.5"];
        },
        getAdExtraparam6: function () {
          return this.options["ad.customDimension.6"];
        },
        getAdExtraparam7: function () {
          return this.options["ad.customDimension.7"];
        },
        getAdExtraparam8: function () {
          return this.options["ad.customDimension.8"];
        },
        getAdExtraparam9: function () {
          return this.options["ad.customDimension.9"];
        },
        getAdExtraparam10: function () {
          return this.options["ad.customDimension.10"];
        },
        getPluginInfo: function () {
          var a = {
            lib: i,
            adapter: this.getAdapterVersion(),
            adAdapter: this.getAdAdapterVersion(),
          };
          return a;
        },
        getAccountCode: function () {
          return this.options.accountCode;
        },
        getUsername: function () {
          return this.options["user.name"];
        },
        getEmail: function () {
          return this.options["user.email"];
        },
        getNodeHost: function () {
          return (
            this.options["content.cdnNode"] ||
            this.plugin.resourceTransform.getNodeHost()
          );
        },
        getNodeType: function () {
          return (
            this.options["content.cdnType"] ||
            this.plugin.resourceTransform.getNodeType()
          );
        },
        getNodeTypeString: function () {
          return this.plugin.resourceTransform.getNodeTypeString();
        },
        getRequestNumber: function () {
          return Math.random();
        },
        getOfflineView: function () {
          var a = null;
          return (
            this.plugin.offlineStorage &&
              (a = this.plugin.offlineStorage.getView()),
            a
          );
        },
        controlPlayerExists: function () {
          return this.options["check.playerExists"];
        },
        ignorePauseSmallEvents: function () {
          return this.options["pause.ignoreSmallEvents"];
        },
        getAdPlayerVersion: function () {
          return this._safeGetterAdsAdapter("getPlayerVersion") || "";
        },
        getAdPosition: function () {
          var a = r.AdPosition.Preroll;
          if (this._adsAdapter)
            try {
              var l = this._adsAdapter.getPosition();
              (r.AdPosition.Preroll === l ||
                r.AdPosition.Midroll === l ||
                r.AdPosition.Postroll === l) &&
                (a = l);
            } catch (v) {
              e.warn("An error occured while calling getAdPosition", v);
            }
          return (
            !a &&
              this._adapter &&
              (a = this._adapter.flags.isJoined
                ? r.AdPosition.Midroll
                : r.AdPosition.Preroll),
            a
          );
        },
        getAdNumber: function () {
          return this.requestBuilder.lastSent.adNumber || 0;
        },
        getAdNumberInBreak: function () {
          return this.requestBuilder.lastSent.adNumberInBreak || 0;
        },
        getBreakNumber: function () {
          return this.requestBuilder.lastSent.breakNumber || 0;
        },
        getAdPlayhead: function () {
          var a = this._safeGetterAdsAdapter("getPlayhead");
          return t.parseNumber(a, 0);
        },
        getAdDuration: function () {
          var a = this._safeGetterAdsAdapter("getDuration", "ad.duration");
          return t.parseNumber(a, 0);
        },
        getAdBitrate: function () {
          var a = this._safeGetterAdsAdapter("getBitrate");
          return (
            (!a || a === -1) && (a = this.getWebkitAdBitrate()),
            t.parseNumber(a, -1)
          );
        },
        getWebkitAdBitrate: function () {
          try {
            if (
              this._adsAdapter &&
              this._adsAdapter.tag &&
              this._adsAdapter.tag.webkitVideoDecodedByteCount
            ) {
              var a = this._adsAdapter.tag.webkitVideoDecodedByteCount;
              if (this._lastWebkitAdBitrate) {
                var l =
                  this._adsAdapter.tag.webkitVideoDecodedByteCount -
                  this._lastWebkitAdBitrate;
                a = Math.round(
                  (l / this.plugin.fastDataTransform.response.pingTime) * 8
                );
              }
              return (
                (this._lastWebkitAdBitrate =
                  this._adsAdapter.tag.webkitVideoDecodedByteCount),
                a !== 0 ? a : -1
              );
            }
          } catch {}
          return -1;
        },
        getAdTitle: function () {
          return this._safeGetterAdsAdapter("getTitle", "ad.title");
        },
        getAdResource: function () {
          return this._safeGetterAdsAdapter("getResource", "ad.resource");
        },
        getAdCampaign: function () {
          return this._safeGetterAdsAdapter("getCampaign", "ad.campaign");
        },
        getAdCreativeId: function () {
          return this._safeGetterAdsAdapter("getCreativeId", "ad.creativeId");
        },
        getAdProvider: function () {
          return this._safeGetterAdsAdapter("getProvider", "ad.provider");
        },
        getAdAdapterVersion: function () {
          return this._safeGetterAdsAdapter("getVersion");
        },
        getAdMetadata: function () {
          return this.options["ad.metadata"];
        },
        getAdInsertionType: function () {
          return this._safeGetterAdsAdapter("getAdInsertionType");
        },
        getGivenBreaks: function () {
          return this._safeGetterAdsAdapter("getGivenBreaks", "ad.givenBreaks");
        },
        getExpectedBreaks: function () {
          var a = null,
            l = this.options["ad.expectedBreaks"],
            v = this.options["ad.expectedPattern"];
          if (l) a = l;
          else if (v)
            (a = 0),
              (a = v.pre ? v.pre.length : 0),
              (a += v.mid ? v.mid.length : 0),
              (a += v.post ? v.post.length : 0);
          else if (this._adsAdapter)
            try {
              a = this._adsAdapter.getExpectedBreaks();
            } catch (T) {
              e.warn("An error occured while calling expectedBreaks", T);
            }
          return a;
        },
        getExpectedPattern: function () {
          return this._safeGetterAdsAdapter(
            "getExpectedPattern",
            "ad.expectedPattern"
          );
        },
        getBreaksTime: function () {
          return this._safeGetterAdsAdapter("getBreaksTime", "ad.breaksTime");
        },
        getGivenAds: function () {
          return this._safeGetterAdsAdapter("getGivenAds", "ad.givenAds");
        },
        getExpectedAds: function () {
          var a = null;
          try {
            if (this._adsAdapter) {
              var l = this.options["ad.expectedPattern"];
              if (l && this.getAdPosition()) {
                var v = [];
                if (
                  (l.pre && (v = v.concat(l.pre)),
                  l.mid && (v = v.concat(l.mid)),
                  l.post && (v = v.concat(l.post)),
                  v.length > 0)
                ) {
                  var T = this.requestBuilder.lastSent.breakNumber;
                  T > v.length && (T = v.length), (a = v[T - 1]);
                }
              } else a = this._adsAdapter.getExpectedAds();
            }
          } catch (d) {
            e.warn("An error occured while calling expectedAds", d);
          }
          return a;
        },
        getAdsExpected: function () {
          var a = null;
          try {
            a = this.getExpectedPattern() || this.getGivenAds() || !1;
          } catch (l) {
            e.warn(
              "An error occured while calling givenAds or expectedPattern",
              l
            );
          }
          return a;
        },
        getAdJoinDuration: function () {
          return this._adsAdapter
            ? this._adsAdapter.chronos.join.getDeltaTime(!1)
            : -1;
        },
        getAdBufferDuration: function () {
          return this._adsAdapter
            ? this._adsAdapter.chronos.buffer.getDeltaTime(!1)
            : -1;
        },
        getAdPauseDuration: function () {
          return this._adsAdapter
            ? this._adsAdapter.chronos.pause.getDeltaTime(!1)
            : 0;
        },
        getAdTotalDuration: function () {
          return this._adsAdapter
            ? this._adsAdapter.chronos.total.getDeltaTime(!1)
            : -1;
        },
        getAdViewedDuration: function () {
          return this._getTimeMaxOrAcum(!0);
        },
        getAdViewability: function () {
          return this._getTimeMaxOrAcum();
        },
        _getTimeMaxOrAcum: function (a) {
          var l = 0;
          return (
            this._adsAdapter &&
              this._adsAdapter.chronos.viewedMax.forEach(function (v) {
                a
                  ? (l += v.getDeltaTime(!1))
                  : (l = Math.max(v.getDeltaTime(!1), l));
              }),
            l
          );
        },
        getAudioEnabled: function () {
          return this._safeGetterAdsAdapter("getAudioEnabled");
        },
        getIsSkippable: function () {
          return this._safeGetterAdsAdapter("getIsSkippable");
        },
        getIsFullscreen: function () {
          return this._safeGetterAdsAdapter("getIsFullscreen");
        },
        _safeGetterAdsAdapter: function (a, l) {
          var v = null;
          if (l && this.options[l]) v = this.options[l];
          else
            try {
              this._adsAdapter &&
                typeof this._adsAdapter[a] == "function" &&
                (v = this._adsAdapter[a]());
            } catch (T) {
              e.warn("An error occured while calling " + a, T);
            }
          return v;
        },
        getNewAdNumber: function () {
          var a = this.requestBuilder.lastSent.adNumber;
          return (
            a && this.requestBuilder.lastSent.position === this.getAdPosition()
              ? (a += 1)
              : (a = 1),
            (this.requestBuilder.lastSent.adNumber = a),
            a
          );
        },
        getNewAdNumberInBreak: function () {
          return (
            this._adNumberInBreak++,
            (this.requestBuilder.lastSent.adNumberInBreak =
              this._adNumberInBreak),
            this._adNumberInBreak
          );
        },
        getNewBreakNumber: function () {
          var a = 1;
          return (
            (this._adNumberInBreak = 0),
            this.requestBuilder.lastSent.breakNumber &&
              (a = this.requestBuilder.lastSent.breakNumber + 1),
            (this.requestBuilder.lastSent.breakNumber = a),
            a
          );
        },
      };
    return (Se = o), Se;
  }
  var Ae, yi;
  function or() {
    if (yi) return Ae;
    yi = 1;
    var t = O,
      e = j,
      i = {
        _startPings: function () {
          this._ping.isRunning || this._ping.start();
        },
        _stopPings: function () {
          this._ping.stop();
        },
        _sendPing: function (s) {
          var n = {
            diffTime: s,
            entities: this.requestBuilder.getChangedEntities([
              this,
              this.plugin,
            ]),
          };
          if (
            (this._adapter &&
              (this._adapter.flags.isPaused
                ? (n = this.requestBuilder.fetchParams(
                    n,
                    ["pauseDuration"],
                    !1,
                    [this, this.plugin]
                  ))
                : (n = this.requestBuilder.fetchParams(
                    n,
                    ["bitrate", "throughput", "fps"],
                    !1,
                    [this, this.plugin]
                  )),
              this._adapter.flags.isJoined &&
                (n = this.requestBuilder.fetchParams(n, ["playhead"], !1, [
                  this,
                  this.plugin,
                ])),
              this._adapter.flags.isBuffering &&
                (n = this.requestBuilder.fetchParams(
                  n,
                  ["bufferDuration"],
                  !1,
                  [this, this.plugin]
                )),
              this._adapter.flags.isSeeking &&
                (n = this.requestBuilder.fetchParams(n, ["seekDuration"], !1, [
                  this,
                  this.plugin,
                ]))),
            this._adsAdapter &&
              !this.options["ad.ignore"] &&
              (this._adsAdapter.flags.isStarted &&
                ((n = this.requestBuilder.fetchParams(
                  n,
                  ["adPlayhead", "adViewedDuration", "adViewability"],
                  !1,
                  [this, this.plugin]
                )),
                this._adsAdapter.flags.isPaused
                  ? (n = this.requestBuilder.fetchParams(
                      n,
                      ["adPauseDuration"],
                      !1,
                      [this, this.plugin]
                    ))
                  : (n = this.requestBuilder.fetchParams(n, ["adBitrate"], !1, [
                      this,
                      this.plugin,
                    ]))),
              this._adsAdapter.flags.isBuffering &&
                (n = this.requestBuilder.fetchParams(
                  n,
                  ["adBufferDuration"],
                  !1,
                  [this, this.plugin]
                ))),
            this.controlPlayerExists() &&
              this._adapter &&
              !this._adapter.checkExistsPlayer())
          ) {
            t.debug("Detected player no exists, and fire stop event"),
              this._adapter.fireStop();
            return;
          }
          this._send(e.WillSendEvent.WILL_SEND_PING, e.Service.PING, n),
            this.startDelayed && this._retryStart(),
            t.verbose(e.Service.PING);
        },
      };
    return (Ae = i), Ae;
  }
  var Ee, bi;
  function Te() {
    if (bi) return Ee;
    bi = 1;
    var t = J,
      e = nt,
      i = he,
      s = rt,
      n = O,
      r = j,
      o = q,
      a = et,
      l = ue,
      v = X,
      T = ft(),
      d = St,
      A = Ue,
      N = sr,
      g = t.extend({
        constructor: function (u, S, m, E) {
          (this._key = u),
            (this._adapterClasses = {}),
            (this.plugin = S),
            (this.isInitiated = !1),
            (this.isAdsManifestSent = !1),
            (this.playedPostrolls = 0),
            (this.isBreakStarted = !1),
            (this.initChrono = new e()),
            (this.options = new i(m)),
            (this._adNumber = 0),
            (this._adNumberInBreak = 0),
            (this.requestBuilder = new d()),
            (this.hybridNetwork = new A()),
            (this.resizeScrollDetector = new N(S, this)),
            (this._adapter = null),
            (this._adsAdapter = null),
            E && this.setAdapter(E, S),
            (this._pluginLogsQueue = []),
            (this.lastEventTime = null),
            (this._ping = new s(this._sendPing.bind(this), 5e3));
        },
        mergeOptions: function (u) {
          u && this.options.setOptions(u, this.options);
        },
        getVideoKey: function () {
          return this._key;
        },
        getAdapterClasses: function () {
          return this._adapterClasses;
        },
        nextView: function () {
          return (
            (this._viewIndex = new Date().getTime()),
            (this._viewCode = this.plugin.fastDataTransform.response.code),
            this.getViewCode()
          );
        },
        getViewCode: function () {
          return (
            this._viewCode ||
              (this._viewCode = this.plugin.fastDataTransform.response.code),
            this._viewCode + "_" + this._viewIndex
          );
        },
        setAdapter: function (u, S) {
          (this.plugin = S),
            (this._adapter = u),
            this._adapter.setIsAds(!1),
            (this._adapter._setAdapter = !0),
            (this.contentAdapterListeners = {}),
            (this.contentAdapterListeners[T.Event.START] =
              this._startListener.bind(this)),
            (this.contentAdapterListeners[T.Event.JOIN] =
              this._joinListener.bind(this)),
            (this.contentAdapterListeners[T.Event.PAUSE] =
              this._pauseListener.bind(this)),
            (this.contentAdapterListeners[T.Event.RESUME] =
              this._resumeListener.bind(this)),
            (this.contentAdapterListeners[T.Event.SEEK_BEGIN] =
              this._seekBufferBeginListener.bind(this)),
            (this.contentAdapterListeners[T.Event.SEEK_END] =
              this._seekEndListener.bind(this)),
            (this.contentAdapterListeners[T.Event.BUFFER_BEGIN] =
              this._seekBufferBeginListener.bind(this)),
            (this.contentAdapterListeners[T.Event.BUFFER_END] =
              this._bufferEndListener.bind(this)),
            (this.contentAdapterListeners[T.Event.ERROR] =
              this._errorListener.bind(this)),
            (this.contentAdapterListeners[T.Event.STOP] =
              this._stopListener.bind(this)),
            (this.contentAdapterListeners[T.Event.VIDEO_EVENT] =
              this._videoEventListener.bind(this));
          for (var m in this.contentAdapterListeners)
            this._adapter.on(m, this.contentAdapterListeners[m]);
        },
        getAdapter: function () {
          return this._adapter;
        },
        removeAdapter: function () {
          try {
            if (this._adapter) {
              if ((this._adapter.dispose(), this.contentAdapterListeners)) {
                for (var u in this.contentAdapterListeners)
                  this._adapter.off(u, this.contentAdapterListeners[u]);
                delete this.contentAdapterListeners;
              }
              this._adapter = null;
            }
          } catch {
            n.error(
              "Is not possible to remove adapter for video: " + this._key
            );
          }
        },
        getAdsAdapter: function () {
          return this._adsAdapter;
        },
        fireInit: function (u, S) {
          this.isInitiated ||
            ((!this.getAdapter() ||
              (this.getAdapter() && !this.getAdapter().flags.isStarted)) &&
              (this.nextView(),
              this.plugin._initComm(this._key),
              this._startPings(),
              this.initChrono.start(),
              (this.isInitiated = !0),
              (u = u || {}),
              S && (u.triggeredEvents = [S]),
              this._send(r.WillSendEvent.WILL_SEND_INIT, r.Service.INIT, u),
              this._adSavedError(),
              this._adSavedManifest(),
              n.notice(
                "[" +
                  this.getViewCode() +
                  "] (Video Space " +
                  this.getVideoKey() +
                  ") " +
                  r.Service.INIT +
                  ", title/res: " +
                  (u.title || u.mediaResource) +
                  (u.triggeredEvents
                    ? ", eventsTriggered: " + u.triggeredEvents
                    : "")
              )));
        },
        fireError: function (u, S, m, E, L, c) {
          this.fireInit();
          var h = o.buildErrorParams(u, S, m);
          h.code && delete h.code,
            L && ((h = h || {}), (h.triggeredEvents = [L]));
          try {
            var f = this.requestBuilder.getChangedEntities([this, this.plugin]);
            f && ((h = h || {}), (h.entites = f));
          } catch {}
          try {
            (c = c || !1),
              c &&
                this._adapter &&
                this._adapter.flags &&
                this._adapter.flags.isJoined &&
                ((h = h || {}), (h.errorType = "fatal"));
          } catch {}
          this._send(r.WillSendEvent.WILL_SEND_ERROR, r.Service.ERROR, h),
            this._adSavedError(),
            this._adSavedManifest(),
            n.notice(
              "[" +
                this.getViewCode() +
                "] (Video Space " +
                this.getVideoKey() +
                ") " +
                r.Service.ERROR +
                ", errorType: " +
                h.errorType +
                ", errorCode: " +
                h.errorCode +
                (h.triggeredEvents
                  ? ", eventsTriggered: " + h.triggeredEvents
                  : "")
            ),
            h.errorLevel === "fatal" && this.fireStop();
        },
        fireFatalError: function (u, S, m, E, L) {
          this.fireError(u, S, m, E, L, !0);
        },
        fireStop: function (u, S) {
          if (this.isInitiated || this.isStarted) {
            this._adapter &&
              ((this._adapter.flags.isStopped = !0),
              this._adapter.monitor && this._adapter.monitor.stop()),
              this._adsAdapter &&
                this.isBreakStarted &&
                (this._adsAdapter.fireStop(), this._adsAdapter.fireBreakStop()),
              (u = u || {}),
              S && ((u = u || {}), (u.triggeredEvents = [S]));
            try {
              var m = this.requestBuilder.getChangedEntities([
                this,
                this.plugin,
              ]);
              m && ((u = u || {}), (u.entites = m));
            } catch {}
            this._send(r.WillSendEvent.WILL_SEND_STOP, r.Service.STOP, u);
            var E = this._adapter ? this._adapter.chronos : null;
            E &&
              (E.total.stop(),
              E.join.reset(),
              E.pause.reset(),
              E.buffer.reset(),
              E.seek.reset()),
              n.notice(
                "[" +
                  this.getViewCode() +
                  "] (Video Space " +
                  this.getVideoKey() +
                  ") " +
                  r.Service.STOP +
                  " at " +
                  u.playhead +
                  "s" +
                  (u.triggeredEvents
                    ? ", eventsTriggered: " + u.triggeredEvents
                    : "")
              ),
              this._reset();
          }
        },
        fireOfflineEvents: function (u) {
          this.options && !this.options.offline
            ? !this.isInitiated &&
              (!this._adapter || !this._adapter.flags.isStarted) &&
              (!this._adsAdapter || !this._adsAdapter.flags.isStarted)
              ? ((this._offlineParams = u),
                this.fastDataTransform.response.code &&
                this.fastDataTransform.response.host
                  ? this._generateAndSendOffline()
                  : ((this.offlineReference =
                      this._generateAndSendOffline.bind(this)),
                    this.fastDataTransform.on(
                      a.Event.DONE,
                      this.offlineReference
                    )))
              : n.error("Adapters have to be stopped")
            : n.error(
                "To send offline events, offline option must be disabled"
              );
        },
        _generateAndSendOffline: function () {
          if (this.options.disableStorage) return null;
          var u = this._offlineParams;
          for (this.plugin._initComm(this._key); ; ) {
            var S = this.requestBuilder.buildBody(r.Service.OFFLINE_EVENTS, [
              this.plugin,
            ]).viewJson;
            if (S[0] === null) break;
            var m = this.nextView(),
              E = S[0]
                .replace(/CODE_PLACEHOLDER/g, m.toString())
                .replace(/,"sessionId":"SESSION_PLACEHOLDER"/g, "")
                .replace(/,"sessionRoot":"ROOT_PLACEHOLDER"/g, "");
            this._send(
              r.WillSendEvent.WILL_SEND_OFFLINE_EVENTS,
              r.Service.OFFLINE_EVENTS,
              u,
              E,
              "POST",
              function (L, c) {
                this.offlineStorage.removeView(c.offlineId);
              }.bind(this),
              { offlineId: S[1] }
            );
          }
          this.offlineStorage.sent(), (this._offlineParams = null);
        },
        _reset: function () {
          try {
            this._stopPings(),
              (this.resourceTransform = new l(this)),
              this._adapter && this._adapter.flags.reset(),
              (this.isInitiated = !1),
              (this.isStarted = !1),
              (this.startDelayed = !1),
              (this.isAdsManifestSent = !1),
              this.initChrono.reset(),
              (this._totalPrerollsTime = 0),
              (this.requestBuilder.lastSent.breakNumber = 0),
              (this.requestBuilder.lastSent.adNumber = 0),
              (this._savedAdManifest = null),
              (this._savedAdError = null),
              (this.playedPostrolls = 0),
              (this.isBreakStarted = !1),
              (this._adNumber = 0),
              (this._adNumberInBreak = 0);
          } catch {}
        },
        _send: function (u, S, m, E, L, c, h) {
          var f = new Date().getTime();
          this.options.preventZombieViews &&
            this.lastEventTime &&
            f > this.lastEventTime + 600 * 1e3 &&
            this.nextView(),
            (this.lastEventTime = S === r.Service.STOP ? null : f),
            (m = this.requestBuilder.buildParams(m, S, [this, this.plugin])),
            this.getIsLive() &&
              ((m.mediaDuration = this.options["content.duration"]),
              (m.playhead = void 0));
          var p = {
            params: m,
            plugin: this,
            adapter: this.getAdapter(),
            adsAdapter: this.getAdsAdapter(),
          };
          if (
            (this.emit(u, p),
            this.plugin.isVideoAnalyticsEnabled() &&
              this.plugin._comm &&
              (m !== null || typeof L < "u") &&
              this.options.enabled)
          ) {
            this.plugin.lastServiceSent = S;
            var R = {};
            typeof L < "u" && L !== "GET" && (R.method = L);
            var _ = new v(null, S, m, R, this.getVideoKey());
            E && _.setBody(E),
              this.plugin.isMethodPostEnabled() && _.setPostRequest(!0),
              this.plugin._comm.sendRequest(_, c, h);
          }
        },
        firePlayerLog: function (u) {
          try {
            if (this.plugin.isPlayerLogsEnabled())
              if (this._adapter && !this._adapter.isStarted())
                (u.timemark = new Date().getTime()),
                  this._pluginLogsQueue.push(u);
              else {
                for (; this._pluginLogsQueue.length > 0; ) {
                  var S = this._pluginLogsQueue.shift();
                  this._sendPlayerLog(S);
                }
                this._sendPlayerLog(u);
              }
          } catch {}
        },
        _sendPlayerLog: function (u) {
          try {
            u &&
              u.logType &&
              u.logAction &&
              n.notice(
                "[" +
                  this.getViewCode() +
                  "] (Video Space " +
                  this.getVideoKey() +
                  ") PlayerLog " +
                  u.logType +
                  ": Action " +
                  u.logAction
              ),
              this.plugin._comm &&
                u &&
                ((u = this.requestBuilder.buildParams(
                  u,
                  r.Service.VIDEO_PLUGIN_LOGS,
                  this
                )),
                u !== null &&
                  this.plugin._comm.sendRequest(
                    new v(
                      null,
                      r.Service.VIDEO_PLUGIN_LOGS,
                      u,
                      {},
                      this.getVideoKey()
                    )
                  ));
          } catch {}
        },
      });
    return (
      o.assign(g.prototype, nr()),
      o.assign(g.prototype, rr()),
      o.assign(g.prototype, ar()),
      o.assign(g.prototype, or()),
      (Ee = g),
      Ee
    );
  }
  var Li = et,
    At = j,
    ur = Li.extend({
      _services: [At.Service.INIT, At.Service.START, At.Service.OFFLINE_EVENTS],
      isBlocking: function (t) {
        if (this._isBusy && t != null) {
          if (this._services.indexOf(t.service) !== -1) this.done();
          else if (t.service === At.Service.ERROR) return !1;
        }
        return Li.prototype.isBlocking.apply(this, arguments);
      },
    }),
    lr = ur,
    dr = k,
    Et = O,
    hr = dr.extend({
      constructor: function (t, e, i, s) {
        (this.prefix = t || "npaw"),
          (this.disableCookies = e),
          (this.forceCookies = i),
          (this.disabled = s);
      },
      updateStorageOptions: function (t, e, i) {
        (this.disableCookies = t), (this.forceCookies = e), (this.disabled = i);
      },
      isEnabled: function () {
        if (this.disabled) return !1;
        var t = !0;
        if (!this.forceCookies)
          try {
            localStorage.setItem(this.prefix + ".test", "true"),
              localStorage.removeItem(this.prefix + ".test");
          } catch {
            t = !1;
          }
        return t;
      },
      setLocal: function (t, e) {
        if (this.disabled) return null;
        var i = null;
        try {
          this.forceCookies ||
          ((typeof localStorage > "u" || !localStorage) && !this.disableCookies)
            ? (i = this._setCookie(this.prefix + ".local." + t, e))
            : (i = localStorage.setItem(this.prefix + "." + t, e));
        } catch {
          Et.error(
            "Npaw App Analytics needs localStorage or cookies, not supported by your browser."
          );
        }
        return i;
      },
      getLocal: function (t) {
        return this.disabled
          ? null
          : this._localGetRemove("getItem", "_getCookie", t);
      },
      removeLocal: function (t) {
        return this.disabled
          ? null
          : this._localGetRemove("removeItem", "_removeCookie", t);
      },
      _localGetRemove: function (t, e, i) {
        var s = null;
        try {
          this.forceCookies ||
          ((typeof localStorage > "u" || !localStorage) && !this.disableCookies)
            ? (s = this[e](this.prefix + ".local." + i))
            : (s = localStorage[t](this.prefix + "." + i));
        } catch {
          Et.error(
            "Npaw App Analytics needs localStorage or cookies, not supported by your browser."
          );
        }
        return s;
      },
      setSession: function (t, e) {
        if (this.disabled) return null;
        var i = null;
        try {
          this.forceCookies ||
          ((typeof sessionStorage > "u" || !sessionStorage) &&
            !this.disableCookies)
            ? (i = this._setCookie(this.prefix + ".session." + t, e))
            : (i = sessionStorage.setItem(this.prefix + "." + t, e));
        } catch {
          Et.error(
            "Npaw App Analytics needs sessionStorage or cookies, not supported by your browser."
          );
        }
        return i;
      },
      getSession: function (t) {
        return this.disabled
          ? null
          : this._sessionGetRemove("getItem", "_getCookie", t);
      },
      removeSession: function (t) {
        return this.disabled
          ? null
          : this._sessionGetRemove("removeItem", "_removeCookie", t);
      },
      _sessionGetRemove: function (t, e, i) {
        var s = null;
        try {
          this.forceCookies ||
          ((typeof sessionStorage > "u" || !sessionStorage) &&
            !this.disableCookies)
            ? (s = this[e](this.prefix + ".session." + i))
            : (s = sessionStorage[t](this.prefix + "." + i));
        } catch {
          Et.error(
            "Npaw App Analytics needs sessionStorage or cookies, not supported by your browser."
          );
        }
        return s;
      },
      getStorages: function (t) {
        return this.getSession(t) || this.getLocal(t);
      },
      setStorages: function (t, e) {
        this.setSession(t, e), this.setLocal(t, e);
      },
      removeStorages: function (t) {
        this.removeSession(t), this.removeLocal(t);
      },
      _setCookie: function (t, e) {
        if (typeof document < "u") {
          var i = ";";
          typeof location < "u" &&
            (i +=
              "domain=" +
              location.host
                .split(".")
                .reverse()
                .splice(0, 2)
                .reverse()
                .join(".") +
              ";path=/;"),
            (document.cookie = t + "=" + e + i);
        }
      },
      _getCookie: function (t) {
        if (typeof document < "u")
          for (
            var e = t + "=",
              i = decodeURIComponent(document.cookie),
              s = i.split(";"),
              n = 0;
            n < s.length;
            n++
          ) {
            for (var r = s[n]; r.charAt(0) === " "; ) r = r.substring(1);
            if (r.indexOf(e) === 0) return r.substring(e.length, r.length);
          }
        return null;
      },
      _removeCookie: function (t) {
        this._setCookie(t, "");
      },
    }),
    ye = hr,
    cr = k,
    fr = ye,
    pr = cr.extend({
      constructor: function () {
        (this.storage = new fr("npawOffline", !0)),
          (this.actualView = null),
          (this.viewList = []),
          (this.givenIds = []),
          this._getOldViewList();
      },
      _newView: function () {
        var t = this._getValidId();
        this.storage.setLocal(t, ""),
          this.viewList.push(t),
          this.storage.setLocal("views", this.viewList),
          (this.actualView = t);
      },
      addEvent: function (t, e) {
        if (
          (t === "/start" && this._newView(), t === "/init" || !this.actualView)
        )
          return null;
        var i = '{"request":"' + t.slice(1) + '",';
        i += '"unixtime":' + Date.now() + ",";
        for (var s in e) {
          if (e[s] === void 0) break;
          (i += '"' + s + '":'),
            s === "code"
              ? (i += '"CODE_PLACEHOLDER",')
              : s === "sessionId"
              ? (i += '"SESSION_PLACEHOLDER",')
              : s === "sessionRoot"
              ? (i += '"ROOT_PLACEHOLDER",')
              : typeof e[s] == "string"
              ? (i += '"' + e[s] + '",')
              : typeof e[s] == "object"
              ? (i += '"' + JSON.stringify(e[s]).replace(/"/g, '\\"') + '",')
              : (i += e[s] + ",");
        }
        (i = i.slice(0, -1)), (i += "}");
        var n = this.storage.getLocal(this.actualView);
        n !== "" && (n = n + ","),
          this.storage.setLocal(this.actualView, n + i);
      },
      getView: function () {
        if (this.viewList.length > this.givenIds.length)
          for (var t = 0; ; ) {
            var e = this.viewList[t];
            if (this.givenIds.indexOf(e) < 0)
              return (
                this.givenIds.push(e), ["[" + this.storage.getLocal(e) + "]", e]
              );
            t++;
          }
        return [null, null];
      },
      removeView: function (t) {
        this.storage.removeLocal(t);
        var e = this.viewList.indexOf(t);
        e !== -1 && this.viewList.splice(e, 1),
          (e = this.givenIds.indexOf(t)),
          e !== -1 && this.givenIds.splice(e, 1),
          this.storage.setLocal("views", this.viewList.toString()),
          t === this.actualView && (this.actualView = null);
      },
      _getOldViewList: function () {
        var t = "";
        this.storage.getLocal("views")
          ? (t = this.storage.getLocal("views"))
          : this.storage.setLocal("views", ""),
          t === ""
            ? (this.viewList = [])
            : typeof t.split == "function" && (this.viewList = t.split(","));
      },
      _getValidId: function () {
        var t = Math.floor(Math.random() * 1e8).toString();
        return this.viewList.indexOf(t) >= 0 ? this._getValidId() : t;
      },
      sent: function () {
        this.givenIds = [];
      },
    }),
    gr = pr,
    mr = et,
    vr = mr.extend({
      isBlocking: function (t) {
        return !t.params.sessionId;
      },
    }),
    wi = vr,
    _r = k,
    Sr = rt,
    Ar = nt,
    Er = _r.extend(
      {
        constructor: function (t) {
          (t = t || 500),
            (this._chrono = new Ar()),
            (this._maxScrollPercent = 0),
            t > 0 && (this._timer = new Sr(this.checkScroll.bind(this), t));
        },
        start: function () {
          this.stop(), this._timer && this._timer.start();
        },
        stop: function () {
          (this._maxScrollPercent = 0), this._timer && this._timer.stop();
        },
        getMaxScrollPercent: function () {
          return this._maxScrollPercent;
        },
        resetScrollValue: function () {
          this._maxScrollPercent = 0;
        },
        checkScroll: function () {
          this._maxScrollPercent = parseInt(
            Math.max(this._maxScrollPercent, this._getScrollPercent())
          );
        },
        _getScrollPercent: function () {
          try {
            var t = document.documentElement,
              e = document.body,
              i = "scrollTop",
              s = "scrollHeight",
              n = ((t[i] || e[i]) / ((t[s] || e[s]) - t.clientHeight)) * 100;
            if (n !== 1 / 0 && !isNaN(n))
              return n > 99 && (n = parseInt(100)), n;
          } catch {}
          return 0;
        },
      },
      {}
    ),
    Ni = Er,
    be,
    Di;
  function Tr() {
    if (Di) return be;
    Di = 1;
    var t = {
      getContext: function () {
        return "Default";
      },
      getScrollDepth: function () {
        var e = this.plugin.storage.getSession("pageScrollDepth");
        return this.plugin.storage.removeSession("pageScrollDepth"), e;
      },
      getMaxScrollPercent: function () {
        return this._scrollTracker
          ? this._scrollTracker.getMaxScrollPercent()
          : 0;
      },
      getPageName: function () {
        var e = this.plugin.options.pageTitle || "";
        return (
          !e && typeof document < "u" && document.title && (e = document.title),
          e
        );
      },
      getBeatDimensions: function () {
        return this._beatDimensions;
      },
      getPageLoadTime: function () {
        return this.plugin.browserLoadTimes.getPageLoadTime();
      },
      getIsSessionExpired: function () {
        var e = new Date().getTime();
        return (
          !this.plugin.getSession() ||
          this.getFirstActive() < e - this.sessionExpire
        );
      },
      getIsDataExpired: function () {
        var e = new Date().getTime();
        return (
          !this.plugin.storage.isEnabled() ||
          !this.plugin.getStoredData() ||
          this.getFirstActive() < e - this.sessionExpire
        );
      },
      getLastActive: function () {
        return this.plugin.storage.getStorages("lastactive");
      },
      setLastActive: function (e) {
        this.plugin.storage.setStorages("lastactive", e);
      },
    };
    return (be = t), be;
  }
  var yr = J,
    Pi = mt,
    Ii = wi,
    Tt = q,
    br = rt,
    Ri = X,
    D = j,
    Z = O,
    Lr = Ni,
    Le = yr.extend(
      {
        constructor: function (t) {
          (this.plugin = t),
            (this._beat = new br(this._sendBeat.bind(this), 3e4)),
            (this._scrollTracker = new Lr(500)),
            (this.sessionExpire =
              Number(this.plugin.storage.getLocal("sessionExpire")) * 1e3 ||
              18e4),
            (this.appAnalyticsStarted = !1),
            (this.appAnalyticsStopped = !1),
            (this._lastNavigation = {}),
            (this._lastNavigation.page = ""),
            (this._lastNavigation.route = "");
        },
        _isModuleStarted: function () {
          return this.appAnalyticsStarted;
        },
        updateBeatInterval: function (t) {
          try {
            this._beat &&
              (this._beat.updateInterval(t),
              this._beat.isRunning && (this._beat.stop(), this._beat.start()));
          } catch {}
        },
        andBeyond: function () {
          Le.prototype.begin.apply(this, arguments);
        },
        begin: function (t, e) {
          (e = e || !1),
            e &&
              (this.plugin.storage.removeStorages("appAnalyticsStarted"),
              this.plugin.storage.removeStorages("data"),
              this.plugin.restartFastDataTransform()),
            this.appAnalyticsStarted ||
              ((this._comm = new Pi(this.plugin)),
              this._comm.addTransform(this.plugin.fastDataTransform),
              this._comm.addTransform(new Ii(this.plugin)),
              this._logBeginEvent(t),
              this.plugin &&
                this.plugin.storage &&
                typeof this.plugin.storage.getLocal == "function" &&
                (this._registeredProperties = this.plugin.storage.getLocal(
                  "appAnalyticsRegisteredProperties"
                ))),
            this.appAnalyticsStopped || !this.appAnalyticsStarted
              ? this.fireSessionStart(t)
              : (this.fireNav(t), this._sendExtraBeat());
        },
        _setLastActive: function () {
          this._firstActive || (this._firstActive = this.getFirstActive()),
            this.plugin.storage.setStorages("lastactive", new Date().getTime());
        },
        getFirstActive: function () {
          return Number(this.getLastActive()) || 0;
        },
        getComm: function () {
          return this._comm;
        },
        fireSessionStart: function (t) {
          if (
            (this._logFireSessionStartEvent(t),
            this.appAnalyticsStopped &&
              (this.plugin.restartFastDataTransform(),
              (this._comm = new Pi(this.plugin)),
              this._comm.addTransform(this.plugin.fastDataTransform),
              this._comm.addTransform(new Ii(this.plugin)),
              (this.appAnalyticsStopped = !1)),
            !this.appAnalyticsStarted)
          ) {
            this.plugin.storage.setLocal("appAnalyticsStarted", "true"),
              (this.appAnalyticsStarted = !0);
            var e = this._getParamsJson(t, null, null, !0, !0);
            e &&
              e.params &&
              ((e.params.navDimensions = this._getNavigationDimensions()),
              (e.params.navValues = this._getNavigationValues())),
              this._scrollTracker && this._scrollTracker.start(),
              this._processSessionStart(e),
              this._setLastActive();
          }
        },
        fireSessionStop: function (t) {
          this._logFireSessionStopEvent(t),
            this.appAnalyticsStarted &&
              ((this.appAnalyticsStopped = !0),
              (this.appAnalyticsStarted = !1),
              this.plugin.storage.removeStorages("appAnalyticsStarted"),
              this._processSessionStop(t),
              this.plugin.storage.removeStorages("data"),
              this.plugin.storage.removeStorages("session"),
              this.plugin.storage.removeStorages("lastactive"),
              this._scrollTracker && this._scrollTracker.stop());
        },
        fireSessionError: function (t, e, i, s, n) {
          try {
            var r = Tt.buildSessionErrorParams(t, e, i, s, n);
            this._logFireSessionErrorEvent(r),
              this.appAnalyticsStarted &&
                (this._processSessionError(r), this._setLastActive());
          } catch {}
        },
        newSession: function (t, e) {
          this._logFireNewSessionListener(t, e),
            this.isActive() &&
              (this.appAnalyticsStarted
                ? this.fireSessionStop()
                : (this.plugin.storage.removeStorages("appAnalyticsStarted"),
                  this.plugin.storage.removeStorages("data"),
                  this._comm &&
                    this._comm.removeTransform(this.plugin.fastDataTransform),
                  this.plugin.restartFastDataTransform(),
                  this._comm &&
                    this._comm.addTransform(this.plugin.fastDataTransform))),
            this.plugin.setOptions(t),
            this.begin(e);
        },
        fireNav: function (t) {
          if ((this._logFireNavListener(t), this.isActive())) {
            (this.appAnalyticsStarted = !0),
              (t = this._mergeDimensions(t, this._getNavigationDimensions()));
            var e = this._getNavigationValues(),
              i = this._getParamsJson(t, e, null, !0);
            i &&
              i.params &&
              i.params.route &&
              (this.plugin.options.referer = i.params.route),
              i &&
                i.params &&
                i.params.page &&
                (this.plugin.options.pageTitle = i.params.page),
              this._processNavigation(i);
          }
          this._scrollTracker && this._scrollTracker.resetScrollValue();
        },
        _getNavigationDimensions: function () {
          try {
            var t = this.plugin.storage.getLocal("appAnalyticsDimensions");
            if (t)
              return (
                this.plugin.storage.removeLocal("appAnalyticsDimensions"),
                JSON.parse(t)
              );
          } catch {}
          return null;
        },
        _mergeDimensions: function (t, e) {
          var i = t || {};
          for (var s in e) i[s] = e[s];
          return i;
        },
        _getNavigationValues: function () {
          try {
            var t = this.plugin.storage.getLocal("appAnalyticsValues");
            if (t)
              return (
                this.plugin.storage.removeLocal("appAnalyticsValues"),
                JSON.parse(t)
              );
          } catch {}
          return null;
        },
        storeNavigationInfo: function (t, e) {
          this.plugin.storage.setLocal(
            "appAnalyticsDimensions",
            JSON.stringify(t)
          ),
            this.plugin.storage.setLocal(
              "appAnalyticsValues",
              JSON.stringify(e)
            );
        },
        storeBeatInfo: function (t, e) {
          if (t)
            try {
              this._beatDimensions
                ? (this._beatDimensions = Object.assign(
                    {},
                    this._beatDimensions,
                    t
                  ))
                : (this._beatDimensions = t);
            } catch (s) {
              Z.warn("Issues adding dimensions for beat event: " + s);
            }
          if (e)
            try {
              if (this._beatRequestParams)
                for (var i in e)
                  this._beatRequestParams[i]
                    ? Array.isArray(e[i])
                      ? (this._beatRequestParams[i] = e[i].concat(
                          this._beatRequestParams[i]
                        ))
                      : (this._beatRequestParams[i] = e[i])
                    : (this._beatRequestParams[i] = e[i]);
              else this._beatRequestParams = e;
            } catch (s) {
              Z.warn("Issues adding request params for beat event: " + s);
            }
        },
        resetBeatInfo: function () {
          (this._beatDimensions = null), (this._beatRequestParams = null);
        },
        _sendExtraBeat: function () {
          if (this.plugin && this.plugin._beat) {
            var t = new Date().getTime(),
              e = this.plugin._beat.chrono.startTime
                ? t - this.plugin._beat.chrono.startTime
                : 0;
            this.plugin._sendBeat(e), (this.plugin._beat.chrono.startTime = t);
          }
          this._setLastActive();
        },
        fireEvent: function (t, e, i, s) {
          if ((this._logFireEventListener(t), this.appAnalyticsStarted)) {
            var n = this._getParamsJson(e, i, t);
            Tt.assign(n.params, s || {}),
              this._processCustomEvent(n),
              this._setLastActive();
          }
        },
        register: function (t, e) {
          (this._registeredProperties = { dimensions: t, values: e }),
            this.plugin.storage.setLocal(
              "appAnalyticsRegisteredProperties",
              JSON.stringify(this._registeredProperties)
            );
        },
        registerOnce: function (t, e) {
          this._registeredProperties || this.register(t, e);
        },
        unregister: function () {
          (this._registeredProperties = null),
            this.plugin.storage.removeLocal("appAnalyticsRegisteredProperties");
        },
        _getParamsJson: function (t, e, i, s, n) {
          var r = {};
          if (
            (i && (r.name = i),
            (r.dimensions = t || {}),
            (r.values = e || {}),
            this._registeredProperties)
          ) {
            for (var o in this._registeredProperties.dimensions)
              r.dimensions[o] = this._registeredProperties.dimensions[o];
            for (var a in this._registeredProperties.values)
              r.values[a] = this._registeredProperties.values[a];
          }
          var l = { params: r };
          return (
            s &&
              (l.params.dimensions.page &&
                ((l.params.page = l.params.dimensions.page),
                delete l.params.dimensions.page),
              l.params.dimensions.route &&
                ((l.params.route = l.params.dimensions.route),
                delete l.params.dimensions.route),
              n || delete l.params.dimensions,
              delete l.params.values),
            l
          );
        },
        isActive: function () {
          var t = this.plugin.storage.getLocal("appAnalyticsStarted");
          if (this.appAnalyticsStarted || (t && t !== "false")) return !0;
          var e = new Date().getTime();
          return Number(this.getLastActive()) + this.sessionExpire > e;
        },
        _initAppAnalytics: function () {},
        _sendAppAnalytics: function (t, e, i) {
          if (this.plugin.isAppAnalyticsEnabled()) {
            i = this.plugin.requestBuilder.buildParams(i, e, [
              this,
              this.plugin,
            ]);
            var s = {
              params: i,
              plugin: this,
              adapter: this.plugin.videos.getAdapter(),
              adsAdapter: this.plugin.videos.getVideo().getAdsAdapter(),
            };
            if (
              (this.emit(t, s),
              this._comm && i !== null && this.plugin.options.enabled)
            ) {
              this.lastServiceSent = e;
              var n = new Ri(null, e, i);
              this.plugin.isMethodPostEnabled() && n.setPostRequest(!0),
                this._comm.sendRequest(n);
            }
          }
        },
        _processNavigation: function (t) {
          (t = this._parseInternalParams(t)),
            this._checkDifferentNavigation(t)
              ? (this._sendAppAnalytics(
                  D.WillSendEvent.WILL_SEND_NAV,
                  D.Service.NAV,
                  t
                ),
                this._beat.isRunning || this._beat.start(),
                Z.notice(
                  "[" +
                    this.plugin.fastDataTransform.getSession() +
                    "] " +
                    D.Service.NAV +
                    " " +
                    t.route
                ),
                (this._lastNavigation.page = t.page),
                (this._lastNavigation.route = t.route))
              : Z.warn(
                  "Same navigation detected and ignored for Page and Route"
                );
        },
        _processSessionStart: function (t) {
          (t = this._parseInternalParams(t)),
            this._sendAppAnalytics(
              D.WillSendEvent.WILL_SEND_SESSION_START,
              D.Service.SESSION_START,
              t
            ),
            this._beat.isRunning || this._beat.start(),
            Z.notice(
              "[" +
                this.plugin.fastDataTransform.getSession() +
                "] " +
                D.Service.SESSION_START +
                " " +
                t.route
            );
        },
        _processSessionStop: function (t) {
          (t = this._parseInternalParams(t)),
            this._sendAppAnalytics(
              D.WillSendEvent.WILL_SEND_SESSION_STOP,
              D.Service.SESSION_STOP,
              t
            ),
            this._beat.isRunning && this._beat.stop(),
            Z.notice(
              "[" +
                this.plugin.fastDataTransform.getSession() +
                "] " +
                D.Service.SESSION_STOP +
                " " +
                t.route
            );
        },
        _processSessionError: function (t) {
          (t = this._parseInternalParams(t)),
            this._sendAppAnalytics(
              D.WillSendEvent.WILL_SEND_EVENT,
              D.Service.SESSION_ERROR,
              t
            ),
            Z.notice(
              "[" +
                this.plugin.fastDataTransform.getSession() +
                "] " +
                D.Service.SESSION_ERROR +
                ", Error Code: " +
                t.errorCode +
                ", Msg: " +
                t.msg
            );
        },
        _processCustomEvent: function (t) {
          (t = this._parseInternalParams(t)),
            this._sendAppAnalytics(
              D.WillSendEvent.WILL_SEND_EVENT,
              D.Service.EVENT,
              t
            ),
            Z.notice(
              "[" +
                this.plugin.fastDataTransform.getSession() +
                "] " +
                D.Service.EVENT +
                " " +
                t.name
            );
        },
        _parseInternalParams: function (t) {
          return t ? t.params || t || {} : {};
        },
        _sendBeat: function (t) {
          var e = { diffTime: t };
          try {
            if (
              (this._beatDimensions && (e.dimensions = this._beatDimensions),
              this._beatRequestParams)
            )
              for (var i in this._beatRequestParams)
                e[i] = this._beatRequestParams[i];
          } catch {
            Z.warn(
              "Issue detected adding dimensions and request params in the beat event"
            );
          }
          this.resetBeatInfo(),
            this._sendAppAnalytics(
              D.WillSendEvent.WILL_SEND_BEAT,
              D.Service.BEAT,
              e
            ),
            this && this._setLastActive(),
            Z.verbose(D.Service.BEAT);
        },
        _checkDifferentNavigation: function (t) {
          t = t || {};
          var e =
              this._lastNavigation && t.route === this._lastNavigation.route,
            i = this._lastNavigation && t.page === this._lastNavigation.page;
          return !e || !i;
        },
        getSessionMetrics: function () {
          return Tt.getMetricsFrom(this.plugin.options["session.metrics"]);
        },
        _sendPluginLogs: function (t, e, i) {
          if (this.plugin.isPluginLogsEnabled()) {
            try {
              i &&
                i.logType &&
                i.logAction &&
                Z.notice(
                  "[" +
                    this.plugin.fastDataTransform.getSession() +
                    "] AppAnalyticsLog " +
                    i.logType +
                    ": Action " +
                    i.logAction
                );
            } catch {}
            (i = this.plugin.requestBuilder.buildParams(i, e)),
              this._comm &&
                i !== null &&
                this.plugin.options.enabled &&
                this._comm.sendRequest(new Ri(null, e, i));
          }
        },
        _logBeginEvent: function (t) {
          var e = {
            logs: { data: t },
            logAction: "beginSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            D.WillSendLog.WILL_SEND_LOG_INFINITY_BEGIN,
            D.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireSessionStartEvent: function (t) {
          var e = {
            logs: { data: t },
            logAction: "startSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            D.WillSendLog.WILL_SEND_LOG_INFINITY_START,
            D.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireSessionStopEvent: function (t) {
          var e = {
            logs: { data: t },
            logAction: "stopSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            D.WillSendLog.WILL_SEND_LOG_INFINITY_STOP,
            D.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireSessionErrorEvent: function (t) {
          var e = {
            logs: { data: t },
            logAction: "errorSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            D.WillSendLog.WILL_SEND_LOG_INFINITY_ERROR,
            D.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireEventListener: function (t) {
          var e = {
            logs: { data: t },
            logAction: "eventSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            D.WillSendLog.WILL_SEND_LOG_INFINITY_EVENT,
            D.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireNavListener: function (t) {
          var e = {
            logs: { data: t },
            logAction: "nav",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            D.WillSendLog.WILL_SEND_LOG_INFINITY_NAV,
            D.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireNewSessionListener: function (t, e) {
          var i = {
            logs: { data: t, params: e },
            logAction: "newSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            D.WillSendLog.WILL_SEND_LOG_INFINITY_NAV,
            D.Service.APP_ANALYTICS_PLUGIN_LOGS,
            i
          );
        },
      },
      {
        Event: {
          NAV: "nav",
          SESSION_START: "sessionStart",
          SESSION_STOP: "sessionStop",
          BEAT: "beat",
          EVENT: "event",
        },
        PluginLogs: [
          D.Service.APP_ANALYTICS_PLUGIN_LOGS,
          D.Service.VIDEO_PLUGIN_LOGS,
        ],
      }
    );
  Tt.assign(Le.prototype, Tr());
  var we = Le,
    Ne,
    Ci;
  function wr() {
    if (Ci) return Ne;
    Ci = 1;
    var t = {
      getContext: function () {
        return "Default";
      },
      getScrollDepth: function () {
        var e = this.plugin.storage.getSession("pageScrollDepth");
        return this.plugin.storage.removeSession("pageScrollDepth"), e;
      },
      getMaxScrollPercent: function () {
        return this._scrollTracker
          ? this._scrollTracker.getMaxScrollPercent()
          : 0;
      },
      getPageName: function () {
        var e = this.plugin.options.pageTitle || "";
        return (
          !e && typeof document < "u" && document.title && (e = document.title),
          e
        );
      },
      getBeatDimensions: function () {
        return this._beatDimensions;
      },
      getPageLoadTime: function () {
        return this.plugin.browserLoadTimes.getPageLoadTime();
      },
      getIsSessionExpired: function () {
        var e = new Date().getTime();
        return (
          !this.plugin.getSession() ||
          this.getFirstActive() < e - this.sessionExpire
        );
      },
      getIsDataExpired: function () {
        var e = new Date().getTime();
        return (
          !this.plugin.storage.isEnabled() ||
          !this.plugin.getStoredData() ||
          this.getFirstActive() < e - this.sessionExpire
        );
      },
      getLastActive: function () {
        return this.plugin.storage.getStorages("lastactive");
      },
      setLastActive: function (e) {
        this.plugin.storage.setStorages("lastactive", e);
      },
    };
    return (Ne = t), Ne;
  }
  var Nr = J,
    Oi = mt,
    Bi = wi,
    yt = q,
    Dr = rt,
    ki = X,
    P = j,
    G = O,
    Pr = Ni,
    Ir = St,
    xi = Nr.extend(
      {
        constructor: function (t) {
          (this.plugin = t),
            (this._beat = new Dr(this._sendBeat.bind(this), 3e4)),
            (this._scrollTracker = new Pr(500)),
            (this.sessionExpire =
              Number(this.plugin.storage.getLocal("sessionExpire")) * 1e3 ||
              18e4),
            (this.productAnalyticsStarted = !1),
            (this.productAnalyticsStopped = !1),
            (this._lastNavigation = {}),
            (this._lastNavigation.page = ""),
            (this._lastNavigation.route = ""),
            (this.requestBuilder = new Ir()),
            (this._productAnalyticsSettings = {}),
            (this._events = []),
            (this._page = null),
            (this._npawtmConfig = window.npawtmConfig);
        },
        _isModuleStarted: function () {
          return this.productAnalyticsStarted;
        },
        updateBeatInterval: function (t) {
          try {
            this._beat &&
              (this._beat.updateInterval(t),
              this._beat.isRunning && (this._beat.stop(), this._beat.start()));
          } catch {}
        },
        initialize: function (t, e) {
          e
            ? (this._npawtmConfig = e)
            : window.npawtmConfig
            ? (this._npawtmConfig = window.npawtmConfig)
            : this._npawtmConfig,
            (this._productAnalyticsSettings = {
              userId: null,
              autoTrackPageViews: !0,
              trackOnlyNPAWTMPageViews: !1,
            }),
            Object.assign(this._productAnalyticsSettings, t),
            this._initProductAnalyticsModule();
        },
        _initProductAnalyticsModule: function () {
          this._identify(), this._trackNavigation(), this._trackAttribution();
          var t = this;
          window.addEventListener("load", function () {
            t._bindElements();
          });
        },
        _elementEvent: function (t, e, i, s) {
          var n = "[" + i + "] " + e.name;
          this.fireEvent(n, {
            location: t,
            uiElement: e.name,
            eventName: n,
            eventType: i,
          });
        },
        _bindElements: function () {
          var t, e, i, s, n, r;
          for (r = 0; r < this._events.length; r++)
            if (
              ((t = this._events[r]),
              (i = document.querySelector(t.selector)),
              i === null)
            )
              G.warn(
                "NPAW Product Analytics: element " + t.selector + " not found"
              );
            else if (t.events.length === 0)
              G.warn(
                "NPAW Product Analytics: element " +
                  t.selector +
                  " has no events to bind"
              );
            else
              for (s = this, n = 0; n < t.events.length; n++)
                (e = t.events[n]),
                  (i.npawEventInfo = t),
                  (i.npawEventType = e),
                  i.addEventListener(e, function (o) {
                    var a = o.currentTarget.npawEventInfo,
                      l = o.currentTarget.npawEventType;
                    s._elementEvent(s._page, a, l, o);
                  });
        },
        _trackNavigation: function () {
          var t, e;
          if (
            !this._productAnalyticsSettings.trackOnlyNPAWTMPageViews ||
            this._page !== null
          ) {
            this._page === null
              ? (e = window.location.pathname)
              : (e = this._page),
              (t = "[Navigation] " + e);
            var i = this._getUTMParams(!0);
            i && this.plugin.setOptions(i),
              this.begin({ route: window.location.href, page: e }),
              this.fireEvent(t, {
                page: e,
                eventName: t,
                eventType: "navigation",
              });
          }
        },
        _trackAttribution: function () {
          var t = this._getUTMParams(!1);
          if (t && Object.keys(t).length > 0) {
            var e = {};
            (e.eventName = "attribution"),
              (e.eventType = "attribution"),
              (e.url = window.location.href),
              this._page === null
                ? (e.location = window.location.pathname)
                : (e.location = this._page),
              this.fireEvent(e.eventName, e, {}, t);
          }
        },
        _getUTMParams: function (t) {
          var e = [
              "utm_source",
              "utm_medium",
              "utm_campaign",
              "utm_term",
              "utm_content",
            ],
            i = {},
            s = new URLSearchParams(window.location.search);
          return (
            e.forEach(function (n) {
              s.has(n) && (i[this._convertUTMKey(n, t)] = s.get(n));
            }, this),
            i
          );
        },
        _convertUTMKey: function (t, e) {
          if (e) return t.replace("_", ".");
          var i = t.split("_");
          return i.length > 1
            ? i[0] + i[1].charAt(0).toUpperCase() + i[1].slice(1)
            : t;
        },
        _getPage: function (t) {
          var e,
            i,
            s,
            n,
            r,
            o = null;
          if (
            t !== null &&
            this._npawtmConfig.domains.includes(t.hostname.toLowerCase())
          )
            for (
              s = this._npawtmConfig.urls[t.pathname],
                typeof s < "u" && typeof s.page < "u" && (o = s.page),
                e = t.pathname + t.search,
                r = 0;
              r < this._npawtmConfig.regexes.length && o === null;
              r++
            )
              (i = this._npawtmConfig.regexes[r]),
                (n = new RegExp(i.regex)),
                e.match(n) && (o = i.page);
          return o;
        },
        _getEvents: function (t) {
          var e = this._npawtmConfig.events[t];
          return (typeof e > "u" || e === null) && (e = []), e;
        },
        _identify: function () {
          (this._page = null),
            (this._events = []),
            typeof this._npawtmConfig > "u" || this._npawtmConfig === null
              ? G.warn("NPAW Product Analytics: no config descriptor available")
              : ((this._page = this._getPage(window.location)),
                this._page === null
                  ? G.warn("NPAW Product Analytics: no page found")
                  : (this._events = this._getEvents(this._page)));
        },
        begin: function (t, e) {
          (e = e || !1),
            e &&
              (this.plugin.storage.removeStorages("productAnalyticsStarted"),
              this.plugin.storage.removeStorages("data"),
              this.plugin.restartFastDataTransform()),
            this.productAnalyticsStarted ||
              ((this._comm = new Oi(this.plugin)),
              this._comm.addTransform(this.plugin.fastDataTransform),
              this._comm.addTransform(new Bi(this.plugin)),
              this._logBeginEvent(t),
              this.plugin &&
                this.plugin.storage &&
                typeof this.plugin.storage.getLocal == "function" &&
                (this._registeredProperties = this.plugin.storage.getLocal(
                  "productAnalyticsRegisteredProperties"
                ))),
            this.productAnalyticsStopped || !this.productAnalyticsStarted
              ? this.fireSessionStart(t)
              : (this.fireNav(t), this._sendExtraBeat());
        },
        _setLastActive: function () {
          this._firstActive || (this._firstActive = this.getFirstActive()),
            this.plugin.storage.setStorages("lastactive", new Date().getTime());
        },
        getFirstActive: function () {
          return Number(this.getLastActive()) || 0;
        },
        getComm: function () {
          return this._comm;
        },
        fireSessionStart: function (t) {
          if (
            (this._logFireSessionStartEvent(t),
            this.productAnalyticsStopped &&
              (this.plugin.restartFastDataTransform(),
              (this._comm = new Oi(this.plugin)),
              this._comm.addTransform(this.plugin.fastDataTransform),
              this._comm.addTransform(new Bi(this.plugin)),
              (this.productAnalyticsStopped = !1)),
            !this.productAnalyticsStarted)
          ) {
            this.plugin.storage.setLocal("productAnalyticsStarted", "true"),
              (this.productAnalyticsStarted = !0);
            var e = this._getParamsJson(t, null, null, !0, !0);
            e &&
              e.params &&
              ((e.params.navDimensions = this._getNavigationDimensions()),
              (e.params.navValues = this._getNavigationValues())),
              this._scrollTracker && this._scrollTracker.start(),
              this._processSessionStart(e),
              this._setLastActive();
          }
        },
        fireSessionStop: function (t) {
          this._logFireSessionStopEvent(t),
            this.productAnalyticsStarted &&
              ((this.productAnalyticsStopped = !0),
              (this.productAnalyticsStarted = !1),
              this.plugin.storage.removeStorages("productAnalyticsStarted"),
              this._processSessionStop(t),
              this.plugin.storage.removeStorages("data"),
              this.plugin.storage.removeStorages("session"),
              this.plugin.storage.removeStorages("lastactive"),
              this._scrollTracker && this._scrollTracker.stop());
        },
        fireSessionError: function (t, e, i, s, n) {
          try {
            var r = yt.buildSessionErrorParams(t, e, i, s, n);
            this._logFireSessionErrorEvent(r),
              this.productAnalyticsStarted &&
                (this._processSessionError(r), this._setLastActive());
          } catch {}
        },
        newSession: function (t, e) {
          this._logFireNewSessionListener(t, e),
            this.isActive() &&
              (this.productAnalyticsStarted
                ? this.fireSessionStop()
                : (this.plugin.storage.removeStorages(
                    "productAnalyticsStarted"
                  ),
                  this.plugin.storage.removeStorages("data"),
                  this._comm &&
                    this._comm.removeTransform(this.plugin.fastDataTransform),
                  this.plugin.restartFastDataTransform(),
                  this._comm &&
                    this._comm.addTransform(this.plugin.fastDataTransform))),
            this.plugin.setOptions(t),
            this.begin(e);
        },
        fireNav: function (t) {
          if ((this._logFireNavListener(t), this.isActive())) {
            (this.productAnalyticsStarted = !0),
              (t = this._mergeDimensions(t, this._getNavigationDimensions()));
            var e = this._getNavigationValues(),
              i = this._getParamsJson(t, e, null, !0);
            i &&
              i.params &&
              i.params.route &&
              (this.plugin.options.referer = i.params.route),
              i &&
                i.params &&
                i.params.page &&
                (this.plugin.options.pageTitle = i.params.page),
              this._processNavigation(i);
          }
          this._scrollTracker && this._scrollTracker.resetScrollValue();
        },
        _getNavigationDimensions: function () {
          try {
            var t = this.plugin.storage.getLocal("productAnalyticsDimensions");
            if (t)
              return (
                this.plugin.storage.removeLocal("productAnalyticsDimensions"),
                JSON.parse(t)
              );
          } catch {}
          return null;
        },
        _mergeDimensions: function (t, e) {
          var i = t || {};
          for (var s in e) i[s] = e[s];
          return i;
        },
        _getNavigationValues: function () {
          try {
            var t = this.plugin.storage.getLocal("productAnalyticsValues");
            if (t)
              return (
                this.plugin.storage.removeLocal("productAnalyticsValues"),
                JSON.parse(t)
              );
          } catch {}
          return null;
        },
        storeNavigationInfo: function (t, e) {
          this.plugin.storage.setLocal(
            "productAnalyticsDimensions",
            JSON.stringify(t)
          ),
            this.plugin.storage.setLocal(
              "productAnalyticsValues",
              JSON.stringify(e)
            );
        },
        storeBeatInfo: function (t, e) {
          if (t)
            try {
              this._beatDimensions
                ? (this._beatDimensions = Object.assign(
                    {},
                    this._beatDimensions,
                    t
                  ))
                : (this._beatDimensions = t);
            } catch (s) {
              G.warn("Issues adding dimensions for beat event: " + s);
            }
          if (e)
            try {
              if (this._beatRequestParams)
                for (var i in e)
                  this._beatRequestParams[i]
                    ? Array.isArray(e[i])
                      ? (this._beatRequestParams[i] = e[i].concat(
                          this._beatRequestParams[i]
                        ))
                      : (this._beatRequestParams[i] = e[i])
                    : (this._beatRequestParams[i] = e[i]);
              else this._beatRequestParams = e;
            } catch (s) {
              G.warn("Issues adding request params for beat event: " + s);
            }
        },
        resetBeatInfo: function () {
          (this._beatDimensions = null), (this._beatRequestParams = null);
        },
        _sendExtraBeat: function () {
          if (this.plugin && this.plugin._beat) {
            var t = new Date().getTime(),
              e = this.plugin._beat.chrono.startTime
                ? t - this.plugin._beat.chrono.startTime
                : 0;
            this.plugin._sendBeat(e), (this.plugin._beat.chrono.startTime = t);
          }
          this._setLastActive();
        },
        fireEvent: function (t, e, i, s) {
          if ((this._logFireEventListener(t), this.productAnalyticsStarted)) {
            var n = this._getParamsJson(e, i, t);
            yt.assign(n.params, s || {}),
              this._processCustomEvent(n),
              this._setLastActive();
          }
        },
        register: function (t, e) {
          (this._registeredProperties = { dimensions: t, values: e }),
            this.plugin.storage.setLocal(
              "productAnalyticsRegisteredProperties",
              JSON.stringify(this._registeredProperties)
            );
        },
        registerOnce: function (t, e) {
          this._registeredProperties || this.register(t, e);
        },
        unregister: function () {
          (this._registeredProperties = null),
            this.plugin.storage.removeLocal(
              "productAnalyticsRegisteredProperties"
            );
        },
        _getParamsJson: function (t, e, i, s, n) {
          var r = {};
          if (
            (i && (r.name = i),
            (r.dimensions = t || {}),
            (r.values = e || {}),
            this._registeredProperties)
          ) {
            for (var o in this._registeredProperties.dimensions)
              r.dimensions[o] = this._registeredProperties.dimensions[o];
            for (var a in this._registeredProperties.values)
              r.values[a] = this._registeredProperties.values[a];
          }
          var l = { params: r };
          return (
            s &&
              (l.params.dimensions.page &&
                ((l.params.page = l.params.dimensions.page),
                delete l.params.dimensions.page),
              l.params.dimensions.route &&
                ((l.params.route = l.params.dimensions.route),
                delete l.params.dimensions.route),
              n || delete l.params.dimensions,
              delete l.params.values),
            l
          );
        },
        isActive: function () {
          var t = this.plugin.storage.getLocal("productAnalyticsStarted");
          if (this.productAnalyticsStarted || (t && t !== "false")) return !0;
          var e = new Date().getTime();
          return Number(this.getLastActive()) + this.sessionExpire > e;
        },
        _initProductAnalytics: function () {},
        _sendProductAnalytics: function (t, e, i) {
          if (this.plugin.isProductAnalyticsEnabled()) {
            i = this.plugin.requestBuilder.buildParams(i, e, [
              this,
              this.plugin,
            ]);
            var s = {
              params: i,
              plugin: this,
              adapter: this.plugin.videos.getAdapter(),
              adsAdapter: this.plugin.videos.getVideo().getAdsAdapter(),
            };
            if (
              (this.emit(t, s),
              this._comm && i !== null && this.plugin.options.enabled)
            ) {
              this.lastServiceSent = e;
              var n = new ki(null, e, i);
              this.plugin.isMethodPostEnabled() && n.setPostRequest(!0),
                this._comm.sendRequest(n);
            }
          }
        },
        _processNavigation: function (t) {
          (t = this._parseInternalParams(t)),
            this._checkDifferentNavigation(t)
              ? (this._sendProductAnalytics(
                  P.WillSendEvent.WILL_SEND_NAV,
                  P.Service.NAV,
                  t
                ),
                this._beat.isRunning || this._beat.start(),
                G.notice(
                  "[" +
                    this.plugin.fastDataTransform.getSession() +
                    "] " +
                    P.Service.NAV +
                    " " +
                    t.route
                ),
                (this._lastNavigation.page = t.page),
                (this._lastNavigation.route = t.route))
              : G.warn(
                  "Same navigation detected and ignored for Page and Route"
                );
        },
        _processSessionStart: function (t) {
          (t = this._parseInternalParams(t)),
            this._sendProductAnalytics(
              P.WillSendEvent.WILL_SEND_SESSION_START,
              P.Service.SESSION_START,
              t
            ),
            this._beat.isRunning || this._beat.start(),
            G.notice(
              "[" +
                this.plugin.fastDataTransform.getSession() +
                "] " +
                P.Service.SESSION_START +
                " " +
                t.route
            );
        },
        _processSessionStop: function (t) {
          (t = this._parseInternalParams(t)),
            this._sendProductAnalytics(
              P.WillSendEvent.WILL_SEND_SESSION_STOP,
              P.Service.SESSION_STOP,
              t
            ),
            this._beat.isRunning && this._beat.stop(),
            G.notice(
              "[" +
                this.plugin.fastDataTransform.getSession() +
                "] " +
                P.Service.SESSION_STOP +
                " " +
                t.route
            );
        },
        _processSessionError: function (t) {
          (t = this._parseInternalParams(t)),
            this._sendProductAnalytics(
              P.WillSendEvent.WILL_SEND_EVENT,
              P.Service.SESSION_ERROR,
              t
            ),
            G.notice(
              "[" +
                this.plugin.fastDataTransform.getSession() +
                "] " +
                P.Service.SESSION_ERROR +
                ", Error Code: " +
                t.errorCode +
                ", Msg: " +
                t.msg
            );
        },
        _processCustomEvent: function (t) {
          (t = this._parseInternalParams(t)),
            this._sendProductAnalytics(
              P.WillSendEvent.WILL_SEND_EVENT,
              P.Service.EVENT,
              t
            ),
            G.notice(
              "[" +
                this.plugin.fastDataTransform.getSession() +
                "] " +
                P.Service.EVENT +
                " " +
                t.name
            );
        },
        _parseInternalParams: function (t) {
          return t ? t.params || t || {} : {};
        },
        _sendBeat: function (t) {
          var e = { diffTime: t };
          try {
            if (
              (this._beatDimensions && (e.dimensions = this._beatDimensions),
              this._beatRequestParams)
            )
              for (var i in this._beatRequestParams)
                e[i] = this._beatRequestParams[i];
          } catch {
            G.warn(
              "Issue detected adding dimensions and request params in the beat event"
            );
          }
          this.resetBeatInfo(),
            this._sendProductAnalytics(
              P.WillSendEvent.WILL_SEND_BEAT,
              P.Service.BEAT,
              e
            ),
            this && this._setLastActive(),
            G.verbose(P.Service.BEAT);
        },
        _checkDifferentNavigation: function (t) {
          t = t || {};
          var e =
              this._lastNavigation && t.route === this._lastNavigation.route,
            i = this._lastNavigation && t.page === this._lastNavigation.page;
          return !e || !i;
        },
        getSessionMetrics: function () {
          return yt.getMetricsFrom(this.plugin.options["session.metrics"]);
        },
        _sendPluginLogs: function (t, e, i) {
          if (this.plugin.isPluginLogsEnabled()) {
            try {
              i &&
                i.logType &&
                i.logAction &&
                G.notice(
                  "[" +
                    this.plugin.fastDataTransform.getSession() +
                    "] ProductAnalyticsLog " +
                    i.logType +
                    ": Action " +
                    i.logAction
                );
            } catch {}
            (i = this.plugin.requestBuilder.buildParams(i, e)),
              this._comm &&
                i !== null &&
                this.plugin.options.enabled &&
                this._comm.sendRequest(new ki(null, e, i));
          }
        },
        _logBeginEvent: function (t) {
          var e = {
            logs: { data: t },
            logAction: "beginSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            P.WillSendLog.WILL_SEND_LOG_INFINITY_BEGIN,
            P.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireSessionStartEvent: function (t) {
          var e = {
            logs: { data: t },
            logAction: "startSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            P.WillSendLog.WILL_SEND_LOG_INFINITY_START,
            P.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireSessionStopEvent: function (t) {
          var e = {
            logs: { data: t },
            logAction: "stopSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            P.WillSendLog.WILL_SEND_LOG_INFINITY_STOP,
            P.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireSessionErrorEvent: function (t) {
          var e = {
            logs: { data: t },
            logAction: "errorSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            P.WillSendLog.WILL_SEND_LOG_INFINITY_ERROR,
            P.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireEventListener: function (t) {
          var e = {
            logs: { data: t },
            logAction: "eventSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            P.WillSendLog.WILL_SEND_LOG_INFINITY_EVENT,
            P.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireNavListener: function (t) {
          var e = {
            logs: { data: t },
            logAction: "nav",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            P.WillSendLog.WILL_SEND_LOG_INFINITY_NAV,
            P.Service.APP_ANALYTICS_PLUGIN_LOGS,
            e
          );
        },
        _logFireNewSessionListener: function (t, e) {
          var i = {
            logs: { data: t, params: e },
            logAction: "newSession",
            logType: "pluginMethod",
          };
          this._sendPluginLogs(
            P.WillSendLog.WILL_SEND_LOG_INFINITY_NAV,
            P.Service.APP_ANALYTICS_PLUGIN_LOGS,
            i
          );
        },
      },
      {
        Event: {
          NAV: "nav",
          SESSION_START: "sessionStart",
          SESSION_STOP: "sessionStop",
          BEAT: "beat",
          EVENT: "event",
        },
        PluginLogs: [
          P.Service.APP_ANALYTICS_PLUGIN_LOGS,
          P.Service.VIDEO_PLUGIN_LOGS,
        ],
      }
    );
  yt.assign(xi.prototype, wr());
  var Vi = xi,
    Mi = function (t) {
      t = t || window;
      var e = t.document,
        i = function (u) {
          var S = !1;
          if (u.getBoundingClientRect) {
            var m = u.getBoundingClientRect();
            (S = {
              top: Math.max(m.top, 0),
              left: Math.max(m.left, 0),
              bottom: Math.min(
                m.bottom,
                t.innerHeight || e.documentElement.clientHeight
              ),
              right: Math.min(
                m.right,
                t.innerWidth || e.documentElement.clientWidth
              ),
            }),
              S.bottom <= S.top || S.right <= S.left
                ? (S = !1)
                : (S.area = (S.bottom - S.top) * (S.right - S.left));
          }
          return S;
        },
        s = function (u, S) {
          if (S) {
            var m = i(u);
            m && v.push({ url: S, area: m.area, rect: m });
          }
        },
        n = function () {
          for (
            var u = e.getElementsByTagName("*"),
              S = /url\(.*(http.*)\)/gi,
              m = 0;
            m < u.length;
            m++
          ) {
            var E = u[m],
              L = t.getComputedStyle(E);
            if ((E.tagName === "IMG" && s(E, E.src), L["background-image"])) {
              S.lastIndex = 0;
              var c = S.exec(L["background-image"]);
              c && c.length > 1 && s(E, c[1].replace('"', ""));
            }
            if (E.tagName === "IFRAME")
              try {
                var h = i(E);
                if (h) {
                  var f = Mi(E.contentWindow);
                  f && v.push({ tm: f, area: h.area, rect: h });
                }
              } catch {}
          }
        },
        r = function () {
          for (
            var u = {}, S = t.performance.getEntriesByType("resource"), m = 0;
            m < S.length;
            m++
          )
            u[S[m].name] = S[m].responseEnd;
          for (var E = 0; E < v.length; E++)
            "tm" in v[E] ||
              (v[E].tm = u[v[E].url] !== void 0 ? u[v[E].url] : 0);
        },
        o = function () {
          "msFirstPaint" in t.performance.timing &&
            (d = t.performance.timing.msFirstPaint - g);
          for (
            var u = t.performance.getEntriesByType("paint"), S = 0;
            S < u.length;
            S++
          )
            u[S].name === "first-paint" && (d = u[S].startTime);
          if (d === void 0 || d < 0 || d > 12e4) {
            d = t.performance.timing.responseStart - g;
            for (
              var m = {}, E = e.getElementsByTagName("head")[0].children, L = 0;
              L < E.length;
              L++
            ) {
              var c = E[L];
              c.tagName === "SCRIPT" && c.src && !c.async && (m[c.src] = !0),
                c.tagName === "LINK" &&
                  c.rel === "stylesheet" &&
                  c.href &&
                  (m[c.href] = !0);
            }
            for (
              var h = t.performance.getEntriesByType("resource"), f = !1, p = 0;
              p < h.length;
              p++
            )
              if (
                !f &&
                m[h[p].name] &&
                (h[p].initiatorType === "script" ||
                  h[p].initiatorType === "link")
              ) {
                var R = h[p].responseEnd;
                (d === void 0 || R > d) && (d = R);
              } else f = !0;
          }
          d = Math.max(d, 0);
        },
        a = function () {
          for (var u = { 0: 0 }, S = 0, m = 0; m < v.length; m++) {
            var E = d;
            "tm" in v[m] && v[m].tm > d && (E = v[m].tm),
              u[E] === void 0 && (u[E] = 0),
              (u[E] += v[m].area),
              (S += v[m].area);
          }
          var L =
            Math.max(e.documentElement.clientWidth, t.innerWidth || 0) *
            Math.max(e.documentElement.clientHeight, t.innerHeight || 0);
          if (
            (L > 0 &&
              ((L = Math.max(L - S, 0) * N),
              u[d] === void 0 && (u[d] = 0),
              (u[d] += L),
              (S += L)),
            S)
          ) {
            for (var c in u)
              u.hasOwnProperty(c) && T.push({ tm: c, area: u[c] });
            T.sort(function (p, R) {
              return p.tm - R.tm;
            });
            for (var h = 0, f = 0; f < T.length; f++)
              (h += T[f].area), (T[f].progress = h / S);
          }
        },
        l = function () {
          if (T.length) {
            A = 0;
            for (var u = 0, S = 0, m = 0; m < T.length; m++) {
              var E = T[m].tm - u;
              E > 0 && S < 1 && (A += (1 - S) * E),
                (u = T[m].tm),
                (S = T[m].progress);
            }
          } else A = d;
        },
        v = [],
        T = [],
        d,
        A,
        N = 0.1;
      try {
        var g = t.performance.timing.navigationStart;
        n(), r(), o(), a(), l();
      } catch {}
      return A;
    },
    Rr = Mi,
    Cr = k,
    Or = Rr,
    Br = Cr.extend({
      constructor: function (t) {
        if (
          ((this.appAnalytics = t.appAnalytics),
          (this.timeObject = null),
          (this.playerSetup = null),
          (this.perfObject = null),
          (this.myTimesObject = {}),
          typeof window < "u" &&
            typeof window.addEventListener == "function" &&
            (window.addEventListener("load", this._windowLoaded.bind(this)),
            window.performance && window.performance.timing))
        ) {
          try {
            typeof window.performance.getEntriesByType == "function" &&
              (this.perfObject = window.performance);
          } catch {}
          this.timeObject = window.performance.timing;
        }
        try {
          if (typeof PerformanceObserver == "function") {
            var e = new PerformanceObserver(
              function (i, s) {
                var n = i.getEntries();
                this.myTimesObject.largestContentfulPaint =
                  n[n.length - 1].renderTime;
              }.bind(this)
            );
            PerformanceObserver.supportedEntryTypes.indexOf(
              "largest-contentful-paint"
            ) > -1 && e.observe({ entryTypes: ["largest-contentful-paint"] });
          }
        } catch {}
      },
      _windowLoaded: function () {
        (this.myTimesObject.onLoad = new Date().getTime()),
          this._getEnoughFPS(),
          setTimeout(this._fireLoadTimesEvent.bind(this), 1e3);
      },
      _fireLoadTimesEvent: function () {
        this._getLastMetrics(),
          this.appAnalytics.fireEvent("loadTimes", {}, this._getAllValues());
      },
      _getAllValues: function () {
        var t = {
          PageLoadTime: this.getPageLoadTime(),
          DNSTime: this.getDnsTime(),
          TCPTime: this.getTcpTime(),
          HandshakeTime: this.getHandshakeTime(),
          DomReadyTime: this.getDomReadyTime(),
          BackendTime: this.getBackendTime(),
          FrontendTime: this.getFrontendTime(),
          VisualReady: this.getTimeToVisuallyReady(),
          TimeToInteractive: this.getTimeToInteractive(),
          JsTime: this.getJSTime(),
          CssTime: this.getCSSTime(),
          ImageTime: this.getImageTime(),
          FontTime: this.getFontTime(),
          AvgReqLatency: this.getAvgReqLatency(),
          MaxReqLatency: this.getMaxReqLatency(),
          FirstPaint: this.getFirstPaint(),
          FirstContentfulPaint: this.getFirstContentfulPaint(),
          LargestContentfulPaint: this.getLargestContentfulPaint(),
          SpeedIndex: this.getSpeedIndex(),
        };
        for (var e in t)
          t[e] === null || t[e] === void 0 || t[e] < 0
            ? delete t[e]
            : (t[e] = Math.round(t[e]));
        return t;
      },
      getPageLoadTime: function () {
        var t = null;
        return (
          this.timeObject &&
            (t =
              this.timeObject.loadEventEnd - this.timeObject.navigationStart),
          t
        );
      },
      getPlayerStartupTime: function () {
        var t = null;
        return (
          this.timeObject &&
            this.playerSetup &&
            (t = this.playerSetup - this.timeObject.navigationStart),
          t
        );
      },
      getDnsTime: function () {
        var t = null;
        return (
          this.timeObject &&
            (t =
              this.timeObject.domainLookupEnd -
              this.timeObject.domainLookupStart),
          t
        );
      },
      getTcpTime: function () {
        var t = null;
        return (
          this.timeObject &&
            (t = this.timeObject.connectEnd - this.timeObject.connectStart),
          t
        );
      },
      getHandshakeTime: function () {
        var t = null;
        return (
          this.timeObject &&
            this.timeObject.secureConnectionStart &&
            (t =
              this.timeObject.connectEnd -
              this.timeObject.secureConnectionStart),
          t
        );
      },
      getDomReadyTime: function () {
        var t = null;
        return (
          this.timeObject &&
            (t = this.timeObject.domComplete - this.timeObject.navigationStart),
          t
        );
      },
      getBackendTime: function () {
        var t = null;
        return (
          this.timeObject &&
            (t =
              this.timeObject.responseStart - this.timeObject.navigationStart),
          t
        );
      },
      getFrontendTime: function () {
        var t = null;
        return (
          this.timeObject &&
            (t = this.myTimesObject.onLoad - this.timeObject.responseStart),
          t
        );
      },
      getTimeToVisuallyReady: function () {
        var t = this.myTimesObject.firstPaint || 0;
        return this.timeObject
          ? Math.max(
              t,
              this.timeObject.domContentLoadedEventEnd -
                this.timeObject.navigationStart || 0
            )
          : t || null;
      },
      getTimeToInteractive: function () {
        if (this.myTimesObject.fps && this.getTimeToVisuallyReady())
          return Math.max(
            this.myTimesObject.fps,
            this.getTimeToVisuallyReady()
          );
        setTimeout(
          function () {
            this.getTimeToInteractive();
          }.bind(this),
          500
        );
      },
      getJSTime: function () {
        return this._getXTime("script");
      },
      getCSSTime: function () {
        return this._getXTime("css");
      },
      getImageTime: function () {
        return this._getXTime("img");
      },
      getFontTime: function () {
        return this._getXTime("css", [".woff", ".otf", ".ttf"]);
      },
      getAvgReqLatency: function () {
        try {
          if (
            this.perfObject &&
            typeof this.perfObject.getEntriesByType == "function"
          ) {
            var t = 0,
              e = 0,
              i = this.perfObject.getEntriesByType("resource");
            for (var s in i)
              i[s].requestStart &&
                i[s].responseStart &&
                (e += i[s].responseStart - i[s].requestStart),
                t++;
            return e / t;
          }
        } catch {}
        return null;
      },
      getFirstPaint: function () {
        return this.myTimesObject ? this.myTimesObject.firstPaint : null;
      },
      getFirstContentfulPaint: function () {
        return this.myTimesObject
          ? this.myTimesObject.firstContentfulPaint
          : null;
      },
      getLargestContentfulPaint: function () {
        return this.myTimesObject
          ? this.myTimesObject.largestContentfulPaint
          : null;
      },
      getMaxReqLatency: function () {
        try {
          if (
            this.perfObject &&
            typeof this.perfObject.getEntriesByType == "function"
          ) {
            var t = this.perfObject.getEntriesByType("resource"),
              e = 0;
            for (var i in t)
              t[i].requestStart &&
                t[i].responseStart &&
                (e = Math.max(e, t[i].responseStart - t[i].requestStart));
            return e;
          }
        } catch {}
        return null;
      },
      getSpeedIndex: function () {
        var t = null;
        if (
          typeof window < "u" &&
          window.performance &&
          typeof window.performance.getEntriesByType == "function"
        )
          try {
            t = Or();
          } catch {}
        return t;
      },
      _getXTime: function (t, e) {
        var i = 0;
        try {
          if (
            this.perfObject &&
            typeof this.perfObject.getEntriesByType == "function"
          ) {
            var s = this.perfObject.getEntriesByType("resource");
            for (var n in s)
              if (s[n].initiatorType === t)
                if (!e) i += s[n].duration;
                else {
                  var r = !1;
                  for (var o in e) s[n].name.indexOf(e[o] > 0) && (r = !0);
                  r && (i += s[n].duration);
                }
          }
        } catch {}
        return Math.round(i) || null;
      },
      _getLastMetrics: function () {
        var t = null,
          e = null;
        try {
          if (
            this.perfObject &&
            typeof this.perfObject.getEntriesByType == "function"
          ) {
            var i = this.perfObject.getEntriesByType("paint");
            for (var s in i)
              i[s].name === "first-paint"
                ? (t = i[s].startTime)
                : i[s].name === "first-contentful-paint" &&
                  (e = i[s].startTime);
          }
        } catch {}
        !t &&
          this.timeObject &&
          (t = this.timeObject.msFirstPaint - this.timeObject.navigationStart),
          (this.myTimesObject.firstPaint = t),
          (this.myTimesObject.firstContentfulPaint = e),
          this.getTimeToInteractive();
      },
      _getEnoughFPS: function () {
        if (this.timeObject && typeof window < "u") {
          var t =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function () {};
          (this.preFPS = new Date().getTime()),
            t(
              function () {
                var e = new Date().getTime();
                e < this.preFPS + 50
                  ? (this.myTimesObject.fps =
                      e - this.timeObject.navigationStart)
                  : setTimeout(
                      function () {
                        return this._getEnoughFPS();
                      }.bind(this),
                      50
                    );
              }.bind(this)
            );
        } else return !0;
      },
      setPlayerSetupTime: function () {
        this.playerSetup = this.playerSetup || new Date().getTime();
      },
    }),
    kr = Br,
    xr = k,
    Vr = xr.extend({
      constructor: function (t) {
        (this.plugin = t),
          (this.isInBackground = !1),
          (this.listenerReference = this._visibilityListener.bind(this)),
          this._reset();
      },
      startDetection: function () {
        !this.isBackgroundDetectorStarted &&
          typeof document < "u" &&
          ((this.isBackgroundDetectorStarted = !0),
          document.addEventListener(
            "visibilitychange",
            this.listenerReference
          ));
      },
      stopDetection: function () {
        this.isBackgroundDetectorStarted &&
          typeof document < "u" &&
          (document.removeEventListener(
            "visibilitychange",
            this.listenerReference
          ),
          this._reset());
      },
      _reset: function () {
        this.isBackgroundDetectorStarted = !1;
      },
      _visibilityListener: function (t) {
        if (typeof document < "u") {
          var e = this._getSettings();
          document.visibilityState === "hidden"
            ? this._toBackground(e)
            : document.visibilityState === "visible" && this._toForeground(e);
        }
      },
      _toBackground: function (t) {
        this.isInBackground = !0;
        try {
          if (this.plugin && this.plugin.videos)
            for (var e = 0; e < this.plugin.videos.getVideoKeys().length; e++) {
              var i = this.plugin.videos.getVideoKeys()[e],
                s = this.plugin.videos.getAdsAdapter(i);
              s && s.stopChronoView();
            }
        } catch {}
        try {
          if (typeof t == "string") {
            switch (t) {
              case "stop":
                this._fireStop();
                break;
              case "pause":
                this._firePause();
                break;
            }
            if (this.plugin.appAnalytics.appAnalyticsStarted) {
              this.lastBeatTime = new Date().getTime();
              var n = this.plugin.appAnalytics._beat.chrono.startTime
                ? this.lastBeatTime -
                  this.plugin.appAnalytics._beat.chrono.startTime
                : 0;
              this.plugin.appAnalytics._sendBeat(n),
                this.plugin.appAnalytics._beat.stop();
            }
          }
        } catch {}
      },
      _toForeground: function (t) {
        this.isInBackground = !1;
        try {
          if (this.plugin && this.plugin.videos)
            for (var e = 0; e < this.plugin.videos.getVideoKeys().length; e++) {
              var i = this.plugin.videos.getVideoKeys()[e],
                s = this.plugin.videos.getAdsAdapter(i);
              s && s.startChronoView();
            }
        } catch {}
        try {
          if (
            typeof t == "string" &&
            t &&
            this.plugin.appAnalytics.appAnalyticsStarted
          ) {
            var n = new Date().getTime();
            n - this.lastBeatTime < this.plugin.appAnalytics.sessionExpire
              ? (this.plugin.appAnalytics._sendBeat(n - this.lastBeatTime),
                this.plugin.appAnalytics._beat.start())
              : this.plugin.appAnalytics.newSession();
          }
        } catch {}
      },
      _getSettings: function () {
        if (
          typeof this.plugin.options["background.settings"] == "string" &&
          this.plugin.options["background.settings"]
        )
          return this.plugin.options["background.settings"];
        if (this.plugin.deviceDetector.isSmartTV())
          return this.plugin.options["background.settings.tv"];
        if (this.plugin.deviceDetector.isDesktop())
          return this.plugin.options["background.settings.desktop"];
        if (this.plugin.deviceDetector.isAndroid())
          return this.plugin.options["background.settings.android"];
        if (this.plugin.deviceDetector.isIphone())
          return this.plugin.options["background.settings.iOS"];
        if (this.plugin.deviceDetector.isPlayStation())
          return this.plugin.options["background.settings.playstation"];
      },
      _firePause: function () {
        this._fireX("firePause");
      },
      _fireStop: function () {
        this._fireX("fireStop");
      },
      _fireX: function (t) {
        try {
          if (this.plugin && this.plugin.videos)
            for (var e = 0; e < this.plugin.videos.getVideoKeys().length; e++) {
              var i = this.plugin.videos.getVideoKeys()[e];
              (this.adsAdapter = this.plugin.videos.getAdsAdapter(i)),
                this.adsAdapter && this.adsAdapter[t]({}, "backgroundDetector"),
                (this.contentAdapter = this.plugin.videos.getAdapter(i)),
                this.contentAdapter &&
                  this.contentAdapter[t]({}, "backgroundDetector");
            }
        } catch {}
      },
      canBlockStartCalls: function () {
        return (
          this.isInBackground &&
          this.plugin.options["background.enabled"] === !0 &&
          this._getSettings()
        );
      },
    }),
    Fi = Vr,
    Mr = k,
    Fr = Mr.extend({
      constructor: function () {
        typeof navigator < "u" &&
          navigator.userAgent &&
          ((this._isSmartTVDevice =
            navigator.userAgent.toLowerCase().match(/smarttv/) ||
            navigator.userAgent.toLowerCase().match(/smart-tv/) ||
            navigator.userAgent.toLowerCase().match(/appletv/) ||
            navigator.userAgent.toLowerCase().match(/apple tv/)),
          (this._isPlaystationDevice =
            navigator.userAgent.match(/PlayStation/) !== null),
          (this._isIphoneDevice =
            navigator.userAgent.match(/iPhone|iPad|iPod/i) !== null),
          (this._isAndroidDevice =
            navigator.userAgent.match(/Android/) !== null),
          (this._isSmartphoneDevice =
            !this._isSmartTVDevice &&
            !this._isPlaystationDevice &&
            (this._isIphoneDevice || this._isAndroidDevice)),
          (this._isDesktopDevice =
            !this._isSmartphoneDevice &&
            !this._isSmartTVDevice &&
            !this._isPlaystationDevice));
      },
      isIphone: function () {
        return this._isIphoneDevice;
      },
      isAndroid: function () {
        return this._isAndroidDevice;
      },
      isSmartphone: function () {
        return this._isSmartphoneDevice;
      },
      isDesktop: function () {
        return this._isDesktopDevice;
      },
      isSmartTV: function () {
        return this._isSmartTVDevice;
      },
      isPlayStation: function () {
        return this._isPlaystationDevice;
      },
    }),
    Ui = Fr,
    Ur = k,
    qr = Ur.extend({
      constructor: function (t) {
        this.plugin = t;
      },
      getAllData: function () {
        var t = this.getNonRandomData();
        return (t.timestamp = this.getTimestamp()), t;
      },
      getNonRandomData: function () {
        var t = {};
        return (
          (t.userAgent = this.getUserAgent()),
          (t.threads = this.getVirtualCores()),
          (t.language = this.getLanguage()),
          (t.langList = this.getAvailableLanguages()),
          (t.resolution = this.getResolution()),
          (t.colorDepth = this.getColorDepth()),
          (t.deviceMemory = this.getMemory()),
          (t.touchscreen = this.getTouchscreen()),
          (t.localStorage = this.getLocalStorage()),
          (t.sessionStorage = this.getSessionStorage()),
          (t.cookiesAvailable = this.getCookiesAvailable()),
          (t.flashAvailable = this.getHasFlash()),
          (t.timeZone = this.getTimeZone()),
          (t.plugins = this.getPluginList()),
          t
        );
      },
      getUserAgent: function () {
        return this._getNavigatorValue("userAgent");
      },
      getVirtualCores: function () {
        return this._getNavigatorValue("hardwareConcurrency");
      },
      getLanguage: function () {
        return this._getNavigatorValue("language");
      },
      getAvailableLanguages: function () {
        return this._getNavigatorValue("languages");
      },
      getResolution: function () {
        var t = null;
        try {
          this._getNavigatorValue("screen") &&
            (t =
              navigator.screen.width.toString() +
              navigator.screen.height.toString());
        } catch {}
        return t;
      },
      getColorDepth: function () {
        var t = null;
        try {
          this._getNavigatorValue("screen") &&
            (t = navigator.screen.colorDepth);
        } catch {}
        return t;
      },
      getMemory: function () {
        return this._getNavigatorValue("deviceMemory");
      },
      getTouchscreen: function () {
        return this._getNavigatorValue("maxTouchPoints") || !1;
      },
      getLocalStorage: function () {
        var t = !1;
        try {
          t = typeof localStorage < "u";
        } catch {}
        return t;
      },
      getSessionStorage: function () {
        var t = !1;
        try {
          t = typeof sessionStorage < "u";
        } catch {}
        return t;
      },
      getCookiesAvailable: function () {
        return this._getNavigatorValue("cookieEnabled") || !1;
      },
      getHasFlash: function () {
        var t = !1;
        try {
          var e = this._getNavigatorValue("plugins");
          t =
            (e && typeof e["Shockwave Flash"] == "object") ||
            (typeof window < "u" &&
              window.ActiveXObject &&
              new ActiveXObject("ShockwaveFlash.ShockwaveFlash") !== !1);
        } catch {}
        return t;
      },
      getPluginList: function () {
        var t = null;
        try {
          var e = this._getNavigatorValue("plugins");
          if (e && e.length !== 0) {
            for (var i = "", s = 0; s < navigator.plugins.length; s++)
              i +=
                navigator.plugins[s].description +
                " " +
                navigator.plugins[s].filename +
                " " +
                navigator.plugins[s].name +
                " ";
            t = i;
          }
        } catch {}
        return t;
      },
      getTimeZone: function () {
        var t = null;
        try {
          var e = new Date();
          t = e.getTimezoneOffset().toString();
        } catch {}
        return t;
      },
      getTimestamp: function () {
        return new Date().getTime();
      },
      _navigatorCheck: function () {
        return typeof navigator < "u";
      },
      _getNavigatorValue: function (t) {
        var e = null;
        try {
          this._navigatorCheck() && (e = navigator[t]);
        } catch {}
        return e;
      },
    }),
    Wr = qr,
    Gr = Wr,
    Hr = k,
    jr = mi,
    $r = Hr.extend({
      constructor: function (t) {
        (this.plugin = t),
          (this.dataExtractor = new Gr()),
          (this.key = this.getPreviousKey());
      },
      generateHashKey: function () {
        if (!this.key) {
          var t = this.dataExtractor.getAllData();
          (this.key = this._hashFunction(t)),
            this.plugin.storage.setLocal("npawDeviceUUID", this.key);
        }
      },
      getKey: function () {
        return this.key || this.generateHashKey(), this.key;
      },
      _hashFunction: function (t) {
        var e = t;
        return typeof t != "string" && (e = JSON.stringify(t)), jr(e);
      },
      _reset: function () {
        this.key = void 0;
      },
      getPreviousKey: function () {
        return this.plugin.storage.getLocal("npawDeviceUUID");
      },
    }),
    qi = $r,
    De,
    Wi;
  function Jr() {
    if (Wi) return De;
    Wi = 1;
    var t = O,
      e = ft(),
      i = Te(),
      s = {
        registerAdapter: function (n, r, o, a) {
          if (!r) {
            t.error("Register Adapter needs a json code to initialize");
            return;
          }
          if (((o = o || {}), (a = a || "default"), this.videos.existsVideo(a)))
            (o = o || {}),
              this.videos.getVideo(a).mergeOptions(o),
              this.setAdapter(
                new e(
                  a,
                  this.videos.getVideo(a),
                  this,
                  this.adapterTemplates,
                  n,
                  r
                ),
                a
              );
          else {
            var l = new i(a, this, this.options, null, null);
            (o = o || {}), l.mergeOptions(o), this.videos.setVideo(l);
            var v = new e(a, l, this, this.adapterTemplates, n, r);
            this.setAdapter(v, a);
          }
        },
        setAdapter: function (n, r) {
          (r = r || "default"),
            this.browserLoadTimes && this.browserLoadTimes.setPlayerSetupTime(),
            n.isSetAdapter()
              ? t.warn("Adapters can only be added to a single plugin")
              : (this.removeAdapter(r), this.videos.setAdapter(n, r));
        },
        getAdapter: function (n) {
          return (n = n || "default"), this.videos.getAdapter(n);
        },
        removeAdapter: function (n) {
          (n = n || "default"),
            this.videos.removeAdapter(this.contentAdapterListeners, n);
        },
      };
    return (De = s), De;
  }
  var Pe, Gi;
  function Yr() {
    if (Gi) return Pe;
    Gi = 1;
    var t = ft(),
      e = Te(),
      i = {
        registerAdsAdapter: function (s, n, r, o) {
          if (((o = o || "default"), this.videos.existsVideo(o)))
            this.videos.getVideo(o).mergeOptions(r),
              this.setAdsAdapter(
                new t(
                  o,
                  this.videos.getVideo(o),
                  this,
                  this.adapterTemplates,
                  s,
                  n
                ),
                o
              );
          else {
            var a = new e(o, this, this.options, null, null);
            a.mergeOptions(r), this.videos.setVideo(a);
            var l = new t(o, a, this, this.adapterTemplates, s, n);
            this.setAdsAdapter(l, o);
          }
        },
        getAdsAdapter: function (s) {
          return (s = s || "default"), this.videos.getVideo(s).getAdsAdapter();
        },
        setAdsAdapter: function (s, n) {
          (n = n || "default"), this.videos.getVideo(n).setAdsAdapter(s, this);
        },
        removeAdsAdapter: function (s) {
          (s = s || "default"), this.videos.getVideo(s).removeAdsAdapter();
        },
      };
    return (Pe = i), Pe;
  }
  var Ie, Hi;
  function Xr() {
    if (Hi) return Ie;
    Hi = 1;
    var t = pt,
      e = q,
      i = Ft,
      s = {
        getAccountCode: function () {
          return this.options.accountCode;
        },
        getUsername: function () {
          return this.options["user.name"];
        },
        getPluginVersion: function () {
          return t + "-adapterless-js";
        },
        getRequestNumber: function () {
          return Math.random();
        },
        getUserType: function () {
          return this.options["user.type"];
        },
        getAnonymousUser: function () {
          return this.options["user.anonymousId"];
        },
        getReferer: function () {
          var n = this.options.referer || "";
          return (
            this.options.domain &&
              this.options.pathname &&
              (n = this.options.domain + "/" + this.options.pathname),
            !n &&
              typeof window < "u" &&
              window.location &&
              (n = window.location.href),
            n
          );
        },
        getDomain: function () {
          var n = this.options.domain || "";
          if (!n && this.options.referer)
            try {
              var r = e.splitUrl(this.options.href);
              r && r.host && (n = r.host);
            } catch {}
          return (
            !n &&
              typeof window < "u" &&
              window.location &&
              (n = window.location.host),
            n
          );
        },
        getPathName: function () {
          var n = this.options.pathName || "";
          if (!n && this.options.referer)
            try {
              var r = e.splitUrl(this.options.href);
              r && r.pathname && (n = r.pathname);
            } catch {}
          return (
            !n &&
              typeof window < "u" &&
              window.location &&
              (n = window.location.pathname),
            n
          );
        },
        getReferral: function () {
          var n = this.options.referral || "";
          return !n && typeof document < "u" && (n = document.referrer), n;
        },
        getLanguage: function () {
          var n = null;
          return typeof navigator < "u" && (n = navigator.language), n;
        },
        getScreenResolution: function () {
          var n = null;
          try {
            if (window && window.screen) {
              var r = window.devicePixelRatio || 1;
              n = window.screen.width * r + "x" + window.screen.height * r;
            }
          } catch {}
          return n;
        },
        getDeviceInfo: function () {
          var n = {};
          return (
            this.getDeviceCode() && (n.deviceCode = this.getDeviceCode()),
            this.getModel() && (n.model = this.getModel()),
            this.getBrand() && (n.brand = this.getBrand()),
            this.getDeviceType() && (n.deviceType = this.getDeviceType()),
            this.getDeviceName() && (n.deviceName = this.getDeviceName()),
            this.getOsName() && (n.osName = this.getOsName()),
            this.getOsVersion() && (n.osVersion = this.getOsVersion()),
            this.getBrowserName() && (n.browserName = this.getBrowserName()),
            this.getBrowserVersion() &&
              (n.browserVersion = this.getBrowserVersion()),
            this.getBrowserType() && (n.browserType = this.getBrowserType()),
            this.getBrowserEngine() &&
              (n.browserEngine = this.getBrowserEngine()),
            n !== {} ? n : null
          );
        },
        getDeviceCode: function () {
          return this.options["device.code"];
        },
        getModel: function () {
          return this.options["device.model"];
        },
        getBrand: function () {
          return this.options["device.brand"];
        },
        getDeviceType: function () {
          return this.options["device.type"];
        },
        getDeviceName: function () {
          return this.options["device.name"];
        },
        getOsName: function () {
          return this.options["device.osName"];
        },
        getOsVersion: function () {
          return this.options["device.osVersion"];
        },
        getBrowserName: function () {
          return this.options["device.browserName"];
        },
        getBrowserVersion: function () {
          return this.options["device.browserVersion"];
        },
        getBrowserType: function () {
          return this.options["device.browserType"];
        },
        getBrowserEngine: function () {
          return this.options["device.browserEngine"];
        },
        getIsBlocked: function () {
          return this.options["ad.blockerDetected"];
        },
        isMethodPostEnabled: function () {
          return (
            this.options.method && this.options.method.toLowerCase() === i.POST
          );
        },
        getDeviceUUID: function () {
          var n = null;
          return (
            this.options["device.isAnonymous"] ||
              ((n = this.options["device.id"]),
              !n &&
                this.options["device.id.autoGenerated"] &&
                (n = this.uuidGenerator.getKey())),
            n
          );
        },
        getLibVersion: function () {
          return t;
        },
        getAppName: function () {
          return this.options["app.name"];
        },
        getAppReleaseVersion: function () {
          return this.options["app.releaseVersion"];
        },
        isProductAnalyticsEnabled: function () {
          return e.parseBoolean(this.options["check.productAnalytics.enabled"]);
        },
        getProductAnalyticsDomain: function () {
          return this.options["productAnalytics.domain"];
        },
        getUTMSource: function () {
          return this.options["utm.source"];
        },
        getUTMMedium: function () {
          return this.options["utm.medium"];
        },
        getUTMCampaign: function () {
          return this.options["utm.campaign"];
        },
        getUTMTerm: function () {
          return this.options["utm.term"];
        },
        getUTMContent: function () {
          return this.options["utm.content"];
        },
        getIp: function () {
          return this.options["network.ip"];
        },
        getIsp: function () {
          return this.options["network.isp"];
        },
        getConnectionType: function () {
          return this.options["network.connectionType"];
        },
        getEDID: function () {
          var n = this.options["device.EDID"];
          return n ? n.toString() : null;
        },
        getObfuscateIp: function () {
          return this.options["user.obfuscateIp"];
        },
        getPrivacyProtocol: function () {
          var n = this.options["user.privacyProtocol"];
          return (
            typeof n == "string" && (n = n.toLowerCase()),
            n === "optin" || n === "optout" ? n : null
          );
        },
        getCustomDimensions: function () {
          var n = this.options["content.customDimensions"];
          return typeof n == "object" ? n : null;
        },
        getExtraparam1: function () {
          return this.options["content.customDimension.1"];
        },
        getExtraparam2: function () {
          return this.options["content.customDimension.2"];
        },
        getExtraparam3: function () {
          return this.options["content.customDimension.3"];
        },
        getExtraparam4: function () {
          return this.options["content.customDimension.4"];
        },
        getExtraparam5: function () {
          return this.options["content.customDimension.5"];
        },
        getExtraparam6: function () {
          return this.options["content.customDimension.6"];
        },
        getExtraparam7: function () {
          return this.options["content.customDimension.7"];
        },
        getExtraparam8: function () {
          return this.options["content.customDimension.8"];
        },
        getExtraparam9: function () {
          return this.options["content.customDimension.9"];
        },
        getExtraparam10: function () {
          return this.options["content.customDimension.10"];
        },
        getExtraparam11: function () {
          return this.options["content.customDimension.11"];
        },
        getExtraparam12: function () {
          return this.options["content.customDimension.12"];
        },
        getExtraparam13: function () {
          return this.options["content.customDimension.13"];
        },
        getExtraparam14: function () {
          return this.options["content.customDimension.14"];
        },
        getExtraparam15: function () {
          return this.options["content.customDimension.15"];
        },
        getExtraparam16: function () {
          return this.options["content.customDimension.16"];
        },
        getExtraparam17: function () {
          return this.options["content.customDimension.17"];
        },
        getExtraparam18: function () {
          return this.options["content.customDimension.18"];
        },
        getExtraparam19: function () {
          return this.options["content.customDimension.19"];
        },
        getExtraparam20: function () {
          return this.options["content.customDimension.20"];
        },
        isParseManifest: function () {
          return this.options["parse.manifest"];
        },
        isParseCdnNode: function () {
          return this.options["parse.cdnNode"];
        },
        isCdnSwitch: function () {
          return this.options["parse.cdnSwitchHeader"];
        },
        getParseCdnNodeList: function () {
          return this.options["parse.cdnNode.list"];
        },
        getParseCdnNodeNameHeader: function () {
          return this.options["parse.cdnNameHeader"];
        },
        getParseNodeHeader: function () {
          return this.options["parse.cdnNodeHeader"];
        },
        canOverwriteAdapters: function () {
          return e.parseBoolean(this.options["adapters.overwrite"]);
        },
        getAdaptersProperties: function () {
          return this.options["adapters.properties"];
        },
        isAppAnalyticsAutoBegin: function () {
          return e.parseBoolean(this.options["check.appAnalytics.autoBegin"]);
        },
        isAppAnalyticsEnabled: function () {
          return e.parseBoolean(this.options["check.appAnalytics.enabled"]);
        },
        isVideoAnalyticsEnabled: function () {
          return e.parseBoolean(this.options["check.videoAnalytics.enabled"]);
        },
        isRefreshLMAConfigurationEnabled: function () {
          return e.parseBoolean(
            this.options["lma.refresh.configuration.enabled"]
          );
        },
        isPluginLogsEnabled: function () {
          return e.parseBoolean(this.options["debug.pluginLogs.enabled"]);
        },
        isPlayerLogsEnabled: function () {
          return e.parseBoolean(this.options["debug.playerLogs.enabled"]);
        },
        refreshLMAConfigurationSeconds: function () {
          return this.options["lma.refresh.configuration.seconds"];
        },
        getPlayheadMonitorEnabled: function () {
          return this.options["playhead.monitor"];
        },
        getReadyStateMonitorEnabled: function () {
          return this.options["readyState.monitor"];
        },
        getComponentsConfig: function () {
          return this.options["components.config"];
        },
      };
    return (Ie = s), Ie;
  }
  var Re, ji;
  function zr() {
    if (ji) return Re;
    ji = 1;
    var t = {
      fireInit: function (e, i, s) {
        (s = s || "default"), this.videos.getVideo(s).fireInit(e, i);
      },
      fireError: function (e, i, s, n, r, o) {
        (o = o || "default"), this.videos.getVideo(o).fireError(e, i, s, n, r);
      },
      fireFatalError: function (e, i, s, n, r, o) {
        (o = o || "default"),
          this.videos.getVideo(o).fireFatalError(e, i, s, n, r);
      },
      fireStop: function (e, i, s) {
        (s = s || "default"), this.videos.getVideo(s).fireStop(e, i);
      },
      fireOfflineEvents: function (e, i) {
        (i = i || "default"), this.videos.getVideo(i).fireOfflineEvents(e);
      },
    };
    return (Re = t), Re;
  }
  var Ce, $i;
  function Qr() {
    if ($i) return Ce;
    $i = 1;
    var t = q,
      e = {
        getFastDataConfig: function () {
          return this.fastDataTransform.response.msg;
        },
        getHost: function () {
          var i = this.options.host;
          return (
            this.fastDataTransform &&
              this.fastDataTransform.response &&
              this.fastDataTransform.response.host &&
              (i = this.fastDataTransform.response.host),
            t.addProtocol(t.stripProtocol(i), this.options["app.https"])
          );
        },
        getFastDataHost: function () {
          return t.addProtocol(
            t.stripProtocol(this.options.host),
            this.options["app.https"]
          );
        },
        getAdminApiHost: function () {
          return t.addProtocol(
            t.stripProtocol(this.options.adminApiHost),
            this.options["app.https"]
          );
        },
        getSession: function () {
          var i = this.storage.getStorages("session");
          if ((i === "undefined" && (i = void 0), !i)) {
            var s = this.getStoredData();
            if (s)
              try {
                i = JSON.parse(s).q.c;
              } catch {}
          }
          return i;
        },
        getStorageHost: function () {
          var i = null,
            s = this.getStoredData();
          if (s)
            try {
              i = JSON.parse(s).q.h;
            } catch {}
          return i && t.addProtocol(i, this.options["app.https"]);
        },
        getStoredData: function () {
          return this.storage.getStorages("data");
        },
        getDataTime: function () {
          return this.storage.getStorages("dataTime");
        },
        setStoredData: function (i) {
          this.storage.setStorages("data", i);
        },
        setSession: function (i) {
          this.storage.setStorages("session", i);
        },
        setDataTime: function (i) {
          this.storage.setStorages("dataTime", i);
        },
        getBeatDefaultTime: function () {
          return (this._defaultBeatTime && this._defaultBeatTime) || 30;
        },
      };
    return (Ce = e), Ce;
  }
  var Oe, Ji;
  function Zr() {
    if (Ji) return Oe;
    Ji = 1;
    var t = J,
      e = rt,
      i = j,
      s = q,
      n = O,
      r = xn,
      o = Te(),
      a = mt,
      l = lr,
      v = je,
      T = ue,
      d = hi,
      A = Fe,
      N = he,
      g = ye,
      u = gr,
      S = St,
      m = we,
      E = Vi,
      L = kr,
      c = Fi,
      h = Ui,
      f = qi,
      p = X,
      R = t.extend(
        {
          constructor: function (_, w, F) {
            if (R.instance)
              return (
                _ &&
                  (n.notice("Set Options for already existing instance"),
                  R.instance.setOptions(_),
                  R.instance.storage.updateStorageOptions(
                    R.instance.options.disableCookies,
                    R.instance.options.forceCookies,
                    R.instance.options.disableStorage
                  )),
                w &&
                  (n.notice("Set Adapter for already existing instance"),
                  R.instance.setAdapter(w)),
                n.warn(
                  "Only a single plugin instance can be created on npaw context"
                ),
                R.instance
              );
            (this.storage = new g()),
              (this.utils = q),
              (this.uuidGenerator = new f(this)),
              (this.appAnalytics = new m(this)),
              (this.productAnalytics = new E(this)),
              (this.infinity = this.appAnalytics),
              (this.adapterTemplates = {}),
              (this.videos = new r(this)),
              this.videos.setVideo(new o("default", this, _, w)),
              (this.options = new N(_)),
              (this.storage = new g(
                null,
                this.options.disableCookies,
                this.options.forceCookies,
                this.options.disableStorage
              )),
              this.options.disableStorage || (this.offlineStorage = new u()),
              (this._refreshData = new e(this._checkOldData.bind(this), 36e5)),
              this._refreshData.start(),
              (this.requestBuilder = new S()),
              (this.resourceTransform = new T(this)),
              (this.lastEventTime = null),
              this.restartFastDataTransform(),
              this.appAnalytics._initAppAnalytics(),
              (this.browserLoadTimes = new L(this)),
              (this.deviceDetector = new h()),
              (this.backgroundDetector = new c(this)),
              this.options["background.enabled"] &&
                this.backgroundDetector.startDetection(),
              w && this.setAdapter(w),
              (this.isAppAnalyticsAutoBegin() || F) &&
                this.appAnalytics.begin(F),
              this._logInitPluginEvent(_),
              (R.instance = this);
          },
          addComponent: function (_) {
            if (_)
              try {
                _ instanceof A && (_.setPlugin(this), _.init());
              } catch {}
          },
          _checkOldData: function () {
            (this.videos.existsAdapter() &&
              this.videos.getAdapter().flags.isStarted) ||
              this.appAnalytics.appAnalyticsStarted ||
              this.restartFastDataTransform();
          },
          _setAdapterTemplates: function (_) {
            this.adapterTemplates = _;
          },
          restartFastDataTransform: function (_) {
            if (
              ((this.fastDataTransform = new v(this)),
              this.fastDataTransform.on(
                v.Event.DONE,
                this._receiveData.bind(this)
              ),
              this.fastDataTransform.on(
                v.Event.CONFIGURATION_LOADED,
                this._receiveConfiguration.bind(this)
              ),
              _)
            ) {
              this.fastDataTransform.setData(_);
              return;
            }
            this.appAnalytics.getIsDataExpired() ||
            !this.getStorageHost() ||
            (this.storage.getLocal("accCode") !== this.options.accountCode &&
              this.storage.getSession("accCode") !== this.options.accountCode)
              ? (this.storage.removeStorages("data"),
                this.storage.removeStorages("session"),
                this.storage.removeLocal("appAnalyticsStarted"),
                this.fastDataTransform.init())
              : (this.fastDataTransform.loadConfiguration(),
                this.fastDataTransform.setData(this.getStoredData()));
          },
          _receiveConfiguration: function (_) {
            try {
              if (_.target.response.configurationOptions) {
                var w = _.target.response.configurationOptions;
                this._processSpecialConfigOptions(w),
                  this.options.setOptions(w, this.options),
                  this.videos.updateAllOptions(w);
              }
              this.isAppAnalyticsAutoBegin() &&
                !this.appAnalytics._isModuleStarted() &&
                this.appAnalytics.begin(),
                this.isRefreshLMAConfigurationEnabled() &&
                  this.fastDataTransform &&
                  this.fastDataTransform._createConfigurationInterval();
            } catch {}
          },
          _processSpecialConfigOptions: function (_) {
            _.beatTime &&
              (_.beatTime >= 5 &&
                ((this._defaultBeatTime = _.beatTime),
                this.appAnalytics.updateBeatInterval(
                  this._defaultBeatTime * 1e3
                )),
              delete _.beatTime);
          },
          _receiveData: function (_) {
            this._logReceiveDataEvent(_),
              this.appAnalytics &&
                ((this.appAnalytics._beat.interval =
                  _.target.response.beatTime * 1e3),
                (this.appAnalytics.sessionExpire =
                  _.target.response.sessionExpire * 1e3)),
              this.videos &&
                (this.videos.updatePingInterval(
                  _.target.response.pingTime * 1e3
                ),
                this.videos.updateAdapterTemplates(_.target.response.adapters)),
              this.storage.setStorages("data", _.target.response.msg),
              this.storage.setStorages("dataTime", new Date().getTime()),
              this.storage.setStorages("accCode", this.options.accountCode),
              this.appAnalytics.getIsSessionExpired()
                ? (this.fastDataTransform.setSession(
                    this.fastDataTransform.response.code
                  ),
                  this.storage.setStorages(
                    "session",
                    this.fastDataTransform.response.code
                  ),
                  this.storage.setStorages(
                    "host",
                    this.fastDataTransform.response.host
                  ))
                : (this.fastDataTransform.setSession(this.getSession()),
                  this.fastDataTransform.setHost(this.getStorageHost()));
          },
          processFastDataResponse: function (_) {
            this.appAnalytics &&
              ((this.appAnalytics._beat.interval = _.beatTime * 1e3),
              (this.appAnalytics.sessionExpire = _.sessionExpire * 1e3)),
              this.videos &&
                (this.videos.updatePingInterval(_.pingTime * 1e3),
                this.videos.updateAdapterTemplates(_.adapters)),
              this.storage.setStorages("data", _.msg),
              this.storage.setStorages("dataTime", new Date().getTime()),
              this.storage.setStorages("accCode", this.options.accountCode),
              this.appAnalytics.getIsSessionExpired()
                ? (this.fastDataTransform.setSession(
                    this.fastDataTransform.response.code
                  ),
                  this.storage.setStorages(
                    "session",
                    this.fastDataTransform.response.code
                  ),
                  this.storage.setStorages(
                    "host",
                    this.fastDataTransform.response.host
                  ))
                : (this.fastDataTransform.setSession(this.getSession()),
                  this.fastDataTransform.setHost(this.getStorageHost()));
          },
          _reset: function (_) {
            this.videos.resetVideo(_);
          },
          _initComm: function (_) {
            _ = _ || "default";
            var w = "";
            this.videos.existsAdapter(_) &&
              ((w = this.videos.getAdapter(_).getURLToParse()),
              w || (w = this.videos.getAdapter(_).getResource())),
              this.resourceTransform.init(w),
              (this._comm = new a(this)),
              this._comm.addTransform(new l()),
              this._comm.addTransform(this.fastDataTransform),
              this.options && this.options.offline
                ? this._comm.addTransform(new d(this))
                : this._comm.addTransform(this.resourceTransform);
          },
          getComm: function () {
            return this._comm;
          },
          setOptions: function (_, w) {
            (w = w || "default"),
              this._logSetOptionsEvent(_),
              _ &&
                (this.options.setOptions(_),
                typeof _["background.enabled"] == "boolean" &&
                  (_["background.enabled"]
                    ? this.backgroundDetector.startDetection()
                    : this.backgroundDetector.stopDetection()),
                w &&
                  this.videos.existsVideo(w) &&
                  ((_ = _ || {}), this.videos.getVideo(w).mergeOptions(_)));
          },
          disable: function () {
            this.setOptions({ enabled: !1 });
          },
          enable: function () {
            this.setOptions({ enabled: !0 });
          },
          _logInitPluginEvent: function (_) {
            var w = {
              logs: _,
              logAction: "initPlugin",
              logType: "pluginMethod",
            };
            this._sendPluginLogs(w);
          },
          _logSetAdapterEvent: function (_) {
            var w = {
              adapter: _,
              logAction: "setAdapter",
              logType: "pluginMethod",
            };
            this._sendPluginLogs(w, !0);
          },
          _logSetOptionsEvent: function (_) {
            var w = {
              logs: _,
              logAction: "setOptions",
              logType: "pluginMethod",
            };
            this._sendPluginLogs(w, !0);
          },
          _logReceiveDataEvent: function (_) {
            var w = "";
            _.data &&
              _.data.target &&
              _.data.target.response &&
              _.data.target.response.msg &&
              (w = JSON.parse(_.data.target.response.msg));
            var F = {
              logs: w,
              logAction: "receiveData",
              logType: "internalMethod",
            };
            this._sendPluginLogs(F);
          },
          _sendPluginLogs: function (_, w) {
            if (((w = w || !1), this.isPluginLogsEnabled())) {
              _ &&
                _.logType &&
                _.logAction &&
                n.notice("PluginLog " + _.logType + ": Action " + _.logAction);
              var F = null;
              this._comm
                ? ((_ = this.requestBuilder.buildParams(
                    _,
                    i.Service.VIDEO_PLUGIN_LOGS,
                    this
                  )),
                  _ !== null &&
                    ((F = new p(null, i.Service.VIDEO_PLUGIN_LOGS, _)),
                    w && F.setPostRequest(!0),
                    this._comm.sendRequest(F)))
                : this.appAnalytics._comm &&
                  ((_ = this.requestBuilder.buildParams(
                    _,
                    i.Service.APP_ANALYTICS_PLUGIN_LOGS,
                    this
                  )),
                  _ !== null &&
                    ((F = new p(null, i.Service.APP_ANALYTICS_PLUGIN_LOGS, _)),
                    w && F.setPostRequest(!0),
                    this.appAnalytics._comm.sendRequest(F)));
            }
          },
        },
        { Event: i.WillSendEvent }
      );
    return (
      s.assign(R.prototype, Jr()),
      s.assign(R.prototype, Yr()),
      s.assign(R.prototype, Xr()),
      s.assign(R.prototype, zr()),
      s.assign(R.prototype, Qr()),
      (R.instance = null),
      (Oe = R),
      Oe
    );
  }
  var Be, Yi;
  function Xi() {
    if (Yi) return Be;
    Yi = 1;
    var t = e,
      e = {};
    return (
      (e.noConflict = function () {
        return (e = t), this;
      }),
      (e.VERSION = pt),
      (e.polyfills = Zi),
      e.polyfills(),
      (e.Object = k),
      (e.Emitter = J),
      (e.Component = Fe),
      (e.Log = O),
      e.Log.loadLevelFromUrl(),
      (e.Util = q),
      (e.HybridNetwork = Ue),
      (e.Chrono = nt),
      (e.Timer = rt),
      (e.Constants = j),
      (e.Request = X),
      (e.Communication = mt),
      (e.Transform = et),
      (e.FastDataTransform = je),
      (e.ResourceTransform = ue),
      (e.CdnParser = ri),
      (e.HlsParser = Je),
      (e.DashParser = ai),
      (e.OfflineParser = hi),
      (e.LocationheaderParser = oi),
      (e.Options = he),
      (e.Plugin = Zr()),
      (e.Storage = ye),
      (e.RequestBuilder = St),
      (e.PlayheadMonitor = gi),
      (e.Adapter = ft()),
      (e.adapters = {}),
      (e.Infinity = we),
      (e.AppAnalytics = we),
      (e.ProductAnalytics = Vi),
      (e.BackgroundDetector = Fi),
      (e.DeviceDetector = Ui),
      (e.UUIDGenerator = qi),
      (e.registerAdapter = function (i, s) {
        this.adapters[i] = s;
      }.bind(e)),
      (e.unregisterAdapter = function (i) {
        this.adapters[i] = null;
      }.bind(e)),
      (Be = e),
      Be
    );
  }
  var Kr = Xi();
  const K = H(Kr),
    zi = (t, e) => {
      for (let [i, s] of e.entries()) if (s.articleUrl === t) return s;
      return null;
    };
  class ta {
    constructor(e, i) {
      $(this, "plugin");
      $(this, "variants", new Map());
      $(this, "articlesEventListeners");
      (this.plugin = new K.Plugin({ accountCode: e })),
        (this.articlesEventListeners = i),
        this.plugin.appAnalytics._isModuleStarted() ||
          this.plugin.appAnalytics.begin();
    }
    setLogLevel(e) {
      K.Log.logLevel = e;
    }
    sendVariantAssociatedClick(e) {
      if (!this.isAppAnalyticsReady()) {
        K.Log.Error("Plugin not properly set up");
        return;
      }
      const i = zi(e, this.variants);
      if (!i) {
        K.Log.Error("Variant with id: " + e + " does not exists.");
        return;
      }
      K.Log.notice(
        "Article clicked: " + i.articleId + " with variantId: " + i.id
      ),
        this.plugin.appAnalytics.storeNavigationInfo(
          {
            articleId: i.articleId,
            variantId: i.id,
            variantImageUrl: i.imageUrl ? i.imageUrl : null,
            variantHeadLine: i.title ? i.title : null,
            articleUrl: i.articleUrl ? i.articleUrl : null,
          },
          {}
        );
    }
    sendArticleGenericClick(e) {
      if (!this.isAppAnalyticsReady()) {
        K.Log.Error("Plugin not properly set up");
        return;
      }
      K.Log.notice("Article with the url: " + e + " clicked"),
        this.plugin.appAnalytics.storeNavigationInfo({ articleUrl: e }, {});
    }
    sendImpressions(e) {
      if (!this.isAppAnalyticsReady()) {
        K.Log.Error("Plugin not properly set up");
        return;
      }
      K.Log.notice("New impression of the articles with variantId: " + e);
      let i = [...this.variants.keys()];
      this.plugin.appAnalytics.storeBeatInfo(
        {},
        { experiments: i, experimentsViewed: e }
      );
    }
    isAppAnalyticsReady() {
      return this.plugin && this.plugin.appAnalytics;
    }
  }
  class ea {
    constructor(e, i) {
      $(this, "pluginApi");
      $(this, "userId");
      $(this, "variants", new Map());
      $(this, "articleElements", new Map());
      $(this, "articlesEventListeners", new Map());
      (this.pluginApi = new ta(e, this.articlesEventListeners)),
        (this.userId = i);
    }
    setLogLevel(e) {
      this.pluginApi.setLogLevel(e);
    }
    setupExperiments() {
      this.userId !== "" &&
        Promise.all([this.getAllClientVariants(), this.getAllArticleElements()])
          .then(() => {
            this.variants.size > 0 &&
              this.articleElements.size > 0 &&
              this.prepareArticles();
          })
          .catch((e) => {
            console.error("An error occurred: ", e);
          });
    }
    async getAllClientVariants() {
      const e = await fetch(
        `https://social-lacewing-apparently.ngrok-free.app/variants/current?userId=${this.userId}`
      );
      if (!e.ok) throw new Error("Network response was not ok");
      (await e.json()).data.forEach((s) => {
        if (s.id !== "" && s.articleId !== "") {
          const n = {
            id: s.id,
            articleId: s.articleId,
            title: s.title !== "" ? s.title : null,
            description: s.description !== "" ? s.description : null,
            imageUrl: s.imageUrl !== "" ? s.imageUrl : null,
            imageAlt: s.imageAlt !== "" ? s.imageAlt : null,
            articleUrl: s.articleUrl,
          };
          this.variants.set(s.id, n);
        }
      }),
        (this.pluginApi.variants = this.variants);
    }
    async getAllArticleElements() {
      [
        ...Array.from(document.getElementsByClassName("npaw-article")),
        ...Array.from(document.querySelectorAll("[npaw-article]")),
      ].forEach((i) => {
        const s = Array.from(
            i.querySelectorAll("[npaw-article-url], .npaw-article-url")
          ),
          n = s.find((a) => a.href);
        if (!n || this.articleElements.has(n.href)) return;
        const o = {
          id: i.getAttribute("data-npaw-article-id") || n.href,
          url: n.href,
          mainElement: i,
          titleElement:
            i.querySelectorAll("[npaw-article-title]")[0] ||
            i.getElementsByClassName("npaw-article-title")[0] ||
            null,
          descriptionElement:
            i.querySelectorAll("[npaw-article-description]")[0] ||
            i.getElementsByClassName("npaw-article-description")[0] ||
            null,
          imageElement:
            i.querySelectorAll("[npaw-article-image]")[0] ||
            i.getElementsByClassName("npaw-article-image")[0] ||
            null,
          anchorElements: s,
        };
        this.articleElements.has(o.id) || this.articleElements.set(o.id, o);
      });
    }
    prepareArticles() {
      this.articleElements.forEach((e) => {
        const i = zi(e.id, this.variants);
        if (!i) {
          e.mainElement.addEventListener("click", () => {
            this.pluginApi.sendArticleGenericClick(e.url);
          });
          return;
        }
        const s = new z(this.pluginApi, i, e);
        s.updateTexts(), s.setupAnchors(), s.setupImpressionObserver();
      });
    }
  }
  return ea;
});
