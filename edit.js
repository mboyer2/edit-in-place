
$(document).ready(function(){



	$('#text').on('click', function(event){
		var innerText = $('#text').text() 

		$('#text').toggleClass('hidden')
		$('#input').toggleClass('hidden')
		console.log(event)
		//Upon clicking Text: Text goes hidden, input appears
	})

	$('#input').on('blur', function(event){
		var inputText = $('#input').val()
		// save the input value
		$('#input').toggleClass('hidden')
		$('#text').toggleClass('hidden')

		//Upon clicking input, alows input of text. 

		console.log(inputText)

		$('#text').text(inputText)
		//change text of id = text to input text
	})




	//repeat same process as above for About section

	$('p').on('click', function(event){
		var innerText = $('p').text() 

		$('p').toggleClass('hidden')
		$('#input2').toggleClass('hidden')
		console.log(event)
		//Upon clicking Text: Text goes hidden, input appears
	})

	$('#input2').on('blur', function(event){
		var inputText = $('#input2').val()
		// save the input value
		$('#input2').toggleClass('hidden')
		$('p').toggleClass('hidden')

		//Upon clicking input, alows input of text. 

		console.log(inputText)

		$('p').text(inputText)
		//change text of id = text to input text
	})

})

		

	





