$(document).ready(function(){
	newSize();
	hov();
});

function clearmap() {
	$('#container .grid').remove();

}

function newSize() {
	clearmap();
	s= prompt("Please enter new size", "16");
	var k=(640/s)-2;
	var j=s*s;
	for(var i = 0; i < j; i++) {
		$("#container").append('<div class="grid"></div>');
		$(".grid").css("width", k);
		$(".grid").css("height", k);
	}
	$(".grid").css("background-color","#FFF");
	hov();
}

function hov() {
	var clr= "#91C7B1";
	$(".grid").hover(function() {
		$(this).css("background-color",clr);
	})
}
function newClr() {
	var clr= prompt("Please enter one of the following colors- Red, Yellow, Blue, Green or a Hex Code of your choice", "Coral Blue");
	$("#colour").css("background-color",clr);
	$(".grid").hover(function() {
		$(this).css("background-color",clr);
	});
}