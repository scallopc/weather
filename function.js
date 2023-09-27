feather.replace();

const changeLocationButton = document.getElementById('change-location-button');
changeLocationButton.addEventListener('click', () => {
    // Prompt the user to enter a new location
    const newLocation = prompt('Nova localização:');
    if (newLocation !== null) {
        // Update the location display
        const locationElement = document.querySelector('.location');
        locationElement.textContent = newLocation;
    }
});
