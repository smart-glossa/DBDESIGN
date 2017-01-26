function myform(){
var smart="";
smart += "<div class=\"registertable\">";
smart += "		<label><input type=\"text\" id=\"Name\" placeholder=\"Name..*\" \/><\/label><br>";
smart += "		<br> <label><input type=\"text\" id=\"userName\"";
smart += "			placeholder=\"userName..*\" \/><\/label> <br>";
smart += "			<label><input type=\"password\"";
smart += "			id=\"pass\" placeholder=\" Password..*\" \/><\/label><br>";
smart += "		<br>";
smart += "		<button id=\"sign\">SIGNUP NOW!<\/button>";
smart += "	<\/div>";
smart += "";

$(".red")[0].innerHTML=smart;
}