
let i = 0;
let text1 = "Happy 6 Months, Babygirl.";
let text2 = "I want days to feel like months when I'm with you, but months feel like minutes. I promise to love you as I have loved you till now, but I'm afraid I can't keep that promise. For I love you more every passing hour, and I pray missing you doesn't kill me. I love you, the love, of my life 🫀."
let speed = 100;

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
