// Global va

function setup() {
  createCanvas(500, 300);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(16);
}

function draw() {
  background(30);  // Dark background

  // Get current time
  let hr = hour() % 24; // sets to 24hr clock
  let min = minute(); // minutes
  let sec = second(); // seconds

  // Map time units to bar width
  let hourWidth = map(hr + min / 60, 0, 24, 0, width); // 
  let minuteWidth = map(min + sec / 60, 0, 60, 0, width);
  let secondWidth = map(sec, 0, 60, 0, width);

  // Bar height and spacing
  let barHeight = 50;
  let spacing = 20;

  // Draw hour bar
  fill(70, 130, 180);  // Steel blue
  rect(0, spacing, hourWidth, barHeight);
  fill(255);
  text("Hours: " + nf(hr, 2), 10, spacing + barHeight / 2);

  // Draw minute bar
  fill(60, 179, 113);  // Medium sea green
  rect(0, spacing * 2 + barHeight, minuteWidth, barHeight);
  fill(255);
  text("Minutes: " + nf(min, 2), 10, spacing * 2 + barHeight * 1.5);

  // Draw second bar
  fill(220, 20, 60);  // Crimson
  rect(0, spacing * 3 + barHeight * 2, secondWidth, barHeight);
  fill(255);
  text("Seconds: " + nf(sec, 2), 10, spacing * 3 + barHeight * 2.5);
}
