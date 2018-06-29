var pique1 = $("#pique1");
var pique2 = $("#pique2");
var coeur1 = $("#coeur1");
var coeur2 = $("#coeur2");



$("#pique1").hide();
$("#pique2").hide();
$("#coeur1").hide();
$("#coeur2").hide();
var pair = 0;



$(".dos").click(function(){
	$(this).hide();
	$(this).show('valeur')
	pair ++;

	if($(".cartep").is(':visible')){
		$(".cartep").hide();
		$(".cartec").hide();
		$(".dos").show();
	}
});

/*
$("#dos1").click(function(){
	$("#dos1").hide();
	pique1.show();
	pair ++;
});

$("#dos3").click(function(){
	$("#dos3").hide();
	coeur2.show();
	pair ++;
});

$("#dos4").click(function(){
	$("#dos4").hide();
	pique2.show();
	pair ++;
});

*/
// https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery

