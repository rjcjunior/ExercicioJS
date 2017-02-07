
$('#cep').blur(function(){
	var requisicaocep=$.ajax({
		url: " http://api.postmon.com.br/v1/cep/"+$(this).val(),
		method: "GET"

	});

	requisicaocep.done(function(dados){
		console.log(dados);
		$("#end").val(dados.logradouro);
		$("#bairro").val(dados.bairro);
		$("#cidade").val(dados.cidade);
		$("#estado").val(dados.estado);
		
		
	});
	
	requisicaocep.fail(function(){
		console.log('nao funciona');
	});
});
