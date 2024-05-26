document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let lastModification = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last modification: " + lastModification;

    // Fictitious climate data for Rio Grande do Sul
    let temperature = 6;  // in Celsius
    let windSpeed = 20;   // in km/h
    let conditions = "Sunny";

    let windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById("temperature").textContent = temperature + " °C";
    document.getElementById("conditions").textContent = conditions;
    document.getElementById("wind").textContent = windSpeed + " km/h";

    document.getElementById("windChill").textContent = 
        (typeof windChill === "string") ? windChill :
        `${windChill.celsius.toFixed(2)} °C, ${windChill.fahrenheit.toFixed(2)} °F`;
});

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        // Convert windSpeed from km/h to m/s for the Celsius formula
        let windSpeedMs = windSpeed / 3.6;
        let windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeedMs, 0.16) + 0.3965 * temperature * Math.pow(windSpeedMs, 0.16);
        
        // Convert temperature to Fahrenheit and windSpeed to mph for the Fahrenheit formula
        let temperatureFahrenheit = temperature * 9/5 + 32;
        let windSpeedMph = windSpeed / 1.609;
        let windChillFahrenheit = 35.74 + 0.6215 * temperatureFahrenheit - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * temperatureFahrenheit * Math.pow(windSpeedMph, 0.16);
        
        return { celsius: windChillCelsius, fahrenheit: windChillFahrenheit };
    } else {
        return "N/A";
    }
}
