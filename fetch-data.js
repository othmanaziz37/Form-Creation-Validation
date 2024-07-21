// Define the asynchronous function
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        // Check if response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element
        const userList = document.createElement('ul');
        
        // Loop through users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the <ul> to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);