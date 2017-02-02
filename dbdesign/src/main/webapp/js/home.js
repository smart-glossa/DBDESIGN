function getAll()
{
	var url = "/dbdesign/Project?operation=getAll"
	$.ajax({
		url : url,
		type : 'POST'
	}).done(function(result) {
		var result = JSON.parse(result);
		var div = '<div id="fulldetail">';
		for (var i = 0; i < result.length; i++) {
		  div += '<b id="projectId" class="db">'+ result[i].projectId +'</b>';
         div += '<b id="proName" class="db">'+result[i].proName+'</b>';		
		}
		 div = '</div>';
		$(".details")[0].innerHTML = div;  
	});
} 