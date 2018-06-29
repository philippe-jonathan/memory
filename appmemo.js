var o = 0;

$(".a1").click(function(){
	var o = o++;
});

$(".a2").click(function(){
	var o = o++;
});

$(".b1").click(function(){
	var o = o++;
});

$(".b2").click(function(){
	var o = o++;
});

$(".aff").html(o);

console.log(o);