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

function currentDay(city){
    var currentDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    fetch(currentDayURL)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(JSON.stringify(data));
        document.getElementById("current-city").textContent = "";
        var tempP = document.createElement("p");
        tempP.textContent = "Temp: " + data.main.temp;
        document.getElementById("current-city").append(tempP)
        getForecast(data.coord.lat, data.coord.lon);
    }
    );


//api call for current day, fetch (line 12)
//pass the data 

}

function getForecast(lat, lon){
    var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat="${lat}&lon=${lon}&appid=${apiKey}&units=imperial`; //need to change to line 31

    fetch(forecastURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(JSON.stringify(data));
    });
    
}
function displayForecast(data){

}
function displayCurrentDay(data){
    //create var for data. temperature humidity etc
    //call created element var's, and append var that hold 
    //data to those elements
    //append those elements with data to div

}

function saveCities(searchCity)
{
    var cities = JSON.parse(localStorage.getItem("city")) || [];
    cities.push(searchCity);
    localStorage.setItem("city", JSON.stringify(cities));
}

search.addEventListener("click", function(event){
    event.preventDefault();

    //VARIABLES

    //declaring variable for city input
    var searchCity = cityInput.value;
    cityInput.value = "";
    currentDay(searchCity);
    saveCities(searchCity);
    //getForecast(searchCity);
    //variable for api url
    // var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + apiKey;
    //variable for 
    // var fiveForecastUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + apiKey;
    //variables by day for forecast
    // var day1 = moment().add(1,"day").format("MMM Do YY");
    // var day2 = moment().add(2,"day").format("MMM Do YY");
    // var day3 = moment().add(3,"day").format("MMM Do YY");
    // var day4 = moment().add(4,"day").format("MMM Do YY");
    // var day5 = moment().add(5,"day").format("MMM Do YY");
    // var today = moment().format("MMM Do YY");


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