$(document).ready(function(){

$(document).on('click','#submit',function(){
	
	var tnbl="";
	tnbl += "<table>";
	tnbl += "	<tr>";
	tnbl += "		<td>ProjectName<\/td><td><input type=\"text\" id=\"proName\"><\/td>";
	tnbl += "	<\/tr>";
	tnbl += "	<tr>";
	tnbl += "		<td>Description<\/td><td><input type=\"text\" id=\"des\"><\/td>";
	tnbl += "	<\/tr>";
	tnbl += "<\/table>";
	tnbl += "<button id=\"project\" onClick=\"my()\">submit<\/button>";
	tnbl += "<div class =\"pro\"></div>"

	$('.add')[0].innerHTML=tnbl;
	
	
});
$(document).on('click','#done',function(){
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
	form+="<input type=\"checkbox\" class=\"key1\" value=\"Allow nulls\">Allow nulls<\/input><br>";
	form+="<input type=\"checkbox\" class=\"key2\" value=\"unique\">unique<\/input><br>";
	form+="<input type=\"checkbox\" class=\"key3\" value=\"Auto Increment\">Auto increment<\/input><br>";
	form+="<input type=\"checkbox\" class=\"key4\" value=\"foerign key\">foerign key<\/input><br>";
	form += "<input type=\"submit\" id=\"save\"  value=\"save\" ><\/input><br>";
	form+="<p id=\"demo\"><\/p>";
	form += "";
	$('#get')[0].innerHTML=form;
});
});