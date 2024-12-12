document.addEventListener("DOMContentLoaded", function () {
	console.log("Scriptet kører"); // Tjek om scriptet kører

	// Loader headeren og tilføjer interaktivitet
	fetch("header.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("header-placeholder").innerHTML = data;

			// Hent elementerne efter headeren er indlæst
			const burger = document.getElementById("burger");
			const nav = document.getElementById("nav");

			if (burger && nav) {
				burger.addEventListener("click", function () {
					nav.classList.toggle("active");
					burger.classList.toggle("open");
				});
			} else {
				console.error("Elementer ikke fundet: ", burger, nav);
			}
		})
		.catch((error) => {
			console.error("Fejl under indlæsning af header:", error);
		});

	fetch("footer.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("footer-placeholder").innerHTML = data;
		});
});
