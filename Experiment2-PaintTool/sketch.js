// Global Variables
let brush = 1;
let shade = 0;
let leftmarg = 5;

// Global Colours
let red = 0
let orange = 25%360
let yellow = 60%360
let green = 100%360
let blue = 225%360
let purple = 275%360

// Setup Function
function setup() {
  createCanvas(800, 800);
  background(255);
  menu();
  strokeWeight(10);
  colorMode(HSB);
}

function draw() {
  // Check if user has pressed the mouse
  if (mouseIsPressed) {
    menu();
    noStroke();
    stroke(shade, 100, 100);
    
    if (brush == 1) {
      brush1();
    }
    
    else if (brush == 2) {
      brush2();
    }
    
    else if (brush == 3) {
      brush3();
    }
    
    else if (brush == 4) {
      brush4();
    }
  }
}

function keyPressed() {
  // Change Brush Modes
  if (key == "1") {
    brush = 1;
  }
  
  else if (key == "2") {
    brush = 2;
  }
  
  else if (key == "3") {
    brush = 3;
  }
  
  else if (key == "4") {
    brush = 4;
  }
  
  // Change Colour Using First Letter
  else if (key == "r") {
    shade = red;
  }
  
  else if (key == "o") {
    shade = orange;
  }
  
  else if (key == "y") {
    shade = yellow;
  }
  
  else if (key == "g") {
    shade = green;
  }
  
  else if (key == "b") {
    shade = blue;
  }
  
  else if (key == "p") {
    shade = purple;
  }
  
  // Change Brush Size
  else if (key == "+") {
    strokeWeight=(strokeWeight+25);
  }
  
  // Erase All
  else if (key == " ") {
    background(255);
    menu();
  }
}

function menu() {
  noStroke()
  textSize(18);
  fill('black')
  square(0, 0, 190);
  fill('red');
  text('Red = R', leftmarg, 20);
  fill('orange');
  text('Orange = O', leftmarg, 45);
  fill('yellow');
  text('Yellow = Y', leftmarg, 70);
  fill('green');
  text('Green = G', leftmarg, 95);
  fill('blue');
  text('Blue = B', leftmarg, 120);
  fill('purple');
  text('Purple = P', leftmarg, 145);
  fill('white');
  text('Erase All = Spacebar', leftmarg, 170)
}

// Brush 1: Simple line brush
function brush1() {
  stroke(shade, 100, 100);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function brush2() {
  strokeWeight(10);
  stroke(shade, 100, 100); // No border for the shape
  fill(255, 0, 0, 25); // Set fill color to semi-transparent red
  ellipse(mouseX, mouseY, 10, 10); // Draw a circle at the mouse pos
}

function brush3() {
  fill(0, 0, 255, 50);
  for (let i = 0; i < 2; i++) { // Draws 2 circles per farame
    let offsetX = random(-15, 15); // Random horizontal offset
    let offsetY = random(-15, 15); // Random vertical offset
    ellipse(mouseX + offsetX, mouseY + offsetY, 2, 2); // Draws circles
  }
}

function brush4() {
  strokeWeight(5); // Not as thick as others
  let amplitude = 10; // Sets height of lines
  let frequency = 5; // Sets how fast the lines rotate
  let yOffset = sin(frameCount * frequency) * amplitude; // Calculate vertical offset based on frame count using sin wave
  line(pmouseX, pmouseY + yOffset, mouseX, mouseY - yOffset); //
}


