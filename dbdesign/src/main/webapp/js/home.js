/*function getAll()
{
	var url = "/dbdesign/Project?operation=getAll";
	$.ajax({
		url : url,
		type : 'POST'
	}).done(function(result) {
		var res=JSON.parse(result);
		var div = "<div class='fulldetail'>"
		for (var i = 0; i < res.length; i++) {
    		//div += "<p>" + res[i].projectId + "</p>"
			div += "<p class='sds'>" + res[i].proName + "</p>"

		}
		div += "</div>";
		$(".details")[0].innerHTML = div;
	});
}*/
function getAll() {
    var url = "/dbdesign/Project?operation=getAll";
    $.ajax({
        url: url,
        type: 'POST'
    })
    .done(
        function(result) {
            var array = JSON.parse(result);
            var qry = "<div class='fulldetail' >"

            if (result != "undefined") {
                for (var i = 0; i < array.length; i++) {
                    
                    qry += "<p id=" + array[i].projectId +"  class='sds'>" + array[i].proName + "</p>";
                    
                }
            }
            qry += "</div>"
            $(".details").append(qry);
        }).fail(function(result) {
            alert(result);
        });
    }
