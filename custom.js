// $("form").submit(function (e) {
//  $tarefa=$("#texto").val();
//    $("#principal").append("<p>"+$tarefa+"</p>");
//   $("#principal").append("<input type='checkbox' >");
//  e.preventDefault();
//});


$('#botao').on('click', function(e){
	  $tarefa=$("#texto").val();
      $("#principal").append('<label for="checkbox"> <input type="checkbox" class="yourCheckBox" />'+$tarefa+'</label>'+'<br>');
      e.preventDefault();
});

$('#apagar').on('click', function(e){
	
	var botoes = document.getElementsByClassName("yourCheckBox");
    $("#tarefa").remove("<p>"+$tarefa+"</p>");

});
