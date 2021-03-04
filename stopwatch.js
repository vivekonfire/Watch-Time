const count = document.getElementById('countdown');

var time=0;
var mins=0;
var secs=0;
var my=0;
function start(){
    my=setInterval(updateCountDown, 1000);
}
function stop(){
    clearInterval(my);
}
function updateCountDown(){
    let minutes = Math.floor(time / 60);
    let seconds =time % 60;

    seconds = seconds <10 ?'0'+ seconds : seconds;

    count.innerHTML =`${minutes}: ${seconds}`;
    time++;
}