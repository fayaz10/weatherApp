// const api={
//   key: "b6a224157e8412807e55a97edf00f5bc",
//   url: "https://api.openweathermap.org/data/2.5/"
// }
// const searchbox = document.querySelector('.search-box');
// searchbox.addEventListener('keypress',setCity);
// function setCity(e){
//   if(e.keyCode == 13){
//       // console.log(searchbox.value);
//       getCityWeather(searchbox.value)
//   }
// }
// function getCityWeather(city_name){
//   fetch(`${api.url}weather?q=${city_name}&units=metric&APPID=${api.key}`)
//   .then(function(weather){
//       return weather.json();
//   }).then(showCityWeather);
// }
// function showCityWeather(weather){
//   console.log(weather);
//   let city  = $('.city');
//   city.html(`${weather.name}, ${weather.sys.country}`);

//   let temp = $('.temp');
//   temp.html(`${Math.round(weather.main.temp)}<span>C</pan>`);

//   let weather_el = $('.the-weather');
//   weather_el.html(weather.weather[0].main);

//    console.log(weather.weather[0].icon)

//   let myImg = $('#myImg');
//   myImg.html( `<img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'/>`);

//   let hilow = $('.hi-low');
//   hilow.text(`${Math.round(weather.main.temp_min)} c/ ${Math.round(weather.main.temp_max)}`)
  
//   let now = new Date();
//   let date = $('.date');
//   date.html(dateBuilder(now)) ;
// }

// function dateBuilder(d){
//   let months = ["jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"];
//   let days = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Firday","Saturday"];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();
//   return `${day} ${date} ${month}  ${year} `

// }
// ================================================================

const api = {
    key:'b6a224157e8412807e55a97edf00f5bc',
    url: 'https://api.openweathermap.org/data/2.5/'
}

var searchbox  = document.querySelector('.search-box')

searchbox.addEventListener('keypress', setCity)

function setCity(e){
    if(e.keyCode == 13){
        // console.log(searchbox.value)
        getCityWeather(searchbox.value)
    }
}

function getCityWeather(city_name){
  fetch(`${api.url}weather?q=${city_name}&units=metric&APPID=${api.key}`)
  .then(function(weather){
    return weather.json()
  })
  .then(showCityWeather)
 }
function showCityWeather(weather){
    console.log(weather)
    var city = $('#city')
    city.html(`${weather.name}, ${weather.sys.country}`)

    var temp = $('#temp');
    temp.html(`${weather.main.temp}`)

    var theWeather  = $('#theWeather');
    theWeather.html(`${weather.weather[0].description}`)

    var hilow = $('#hilow')
    hilow.text(`${Math.round(weather.main.temp_min)} c/ ${Math.round(weather.main.temp_max)}`)

    var myImg = $('#myImg')
    myImg.html(`<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="" srcset="">`)



 let now = new Date();
  let date = $('#date');
  date.html(dateBuilder(now)) ;


function dateBuilder(d){
  let months = ["jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"];
  let days = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Firday","Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month}  ${year} `

}
}

