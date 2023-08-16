//your JS code here. If required.
let div = document.getElementById("sizeInfo");
let height = this.innerHeight;
let width = this.innerWidth;
let h = div.firstChild;
h.innerText= "Width: "+width+" and Height: "+height;

window.addEventListener("resize",()=>{
	let height = this.innerHeight;
	let width = this.innerWidth;
	h.innerText= "Width: "+width+" and Height: "+height;
})