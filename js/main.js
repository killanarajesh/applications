function getfile(file,callback){
var kri= new XMLHttpRequest();
kri.overrideMimeType("application/js");
kri.open("GET",file,true)  ;
kri.onreadystatechange=function() {
  if(kri.readyState ===4 && kri.status == "200")
  {
    callback(kri.responseText);
  }
};
kri.send(null);
}
getfile("js/data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
career(data.career);
})

var child = document.querySelector(".childone");

function details(det){
  var img =document.createElement("img");
  img.src=det.image;
  child.appendChild(img);

var name=document.createElement("h1");
name.textContent=det.name;
child.appendChild(name);
var pho=document.createElement("h2");
pho.textContent=det.phone;
child.appendChild(pho);
var mail=document.createElement("h4");
mail.textContent=det.email;
child.appendChild(mail);
var ad=document.createElement("h4");
ad.textContent=det.v;
child.appendChild(ad);
var line=document.createElement("hr");
child.appendChild(line);
var add=document.createElement("h4");
add.textContent=det.address;
child.appendChild(add);

}
var son = document.querySelector(".children");

function career(det){

  var ad=document.createElement("h4");
  ad.textContent=det.ca;
  son.appendChild(ad);

  var line=document.createElement("hr");
  son.appendChild(line);

  var ok=document.createElement("h3");
  ok.textContent=det.main;
  son.appendChild(ok);
}
