// Create hangman game objects & functions

// Event listener, check for key pressed, then start game
window.onload = function () {

    console.log("On Load Called Properly");

    //Check if any key is pressed to start the game
    //checkStartGame();

}

/* Currently non working code to check if any key is pressed to start the game
function checkStartGame() {
    console.log("No Key Pressed");
    //document.body.addEventListener("keyup", startGame());
}
*/

// Create global variables
var hangmanWord = document.getElementById("hangman-word");
var guessLetters = document.getElementById("guess-letters");
var guessCount = document.getElementById("guess-count");
var winCount = document.getElementById("win-count");

// Check that getElementById is grabbing correct Id.innerText
console.log(hangmanWord.innerText);
console.log(guessLetters.innerText);
console.log(guessCount.innerText);
console.log(winCount.innerText);

// Object: hangmanGame - contains themed word list array and all in-game methods
var hangmanGame = {

    // Themed Hangman Game Word List Array
    themeWordList: ["Space Invaders", "Pac Man", "Street Fighter II", "Donkey Kong", "Ms Pac Man", "Asteroids", "Defender", "Galaxian", "Donkey Kong Jr", "Mr Do", "Popeye", "Out Run", "Pump It Up", "NBA Jam", "Gun Fight", "Sega Network Mahjong MJ3", "Hang On", "Dinosaur King", "Wheels Speed Race", "Sega Network Mahjong MJ2", "Donkey Kong 3", "Sangokushi Taisen 2", "Initial D Arcade Stage 4", "Mario Bro", "Dance Dance Revolution", "Zoo Keeper", "Initial D Arcade Stage", "World Club Champion Football", "Mortal Kombat", "Jungle Hunt", "Scramble", "Mushiking King of the Beetles", "Mahjong Fight Club 3", "Super Cobra", "Oshare Majo Love and Berry", "Centipede", "Shining Force Cross", "Pengo", "Sangokushi Taisen", "Dragon's Lair", "Mortal Kombat II", "Pole Position", "Border Break", "Dig Dug", "Tempest", "TV Basketball", "The House of the Dead 4", "Radar Scope", "Tron", "Sengoku Taisen", "Dragon Quest  Monster Battle Road", "Q*bert", "Robotron 2084", "Samba de Amigo", "Asteroids Deluxe", "Missile Command", "Berzerk", "Sangokushi Taisen 3", "Pong", "Lord of Vermilion", "Sega Network Mahjong MJ4", "Kangaroo", "Battlezone", "Stargate", "Space Duel", "Big Buck Hunter", "Snake Pit", "Bagman", "Big Buck Safari", "Hard Drivin", "Gauntlet", "Sega Network Mahjong MJ5", "Millipede", "Race Drivin", "Time Traveler", "Space Ace", "Xevious", "Silver Strike Live", "H2Overdrive", "Atari Football", "Final Lap", "Paperboy", "Star Wars", "Beatmania", "Sprint 2", "Championship Sprint", "Pole Position II", "Breakout", "Sea Wolf", "Lunar Lander", "Super Sprint", "Marble Madness", "Sea Wolf II", "Rolling Thunder", "Tetris", "Arabian", "Terminator Salvation", "Blasteroids", "Super Breakout", "Pac Mania", "Indiana Jones and the Temple of Doom", "Four Trax", "Assault", "Gauntlet II", "Guitar Hero Arcade", "Drag Race", "Night Driver", "I Robot", "RBI Baseball", "Computer Space", "Death Race", "Dunk Shot", "Star Wars Return of the Jedi", "Dragon Spirit", "Triple Hunt", "Street Fighter", "Pac Man Clones", "Mario", "Golden Tee Golf", "Starhorse", "Bemani", "Sega Network Mahjong", "Sprint", "Mushiking", "Mahjong Fight Club", "Love and Berry"],

    // Method: startGame - generate random word for this game instance
    startGame: function () {

        // Console log that game is started
        console.log("Game Started");

        // Store random word from word list array
        var randWord = hangmanGame.themeWordList[Math.floor(Math.random() * hangmanGame.themeWordList.length)];

        // Convert random word toLowerCase
        var lowerWord = randWord.toLowerCase();

        // Display blanks for random word
        var displayWord = "";

        for (var i = 0; i < randWord.length; i++) {
            if (randWord.charAt(i) != " ") {
                displayWord = displayWord + "_ ";
            } else {
                //CSS styling needed to correct spacing - " | " used for now
                displayWord = displayWord + " | ";
            }
        };

        // Check display word returning correct
        console.log(displayWord);

        document.getElementById("hangman-word").innerText = displayWord;
        
        // Test random word correctly generated and toLowerCase
        console.log(randWord);
        console.log(lowerWord);
    },  

}

// Check guess vs hangman word
// While remaining guess count > 0 or if guess count < max guesses
// if correct - update word blanks - keep remaining guess count same - display guessed letter
// if wrong - keep word blanks same - decrease remaining guess count - display guessed letter

// Event Listener - get key - user guess - store char (toLowerCase)

//Remove when checkStartGame running properly
//hangmanGame.startGame(hangmanWord);
hangmanGame.startGame();

// Run Win Sequence
// Win music, reset variables, restart game