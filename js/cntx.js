function startFocusOut() {
    $(document).on("click", function() {
        $("#cntnr").hide(), $(document).off("click")
    })
}
$(document).bind("contextmenu", function(e) {
    e.preventDefault(), console.log(e.pageX + "," + e.pageY), $("#cntnr").css("left", e.pageX), $("#cntnr").css("top", e.pageY), $("#cntnr").fadeIn(150, startFocusOut())
}), window.onload = function() {}, $(document).ready(function() {
    function e(e, n) {
        var t, o, c = (n = n || window).document;
        n.getSelection && c.createRange ? (t = n.getSelection(), (o = c.createRange()).selectNodeContents(e), t.removeAllRanges(), t.addRange(o)) : c.body.createTextRange && ((o = c.body.createTextRange()).moveToElementText(e), o.select())
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
		javascript:void(window.open('view-source:'+location.href))
    }
});
