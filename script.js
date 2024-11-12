let container = document.querySelector(".container");
let btn = document.getElementById("spin");

// Define the probabilities for each segment (total is close to 1)
let probabilities = [0.3, 0.05, 0.2, 0.1, 0.25, 0.1, 0.07, 0.03]; // Lower probability for Jackpot (last)

let segmentAngles = [0, 45, 90, 135, 180, 225, 270, 315];

btn.onclick = function () {
    // Select a target segment based on probability
    let targetSegment = selectSegment(probabilities);
    let targetAngle = segmentAngles[targetSegment];

    // Generate a random number of full spins for suspense
    let randomSpins = Math.floor(Math.random() * 5) + 3; // 3 to 7 full spins
    let finalRotation = randomSpins * 360 + targetAngle;

    // Rotate the container to the calculated final rotation
    container.style.transform = "rotate(" + finalRotation + "deg)";
};

// Function to select a segment based on the defined probabilities
function selectSegment(probabilities) {
    let random = Math.random(); // Random number between 0 and 1
    let cumulativeProbability = 0;

    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (random <= cumulativeProbability) {
            return i;
        }
    }
    return probabilities.length - 1; // Fallback in case of rounding errors
}
