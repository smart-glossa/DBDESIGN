function myform(){
	var form="";
	form += "";
	form += "<table>";
	form += "<tr>";
	form += "<td>name<\/td>";
	form += "<td><input type=\"text\"><\/input><\/td><\/tr>";
	form += "<tr>";
	form += "<td>type<\/td>";
	form += "<td><input type=\"text\"><\/input><\/td><\/tr><tr>";
	form += "<td>size<\/td>";
	form += "<td><input type=\"text\"><\/input><\/td><\/tr><tr>";
	form += "<td>default<\/td>";
	form += "<td><input type=\"text\"><\/input><\/td><\/tr>";
	form += "<\/table>";
	form += "";
	$('.add')[0].innerHTML=form;
}

function mark(){
	var value="";
	value += "";
	value += "";
	value += "<button id=\"submit\" onclick=\"myform()\"><\/button>";
	
	$('.dgr')[0].innerHTML = value;
}
