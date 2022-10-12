var apiKey = "fba17daf9cbeec5b417e3dbe0642cbd1";
var currentCity = document.getElementById("current-city");
var searchHistory = document.getElementById("search-history");
var forecast = document.getElementById("forecast");
var cityInput = document.getElementById("city");
var search = document.getElementById("submit-search")
var day1
var day2
var day3
var day4
var day5

forecastEl = document.getElementById("forecast")
forecastEl.style.display = "none"


  //function to output the current temperature, humidity, and wind speeds from user input
function currentDay(city){
    var currentDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    console.log(currentDayURL)
    fetch(currentDayURL)
    .then(function(res){
        return res.json();
    })

    .then(function(data){
        var today = moment().format('MMMM Do YYYY')
        var todayEl = document.createElement("p")
        var cityCap = city.toUpperCase()
        todayEl.textContent = `${cityCap}(${today})`
        document.getElementById("date").append(todayEl)

        document.getElementById("current-city").textContent = "";
        var tempP = document.createElement("p");
        tempP.textContent = "Temp: " + data.main.temp + " °F";
        document.getElementById("current-city").append(tempP)

        var iconPic = data.weather[0].icon
        document.getElementById("icon").textContent = "";
        var icon = document.createElement("img");
        icon.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPic + "@2x.png") 
        document.getElementById("icon").append(icon)

        document.getElementById("humidity").textContent = "";
        var humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById("humidity").append(humidity)

        document.getElementById("wind").textContent = "";
        var wind = document.createElement("p");
        wind.textContent = "Wind: " + data.wind.speed + " MPH";
        document.getElementById("wind").append(wind)


    forecastEl.style.display = "block"

  //declaring variables for the 5 day forecast
    var element1 = document.getElementById("date-day-1")
    element1.textContent = day1

    var element2 = document.getElementById("date-day-2")
    element2.textContent = day2

    var element3 = document.getElementById("date-day-3")
    element3.textContent = day3

    var element4 = document.getElementById("date-day-4")
    element4.textContent = day4

    var element5 = document.getElementById("date-day-5")
    element5.textContent = day5

})
}

//function to get the forecast
function getForecast(city){
    console.log(city);
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;
    fetch(forecastURL)
    .then(function(response){
        if(response.ok){
            return response.json()
            .then(function(data){
                console.log(data)
                displayForecast(data)
            })
        }
        else {
            alert("Error: " + response.statusText)
        }
    })
    
}

//using the moments method to output the next 5 days
function displayForecast(data){
    var day1 = moment().add(1,"day").format("MMMM Do, YYYY");
    var day2 = moment().add(2,"day").format("MMMM Do, YYYY");
    var day3 = moment().add(3,"day").format("MMMM Do, YYYY");
    var day4 = moment().add(4,"day").format("MMMM Do, YYYY");
    var day5 = moment().add(5,"day").format("MMMM Do, YYYY");

    forecastEl.style.display = "flex";
    forecastEl.style.flex_basis = "auto";

    //day 1 of 5 day forecast, declaring variables locally for the weather icon, temperature, humidity, and wind
    //iterates through the array for the information
    var element1 = document.getElementById("date-day-1")
    element1.textContent = day1
    var iconPic1 = data.list[3].weather[0].icon
    document.getElementById("icon1").textContent = "";
    var icon1 = document.createElement("img");
    icon1.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPic1 + "@2x.png") 
    document.getElementById("icon1").append(icon1)
    var temp1 =document.getElementById("temp1")
    temp1.textContent = "Temp: " + data.list[3].main.temp + " °F";
    var hum1 =document.getElementById("hum1")
    hum1.textContent = "Humidity: " + data.list[3].main.humidity + "%";
    var wind1 = document.getElementById("wind1")
    wind1.textContent = "Wind: " + data.list[3].wind.speed + " MPH";

      //day 2 of 5 day forecast, declaring variables locally for the weather icon, temperature, humidity, and wind
    //iterates through the array for the information
    var element2 = document.getElementById("date-day-2")
    element2.textContent = day2
    var iconPic2 = data.list[11].weather[0].icon
    document.getElementById("icon2").textContent = "";
    var icon2 = document.createElement("img");
    icon2.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPic2 + "@2x.png") 
    document.getElementById("icon2").append(icon2)
    var temp2 =document.getElementById("temp2")
    temp2.textContent = "Temp: " + data.list[11].main.temp + " °F";
    var hum2 =document.getElementById("hum2")
    hum2.textContent = "Humidity: " + data.list[11].main.humidity + "%";
    var wind2 = document.getElementById("wind2")
    wind2.textContent = "Wind: " + data.list[11].wind.speed + " MPH";

    
      //day 3 of 5 day forecast, declaring variables locally for the weather icon, temperature, humidity, and wind
    //iterates through the array for the information
    var element3 = document.getElementById("date-day-3")
    element3.textContent = day3
    var iconPic3 = data.list[19].weather[0].icon
    document.getElementById("icon3").textContent = "";
    var icon3 = document.createElement("img");
    icon3.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPic3 + "@2x.png") 
    document.getElementById("icon3").append(icon3)
    var temp3 =document.getElementById("temp3")
    temp3.textContent = "Temp: " + data.list[19].main.temp + " °F";
    var hum3 =document.getElementById("hum3")
    hum3.textContent = "Humidity: " + data.list[19].main.humidity + "%";
    var wind3 = document.getElementById("wind3")
    wind3.textContent = "Wind: " + data.list[19].wind.speed + " MPH";

   
    //day 1 of 5 day forecast, declaring variables locally for the weather icon, temperature, humidity, and wind
    //iterates through the array for the information
    var element4 = document.getElementById("date-day-4")
    element4.textContent = day4
    var iconPic4 = data.list[27].weather[0].icon
    document.getElementById("icon4").textContent = "";
    var icon4 = document.createElement("img");
    icon4.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPic4 + "@2x.png") 
    document.getElementById("icon4").append(icon4)
    var temp4 =document.getElementById("temp4")
    temp4.textContent = "Temp: " + data.list[27].main.temp + " °F";
    var hum4 =document.getElementById("hum4")
    hum4.textContent = "Humidity: " + data.list[27].main.humidity + "%";
    var wind4 = document.getElementById("wind4")
    wind4.textContent = "Wind: " + data.list[27].wind.speed + " MPH";



    //day 5 of 5 day forecast, declaring variables locally for the weather icon, temperature, humidity, and wind
    //iterates through the array for the information
    var element5 = document.getElementById("date-day-5")
    element5.textContent = day5
    var iconPic5 = data.list[35].weather[0].icon
    document.getElementById("icon5").textContent = "";
    var icon5 = document.createElement("img");
    icon5.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPic5 + "@2x.png")
    document.getElementById("icon5").append(icon5) 
    var temp5 =document.getElementById("temp5")
    temp5.textContent = "Temp: " + data.list[35].main.temp + " °F";
    var hum5 =document.getElementById("hum5")
    hum5.textContent = "Humidity: " + data.list[35].main.humidity + "%";
    var wind5 = document.getElementById("wind5")
    wind5.textContent = "Wind: " + data.list[35].wind.speed + " MPH";

}

//function to store user input values locally
function saveCities(searchCity)
{
    var cities = JSON.parse(localStorage.getItem("city")) || [];
    cities.push(searchCity);
    localStorage.setItem("city", JSON.stringify(cities));
}

search.addEventListener("click", function(event){
    event.preventDefault(); 
    var searchCity = cityInput.value;
    currentDay(searchCity);
    saveCities(searchCity);
    getForecast(searchCity);
    cityInput.value = "";
})
