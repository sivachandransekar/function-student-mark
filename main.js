function mark(mark1,mark2,mark3,mark4,mark5){
	 var total=mark1+mark2+mark3+mark4+mark5;
	 var average=total/mark.length;
	 document.write("total mark="+total+"&nbsp");
	 return  average;
	 

}

var siva=mark(67,54,99,79,99);
document.write("siva average list"+siva+"<br>");

var vasu=mark(67,54,60,99,99);
document.write("vasu average list"+vasu+"<br>");
var udthey=mark(67,10,85,99,30);
document.write("udthey average list"+udthey+"<br>");
var robin=mark(67,54,10,99,99);
document.write("robin average list"+robin+"<br>");
var kali=mark(67,54,99,20,99);
document.write("kali average list"+kali+"<br>");