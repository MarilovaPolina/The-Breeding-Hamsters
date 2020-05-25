
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

//friend 1
	function callToFriend1(){
		var menuOfHappy1=document.getElementById("menuCall1");
		var menuOfHappy2=document.getElementById("menuCall2");
		var menuOfHappy3=document.getElementById("menuCall3");
		var menuOfHappy4=document.getElementById("menuCall4");
		if(menuOfHappy1.style.display == 'block') {
      		menuOfHappy1.style.display = 'none';
	    }
	    else {
	      menuOfHappy1.style.display = 'block';

		    if(menuOfHappy2.style.display == 'block') {
	      		menuOfHappy2.style.display = 'none';
		    	}
		    if(menuOfHappy3.style.display == 'block') {
	      		menuOfHappy3.style.display = 'none';
		    	}
		    if(menuOfHappy4.style.display == 'block') {
	      		menuOfHappy4.style.display = 'none';
		    	}
		}
	}

	function closeOnCross1(){
		var menuOfHappy1=document.getElementById("menuCall1");
		if(menuOfHappy1.style.display == 'block') {
      		menuOfHappy1.style.display = 'none';
	    }
	}



//friend 2
	function callToFriend2(){
		var menuOfHappy1=document.getElementById("menuCall1");
		var menuOfHappy2=document.getElementById("menuCall2");
		var menuOfHappy3=document.getElementById("menuCall3");
		var menuOfHappy4=document.getElementById("menuCall4");
		if(menuOfHappy2.style.display == 'block') {
      		menuOfHappy2.style.display = 'none';
	    }
	    else {
	      menuOfHappy2.style.display = 'block';

		    if(menuOfHappy1.style.display == 'block') {
	      		menuOfHappy1.style.display = 'none';
		    	}
		    if(menuOfHappy3.style.display == 'block') {
	      		menuOfHappy3.style.display = 'none';
		    	}
		    if(menuOfHappy4.style.display == 'block') {
	      		menuOfHappy4.style.display = 'none';
		    	}
		}
	}

	function closeOnCross2(){
		var menuOfHappy2=document.getElementById("menuCall2");
		if(menuOfHappy2.style.display == 'block') {
      		menuOfHappy2.style.display = 'none';
	    }
	}

//friend 3
		function callToFriend3(){
		var menuOfHappy1=document.getElementById("menuCall1");
		var menuOfHappy2=document.getElementById("menuCall2");
		var menuOfHappy3=document.getElementById("menuCall3");
		var menuOfHappy4=document.getElementById("menuCall4");
		if(menuOfHappy3.style.display == 'block') {
      		menuOfHappy3.style.display = 'none';
	    }
	    else {
	      menuOfHappy3.style.display = 'block';

		    if(menuOfHappy1.style.display == 'block') {
	      		menuOfHappy1.style.display = 'none';
		    	}
		    if(menuOfHappy2.style.display == 'block') {
	      		menuOfHappy2.style.display = 'none';
		    	}
		    if(menuOfHappy4.style.display == 'block') {
	      		menuOfHappy4.style.display = 'none';
		    	}
		}
	}

	function closeOnCross3(){
		var menuOfHappy3=document.getElementById("menuCall3");
		if(menuOfHappy3.style.display == 'block') {
      		menuOfHappy3.style.display = 'none';
	    }
	}

//friend 4
	function callToFriend4(){
		var menuOfHappy1=document.getElementById("menuCall1");
		var menuOfHappy2=document.getElementById("menuCall2");
		var menuOfHappy3=document.getElementById("menuCall3");
		var menuOfHappy4=document.getElementById("menuCall4");
		if(menuOfHappy4.style.display == 'block') {
      		menuOfHappy4.style.display = 'none';
	    }
	    else {
	      menuOfHappy4.style.display = 'block';

		    if(menuOfHappy1.style.display == 'block') {
	      		menuOfHappy1.style.display = 'none';
		    	}
		    if(menuOfHappy2.style.display == 'block') {
	      		menuOfHappy2.style.display = 'none';
		    	}
		    if(menuOfHappy3.style.display == 'block') {
	      		menuOfHappy3.style.display = 'none';
		    	}
		}
	}

	function closeOnCross4(){
		var menuOfHappy4=document.getElementById("menuCall4");
		if(menuOfHappy4.style.display == 'block') {
      		menuOfHappy4.style.display = 'none';
	    }
	}

//happiness
	var numberOfHappy;
	var mood =11;
	happiness();
	function happiness(){
		mood-=1;
		if (mood<1){
			alert('-50$');
			mood+=10;
			numberOfHappy = setTimeout(happiness, 5000);
	}
		else {
		numberOfHappy = setTimeout(happiness, 5000);
		}
		document.getElementById('happy').innerHTML = mood;
		document.getElementById('happy1').innerHTML = mood;

		if (mood!=0) {
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}	
	}
	
	function upMood1(){
		if(mood<=9){
			mood+=1;
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}
	}

	function upMood2(){
		if(mood<=7){
			mood+=2;
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}

		else{
			mood=(mood+2)-((mood+2)-10);
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}
	}

	function upMood4(){
		if(mood<=5){
			mood+=4;
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}

		else{
			mood=(mood+4)-((mood+4)-10);
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}
	}

	function upMood5(){
		if(mood<=4){
			mood+=5;
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}

		else{
			mood=(mood+5)-((mood+5)-10);
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}
	}

	function upMood6(){
		if(mood<=3){
			mood+=6;
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}

		else{
			mood=(mood+6)-((mood+6)-10);
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}
	}

	function upMood7(){
		if(mood<=2){
			mood+=7;
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}

		else{
			mood=(mood+7)-((mood+7)-10);
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}
	}

	function upMood9(){
		if(mood<=0){
			mood+=9;
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}

		else{
			mood=(mood+9)-((mood+9)-10);
			document.getElementById('happy').innerHTML = mood;
			document.getElementById('happy1').innerHTML = mood;
			document.getElementById("scale").innerHTML=("<img src='"+"scales/"+mood+".png' "+" class='scaleStyle' "+"'>");
		}
	}

