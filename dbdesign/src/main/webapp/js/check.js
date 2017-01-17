function my(){
 
    var person = prompt("Please enter your name", "Name");
      var person2 = prompt("Please enter your size ", "1-100");
      var gender=prompt("Please enter your type","int");
      var person1 = prompt("Please enter your favourite color name", "black");
      var person3 = prompt("Please enter your default", "varchar");
      var person4 = prompt("Please enter your key", "primary key");
     
        var x=document.createElement("center")
   document.body.appendChild(x);
   x.setAttribute("id","cen")
var c=document.createElement("h1")
  var d=document.createTextNode(person+" details ");
  x.appendChild(c);
  c.appendChild(d);
c.setAttribute("id","pass");
document.getElementById("pass").style.fontSize = person2+"px";
document.getElementById("pass").style.color = person1;/*
document.getElementsByClassName("targetc").style.width="150px";
document.getElementsByClassName("targetc").style.height="180px";*/
var e=document.createElement("table")
x.appendChild(e);
var f=document.createElement("tr")
e.appendChild(f);
var g=document.createElement("td")
f.appendChild(g);
var h=document.createTextNode("Name:");
g.appendChild(h);
var i=document.createElement("td")
f.appendChild(i);
var j=document.createElement("input")
i.appendChild(j);
j.setAttribute("type","text");
j.setAttribute("id","name");
j.setAttribute("placeholder",person);
j.setAttribute("readonly","true");
j.setAttribute("value",person)
var k=document.createElement("tr")
e.appendChild(k);
var m=document.createElement("td")
k.appendChild(m);

var n=document.createTextNode("size:");
m.appendChild(n);
var o=document.createElement("td")
k.appendChild(o);
var p=document.createElement("input")
o.appendChild(p);
p.setAttribute("type","text");
p.setAttribute("id","age");
p.setAttribute("placeholder",person2);
p.setAttribute("readonly","true");
p.setAttribute("value",person2)
var gen1=document.createElement("tr")
  e.appendChild(gen1);
  var gen2=document.createElement("td")
  gen1.appendChild(gen2);
  var gen3=document.createTextNode(" type:");
  gen2.appendChild(gen3);
  var gen4=document.createElement("td")
  gen1.appendChild(gen4);
  var gen5=document.createElement("input")
  gen4.appendChild(gen5);
  gen5.setAttribute("type","text");
  gen5.setAttribute("id","gender");
  gen5.setAttribute("placeholder",gender);
  gen5.setAttribute("readonly","true");
  gen5.setAttribute("value",gender)
  var q=document.createElement("tr")
    e.appendChild(q);
    var r=document.createElement("td")
    q.appendChild(r);
    var s=document.createTextNode("Favourite colour:");
    r.appendChild(s);
    var t=document.createElement("td")
    q.appendChild(t);
    var u=document.createElement("input")
    t.appendChild(u);
    u.setAttribute("type","text");
    u.setAttribute("id","favColor");
    u.setAttribute("placeholder",person1);
    u.setAttribute("readonly","true");
    u.setAttribute("value",person1)
var v=document.createElement("tr")
e.appendChild(v);
var w=document.createElement("td")
v.appendChild(w);
var y=document.createTextNode("default");
w.appendChild(y);
var z=document.createElement("td")
v.appendChild(z);
var a1=document.createElement("input")
z.appendChild(a1);
a1.setAttribute("type","text");
a1.setAttribute("id","input");
a1.setAttribute("placeholder",person3);
a1.setAttribute("readonly","true");
a1.setAttribute("value",person3)
var b1=document.createElement("tr")
e.appendChild(b1);
var c1=document.createElement("td")
b1.appendChild(c1);
var d1=document.createTextNode("key");
c1.appendChild(d1);
var e1=document.createElement("td")
b1.appendChild(e1);
var f1=document.createElement("input")
e1.appendChild(f1);
f1.setAttribute("type","text");
f1.setAttribute("id","dob");
f1.setAttribute("placeholder",person4);
f1.setAttribute("readonly","true");
f1.setAttribute("value",person4)
var g1=document.createElement("button")
e.appendChild(g1);
var g2=document.createTextNode("button");
g1.appendChild(g2);
g1.setAttribute("id","butt");
  }
  function change(){
   var target = document.getElementById("target");
   var current = target.src;
   var url = prompt("change address to:", current);
   target.src= url;
}
