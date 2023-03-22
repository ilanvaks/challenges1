// write a function that takes in the number of adults and returns the
// the number of adults and returns the number of pizzas required to
// feed them .
// asssume 8 slices per pizza and assume each adult will eat
// 3 slices. round up to the nearest pie.


// 1st step - 8 slices * 3people = number of pizzas needed
function howManyPizzas(numPeople) {
    const slicesNeeded = numPeople * 3
    const piesNeeded = slicesNeeded / 8
    const numPizzas = Math.ceil(piesNeeded)
    return numPizzas


}

const ourNeed = howManyPizzas(40)

console.log("We need " + ourNeed + " pizzas")