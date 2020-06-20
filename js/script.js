
window.onload = function() {
	//start by finding our block 

	let block = document.getElementById('block');

	// create a variable for position Y

	let posY = document.getElementById('pos-y');

	// we need to be able to read in the value of position Y

	posY.onchange = function(){
		block.style.top = posY.value +'px';
	}

	let posX = document.getElementById('pos-x');

	posX.onchange = function() {
		block.style.left = posX.value +'px';
	}

	let size = document.getElementById('size');

	size.onchange = function() {
		block.style.transform = 'scale('+size.value+')';
	}

	let opacity = document.getElementById('opacity');

	opacity.onchange = function() {
		block.style.opacity = opacity.value;
	}
	// in order to change the shape, we need to find the selector

	let shapeType = document.getElementById('shape-type');

	// after finding the selector, we need to react to when the ok button is clicked.
	// so we need to find the okay button 

	let okButton = document.getElementById('shape-ok');
		
	okButton.onclick = function(){
		
		let option = shapeType.value;

		if(option ==="1"){
			block.style.borderRadius = '0%';
			block.style.transform = 'rotate(0deg)';
		}
		else if(option ==="2"){
			block.style.borderRadius = '50%';
		}
		else if (option ==="3"){
			block.style.borderRadius = '0%';
			block.style.transform = 'rotate(45deg)';
		}
	}

	let hex = document.getElementById('hex');

	hex.onkeypress = function(){
		block.style.backgroundColor = '#'+hex.value;
	}

	let rgbaR = document.getElementById('r');
	let rgbaG = document.getElementById('g');
	let rgbaB = document.getElementById('b');
	let rgbaA = document.getElementById('a');
	
	let	rgbaCon= document.querySelector('.rgba-container');
	let	rgbaInput = rgbaCon.querySelectorAll('input')

	for(i=0; i<rgbaInput.length; i++){
		rgbaInput[i].onchange = function(){
			block.style.backgroundColor = 'rgba('+rgbaR.value+','+rgbaG.value+','+rgbaB.value+','+rgbaA.value+')'
		} 
	} 	
}
