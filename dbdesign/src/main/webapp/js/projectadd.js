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
       
        var url ="http://localhost:8080/dbdesign/Project?operation=addProject&proName="+proName+"&description="+des+"&userName="+uName;
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
       
    });
       
