$(document).ready(function () {

    var valueArray = [];
    var matchNum = 0;
    var playerNum = 0;
    var wins = 0;
    var losses = 0;

    // ------------------------------------Function Declarations------------------------------------------- //

    // random number generator
    function getNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // generate values for crystals
    function crystalVal() {
        for (var a = 0; a < 4; a++) {
            valueArray[a] = getNum(1, 12);
        }
        $("#c1").html(valueArray[0]).hide();
        $("#c2").html(valueArray[1]).hide();
        $("#c3").html(valueArray[2]).hide();
        $("#c4").html(valueArray[3]).hide();
        
    }

    // generate value for player to match
    function matchThis() {
        matchNum = getNum(19, 120);
        $("#currentNum").html(matchNum);
        return matchNum;
    }

    // start/restart game
    function start() {
        playerNum = 0;
        $("#total").html(playerNum);
        crystalVal();
        matchThis();
        $(".slot").empty();
    }

    // evaluate player's input
    function checkOutcome() {
        if (playerNum === matchNum) {
            wins++;
            $("#wins").html(wins);
            start();
        } else if (playerNum > matchNum) {
            losses++;
            $("#losses").html(losses);
            start();
        } else if (playerNum < matchNum) {
            return;
        }
    }


    // ------------------------------------Initialize----------------------------------------------- //

    start();

    // ------------------------------------Event Handlers------------------------------------------- //


    // Button 1
    $("#first").click(function () {
        playerNum += valueArray[0];
        $("#total").html(playerNum);
        checkOutcome();
    });

    // Button 2
    $("#second").click(function () {
        playerNum += valueArray[1];
        $("#total").html(playerNum);
        checkOutcome();
    });

    // Button 3
    $("#third").click(function () {
        playerNum += valueArray[2];
        $("#total").html(playerNum);
        checkOutcome();
    });

    // Button 4
    $("#fourth").click(function () {
        playerNum += valueArray[3];
        $("#total").html(playerNum);
        checkOutcome();
    });

});