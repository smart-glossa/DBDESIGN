$(document).ready(function() {
	getAllCol();
    $(document).on('click', '#addcol', function() {
        var tableId = $('#tableId').val();
        var columnname = $('#Name').val();
    	var datatype = $('#Type').val(); 
    	var defaults = $('#Default').val();
    	var isprimarykey = $('#key').val();
    	var allownull = $('#key1').val();
    	var isunique = $('#key2').val();
    	var autoincrement = $('#key3').val();
    	var foreignkey = $('#key4').val();
        var url ="/dbdesign/Procolumn?operation=addColumn&tableId="+ tableId +"&columnName="+ columnname +"&dataType="+ datatype +"&defaults="+ defaults +"&isPrimaryKey="+ isprimarykey +"&allowNull="+ allownull +"&isUnique="+ isunique +"&isAutoIncrement="+ autoincrement +"&isForeignKey="+ foreignkey;
        $.ajax({
            url: url,
            type: 'POST'
        }).done(function(result) {
        	getAllCol();
            alert("added successfully");
        })
        .fail(function(result) {
            alert(result);
        });
    })
});
function getAllCol() {
    var url = "/dbdesign/Procolumn?operation=getAll";
    $.ajax({
        url: url,
        type: 'POST'
    })
    .done(
        function(result) {
            var array = JSON.parse(result);
            var qry = "<div id='tablecolumns' >"

          
                for (var i = 0; i < array.length; i++) {
                    
                    qry += "<p id=" + array[i].tableId +"  class='cols'>" + array[i].columnName +"</p>";
                    
                }
            
            qry += "</div>"
            $(".getcol").append(qry);
        }).fail(function(result) {
            alert(result);
        });
    }

    $(document).on('click','.cols',function() {
        prodid = this.id;
        prodname = $(this).text();
        var url = "/stock/Product?operation=gets&prodid=" + prodid;
        $.ajax(url).done(function(result) {
            var rs = JSON.parse(result);
            if ($(".second").length > 0) {
                $(".second").remove();
            }
            var div2 = document.createElement("div");
            document.body.appendChild(div2);
            div2.setAttribute("class", "second");
            var table = document.createElement("table");
            table.setAttribute("id","parentTable");
            var th = document.createElement("th");
            table.appendChild(th);
            th.setAttribute("class", "row header blue");
            $(th).append("ProductName  " +  prodname +" In ParentProductName")
            
            div2.appendChild(table);
            for (var i = 0; i < rs.length; i++) {
                var tr = document.createElement("tr");
                table.appendChild(tr);
                tr.setAttribute("id", "tableName");
                tr.setAttribute("class", "row");
                $(tr).append(rs[i]);
            }
            
        }).fail(function(result) {})
    });