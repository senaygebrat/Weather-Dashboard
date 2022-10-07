var sjc = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.338207&lon=-121.886330&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var atl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.748995&lon=-84.387982&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var oak = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.804364&lon=-122.271114&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var sfo = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.77493&lon=-122.419416&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var lax = 'https://api.openweathermap.org/data/2.5/forecast?lat=34.052234&lon=-118.243685&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var san = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.715738&lon=-117.161084&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var las = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.169941&lon=-115.13983&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var nyc = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.712776&lon=-74.005974&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var mia = 'https://api.openweathermap.org/data/2.5/forecast?lat=25.761681&lon=-80.191788&appid=fba17daf9cbeec5b417e3dbe0642cbd1';
var phx = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.448377&lon=-112.074037&appid=fba17daf9cbeec5b417e3dbe0642cbd1';


function getApi(){
var sjc = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.338207&lon=-121.886330&appid=fba17daf9cbeec5b417e3dbe0642cbd1';

  fetch(sjc) //is there a way to utilize this method for multiple variables? (Promise.all?)
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

getApi();

//city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed