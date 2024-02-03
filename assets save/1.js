const local = document.querySelector(".date");
const data = new Date();
const numDay = data.getDate()
const day = data.getDay();
const month = data.getMonth();
const year = data.getFullYear();
const hour = data.getHours();
let min =data.getMinutes();
let second = data.getSeconds();

const dayOfWeek = (day) => {
 const days = ["Sunday","Monday","Thuesday","Wendnesday","Thursday","Friday","Satursday"]
 return days[day]
  };

const monthOfYear = (month) =>{
  const months = ["Janury","February","March","April","May","June","July","August","September","September","October","November","December"]
 return months[month]

}
if(min<10){
  min = `0${min}`
}
if(second<10){
  second = `0${second}`
}


const createP = (dayName,monthName) => {
  const p = document.createElement("p");
  p.innerHTML = `${dayName} , ${numDay} of ${monthName} of ${year} , ${hour}:${min}:${second} `;
  local.appendChild(p);
};

createP(dayOfWeek(day) ,monthOfYear(month));
console.log(day);

