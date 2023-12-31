let whosTurn = "X"  // This tracks whose play it is
let turn = 1;  // This keeps track of the play number for peanut gallery comments

// Pass the ID of the square that was played.
function play(myID) {
    let myVal = document.getElementById("" + myID + "").value;
    myVal = String(myVal)
// Get the value
// alert(myVal);
// alert(typeof myVal);

// See if the square was already played
    if (myVal == "X" || myVal == "O") {
        alert("This square has been taken, dummy. Do you understand how tic tac toe works? Go again.")
        return
    }

// See who is playing so you know whether to place an X or O in the square.
// Write who's turn it is
    if (whosTurn == "X") {
        document.getElementById("" + myID + "").value = "X";
        whosTurn = "O"
        document.getElementById("myPlayer").innerHTML = "O's turn.";
    } else {
        document.getElementById("" + myID + "").value = "O";
        whosTurn = "X";
        document.getElementById("myPlayer").innerHTML = "X's turn.";
    }

    // Check to see if there is a winner
    winCheck(myID);
}

function winCheck(myID) {
// Check the win patterns after each play; 3 rows, 3 columns, 2 diagonal * 2 (X & O)
// If no winner is found, call sendRandoMessage()
// If I find a winner, call markWin() and youWon().

    /* ROWS X */
    if ((document.getElementById("b1").value == "X") && (document.getElementById("b2").value == "X") && (document.getElementById("b3").value == "X")) {
        markWin("b1", "b2", "b3");
        youWon("X");
    } else if ((document.getElementById("b4").value == "X") && (document.getElementById("b5").value == "X") && (document.getElementById("b6").value == "X")) {
        markWin("b4", "b5", "b6");
        youWon("X");
    } else if ((document.getElementById("b7").value == "X") && (document.getElementById("b8").value == "X") && (document.getElementById("b9").value == "X")) {
        markWin("b7", "b8", "b9");
        youWon("X");

        /* COLUMNS X */
    } else if ((document.getElementById("b1").value == "X") && (document.getElementById("b4").value == "X") && (document.getElementById("b7").value == "X")) {
        markWin("b1", "b4", "b7");
        youWon("X");
    } else if ((document.getElementById("b2").value == "X") && (document.getElementById("b5").value == "X") && (document.getElementById("b8").value == "X")) {
        markWin("b2", "b5", "b8");
        youWon("X");
    } else if ((document.getElementById("b3").value == "X") && (document.getElementById("b6").value == "X") && (document.getElementById("b9").value == "X")) {
        markWin("b3", "b6", "b9");
        youWon("X");

        /* CRISS CROSS BOSS X */
    } else if ((document.getElementById("b1").value == "X") && (document.getElementById("b5").value == "X") && (document.getElementById("b9").value == "X")) {
        markWin("b1", "b5", "b9");
        youWon("X");
    } else if ((document.getElementById("b3").value == "X") && (document.getElementById("b5").value == "X") && (document.getElementById("b7").value == "X")) {
        markWin("b3", "b5", "b7");
        youWon("X");

        /* ROWS O */
    } else if ((document.getElementById("b1").value == "O") && (document.getElementById("b2").value == "O") && (document.getElementById("b3").value == "O")) {
        markWin("b1", "b2", "b3");
        youWon("O");
    } else if ((document.getElementById("b4").value == "O") && (document.getElementById("b5").value == "O") && (document.getElementById("b6").value == "O")) {
        markWin("b4", "b5", "b6");
        youWon("O");
    } else if ((document.getElementById("b7").value == "O") && (document.getElementById("b8").value == "O") && (document.getElementById("b9").value == "O")) {
        markWin("b7", "b8", "b9");
        youWon("O");

        /* COLUMNS  0 */
    } else if ((document.getElementById("b1").value == "O") && (document.getElementById("b4").value == "O") && (document.getElementById("b7").value == "O")) {
        markWin("b1", "b4", "b7");
        youWon("O");
    } else if ((document.getElementById("b2").value == "O") && (document.getElementById("b5").value == "O") && (document.getElementById("b8").value == "O")) {
        markWin("b2", "b5", "b8");
        youWon("O");
    } else if ((document.getElementById("b3").value == "O") && (document.getElementById("b6").value == "O") && (document.getElementById("b9").value == "O")) {
        markWin("b3", "b6", "b9");
        youWon("O");

        /* CRISS CROSS BOSS 0 */
    } else if ((document.getElementById("b1").value == "O") && (document.getElementById("b5").value == "O") && (document.getElementById("b9").value == "O")) {
        markWin("b1", "b5", "b9");
        youWon("O");
    } else if ((document.getElementById("b3").value == "O") && (document.getElementById("b5").value == "O") && (document.getElementById("b7").value == "O")) {
        markWin("b3", "b5", "b7");
        youWon("O");
    } else {
        sendRandoMessage()
    }
}

// This function is no longer used.
// Uppercase the input
// Check to see if user entered an "X" or "O" or something else
function checkInput(myID) {
    let x = document.getElementById("" + myID + "").value;
    x = x.toUpperCase();

    if (x == "X" || x == "O") {
        document.getElementById("" + myID + "").value = x; // Uppercase it
    } else {
        smackTalk = "Do you know what an 'X' looks like?"
        document.getElementById("mySmackTalk").innerHTML = smackTalk;
    }
}

// Just send some random smack talk during game
function sendRandoMessage() {

    // let rando = Math.floor(Math.random() * 8);
    let smackTalk = "";
    // alert(turn);
    
    if (turn == 1) {
        smackTalk = "Definitely not the BEST first move I've seen."
    } else if (turn == 2) {
        smackTalk = "Do you even know HOW TO PLAY Tic Tac Toe?"
    } else if (turn == 3) {
        smackTalk = "Did you take your meds today?"
    } else if (turn == 4) {
        smackTalk = "Is that your FINAL ANSWER?"
    } else if (turn == 5) {
        smackTalk = "You'd be unstoppable if you had a brain!"
    } else if (turn == 6) {
        smackTalk = "It's ok, you're Probably used to losing!"
    } else if (turn == 7) {
        smackTalk = "You make a pet rock look smart!"
    } else if (turn == 8) {
        smackTalk = "You really think you're going to make a career of this?!"
    } else if (turn == 9) {
        smackTalk = "Sass left over - please ask!"        
    } else {
        // do nothing
    }
    turn += 1;

    document.getElementById("mySmackTalk").innerHTML = smackTalk;
}

// Pass in the winning squares
function markWin(a, b, c) {
    document.getElementById("" + a + "").value = "-";
    document.getElementById("" + b + "").value = "-";
    document.getElementById("" + c + "").value = "-";
}

// Send an alert when someone wins
// Set a five second timeout
// Call refreshOnGameEnd
function youWon(whoWon) {
    // alert(whoWon + ", YOU WON!")
    $('#myModal').modal('show');
    $("#myModal .modal-title").text("");
    $("#myModal .modal-body").text( whoWon + ', you won!');
    setTimeout(refreshOnGameEnd, 5000);
}

// Restart the game by reloading the page
function refreshOnGameEnd() {
    location.reload();
}


