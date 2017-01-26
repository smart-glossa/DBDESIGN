$(document).ready(function(){
	$("#sign").click(function(){
		 var Name=$("#Name").val();
		 var userName=$("#userName").val();
		 var pass=$("#pass").val();
		 if(Name == "")
			{
			$("#Name").focus().css("outline-color","#e53935");
			return;
			}
		if(userName == "")
			{
			$("#userName").focus().css("outline-color","#e53935");
			return;
			}
		if(pass == ""){
			$("#pass").focus().css("outline-color","#e53935");
			return;
		}
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