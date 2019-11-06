$(document).bind("contextmenu", function(e) {
  e.preventDefault();
  console.log(e.pageX + "," + e.pageY);
  $("#cntnr").css("left", e.pageX);
  $("#cntnr").css("top", e.pageY);
  // $("#cntnr").hide(100);        
  $("#cntnr").fadeIn(150, startFocusOut());
});

function startFocusOut() {
  $(document).on("click", function() {
    $("#cntnr").hide();
    $(document).off("click");
  });
}

window.onload = function() {
    function e(e, t) {
        var n, c, o = (t = t || window).document;
        t.getSelection && o.createRange ? (n = t.getSelection(), (c = o.createRange()).selectNodeContents(e), n.removeAllRanges(), n.addRange(c)) : o.body.createTextRange && ((c = o.body.createTextRange()).moveToElementText(e), c.select())
    }
    document.getElementById("back").onclick = function() {
        window.history.back()
    }, document.getElementById("foward").onclick = function() {
        window.history.forward()
    }, document.getElementById("reload").onclick = function() {
        location.reload()
    }, document.getElementById("cut").onclick = function() {
        document.execCommand("cut")
    }, document.getElementById("copy").onclick = function() {
        document.execCommand("copy")
    }, document.getElementById("paste").onclick = function() {
        document.execCommand("paste")
    }, document.getElementById("select").onclick = function() {
        e(document.getElementById("page")), e(elementInIframe, iframe.contentWindow)
    }, document.getElementById("source").onclick = function() {
        var e;
        e = "<html>", e += document.getElementsByTagName("html")[0].innerHTML, e = "<pre>" + (e = (e += "</html>").replace(/</g, "&lt;").replace(/>/g, "&gt;")) + "</pre>", sourceWindow = window.open("", "Source of page"), sourceWindow.document.write(e), sourceWindow.document.close(), window.focus && sourceWindow.focus()
    }
};
