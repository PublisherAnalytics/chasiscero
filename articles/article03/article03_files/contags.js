var AddoorCTag=AddoorCTag||(function(w,d,undefined){var version='13';var debug=false;if(w.location.search)debug=w.location.search.indexOf('addoor_debug')>-1;var prefix_render_js='//pubtags.addoor.net/contag/js/';var widget_class='addoor-widget';var prefix='Addoor';var initialized=false;var ready_handler=false;var ready_done=false;this.pvid=Math.random().toString(36).substring(2,6)+Math.random().toString(36).substring(2,6);this.s_ts=Math.floor(new Date().getTime()/1000);var log=function(o){if(typeof console!=undefined&&debug){console.log(prefix+'-'+version+':'+o)}};var bindready=function(handler,timeout){log("Binding Ready");var t_id=false;if(ready_handler){log("Handler already installed");return;}
ready_handler=true;function ready(){if(ready_done){log("Handler already done");return true;}
ready_done=true;if(t_id){clearTimeout(t_id);t_id=false;}
log('Ready to load tags');handler();}
if(document.readyState==="complete"){log('DOM already ready');ready();return true;}
if(timeout){log("Setting timeout to: "+timeout);t_id=setTimeout(function(){log("time is out");ready()},timeout);}
if(d.addEventListener){d.addEventListener("DOMContentLoaded",ready,false)}else if(d.attachEvent){try{var isFrame=w.frameElement!=null}catch(e){}
if(d.documentElement.doScroll&&!isFrame){function tryScroll(){try{d.documentElement.doScroll("left")
ready()}catch(e){setTimeout(tryScroll,10)}}
tryScroll()}
d.attachEvent("onreadystatechange",function(){if(d.readyState==="complete"){ready()}})}
if(w.addEventListener){w.addEventListener('load',ready,false);}
else if(w.attachEvent){w.attachEvent('onload',ready);}else{var fn=w.onload;w.onload=function(){fn&&fn();ready();}}};var display_id=function(div_id){log("display: "+div_id);var el;var scid='js-'+div_id;el=d.getElementById(div_id);if(!el){el=d.createElement('div');el.id=div_id;el.className="addoor-widget";d.body.appendChild(el);}
if(!d.getElementById(scid)){(function(w,d,t){var sc=d.createElement(t);sc.src=prefix_render_js+div_id;sc.id='js-'+div_id;sc.async=1;var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(sc,s);})(w,d,'script');}};var display=function(div){display_id(div.id);};var discover=function(){log("Discover divs");var divs=d.getElementsByClassName(widget_class);for(var i=0;i<divs.length;i++)
display(divs[i]);};var _={init:function(){if(w.location.search)debug=w.location.search.indexOf('addoor_debug')>-1;if(initialized)return;initialized=true;bindready(discover,2000);},setDebug:function(b){debug=b;},log:log,display:display,display_id:display_id,discover:discover,pvid:this.pvid,s_ts:this.s_ts};log('init '+version);_.init();return _;})(window,document);