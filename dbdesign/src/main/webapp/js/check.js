function my(){
 
   var name=$('#Name').val(); 
   var type=$('#Type').val();  
   var size=$('#Size').val();  
   var defaults=$('#Dfult').val();  
    
	 var tble="";
	 tble += "<table id=\"dfr\"><tr>";
	 tble += "<th>Name<\/th><th>Type<\/th><th>size<\/th><th>defaukts<\/th><\/tr>";
	 tble += "<tr><td><input type=\"text\" id=\"Name\" value=\""+name+"\"><\/td><td><input type=\"text\" id=\"Type\" value=\""+type+"\"><\/td><td><input type=\"text\" id=\"Size\" value=\""+size+"\"><\/td><td><input type=\"text\" id=\"Dfult\" value=\""+defaults+"\"><\/td><\/tr>";
	 tble += "<\/table>";

	 $('#get')[0].innerHTML=tble;
 }