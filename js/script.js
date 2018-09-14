function triangles() {
   var sideOne = parseInt(document.getElementById("AB").value);
   var sideTwo = parseInt(document.getElementById("BC").value);
   var sideThree = parseInt(document.getElementById("CA").value);

   var sideOne = AB;
   var sideTwo = BC;
   var sideThree = CA;


if (AB === BC && AB === CA) {
   alert("It is EQUILATERAL");
} else if (AB === BC || AB === CA){
   alert("It is ISOSCELES");
} else if (AB !== BC && BC !== CA){
   alert("It is SCALENE");
} else if(AB === BC <= CA ){
   alert("It is NOT A TRIANGLE");
} else {
   alert("Try again");
}
}
