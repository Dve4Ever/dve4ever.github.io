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
