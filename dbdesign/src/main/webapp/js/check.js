function my(){
   var name=$('#Name').val(); 
   var type=$('#Type').val();  
   var size=$('#Size').val();  
   var defaults=$('#Dfult').val(); 
   var key=$('#key').val();
    
	 var tble="";
	 tble += "<table id=\"dfr\"><tr>";
	 tble += "<th id=\"th\">Name<\/th><th id=\"th\">Type<\/th><th  id=\"th\">size<\/th><th  id=\"th\">default<\/th><th  id=\"th\">key</th><\/tr>";
	 tble += "<tr><td id=\"dfr\"><input type=\"text\" id=\"Name\"  class=\"input\" value=\""+name+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" id=\"Type\" value=\""+type+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" id=\"Size\" value=\""+size+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" id=\"Dfult\" value=\""+defaults+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" class=\"key\" value=\""+key+"\" readonly=\true\"><\/tr>";
	 tble += "<\/table>";

	 $('#get')[0].innerHTML=tble;
 }
 
function edit_row(no)
{
	document.getElementById("edit_button"+no).style.display="none";
	document.getElementById("save_button"+no).style.display="block";
	
	var name=document.getElementById("Name"+no);
	var type=document.getElementById("Type"+no);
	var size=document.getElementById("Size"+no);
	
	var name_data=name.innerHTML;
	var type_data=type.innerHTML;
	var size_data=size.innerHTML;
	
	name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
	country.innerHTML="<input type='text' id='country_text"+no+"' value='"+type_data+"'>";
	age.innerHTML="<input type='text' id='age_text"+no+"' value='"+size_data+"'>";
	
}
