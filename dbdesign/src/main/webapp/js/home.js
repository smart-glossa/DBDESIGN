function getAll()
{
	var url = "/dbdesign/Project?operation=getAll"
	$.ajax({
		url : url,
		type : 'POST'
	}).done(function(result) {
		var result = JSON.parse(result);
		var table = '<table border= 2px>'
		     table += '<tr><th>ProjectId</th><th>ProjectName</th><th>Description</th></tr>';
		for (var i = 0; i < result.length; i++) {
		  table += '<tr class="fulldetail">'
		  table += '<td>' + result[i].projectId + '</td>';
		  table += '<td>' + result[i].proName + '</td>';
		  table += '<td>' + result[i].des + '</td>';
		}
		table += "</table>";
		$(".details")[0].innerHTML = table;
	});
} 