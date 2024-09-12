// Get the search input and button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.querySelector('button[type="submit"]');

// Add an event listener to the search button
searchButton.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the search query from the input field
  const searchQuery = searchInput.value.trim();

  // Submit the form or display search results here
  console.log(`Searching for: ${searchQuery}`);
  // ...
});