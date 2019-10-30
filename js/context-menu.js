$(document).bind("contextmenu",function(e){
  e.preventDefault();
  console.log(e.pageX + "," + e.pageY);
  $("#cntnr").css("left",e.pageX);
  $("#cntnr").css("top",e.pageY);
 // $("#cntnr").hide(100);        
  $("#cntnr").fadeIn(200,startFocusOut());      
});


function startFocusOut(){
  $(document).on("click",function(){
  $("#cntnr").hide();        
  $(document).off("click");
  });
}

document.getElementById("cut").onclick = function () { document.execCommand("cut")};

document.getElementById("copy").onclick = function () { document.execCommand("copy")};

document.getElementById("paste").onclick = function () { document.execCommand("paste")};

