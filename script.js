var css = document.querySelector("p");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+", "
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";";
}
css.textContent = "linear-gradient(to right, rgb(106, 66, 189), rgb(255, 0, 0));";

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);