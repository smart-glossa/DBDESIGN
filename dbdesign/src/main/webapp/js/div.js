$(document).ready(function(){
	$(document).on(
			"click",
			"#login",
			function(key) {
				var userName = $('#userName').val();
				var pass = $('#pass').val();

				if (userName == "") {
					alert("Please Enter username ");
					$("#userName").focus().css("outline-color", "#ff0000");
				}
				if (pass == "") {
					alert("Please Enter password");
					$("#pass").focus().css("outline-color", "ff0000");
					return;
				}
				var url ="http://localhost:8080/dbdesign/User?operation=logIn&userName="+userName+"&pass="+pass;
				$.ajax({
					url : url,
					type : 'POST'
				}).done(function(result) {
					var resp = JSON.parse(result);
					if (resp.status == "success") {
						
						document.cookie = "userName=" + user;
						 window.location.href = 'index.html';
						
						
						
					} else {
						if (resp.status == "error") {
							alert("Incorrect username /password");
						}
					}

				}).fail(function(result) {
					console.log(result);
				});

			});
	});
