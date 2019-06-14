'use strict';

window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categories;         // Array of topics
    var chosenCategory;     // Selected category
    var getHint ;           // Word getHint
    var word ;              // Selected word
    var guess ;             // Guess
    var geusses = [ ];      // Stored guesses
    var lives ;             // Lives
    var counter ;           // Count correct guesses
    var space;              // Number of spaces in word '-'

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scategory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");

