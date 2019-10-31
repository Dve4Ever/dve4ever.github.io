var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).bind("contextmenu", function (e) {
	e.preventDefault();
	console.log(e.pageX + "," + e.pageY);
	$("#cntnr").css("left", e.pageX);
	$("#cntnr").css("top", e.pageY);
	// $("#cntnr").hide(100);        
	$("#cntnr").fadeIn(200, startFocusOut());
});

function startFocusOut() {
	$(document).on("click", function () {
		$("#cntnr").hide();
		$(document).off("click");
	});
}

function selectElementText(el, win) {
	win = win || window;
	var doc = win.document,
		sel, range;
	if (win.getSelection && doc.createRange) {
		sel = win.getSelection();
		range = doc.createRange();
		range.selectNodeContents(el);
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (doc.body.createTextRange) {
		range = doc.body.createTextRange();
		range.moveToElementText(el);
		range.select();
	}
}


document.getElementById("cut").onclick = function () {
	document.execCommand("cut");
};

document.getElementById("copy").onclick = function () {
	document.execCommand("copy");
};

document.getElementById("paste").onclick = function () {
	document.execCommand("paste");
};

document.getElementById("select").onclick = function () {
	selectElementText(document.getElementById("page"));
	selectElementText(elementInIframe, iframe.contentWindow);
};
