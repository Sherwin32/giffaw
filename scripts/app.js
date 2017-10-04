$(document).on("ready", function(){

	console.log("I'm in!");
	
	$('.form-inline').on('submit', function(event){



		event.preventDefault();
		$('.gif-gallery').text("");

		// $('.gif-gallery').append(userInput);

		$.ajax({
			method: "GET",

			url: "http://api.giphy.com/v1/gifs/search?",

			data: $("form").serialize(),

			success: onSuccess,

			error: onError
		});

		function onSuccess(json) {
			// $("div").append("<h1>"+json.title+"</h1>");
			console.log($("form").serialize());
			console.log(json);
			for(var i=0; i<json.data.length; i++){
				img_url = json.data[i].images.fixed_height_small.url;
				$('.gif-gallery').append('<img src="'+img_url+'">');
			}
			// $('.gif-gallery').append()
		}

		function onError(xhr, status, errorThrown) {
			console.log("Error: " + errorThrown);
			console.log("Status: " + status);
			console.dir(xhr);
			alert("Sorry, there was a problem!");
			
		}
	});

});
