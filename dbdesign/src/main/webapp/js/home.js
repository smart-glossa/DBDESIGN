
function getAllDB() {
    var url = "/dbdesign/Project?operation=getAll";
    $.ajax({
        url: url,
        type: 'POST'
    })
    .done(
        function(result) {
            var re= JSON.parse(result);
            var qry = "<div class='fulldetail' >"

            	 if (result != "undefined") {
                for (var i = 0; i < re.length; i++) {
                    
                    qry += "<p id=" + re[i].projectId +"  class='sds'>" + re[i].proName + "</p>";
                    
                }
            	 }
            
            qry += "</div>"
            $(".details").append(qry);
        }).fail(function(result) {
            alert(result);
        });
    }
$(document).on('click','.sds',function() {
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
       