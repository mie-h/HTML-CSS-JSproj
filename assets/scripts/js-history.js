

let element = document.getElementsByClassName('pic');
let current = 0;
setInterval(nextSlide,4000);

function nextSlide(){
	element[current].className = 'pic';
	current = (current+1)%element.length;
	element[current].className = 'pic on';
}
