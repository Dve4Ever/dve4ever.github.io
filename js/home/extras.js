/* DARK MODE */
$(document).ready(function(){var e;e=function(e){var o=/\+/g;function r(e){return i.raw?e:encodeURIComponent(e)}function a(e){return r(i.json?JSON.stringify(e):String(e))}function n(r,a){var n=i.raw?r:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(o," ")),i.json?JSON.parse(e):e}catch(e){}}(r);return e.isFunction(a)?a(n):n}var i=e.cookie=function(o,t,d){if(void 0!==t&&!e.isFunction(t)){if("number"==typeof(d=e.extend({},i.defaults,d)).expires){var s=d.expires,c=d.expires=new Date;c.setTime(+c+864e5*s)}return document.cookie=[r(o),"=",a(t),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}for(var h,f=o?void 0:{},k=document.cookie?document.cookie.split("; "):[],l=0,u=k.length;l<u;l++){var p=k[l].split("="),C=(h=p.shift(),i.raw?h:decodeURIComponent(h)),$=p.join("=");if(o&&o===C){f=n($,t);break}o||void 0===($=n($))||(f[C]=$)}return f};i.defaults={},e.removeCookie=function(o,r){return void 0!==e.cookie(o)&&(e.cookie(o,"",e.extend({},r,{expires:-1})),!e.cookie(o))}},"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery),"yes"==$.cookie("dark")&&(changeColorBox(),$("section").addClass("dark"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header"),$(".inner-switch").text("DARK: ON"),$("footer").addClass("dark-footer"),$("footer").addClass("dark-details"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header")),$(".inner-switch").on("click",function(){$("section").hasClass("dark")?($.cookie("dark","no",{expires:365}),revertColorBox(),$("section").removeClass("dark"),$("footer").removeClass("dark-details"),$("footer").removeClass("dark-footer"),$("h1,h2,h3,h4,h5,h6").removeClass("dark-header"),$(".inner-switch").text("DARK: OFF")):($.cookie("dark","yes",{expires:365}),changeColorBox(),$("section").addClass("dark"),$("footer").addClass("dark-footer"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header"),$("footer").addClass("dark-details"),$(".inner-switch").text("DARK: ON"))})});

/* CHAT TOGGLE */
function createCookie(e,t,o){if(o){var a=new Date;a.setTime(a.getTime()+24*o*60*60*1e3);var n="; expires="+a.toGMTString()}else n="";document.cookie=e+"="+t+n+"; path=/"}function readCookie(e){for(var t=e+"=",o=document.cookie.split(";"),a=0;a<o.length;a++){for(var n=o[a];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}var chatOn=readCookie("chatOn");chatOn&&(chat.style.display="block",$(".chat-toggle").text("CHAT: ON"));var chatOff=readCookie("chatOff");function toggleChat(){var e=document.getElementById("chat");"none"===e.style.display?(eraseCookie("chatOff"),e.style.display="block",$(".chat-toggle").text("CHAT: ON"),createCookie("chatOn")):(eraseCookie("chatOn"),e.style.display="none",$(".chat-toggle").text("CHAT: OFF"),createCookie("chatOff"))}chatOff&&(chat.style.display="none",$(".chat-toggle").text("CHAT: OFF"),eraseCookie("chatOn"));

/* SEARCH */
function getInputValue(){var e="https://dve4ever.github.io/search?q="+document.getElementById("myInput").value;window.open(e)}

/* MOBILE REDIRECT */
if (screen.width <= 699) {
document.location = "old.html";
}
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
   location.replace("old.html");
}

/* RANDOM STUFF */
AOS.init();var OneSignal=window.OneSignal||[];OneSignal.push(function(){OneSignal.init({appId:"56959eb3-2a61-41f0-9219-bc7ef3cbe6fb"})});var uid="252266",wid="521007";function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-148031841-1"),(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-5731588986654370",enable_page_level_ads:!0});window.addEventListener("load", function(){window.wpcc.init({"colors":{"popup":{"background":"#222222","text":"#ffffff","border":"#e6b3b3"},"button":{"background":"#e6b3b3","text":"#000000"}},"corners":"large","transparency":"20","fontsize":"small","content":{"href":"https://www.websitepolicies.com/policies/view/nrNTUgOr","message":"This website utilizes cookies to ensure you get the best experience on our website"},"margin":"large"})});
