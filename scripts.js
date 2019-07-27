function play01() {
	var vsrc = "w0xTCJMa9dE"
	document.getElementById("v1").src = 'https://www.youtube.com/embed/' + vsrc + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white';
	var parent = document.getElementById("vid01");
	var child = document.getElementById("pv1");
	parent.removeChild(child);
	$('#st1').addClass('faded');
	$('#st1').css('pointer-events', 'none');
}

function play02() {
	var vsrc = "XJRh9hCRIXw"
	document.getElementById("v2").src = 'https://www.youtube.com/embed/' + vsrc + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white';
	var parent = document.getElementById("vid02");
	var child = document.getElementById("pv2");
	parent.removeChild(child);
	$('#st2').addClass('faded');
	$('#st2').css('pointer-events','none;');
}

function play03() {
	var vsrc = "MTbf2KrUjPc"
	document.getElementById("v3").src = 'https://www.youtube.com/embed/' + vsrc + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white';
	var parent = document.getElementById("vid03");
	var child = document.getElementById("pv3");
	parent.removeChild(child);
	$('#st3').addClass('faded');
	$('#st3').css('pointer-events','none;');
}

function play04() {
	var vsrc = "2z1hFujpqXs"
	document.getElementById("v4").src = 'https://www.youtube.com/embed/' + vsrc + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white';
	var parent = document.getElementById("vid04");
	var child = document.getElementById("pv4");
	parent.removeChild(child);
	$('#st4').addClass('faded');
	$('#st4').css('pointer-events','none;');
}

function play05() {
	var vsrc = "LBEZi__2sTA"
	document.getElementById("v5").src = 'https://www.youtube.com/embed/' + vsrc + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white';
	var parent = document.getElementById("vid05");
	var child = document.getElementById("pv5");
	parent.removeChild(child);
	$('#st5').addClass('faded');
	$('#st5').css('pointer-events','none;');
}

function play06() {
	var vsrc = "mfFD2JVJclI"
	document.getElementById("v6").src = 'https://www.youtube.com/embed/' + vsrc + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white';
	var parent = document.getElementById("vid06");
	var child = document.getElementById("pv6");
	parent.removeChild(child);
	$('#st6').addClass('faded');
	$('#st6').css('pointer-events','none;');
}

function play07() {
	var vsrc = "-a-Zwnzz_Lk"
	document.getElementById("v7").src = 'https://www.youtube.com/embed/' + vsrc + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white';
	var parent = document.getElementById("vid07");
	var child = document.getElementById("pv7");
	parent.removeChild(child);
	$('#st7').addClass('faded');
	$('#st2').css('pointer-events','none;');
}

function play08() {
	var vsrc = "9iGnF8Aa5eE"
	document.getElementById("v8").src = 'https://www.youtube.com/embed/' + vsrc + '?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white';
	var parent = document.getElementById("vid08");
	var child = document.getElementById("pv8");
	parent.removeChild(child);
	$('#st8').addClass('faded');
	$('#st8').css('pointer-events','none;');
}

function mapHere() {
	document.getElementById("m1").src = 'https://infoamazonia.org/pt/embed/?map_only=1&map_id=16648&width=1180&height=604&lat=-8.667918002363121&lon=-54.31640625&zoom=5';
	var parent = document.getElementById("lm1");
	var child = document.getElementById("loadMap");
	parent.removeChild(child);
	$('#mapText').addClass('faded');
	$('#lm1').addClass('faded');
	$('#lm1').css('pointer-events','none;');
}


$(document).ready(function() {
	$('#fullpage').fullpage({
		'verticalCentered': true,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['Início', 'A Agrofloresta', 'As Florestas e a Água', 'Galeria', 'Condições para a Restauração', 'Oportunidades para Recuperar', 'Da Agrofloresta para o Consumidor', 'Os Agricultores Familiares', 'Os Feirantes e Consumidores', 'A Ajuda dos Técnicos', 'O Papel dos Governantes', 'Restauração em Agricultura Familiar', 'Uma Semente para o Futuro ', 'Créditos'],

		'afterLoad': function(anchorLink, index){
			if(index == 1){
				$('#section1 .wrap .colr').removeClass('faded').addClass('surge1');
				$('#section1 .wrap .coll').removeClass('faded').addClass('surge3');
			} else if(index == 2){
				$('#section2 .wrap .colr').removeClass('faded').addClass('surge1');
				$('#section2 .wrap .coll').removeClass('faded').addClass('surge3');
			} else if(index == 3){
				$('#section3 .wrap').removeClass('faded').addClass('surge1');
			} else if(index == 4){
				$('#section4 .wrap .coll').removeClass('faded').addClass('surge1');
				$('#section4 .wrap .colr').removeClass('faded').addClass('surge3');
			} else if(index == 5){
				$('#section5 .wrap').removeClass('faded').addClass('surge1');
				$('#section5 .wrap .colr').removeClass('faded').addClass('surge2');
				$('#section5 .wrap .coll').removeClass('faded').addClass('surge3');
			} else if(index == 6){
				$('#section6 .midwrap .colr').removeClass('faded').addClass('surge1');
			} else if(index == 7){
				$('#section7 .wrap .colr').removeClass('faded').addClass('surge1');
				$('#section7 .wrap .coll').removeClass('faded').addClass('surge3');
			} else if(index == 8){
				$('#section8 .wrap .coll').removeClass('faded').addClass('surge1');
				$('#section8 .wrap .colr').removeClass('faded').addClass('surge3');
			} else if(index == 9){
				$('#section9 .wrap .colr').removeClass('faded').addClass('surge1');
				$('#section9 .wrap .coll').removeClass('faded').addClass('surge3');
			} else if(index == 10){
				$('#section10 .wrap .coll').removeClass('faded').addClass('surge1');
				$('#section10 .wrap .colr').removeClass('faded').addClass('surge3');
			} else if(index == 11){
				$('#section11 .midwrap').removeClass('faded').addClass('surge1');
				$('#section11 .midwrap .coll').removeClass('faded').addClass('surge1');
				$('#section11 .midwrap .colr').removeClass('faded').addClass('surge1');
				$('#l1').removeClass('faded').addClass('surge2');
				$('#l2').removeClass('faded').addClass('surge3');
				$('#l3').removeClass('faded').addClass('surge4');
				$('#l4').removeClass('faded').addClass('surge5');
				$('#l5').removeClass('faded').addClass('surge6');
				$('#l6').removeClass('faded').addClass('surge7');
				$('#l7').removeClass('faded').addClass('surge8');
				$('#l8').removeClass('faded').addClass('surge9');
				$('#l9').removeClass('faded').addClass('surge10');
			} else if(index == 12){
				$('#section12 .wrap .coll').removeClass('faded').addClass('surge1');
				$('#section12 .wrap .colr').removeClass('faded').addClass('surge3');
			} else if(index == 13){
				$('#section13 .wrap').removeClass('faded').addClass('surge1');
			}
		}/*,

		'afterRender': function(){
			$('video').get(0).play();
				$('#bgVideo1').removeClass('faded').addClass('surge2');
				$('#section0 .midwrap .coll h1').removeClass('faded').addClass('surge4');
				$('#section0 .midwrap .coll h2').removeClass('faded').addClass('surge5');
				$('#section0 .midwrap .colr').removeClass('faded').addClass('surge5');
		}*/
	});
});
