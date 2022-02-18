const makeCoffee = (isHot){
    
}


//Ternary Operators

const myNumber = typeof input === 'number' ? input : parseInt(input);

// is the same as:

const myNumber = if (typeof input === 'number'){
    return input;
} else {
    return parseInt(input);
}

//Another example:

const hassItems = (myArray)=>{
    return myArray.length >=1 ? true:false;
}

// which is the same as

const hasItems = (myArray) => {
    if (myArray.length >= 1){
        return true;
    } else  {
        return false;
    }
}

//SWITCH STATEMENTS

const getIdealBeefTemp = ( doneness ) => {// this is useful for listing conditions, especially if you have more than 4 conditions, to use a switch.
    let idealTemp;
    switch ( doneness ) {
        case ('rare' && kind === 'beef'): //see Zoom meeting
            idealTemp = 125;
            break;
        case 'medium':
            idealTemp = 135;
            break;
        case 'medium-well':
            idealTemp = 145;
            break;
        default:
            idealTemp = 155; //i.e. well-done
    }
    return idealTemp;
}