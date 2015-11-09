var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

var ages = [20,30,40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];

function extractNumber(obj){
    var numbers = [];
    for(var key in obj){
        if(!isNaN(obj[key])){
            numbers.push(obj[key]);
        }
    }
    return numbers;
}

function extractString(obj){
    var strings = [];
    for(var key in obj){
        if(isNaN(obj[key])){
            strings.push(obj[key]);
        }
    }
    return strings;
}

console.log(extractNumber(obj));
console.log(extractString(obj));