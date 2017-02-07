
$('#btempo').on('click',function(e){
	var tarefa = $('#cidade').val();
	var requisicaotempo=$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q="+tarefa+"&APPID=06364573f45c170fb7ab1d9b8f7abaf8&units=metric",
		method: "GET"
	});

	requisicaotempo.done(function(dados){
		console.log(dados);

		$("#cid").attr('disabled', 'true').val(dados.name);
		$("#temp").attr('disabled', 'true').val(dados.main.temp);
		$("#Tempmax").attr('disabled', 'true').val(dados.main.temp_max);
		$("#Tempmin").attr('disabled', 'true').val(dados.main.temp_min);
		$("#nuvens").attr('disabled', 'true').val(dados.weather[0].description);
		$("#pais").attr('disabled', 'true').val(dados.sys.country);
		
		
	});
	
	requisicaotempo.fail(function(){
		alert('Não existe cidade com esse nome');
	});
});
