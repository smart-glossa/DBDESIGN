function my(){
   var name=$('.Name').val(); 
   var type=$('.Type').val();  
   var size=$('.Size').val();  
   var defaults=$('.Dfult').val(); 
   var key=$('.key').val();
    
	 var tble="";
	 tble += "<table id=\"dfr\"><tr>";
	 tble += "<th id=\"th\">Name<\/th><th id=\"th\">Type<\/th><th  id=\"th\">size<\/th><th  id=\"th\">defaukts<\/th><th  id=\"th\">key</th><\/tr>";
	 tble += "<tr><td id=\"dfr\"><input type=\"text\" id=\"Name\"  class=\"input\" value=\""+name+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" id=\"Type\" value=\""+type+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" id=\"Size\" value=\""+size+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" id=\"Dfult\" value=\""+defaults+"\" readonly=\true\"><\/td><td id=\"dfr\"><input type=\"text\" class=\"key\" value=\""+key+"\" readonly=\true\"><\/tr>";
	 tble += "<\/table>";

	 $('#get')[0].innerHTML=tble;
 }