// 1. Footer: Current Year and Last Modified Date
const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// 2. Static Weather Values (Matching HTML display)
const temperature = 26; // °C (Bujumbura typical temperature; displays N/A)
const windSpeed = 12;   // km/h

// 3. One-line Wind Chill Calculation Function (Metric °C & km/h)
const calculateWindChill = (temp, wind) =>
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);

// 4. Display Wind Chill only if Metric conditions are met (Temp <= 10 °C and Wind > 4.8 km/h)
const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}