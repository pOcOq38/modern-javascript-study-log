

let day = 1; //0: mon ~ 6: sunday
let dayName;

switch(day){
    case 0:
        dayName = 'Monday';
        break;
    case 1:
        dayName = 'Tuesday';
        break;
    case 2:
        dayName = 'Wednesday';
        break;
}

let condition = 'okay';
let test;
switch(condition){
    case 'okay':
    case 'good':
        text = 'good!';
        break;
     case 'bad':
        text = 'bad';
        break;
    default:
        console.log("nice");
        break;
}