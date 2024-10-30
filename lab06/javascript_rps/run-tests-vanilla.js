import { helloWorld, rps } from "./your-task.js";
import { assertPrint, runAllTests } from "./helpers.js";

function testHelloWorld() {
    return assertPrint(
        helloWorld() === "Hello world!",
        'it returns "Hello world!"',
    );
}

function testPaperBeatsRock() {
    return assertPrint(
        rps("rock", "paper") === "Paper wins!",
        "paper beats rock",
    );
}

function testPaperBeatsRockCommutes() {
    return assertPrint(
        rps("paper", "rock") === "Paper wins!",
        "paper beats rock (flipped)",
    );
}
function testScissorsBeatsPaperCommutes() {
    return assertPrint(
        rps("paper", "scissors") === "Scissors wins!",
        "scissors beats paper (flipped)",
    );
}
function testTie() {
    return assertPrint(rps("paper", "paper") === "Tie!", "paper tie");
}
function testInvalidInput() {
    return assertPrint(rps("ham", "cheese") === "Invalid", "invalid input");
}

// add more test functions here to exhaustively test your rps function...

// Once you have defined each test function, don't forget to
// add the function definition to the test harness:
runAllTests([
    testHelloWorld,
    testPaperBeatsRock,
    testPaperBeatsRockCommutes,
    testScissorsBeatsPaperCommutes,
    testTie,
    testInvalidInput,
]);
