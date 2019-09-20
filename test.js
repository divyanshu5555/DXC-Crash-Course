
type =['Graduation', 'Post Graduation'];

data=[['Choose option','Computer Science Engineering ','Civil Engineering','Mechanical Engineering'],['Choose option','M.Tech (Computer Science Engineering) ','M.Tech (Civil Engineering)','M.Tech (Mechanical Engineering)'] ];


function fillDD()
{
var Typedd =document.getElementById('type');
for(i=0;i<type.length;i++)
{
var ele= document.createElement('option');
ele.text=type[i];
Typedd.add(ele,i+1);

}
}


function fillData()
{

var Typedd =document.getElementById('type');
var selectedIdx= Typedd.selectedIndex;

var Datadd =document.getElementById('data');

Datadd.innerText=null;

for(i=0;i<data[selectedIdx-1].length;i++)
{
var ele=document.createElement('option');
ele.text=data[selectedIdx-1][i];
Datadd.add(ele,i+1);

}

}
function dobValidate() {

var date= new Date();

var year=date.getFullYear()-18;
var month=date.getMonth()+1;
var dd=date.getDate();

if(month<10)
{
month='0'+month;
}
if(dd<10)
{
dd=0+""+dd;
}
/*if(!(e.which>= year-18))
{
e.preventDefault();
}*/

document.getElementById('dob').max=year+"-"+month+"-"+dd;

}
function passValidate(){
	var passx=document.getElementById("pass").value;
	var cpassy=document.getElementById("cpass").value;

	if (passx===cpassy) {
		return true;
	}
	else 
	{
		alert("Password Missmatch");
		return false;

	}
}



