
function disableRadio(radios){
	for (var i=0, iLen=radios.length; i<iLen; i++) {
		radios[i].disabled = true;
	} 
}


function step1(value) {
	var radios = document.querySelectorAll("#input-container input");
	disableRadio(radios);

	if(value=="throughRock"){
		document.getElementById('step2-throughRock').style.display = "block";
		document.getElementById('interactiveText').innerHTML = "<h2>The orc is stunned, but regains control. He begins running towards you again. Will you:</h2>";
	}
	else if(value=="laydown"){
		document.getElementById('interactiveText2').innerHTML = "<h2>Welp, that was quick.  <span class='denger'>You died!</span></h2>";
		document.getElementById('reloadButton').style.display = "block";
	}
	else{

		document.getElementById('interactiveText2').innerHTML = "<h2>You run as quickly as possible, but the orc's speed is too great. You will</h2>";
		document.getElementById('inputContainer').style.display = "block";

	}

}

function step2(value) {
	var radios = document.querySelectorAll("#step2-throughRock input, #step2-run input");
	disableRadio(radios);

	if(value=="throughRock"){
		document.getElementById('interactiveText2').innerHTML = "<h2>You decided to throw another rock, as if the first rock thrown did much damage. The rock flew well over the orcs head. You missed. <span class='denger'>You died!</span></h2>";
		document.getElementById('reloadButton').style.display = "block";
	}
	else if(value=="runtocave"){
		var caveAnswer = prompt("You were hesitant, since the cave was dark and ominous. Before you fully enter, you notice a shiny sword on the ground. Do you pick up a sword. Y/N?");
		
		/* Sword Picked */
		if(caveAnswer == "Y" || caveAnswer == "y" || caveAnswer == "Yes" || caveAnswer == "yes"){
			var caveAnswerA = prompt("What do you do next A. Hide in silence B. Fight C. Run");
			caveAnswerA = caveAnswerA.toUpperCase();

			if(caveAnswerA == "A"){
				document.getElementById('interactiveText3').innerHTML = "<h2>Really? You're going to hide in the dark? I think orcs can see very well in the dark, right? Not sure, but I'm going with YES, so...  <span class='denger'>You died!</span></h2>";	
				document.getElementById('reloadButton').style.display = "block";	
			}
			else if(caveAnswerA == "B"){
				document.getElementById('interactiveText3').innerHTML = "<h2>You laid in wait. The shimmering sword attracted the orc, which thought you were no match. As he walked closer and closer, your heart beat rapidly. As the orc reached out to grab the sword, you pierced the blade into its chest.  <span class='denger'>You survived :)</span></h2>";
				document.getElementById('reloadButton').style.display = "block";		
			}
			else if(caveAnswerA == "C"){
				document.getElementById('interactiveText3').innerHTML = "<h2>As the orc enters the dark cave, you sliently sneak out. You're several feet away, but the orc turns around and sees you running. You run as quickly as possible, but the orc's speed is too great.  <span class='denger'>You Probably die!</span></h2>";	
				document.getElementById('reloadButton').style.display = "block";	
			}
			else{
				alert('You have pressed wrong Character. Refresh the browser to start over');
			}
		}
		/* Sword have not been Picked */
		else if(caveAnswer == "N" || caveAnswer == "n" || caveAnswer == "No" || caveAnswer == "no"){
			var caveAnswerA = prompt("What do you do next A. Hide in silence B. Fight C. Run");
			caveAnswerA = caveAnswerA.toUpperCase();
			
			if(caveAnswerA == "A"){
				document.getElementById('interactiveText3').innerHTML = "<h2>Really? You're going to hide in the dark? I think orcs can see very well in the dark, right? Not sure, but I'm going with YES, so...  <span class='denger'>You died!</span></h2>";	
				document.getElementById('reloadButton').style.display = "block";	
			}
			else if(caveAnswerA == "B"){
				document.getElementById('interactiveText3').innerHTML = "<h2>You should have picked up that sword. You're defenseless. <span class='denger'>You died!</span></h2>";	
				document.getElementById('reloadButton').style.display = "block";	
			}
			else if(caveAnswerA == "C"){
				document.getElementById('interactiveText3').innerHTML = "<h2>As the orc enters the dark cave, you sliently sneak out. You're several feet away, but the orc turns around and sees you running. You run as quickly as possible, but the orc's speed is too great.  <span class='denger'>You Probably die!</span></h2>";	
				document.getElementById('reloadButton').style.display = "block";	
			}
			else{
				alert('You have pressed wrong Character. Refresh the browser to start over');
			}
		}

		else{
			alert('You have pressed wrong Character. Refresh the browser to start over');
		}

	}  /* Run towards a nearby cave finish */

	else if(value=="runabandunded"){
		var caveAnswer = prompt("While frantically running, you notice a rusted sword lying in the mud. You quickly reach down and grab it, but miss. You try to calm your heavy breathing as you hide behind a delapitated building, waiting for the orc to come charging around the corner. You notice a purple flower near your foot. Do you pick it up? Y/N");
		if(caveAnswer == "Y" || caveAnswer == "y" || caveAnswer == "Yes" || caveAnswer == "yes"){
			document.getElementById('interactiveText3').innerHTML = "<h2>You hear its heavy footsteps and ready yourself for the impending orc. <br> You quickly hold out the purple flower, somehow hoping it will stop the orc. It does! The orc was looking for love. <span class='denger'>This got weird, but you survived :)</span></h2>";
			document.getElementById('reloadButton').style.display = "block";
		}
		else if(caveAnswer == "N" || caveAnswer == "n" || caveAnswer == "No" || caveAnswer == "no"){
			document.getElementById('interactiveText3').innerHTML = "<h2>You hear its heavy footsteps and ready yourself for the impending orc. Maybe you should have picked up the flower. <span class='denger'>You died!</span></h2>";
			document.getElementById('reloadButton').style.display = "block";
		}
		else{
			alert('You have pressed wrong Character. Refresh the browser to start over');
		}

	}

	else if(value=="hidebehind"){
		document.getElementById('interactiveText3').innerHTML = "<h2>You're easily spotted.  <span class='denger'>You died!</span></h2>";	
		document.getElementById('reloadButton').style.display = "block";	
	}
	else if(value=="trapped"){
		document.getElementById('interactiveText3').innerHTML = "<h2>You're no match for an orc.   <span class='denger'>You died!</span></h2>";
		document.getElementById('reloadButton').style.display = "block";
	}
	else{
		document.getElementById('interactiveText2').innerHTML = "<h2>You run as quickly as possible, but the orc's speed is too great. You will</h2>";
		document.getElementById('inputContainer').style.display = "block";
		document.getElementById('reloadButton').style.display = "block";
	}

}


