// Create global variables = span id for updating HTML
var hangmanWord = document.getElementById("hangman-word");
var gLetters = document.getElementById("guess-letters");
var gCount = document.getElementById("guess-count");
var wCount = document.getElementById("win-count");

// Set GLobal User Key to ""
var userKey = "";

// Object: hangmanGame - contains themed word list array and all in-game methods
var hangmanGame = {

    // Define hangmanGame variables
    maxGuesses: 10,
    winCount: 0,
    correctGuessCount: 0,
    wrongGuessCount: 0,
    numSpaces: 0,
    randWord: "",
    lowerWord: "",
    storeGuesses: ["Start the game by guessing your first letter."],
    blankWord: [],

    // Valid Key String for Game Constraints
    validKeys: "abcdefghijklmnopqrstuvwxyz",

    // Themed Hangman Game Word List Array
    themeWordList: ["Space Invaders", "Pac Man", "Street Fighter II", "Donkey Kong", "Ms Pac Man", "Asteroids", "Defender", "Galaxian", "Donkey Kong Jr", "Mr Do", "Popeye", "Out Run", "Pump It Up", "NBA Jam", "Gun Fight", "Sega Network Mahjong MJ3", "Hang On", "Dinosaur King", "Wheels Speed Race", "Sega Network Mahjong MJ2", "Donkey Kong 3", "Sangokushi Taisen 2", "Initial D Arcade Stage 4", "Mario Bro", "Dance Dance Revolution", "Zoo Keeper", "Initial D Arcade Stage", "World Club Champion Football", "Mortal Kombat", "Jungle Hunt", "Scramble", "Mushiking King of the Beetles", "Mahjong Fight Club 3", "Super Cobra", "Oshare Majo Love and Berry", "Centipede", "Shining Force Cross", "Pengo", "Sangokushi Taisen", "Dragons Lair", "Mortal Kombat II", "Pole Position", "Border Break", "Dig Dug", "Tempest", "TV Basketball", "The House of the Dead 4", "Radar Scope", "Tron", "Sengoku Taisen", "Dragon Quest  Monster Battle Road", "Q*bert", "Robotron 2084", "Samba de Amigo", "Asteroids Deluxe", "Missile Command", "Berzerk", "Sangokushi Taisen 3", "Pong", "Lord of Vermilion", "Sega Network Mahjong MJ4", "Kangaroo", "Battlezone", "Stargate", "Space Duel", "Big Buck Hunter", "Snake Pit", "Bagman", "Big Buck Safari", "Hard Drivin", "Gauntlet", "Sega Network Mahjong MJ5", "Millipede", "Race Drivin", "Time Traveler", "Space Ace", "Xevious", "Silver Strike Live", "H2Overdrive", "Atari Football", "Final Lap", "Paperboy", "Star Wars", "Beatmania", "Sprint 2", "Championship Sprint", "Pole Position II", "Breakout", "Sea Wolf", "Lunar Lander", "Super Sprint", "Marble Madness", "Sea Wolf II", "Rolling Thunder", "Tetris", "Arabian", "Terminator Salvation", "Blasteroids", "Super Breakout", "Pac Mania", "Indiana Jones and the Temple of Doom", "Four Trax", "Assault", "Gauntlet II", "Guitar Hero Arcade", "Drag Race", "Night Driver", "I Robot", "RBI Baseball", "Computer Space", "Death Race", "Dunk Shot", "Star Wars Return of the Jedi", "Dragon Spirit", "Triple Hunt", "Street Fighter", "Pac Man Clones", "Mario", "Golden Tee Golf", "Starhorse", "Bemani", "Sega Network Mahjong", "Sprint", "Mushiking", "Mahjong Fight Club", "Love and Berry"],

    // Call newGame on Start, Game Win, or Game Loss
    newGame: function () {

        // Reset hangmanGame variables
        this.maxGuesses = 10;
        this.storeGuesses = [];
        this.blankWord = [];
        this.correctGuessCount = 0;
        this.wrongGuessCount = 0;
        this.numSpaces = 0;
        this.randWord = "";
        this.lowerWord = "";
        this.storeGuesses = ["Start the game by guessing your first letter."];
        this.blankWord = [];

        // Update HMTL content with each newGame
        document.getElementById("guess-count").innerText = this.maxGuesses;
        document.getElementById("win-count").innerText = this.winCount;
        document.getElementById("guess-letters").innerText = this.storeGuesses;
        document.getElementById("hangman-word").innerText = "";

        // Call startGame to generate random hangman word and to play that word
        hangmanGame.startGame();

    },

    // startGame - generate random word for this game instance
    startGame: function () {

        // Console log that game is started
        //console.log("Game Started");
        //console.log("-------------");

        this.storeGuesses.pop();

        // Store random word from word list array
        this.randWord = this.themeWordList[Math.floor(Math.random() * this.themeWordList.length)];
        
        console.log("Random Word: " + this.randWord);

        // Convert random word toLowerCase
        this.lowerWord = this.randWord.toLowerCase();

        //console.log("Lower Case Word: " + this.lowerWord);

        // Create blanks in displayWord
        for (var i = 0; i < this.randWord.length; i++) {
            if (this.randWord.charAt(i) != " ") {
                this.blankWord.push("_");
            } else {
                this.blankWord.push("\xa0");
                this.numSpaces++;
            }
        };

        //console.log("Blank Word: " + this.blankWord.join(" "));

        // Update hangman word with blanks to give user reference to the word
        document.getElementById("hangman-word").innerText = this.blankWord.join(" ");

        // Check above console logs to confirm random word generated
        //console.log("-------------");
        //console.log("Random word should be generated by now.");

    },

    // Check guess for valid-ness
    checkGuess: function (userKey, storeGuesses) {

        var keyAlreadyGuessed = false;

        // Check if valid key input
        if (hangmanGame.validKeys.includes(userKey)) {

            // Check if key has already been pressed
            for (var k = 0; k < storeGuesses.length; k++) {
                if (userKey === storeGuesses[k]) {
                    keyAlreadyGuessed = true;
                }
            }

            // If key has already been guessed logic statements
            if (keyAlreadyGuessed === true) {

                // If guessed already, alert user that key has already been guessed
                alert("--- Pick a different letter, you've already guessed this letter ---");
                //console.log("--- PICK A DIFFERENT KEY --- ALREADY GUESSED ---");

            } else {

                // If not guessed, alert user that we are checking their guess vs the word
                //alert("--- Awesome, lets check this letter. Click OK.");
                //console.log("--- GOOD KEY, LET'S CHECK IF IN WORD ---")
                hangmanGame.checkWord(userKey, hangmanGame.maxGuesses, hangmanGame.lowerWord);
            }

        } else {

            // If not valid, alert user to enter valid alphabet letter
            alert("--- Bummer, you didn't choose a valid letter. Try again. ---");
            //console.log("--- CHOOSE AGAIN --- NOT A VALID KEY");
        }

    },

    //checkGuess: function (getMaxGuess, getWord) {
    checkWord: function (getUserKey, getMaxGuess, getWord) {

        // Define checkWord variables
        var ifMatch = 0;
        var ifNoMatch = 0;
        var wordLength = getWord.length;
        var wordNoSpacesCnt = wordLength - hangmanGame.numSpaces;
        var remainingGuesses = getMaxGuess - hangmanGame.wrongGuessCount;

        // Console log that checkGuess properly called
        // console.log("checkWord properly called");
        // console.log("----------");
        // console.log("Current Word to Guess: " + getWord);
        // console.log("Current User Guess Passed from getKey: " + getUserKey);
        // console.log("Current Guess Remaining Count: " + remainingGuesses);
        // console.log("Word Length: " + getWord.length);
        // console.log("Word Length No Spaces: " + wordNoSpacesCnt);
        // console.log("Correct Guess Count Before: " + hangmanGame.correctGuessCount);
        // console.log("Wrong Guess Count Before: " + hangmanGame.wrongGuessCount);
        // console.log("Before: ifNoMatch = " + ifNoMatch);
        // console.log("----------");

        // Store and display guessed letter
        this.storeGuesses.push(getUserKey);
        document.getElementById("guess-letters").innerText = this.storeGuesses.join(" ");

        // Search current Hangman word for guessed input from user
        for (j = 0; j < wordLength; j++) {

            // if correct guess - update word blanks, increase correctGuessCount, increase ifMatch
            if (getUserKey === getWord.charAt(j)) {

                //console.log("User Guess Match: " + getUserKey);
                this.blankWord[j] = getUserKey;
                console.log(this.blankWord);
                document.getElementById("hangman-word").innerText = this.blankWord.join(" ");
                this.correctGuessCount++;
                ifMatch++;
            
            // else if wrong - increase ifNoMatch
            } else {
                //console.log("NO MATCH KEY: " + getUserKey);
                ifNoMatch++;
            }
        };

        // Check if wrong guess and decrease remaining guesses 
        if ((ifMatch === 0) && (ifNoMatch > 0)) {
            this.wrongGuessCount++;
            remainingGuesses = getMaxGuess - this.wrongGuessCount;
            document.getElementById("guess-count").innerText = remainingGuesses;
        };


        // Console log that checkGuess ran properly
        // console.log("After: ifNoMatch = " + ifNoMatch);
        // console.log("Correct Guess Count After: " + hangmanGame.correctGuessCount);
        // console.log("Wrong Guess Count After: " + hangmanGame.wrongGuessCount);
        // console.log("Remaining Guess Count After: " + remainingGuesses);
        // console.log("--- Checking Win or Loss ---")

        // Check if last guessed letter triggers a WIN, LOSS, or CONTINUE PLAYING
        hangmanGame.checkWinLoss(hangmanGame.correctGuessCount, hangmanGame.wrongGuessCount, wordNoSpacesCnt);

    },


    // Check if last guessed letter triggers a WIN, LOSS, or CONTINUE PLAYING
    checkWinLoss: function (correctGuessCount, wrongGuessCount, wordNoSpacesCnt) {

        // If all letters guessed, alert user that they won
        if (correctGuessCount === wordNoSpacesCnt) {

            console.log("YOU WIN THE GAME");
            console.log("--- NEW GAME STARTED ---");
            console.log(hangmanGame.randWord);
            
            alert("YOU WIN!! Press OK to start a new game!");

            hangmanGame.winCount++;
            document.getElementById("win-count").innerText = hangmanGame.winCount;
            hangmanGame.newGame();

        // If no more guesses, alert user that they lost
        } else if (wrongGuessCount === hangmanGame.maxGuesses) {

            console.log("YOU LOSE THE GAME");
            console.log("--- NEW GAME STARTED ---");
            hangmanGame.newGame();
            alert("YOU LOSE!! Press OK to start a new game!");

        // Keep playing the game if word not guessed and guessed remaining
        } else {

            console.log("--- KEEP PLAYING ---");
        }

    },

};

// Research how to run 1 onkeyup prior to starting another onkeyup
// window.onkeyup = function start () {
//     hangmanGame.startGame();

// }

// .addEventListener

// Start a game session
hangmanGame.newGame();

// Event listener, check for key pressed, then start game
window.onkeyup = function (keyPressed) {

    //onsole.log("Current Key Pressed: " + keyPressed.key.toLowerCase());

    // Store most recent key press
    userKey = keyPressed.key.toLowerCase();

    //console.log("User Guess Before Check Guess: " + userKey);
    //console.log("----------");

    // Pass most recent key press, and stored guesses to checkGuess
    hangmanGame.checkGuess(userKey, hangmanGame.storeGuesses);
    
};