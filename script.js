//your JS code here. If required.
const pTag=document.getElementById("initial");
const button=document.getElementById("btn");
const final=document.getElementById("final");
button.addEventListener("click", function (){
	pTag.textContent="Entered Metaverse";
	final.textContent=pTag.textContent;
});