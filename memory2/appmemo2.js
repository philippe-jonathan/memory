$("#pique1").hide();
$("#pique2").hide();
$("#coeur1").hide();
$("#coeur2").hide();
var pair = 0;



$('img').on('click', function(){
	if( $(this).attr('src') == 'dos-bleu.png' )
	{
		$(this).attr('src', $(this).data('valeur') );
	}
	else
	{
		$(this).attr('src', 'dos-bleu.png' );
	}
});


/*
$("#dos1").click(function(){
	$("#dos1").hide();
	$("#pique1").show();
	 pair ++;
	console.log(pair);
});

$("#dos2").click(function(){
	$("#dos2").hide();
	$("#coeur1").show();
	pair ++;
	console.log(pair);
});

$("#dos3").click(function(){
	$("#dos3").hide();
	$("#coeur2").show();
	pair ++;
	console.log(pair);
});

$("#dos4").click(function(){
	$("#dos4").hide();
	$("#pique2").show();
	pair ++;
	console.log(pair);
});
*/
