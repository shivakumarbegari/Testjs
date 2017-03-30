var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day=d.getDay();
document.getElementById("p").innerHTML = "Today is : "+ days[day];
var h=d.getHours();
var min=d.getMinutes();
var sec=d.getSeconds();
var ampm = h>=12?"PM":"AM";
h=h>=12?h-12:h;
if(h===0){
	h=12;
}
document.getElementById("p2").innerHTML="Current Time is : "+ h + " "+ampm + " : "+ min +" : "+sec;
