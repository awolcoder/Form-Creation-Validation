// Asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Reference to the data container

    try {
        const response = await fetch(apiUrl); // Fetch the data
        const users = await response.json(); // Parse JSON from response

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create and append user list
        const userList = document.createElement('ul'); // Create unordered list element

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create list item for each user
            listItem.textContent = user.name; // Set user's name as the content
            userList.appendChild(listItem); // Append list item to the unordered list
        });

        dataContainer.appendChild(userList); // Append the list to the container
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
    }
}

// Fetch user data after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
