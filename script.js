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

document.addEventListener("DOMContentLoaded", function () {
	// Hent nødvendige elementer
	const slider = document.querySelector(".kommentarslide");
	const prevButton = document.querySelector("#prevBtn");
	const nextButton = document.querySelector("#nextBtn");

	// Bredden som hver scroll skal flytte (kan justeres afhængigt af designet)
	const scrollAmount = slider.offsetWidth / 2;

	// Tilføj klik-event til "forrige" knap
	prevButton.addEventListener("click", () => {
		slider.scrollBy({
			left: -scrollAmount, // Scroll til venstre
			behavior: "smooth", // Gør det pænt og glidende
		});
	});

	// Tilføj klik-event til "næste" knap
	nextButton.addEventListener("click", () => {
		slider.scrollBy({
			left: scrollAmount, // Scroll til højre
			behavior: "smooth",
		});
	});
});
