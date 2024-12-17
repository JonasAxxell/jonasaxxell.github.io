const audioPlayer = document.getElementById("audio-player");
let currentPad = 1;

const soundList = ["aaa.mp3", "bbb.mp3", "ccc.mp3", "ddd.mp3","eee.mp3","fff.mp3","ggg.mp3", "hhh.mp3", "jjj.mp3","kkk.mp3", "lll.mp3", "mmm.mp3", "sound13.mp3","sound14.mp3"];

//make sure that HTML is fully loaded before executing javascript
//Kolla att alla HTML-element hunnit ladda klart
document.addEventListener("DOMContentLoaded", (event) => {
  const pad1 = document.getElementById("pad1");
  const pad2 = document.getElementById("pad2");
 
//Loopa ut knappar 
  for(x=1; x<=12; x++){
	  pad1.innerHTML += `
		<div class="btn" id="btn${x}" onclick="playSound('${x-1}')"></div>
	  `;
	  
	  pad2.innerHTML += `
		<div class="btn" id="btn"${x+12}" onclick="playSound('${x+11}')"></div>
	  `;
  }

});

//Funktion för att spela ljud som ska köras både vid klick och tangentbordstryck
function playSound(soundSrc){
	audioPlayer.src = "audio/"+soundList[soundSrc];
	audioPlayer.play();
}

//Lyssna efter tangentbordstryck
document.addEventListener("keypress", selectSound);

//Funktion som körs då man tryckt en knapp, tar emot event-data från knapptrycket
function selectSound(keyPressedData){
	console.log(keyPressedData);
	
	switch(keyPressedData.code) {
	  case "KeyQ":
	  if(currentPad === 1){
		soundSrc = 0;
	  }
	  else {
		 soundSrc = 12; 
	  }
		break;
	  case "KeyW":
			if(currentPad === 1){
				soundSrc = 1;
				}
				else {
				 soundSrc = 13; 
				}
		break;
		case "KeyE":
			if(currentPad === 1){
				soundSrc = 2;
				}
				else {
				 soundSrc = 14; 
				}
		break;
		case "KeyR":
			if(currentPad === 1){
				soundSrc = 3;
				}
				else {
				 soundSrc = 15; 
				}
				break;
				case "KeyT":
					if(currentPad === 1){
						soundSrc = 4;
						}
						else {
						 soundSrc = 16; 
						}
						break;
						case "KeyY":
							if(currentPad === 1){
								soundSrc = 5;
								}
								else {
								 soundSrc = 17; 
								}
								break;
								case "KeyU":
									if(currentPad === 1){
										soundSrc = 6;
										}
										else {
										 soundSrc = 18; 
										}
										break;
										case "KeyI":
									if(currentPad === 1){
										soundSrc = 7;
										}
										else {
										 soundSrc = 19; 
										}
										break;
										case "KeyO":
											if(currentPad === 1){
												soundSrc = 8;
												}
												else {
												 soundSrc = 20; 
												}
												break;
												case "KeyP":
													if(currentPad === 1){
														soundSrc = 9;
														}
														else {
														 soundSrc = 21; 
														}
														break;
														case "KeyA":
															if(currentPad === 1){
																soundSrc = 10;
																}
																else {
																 soundSrc = 22; 
																}
																break;
																case "KeyB":
																	if(currentPad === 1){
																		soundSrc = 11;
																		}
																		else {
																		 soundSrc = 23; 
																		}
																		break;
		case "Space":
		if(currentPad === 1){
			currentPad = 2;
		}
		else {
			currentPad = 1;
		}
		changePad(currentPad);
		return;
		break;

		//Alla knappar som inte är definierade i case triggar default. Return avslutar funktionen.
	  default:
		return;
	}
	console.log(soundSrc);
	playSound(soundSrc);
}

function changePad(padNr){
	currentPad = padNr;

	if (currentPad === 1) {
		pad1.style.display = "grid";
		pad2.style.display = "none";
	}

	else {
		pad2.style.display = "grid";
		pad1.style.display = "none";
	}
}

