(function(a,m,q){function g(a,b){a.super_=b;d.prototype=b.prototype;a.prototype=new d;a.prototype.constructor=a}function d(){}function f(a,b){for(var p in b)b.hasOwnProperty(p)&&(a[p]=b[p]);return a}function w(a,b){return(b=b||q)&&b.getElementById&&b.getElementById(a)}function y(a,b){var p=b?a.substr?w(a):a:q;return p?p.getElementsByTagName(b||a):[]}function z(a,b){return~(" "+a.className+" ").indexOf(" "+b+" ")}function x(a,b){z(a,b)&&(a.className=(" "+a.className+" ").replace(" "+b+" "," ").slice(1,
-1),x(a,b))}function t(a){var p=a.offsetTop,c=a.offsetLeft,d,e=b.curCSS,f="static"!=e(a,"position");p||(p=(parseFloat(e(a,"marginTop"))||0)+(f?parseFloat(e(a,"top"))||0:0));c||(c=(parseFloat(e(a,"marginLeft"))||0)+(f?parseFloat(e(a,"left"))||0:0));f&&a.getBoundingClientRect&&(d=b.offset(a,!0));!p&&d&&(p=d.top);!c&&d&&(c=d.left);return{top:p,left:c}}function I(a){var b={relativeX:a[B[0]],relativeY:a[B[1]]};if(null==a.pageX&&null!=a.clientX){var p=q.documentElement,c=q.body;b.pageX=a.clientX+(p&&p.scrollLeft||
c.scrollLeft||0);b.pageY=a.clientY+(p&&p.scrollTop||c.scrollTop||0)}else b.pageX=a.pageX,b.pageY=a.pageY;return b}function P(a,c){if(!(a=a.parentNode))return!1;var p=a.ownerDocument,d=p.body,e=b.curCSS,f;c&&(c+=1);if(m.$sf)return!0;if(b.isIE&&(8>p.documentMode||"BackCompat"==p.compatMode))return!1;for(;a&&a!=d;){if("hidden"==e(a,"overflow"))return!1;if("fixed"==e(a,"position"))break;else if(c&&(f=parseInt(e(a,"z-index"),10))&&f<c)return!1;a=a.parentNode}return!0}function r(){for(var a=0,b=[];a<V.length;a++)"complete"!=
V[a].document.readyState&&b.push(V[a]);if(!(V=b).length||3E4<(new Date).getTime()-F){E=clearInterval(E);for(a=0;a<N.length;a++)N[a]();N=[];V=[]}}function h(a,b){var p=Math.max(a.x,b.x),c=Math.max(a.y,b.y),d=Math.min(a.x+a.width,b.x+b.width)-p;a=Math.min(a.y+a.height,b.y+b.height)-c;return 0<d&&0<a?{x:p,y:c,width:d,height:a}:{x:0,y:0,width:0,height:0}}function O(a,c,d,e){var p=function(a){e&&e.apply(a,arguments)},g=y(d,"head");g=g&&g[0];if(!g)try{throw Error("Can't find head tag.");}catch(ca){p(ca)}var h=
c.src||c.href,X=h.replace(/[^\da-z_-]/gi,"_"),k=d.adformId||b.gid("doc_"),ba=k+"|"+X,Y=Z[ba];X=b.byTag(d,a);var l=0,m=X.length;d.adformId=d.adformId||k;if(Y)Y.loaded?p():Y.callbacks.push(p);else{for(;l<m;++l)if(X[l].src==h||X[l].href==h){p();return}Z[ba]=Y={doc:d,src:h,callbacks:[p]};var n=d.createElement(a);f(n,c);if(e){var q=function(a){n.onload=n.onreadystatechange=n.onerror=null;a?Z[ba]=null:Y.loaded=1;var b=Y.callbacks;l=0;for(m=b.length;l<m;++l)b[l](a)};n.onload=function(){q()};n.onreadystatechange=
function(){"complete"==n.readyState&&q()};n.onerror=function(){try{throw Error("Failed to load script: "+h);}catch(ca){q(ca)}}}setTimeout(function(){g.insertBefore(n,g.firstChild)},400)}}a.Log||(a.Log={});a.Log.pushMessage||(a.Log.pushMessage=function(){});a.Log.sendMessage||(a.Log.sendMessage=function(){});a.RMB=a.RMB||{};var c=a.RMB,b=c.lib||(c.lib={});a.lib||(a.lib=b);b.inherit=g;b.define=function(a,b,c){c&&g(a,b);c(a,a.prototype)};b.gid=function(a){var b=+new Date;return(a||"")+(b+b*~~(1E4*Math.random())).toString(36)};
b.byId=w;b.byTag=y;b.bind=function(a,b){return function(){return b.apply(a,arguments)}};b.extend=f;b.isMouseLeave=function(a,b){if(!a||"mouseout"!=a.type)return!0;a=a.relatedTarget||a.toElement;for(var p,c=b.length;a;){for(p=0;p<c;p++)if(b[p]==a)return!1;a=a.parentNode}return!0};b.singleCall=function(a){function b(){e=!1;var a=c,b=p,f=d;p=c=d=null;a&&a.apply(b,f)}var p,c,d,e;return function(f,g){p=f;c=g;d=v.call(arguments,2);g&&!e?e=setTimeout(b,a):!g&&e&&(clearTimeout(e),e=!1)}};b.onload=function(a,
b){try{do{if(a[Q])break;a[Q]=!0;"complete"!=a.document.readyState&&(V.push(a),E||(F=(new Date).getTime(),E=setInterval(r,200)))}while(a!=a.parent&&(a=a.parent))}catch(ba){}E?N.push(b):setTimeout(b,0)};b.overlap=h;b.overlapElem=function(a,c){var p=b.offset(a),d=b.offset(c);return h({x:p.left,y:p.top,width:a.offsetWidth,height:a.offsetHeight},{x:d.left,y:d.top,width:c.offsetWidth,height:c.offsetHeight})};b.hasClass=z;b.addClass=function(a,b){z(a,b)||(a.className+=" "+b)};b.removeClass=x;b.loadScript=
function(a,b,c){O("script",{src:b,type:"text/javascript"},a,c)};b.loadCSS=function(a,b){O("link",{href:b,type:"text/css",rel:"stylesheet"},a)};b.navigator=m.navigator;b.isTMX=function(a){try{var b=a.document,c=b&&b.body;return c&&z(c,"tmx")}catch(Y){}return!1};b.isolate=function(a,b){var c=a.__adform_isolate;if(!c){var d=a.document;c=y(d,"head")[0];d=d.createElement("script");d.type="text/javascript";d.text='function __adform_isolate(f){new Function("window","("+f+")(window)")(window)}';c.insertBefore(d,
c.firstChild);c.removeChild(d);c=a.__adform_isolate}c?c(b):(new Function("window","("+b+")(window)"))(a)};var v=Array.prototype.slice;b.addEvent=function(a,b,c){return a[C]?a[C](b,c,!1):a[k]?a[k]("on"+b,c):!1};b.removeEvent=function(a,b,c){return a[A]?a[A](b,c,!1):a[l]?a[l]("on"+b,c):!1};var C="addEventListener",A="removeEventListener",k="attachEvent",l="detachEvent",n=/([A-Z])/g,u=/^-?\d+(?:px)?$/i,M=/^-?\d/;a=q.defaultView;b.curCSS=a&&a.getComputedStyle?function(a,b){var c=a.ownerDocument.defaultView;
if(c&&(c=c.getComputedStyle(a,null)))return c.getPropertyValue(b.replace(n,"-$1").toLowerCase())||a.style[b]}:q.documentElement.currentStyle&&function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b];if(!u.test(e)&&M.test(e)){var f=(d=a.style).left;if(c=a.runtimeStyle&&a.runtimeStyle.left)a.runtimeStyle.left=a.currentStyle.left;d.left="fontSize"===b?"1em":e||0;e=d.pixelLeft+"px";d.left=f;c&&(a.runtimeStyle.left=c)}return""===e?"auto":e};var W=function(){function a(){return a}var b=q.body,c=q.createElement("div");
var d=["position:absolute;top:0;left:0;margin:0;padding:0;border:0;width:1px;height:1px;"].pop();c.innerHTML='<div style="'+d+'visibility:hidden"><div style="'+d+'border:5px solid #000"><div style="margin:0"></div></div><div style="'+d+'"><div style="'+d+'position:fixed;top:20px;"></div></div><div style="'+d+'position:relative;border:5px solid #000;overflow:hidden"><div style="margin:0"></div></div><table style="'+d+'border:5px solid #000" cellpadding="0" cellspacing="0"><tr><td></td></tr></table></div>';
b.insertBefore(c=c.firstChild,b.firstChild);d=c.childNodes;a.dnab=5!==d[0].firstChild.offsetTop;a.sfp=20===d[1].firstChild.offsetTop;a.sbfonv=-5===d[2].firstChild.offsetTop;a.dabftac=5===y(c,"td").offsetTop;b.removeChild(c);b=c=d=null;return W=a},T=/^t(?:able|d|h)$/i;b.offsetFromWindow=function(a){var c=a&&a.ownerDocument;if(!c)return null;var d=c.documentElement;if("getBoundingClientRect"in d){try{var e=a.getBoundingClientRect();var f=d.getBoundingClientRect()}catch(fa){}if(!e)return{top:0,left:0};
if(0<f.left||0<f.top)e.top-=f.top,e.left-=f.left;return{top:e.top,left:e.left}}e=c.defaultView||c.parentWindow;f=c.body;if(a===c.body)return t(a);a=b.offset(a);c=e&&e.pageYOffset||d.scrollTop||f.scrollTop;d=e&&e.pageXOffset||d.scrollLeft||f.scrollLeft;a.top-=c;a.left-=d;return a};b.offset="getBoundingClientRect"in q.documentElement?function(a,b){var c=a&&a.ownerDocument;if(!c)return null;if(!b&&a===c.body)return t(a);try{var d=a.getBoundingClientRect()}catch(ea){}if(!d)return{top:0,left:0};a=c.body;
c=c.documentElement;return{top:d.top+(c.scrollTop||a.scrollTop)-(c.clientTop||a.clientTop||0),left:d.left+(c.scrollLeft||a.scrollLeft)-(c.clientLeft||a.clientLeft||0)}}:function(a){var b=a&&a.ownerDocument;if(!b)return null;if(a===b.body)return t(a);var c=a.offsetParent,d=b.documentElement,e=b.body;var f=(b=b.defaultView)?b.getComputedStyle(a,null):a.currentStyle;for(var g=a.offsetTop,h=a.offsetLeft,k=W();(a=a.parentNode)&&a!==e&&a!==d&&(!k.sfp||"fixed"!==f.position);)f=b?b.getComputedStyle(a,null):
a.currentStyle,g-=a.scrollTop,h-=a.scrollLeft,a===c&&(g+=a.offsetTop,h+=a.offsetLeft,!k.dnab||k.dabftac&&T.test(a.nodeName)||(g+=parseFloat(f.borderTopWidth)||0,h+=parseFloat(f.borderLeftWidth)||0),c=a.offsetParent),k.sbfonv&&"visible"!==f.overflow&&(g+=parseFloat(f.borderTopWidth)||0,h+=parseFloat(f.borderLeftWidth)||0);if("relative"===f.position||"static"===f.position)g+=e.offsetTop,h+=e.offsetLeft;k.sfp&&"fixed"===f.position&&(g+=Math.max(d.scrollTop,e.scrollTop),h+=Math.max(d.scrollLeft,e.scrollLeft));
return{top:g,left:h}};b.client=function(a){a=a.ownerDocument||a;var b=a.defaultView||a.parentWindow;var c=a.documentElement;var d=a.body;if(b.innerWidth){a=b.innerWidth;var e=b.innerHeight}else c?(a=c.clientWidth,e=c.clientHeight,a&&d.clientHeight==d.offsetHeight||(a=Math.min(a||123456789,d.clientWidth||123456789),e=Math.min(e||123456789,d.clientHeight||123456789))):(a=d.clientWidth,e=d.clientHeight);return{left:b&&b.pageXOffset||c&&c.scrollLeft||d&&d.scrollLeft||0,top:b&&b.pageYOffset||c&&c.scrollTop||
d&&d.scrollTop||0,width:a,height:e}};b.isArray=Array.isArray||function(a){return"[object Array]"==Object.prototype.toString.call(a)};var B=[["offsetX","offsetY"],["layerX","layerY"]];b.getMousePos=function(a){for(var c;c=B.shift();)if("undefined"!=typeof a[c[0]]){B=c;break}c||(B=["x","y"]);b.getMousePos=I;return I(a)};var J=q.createElement("div");b.html=function(a,b){b=!b&&J||b.createElement("div");b.innerHTML=a;return b.firstChild&&b.removeChild(b.firstChild)};a=b.navigator;var D=a.vendor;a=a.userAgent;
var U=/Apple Computer/i.test(D);c=/Google/i.test(D);var R=b.isIPad=/iPad/i.test(a),G=b.isIPhone=/iPhone/i.test(a),H=b.isIOS=R||G,K=b.isTouch="ontouchstart"in q.documentElement||"ontouchstart"in m;R=b.isOrientation="orientation"in m;G=b.isAndroid=!H&&/Android/i.test(a);b.isAndroidApp=G&&!/^(?:Opera|Mozilla)/i.test(a);var L;b.isIOSF=H&&(L=/\sos\s(\d+)_\d+/i.exec(a))&&(L=4<L[1]>>0);var e=b.isMobile=/Mobile|Mobi|Tablet|Nokia/i.test(a)||K;L=b.isIE=/msie|Trident/i.test(a);K=b.isFF=/Firefox[\/.]+[^\s]/i.test(a);
b.isMACOS=/Mac OS X/i.test(a);(b.isWinPhone=L&&e&&/Phone/gi.test(a))&&(e=/Windows Phone (OS )?(\d+[\.\d]*)/i.exec(a))&&e[2]&&(b.winPhoneVer=parseFloat(e[2]));e=b.isOpera=/Opera/i.test(a);var S=b.isOperaMobile=/Opera\s(?!Mini)/i.test(a),aa=b.isOperaMini=/Opera\sMini/i.test(a);D=b.isOperaWebKit=/OPR/i.test(a)&&/Opera Software/i.test(D);H=b.isChrome=/(Chrome|CriOS)+\/[\d\.]+\s/i.test(a)&&(H?U:c);U=b.isSafari=!/Chrome|CriOS|Skyfire/i.test(a)&&/Safari+\/[\.\d]+$/i.test(a)&&U;c=b.isInternet=G&&!H&&R&&/Safari\/[\.\d]+$/i.test(a)&&
c;b.isEdge=/Edge\/[\.\d]+$/i.test(a);b.isAfmaSDK=/afma-sdk/i.test(a);var da=L?"msie":K?"firefox":S?"operaMobile":aa?"operaMini":e?"opera":D?"operaWebKit":H?"chrome":U?"safari":c?"internet":!1;b.browser=function(){return da};b.isIE&&("Microsoft Internet Explorer"==b.navigator.appName&&/MSIE (\d+[\.\d]*)/i.exec(a)||/rv:(\d+[\.\d]*)/i.exec(a))&&(b.ieVersion=parseFloat(RegExp.$1));b.testPlace=b.isIE&&8>b.ieVersion?function(){return!1}:P;b.isSafari&&(a=/Version.([\d.]+)/.exec(a),b.safariVersion=parseFloat(a&&
a[1]));var V=[],N=[],Q="__adform_onload",E,F,Z={}})(Adform=window.Adform||{},window,document);
(function(a){function m(){}a.RMB=a.RMB||{};a.RMB.EventEmitter=m;var q=Array.prototype.slice;a=m.prototype;a.emit=function(a){var d=this._events,f=!1,g=arguments;if(d&&(d=d[a]))if("function"==typeof d){switch(g.length){case 1:d.call(this);break;case 2:d.call(this,g[1]);break;case 3:d.call(this,g[1],g[2]);break;case 4:d.call(this,g[1],g[2],g[3]);break;default:d.apply(this,q.call(g,1))}f=!0}else if(d.length){g=q.call(g,1);d=d.slice();f=0;for(var m=d.length;f<m;f++)d[f].apply(this,g);f=!0}else delete this._events[a];
return f};a.on=function(a,d){this._events||(this._events={});this.emit("newListener",a,d);var f=this._events;f[a]?"function"==typeof f[a]?f[a]=[f[a],d]:f[a].push(d):f[a]=d;return this};a.once=function(a,d){var f=d._once;f?f._times++:(f=d._once=function(){this.off(a,f);1>--f._times&&delete d._once;return d.apply(this,arguments)},f._times=1);return this.on(a,f)};a.off=function(a,d){if(!this._events||!this._events[a])return this;var f=this._events,g=f[a];if(g==d)return delete f[a],this;d&&d._once&&this.off(d._once);
if("function"==typeof g)return this;if(2>g.length&&g[0]==d)return delete f[a],this;for(var m=0,q=g.length,x=[];m<q;m++)g[m]!=d&&x.push(g[m]);x.length!=q&&(x.length?f[a]=x:delete f[a]);return this};a.clear=function(a){a?this._events&&this._events[a]&&delete this._events[a]:delete this._events;return this};a.list=function(a){this._events||(this._events={});var d=this._events;d[a]?"function"==typeof d[a]&&(d[a]=[d[a]]):d[a]=[];return d[a]}})(Adform=window.Adform||{});
/*
 mustache.js - Logic-less {{mustache}} templates with JavaScript
 http://github.com/janl/mustache.js
*/
(function(a,m,q){function g(a){return parseInt(a,10)?a:0}function d(){}function f(a,d,g){function t(){c=!1;var b=f;f=[];g(function(a){for(var c=0;c<b.length;c++)if(a)b[c][1](a);else h(b[c][0],b[c][1])})}function h(b,v){var h=!1;d(b,function(){h=!0;v.apply(this,arguments)});h||(f.push([b,v]),c||(c=setTimeout(t,a)))}var f=[],c=!1;return h}function w(a,d,g){var r=a["@id"]||0;var h=a["@pdata"]||"";var f={$id:r,$name:a["@name"]||"default",$link:g.replace(/adfibeg=\d+/,h?"pdata="+h:"adfibeg="+r),$pdata:h};
if(a.TextVars)for(g=0,r=a.TextVars.TextVar,h=r.length,x.isArray(r)||(r=[r],h=1);g<h;g++){var c=r[g];var b=c["@name"];c=c["@value"];f[b]=c;"product_deeplink"==b&&(f.$link+=";cpdir="+encodeURIComponent(c))}if(a.Graphics)for(g=0,r=a.Graphics.Graphic,h=r.length,x.isArray(r)||(r=[r],h=1);g<h;g++)c=r[g],f[c["@name"]]=d+c["@value"]+"?assetID="+c["@assetID"]+"&av="+c["@av"];return f}function y(a,g,d){var f=a.root;a={};if(f.TextVars||f.Graphics)a[0]=a[""]=w(f,g,d);if(f.Groups){var h=0,t=f.Groups.Group,c;x.isArray(t)||
(t=[t]);for(c=t.length;h<c;h++){var b=w(t[h],g,d);a[b.$id]=b}}g=f.GroupIds?f.GroupIds.split(","):[];return{ids:g,items:a,total:g.length}}var z=a.AdMessage||(a.AdMessage={}),x=a.lib;z.build=function(a){function w(){var e=G?G.length:0;return{total:e,totalPages:Math.ceil(e/c),pageSize:c,ids:G||[],limit:t}}function q(e,a,b){z.load(M[e]+"&"+a,function(e,a){e?b(e):b(null,y(a,n,l))})}function r(e){if(e)for(var a in e)e.hasOwnProperty(a)&&(R[a]=e[a])}var h=m.dhtml&&dhtml.getVar()||{},t=g(a.limit)||100,c=
g(a.pageSize)||1,b=g(a.cid||h.cid),v=g(a.tid||h.tid),C=g(a.tv||h.tv)||+new Date,A=g(a.bn||h.bn),k=a.gid||h.gid||0,l=a.clickTAG||"",n=(a.statics||a.domain||h.staticDomain||h.domain).replace(/\/+$/,""),u=(a.domain||h.domain).replace(/(\w+:\/\/[^\/]+\/).*/,"$1"),M={adMessage:u+"Serving/AdMessage/?",recommendations:u+"dco/recommendations/?",products:u+"dco/products/?"};b="aid="+b+"&tid="+v+"&tv="+C;v=g(a.icid||h.icid)||"0";C=h.unloadID||"0";u=h.geo||"0;0;0";var W=a.eshopId||h.trackingSetupId||"0",T=h.ADFbanID||
"0",B=g(a.rotseqno||h.rotseqno),J=a.smid||h.smid,D=a.dcoEngineId||h.dcoEngineId;a=h.ccpa;h.versionListId&&(b+="&versionListId="+h.versionListId);h.versionId&&(b+="&versionId="+h.versionId);v&&(b+="&icid="+v);W&&(b+="&eid="+W);B&&(b+="&rotseqno="+B);J&&(b+="&smid="+J);D&&(b+="&dco="+D);T&&(b+="&bnrid="+T);C&&(b+="&intid="+C);u&&(b+="&geo="+u.split(";").join(","));for(var U in M)M[U]+=b;M.recommendations+=a?"&ccpa="+a:"";var R={},G,H=0,K=f(100,function(e,a){e*=c;var b=e+2*c;H=Math.max(H,b);if(G)if(e=
G.slice(e,b),e.length)a(null,e,w());else try{throw Error("AdMessage page not found.");}catch(N){a(N)}},function(e){q(D?"recommendations":"adMessage","bn="+A+"&gcnt="+t+"&pgsz="+Math.min(H,t),function(a,b){if(a)e(a);else if(r(b.items),(G=b.ids)&&G.length)e();else try{throw Error("AdMessage template doesn't contain groups.");}catch(N){e(N)}});H=0}),L={},e=[],S=f(100,function(a,b){for(var k=a._test||0,l=[],c=0,v=a.length,S,n;c<v;c++)(n=R[S=a[c]])?l.push(n):L[S]||(L[S]=!0,e.push(S));a._test=++k;if(l.length==
a.length)b(null,l,w());else if(4<k)try{throw Error("AdMessage group"+((1<a.length?'s "':' "')+a.join(", "))+'" not found.');}catch(p){b(p)}},function(a){e.length?q(D?"products":"adMessage","bn="+A+"&gid="+e.join(","),function(e,b){L={};e?a(e):(r(b.items),a())}):setTimeout(function(){a()},100);e=[]});h.dynamicAdContent&&r(y(h.dynamicAdContent,n,l).items);return{setProperties:function(e){var a=e.pageSize>>0||c;e=e.limit>>0||t;0<e&&(t=e);0<a&&(c=Math.min(a,t))},getProperties:w,getPage:function(e,a){K((e>>
0)-1,function(e,b){e?a(e):(S(b.slice(0,c),a),S(b.slice(c),d))})},getItems:function(e,a){S(x.isArray(e)?e:[e],a)},getDefault:function(e){S([k],function(a,b,k){e(a,b&&b[0],k)})}}};z.load=function(a,g){var f=x.gid("adform_com_"),d=q.createElement("script"),h=function(){c();try{throw Error("AdMessage load error.");}catch(b){g(b)}},w=function(a){c();g(null,a)},c=function(){d.parentNode.removeChild(d);m[f]=d.onerror=d.onload=h=w=c=d=null};d.type="text/javascript";d.src=a+"&format=json&callback="+encodeURIComponent(f);
d.onload=d.onerror=function(){setTimeout(h,1E3)};m[f]=w;a=x.byTag(q,"script")[0];a.parentNode.insertBefore(d,a)}})(Adform=window.Adform||{},window,document);
(function(a,m,q,g){function d(){}function f(a){for(var b=h.length;0<b--;)if(h[b][0]==a)return h[b][1]}function w(a,d,g){function k(e){if(e&&v)b(v,"touchstart",I);else if(!v)try{(v=a.defaultView.frameElement)&&c(v,"touchstart",I)}catch(S){}}var l=f(a),n,u;l?n=l._:h.push([a,l={_:n=new r,_destroy:function(){n.clear();delete this._;delete this._destroy;for(var b in this)if("function"==typeof this[b])this[b]();for(b=h.length;0<b--;)if(h[b][0]==a){h.splice(b,1);break}}}]);var M,v,C,w,A,q,m,t;P.isIOS&&a.defaultView.frameElement&&
{click:1,mousedown:1,mouseup:1}[d]&&c(g,d,I);if(!l[d])switch(d){case "swipe":var G=function(a){if(M=x(n,a.target,"swipe")[0])a.preventDefault(),(a=a&&a.targetTouches)&&(a=a[0])&&(C=a.pageX,A=a.pageY,m=(new Date).getTime())};var H=function(a){var b=a&&a.targetTouches;M&&(a.preventDefault(),b&&(b=b[0])&&m&&(w=b.pageX,q=b.pageY,t=(new Date).getTime(),.2<Math.sqrt(Math.pow(w-C,2)+Math.pow(q-A,2))/(t-m)&&(a=A-q,b={type:"swipe"},b.directionX=0<C-w?"left":"right",b.directionY=0<a?"up":"down",b.target=M[1],
m=0,z(n,M[1],b))))};c(a,"touchstart",G);c(a,"touchend",H);c(a,"touchmove",H);k();l[d]=function(){b(a,"touchstart",G);b(a,"touchend",H);b(a,"touchmove",H);k(!0)};break;case "hover":if(a.addEventListener){var K=function(a){a=a.target;u!=a&&y(n,u,u=a)};var L=function(a){a=a.relatedTarget;u!=a&&y(n,u,u=a)}}else K=function(b){b=(a.defaultView||a.parentWindow).event.srcElement;u!=b&&y(n,u,u=b)},L=function(b){b=(a.defaultView||a.parentWindow).event.toElement;u!=b&&y(n,u,u=b)};c(a,"mouseover",K);c(a,"mouseout",
L);c(a,"mousemove",K);l[d]=function(){b(a,"mouseover",K);b(a,"mouseout",L);b(a,"mousemove",K);u=null};break;case "click":case "mousedown":case "mouseup":case "touchstart":case "touchmove":case "touchend":K=a.addEventListener?function(a){z(n,a.target,a)}:function(b){b=(a.defaultView||a.parentWindow).event;z(n,b.srcElement,b)},c(a,d,K),l[d]=function(){b(a,d,K)}}return!!l[d]}function y(a,b,c){c=x(a,c,"hover");b=x(a,b,"hover");for(var k=c.length,l=k,d=b.length,g=d-k;0<l--&&c[l][1]==(b[g+l]&&b[g+l][1]););
c.length=k=l+1;b.length=d=g+l+1;var f,h=a._events;if(h){for(g=l=-1;++g<d;)h[f=b[g][0]]&&a.emit(f,b[g][1],"hoverout");for(;++l<k;)h[f=c[l][0]]&&a.emit(f,c[l][1],"hoverin")}}function z(a,b,c,k){k=k||c;b=x(a,b,c.type);c=b.length;for(var l=0,d;d=b[l],l++<c;)a.emit(d[0],d[1],k)}function x(a,b,c){a=a._events;var k,d,g,f=[];if(a)for(;b&&"undefined"!=(g=typeof(d=b.className));)"string"==g&&~d.indexOf("adform-dom-")&&a[k=t(b)+":"+c]&&(f[f.length]=[k,b]),b=b.parentNode;return f}function t(a){a=a.className;
return~a.indexOf("adform-dom-")?a.match(O)[1]:P.gid()}function I(){}a.RMB=a.RMB||{};a=a.RMB;a.DOMEvents=d;var P=a.lib,r=a.EventEmitter,h=[],O=/adform-dom-(\S+)/,c=P.addEvent,b=P.removeEvent;d.has=function(a){return!!{hover:1,mousedown:1,mouseup:1,click:1,swipe:1,touchstart:1,touchmove:1,touchend:1}[a]};d.on=function(a,b,c){var k=a.ownerDocument;if(w(k,b,a)){var d=t(a);P.addClass(a,"adform-dom-"+d);f(k)._.on(d+":"+b,c);return!0}return!1};d.off=function(a,b,c){f(a.ownerDocument)._.off(t(a)+":"+b,c)};
d.destroy=function(a){f(a)._destroy()}})(Adform=window.Adform||{},window,document);
var Mustache="undefined"!==typeof module&&module.exports||{};
(function(a){function m(a){return String(a).replace(/&(?!\w+;)|[<>"']/g,function(a){return C[a]||a})}function q(a,b,c,d){d=d||"<template>";var k=b.split("\n"),g=Math.max(c-3,0);k=k.slice(g,Math.min(k.length,c+3));for(var l,f=0,h=k.length;f<h;++f)l=f+g+1,k[f]=(l===c?" >> ":"    ")+k[f];a.template=b;a.line=c;a.file=d;a.message=[d+":"+c,k.join("\n"),"",a.message].join("\n");return a}function g(a,b,c){if("."===a)return b[b.length-1];a=a.split(".");for(var k=a.length-1,d=a[k],g,f,l=b.length,h,n;l;){n=
b.slice(0);f=b[--l];for(h=0;h<k;){f=f[a[h++]];if(null==f)break;n.push(f)}if(f&&"object"===typeof f&&d in f){g=f[d];break}}"function"===typeof g&&(g=g.call(n[n.length-1]));return null==g?c:g}function d(a,b,c,d){var k="";a=g(a,b);if(d){if(null==a||!1===a||r(a)&&0===a.length)k+=c()}else if(r(a))h(a,function(a){b.push(a);k+=c();b.pop()});else if("object"===typeof a)b.push(a),k+=c(),b.pop();else if("function"===typeof a){var f=b[b.length-1];k+=a.call(f,c(),function(a){return z(a,f)})||""}else a&&(k+=c());
return k}function f(b,d){d=d||{};for(var k=d.tags||a.tags,g=k[0],f=k[k.length-1],h=['var buffer = "";',"\nvar line = 1;","\ntry {",'\nbuffer += "'],l=[],w=!1,m=!1,t=function(){if(!w||m||d.space)l=[];else for(;l.length;)h.splice(l.pop(),1);m=w=!1},r=[],y,v,x,z=function(a){k=c(a).split(/\s+/);v=k[0];x=k[k.length-1]},A=function(a){h.push('";',y,'\nvar partial = partials["'+c(a)+'"];',"\nif (partial) {","\n  buffer += render(partial,stack[stack.length - 1],partials);","\n}",'\nbuffer += "')},e=function(a,
X){a=c(a);if(""===a)throw q(Error("Section name may not be empty"),b,N,d.file);r.push({name:a,inverted:X});h.push('";',y,'\nvar name = "'+a+'";',"\nvar callback = (function () {","\n  return function () {",'\n    var buffer = "";','\nbuffer += "')},C=function(a){e(a,!0)},I=function(a){a=c(a);var p=0!=r.length&&r[r.length-1].name;if(!p||a!=p)throw q(Error('Section named "'+a+'" was never opened'),b,N,d.file);a=r.pop();h.push('";',"\n    return buffer;","\n  };","\n})();");a.inverted?h.push("\nbuffer += renderSection(name,stack,callback,true);"):
h.push("\nbuffer += renderSection(name,stack,callback);");h.push('\nbuffer += "')},P=function(a){h.push('";',y,'\nbuffer += lookup("'+c(a)+'",stack,"");','\nbuffer += "')},V=function(a){h.push('";',y,'\nbuffer += escapeHTML(lookup("'+c(a)+'",stack,""));','\nbuffer += "')},N=1,Q,E,F=0,Z=b.length;F<Z;++F)if(b.slice(F,F+g.length)===g){F+=g.length;Q=b.substr(F,1);y="\nline = "+N+";";v=g;x=f;w=!0;switch(Q){case "!":F++;E=null;break;case "=":F++;f="="+f;E=z;break;case ">":F++;E=A;break;case "#":F++;E=e;
break;case "^":F++;E=C;break;case "/":F++;E=I;break;case "{":f="}"+f;case "&":F++;m=!0;E=P;break;default:m=!0,E=V}Q=b.indexOf(f,F);if(-1===Q)throw q(Error('Tag "'+g+'" was not closed properly'),b,N,d.file);g=b.substring(F,Q);E&&E(g);for(E=0;~(E=g.indexOf("\n",E));)N++,E++;F=Q+f.length-1;g=v;f=x}else switch(Q=b.substr(F,1),Q){case '"':case "\\":m=!0;h.push("\\"+Q);break;case "\r":break;case "\n":l.push(h.length);h.push("\\n");t();N++;break;default:O.test(Q)?l.push(h.length):m=!0,h.push(Q)}if(0!=r.length)throw q(Error('Section "'+
r[r.length-1].name+'" was not closed properly'),b,N,d.file);t();h.push('";',"\nreturn buffer;","\n} catch (e) { throw {error: e, line: line}; }");f=h.join("").replace(/buffer \+= "";\n/g,"");d.debug&&("undefined"!=typeof console&&console.log?console.log(f):"function"===typeof print&&print(f));return f}function w(a,b){var c=f(a,b),k=new Function("view,partials,stack,lookup,escapeHTML,renderSection,render",c);return function(c,f){f=f||{};var h=[c];try{return k(c,f,h,g,m,d,z)}catch(B){throw q(B.error,
a,B.line,b.file);}}}function y(a,b){b=b||{};return!1!==b.cache?(A[a]||(A[a]=w(a,b)),A[a]):w(a,b)}function z(a,b,c){return y(a)(b,c)}a.name="mustache.js";a.version="0.5.0-dev";a.tags=["{{","}}"];a.parse=f;a.compile=y;a.render=z;a.clearCache=function(){A={}};a.to_html=function(a,b,c,d){a=z(a,b,c);if("function"===typeof d)d(a);else return a};var x=Object.prototype.toString,t=Array.isArray,I=Array.prototype.forEach,P=String.prototype.trim;var r=t?t:function(a){return"[object Array]"===x.call(a)};var h=
I?function(a,b,c){return I.call(a,b,c)}:function(a,b,c){for(var d=0,f=a.length;d<f;++d)b.call(c,a[d],d,a)};var O=/^\s*$/;if(P)var c=function(a){return null==a?"":P.call(a)};else{if(O.test("\u00a0")){var b=/^\s+/;var v=/\s+$/}else b=/^[\s\xA0]+/,v=/[\s\xA0]+$/;c=function(a){return null==a?"":String(a).replace(b,"").replace(v,"")}}var C={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},A={}})(Mustache);
(function(a,m,q){function g(){if(m.Ready)for(var e=0;e<Ready.length;e++)w(Ready[e]);m.Ready={push:w}}function d(e,a){var b=n,k="undefined"==typeof n[e],c="undefined"==typeof l[e];e&&(b=k&&c?a:k?l[e]:n[e]);return b}function f(e){e=parseInt(e,10);var a=d("videoSources");if(a)for(var b=a.length,k,l=0;l<b;l++)if(k=a[l],k.id==e)return k.file}function w(e){e.call(m);L||(clearTimeout(K),K=setTimeout(function(){L=!0;q.close()},1E3))}function y(e,a){"function"==typeof a&&(e=a);try{throw Error("AdMessage template id is missing");
}catch(aa){if("function"==typeof e)e(aa);else throw aa;}}function z(e,a,b,c){var v=m._Adform&&_Adform.Events;if(v&&v.sendEvent){if(e in B)a=B[e];else if(isNaN(e=parseInt(e,10))||1>e||20<e&&200>e||250<e)throw Error("Custom event id="+e+" must be between 1-20 for engaging and 200-250 for non-engaging events");if(!a)throw Error("Event name is missing");var n=[""];if(b)for(var d in b){var g=d.slice(0,2),u=parseInt(d.slice(2),10);"bv"==g&&0<u&&256>u&&n.push(d+"="+encodeURIComponent(b[d]))}c&&n.push(c);
v.sendEvent(l.xId,e,k.assetId,a,n.join("&"),"Standard HTML");return!0}return!1}function x(a,b){r[a]||(r[a]=Mustache.compile(t(a).text));if(b){if(O.length!=v){for(var e=0;e<O.length;e++)"text/mustache"==O[e].type&&x(O[e].id);v=O.length}return r[a](b,r)}return r[a]}function t(a){return q.getElementById(a)}(function(){var a=m.open;"attributionSrc"in new m.Image&&(m.open=function(e,b,k){return a.call(m,e,b,k?k+",attributionsrc":"attributionsrc")})})();for(var I=a.RMB.lib,P=I.isArray,r={},h,O=q.getElementsByTagName("script"),
c=0,b;c<O.length;c++)if(b=(O[c].src||"").match(/(^.*)rmb\/Adform\.DHTML\.js/)){h=b[1]+"components/";break}var v=0,C=a.RMB.EventEmitter;b=a.RMB.DOMEvents;var A=m._AdformContent||{},k=A.data||{},l=A.options||{},n=k.flashvars,u=a.tagData;if(!n&&(n={},u)){c=u.customVariables;u=u.clickUrls;if(c)for(var M in c)n[M]=c[M];for(var W in u)n[W]=u[W]}var T=new C;a.on=function(){T.on.apply(T,arguments)};a.off=function(){T.off.apply(T,arguments)};a.emit=function(){T.emit.apply(T,arguments)};var B={151:"Previous Product Button Press",
150:"Next Product Button Press",143:"Banner Collapse",22:"Other Expands",21:"First Expand",168:"Auto Expands",161:"Hide Expanding Banner Button Press",23:"Close Button Press",25:"Video Play Start",26:"Played 25% Of Video",27:"Played 50% Of Video",28:"Played 75% Of Video",29:"Video Playback Complete",30:"Play Button Press",31:"Pause Button Press",32:"Stop Button Press",33:"Sound On Button Press",34:"Sound Off Button Press",35:"Full Screen On Button Press",36:"Full Screen Off Button Press",38:"Rewind Button Press",
"":""};a.EVENT_FIRST_EXPAND=[21,B[21]];a.EVENT_OTHER_EXPAND=[22,B[22]];a.EVENT_CLOSE=[23,B[23]];a.EVENT_COLLAPSE=[143,B[143]];for(c=1;251>c;c++)if(21>c||199<c)a["EVENT_CUSTOM_"+c]=[c,"Custom Event "+c];a.sendRequest=function(a){(new Image).src=a};a.sendEvent=function(a){var e,b,k=arguments;if(e=P(a)&&1<a.length){for(e=1;e<k.length&&256>e;e++)(b=b||{})["bv"+e]=k[e];e=z(a[0],a[1],b)}return e};a.getClickURL=function(a,b){return d(a||k.defaultClickTAG||"clickTAG",b)||null};a.getLocation=function(){var a=
m._Adform&&_Adform.locationInfo||null;a&&(a.lng=a.Longitude,a.lat=a.Latitude);return a};a.getAsset=function(a){return f(a)||null};a.getVar=function(a){return a&&void 0!==n[a]?n[a]:null};var J=m.dhtml={PREVIOUS_BUTTON_PRESS:151,NEXT_BUTTON_PRESS:150,CLOSE_BUTTON_PRESS:23,COLLAPSE_EVENT:143,EXPAND_EVENT:22,FIRST_EXPAND_EVENT:21,AUTO_EXPAND_EVENT:168,SUPER_CLOSE_EVENT:161,VIDEO_PROG_0:25,VIDEO_PROG_25:26,VIDEO_PROG_50:27,VIDEO_PROG_75:28,VIDEO_PROG_100:29,PLAY_BUTTON_PRESS:30,PAUSE_BUTTON_PRESS:31,STOP_BUTTON_PRESS:32,
SOUND_ON_BUTTON_PRESS:33,SOUND_OFF_BUTTON_PRESS:34,FULL_SCREEN_ON_BUTTON_PRESS:35,FULL_SCREEN_OFF_BUTTON_PRESS:36,REWIND_BUTTON_PRESS:38,byId:t,hasClass:I.hasClass,addClass:I.addClass,removeClass:I.removeClass,mustache:x,sendEvent:function(a,b,k){J.sharedEvents.emit(a+"",{id:a,name:b||B[a],vars:k});if(!(D&&D.callDHTMLEvent&&D.callDHTMLEvent.call(D,a)))return a in B&&(k=null),z(a,b,k)},$sendEvent:z,appendEvents:function(a){for(var e in a)B.hasOwnProperty(e)||(B[e]=a[e]);return B},getVar:d,getAsset:f,
width:k.width,height:k.height,collapsedWidth:l.colWidth,collapsedHeight:l.colHeight,external:A.external||{},inscreen:new C,sharedEvents:A.sharedEvents||new C,scriptsBase:l.scriptsBase||h+"../",getState:function(){return A.state?A.state():"visible"},on:b.on,off:b.off,connect:function(a){var e=m._Adform&&_Adform.ADFUtilInstance;a=a||n.bn||"x";e=e?e.getRotSeed():{};e.localConnections||(e.localConnections={});var b=e.localConnections[a];if(!b){b=new C;var k=[];b.expect=function(a,e){if(k.length>=a)e();
else b.once("expect:"+a,e);return b};b.join=function(a){k.push(a);b.emit("member",a);b.emit("expect:"+k.length);return b};b.members=k;e.localConnections[a]=b}return b}};try{var D=parent.parent.getVPAIDAd&&parent.parent.getVPAIDAd()}catch(e){}if(D&&D.callDHTMLEvent){J.vpaid=D;var U=J.external.close;J.external.close=function(){D.callDHTMLEvent.call(D,23);return U.apply(this,arguments)}}J.sharedEvents.on("newListener",function(a){"pageLoadComplete"==a&&setTimeout(function(){J.external.initPoliteMode()},
0)});J.adMessage=n.tid?a.AdMessage.build({limit:100,pageSize:5}):{setProperties:y,getProperties:y,getPage:y,getItems:y,getDefault:y};var R=J.inscreen;J.external.initInScreen&&(J.sharedEvents.on("updateInScreen",function(a){for(var b in a)R.emit(b,R[b]=a[b]);R.emit("change")}),a.on("newListener",function(b){"visibilityData"===b&&(a.off("newListener",arguments.callee),R.on("change",function(){a.emit("visibilityData",{isVisible:R.visible,visibleArea:R.percent})}))}),R.once("newListener",function(){setTimeout(function(){J.external.initInScreen()},
0)}));components=m.preloadQueue||m.components||[];var G=components.length;for(c=0;c<components.length;c++)q.write('<script src="'+(h+"Adform."+components[c]+".js?bv="+(n.bv||Math.random()))+'">\x3c/script>');try{var H=q.defaultView.frameElement;H&&I.addEvent(H,"touchstart",function(){})}catch(e){}J.registerComponent=function(a){for(var b=0;b<components.length;b++)components[b]==a&&G--;G||g()};G||g();var K,L})(Adform=window.Adform,window,document);