$(document).ready(function() {
	getAll();
    $(document).on('click', '#project', function() {
        var proName= $("#proName").val();
        var des = $("#des").val();
        if (proName == "") {
            $('#proName').css("border-color", "red");
            return;
        }
        if (des== "") {
            $('#des').css("border-color", "red");
            return;
        }
        var url ="/dbdesign/Project?operation=addProject&proName="+proName+"&description="+des;
        $("input[type=text]").val("");
        $.ajax({
                url: url,
                type: 'POST'
            }).done(function(result) {
            	getAll();
                alert(result);
            })
            .fail(function(result) {
                alert(result);
            });

    });
            $(document).on('keyup', '#projectId', function() {
            var projectId = $("#projectId").val();
            if (projectId != "") {
                var url ="/dbdesign/Project?operation=getOne&projectId="+projectId+""; 
                $.ajax({
                        url: url,
                        type: 'POST'
                    })
                    .done(function(result) {
                      //  result = JSON.parse(result);
                        $("#projectName").val(result.proName);
                        $("#description").val(result.des);
                    });
            }else{
          		$('#projectName').val("");
          		$('#des').val("");
          	}
        });
           /*  $(document).on("keyup","#user",function() {
           	  //var user = getCookie('userName');
           	 var user = $("#user").val();
       			if (user !== "") {
       				var url = "/dbdesign/Project?operation=getProject&uName="+user ;
       				$.ajax({
       					url : url,
       					type : 'POST'
       				})
       				.done(
       						function(result) {
       							var result = JSON.parse(result);
       							var div = "<div >"
       							for (var i = 0; i < result.length; i++) {
       								div += "<div class= ta>";
       						        div += "<p>" + result[i].projectId + "</p>"
       								div += "<p>" + result[i].proName + "</p>"
       								div += "<p>" + result[i].des + "</p>"
       								div += "</div>"
       							}
       							div += "</div>";
       							$(".user")[0].innerHTML = div;
       					})
      			}
       
    });*/
});
       
