function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("search-form-input");
    let weatherAppCityElement=document.querySelector("#weather-app-city");
    weatherAppCityElementcityElement.innerHTML=searchInput.value;
}

let searchFormElement =document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);