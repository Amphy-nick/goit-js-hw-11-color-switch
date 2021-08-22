const colors = [
   '#FFFFFF',
   '#2196F3',
   '#4CAF50',
   '#FF9800',
   '#009688',
   '#795548',
 ];

 
 const refs = {
   body: document.querySelector('body'),
   buttonStart: document.querySelector('button[data-action="start"]'),
   buttonStop: document.querySelector('button[data-action="stop"]'),
 }
 
refs.buttonStart.addEventListener('click', startSwitchColor);
refs.buttonStop.addEventListener('click', stopSwitchColor);

let setFunctionIntervalId = null;

function startSwitchColor(){
   setFunctionIntervalId = setInterval(ChangeBgColor,1000)
   refs.buttonStart.setAttribute('disabled', 'true')
}

function stopSwitchColor(){
   clearInterval(setFunctionIntervalId);
   refs.buttonStart.removeAttribute('disabled');
}

function ChangeBgColor(){
const randomColor = randomIntegerFromInterval(0,colors.length);
refs.body.setAttribute('style',`background-color:${colors[randomColor]}`);
}

 const randomIntegerFromInterval = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
 };