$(document).ready(function() {
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
       
        var url ="http://localhost:8080/dbdesign/Project?operation=addProject&proName="+proName+"&description="+des+"&userName="+uName;
        $("input[type=text]").val("");
        $.ajax({
                url: url,
                type: 'POST'
            }).done(function(result) {
                alert(result);
            })
            .fail(function(result) {
                alert(result);
            });

    });
     

        $(document).on('keyup', '#projectId', function() {
            var projectId = $("#projectId").val();
            if (projectId != "") {
                var url ="http://localhost:8080/dbdesign/Project?operation=getone&projectId="+projectId; 
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
        $(document).on('click', '#all', function() {
            var url = "http://localhost:8080/dbdesign/Project?operation=getall";
            $.ajax({
                    url: url,
                    type: 'POST'   
                })
                .done(function(result) {
                    var result = JSON.parse(result);
                    var table = "<table border=2px>";
                    table += "<tr><th>ProjectId</th><th>ProjectName</th><th>Description</th><th>UserName</th></tr>";

                    for (var i = 0; i < result.length; i++) {

                        table += "<tr>";
                        table += "<td>" + result[i].productId + "</td>";
                        table += "<td>" + result[i].proName + "</td>";
                        table += "<td>" + result[i]. des+ "</td>";
                        table += "<td>" + result[i].userName + "</td>";
                        table += "</tr>";
                    }
                    table += "</table>";
                    $("#lists")[0].innerHTML = table;
                });


    });
       });
