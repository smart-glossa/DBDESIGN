$(document).ready(function() {
	//getAllTable();
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
        var url ="/dbdesign/Protable?operation=addTable&tableName="+ tablename +"&projectId="+ projectid;
        $.ajax({
            url: url,
            type: 'POST'
        }).done(function(result) {
        	//getAllTable();
            alert("added successfully");
        })
        .fail(function(result) {
            alert(result);
        });
    });
});
/*$(document).on("click","#imge",function()
{
	
	$.ajax({
		url: url,
		type : 'POST'
		}).done(function(result) {
		var res=JSON.parse(result);
		var div = "<div class='tabledetail'>"
		for (var i = 0; i < res.length; i++) {
    		//div += "<p>" + res[i].projectId + "</p>"
			div += "<p class='sd'>" + res[i].tableName + "</p>"

		}l 
		div += "</div>";
		$("#getAlltab")[0].innerHTML = div;
	});
});*/
$(document).on("click","#imge",function() {
	var url = "/dbdesign/Protable?operation=getAllTab";
    $.ajax({
        url: url,
        type: 'POST'
    })
    .done(
        function(result) {
            var array = JSON.parse(result);
            var qry = "<div class='tabledetail' >"
           
                for (var i = 0; i < array.length; i++) {
                    qry += "<p id=" + array[i].projectId +"  class='sd'>" + array[i].tableName + "</p>";
                }
            
            qry += "</div>"
            $("#getAlltab").append(qry);
        }).fail(function(result) {
            alert(result);
        });
    });
$(document).on('click','.sd',function() {
    projectId = this.id;
    tableName = $(this).text();
    var url = "/dbdesign/Protable?operation=getId&projectId="+projectId;
    $.ajax({
    	url:url,
    	type:'POST'
    })
    .done(function(result) {
        var res = JSON.parse(result);
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
        $(th).append(" productName " +  tableName +"InTableName")
        
        div2.appendChild(table);
        for (var i = 0; i < res.length; i++) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            tr.setAttribute("id", "table");
            tr.setAttribute("class", "row");
            $(tr).append(res[i]);
        }
        
    }).fail(function(result) {})
}); 

    
    
       