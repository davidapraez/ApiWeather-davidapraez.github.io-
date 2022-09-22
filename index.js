
/**
 * Module Api requests- Complementary code
 * @module index 
 * @author Omar Apraez <omarapraez@hotmail.com>
 */
/*Key API*/
const API_KEY = 'f0b1e120fa3298bdbc21d35deca52750';

/**
 * Funcion que obtiene la ubicación del cuadro de texto y se la
 * pasa a otra funcion validando si este campo esta vacio 
 */
const get_ubicacion=()=>{
    var ubicacion=document.getElementById("city").value;
    if(!ubicacion){
        document.getElementById("city").value="Digite ciudad";
    }else{
        fetchData(ubicacion);
    }
}
/**
 * Metodo usado paar realizar la consulta a la Api 
 * @param {String} parametro - Ubicacion consulta.
 */
const fetchData = (parametro) => {
    const ubicacion = parametro;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ubicacion}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
}

/**
 * Metodo que recibe un oobjeto de la API y valida si existe la ciudad. Desoues de obtener
 * una respuesta valida muestra la informacion en unos contenedores en la pagina web.
 * @param {Object} data= Objeto que contiene el resultado de la consulta a la API.
 */
const setWeatherData = data => {
    if(data.cod==='404'){
        document.getElementById("city").value="Ciudad no encontrada";
    }else{
    const weatherData = {
        location:data.name,
        description:data.weather[0].main,
        humidity: 'Humidity: '+ data.main.humidity+'%',
        pressure: 'Pressure: '+data.main.pressure+' atm',
        temperature:'Temperature: '+ data.main.temp+'°C',
        date:getDate(),
    }
    Object.keys(weatherData).forEach(key => {
    document.getElementById(key).textContent = weatherData[key];
        
    });
    
        
    }
 }
 /**
  * Obtiene la fecha actual del sistema y la retorna. 
  * @returns {String}- Retorna una cadena con la fecha formateada en dd/mm/yyyy
  */

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0'+((date.getMonth()+1)))}-${date.getFullYear()}`
}



