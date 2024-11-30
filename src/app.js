function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement=document.querySelector("#city");

    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
    
}



function searchCity(city){
    let apikey ="fbbeo522008a6t423889d2a000ef043e";
    let apiURL =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
    axios.get(apiURL).then(refreshWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchFormElement =document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Harare");