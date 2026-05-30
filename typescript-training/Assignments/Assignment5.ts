
interface emp{
employeeName :string;
baseSalary :number
experienceinYears : number;
yearEndRating : number;
}

let empinfo : emp[] = [
{
employeeName : "Alice Johns",
baseSalary : 75000.0,
experienceinYears : 5.1,
yearEndRating : 4.2
},
{
employeeName : "Bob Smith",
baseSalary : 68000.0,
experienceinYears : 3.2,
yearEndRating : 3.8
},
{
employeeName : "Carol Davis",
baseSalary : 82000.0,
experienceinYears : 7.1,
yearEndRating : 4.5
},
{
employeeName : "David Brown",
baseSalary : 90000.0,
experienceinYears : 10.2,
yearEndRating : 2.5
},
{
employeeName : "Eva Green",
baseSalary : 60000.0,
experienceinYears : 2.4,
yearEndRating : 3.5
}
]


let hike : number;
let hikePercentagevalue : number;
let variablepay : number = 0;
let bonus : number = 0;
let reward : number = 0;

let finalinfo : Map<string,number> = new Map();

for(let i=0;i <= empinfo.length-1;i++){
let emp= empinfo[i];
if(emp.yearEndRating>=4.0){
    variablepay = 15.0;
    bonus =1500
}
else if ((emp.yearEndRating>=3) && (emp.yearEndRating<4)) {
    variablepay = 10.0;
    bonus =1200
}
else {
    variablepay = 3.0;
    bonus =300
}
if (emp.experienceinYears >= 5){
    reward = 5000;
}
else{
    reward = 0;
}

hike = (emp.baseSalary * variablepay )/100 + bonus + reward;
hikePercentagevalue = (hike / emp.baseSalary)*100;
finalinfo.set(emp.employeeName,hikePercentagevalue);
  
}
console.log(finalinfo);