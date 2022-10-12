var apiKey = "fba17daf9cbeec5b417e3dbe0642cbd1";
var currentCity = document.getElementById("current-city");
var searchHistory = document.getElementById("search-history");
var forecast = document.getElementById("forecast");
var cityInput = document.getElementById("city");
var search = document.getElementById("submit-search")
//create elements for all displayed data
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?


// function getApi(){
// var sjc = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.338207&lon=-121.886330&appid=fba17daf9cbeec5b417e3dbe0642cbd1';

//   fetch(sjc)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data){
//         console.log(data);  
//         //when i console log here, i can see several next few days,
//         //3 hour increments
//         for (var i = 0; i <data.length; i++){
//             var cityName = document.createElement('h3');
//             var date = document.createElement('p');
//         }
//     })
// }


forecastEl = document.getElementById("forecast")
forecastEl.style.display = "none"

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
        tempP.textContent = "Temp: " + data.main.temp + " degrees °F";
        document.getElementById("current-city").append(tempP)
        console.log(tempP);
        // getForecast(data.coord.lat, data.coord.lon);

        var iconPic = data.weather[0].icon
        document.getElementById("icon").textContent = "";
        var icon = document.createElement("img");
        icon.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPic + "@2x.png") 
        document.getElementById("icon").append(icon)
        // getForecast(data.coord.lat, data.coord.lon);
        console.log(icon);

        document.getElementById("humidity").textContent = "";
        var humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + data.main.humidity + " %";
        document.getElementById("humidity").append(humidity)
        // getForecast(data.coord.lat, data.coord.lon);
        console.log(humidity);

        document.getElementById("wind").textContent = "";
        var wind = document.createElement("p");
        wind.textContent = "Wind: " + data.wind.speed + " MPH";
        document.getElementById("wind").append(wind)
        // getForecast(data.coord.lat, data.coord.lon);
        console.log(wind);

        // forecastEl.style.display = "block"


 


    var day1 = moment().add(1,"day").format("MMMM Do, YYYY");
    var day2 = moment().add(2,"day").format("MMMM Do, YYYY");
    var day3 = moment().add(3,"day").format("MMMM Do, YYYY");
    var day4 = moment().add(4,"day").format("MMMM Do, YYYY");
    var day5 = moment().add(5,"day").format("MMMM Do, YYYY");

    forecastEl.style.display = "block"

    console.log(day1)

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


function getForecast(city){
    console.log(city);
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;
    fetch(forecastURL)
    .then(function(response){
        if(response.ok){
            return response.json()
            .then(function(data){
                console.log(data)
                // displayForecast(data)
            })
        }
        else {
            alert("Error: " + response.statusText)
        }
    })
    
}
function displayForecast(data){
    var day1 = moment().add(1,"day").format("MMMM Do, YYYY");
    var day2 = moment().add(2,"day").format("MMMM Do, YYYY");
    var day3 = moment().add(3,"day").format("MMMM Do, YYYY");
    var day4 = moment().add(4,"day").format("MMMM Do, YYYY");
    var day5 = moment().add(5,"day").format("MMMM Do, YYYY");

    forecastEl.style.display = "block"

    console.log(day1)

    var element1 = document.getElementById("date-day-1")
    element1.textContent = day1
    var icon1 = document.getElementsById("icon1")
    var iconPic1 = //whatever data input from console (data.list[3].weather.icon)
    icon1.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPic1 + "@2x.png") 

    var temp1 =document.getElementsById("temp1")
    temp1.textContent = "Temp: " + data.list[3].main.temp;
    var hum1 =document.getElementsById("hum1")
    hum1.textContent = "Humidity " + data.list[3].main.humidity;
    var wind1 = document.getElementsById("wind1")
    wind1.textContent = "Wind" + data.list[3].wind.speed;

    //add icon2
    var element2 = document.getElementById("date-day-2")
    element2.textContent = day2

    var temp2 =document.getElementsById("temp2")
    temp2.textContent = "Temp: " + data.list[3].main.temp;
    var hum2 =document.getElementsById("hum2")
    hum2.textContent = "Humidity " + data.list[3].main.humidity;
    var wind2 = document.getElementsById("wind2")
    wind2.textContent = "Wind" + data.list[3].wind.speed;

    var element3 = document.getElementById("date-day-3")
    element3.textContent = day3


    //add icon3
    var temp3 =document.getElementsById("temp3")
    temp3.textContent = "Temp: " + data.list[3].main.temp;
    var hum3 =document.getElementsById("hum3")
    hum1.textContent = "Humidity " + data.list[3].main.humidity;
    var wind3 = document.getElementsById("wind3")
    wind1.textContent = "Wind" + data.list[3].wind.speed;

    var element4 = document.getElementById("date-day-4")
    element4.textContent = day4

    //add icon4
    var temp4 =document.getElementsById("temp4")
    temp4.textContent = "Temp: " + data.list[3].main.temp;
    var hum4 =document.getElementsById("hum4")
    hum1.textContent = "Humidity " + data.list[3].main.humidity;
    var wind4 = document.getElementsById("wind4")
    wind1.textContent = "Wind" + data.list[3].wind.speed;




    var element5 = document.getElementById("date-day-5")
    element5.textContent = day5

    //add icon5
    var temp5 =document.getElementsById("temp5")
    temp5.textContent = "Temp: " + data.list[3].main.temp;
    var hum5 =document.getElementsById("hum5")
    hum1.textContent = "Humidity " + data.list[3].main.humidity;
    var wind5 = document.getElementsById("wind5")
    wind1.textContent = "Wind" + data.list[3].wind.speed;

}

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

   



    //FUNCTIONALITY

// once Search is clicked ...
// condition statement in case searchCity is blank (what do i want it to do) -- refgresh / display "Invalid search"


// ELSE -- USING searchCity var 
// API GET request for today 
        // Mock up Example: Where it shows Atlanta/day/temp/humid/winds 
        // display city, cityurl.temp   .humid   .wind
        // add info to html element based on id

//API GET request for 5 day forecast (day1,2,3,4,5,)
        // Mock up Example: 5 day Forecast:
        // use day var to make api call and display based on date 
        // add info to html element based on id



})



//city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed