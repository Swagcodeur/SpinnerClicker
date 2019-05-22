let nbFidgets = 0;
let production = 0;
let imgClick = 1;
let nbTour = 1;
let achat = 1;
let valueItem1 = 15; let prodItem1 = 0.1; let nbItem1 = 0;
let valueItem2 = 100; let prodItem2 = 1; let nbItem2 = 0;
let valueItem3 = 1100; let prodItem3 = 10; let nbItem3 = 0;
let valueItem4 = 12000; let prodItem4 = 50; let nbItem4 = 0;
let valueItem5 = 130000; let prodItem5 = 260; let nbItem5 = 0;
let valueItem6 = 1400000; let prodItem6 = 1400; let nbItem6 = 0;
let valueItem7 = 20000000; let prodItem7 = 7800; let nbItem7 = 0;
let valueItem8 = 330000000; let prodItem8 = 44894; let nbItem8 = 0;
let valueItem9 = 5100000000; let prodItem9 = 1400; let nbItem9 = 0;
let valueItem10 = 75000000000; let prodItem10 = 1400; let nbItem10 = 0;
let skinImg = "fidgetspinnerRed";
let skinBatman = 500;
let skinGalaxy = 10000;
let skinSlav = 333333;
let skinSpeed = 5000000;
let skinGot = 300000000;
let skinSweetie = false;
let skinMichelDumas = false;



function spinnerClick(){
	nbFidgets+=nbTour;
	imgClick++;
	if(imgClick==5){
		imgClick=1;
	}
	let img = document.querySelector('#spinnerClick');
	img.src="img/spinner/"+skinImg+imgClick+".png";
	updateScore()
	h2 = document.querySelector('h2');
	h2.style.marginTop="1rem";
}

setInterval(timer, 1000);

function timer(){
	nbFidgets = nbFidgets + production;
	updateScore()
	testVisibility()
	testSecretSkin()
}

function updateScore() {
	score = Math.round(nbFidgets);
	score = adjustScore(score);
	document.querySelector('title').innerHTML=score+" Tours - Spinner Clicker";
	document.querySelector('#score').innerHTML=score + " Tours";
}

function accountMenu(){
	document.querySelector('#options').style.visibility="hidden";
	document.querySelector('#skinSweetie').style.visibility="hidden";
	document.querySelector('#skinSweetie').style.position="absolute";
	document.querySelector('#skinMichelDumas').style.visibility="hidden";
	document.querySelector('#skinMichelDumas').style.position="absolute";

	document.querySelector('#myAccount').style.position="static";
	if(document.querySelector('#myAccount').style.visibility=="visible"){
		document.querySelector('#myAccount').style.visibility="hidden";
	}
	else{
		document.querySelector('#myAccount').style.visibility="visible";

	}

}

function skinMenu(){
	document.querySelector('#myAccount').style.visibility="hidden";
	document.querySelector('#myAccount').style.position="absolute";
	if(document.querySelector('#options').style.visibility=="visible"){
		document.querySelector('#options').style.visibility="hidden";
		if(skinSweetie==true){
			document.querySelector('#skinSweetie').style.visibility="hidden";
			document.querySelector('#skinSweetie').style.position="absolute";
		}
		if(skinMichelDumas==true){
			document.querySelector('#skinMichelDumas').style.visibility="hidden";
			document.querySelector('#skinMichelDumas').style.position="absolute";
		}
	}
	else{
		document.querySelector('#options').style.visibility="visible";
		if(skinSweetie==true){
			document.querySelector('#skinSweetie').style.visibility="visible";
			document.querySelector('#skinSweetie').style.position="static";
		}
		if(skinMichelDumas==true){
			document.querySelector('#skinMichelDumas').style.visibility="visible";
			document.querySelector('#skinMichelDumas').style.position="static";
		}
	}
}

function changeNameCompany(){
	let name = document.querySelector('#fidget>h2:nth-child(1)');
	name.contentEditable = true;
	name.addEventListener("keydown", (e) => {
		if(e.keyCode==13){
			name.contentEditable = false;
		}
	})
}

function testSecretSkin() {
	if(document.querySelector('#fidget>h2:nth-child(1)').innerHTML.toUpperCase()=="HUMMER ROUGE"){
	skinSweetie=true;
	}
	if(document.querySelector('#fidget>h2:nth-child(1)').innerHTML.toUpperCase()=="MICHEL DUMAS"){
	skinMichelDumas=true;
	}

}


function selectAchat1(){
	document.querySelector('#shop>article>input:nth-child(1)').style.color='#fff';
	document.querySelector('#shop>article>input:nth-child(2)').style.color='black';
	document.querySelector('#shop>article>input:nth-child(3)').style.color='black';
	achat=1;
}

function selectAchat10(){
	document.querySelector('#shop>article>input:nth-child(1)').style.color='black';
	document.querySelector('#shop>article>input:nth-child(2)').style.color='#fff';
	document.querySelector('#shop>article>input:nth-child(3)').style.color='black';
	achat=10;
}

function selectAchat50(){
	document.querySelector('#shop>article>input:nth-child(1)').style.color='black';
	document.querySelector('#shop>article>input:nth-child(2)').style.color='black';
	document.querySelector('#shop>article>input:nth-child(3)').style.color='#fff';
	achat=50;
}

function buyItem1(){
	for(let i=0;i<achat;i++){
		if(nbFidgets >= valueItem1){
			nbFidgets-=valueItem1;
			updateScore();
			nbItem1++;
			document.querySelector('#item1>p').innerHTML=nbItem1;
			production+=prodItem1;
			document.querySelector('#fidgetProd').innerHTML=(Math.round((production)*10))/10 + " tour/s";
			valueItem1=Math.round(valueItem1*1.15);
			document.querySelector('#item1>section>article>p').innerHTML="Coût : " + adjustScore(valueItem1);
		}
	}
}

function buyItem2(){
	for(let i=0;i<achat;i++){
		if(nbFidgets >= valueItem2){
			nbFidgets-=valueItem2;
			updateScore();
			nbItem2++;
			document.querySelector('#item2>p').innerHTML=nbItem2;
			production+=prodItem2;
			document.querySelector('#fidgetProd').innerHTML=(Math.round((production)*10))/10 + " tour/s";
			valueItem2=Math.round(valueItem2*1.15);
			document.querySelector('#item2>section>article>p').innerHTML="Coût : " + adjustScore(valueItem2);
		}
	}
}

function buyItem3(){
	for(let i=0;i<achat;i++){
		if(nbFidgets >= valueItem3){
			nbFidgets-=valueItem3;
			updateScore();
			nbItem3++;
			document.querySelector('#item3>p').innerHTML=nbItem3;
			production+=prodItem3;
			document.querySelector('#fidgetProd').innerHTML=(Math.round((production)*10))/10 + " tour/s";
			valueItem3=Math.round(valueItem3*1.15);
			document.querySelector('#item3>section>article>p').innerHTML="Coût : " + adjustScore(valueItem3);
		}
	}
}	

function buyItem4(){
	for(let i=0;i<achat;i++){
		if(nbFidgets >= valueItem4){
			nbFidgets-=valueItem4;
			updateScore();
			nbItem4++;
			document.querySelector('#item4>p').innerHTML=nbItem4;
			production+=prodItem4;
			document.querySelector('#fidgetProd').innerHTML=(Math.round((production)*10))/10 + " tour/s";
			valueItem4=Math.round(valueItem4*1.15);
			document.querySelector('#item4>section>article>p').innerHTML="Coût : " + adjustScore(valueItem4);
		}
	}
}

function buyItem5(){
	for(let i=0;i<achat;i++){
		if(nbFidgets >= valueItem5){
			nbFidgets-=valueItem5;
			updateScore();
			nbItem5++;
			document.querySelector('#item5>p').innerHTML=nbItem5;
			production+=prodItem5;
			document.querySelector('#fidgetProd').innerHTML=(Math.round((production)*10))/10 + " tour/s";
			valueItem5=Math.round(valueItem5*1.15);
			document.querySelector('#item5>section>article>p').innerHTML="Coût : " + adjustScore(valueItem5);
		}
	}
}

function buyItem6(){
	for(let i=0;i<achat;i++){
		if(nbFidgets >= valueItem6){
			nbFidgets-=valueItem6;
			updateScore();
			nbItem6++;
			document.querySelector('#item6>p').innerHTML=nbItem6;
			production+=prodItem6;
			document.querySelector('#fidgetProd').innerHTML=(Math.round((production)*10))/10 + " tour/s";
			valueItem6=Math.round(valueItem6*1.15);
			document.querySelector('#item6>section>article>p').innerHTML="Coût : " + adjustScore(valueItem6);
		}
	}
}

function buyItem7(){
	for(let i=0;i<achat;i++){
		if(nbFidgets >= valueItem7){
			nbFidgets-=valueItem7;
			updateScore();
			nbItem7++;
			document.querySelector('#item7>p').innerHTML=nbItem7;
			production+=prodItem7;
			document.querySelector('#fidgetProd').innerHTML=(Math.round((production)*10))/10 + " tour/s";
			valueItem7=Math.round(valueItem7*1.15);
			document.querySelector('#item7>section>article>p').innerHTML="Coût : " + adjustScore(valueItem7);
		}
	}
}

function selectedSkinRed(){ 
	skinImg="fidgetspinnerRed";
	nbTour=1;
	changeSkin(); 
}
function selectedSkinBatman(){ 
	if(nbFidgets>=skinBatman){
		nbFidgets-=skinBatman;
		skinBatman=0;
		skinImg="fidgetspinnerBatman";
		nbTour=3;
		document.querySelector('#skinBatman>p').innerHTML="Acheté";
		changeSkin();
	}
}
function selectedSkinGalaxy(){ 
	if(nbFidgets>=skinGalaxy){
		nbFidgets-=skinGalaxy;
		skinGalaxy=0;
		skinImg="fidgetspinnerGalaxy";
		nbTour=10;
		document.querySelector('#skinGalaxy>p').innerHTML="Acheté";
		changeSkin(); 
	}
}
function selectedSkinSlav(){ 
	if(nbFidgets>=skinSlav){
		nbFidgets-=skinSlav;
		skinSlav=0;
		skinImg="fidgetspinnerSlav";
		nbTour=333;
		document.querySelector('#skinSlav>p').innerHTML="Acheté";
		changeSkin();
	}	
}

function selectedSkinSpeed(){ 
	if(nbFidgets>=skinSpeed){
		nbFidgets-=skinSpeed;
		skinSpeed=0;
		skinImg="fidgetspinnerSpeed"; 
		nbTour=1000;
		document.querySelector('#skinSpeed>p').innerHTML="Acheté";
		changeSkin();
	}
}

function selectedSkinGot(){
	if(nbFidgets>=skinGot){ 
	nbFidgets-=skinGot;
	skinGot=0;
	skinImg="fidgetspinnerGot"; 
	nbTour=10000;
	document.querySelector('#skinGot>p').innerHTML="Acheté";
	changeSkin();
	}
}

function selectedSkinSweetie(){
	skinImg="fidgetspinnerSweetie"; 
	nbTour=10000;
	changeSkin();
}

function selectedSkinMichelDumas(){
	skinImg="fidgetspinnerMichelDumas"; 
	nbTour=5000;
	changeSkin();
}

function changeSkin(){
	imgClick=0;
	nbFidgets-=nbTour;
	spinnerClick(); 
}

passageMouse(document.querySelector('#btnMiddle>input:nth-child(1)'));
passageMouse(document.querySelector('#btnMiddle>input:nth-child(2)'));
function passageMouse(element){
	element.addEventListener('mouseenter', mouseEnterButton);
    element.addEventListener('mouseleave', mouseLeaveButton);
}
function mouseEnterButton(event){ 
    let a=event.target; 
    a.style.fontWeight = 'bold';
    a.style.border = '1px solid black' 
}
function mouseLeaveButton(event){ 
    let a=event.target; 
    a.style.fontWeight = 'normal'; 
    a.style.border = '0px solid black'
}

function testVisibility(){
	//ITEMS SHOP
	if(nbFidgets > valueItem1/2){
		document.querySelector('#item1').style.visibility="visible";
	}
	if(nbFidgets > valueItem2/2){
		document.querySelector('#item2').style.visibility="visible";
	}
	if(nbFidgets > valueItem3/2){
		document.querySelector('#item3').style.visibility="visible";
	}
	if(nbFidgets > valueItem4/2){
		document.querySelector('#item4').style.visibility="visible";
	}
	if(nbFidgets > valueItem5/2){
		document.querySelector('#item5').style.visibility="visible";
	}
	if(nbFidgets > valueItem6/2){
		document.querySelector('#item6').style.visibility="visible";
	}
	if(nbFidgets > valueItem7/2){
		document.querySelector('#item7').style.visibility="visible";
	}
}

function adjustScore(score){
	let realScore = score;
	if((score >= 1000)&&(score < 10000)){
		realScore = score.toString().substr(0,1) + "," + score.toString().substr(1,3);
	}
	if((score >= 10000)&&(score < 100000)){
		realScore = score.toString().substr(0,2) + "," + score.toString().substr(2,3);
	}
	if((score >= 100000)&&(score < 1000000)){
		realScore = score.toString().substr(0,3) + "," + score.toString().substr(3,3);
	}
	if((score >= 1000000)&&(score < 10000000)){
		realScore = score.toString().substr(0,1) + "," + score.toString().substr(1,3) + " Millions";
	}
	if((score >= 10000000)&&(score < 100000000)){
		realScore = score.toString().substr(0,2) + "," + score.toString().substr(2,3) + " Millions";
	}
	if((score >= 100000000)&&(score < 1000000000)){
		realScore = score.toString().substr(0,3) + "," + score.toString().substr(3,3) + " Millions";
	}
	if((score >= 1000000000)&&(score < 10000000000)){
		realScore = score.toString().substr(0,1) + "," + score.toString().substr(1,3) + " Milliards";
	}
	if((score >= 10000000000)&&(score < 100000000000)){
		realScore = score.toString().substr(0,2) + "," + score.toString().substr(2,3) + " Milliards";
	}
	if((score >= 100000000000)&&(score < 1000000000000)){
		realScore = score.toString().substr(0,3) + "," + score.toString().substr(3,3) + " Milliards";
	}
	if((score >= 1000000000000)&&(score < 10000000000000)){
		realScore = score.toString().substr(0,1) + "," + score.toString().substr(1,3) + " Billions";
	}
	if((score >= 10000000000000)&&(score < 100000000000000)){
		realScore = score.toString().substr(0,2) + "," + score.toString().substr(2,3) + " Billions";
	}
	if((score >= 100000000000000)&&(score < 1000000000000000)){
		realScore = score.toString().substr(0,3) + "," + score.toString().substr(3,3) + " Billions";
	}
	if((score >= 1000000000000000)&&(score < 10000000000000000)){
		realScore = score.toString().substr(0,1) + "," + score.toString().substr(1,3) + " Billiards";
	}
	if((score >= 10000000000000000)&&(score < 100000000000000000)){
		realScore = score.toString().substr(0,2) + "," + score.toString().substr(2,3) + " Billiards";
	}
	if((score >= 100000000000000000)&&(score < 1000000000000000000)){
		realScore = score.toString().substr(0,3) + "," + score.toString().substr(3,3) + " Billiards";
	}
	if((score >= 1000000000000000000)&&(score < 10000000000000000000)){
		realScore = score.toString().substr(0,1) + "," + score.toString().substr(1,3) + " Trillions";
	}
	if((score >= 10000000000000000000)&&(score < 100000000000000000000)){
		realScore = score.toString().substr(0,2) + "," + score.toString().substr(2,3) + " Trillions";
	}
	if((score >= 100000000000000000000)&&(score < 1000000000000000000000)){
		realScore = score.toString().substr(0,3) + "," + score.toString().substr(3,3) + " Trillions";
	}
	return realScore;
}

function hiddenClick(){
	nbFidgets+=10000000;
	updateScore();
}

console.log('%cFerme cette putain de console ! Tu crois que je te vois pas !!!!' ,"color: red;font-size:xx-large;");