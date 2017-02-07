
var numero = 0;

$('#adc').on('click', function(e){
	numero = numero + 1;
	var tarefa = $('#tarefa').val();
	$('ul').append('<li id="tarefa'+numero+'">'+numero + '-' +tarefa+ ' <input type="checkbox" id="yourCheckBox'+numero+'" /> </li>');
	e.preventDefault();
});


$('#apagar').on('click', function(e){
	var numero = $('#excluir').val();
	$("#tarefa"+numero).remove();
	e.preventDefault();
});

$('#mudar').on('click', function(e){
	
	var valor = $('#novovalor').val();
	var num = $('#editar').val();
	$("#tarefa"+num).text(num+'-'+valor);
	e.preventDefault();
});

// $("form").submit(function (e) {
//  $tarefa=$("#texto").val();
//    $("#principal").append("<p>"+$tarefa+"</p>");
//   $("#principal").append("<input type='checkbox' >");
//  e.preventDefault();
//});


//$('#botao').on('click', function(e){
//	  $tarefa=$("#texto").val();
 //     $("#principal").append('<label for="checkbox"> <input type="checkbox" class="yourCheckBox" />'+$tarefa+'</label>'+'<br>');
  //    e.preventDefault();
//});

//$('#apagar').on('click', function(e){
//	$tarefa=$("#texto").val();
//	var botoes = document.getElementsByClassName("yourCheckBox");
  //  $("#tarefa").remove("<p>"+$tarefa+"</p>");

//});
