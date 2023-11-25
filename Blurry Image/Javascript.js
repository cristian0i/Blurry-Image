const img = document.querySelector(".bg");
const text = document.querySelector(".loading-text");

let load = 0;
const bluring = () => {
	load++;
	if (load > 99) {
		clearInterval(int);
	}
	text.innerText = `${load}%`;
	text.style.opacity = scale(load, 0, 100, 1, 0);
	img.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

let int = setInterval(bluring, 30);
const scale = (num, min, max, outmin, outmax) => {
	return (num - min) * (outmax - outmin) / (max - min) + outmin;
}



