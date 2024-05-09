// Define fare rates per station
let farePerStation = 4; // Assuming $2 per station

// Metro station list (just a sample)
let stationList = ['CHAMKANI', 'SARDAR GARHI', 'CHUGHAL PURA', 'FAISAL COLONY', 'OLD HAJI CAMP', 'LAHORE ADDA', 'GULBAHAR CHOWK', 'HASHTNAGRI', 'MALIK SAAD SHAHEED', 'KHYBER BAZAR', 'SHOBA BAZAR', 'DABGARI GARDENS', 'RAILWAY STATION', 'FC CHOWK', 'SADDAR BAZAR', 'MALL ROAD', 'TEHKAL PAYYAN', 'TEHKAL BALA', 'ABDARA ROAD', 'UNIVERSITY TOWN', 'UNIVERSITY OF PESHAWAR', 'ISLAMIA COLLEGE', 'BOARD BAZAR', 'MALL OF HAYATABAD', 'BAB-E-PESHAWAR', 'HAYATABAD PHASE 3', 'TATARA PARK', 'PDA', 'HOSPITAL CHOWK', 'KARKHANO MARKET'];

// Function to calculate fare
function calculateFare() {
    let initialPlaceInput = document.querySelector('.initial').value.toUpperCase();
    let finalDestinationInput = document.querySelector('.final').value.toUpperCase();
    let resultContainer = document.querySelector('.result');

    // Clear previous result
    resultContainer.textContent = '';

    // Find the index of initial and final stations
    let initialIndex = stationList.indexOf(initialPlaceInput);
    let finalIndex = stationList.indexOf(finalDestinationInput);

    // Check if stations are valid
    if (initialIndex === -1 || finalIndex === -1) {
        resultContainer.textContent = "Invalid station names.";
        return;
    }

    // Calculate the number of stations traveled
    let stationsTraveled = Math.abs(finalIndex - initialIndex);

    // Calculate total fare
    let totalFare = stationsTraveled * farePerStation;

    // Display result
    resultContainer.textContent = `You travelled ${stationsTraveled} stations. Your fare is ${totalFare} Rs.`;
}
