// write a function that takes a number of adults, 
//a number of children, and the number of beds in a vacation
// home and returns true if there are enough bedds for everyone
//and false if not. asssume that adults will sleep 2 to a bed.

function enoughBeds(numAdults, numKids, numBeds) {
    //1st step - divide the number of adults by 2
    const adultBeds = numAdults / 2
    //2nd step - add that to the number of kiddos
    const totalBedsNeeded = adultBeds + numKids
    //3rd step - is that result <= number of beds
    // another way to write it without if 
    return (totalBedsNeeded <= numBeds)
    // automatically will return true or false no need to write the 
    // comments underneath lines (17-20) 
    
    //if(totalBedsNeeded <= numBeds) {
    //    return true
    //}
      //  return false
    
}    

const canWeFit = enoughBeds(4, 4, 5)
console.log("Can we fit?", canWeFit)