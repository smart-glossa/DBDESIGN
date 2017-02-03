function getAll()
{
	var url = "/dbdesign/Project?operation=getAll";
	$.ajax({
		url : url,
		type : 'POST'
	}).done(function(result) {
		var result = JSON.parse(result);
		var div = '<div id="fulldetail">';
		for (var i = 0; i < result.length; i++) {
			  div += "<p>" + result[i].projectId + "</p>";
		div += "<p>" + result[i].proName + "</p>";		
		}
		 div='</div>';
		$(".detail")[0].innerHTML = div;  
	});
} 