$(document).ready(function(){
	if(getCookie("userName") != undefined){
		window.location.href = "index.html";
	}
	$(document).on('click','#add',function(){
		var Name = $('#Name').val();
		var userName = $('#userName').val();
		var pass = $('#pass').val();
	
		if(name===""){
			$('#name').focus().css('outline-color','red');
			return false;
		}
		if(userName===""){
			$('#userName').focus().css('outline-color','red');
			return false;
		}
		if(pass===""){
			$('#pass').focus().css('outline-color','red');
			return false;
		}
   var url="http://localhost:8080/dbdesign/User?operation=userAdd&name="+Name+"&userName="+userName+"&pass="+pass;
		$.ajax({
			url:url,
			type:'POST'
		})
		.done(function(result){
			var res = JSON.parse(result);
			if (res.status == 1){
				alert("Added Sussfully");
			}
			$('#Name').val("");
			$('#userName').val("");
			$('#pass').val("");
			
		})
		.fail(function(result){
			alert(result);
		})
	}).on('click','#login',function(){
		var userName = $('#userName').val();
		var pass = $('#passw').val();
		if(userName===""){
			$('#user').focus().css('outline-color','red');
			return false;
		}
		if(pass===""){
			$('#passw').focus().css('outline-color','red');
			return false;
		}
		var url ="http://localhost:8080/dbdesign/User?operation=logIn&userName="+userName+"&pass="+pass; 
		$.ajax({
			url:url,
			type:'POST'
		})
		.done(function(result){
			var res = JSON.parse(result);
			if(res.status == 1){
				document.cookie = "userName="+ uname;
				window.location.href = "index.html";
			}
		})
		.fail(function(result){
			alert(result);
		})
	})
	

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}
});
