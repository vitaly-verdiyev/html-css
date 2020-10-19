document.querySelector(".burger").addEventListener("click", function() {
	this.classList.toggle("burger--active");
	document.querySelector(".nav").classList.toggle("nav--active")
});