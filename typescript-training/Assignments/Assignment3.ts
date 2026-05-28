/*Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students*/

let students : string[] =["Suresh","Mahesh","Naresh"];
let marks : number[]  = [75, 80, 82];
let updatedMarks : number[] =[];
for(let i=0;i<=marks.length;i++)
    {
    updatedMarks[i] = marks[i] +10;
}
console.log('updated marks :')
console.log(`Suresh : ${updatedMarks[0]}`);
console.log(`Mahesh : ${updatedMarks[1]}`);
console.log(`Naresh: ${updatedMarks[2]}`);


let sum : number = 0
let averagemarks : number = 0

for(let i=0;i<=updatedMarks.length-1;i++){
    sum += updatedMarks[i];
}
averagemarks = sum/updatedMarks.length;
console.log(`AverageMarks: ${averagemarks}`)
