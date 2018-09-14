var triangles = ["EQUILATERAL", "ISOSCELES", "SCALENE","NOT A TRIANGLE"]
   triangles.forEach(function(triangle)){
   alert("It is " + triangle + "!")
   }

   var a = AB
   var b = BC
   var c = CA

if (AB===BC===CA)  {
   alert("It is EQUILATERAL")
} else if (AB===BC!==CA && CA===BC!==AB && AB===CA!==BC){
   alert("It is ISOSCELES")
} else if (AB!==BC!==CA){
   alert("It is SCALENE)"
} else if(AB+BC<=CA || CA+AB<=BC || BC+CA<=AB){
   alert("It is NOT A TRIANGLE")
} else {
   alert("Try again")
}
