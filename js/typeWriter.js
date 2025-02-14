
let i = 0;
let text1 = "Happy Valentine's Day, Babygirl 💗";
let text2 = "Chellamae, from the moment I found your email and got you back, to every second of this past year, you’ve been the most beautiful, infuriating, hilarious, dirty, loving, and completely irresistible part of my life. We’ve laughed, argued, teased, and fallen apart only to come back stronger, always choosing each other.";
let text3 = "You are my viking queen 👸🏻, my lil baby 🍼, my best friend 🤝, my filthy slut 🍯, and my entire heart 🫀. I love you more than words can hold, more than distance can stretch, more than time can measure. And no matter what, I will always, always be yours ♾️💕"
let speed = 65;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
