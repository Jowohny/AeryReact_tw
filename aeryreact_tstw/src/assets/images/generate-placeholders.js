const fs = require('fs');
const path = require('path');

// Create placeholder images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'placeholders');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// Generate placeholder images using HTML5 Canvas
const { createCanvas } = require('canvas');

const colors = [
    '#4A90E2', // Blue
    '#50E3C2', // Teal
    '#F5A623', // Orange
    '#D0021B', // Red
    '#7ED321', // Green
    '#9013FE'  // Purple
];

for (let i = 1; i <= 3; i++) {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = colors[i - 1];
    ctx.fillRect(0, 0, 800, 600);

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Project ${i}`, 400, 300);

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(imagesDir, `project${i}.png`), buffer);
}

console.log('Placeholder images generated successfully!'); 