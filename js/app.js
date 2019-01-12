// Init weather object
const weather = new Weather('Boston', 'MA');
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(res => ui.paint(res))
        .catch(err => console.log(err));
}

