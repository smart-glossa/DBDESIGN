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
function check(){
	var story="";
	story += "<div id=\"boxA\" draggable=\"true\"";
	story += "            ondragstart=\"return dragStart(ev)\">";
	story += "            <p>Drag Me<\/p>";
	story += "         <\/div>";
	story += "         ";
	story += "         <div id=\"boxB\" ondragenter=\"return dragEnter(ev)\" ";
	story += "            ondrop=\"return dragDrop(ev)\" ";
	story += "            ondragover=\"return dragOver(ev)\">Dustbin";
	story += "         <\/div>";
	story += "         ";
	story += "      <\/center>";
	 $('#around')[0].innerHTML=story;
}
function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,0,0);
    
    return true;
 }
 
 function dragEnter(ev) {
    event.preventDefault();
    return true;
 }
 
 function dragOver(ev) {
    return false;
 }
 
 function dragDrop(ev) {
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    ev.stopPropagation();
    return false;
 }