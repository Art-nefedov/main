var userChoice; //global scope variables
var computerChoice;

var getChoices = function() { //функция, которая определяет случайным образом выбор одного из 4х вариантов выбора для компьютера и ввод юзера
    userChoice = prompt("Do you choose Rock, Paper, Scissors, Dog or Rope?");
    computerChoice = Math.random();
    if (computerChoice < 0.21) {
    	computerChoice = "rock";
    } else if(computerChoice < 0.41) {
    	computerChoice = "paper";
    } else if(computerChoice < 0.61) {
        computerChoice = "scissors";
    } else if(computerChoice < 0.81) {
        computerChoice = "dog";
    } else {
        computerChoice = "rope";
    }
        console.log("Computer: " + computerChoice);
};

var compare = function(choice1,choice2) { //функция, которая сравнивает выбор компьютера и юзера и определяет победную комбинацию
    if (choice1 === choice2) {
        alert("The result is a tie!");
    }
    else if (choice1 === "rock") {

        if (choice2 === "scissors") {
            alert("rock wins");
        }
        else {
            alert("paper wins");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            alert("paper wins");
        }
        else {
            alert("paper wins");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            alert("rock wins");
        }
        else {
            alert("scissors wins");
        }
    }
    else if (choice1 === "rope") {
        if (choice2 === "rock") {
            alert("rock wins");
        }
        else if (choice2 === "scissors") {
            alert("scissors wins");
        }
        else {
            alert("rope wins");
        }
    }
    else if (choice1 === "dog") {
        if (choice2 === "rope") {
            alert("rope wins");
        }
        else if (choice2 === "paper") {
            alert("paper wins");
        }
        else {
            alert("dog wins");
        }
    }
};
function main() {//главная функция, окончание или продолжение игры, вызов других функций

    var game = prompt("Do you want to play? Yes or No");
        if (game === "Yes") {
            getChoices();
            compare (computerChoice, userChoice);
        } else {
            alert("Thank you");
        }
}
main();//вызов главной функции
