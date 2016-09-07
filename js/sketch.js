$(document).ready(function() {

	var squares = 16;

	grid(squares);


	});

function grid(squares) {                                  // Skukuria kvadratus
	for(i = 1; i <= squares*squares; i++) {               
 		$('#container').append('<div class="sq"></div>');
 	}

 	$('.sq').hover(                                       
 		function() {
	 		$(this).css({"background-color":"red"});
 		
 		},

 		function() {
 			$(this).css({"background-color":"#cecece"});
 		}
 		);
}

function sqwidth(squaresw) {                              // Nustato kvadratu ploti i css
	$('.sq').css({"width":squaresw+"px"});
	$('.sq').css({"height":squaresw+"px"});
}

function asksq() {
	$('.sq').remove();
	var gr = prompt("How many squares?");
	var grw = (960 - 960%gr)/gr;                          // Nustato kvadratu ploti pagal duota kvadratu skaiciu, apvalina pagal konteinerio ploti
	grid(gr);
	sqwidth(grw); 
}
