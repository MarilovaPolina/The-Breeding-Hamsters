
//time
	function printTime() {
	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	document.getElementById('time').innerHTML = hours+":"+mins+":"+secs;
	}
	setInterval(printTime,0, 1000);

//days
	var days=1;
	function daysGo(){
		let list=document.getElementById('mess');
		days++;
		document.getElementById('days').innerHTML ="Days: "+days;

			var element=document.createElement("li");
			element.classList.add('list-group-item');
			element.appendChild(document.createTextNode("NEW DAY: "+days));
			list.appendChild(element);
		
	}
	setInterval(daysGo, 60000);

//money
	var cash=0;

	function raiseMoney(){
		cash++;
		document.getElementById('money').innerHTML ="Your money: "+cash+"$";
	}
	setInterval(raiseMoney, 5000);

	
//child hamsters and buy
	childHamsters=0;
	function buyHamster(){
		if(cash>=2){
			let list=document.getElementById('mess');
			childHamsters+=1;
			cash=cash-2;
			document.getElementById('child-hamsters').innerHTML ="Your little hamsters: "+childHamsters;
			document.getElementById('money').innerHTML ="Your money: "+cash+"$";

			var element=document.createElement("li");
			element.classList.add('list-group-item1');
			element.appendChild(document.createTextNode("You bought a little hamster"));
			list.appendChild(element);	
		}

		else{
			alert("You can buy a little hamster only if you have 20$.");
		}	
	}


//buy food
	food=0;
	function buyFood(){
		if(cash>=1){
			let list=document.getElementById('mess');
			food+=1;
			cash=cash-1;
			document.getElementById('food').innerHTML ="Hamsters food: "+food + " packs";
			document.getElementById('money').innerHTML ="Your money: "+cash+"$";

			var invitation=document.createElement("li");
			invitation.classList.add('list-group-item2');
			invitation.appendChild(document.createTextNode("You bought one pack of feed"));
			list.appendChild(invitation);
	}
		else{
			alert("You can only buy food if you have 10$.");
		}
	}

//give food
	var level=1;
	adultHamsters=1;
	function giveFood(){
		if(food>=1 && childHamsters>=1){
			let list=document.getElementById('mess');
			food-=1;
			childHamsters-=1;
			adultHamsters+=1;
			document.getElementById('food').innerHTML ="Hamsters food: " + food + " packs";
			document.getElementById('child-hamsters').innerHTML ="Your little hamsters: " + childHamsters;
			document.getElementById('adult-hamsters').innerHTML ="Your grown hamsters: " + adultHamsters;

			var element=document.createElement("li");
			element.classList.add('list-group-item3');
			element.appendChild(document.createTextNode("You fed one little hamster and it grew up"));
			list.appendChild(element);
		}

		else{
			alert("You can feed a small hamster only if:\n1) You have at least one small hamster.\n2) You have at least one pack of food.");
		}

//levels
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var a = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var answers = document.getElementById("answers1");
		if(adultHamsters%10==0){
			level+=1;

			var isResizeble = false;
			if(!isResizeble) {

				let list=document.getElementById('mess');
				var element=document.createElement("li");
				element.classList.add('list-group-item4');
				element.appendChild(document.createTextNode("! LEVEL UP !"));
				list.appendChild(element);

				var invitation=document.createElement("li");
				invitation.classList.add('list-group-item5');
				invitation.appendChild(document.createTextNode("KATYA DHJBDJHBJHCBDHCDHJ"));
				list.appendChild(invitation=document.getElementById("myImg"));


					invitation.onclick=function(){
						a.onclick = function(){
					    modal.style.display = "block";
					    modalImg.src = "img/proba.png";
					    captionText.innerHTML = "KATYA tegjngskjsdfk fdjgsdk fgjfdn fjdnbv jn jnbfdnk fdjvnb jdfbknerjv jdfbkclafdlknbf  jdfnbvnmflknb dbf";
					    answers1.onclick=function(){
					    	alert("ok");
					    	modal.style.display = "none";
					    	
					    }

					    answers2.onclick=function(){
					    	alert("no");
					    	modal.style.display = "none";
					    	
					    }
					}
				}
			
			isRezeble = true;
			}
		}
		document.getElementById('levels').innerHTML ="Level: " + level;
	}

//birth 1 hamster
	function birthOneHamsters(){
		if(adultHamsters>=2 && food>=2){
			let list=document.getElementById('mess');
			childHamsters+=1;
			food-=2;
			document.getElementById('child-hamsters').innerHTML ="Your little hamsters: " + childHamsters;
			document.getElementById('food').innerHTML ="Hamsters food: " + food + " packs";
  		document.getElementById("birth1").disabled = true;

  		var element=document.createElement("li");
		element.classList.add('list-group-item');
		element.appendChild(document.createTextNode("Your hamster gave birth to a little hamster! Now the hamster can give birth only the next day"));
		list.appendChild(element);

	setTimeout(function() { 
	document.getElementById("birth1").disabled = false }, 60000);
	}

	else{
		alert("You can only give birth to one hamster if:\n1) There are 2 adult hamsters.\n2) There are 2 packs of food.")
	}
}
//more money!!!!
function MONEY(){
	cash+=50;
	document.getElementById('money').innerHTML ="Your money: "+cash+"$";
}

//level up!!!!
function upUp(){
	level+=10;
	document.getElementById('levels').innerHTML ="Level: " + level;
}

//sell a hamster
	function sellHamster(){
		if(adultHamsters>=2){
		let list=document.getElementById('mess');
		adultHamsters-=1;
		cash=cash+5;
		document.getElementById('adult-hamsters').innerHTML ="Your grown hamsters: "+adultHamsters;
		document.getElementById('money').innerHTML ="Your money: "+cash+"$";

		var element=document.createElement("li");
		element.classList.add('list-group-item');
		element.appendChild(document.createTextNode("You sold a hamster"));
		list.appendChild(element);
		}

		else{
			alert("You can only sell a hamster if you have at least one adult hamster.");
		}
}

//birth 3 hamsters
	function birthThreeHamsters(){
		if(adultHamsters>=4 && food>=4 && level>=3){
			let list=document.getElementById('mess');
			childHamsters+=3;
			food-=4;
			document.getElementById('child-hamsters').innerHTML ="Your little hamsters: " + childHamsters;
			document.getElementById('food').innerHTML ="Hamsters food: " + food + " packs";
  		document.getElementById("birth3").disabled = true;

  		var element=document.createElement("li");
		element.classList.add('list-group-item');
		element.appendChild(document.createTextNode("Your hamster gave birth to three hamsters! Now the hamster can give birth only the next day"));
		list.appendChild(element);

	setTimeout(function() { 
	document.getElementById("birth3").disabled = false }, 60000);
	}
	else{
		alert("You can only give birth to three hamsters if:\n1) There are 4 adult hamsters.\n2) There are 4 packs of food.\n3) Reached level 3.")
	}
}
	
//birth 6 hamsters
	function birthSixHamsters(){
		if(adultHamsters>=6 && food>=6 && level>=6){
			let list=document.getElementById('mess');
			childHamsters+=6;
			food-=6;
			document.getElementById('child-hamsters').innerHTML ="Your little hamsters: " + childHamsters;
			document.getElementById('food').innerHTML ="Hamsters food: " + food + " packs";
  		document.getElementById("birth6").disabled = true;

  		var element=document.createElement("li");
		element.classList.add('list-group-item');
		element.appendChild(document.createTextNode("Your hamster gave birth to six hamsters! Now the hamster can give birth only the next day"));
		list.appendChild(element);

	setTimeout(function() { 
	document.getElementById("birth6").disabled = false }, 60000);
	}
		else{
			alert("You can only give birth to six hamsters if:\n1) There are 6 adult hamsters.\n2) There are 6 packs of food.\n3) Reached level 6.")
		}
	}

//friends	
	function callToFriend1(){
		if(menuCall1.style.display == 'block') {
       menuCall1.style.display = 'none';
	    }
	    else {
	      menuCall1.style.display = 'block';
	    }
	}

		function callToFriend2(){
			const popup = document.querySelector('.pop-up');

			document.onclick = function(e){
    		if ( menuCall2.target.className != 'pop-up' ) {
       		 popup.style.display = 'none';
    		};
		};

		if(menuCall2.style.display == 'block') {
       menuCall2.style.display = 'none';
	    }
	    else {
	      menuCall2.style.display = 'block';
	    }
	}

		function callToFriend3(){
		if(menuCall3.style.display == 'block') {
       menuCall3.style.display = 'none';
	    }
	    else {
	      menuCall3.style.display = 'block';
	    }
	}

		function callToFriend4(){
		if(menuCall4.style.display == 'block') {
       menuCall4.style.display = 'none';
	    }
	    else {
	      menuCall4.style.display = 'block';
	    }
	}

	
