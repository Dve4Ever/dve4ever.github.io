/* DARK MODE */
$(document).ready(function(){var e;e=function(e){var o=/\+/g;function r(e){return n.raw?e:encodeURIComponent(e)}function a(e){return r(n.json?JSON.stringify(e):String(e))}function i(r,a){var i=n.raw?r:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(o," ")),n.json?JSON.parse(e):e}catch(e){}}(r);return e.isFunction(a)?a(i):i}var n=e.cookie=function(o,t,d){if(void 0!==t&&!e.isFunction(t)){if("number"==typeof(d=e.extend({},n.defaults,d)).expires){var s=d.expires,c=d.expires=new Date;c.setTime(+c+864e5*s)}return document.cookie=[r(o),"=",a(t),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}for(var h,f=o?void 0:{},k=document.cookie?document.cookie.split("; "):[],u=0,l=k.length;u<l;u++){var p=k[u].split("="),$=(h=p.shift(),n.raw?h:decodeURIComponent(h)),C=p.join("=");if(o&&o===$){f=i(C,t);break}o||void 0===(C=i(C))||(f[$]=C)}return f};n.defaults={},e.removeCookie=function(o,r){return void 0!==e.cookie(o)&&(e.cookie(o,"",e.extend({},r,{expires:-1})),!e.cookie(o))}},"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery),"yes"==$.cookie("dark")&&($("section").addClass("dark"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header"),$(".inner-switch").text("DARK: ON"),$("footer").addClass("dark-footer"),$("footer").addClass("dark-details"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header")),$(".inner-switch").on("click",function(){$("section").hasClass("dark")?($.cookie("dark","no",{expires:365}),$("section").removeClass("dark"),$("footer").removeClass("dark-details"),$("footer").removeClass("dark-footer"),$("h1,h2,h3,h4,h5,h6").removeClass("dark-header"),$(".inner-switch").text("DARK: OFF")):($.cookie("dark","yes",{expires:365}),$("section").addClass("dark"),$("footer").addClass("dark-footer"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header"),$("footer").addClass("dark-details"),$(".inner-switch").text("DARK: ON"))})});

/* CHAT TOGGLE */
function createCookie(e,t,o){if(o){var a=new Date;a.setTime(a.getTime()+24*o*60*60*1e3);var n="; expires="+a.toGMTString()}else n="";document.cookie=e+"="+t+n+"; path=/"}function readCookie(e){for(var t=e+"=",o=document.cookie.split(";"),a=0;a<o.length;a++){for(var n=o[a];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}var chatOn=readCookie("chatOn");chatOn&&(chat.style.display="block",$(".chat-toggle").text("CHAT: ON"));var chatOff=readCookie("chatOff");function toggleChat(){var e=document.getElementById("chat");"none"===e.style.display?(eraseCookie("chatOff"),e.style.display="block",$(".chat-toggle").text("CHAT: ON"),createCookie("chatOn")):(eraseCookie("chatOn"),e.style.display="none",$(".chat-toggle").text("CHAT: OFF"),createCookie("chatOff"))}chatOff&&(chat.style.display="none",$(".chat-toggle").text("CHAT: OFF"),eraseCookie("chatOn"));

/* SEARCH */
function getInputValue(){var e="https://dve4ever.github.io/search?q="+document.getElementById("myInput").value;window.open(e)}

/*
MOBILE REDIRECT (TEMP DISABLED BECAUSE OF DELETED PAGE)
if (screen.width <= 699) {
document.location = "old.html";
}
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
   location.replace("old.html");
} 
*/
