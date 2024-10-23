document.addEventListener('DOMContentLoaded', () => {
    const rentbutton= document.getElementById('RENT');
    const sellbutton = document.getElementById('SELL');
    const buybutton = document.getElementById('BUY');


// fetch posts
searchButton.addEventListener('click', () => {
    const price = "#price";
    if (price) {
        fetch('')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
// Function to toggle the dropdown menu
function toggleDropdown() {
    document.querySelector('.dropdown-content').classList.toggle('show');
}

// Event listener for the dropdown button
document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Function to handle search input
function handleSearch() {
    const searchInput = document.querySelector('input[type="text"]').value;
    console.log("Searching for: " + searchInput);
    // Implement search functionality here
}

// Event listener for the search input
document.querySelector('input[type="text"]').addEventListener('keyup', handleSearch);// Function to toggle the dropdown menu
function toggleDropdown() {
    document.querySelector('.dropdown-content').classList.toggle('show');
}

// Event listener for the dropdown button
document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Function to handle search input
function handleSearch() {
    const searchInput = document.querySelector('input[type="text"]').value;
    console.log("Searching for: " + searchInput);
    // Implement search functionality here
}

// Event listener for the search input
document.querySelector('input[type="text"]').addEventListener('keyup', handleSearch);
    }})})