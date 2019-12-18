//   ____            _            _     __  __                    _____  ___  
//  / ___|___  _ __ | |_ _____  _| |_  |  \/  | ___ _ __  _   _  |___ / / _ \ 
// | |   / _ \| '_ \| __/ _ \ \/ / __| | |\/| |/ _ \ '_ \| | | |   |_ \| | | |
// | |__| (_) | | | | ||  __/>  <| |_  | |  | |  __/ | | | |_| |  ___) | |_| |
//  \____\___/|_| |_|\__\___/_/\_\\__| |_|  |_|\___|_| |_|\__,_| |____(_)___/ 
  
// Version: 3.1.4
// Author: Devon Fuller
// Website: https://dve4ever.github.io
// Issues: https://github.com/dve4ever/dve4ever.github.io/issues 


$(document).ready(function(e){function n(e,n){var t,c,o=(n=n||window).document;n.getSelection&&o.createRange?(t=n.getSelection(),(c=o.createRange()).selectNodeContents(e),t.removeAllRanges(),t.addRange(c)):o.body.createTextRange&&((c=o.body.createTextRange()).moveToElementText(e),c.select())}$(document).bind("contextmenu",function(e){e.preventDefault(),console.log(e.pageX+","+e.pageY),$("#cntnr").css("left",e.pageX),$("#cntnr").css("top",e.pageY),$("#cntnr").fadeIn(150,void $(document).on("click",function(){$("#cntnr").hide(),$(document).off("click")}))}),document.getElementById("back").onclick=function(){window.history.back()},document.getElementById("foward").onclick=function(){window.history.forward()},document.getElementById("reload").onclick=function(){location.reload()},document.getElementById("cut").onclick=function(){document.execCommand("cut")},document.getElementById("copy").onclick=function(){document.execCommand("copy")},document.getElementById("paste").onclick=function(){document.execCommand("paste")},document.getElementById("select").onclick=function(){n(document.getElementById("page")),n(elementInIframe,iframe.contentWindow,html)},document.getElementById("source").onclick=function(){var e;e=document.getElementsByTagName("html"),alert(e[0].innerHTML)},document.getElementById("wm").onclick=function(){window.open("https://dve4ever.github.io")}});
