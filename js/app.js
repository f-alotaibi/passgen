const themeSwitcher = document.getElementById("switcher");
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

themeSwitcher.onclick = () => {
	if (body.classList == "light"){
		body.classList.replace('light', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		body.classList.replace('dark', 'light');
		localStorage.setItem('theme', 'light');		
	}
}