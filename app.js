const hour = document.querySelector("#hora");
const minuto = document.querySelector("#minuto");
const segundo = document.querySelector("#seg");

setInterval(() =>{

    let data = new Date();
    let dhora = data.getHours();
    let dminuto = data.getMinutes();
    let dsegundo = data.getSeconds();

    hour.innerHTML = `${formatTime(dhora)}`
    minuto.innerHTML = `${formatTime(dminuto)}`
    segundo.innerHTML = `${formatTime(dsegundo)}`

},1000);

function formatTime(time){
    return time < 10 ? '0'+ time : time;
}