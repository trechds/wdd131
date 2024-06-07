document.addEventListener('DOMContentLoaded', function () {
  const currentYearElement = document.querySelector("#currentyear");
  const today = new Date();
  if (currentYearElement) {
      currentYearElement.textContent = today.getFullYear();
  }

  const lastModifiedElement = document.querySelector("#lastModified");
  const lastModifiedDate = new Date(document.lastModified);
  if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last Modification: ${formatDate(lastModifiedDate)}`;
  }

  const productSelect = document.getElementById('product-name');
  if (productSelect) {
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.textContent = product.name;
          productSelect.appendChild(option);
      });
  }

  const currentOptionElement = document.querySelector('#currentoption');
  const navLinks = document.querySelectorAll('.navigation ul li a');
  if (currentOptionElement && navLinks) {
      navLinks.forEach(link => {
          link.addEventListener('click', function (event) {
              event.preventDefault();
              currentOptionElement.textContent = event.target.textContent;
          });
      });
  }

  const stars = document.querySelector('.rating');
  if (stars) {
      const labels = stars.querySelectorAll('label');
      labels.forEach(label => {
          label.addEventListener('mouseover', function () {
              stars.classList.add('hover');
              labels.forEach(l => l.classList.remove('hovered'));
              this.classList.add('hovered');
              let nextSibling = this.nextElementSibling;
              while (nextSibling) {
                  nextSibling.classList.add('hovered');
                  nextSibling = nextSibling.nextElementSibling;
              }
          });

          label.addEventListener('mouseout', function () {
              stars.classList.remove('hover');
              labels.forEach(l => l.classList.remove('hovered'));
          });
      });
  }
});

function formatDate(date) {
  return [
      addLeadingZero(date.getMonth() + 1),
      addLeadingZero(date.getDate()),
      date.getFullYear()
  ].join('/') + ' ' + [
      addLeadingZero(date.getHours()),
      addLeadingZero(date.getMinutes()),
      addLeadingZero(date.getSeconds())
  ].join(':');
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

const products = [
  { id: "fc-1888", name: "Flux Capacitor", avgRating: 4.5 },
  { id: "fc-2050", name: "Power Laces", avgRating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", avgRating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", avgRating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", avgRating: 5.0 }
];