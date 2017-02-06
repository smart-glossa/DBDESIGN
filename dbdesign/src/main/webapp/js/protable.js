$(document).ready(function() {
	getAll();
    $(document).on('click', '#save', function() {
        var tablename = $('#tableName').val();
    	var projectid = $('#projectId').val();   
    	  if (tablename== "") {
              $('#tableName').css("border-color", "red");
              return;
          }
          if (projectid== "") {
              $('#projectId').css("border-color", "red");
              return;
          }
        var url ="http://localhost:8080/dbdesign/Protable?operation=addTable&tableName="+ tablename +"&projectId="+ projectid;
        $.ajax({
            url: url,
            type: 'POST'
        }).done(function(result) {
        	getAll();
            alert("added successfully");
        })
        .fail(function(result) {
            alert(result);
        });
    });
});
$(document).on("click","#imge",function()
{
	var url = "/dbdesign/Protable?operation=getAll";
	$.ajax({
		url: url,
		type : 'POST'
		}).done(function(result) {
		var res=JSON.parse(result);
		var div = "<div class='tabledetail'>"
		for (var i = 0; i < res.length; i++) {
    		//div += "<p>" + res[i].projectId + "</p>"
			div += "<p class='sd'>" + res[i].tableName + "</p>"

		}
		div += "</div>";
		$("#getAlltab")[0].innerHTML = div;
	});
});


    
    
       