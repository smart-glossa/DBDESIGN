$(document).ready(function(){

$(document).on('click','#submit',function(){
	var form="";
	form += "";
	form += "<table>";
	form += "<tr>";
	form += "<td>name<\/td>";
	form += "<td><input type=\"text\" class=\"Name\"><\/input><\/td><\/tr>";
	form += "<tr>";
	form += "<td>type<\/td>";
	form += "<td><input type=\"text\" class=\"Type\"><\/input><\/td><\/tr><tr>";
	form += "<td>size<\/td>";
	form += "<td><input type=\"text\" class=\"Size\"><\/input><\/td><\/tr><tr>";
	form += "<td>default<\/td>";
	form += "<td><input type=\"text\" class=\"Dfult\"><\/input><\/td><\/tr>";
	form += "<\/table>";
	form+="<input type=\"checkbox\" class=\"key\" value=\"primary key\">primary key<\/input><br>";
	form+="<input type=\"checkbox\" class=\"key\" value=\"Allow nulls\">Allow nulls<\/input><br>";
	form+="<input type=\"checkbox\" class=\"key\" value=\"unique\">unique<\/input><br>";
	form+="<input type=\"checkbox\" class=\"key\" value=\"Auto Increment\">Auto increment<\/input><br>";
	form+="<input type=\"checkbox\" class=\"key\" value=\"foerign key\">foerign key<\/input><br>";
	form += "<input type=\"submit\" value=\"save\" onClick=\"my()\"><\/input><br>";
	form+="<p id=\"demo\"><\/p>";
	form += "";
	$('.add')[0].innerHTML=form;
	$('.add').toggle();
	
});
});