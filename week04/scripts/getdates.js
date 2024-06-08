// Get current year
const currentYear = new Date().getFullYear();

// Output current year in footer's first paragraph
document.getElementById('currentYear').textContent = currentYear;

// Get last modified date of the document
const lastModified = document.lastModified;

// Output last modified date in the second paragraph of the footer
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
