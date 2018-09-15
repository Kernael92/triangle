function triangles() {
   var sideOne = parseInt(document.getElementById("AB").value);
   var sideTwo = parseInt(document.getElementById("BC").value);
   var sideThree = parseInt(document.getElementById("CA").value);

   var AB = sideOne;
   var BC = sideTwo;
   var CA = sideThree;


if (AB === BC && AB === CA) {
   alert("It is EQUILATERAL");
} else if (AB === BC || AB === CA){
   alert("It is ISOSCELES");
} else if (AB !== BC && AB !== CA && CA !== BC){
   alert("It is SCALENE");
} else if(AB + BC <= CA || AB + CA <= BC || CA + BC <= AB){
   alert("It is NOT A TRIANGLE");
} else {
   alert("Try again");
}
}
