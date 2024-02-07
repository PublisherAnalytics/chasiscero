(function(window){'use strict';var OAM=function(){this.config={};this.requested=[];var that=this;var load=function(){setTimeout(function(){that.config=window._onmaq;that.init();},1);};that.addEventListener('load',load);that.addEventListener('OAM.load',load);};OAM.prototype.addEventListener=function(name,callback){if(typeof window.addEventListener!=='undefined'){window.addEventListener(name,callback,false);}else{window.attachEvent(name,callback);}};OAM.prototype.close=function(element,e){var expires=new Date();expires.setMinutes(expires.getMinutes()+this.config.cookieLifetime);if(e){e.stopPropagation();e.preventDefault();}
var slot=element.getElementsByClassName('oat');var id=parseInt(slot[0].getAttribute('data-id'));if(!this.config.debug){document.cookie='__onm_interstitial-'+id+'='+expires+
';expires='+expires+';path=/';}
document.body.classList.remove('interstitial-open');if(element.parentNode){element.parentNode.removeChild(element);}};OAM.prototype.createInterstitial=function(ad){var div=document.createElement('div');var that=this;div.innerHTML='<div class="interstitial interstitial-visible">'+
'<div class="interstitial-wrapper">'+
'<div class="interstitial-header">'+
'<span class="interstitial-header-title">'+this.config.strings.entering+'</span>'+
'<a class="interstitial-close-button" href="#" title="'+this.config.strings.skip+'">'+
'<span>'+this.config.strings.skip+'</span>'+
'</a>'+
'</div>'+
'<div class="interstitial-content">'+
'<div class="ad-slot oat oat-visible oat-'+ad.orientation+'" data-id="'+ad.id+'">'+
'</div>'+
'</div>'+
'</div>'+
'</div>';div.getElementsByClassName('interstitial-close-button')[0].onclick=function(e){that.close(div,e);};var oat=div.getElementsByClassName('oat')[0];var wrapper=div.getElementsByClassName('interstitial-wrapper')[0];var iframe=this.createNormal(ad);var size=this.getSize(ad);if(ad.timeout>0){iframe.onload=function(){window.setTimeout(function(){that.close(div);},ad.timeout*1000);};}
wrapper.style.width=size.width+'px';oat.style.height=size.height+(size.height==='auto'?'':'px');oat.appendChild(iframe);return div;};OAM.prototype.createNormal=function(ad,position,index){var item=document.createElement('iframe');item.className+='oat-content';item.style.width='100%';item.style.height='100%';item.src=this.normalize(this.config.url+'/'+ad.id);item.src+='category='+this.config.category+
'&module='+this.config.extension+
'&advertisementGroup='+this.config.advertisementGroup+
'&contentId='+this.config.contentId;item.onload=function(){if(typeof index!=='undefined'){var event=document.createEvent('Event');var content=item.contentWindow.document.body.getElementsByClassName('content')[0];event.args={height:content.scrollHeight,width:content.scrollWidth,};event.initEvent('oat-index-'+index+'-loaded',true,true);window.dispatchEvent(event);}
if(position){var event=document.createEvent('Event');event.initEvent('oat-'+position+'-loaded',true,true);window.dispatchEvent(event);}};return item;};OAM.prototype.displayInterstitial=function(ads){var that=this;var interstitials=ads.filter(function(e){return e.type.indexOf('interstitial')!==-1&&that.isVisible(e);});if(interstitials.length===0){return;}
var ad=this.getAdvertisement(interstitials);var expires=new Date();var now=new Date();if(this.getCookie('__onm_interstitial-'+ad.id)){expires=new Date(this.getCookie('__onm_interstitial-'+ad.id));}
if(expires<=now){document.body.appendChild(this.createInterstitial(ad));document.body.classList.add('interstitial-open');}};OAM.prototype.displayNormal=function(ads){var that=this;var slots=document.querySelectorAll('.oat');for(var i=0;i<slots.length;i++){var slot=slots[i];var type=parseInt(slot.getAttribute('data-position'));if(!type){var type=parseInt(slot.getAttribute('data-type'));}
if(slot.childNodes.length!==0){continue;}
var id=parseInt(slot.getAttribute('data-id'));var mode=slot.getAttribute('data-mode');var available=ads.filter(function(e){return that.isVisible(e,type,id);});if(available.length===0){if(!that.config.debug){slot.remove();}
continue;}
var ad=that.getAdvertisement(available,mode);if(!ad){return;}
var size=that.getSize(ad);var div=document.createElement('div');div.className+='oat-container';slot.className+=' oat-visible oat-'+type;slot.id='oat-index-'+i;slot.setAttribute('data-mark',ad.mark);div.style.width=size.width+'px';div.style.height=size.height+(size.height==='auto'?'':'px');if(ad.orientation){slot.className+=' oat-'+ad.orientation;}
if(that.config.device==='desktop'&&slot.getAttribute('data-width')){div.style.width=parseInt(slot.getAttribute('data-width'))+'px';}
var item=that.createNormal(ad,type,i);var resize=function(e){var s=window.document.getElementById(e.type.replace('-loaded',''));if(!s){return;}
var el=s.getElementsByClassName('oat-container')[0];if(e.args.height>0&&e.args.width>0){el.style.height=e.args.height+'px';el.style.width=e.args.width+'px';}};var remove=function(e){if(e.args.height===0){var s=window.document.getElementById(e.type.replace('-loaded',''));if(!s){return;}
s.remove();}};that.addEventListener('oat-index-'+i+'-loaded',resize);if(ad.format==='DFP'){that.addEventListener('oat-index-'+i+'-loaded',remove);}
div.appendChild(item);slot.appendChild(div);}};OAM.prototype.getAdvertisement=function(advertisements,mode){var that=this;if(mode==='consume'){advertisements=advertisements.filter(function(e){return that.requested.indexOf(e)===-1;});}
var advertisement=advertisements[Math.floor(Math.random()*advertisements.length)];if(mode==='consume'&&advertisement){that.requested.push(advertisement);}
return advertisement;};OAM.prototype.getAdvertisements=function(){var that=this;var req=this.xhr();var url=this.normalize(this.config.url)+
'places='+this.config.slots.join()+
'&category='+this.config.category;req.open('GET',url,true);req.overrideMimeType('application/json');req.onreadystatechange=function(){if(req.readyState!==4||req.status!==200){return;}
var ads=JSON.parse(req.response);that.displayNormal(ads);that.displayInterstitial(ads);};req.send();};OAM.prototype.getCookie=function(name){var cookies=document.cookie.split(';');var pattern=new RegExp('^'+name+'=.*');cookies=cookies.filter(function(e){return pattern.test(e.trim());});if(cookies.length===0){return null;}
return cookies[0].trim().replace(name+'=','');};OAM.prototype.getSize=function(ad){var device=this.config.device;var sizes=ad.sizes.filter(function(e){return e.device===device;});if(sizes.length>0){return sizes[0];}
return{height:'auto',width:'100%'};};OAM.prototype.getUser=function(){var user=this.getCookie('__onm_user');if(!user){return null;}
return JSON.parse(decodeURIComponent(user));};OAM.prototype.hideInterstitials=function(){var that=this;var now=new Date();var interstitials=document.getElementsByClassName('interstitial');for(var i=0;i<interstitials.length;i++){var expires=now;var slot=interstitials[i].getElementsByClassName('oat');var id=parseInt(slot[0].getAttribute('data-id'));if(this.getCookie('__onm_interstitial-'+id)){expires=new Date(this.getCookie('__onm_interstitial-'+id));}
if(expires>now){interstitials[i].remove();}}
interstitials=document.getElementsByClassName('interstitial');if(interstitials.length>0){for(var i=0;i<interstitials.length;i++){var interstitial=interstitials[i];var timeout=interstitial.getElementsByClassName('oat')[0].getAttribute('data-timeout');interstitial.getElementsByClassName('interstitial-close-button')[0].onclick=function(e){that.close(interstitial,e);};interstitial.className=interstitial.className+
' interstitial-visible';window.setTimeout(function(){that.close(interstitial);},timeout*1000);}
document.body.classList.add('interstitial-open');}};OAM.prototype.init=function(){this.user=this.getUser();if(this.user&&!this.user.advertisements){return;}
if(this.config.slots.length>0){this.getAdvertisements();}
this.hideInterstitials();};OAM.prototype.isVisible=function(ad,type,id){if(id&&id!==parseInt(ad.id)){return false;}
if(type&&ad.position.indexOf(type)===-1){return false;}
if(ad.starttime){ad.starttime=ad.starttime.replace(/\s+/g,'T').concat('Z');}
if(ad.endtime){ad.endtime=ad.endtime.replace(/\s+/g,'T').concat('Z');}
var groups=[];var now=new Date();var endtime=new Date(ad.endtime);var starttime=new Date(ad.starttime);if(now<starttime||ad.endtime&&now>=endtime){return false;}
if(this.user){groups=this.user.user_groups.filter(function(e){return ad.user_groups.indexOf(parseInt(e))!==-1;});}
return ad.devices[this.config.device]===1&&(ad.user_groups.length===0||groups.length>0);};OAM.prototype.normalize=function(url){url+='?';if(parseInt(location.search.split('webview=').splice(1).join('').split('&')[0])===1){url+='webview=1&';}
return url;};OAM.prototype.xhr=function(){try{return new XMLHttpRequest();}catch(e){try{return new ActiveXObject('Msxml2.XMLHTTP');}catch(f){try{return new ActiveXObject('Microsoft.XMLHTTP');}catch(g){throw new Error('Unable to create the request');}}}};window.am=new OAM();})(window);