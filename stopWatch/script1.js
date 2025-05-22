
setInterval(()=>{
const daydisplay=document.getElementById("day")
const date=document.getElementById("date")
const month=document.getElementById("month")
const year=document.getElementById("year")

const clock=document.getElementById("clock")
const AmorPm=document.getElementById("amorpm")

const week=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"]

let date1=new Date();
// console.log(date1)

let hours=date1.getHours()
let d=date1.getDate();
let day=date1.getDay()

let minute=date1.getMinutes()
let min=minute<=9?minute=`0${minute}`:minute

 let second=date1.getSeconds()
let sec=second<=9?second=`0${second}`:second

let month1=date1.getMonth()+1;
let year1=date1.getFullYear();

const Time=hours>12?AmorPm.innerHTML="PM":AmorPm.innerHTML="AM";
// console.log(Time)

month.innerHTML=month1;
year.innerHTML=year1;
date.innerHTML=d
clock.innerHTML=`${hours}:${minute}:${second}`
daydisplay.innerHTML=week[day]

 },1000)

 let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
 let timerRef = document.querySelector('#innerbox');
 let int = null;

 document.getElementById('startbtn').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('stopbtn').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetbtn').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    timerRef.style.fontSize="40px"
});

function displayTimer(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

let h = hours < 10 ? `0${hours}` : hours;
 let m = minutes < 10 ? `0${minutes}` : minutes;
 let s = seconds < 10 ? `0${seconds}` : seconds;
 let ms = milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;
 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}