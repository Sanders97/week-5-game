

window.onload = function() {
  $("#start").on("click", countdown.start);
  $("#stop").on("click", countdown.stop);
};

var questions = ["q1", "q2", "q3", "q4", "q5"];

var countdown = {
  time: 30,
  reset: function() {
    countdown.time = 30;
    // Changes the "display" div to "30:00."
    $("#display").text("30:00");
  },
  start: function() {
    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(countdown.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    // Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {
    //reduces time by -1
    countdown.time--;
    //  Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
    // Use the variable created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  nextQuestion: function(){
// start a timer until the next question is selected
countdown.time = 5;
countdown.time --;
for (var i = 0; i < questions.length; i++) {
  questions[i]
}

  }
};


var score;
score = 0;
alert("js super hero quiz")

var q1;
countdown.start;
q1 = prompt ("who is the leader of the Teen Titans?")
    if (q1== "Robin"){
      score++;
      countdown.stop;
      alert("Correct, good job!")
      nextQuestion;
    }
    else {
      countdown.stop;
      alert("sorry, thats incorrect.")
      nextQuestion;
    }

var q2;
countdown.start;
q2 = prompt ("What hero is the self proclaimed 'strongest of all'?")
    if (q2== "Hulk"){
      score++;
      countdown.stop;
      alert("Correct, good job!")
      nextQuestion;

    }
    else {
      countdown.stop;
      alert("sorry, thats incorrect.")
      nextQuestion;
    }

    var q3;
    countdown.start;
q3 = prompt ("What super hero is 'faster than a speeding bullet'?")
    if (q3== "Superman"){
      score++;
      countdown.stop;
      alert("Correct, good job!")
      nextQuestion;

    }
    else {
      countdown.stop;
      alert("sorry, thats incorrect.")
      nextQuestion;
    }

    var q4;
    countdown.start;
q4 = prompt ("Who owns Stark industries?")
    if (q4== "Tony Stark"){
      score++;
      countdown.stop;
      alert("Correct, good job!")
      nextQuestion;

    }
    else {
      countdown.stop;
      alert("sorry, thats incorrect.")
      nextQuestion;
    }

    var q5;
    countdown.start;
q5 = prompt ("Which anti-hero is known for his 4th wall breaks?")
    if (q5== "Deadpool"){
      score++;
      countdown.stop;
      alert("Correct, good job!")
      nextQuestion;

    }
    else {
      countdown.stop;
      alert("sorry, thats incorrect.")
      nextQuestion;
    }




 </script>
