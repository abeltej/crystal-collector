$(document).ready(function () {

    var Random;
    reset();

    // var num1 = Math.floor(Math.random() * 11 + 1)
    // var num2 = Math.floor(Math.random() * 11 + 1)
    // var num3 = Math.floor(Math.random() * 11 + 1)
    // var num4 = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    function winner() {
        console.log("You win!");
        wins++;
        $('#numberWins').text(wins);

    }
    function loser() {
        console.log("You lose!");
        losses++;
        $('#numberLosses').text(losses);
    }

    $(".gems").on("click", function(){
        var value = $(this).attr("data-value");
        console.log(value);

        userTotal = userTotal + parseInt(value);
        console.log(userTotal);

        $('#totalCount').text(userTotal);

        if (userTotal === Random) {
            winner();
            reset();
        }
        else if (userTotal > Random) {
            loser();
            reset();
        }
    });

    function reset(){
        Random = Math.floor(Math.random() * 101 + 19);
        userTotal = 0;
        $('#randomNumber').text(Random);
        $('#totalCount').text(userTotal);
        $(".gems").each(function(){
            var random = Math.floor((Math.random() * 11) + 1);
            $(this).attr("data-value", random);
        });
    }

});

