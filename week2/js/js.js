"use strict";

(function () {
    //randomly chooses the number
    let answer = Math.ceil(Math.random() * 100);
    //gets the submit button from the page
    let submitButton = document.getElementById("submitButton");
    let tryAgain = document.getElementById("tryAgain");

    //sets the game operation after user presses the submit button
    submitButton.addEventListener("click", function () {

        //gets all necessary elements from the page
        let attempts = document.getElementById("attemptsLeft").textContent;
        let userNumber = document.getElementById("userNumber").value;
        let resultsMessage = document.getElementById("resultsMessage");
        let winMessage = document.getElementById("winMessage");
        let tooHighMessage = document.getElementById("tooHighMessage");
        let tooLowMessage = document.getElementById("tooLowMessage");
        let youLostMessage = document.getElementById("youLostMessage");
        let numberInput = document.getElementById("numberInput");
        let numbersUsed = document.getElementById("numbersUsed");
        let correctNumber = document.getElementById("correctNumber");
        let printAnswer = document.getElementById("printAnswer");

        //prints numbers previously checked by user
        numbersUsed.innerHTML += userNumber + " ";
        //adds the app generated number - the "answer" to the page
        printAnswer.innerHTML = answer;
        //clears the input field
        document.getElementById("userNumber").value = "";
        //updates number of attempts left
        attempts = parseInt(attempts) - 1;
        document.getElementById("attemptsLeft").innerHTML = attempts;

        //performs the comparison of input with answer and gives user proper feedback
        if (userNumber == answer) {
            setTimeout(function () {
                resultsMessage.style.display = "block";
                correctNumber.style.display = "block";
                winMessage.style.display = "block";
                tooHighMessage.style.display = "none";
                tooLowMessage.style.display = "none";
                youLostMessage.style.display = "none";
                numberInput.style.display = "none";
                tryAgain.style.display = "block";
            }, 100);
        } else if (!attempts) {
            setTimeout(function () {
                resultsMessage.style.display = "block";
                correctNumber.style.display = "block";
                winMessage.style.display = "none";
                tooHighMessage.style.display = "none";
                tooLowMessage.style.display = "none";
                youLostMessage.style.display = "block";
                numberInput.style.display = "none";
                tryAgain.style.display = "block";
            }, 100);
        } else if (userNumber < answer) {
            setTimeout(function () {
                resultsMessage.style.display = "block";
                correctNumber.style.display = "none";
                winMessage.style.display = "none";
                tooHighMessage.style.display = "none";
                tooLowMessage.style.display = "block";
                youLostMessage.style.display = "none";
                numberInput.style.display = "block";
                tryAgain.style.display = "none";
            }, 100);
        } else {
            setTimeout(function () {
                resultsMessage.style.display = "block";
                correctNumber.style.display = "none";
                winMessage.style.display = "none";
                tooHighMessage.style.display = "block";
                tooLowMessage.style.display = "none";
                youLostMessage.style.display = "none";
                numberInput.style.display = "block";
                tryAgain.style.display = "none";
            }, 100);
        }; //end of conditionals
    }); //end of event listener

    //refreshes the page to start over
    tryAgain.addEventListener("click", function () {
        location.reload()
    });
})()