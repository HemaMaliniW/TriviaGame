

	$("button").on("click",function(){
  	// alert("Heloo");
  	console.log(this);
  	console.log(this.getAttribute('value'))
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
    var score = 0;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function updateScore(value){
    if (value == correct){
    score++;
        
     // else (value == incorrect){
     // 	score--;

     	$("#score").html("<h2>" + score + "</h2>");
      // console.log(score)
      }

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

