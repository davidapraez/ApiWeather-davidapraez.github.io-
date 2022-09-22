const API_KEY = 'f0b1e120fa3298bdbc21d35deca52750';

const get_ubicacion=()=>{
    var ubicacion=document.getElementById("city").value;
    if(!ubicacion){
        document.getElementById("city").value="Digite ciudad";
    }else{
        fetchData(ubicacion);
    }
}

const fetchData = (parametro) => {
    const ubicacion = parametro;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ubicacion}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    if(data.cod==='404'){
        document.getElementById("city").value="Ciudad no encontrada";
    }else{
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
    
        
    }
 }

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0'+((date.getMonth()+1)))}-${date.getFullYear()}`
}

const enviarinformacion=()=>{

}





