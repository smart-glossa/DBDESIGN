function my(){
   /*var name=$('.Name').val(); 
   var type=$('.Type').val();  
   var size=$('.Size').val();  
   var defaults=$('.Dfult').val(); 
   var key=$('.key').val();
    
	 var tble="";
	 tble += "<table id=\"dfr\"><tr>";
	 tble += "<th id=\"th\">Name<\/th><th id=\"th\">Type<\/th><th  id=\"th\">size<\/th><th  id=\"th\">default<\/th><th  id=\"th\">key</th><\/tr>";
	 tble += "<tr><td id=\"dfr\"><input type=\"text\" class=\"Name\"  value=\""+name+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" class=\"Type\" value=\""+type+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" class=\"Size\" value=\""+size+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" class=\"Dfult\" value=\""+defaults+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" class=\"key\" value=\""+key+"\" readonly=\true\"><\/tr>";
	 tble += "<\/table>";*/
	var model="";
	model += " <table>";
	model += "	<tr><th>ProjectId<\/th>";
	model += "	<th>ProjectName<\/th>";
	model += "	<th>Description<\/th>";
	model += "	<th>UserName<\/th>";
	model += "	<\/tr>";
	model += "	<tr>";
	model += "		<td><input type=\"text\" name=\"\"  id=\"projectId\"><\/td>";
	model += "		<td><input type=\"text\" name=\"\"  id=\"projectName\" readonly=\"true\"><\/td>";
	model += "		<td><input type=\"text\" name=\"\"  id=\"des\" readonly=\"true\"><\/td>";
	model += "		<td><input type=\"text\" name=\"\"  id=\"userName\" readonly=\"true\"><\/td>";
	model += "	<\/tr>";
	model += "<\/table>";


	 $('#get')[0].innerHTML=model;
 }
 
