var key = "fba17daf9cbeec5b417e3dbe0642cbd1";
var currentCity = document.getElementById("current-city");
var searchHistory = document.getElementById("search-history");
var forecast = document.getElementById("forecast");
var cityInput = document.getElementById("city");
var search = document.getElementById("submit-search")
//create elements for all displayed data


function getApi(){
var sjc = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.338207&lon=-121.886330&appid=fba17daf9cbeec5b417e3dbe0642cbd1';

  fetch(sjc)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);  
        //when i console log here, i can see several next few days,
        //3 hour increments
        for (var i = 0; i <data.length; i++){
            var cityName = document.createElement('h3');
            var date = document.createElement('p');
        }
    
    })
}

function currentDay(city){
    var currentDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;
//api call for current day, fetch (line 12)
//pass the data 

}

function getForecast(city){
    
}


function displayForecast(data){

}


function displayCurrentDay(data){
    //create var for data. temperature humidity etc
    //call created element var's, and append var that hold 
    //data to those elements
    //append those elements with data to div

}


getApi();

search.addEventListener("click", function(event){
    event.preventDefault()
    var searchCity = cityInput.value;
    currentDay(searchCity)
    getForecast(searchCity)
})



//city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed