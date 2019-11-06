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

window.onload = function () { };

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

function showSource(){;
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    //now we need to escape the html special chars, javascript has escape
    //but this does not do what we want
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    //now we add <pre> tags to preserve whitespace
    source = "<pre>"+source+"</pre>";
    //now open the window and set the source as the content
    sourceWindow = window.open('','Source of page');
    sourceWindow.document.write(source);
    sourceWindow.document.close(); //close the document for writing, not the window
    //give source window focus
    if(window.focus) sourceWindow.focus();
}  

document.getElementById("back").onclick = function() {
  window.history.back();
};

document.getElementById("foward").onclick = function() {
  window.history.forward();
};

document.getElementById("reload").onclick = function() {
  location.reload();
};

document.getElementById("cut").onclick = function() {
  document.execCommand("cut");
};

document.getElementById("copy").onclick = function() {
  document.execCommand("copy");
};

document.getElementById("paste").onclick = function() {
  document.execCommand('paste')
};

document.getElementById("select").onclick = function() {
  selectElementText(document.getElementById("page"));
  selectElementText(elementInIframe, iframe.contentWindow);
};

document.getElementById("source").onclick = function() {
  showSource();
};
