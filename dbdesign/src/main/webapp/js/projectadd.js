$(document).ready(function() {
	getAll();
    $(document).on('click', '#project', function() {
        var proName= $("#proName").val();
        var des = $("#des").val();
        var uName= $("#userName").val();
       
        if (proName == "") {
            $('#proName').css("border-color", "red");
            return;
        }
        if (des== "") {
            $('#des').css("border-color", "red");
            return;
        }
        if (uName == "") {
            $('#userName').css("border-color", "red");
            return;
        }
       
        var url ="/dbdesign/Project?operation=addProject&proName="+proName+"&description="+des+"&userName="+uName;
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
                var url ="/dbdesign/Project?operation=getone&projectId="+projectId; 
                $.ajax({
                        url: url,
                        type: 'POST'
                    })
                    .done(function(result) {
                        result = JSON.parse(result);
                        $("#projectName").val(result.proName);
                        $("#des").val(result.des);
                        $("#userName").val(result.userName);
                       
                    });
            }
        });
             $(document).on("keyup","#user",function() {
           	  var user = $("#user").val();
       			if (user !== "") {
       				var url = "/dbdesign/Project?operation=getProject&uName="+ user;
       				$.ajax({
       					url : url,
       					type : 'POST'
       				})
       				.done(
       						function(result) {
       							var result = JSON.parse(result);
       							var div = "<div >"
       							for (var i = 0; i < result.length; i++) {
       								div += "<div class='fulldetail'>"
       						        div += "<p p id='na'>" + result[i].projectId + "</p>"
       								div += "<p>" + result[i].proName + "</p>"
       								div += "<p>" + result[i].des + "</p>"
       								div += "</div>"
       							}
       							div += "</div>";
       							$(".user")[0].innerHTML = div;
       						})
       			}
       
    });
});
       
