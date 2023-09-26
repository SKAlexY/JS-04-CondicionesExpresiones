function convertir(grados){
    var fahrenheit = (grados * 9/5) + 32;
    return fahrenheit;
}

var temperaturaCelsius = 30;
var fahrenheit = convertir(temperaturaCelsius);
console.log(temperaturaCelsius + " °C son rquivalentes a " + fahrenheit + " °F.");