/*
 NOTE: I should've/could've used % (mod) here to check if there is a remainder... Oh well
 I have also been made aware that I didn't need to check the "not in" in my else if's because of my first if check...
*/
function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (Number.isInteger(i / 3) && Number.isInteger(i/5)) {
            console.log("FizzBuzz")
        } else if (Number.isInteger(i / 5) && !Number.isInteger(i/3)) {
            console.log("Buzz")
        } else if (Number.isInteger(i/3) && !Number.isInteger(i/5)) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}
