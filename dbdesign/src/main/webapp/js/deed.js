$(document).ready(function(){

$(document).on('click','#submit',function(){
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
	form+="<input type=\"checkbox\">primary key<\/input><br>";
	form+="<input type=\"checkbox\">Allow nulls<\/input><br>";
	form+="<input type=\"checkbox\">unique<\/input><br>";
	form+="<input type=\"checkbox\">Auto increment<\/input><br>";
	form+="<input type=\"checkbox\">foerign key<\/input><br>";
	form += "<input type=\"submit\" value=\"save\"><\/input><br>";
	form += "";
	$('.add')[0].innerHTML=form;
	$('.add').toggle();
	
});
});