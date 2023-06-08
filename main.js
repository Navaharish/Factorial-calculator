
let inputValue = document.querySelector(".input-value")
let calculateBtn = document.querySelector(".input-btn")
let answerValue = document.getElementById("answer")

// let promtValue = prompt("Enter the Factorial Number")

calculateBtn.addEventListener("click", () => {
    let n = inputValue.value;
    function factorial(n) {
        if (n < 1) {
            return "Enter the positive Number"
        }
        else if (n == 0 || n == 1) {

            return 1;

        }
        else {
            return n * factorial(n - 1);
        }


    }

    let answer = factorial(n);

    answerValue.setAttribute("value", answer)
    console.log("The Value of Factorial is " + n + ":" + answer);

    console.log(n);
})



