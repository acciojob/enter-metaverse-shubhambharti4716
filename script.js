//your JS code here. If required.
const pTag=document.getElementById("status");
const button=document.getElementById("enterBtn");
const final=document.getElementById("output");
button.addEventListener("click", function (){
	pTag.textContent="Entered Metaverse";
	const h1Element = document.createElement("h1");
            h1Element.textContent = pTag.textContent;

            // Clear the existing content of the output element and append the h1 element
            output.innerHTML = "";
            output.appendChild(h1Element);
});