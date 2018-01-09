function updateQuote(){
	var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";	
	$.ajax({
		url: url,
		dataType: "json",
		headers: {
			'X-Mashape-Key':"gWyj47zjvgmshQ7uwtX2eDuR6WYnp1slPgqjsn3tyiVNre0riP",
	        'Content-Type': 'application/json'
	    },
	    type: "GET",
		crossDomain: true,
		success: function (json) {
			if(json.hasOwnProperty("quote")){				
				$("#twitter-toolbar a").attr(
					"href", 
					"https://twitter.com/intent/tweet?text=" + encodeURIComponent(json.quote + " " + json.author)
					);
				$("#cita p:first-child").html(json.quote);
				$("#autor").html(json.author);
			}
		}
	});
};
$(document).ready(function() {	
	updateQuote();
	$("#next-btn").on("click", function(){
		updateQuote();
	});
});
