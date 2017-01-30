function getAll()
{
	var url = "http://localhost:8080/dbdesign/Project?operation=getall"
	$.ajax({
		url : url,
		type : 'POST'
	}).done(function(result) {
		var result = JSON.parse(result);
		var div = "<div >"
		for (var i = 0; i < result.length; i++) {
			div += "<div class='fulldetail'>"
    		div += "<p id='na'>" + result[i].projectId + "</p>"
			div += "<p>" + result[i].proName + "</p>"
			div += "<p>" + result[i].des + "</p>"
			div += "<p>" + result[i].userName + "</p>"
			div += "</div>"

		}
		div += "</div>";
		$(".details")[0].innerHTML = div;
	});
}