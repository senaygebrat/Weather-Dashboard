# Weather-Dashboard

![Site Image](./assets/images/Weather%20Dashboard.gif)

[Updated Site](https://senaygebrat.github.io/Weather-Dashboard/)

## About Weather-Dashboard

Weather Dashboard is a tool that allows the user to input a city name to see the current temperature, humidity, and wind speeds, as well as for the 5 day forecast of selected city.

## Code Snippet

Below is a preview of some of the JavaScript code to make the page functional. It shows the necessary steps to output the first day of the five day forecast after the user inputs a city search.

```var element1 = document.getElementById("date-day-1")
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
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/senay-gebrat-566b78250/)
[Github](https://github.com/senaygebrat)

<!--
1. Gather the value of the user's input when they click the "search" button
2. Using this value, you will pass it into the api call
3. Then you will need variables that grab HTML elements of where you want to display the data
4. Make the innerText of these HTML elements equal to the date, temp, etc

-Well, you do grab the user input value on line 48 (59) of the screenshot that I sent
-From here you need to correctly implement the fetch call in the currentDay() function and get the response

Similarly to your getApi() function
-For the current day you can just create variables that select the HTML element.
-For the future days, you may want to dynamically create the elements (in regards to line 6!!!!)
-->
