function my(){
 
    var Name = ("Please enter your name", "Name");
      var Size = ("Please enter your size ", "1-100");
      var type=("Please enter your type","int");
      var defal = ("Please enter your favourite color name", "red");
     
   var x=document.createElement("center")
  document.body.appendChild(x);
   x.setAttribute("id","cen");

  }
  function change(){
   var target = document.getElementById("target");
   var current = target.src;
   var url = prompt("change address to:", current);
   target.src= url;
}
