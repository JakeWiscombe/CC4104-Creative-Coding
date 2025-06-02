// Global variables
let rows = 75;
let cols = 25;
let spacingY;
let spacingX;

function setup() {
  createCanvas(800, 800);
  background(255);
  strokeWeight(10);
  noFill();

  colorMode(HSB, 360, 100, 100); // HSB colour for more colours

  spacingY = height / rows; // Calculate vertical spacing between points
  spacingX = width / cols;  // Calculate horizontal spacing between lines

  for (let x = 0; x < cols; x++) { //
    stroke(random(360), 80, 80); // Adds random colours

    beginShape(); // Draw the line
    for (let y = 0; y < rows; y++) { // Go point to point
      let xPos = x * spacingX + noise(y * 0.035, x * 0.1) * 100; // X position with noise distortion
      let yPos = y * spacingY; // Evenly spaced Y position
      vertex(xPos, yPos); // Add point to the shape
    }
    endShape();
  }

  noLoop();
}