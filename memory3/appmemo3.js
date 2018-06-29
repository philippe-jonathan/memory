var pique1 = $("#pique1");
var pique2 = $("#pique2");
var coeur1 = $("#coeur1");
var coeur2 = $("#coeur2");



$("#pique1").hide();
$("#pique2").hide();
$("#coeur1").hide();
$("#coeur2").hide();
var pair = 0;

$("#dos1").click(function(){
	$(this).hide();
	pique1.show();
	pair ++;
	if(pair>4){
		$(this).show();
		pique1.hide();
	}
	console.log(pair);
});

$("#dos2").click(function(){
	$("#dos2").hide();
	coeur1.show();
	pair ++;
	 if(pair>4){
	 	$(this).show();
		coeur1.hide();
	 }
	console.log(pair);
});

$("#dos3").click(function(){
	$("#dos3").hide();
	coeur2.show();
	pair ++;
	 if(pair>4){
	 	$(this).show();
		coeur2.hide();
	 }
	console.log(pair);
});

$("#dos4").click(function(){
	$("#dos4").hide();
	pique2.show();
	pair ++;
	 if(pair>4){
	 	$(this).show();
		pique2.hide();
	 }
	console.log(pair);
});


// https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery

