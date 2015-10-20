/*Use reduce() to calculate the sum of the values in an array*/
function isValidWalk(walk) {
    if(walk.length === 10) {
        var ns = 0;
        var we = 0;

        walk.forEach(function(v,i,a) {
            if(v === 'n') { ns += 1; }
            if(v === 's') { ns -= 1; }
            if(v === 'w') { we += 1; }
            if(v === 'e') { we -= 1; }
        });

        if( ns === 0 && we === 0)
            return true;
        else
            return false;
    }
    else
        return false;
}


