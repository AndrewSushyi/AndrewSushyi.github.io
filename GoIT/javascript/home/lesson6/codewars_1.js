/*Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.*/
function getMissingElement(superImportantArray){
    var array = [0,1,2,3,4,5,6,7,8,9];
    for(var i in superImportantArray) {
        array[superImportantArray[i]] = -1;
    }
    for( i in array)
        if(array[i] !== -1)
            return console.log (array[i]);

}

getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3