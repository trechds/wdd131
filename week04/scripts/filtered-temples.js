const navmenu = document.querySelector('.navmenu');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
	navmenu.classList.toggle('open');
	hamburger.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Salt Lake City Utah",
  	  location: "Salt Lake City, Utah",
  	  dedicated: "1847, April, 6",
  	  area: 253015,
  	  imageUrl:
  	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },	
	{
  	  templeName: "Denver Colorado",
  	  location: "Denver Colorado",
  	  dedicated: "1986, October, 24",
  	  area: 29117,
  	  imageUrl:
  	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-colorado-temple-lds-845690-wallpaper.jpg"
    },	
	{
  	  templeName: "San Juan Puerto Rico",
  	  location: "San Juan, Puerto Rico",
  	  dedicated: "2023, January, 15",
  	  area: 6988,
  	  imageUrl:
  	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg"
    },
  ];

displayTemples(temples);


const oldPage = document.querySelector('#old');
oldPage.addEventListener("click", () => (
	displayTemples(temples.filter(temple => temple.dedicated < "1900")
)));

const newPage = document.querySelector('#new');
newPage.addEventListener("click", () => (
	displayTemples(temples.filter(temple => temple.dedicated > "2000"))
));

const largePage = document.querySelector('#large');
largePage.addEventListener("click", () => (
	displayTemples(temples.filter(temple => temple.area > "90000"))
));

const smallPage = document.querySelector('#small');
smallPage.addEventListener("click", () => (
	displayTemples(temples.filter(temple => temple.area < "10000"))
));

const homePage = document.querySelector('#home');
homePage.addEventListener("click", () => (
	displayTemples(temples)	
));

function displayTemples(templeInfo) {

	document.querySelector(".container").innerHTML = "";
	templeInfo.forEach(temple => {

		let tile = document.createElement("section");
		let name = document.createElement("h3");
		let place = document.createElement("p");
		let dedicated = document.createElement("p");
		let size = document.createElement("p");
		let image = document.createElement("img");

		name.textContent = temple.templeName;
		place.innerHTML = `<p id="location">Location: ${temple.location}</p>`;
		dedicated.innerHTML = `<p id="dedication">Dedicated: ${temple.dedicated}</p>`;
		size.innerHTML = `<p id="size">Size: ${temple.area} sq ft</p>`;
		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.templeName} Temple`);
		image.setAttribute("loading", "lazy");
		

		tile.appendChild(name);
		tile.appendChild(place);
		tile.appendChild(dedicated);
		tile.appendChild(size);
		tile.appendChild(image);

		document.querySelector(".container").appendChild(tile)
	});
}