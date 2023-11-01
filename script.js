//your JS code here. If required.
const pTag=document.getElementById("status");
const button=document.getElementById("enterBtn");
const final=document.getElementById("final");
button.addEventListener("click", function (){
	pTag.textContent="Entered Metaverse";
	const h1Element = document.createElement("h1");
    h1Element.textContent = pTag.textContent;

    // Append the h1 element to the "final" element
    final.appendChild(h1Element);
});