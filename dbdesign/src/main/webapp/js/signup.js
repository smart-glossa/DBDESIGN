$(document).ready(function(){
	$("#sign").click(function(){
		 var Name=$("#Name").val();
		 var userName=$("#userName").val();
		 var pass=$("#pass").val();
		  var url="http://localhost:8080/dbdesign/User?operation=userAdd&name="+Name+"&userName="+userName+"&pass="+pass;
		  
		  $.ajax({
				url: url,
				type:'POST'})
		  	.done(function(result){
		  		alert(result);
	})
	.fail(function(result){
		alert(result);
		});
	});
});