//your JS code here. If required.
let input=document.querySelector("#fname");

input.addEventListener("blur",()=>{
	blr();
})
function blr(){
	let input=document.querySelector("#fname");
let value=input.value;
	input.value=value.toUpperCase();
}