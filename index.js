const API_KEY = 'f0b1e120fa3298bdbc21d35deca52750';

const fetchData = (parametro) => {
    const ubicacion = parametro;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ubicacion}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location:data.name,
        description:data.weather[0].main,
        humidity: data.main.humidity+'%',
        pressure: data.main.pressure+' mb',
        temperature: data.main.temp+'°C',
        date:getDate(),

    }
    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];
    });
    cleanUp();
}

const cleanUp = ()=>{
    let contenedor=document.getElementById('contenedor');
    let loader=document.getElementById('loader');
    
    loader.style.display='none';
    contenedor.style.display='flex';
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0'+((date.getMonth()+1)))}-${date.getFullYear()}`
}

const cargarubicacion = () => {
    //navigator.geolocation.getCurrentPosition(ubicacion);
    var localizacion = prompt("Type a location to check the weather");
    fetchData(localizacion);


}

