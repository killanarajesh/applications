// function getfile(file,callback){
// var kri= new XMLHttpRequest();
// kri.overrideMimeType("application/js");
// kri.open("GET",file,true)  ;
// kri.onreadystatechange=function() {
//   if(kri.readyState ===4 && kri.status == "200")
//   {
//     callback(kri.responseText);
//   }
// };
// kri.send(null);
// }
// getfile("js/data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   details(data.basic);
// career(data.career);
// education(data.education);
// sample(data.skills);
// })
function loadjson(file){
  return new Promise((resolve,reject)=>{
  return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }
    else {
      reject(new Error('error'));
    }

  })
  })
}

var newfile = loadjson("js/data.json");
  newfile.then(data=>{
    details(data.basic);
  career(data.career);
  education(data.education);
  sample(data.skills);
  ache(data.achievements);
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

  var ad=document.createElement("h2");
  ad.textContent=det.carrer;
  son.appendChild(ad);

  var line=document.createElement("hr");
  son.appendChild(line);

  var ok=document.createElement("h3");
  ok.textContent=det.main;
  son.appendChild(ok);
  var line=document.createElement("hr");
  son.appendChild(line);
  var a=document.createElement("h2");
  a.textContent=det.edut;
  son.appendChild(a);
}
function education(edu) {

  var line=document.createElement("hr");
  son.appendChild(line);
  var a=document.createElement("h2");
  a.textContent=edu.edut;
  son.appendChild(a);

for (var i = 0; i < edu.length; i++) {

  var deg=document.createElement("h2");
  deg.textContent=edu[i].degree;
  son.appendChild(deg);
  var ins=document.createElement("td");
  ins.textContent=edu[i].institute;

  var d=document.createElement("td");
  d.textContent=edu[i].data;
  son.appendChild(ins);
  son.appendChild(d);
}
}
function sample(kill) {
  var line=document.createElement("hr");
  son.appendChild(line);
  var abc=document.createElement("h2");
  abc.textContent="skills:";
  son.appendChild(abc);
  var skilldata=document.createElement("table");
  skilldata.border="0";
  son.appendChild(skilldata);
  tabledata="";

for(i=0;i < kill.length; i++)
{
  tabledata+="<tr><td>"+kill[i].title+":<td>"+kill[i].lang;
}
skilldata.innerHTML=tabledata;
}
function ache(kil) {
  var line=document.createElement("hr");
  son.appendChild(line);

  var abcd=document.createElement("h2");
  abcd.textContent="achievements:";
  son.appendChild(abcd);

  var achdata=document.createElement("table");
  achdata.border="0";
  son.appendChild(achdata);

  tabledata="";

for(i=0;i < kil.length; i++)
{
  tabledata+="<tr><td>"+kil[i].place+":<td>"+kil[i].got;
}
achdata.innerHTML=tabledata;
}
