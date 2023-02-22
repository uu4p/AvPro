const btn_blocking = document.getElementById("blocking");
const btn_timing= document.getElementById("timing");
const btn_otherThings = document.getElementById("otherThings");
const divblock = document.getElementById("divblock");
const divtiming = document.getElementById("divtiming");
const divother = document.getElementById("divother");
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const practice = document.getElementById('prac');
let convertTotal;

btn_blocking.addEventListener('click', () =>{
    divblock.style.display='block';
    divtiming.style.display='none';
    divother.style.display='none';
});


practice.addEventListener('click', () =>{
    console.log(window.location.href)
});

btn_timing.addEventListener('click', () =>{
    divblock.style.display='none';
    divtiming.style.display='block';
    divother.style.display='none';
});

btn_otherThings.addEventListener('click', () =>{
    divblock.style.display='none';
    divtiming.style.display='none';
    divother.style.display='block';
});

startBtn.addEventListener('click' , () =>{
    const userHours = document.getElementById('hours').value;
    const userMinutes = document.getElementById('minutes').value;
    const userSeconds = document.getElementById('seconds').value;
    let totalSeconds;
    
    totalSeconds = +userSeconds + +(userMinutes*60) + +(userHours*3600);
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    yes = setInterval(countdownUpdate, 1000);
    function countdownUpdate() {
        const updateHours = Math.floor(totalSeconds / 3600).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        const updateMinutes = Math.floor((totalSeconds % 3600)/60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        const updateSeconds = (totalSeconds % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        
        hrs.innerHTML = updateHours;
        min.innerHTML = updateMinutes;
        sec.innerHTML = updateSeconds;
        if (totalSeconds <= 0) {
            clearInterval(yes);
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
            document.getElementById("start").disabled = false;
        }
        totalSeconds--;
    }
});

pauseBtn.addEventListener('click' , () => {
    clearInterval(yes);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
});


