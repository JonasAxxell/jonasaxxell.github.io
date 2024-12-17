const date = new Date();
const today = date.getDate(); 
const month = date.getMonth();

infoArray = [
{
	imgSrc: "bild1.jpg",
	message: "Alla bärbara datorer -20%",
	code: "LAPT2024"
},
{
	imgSrc: "bild2.jpg",
	message: "Alla tangentbord -15%",
	code: "KBDR1524"
},
{
	imgSrc: "bild3.jpg",
	message: "Alla musar -20%",
	code: "MUSR2024"
},
{
	imgSrc: "bild4.jpg",
	message: "Alla Corsair produkter -20%",
	code: "CRSR2024"
},
{
	imgSrc: "bild3.jpg",
	message: "Alla Logitech produkter -20%",
	code: "LGTC2024"
},
{
	imgSrc: "bild1.jpg",
	message: "Alla Steelseries produkter -20%",
	code: "STSS2024"
},
{
	imgSrc: "bild2.jpg",
	message: "Alla Razer produkter -50%",
	code: "RAZR5024"
},
{
	imgSrc: "bild3.jpg",
	message: "Alla hörlurar -30%",
	code: "HEAD3024"
},
{
	imgSrc: "bild1.jpg",
	message: "Gratis Diablo IV spel på köpet med en PS5",
	code: "DIIV2024"
},
{
	imgSrc: "bild2.jpg",
	message: "PS4 konsol -30%",
	code: "KONS3024"
},
{
	imgSrc: "bild3.jpg",
	message: "PS4 spel -30%",
	code: "SPEL3024"
},
{
	imgSrc: "bild1.jpg",
	message: "PS5 spel -25%",
	code: "SPEL2524"
},
{
	imgSrc: "bild2.jpg",
	message: "Valfritt PS5 spel på köpet med en PS5",
	code: "KONS2424"
},
{
	imgSrc: "bild3.jpg",
	message: "Spelkonsoler -25%",
	code: "SPEL2524"
},
{
	imgSrc: "bild1.jpg",
	message: "Alla spelstolar -25%",
	code: "STOL2524"
},
{
	imgSrc: "bild2.jpg",
	message: "Alla BenQ skärmar -20%",
	code: "BENQ2024"
},
{
	imgSrc: "bild3.jpg",
	message: "Alla RAM -20%",
	code: "RAMS2024"
},
{
	imgSrc: "bild1.jpg",
	message: "Alla ASUS produkter -20%",
	code: "ASUS2024"
},
{
	imgSrc: "bild2.jpg",
	message: "Alla Acer produkter -20%",
	code: "ACER2024"
},
{
	imgSrc: "bild3.jpg",
	message: "Alla Fractal produkter -20%",
	code: "FRAC2024"
},
{
	imgSrc: "bild1.jpg",
	message: "Alla Ducky produkter -20%",
	code: "DUCK2024"
},
{
	imgSrc: "bild2.jpg",
	message: "Alla Endgame gear produkter -20%",
	code: "ENDG2024"
},
{
	imgSrc: "bild3.jpg",
	message: "Alla grafikkort -15%",
	code: "GPUK1524"
},
{
	imgSrc: "bild5.jpg",
	message: "God jul! Alla datorer -25%!",
	code: "XMAS2524"
},
];


//Kolla att alla HTML-element hunnit ladda klart
document.addEventListener("DOMContentLoaded", (event) => {
  const calendarContainer = document.getElementById("calendar");


//Loopa ut knappar 
  for(x=1; x<=24; x++){
	  calendarContainer.innerHTML += `
		<div class="door" id="door${x}" onclick="openDoor('${x-1}', this.id)">${x}</div>
	  `;
  }
	// shuffla knapparna
	shuffle( document.getElementsByClassName("door") );
});


function openDoor(arrIndex, divId) {
	if (today > arrIndex) {
			document.getElementById(divId).style.backgroundImage = "url(img/" + infoArray[arrIndex].imgSrc + ")";
			document.getElementById("offer-details").innerHTML = infoArray[arrIndex].message;
			document.getElementById("redeem-code").innerHTML = infoArray[arrIndex].code;

			// kombinerar meddelandet + rabattkoden i en alert
			alert(infoArray[arrIndex].message + "\nCode: " + infoArray[arrIndex].code);
	} else {
			alert("får inte öppna");
	}
}

 // Funktionen som hindrar användaren att öppna luckorna före det rätta datumet, ta bort de koden under att testa på programmet



