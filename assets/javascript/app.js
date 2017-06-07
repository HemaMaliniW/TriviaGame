

	$("button").on("click",function(){
    //get the value of my CUSTOM clicked attribute
    var clicked = $(this).attr("data-clicked");

    //if the button has not been clicked
    if(clicked == "false"){
        //add a scored based on the value 
        var value = $(this).val();
        var questionNumber = $(this).attr("data-questionNumber");

        updateScore(value, questionNumber);
        
        $(this).attr("data-clicked", "true");
    }
  	// alert("Heloo");
  	console.log(this);
  	console.log(this.getAttribute('value'))
    console.log("Score: " + score);
	});


	// trueButton1 needs to be counted as 1 point

	// if truButton2 is clicked then 0 point

	// function myFunction(){
	// 	var trueButton1 = button;
	// 	if (trueButton1 == true){
	// 		score++;
	// 		} else{
	// 		score--;
	// 	}
	 

	// 	// Set a counter
    var number = 100;
    var score = 8;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function updateScore(value, questionNumber
      ){
      //get the value of my CUSTOM attribute

        if(value == "correct"){
          if(score < 8){
            score++;
          }

          //turn my false button data-clicked attribute to false
          $("#falseButton" + questionNumber).attr("data-clicked", "false");
        }
        else{
          score--;

          //turn my true button data-clicked attribute to false
          $("#trueButton" + questionNumber).attr("data-clicked", "false");
        }

     	$("#score").html("<h2>" + score + "</h2>");
      // console.log(score)
      }

      if ("#score"<8).html("Your Won"+ Playah) {

      } else {
        score>0; ("You Lost!");

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

