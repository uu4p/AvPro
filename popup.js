const btn_blocking = document.getElementById("blocking");
const btn_timing= document.getElementById("timing");
const btn_otherThings = document.getElementById("otherThings");
const divblock = document.getElementById("divblock");
const divtiming = document.getElementById("divtiming");
const divother = document.getElementById("divother");
const startBtn = document.getElementById('start');

btn_blocking.addEventListener('click', () =>{
    divblock.style.display='block';
    divtiming.style.display='none';
    divother.style.display='none';
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
    alert('you gae ' + userHours);
})