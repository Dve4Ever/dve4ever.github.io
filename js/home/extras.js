$(document).ready(function(){var e;e=function(e){var o=/\+/g;function r(e){return a.raw?e:encodeURIComponent(e)}function i(e){return r(a.json?JSON.stringify(e):String(e))}function n(r,i){var n=a.raw?r:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(o," ")),a.json?JSON.parse(e):e}catch(e){}}(r);return e.isFunction(i)?i(n):n}var a=e.cookie=function(o,t,s){if(void 0!==t&&!e.isFunction(t)){if("number"==typeof(s=e.extend({},a.defaults,s)).expires){var d=s.expires,c=s.expires=new Date;c.setTime(+c+864e5*d)}return document.cookie=[r(o),"=",i(t),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var h,f=o?void 0:{},k=document.cookie?document.cookie.split("; "):[],u=0,l=k.length;u<l;u++){var p=k[u].split("="),$=(h=p.shift(),a.raw?h:decodeURIComponent(h)),v=p.join("=");if(o&&o===$){f=n(v,t);break}o||void 0===(v=n(v))||(f[$]=v)}return f};a.defaults={},e.removeCookie=function(o,r){return void 0!==e.cookie(o)&&(e.cookie(o,"",e.extend({},r,{expires:-1})),!e.cookie(o))}},"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery),"yes"==$.cookie("dark")&&($("section").addClass("dark"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header"),$(".inner-switch").text("ON"),$("footer").addClass("dark-footer"),$("footer").addClass("dark-service-2"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header")),$(".inner-switch").on("click",function(){$("section").hasClass("dark")?($.cookie("dark","no",{expires:365}),$("section").removeClass("dark"),$("footer").removeClass("dark-service-2"),$("footer").removeClass("dark-footer"),$("h1,h2,h3,h4,h5,h6").removeClass("dark-header"),$(".inner-switch").text("OFF")):($.cookie("dark","yes",{expires:365}),$("section").addClass("dark"),$("footer").addClass("dark-footer"),$("h1,h2,h3,h4,h5,h6").addClass("dark-header"),$("footer").addClass("dark-service-2"),$(".inner-switch").text("ON"))})});

function getInputValue(){var e="https://dve4ever.github.io/search?q="+document.getElementById("myInput").value;window.open(e)}
