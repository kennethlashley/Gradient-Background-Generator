var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var original = body.style.background 
= "linear-gradient to right," 
+ color1.value 
+ ", " 
+ color2.value; 

function setGradient () {
	body.style.background = "linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";
}
/* the rgb for the original colors*/
css.textContent = original
/* the rgb for the first (left) color */
color1.addEventListener("input", setGradient);

/* the rgb for the second (right) color */
color2.addEventListener("input", setGradient);

