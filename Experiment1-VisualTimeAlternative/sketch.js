// Global variables
let hr, min, sec;
let hourWidth, minuteWidth, secondWidth;
let barHeight = 50;
let spacing = 20;

function setup() {
  createCanvas(500, 300);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(16);
}

function draw() {
  background(30);  // Dark background

  // Get current time
  hr = hour() % 24;
  min = minute();
  sec = second();
  
  //value start stop start stop
  
  // Time units that moves the bar per sec, min + hour
  hourWidth = map(hr + min / 60, 0, 24, 0, width); // 15 + 30 / 60
  minuteWidth = map(min + sec / 60, 0, 60, 0, width);
  secondWidth = map(sec, 0, 60, 0, width);

  // Draw hour bar
  fill(70, 130, 180); // Colour for moving bar
  rect(0, spacing, hourWidth, barHeight, 0, 10, 10 ,0);
  fill(255); // Colour for text and number
  text("Hours: " + nf(hr, 2), 10, spacing + barHeight / 2);

  // Draw minute bar
  fill(60, 179, 113); // Colour for moving bar
  rect(0, spacing * 2 + barHeight, minuteWidth, barHeight, 0, 10, 10 ,0); // Draw bar
  fill(255); // Colour for text and number
  text("Minutes: " + nf(min, 2), 10, spacing * 2 + barHeight * 1.5);

  // Draw second bar
  fill(220, 20, 60); // Colour for moving bar
  rect(0, spacing * 3 + barHeight * 2, secondWidth, barHeight, 0, 10, 10 ,0);
  fill(255); // Colour for text and number
  text("Seconds: " + nf(sec, 2), 10, spacing * 3 + barHeight * 2.5);
}
