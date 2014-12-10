// Create the window
var win = Ti.UI.createWindow({
	backgroundImage: "background.jpg"
});

// Include Ego
Ti.include('ego.js');

// Load the file
var loadedFile = loadFile("myFile.txt");

// Set the score to be the value loaded from the file, coverted to a number from a string
var score = Number(loadedFile);

// Add some text to show the score
var scoreText = Ti.UI.createLabel({
	text: loadedFile,
	font: {fontSize:32},
	top: "20%",
	color: "#000"
});
win.add(scoreText);

// Minus sign sprite
var minusBtn = Ti.UI.createImageView({
	image: "-.png",
	top: "70%",
	left: "30"
});
win.add(minusBtn);

// Plus sign sprite
var plusBtn = Ti.UI.createImageView({
	image: "+.png",
	top: "68%",
	right: "30"
});
win.add(plusBtn);

// Save button sprite
var saveBtn = Ti.UI.createImageView({
	image: "save.png",
	top: "85%",
	left: "10%"
});
win.add(saveBtn);

// Load button sprite
var loadBtn = Ti.UI.createImageView({
	image: "load.png",
	top: "85%",
	right: "10%"
});
win.add(loadBtn);

// Minus function
var touchMinus = function(){
	score = score - 1;
	scoreText.text = score;
};

// Plus function
var touchPlus = function(){
	score = score + 1;
	scoreText.text = score;
};

// Save function
var touchSave = function(){
	saveFile("myFile.txt", ""+score+"");
};

// Load function
var touchLoad = function(){
	loadedFile = loadFile("myFile.txt");
	score = Number(loadedFile);
	scoreText.text = score;
};


minusBtn.addEventListener("click", touchMinus);
plusBtn.addEventListener("click", touchPlus);
saveBtn.addEventListener("click", touchSave);
loadBtn.addEventListener("click", touchLoad);

// Open window
win.open({fullscreen:true, navBarHidden:true});