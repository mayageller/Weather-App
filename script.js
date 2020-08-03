function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");
  

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "f146799a557e8ab658304c1b30cc3cfd";

  location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=imperial";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = temp + "° F";
        location.innerHTML =
          data.name + " (" + latitude + "°, " + longitude + "°)";

      var weatherType = data.weather[0].main;
      // weatherType = "Rain";
      
      if(weatherType == "Clear"){
        document.body.style.background = "url('https://images.unsplash.com/photo-1542677293-058dd3c36a53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Clouds"){
        document.body.style.color = "#333";
     document.body.style.background = "url('https://images.unsplash.com/photo-1581713872605-b9dfbc84eaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Rain"){
        document.body.style.color = "#F5F1FA";
        document.body.style.background = "url('https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Drizzle"){
        document.body.style.color = "#B05C3E";
        document.body.style.background = "url('https://images.unsplash.com/photo-1518803194621-27188ba362c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Snow"){
        document.body.style.color = "#60726B";
        document.body.style.background = "url('https://images.unsplash.com/photo-1486103185555-3c3030d0e5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Thunderstorm"){
        document.body.style.color = "#F3D1BA";
        document.body.style.background = "url('https://images.unsplash.com/photo-1562784932-89219bb064b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Mist"){
        document.body.style.color = "#6D94AD";
        document.body.style.background = "url('https://images.unsplash.com/photo-1530569673472-307dc017a82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')";
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Ash"){
        document.body.style.color = "#EAF4FC";
        document.body.style.background = "url('https://images.unsplash.com/photo-1516007094084-963b97acdb35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Haze"){
        document.body.style.color = "#4E6464";
        document.body.style.background = "url('https://images.unsplash.com/photo-1524262134826-05a36ba28ec4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Dust"){
        document.body.style.color = "#C6AB9B";
        document.body.style.background = "url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Fog"){
        document.body.style.color = "#E3E7EB";
        document.body.style.background = "url('https://images.unsplash.com/photo-1546525012-4f79313b6de6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Sand"){
        document.body.style.color = "#AF8267";
        document.body.style.background = "url('https://images.unsplash.com/photo-1547664678-24eb47dcb0ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Smoke"){
        document.body.style.color = "#EBEBED";
        document.body.style.background = "url('https://images.unsplash.com/photo-1483221186507-3cfe60ffb2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Squall"){
        document.body.style.color = "#91A1AF";
        document.body.style.background = "url('https://images.unsplash.com/photo-1526761009672-490674a277a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"; 
        document.body.style.backgroundSize = "cover";
      }
      if(weatherType == "Tornado"){
        document.body.style.color = "#415671";
        document.body.style.background = "url('https://images.unsplash.com/flagged/photo-1552483570-019b7f8119b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')"; 
        document.body.style.backgroundSize = "cover";
      }

      
        description.innerHTML = data.weather[0].main;
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
}

getWeather();


// document.body.onkeyup = function(e) {
//  if(e.keyCode == 68) {
//  document.body.classList.toggle("dark");
//  }
// }

document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark-theme.css';
            themeToggle.innerText = 'Switch to light mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-theme.css';
            themeToggle.innerText = 'Switch to dark mode';

        }
    })
})