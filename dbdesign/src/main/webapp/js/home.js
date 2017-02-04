function getAll()
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
}
