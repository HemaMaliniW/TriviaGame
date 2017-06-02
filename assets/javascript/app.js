// TriviaGame
	 // Use a FOR loop function 

	 // Use Append 
	 // Use Jquery 

	// Set a counter
    var number = 100;
    var score = 0;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);
    $("#trueButton1").on("click", function(){
      answerQuestion(true);
    $("#falseButton1").on("click", function(){
      answerQuestion(false);
    })
    })
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
      function answerQuestion(value){
        console.log("hi")
        if (value == true){
          score++;
        }
       $("#score").html("<h2>" + score + "</h2>");

      }
      
    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

