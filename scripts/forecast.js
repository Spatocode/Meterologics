const input = document.querySelector('.zip')
const main = document.querySelector('.main')
const desc = document.querySelector('.description')
const temp = document.querySelector('.temperature')
const hum = document.querySelector('.humidity')
const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

input.addEventListener('change',()=>{
    let zip = input.value
    fetchForecast(zip)
})

function zipUrl(code) {
    return `${API_STEM}q=${code}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(code) {
    return fetch(zipUrl(code))
      .then(res => res.json())
      .then(data => {
        main.innerHTML = data.weather[0].main
        desc.innerHTML = data.weather[0].description
        temp.innerHTML = `${data.main.temp}°F`
        hum.innerHTML = `${data.main.humidity}%`
      })
      .catch(error => {
        console.error(error);
      });
  }
  23401