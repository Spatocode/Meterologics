const head = document.querySelector('h2')
const input = document.querySelector('.zip')
const main = document.querySelector('.main')
const desc = document.querySelector('.description')
const temp = document.querySelector('.temperature')
const hum = document.querySelector('.humidity')
const err = document.querySelector('.error')
const form = document.querySelector('form')
const start = document.querySelector('.get-started')
const user = document.querySelector('.fa')
const userCon = document.querySelector('span')
const initial = document.querySelector('.initial')
const app = document.querySelector('.app-wrapper')
const inputError = document.querySelector('.input-error')
const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(start.value !== ""){
    let name = start.value
    user.innerHTML = name
    userCon.style.display = 'block'
    initial.style.display = 'none'
    app.style.display = 'block'
    }
    else{
        inputError.innerHTML = "Please provide a name"
    }
})

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
        console.log(data)
        main.innerHTML = data.weather[0].main
        desc.innerHTML = data.weather[0].description
        temp.innerHTML = `${data.main.temp}°F`
        hum.innerHTML = `${data.main.humidity}%`
        head.innerHTML = `Current weather for ${code}`
        input.value = ""
      })
      .catch(error => {
        console.error(error);
        err.innerHTML = "Failed to fetch!<br>Please check your network connection and try again."
      });
  }