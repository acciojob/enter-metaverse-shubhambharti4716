//your JS code here. If required.
const pTag=document.getElementById("status");
const button=document.getElementById("enterBtn");
const final=document.getElementById("final");
button.addEventListener("click", function (){
	pTag.textContent="Entered Metaverse";
	final.textContent=pTag.textContent;
});