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
       
$(document).on('click','.sds',function() {
    projectId = this.id;
    proName = $(this).text();
    var url = "/dbdesign/Project?operation=gets&projectId=" + projectId;
    $.ajax(url).done(function(result) {
        var rs = JSON.parse(result);
        if ($(".second").length > 0) {
            $(".second").remove();
        }
        var div2 = document.createElement("div");
        document.body.appendChild(div2);
        div2.setAttribute("class", "second");
        var table = document.createElement("table");
        table.setAttribute("id","Table");
        var th = document.createElement("th");
        table.appendChild(th);
        th.setAttribute("class", "row header blue");
        $(th).append("ProjectName  " +  proName )
        
        div2.appendChild(table);
        for (var i = 0; i < rs.length; i++) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            tr.setAttribute("id", "table");
            tr.setAttribute("class", "row");
            $(tr).append(rs[i]);
        }
        
    }).fail(function(result) {})
}); 