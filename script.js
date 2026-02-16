//your JS code here. If required.
const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

function setCookie(name, value) {
	document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
	const cookies = document.cookie.split("; ");
	for(let i = 0; i < cookies.length; i++) {
		const parts = cookies[i].split("=");
		if(parts[0] === name) {
			return parts[1];
		}
	}
	return null;
}

window.onload = function () {
	const savedSize = getCookie("fontsize");
	const savedColor = getCookie("fontcolor");

	if(savedColor) {
		 document.documentElement.style.setProperty("--fontcolor", savedColor);
	    fontColorInput.value = savedColor;
	}

	if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize + "px");
    fontSizeInput.value = savedSize;
  }
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const size = fontSizeInput.value;
	const color = fontColorInput.value;

	// Update CSS variables
	  document.documentElement.style.setProperty("--fontsize", size + "px");
	  document.documentElement.style.setProperty("--fontcolor", color);
	// Save to cookies
	  setCookie("fontsize", size);
	  setCookie("fontcolor", color);
})