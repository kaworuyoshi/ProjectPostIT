var main = function(){
	$('.form').submit(function(event){
		event.preventDefault();

		var input = $(event.target).find('input');
		var comment = input.val();
		if(comment !== ""){
			
			var $html = $('<li>').text(comment);
			console.log("Sent " +comment);

			$html.prependTo($('#comments')).show('slow');

			input.val("");
		}

	});
}

$(document).ready(main);