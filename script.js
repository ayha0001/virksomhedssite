document.addEventListener("DOMContentLoaded", function () {
	console.log("Scriptet kører"); // Tjek om scriptet kører

	const burger = document.getElementById("burger");
	const nav = document.getElementById("nav");

	burger.addEventListener("click", function () {
		nav.classList.toggle("active");
		burger.classList.toggle("open");
	});
});

loadFooter();
function loadFooter() {
	fetch("footer.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("footer-placeholder").innerHTML = data;
		});
}

loadHeader();
function loadHeader() {
	fetch("header.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("header-placeholder").innerHTML = data;

			if (burger && nav) {
				burger.addEventListener("click", function () {
					nav.classList.toggle("active");
					burger.classList.toggle("open");
				});
			} else {
				console.error("Elementer ikke fundet: ", burger, nav);
			}
		});
}
