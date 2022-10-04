const APIKEY = '930e907ec27ff6f88fd24013d1409e76';

//appel à l'api open weather
function apicall(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) => 
        response.json().then((data) => {
            document.querySelector('#description').innerHTML = data.weather[0].description;
            const icon = data.weather[0].icon;
            document.querySelector('#weather_icon').innerHTML = "<img src= 'http://openweathermap.org/img/wn/${icon}@2x.png'/>";
            document.querySelector('#city').innerHTML = "<i class='fa-solid fa-tree-city'></i>" + data.name;
            document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-half'></i>" + data.main.temp + '°';
            document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed +'km/h';
            })
        )
        .catch((err) => console.log('Erreur : '+ err));
}

//écouteur d'evenement sur la soumission du formulaire 
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    
    apicall(ville);
});

//appel par defaut au chargement de la page
apicall(Nantes);

