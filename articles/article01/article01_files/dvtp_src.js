/*! v5345 ba69aa4d */
var __webpack_exports__={};(function(){function e(){try{return(new Date).getTime()}catch(e){return 0}}var t=e(),r={InjectTagError:{id:1,message:"InjectTagError"},LoadTagError:{id:2,message:"LoadTagError"},UnexpectedError:{id:128,message:"UnexpectedError"}},n=function(){},o=U(),i="undefined"==typeof window||"function"!=typeof window.addEventListener,a=function(){var e,t;if(!i){try{M(e=x("about:blank")),t=!N(e)}catch(e){t=!0}try{e&&("function"==typeof e.remove&&e.remove(),e=null)}catch(e){}}return t}(),c=-1,d=function(){try{if(i)return!1;if("object"==typeof omidVerificationProperties&&"web"===omidVerificationProperties.injectionSource)return!0;for(var e=!1,t=window;!1===e&&t;)e=null!==t.document.querySelector("script[src*=omweb-v1]"),t=t===window.top?null:t.parent,c++;return e}catch(e){return!1}}(),u=-1,f=function(){try{if(i||d)return!1;var e=!1,t=window;for(;!1===e&&t;)e=(r=t.omid3p)&&"function"==typeof r.registerSessionObserver&&"function"==typeof r.addEventListener,t=t===window.top?null:t.parent,u++;return e}catch(e){return!1}var r}(),p=!(i||!document.currentScript),s=function(){try{if(!i&&document)return tagElm=document.currentScript,tagElm.dvvisit=1,tagElm}catch(e){Q(e,19,!1)}}();function m(e){const t=new URL(e),{hostname:r}=t;return r}function v(e){return e&&["*cdn*.doubleverify.com","*cdn*.dv.tech","localhost","127.0.0.1"].some((t=>g(t,e)))}function l(e){return e.indexOf("/dvtp_src.js")>-1}function g(e,t){const r=e.replace(/[.+^${}()|[\]\\]/g,"\\$&");return new RegExp(`^${r.replace(/\*/g,".*").replace(/\?/g,".")}$`,"i").test(t)}var y=!i&&D(),w=5345,h=y?y.substr(0,y.indexOf("/dvtp_src.js")+1):"https://cdn.doubleverify.com/",_="https://tps.doubleverify.com/",E="visit.jpg",R={loadScript:function e(t,r,o){r=r||n,o=o||n,"object"==typeof omidNative&&("function"==typeof omidNative.downloadJavaScriptResource?omidNative.downloadJavaScriptResource(t,(function e(t){try{dvWindow=$($dv),eval(t),r()}catch(e){var n=void 0!==t&&t&&t.length||0;o("OnEvalError_ResLen_"+n)}}),(function(){o("OnFailedToDownload")})):o("DownloadJavaScriptResourceNotExist"))},fire:function(e,t,r){t=t||n,r=r||n,"object"==typeof omidNative&&"function"==typeof omidNative.sendUrl&&omidNative.sendUrl(e,t,r)}},S={loadScript:function(e,t,r,n){if(dvWindow=window,a||n||d)return P(e,t,r);A(e)},fire:function(e,t,r){var o=new Image(1,1);o.onerror=r||n,o.onload=t||n,o.src=e}},I=i?R:S,b,L;function j(){for(var e=1,t=Math.floor(10*Math.random())+1,r=0;r<t;++r)e*=Math.random();return e}function U(){return(e()*j()).toString(10)}function C(){return s&&s.src}function T(){return p&&document.currentScript.src}function D(){return T()||C()}function $(e){var t={location:{protocol:"https:"}},r={getElementById:n,createElement:n,body:{insertBefore:n},querySelectorAll:function(){return[]}};return t.$dv=e,t.parent=t,t.top=t,t.document=r,t}function O(e,t){var r=q(),n=N(e),o='<html><head><script type="text/javascript">('+function(){window.$dv=window.parent.$dv,window.$dv.isFrameSupported=!0,window.$frmId=Math.random().toString(36)+Math.random().toString(36)}.toString()+')();<\/script></head><body><script type="text/javascript">('+function e(t,r){var n;function o(){"function"==typeof window.clearTimeout&&RetrayLoader.timerRef&&window.clearTimeout(RetrayLoader.timerRef)}window.RetrayLoader||(window.RetrayLoader={MAX_NUM_OF_TRIES:3,TIMEOUT:400,numOfTries:1,timerRef:null}),t&&((n=document.createElement("script")).src=t,n.onload=function(){window.isDVMLoaded=!0,o()},n.onerror=function(){if(!window.isDVMLoaded){if(n&&"function"==typeof n.remove&&(n.remove(),n=null),"function"!=typeof window.setTimeout||RetrayLoader.MAX_NUM_OF_TRIES===RetrayLoader.numOfTries)return i=r,void(new Image(1,1).src=i);var i;++RetrayLoader.numOfTries,o(),RetrayLoader.timerRef=window.setTimeout((function(){e(t,r)}),RetrayLoader.TIMEOUT)}},document.body.appendChild(n))}.toString()+')("'+t+'", "'+r+'");<\/script></body></html>';if(n)n.open(),n.write(o),n.close();else{var i=encodeURIComponent(o.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,""));e.src='javascript: (function(){document.open();document.domain="'+window.document.domain+"\";document.write('"+i+"');})()"}}function x(e){var t=Math.floor(1e12*(Math.random()+"")),r=document.createElement("iframe");return r.name=r.id="iframe_"+t,r.setAttribute("data-dv-frm",t),r.width="0",r.height="0",r.style.display="none",r.src=e,r}function M(e){if(document.currentScript){var t=document.currentScript.parentNode;t&&"function"==typeof t.insertBefore?t.insertBefore(e,document.currentScript):document.currentScript.appendChild(e)}else if(document.body&&"function"==typeof document.body.insertBefore)document.body.firstChild?document.body.insertBefore(e,document.body.firstChild):document.body.appendChild(e);else{var r=document.getElementsByTagName("head")[0];r&&"function"==typeof document.body.insertBefore&&r.firstChild?r.insertBefore(e,r.firstChild):document.documentElement.appendChild(e)}}function N(e){return e&&(e.contentDocument||e.contentWindow&&e.contentWindow.document||frames&&frames[e.name]&&frames[e.name].document)}function P(e,t,r){var i=document.createElement("script");i.onload=t||n,i.onerror=r||n,i.src=e,i.type="application/javascript",M(i),k().tagData[o].scriptInjectionMode="injectedAsSibling"}function A(e){var t=x("about:blank");M(t),O(t,e),k().tagData[o].scriptInjectionMode="injectedInIframe"}var B=_+E+"?";function F(e,t,r){var n=e&&e.message||"error undefined",o=[B,"ctx=818052&cmp=1619415&dvtagver=6.1.src","&napr=",n,"&cerrt=",t,"&tgjsver=",w,"&jsver=",w,"&flvr=","0"];r&&o.push("&dvp_isLostImp=1");var c=0;return i&&(c|=4),a&&(c|=8),c>0&&o.push("&tstype="+c),y&&o.push("&ee_dp_dvtpurl="+encodeURIComponent(y)),o.join("")}function Q(e,t,r){var n=F(e,t,r),o=encodeURI(n);I&&I.fire(o)}try{L=function(e){var t,r,n,o={},i={};return(t=e)&&(r=function(e){var t=e.indexOf("#"),r=e.indexOf("?"),n="";n=t>-1&&r>-1?r<t?"?":"#":-1==r?"#":"?";var o="",i=e.trim().split(n);return 2===i.length&&(o=i[1]),o}(t),r&&(n={},r.split(/[&?#]+/).forEach((function(e){2===(e=e.trim().split("=")).length&&(n[e[0].trim()]=e[1].trim())})),i=function(e){var t={};function r(r){return function(n){e.hasOwnProperty(n)&&(t[r+n]=e[n])}}return["gdpr","gdpr_consent"].forEach(r("dvp_")),["ctx","cmp","sid","plc"].forEach(r("ee_dp_")),t}(o=n))),{toQueryString:function(e){var t,r="";for(t in e)e.hasOwnProperty(t)&&(r&&(r+="&"),r=[r,t,"=",e[t]].join(""));return r},getQueryStringParams:function(){return o},getQueryStringClientParams:function(){return i}}}(y),b=function(){var e,t="",r="__ERR_MSG_PLACEHOLDER__",n="__CLIENT_ERROR_TYPE_PLACEHOLDER__",o="__ERR_TRACE_PLACEHOLDER__",c={ctx:818052,cmp:1619415,dvtagver:"6.1.src",tgjsver:w,jsver:w,napr:r,cerrt:n,flvr:"0",ee_dp_dvtptrace:o},d=0;function u(e){return e&&e.trim().replace(/(\t|\n|\r|\|)/g,"")}function f(e,i,a){i=(i=i&&u(i))&&encodeURIComponent(i)||"",traceData=e.trace&&u(e.trace),traceData=traceData&&encodeURIComponent(traceData)||"";var c=t.replace(new RegExp(r,"g"),[e.message,i].join("__"));return c=(c=c.replace(new RegExp(n,"g"),e.id)).replace(new RegExp(o,"g"),traceData),a&&(c+="&dvp_isLostImp=1"),c}return i&&(d|=4),a&&(d|=8),d>0&&(c.tstype=d),y&&(c.ee_dp_dvtpurl=encodeURIComponent(y)),e=[L.toQueryString(c),L.toQueryString(L.getQueryStringClientParams())].join("&"),t=[B,e].join(""),{report:function(e,t,r){I.fire(f(e,t,r))},getReportUrl:f}}()}catch(e){Q(e,r.UnexpectedError,!1)}function V(e,t){for(var r=5;e[t]&&--r;)t=U();if(e[t])throw new Error("failed to create tagUniqueKey");return t}function W(r,n,o,a,p,m){r.tagData=r.tagData||{},n=V(r.tagData,n);var v={};v.dvtpScriptVersion=o,v.dvtpScriptUrl=a,v.restrictedAccess=p,v.$frmId=m,v.tagScriptElem=s,v.tagLoadedMS=t,v.isOmidForWeb=d,v.isOmid3p=f,v.omidWebHopCounter=c,v.omid3pHopCounter=u,v.tagExecTimeMs=e()-t,v.flvr="0",v.authorizedDomain=J(i,a),i||(v.tagReadyState=document.readyState),v.staticPrefix=h,v.serverPrefix=_,r.tagData[n]=v}function q(e){e=e||"NotFound";var t=r.LoadTagError;t.trace="TagUrl="+encodeURIComponent(y)+";DvmUrl="+encodeURIComponent(z)+";CurrentUrl="+encodeURIComponent(document.location.href);var n="failedToLoadDVM__"+e;return b?b.getReportUrl(t,n,!0):F(t.id,t.message+"__"+n,!0)}function H(e){var t=q(e);I.fire(t)}function k(){return $dv="undefined"!=typeof $dv&&$dv||{tags:{},tagsCounter:0},$dv}function J(e,t){return e||K(t)}function K(e){return v(m(e))}try{var X=i||l(y);if(!X)throw new Error("Invalid tag URL");$dv=k(),$frmId=U(),$dv.tagsCounter++,$dv.isDomlessEnvironment=i,$dv.sharedUniqueKey=$dv.sharedUniqueKey||U(),$dv.restrictedAccess=a,B=_+E+"?";var z=[h,"dv-measurements5345",".js"].join("");W($dv,o,w,y,a,$frmId),I.loadScript(z,n,H)}catch(e){var G=r.InjectTagError;b?b.report(G,e.message,!0):Q(e,G,!0)}})();