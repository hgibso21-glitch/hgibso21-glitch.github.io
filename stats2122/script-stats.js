function getMean() {
    const numbers = document.getElementById("numbers").value.split(",").map(Number);
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    alert("Mean: " + mean);
}

function getMedian() {
    const numbers = document.getElementById("numbers").value.split(",").map(Number).sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
    alert("Median: " + median);
}   

function getStandardDeviationCorrected() {
    const numbers = document.getElementById("numbers").value.split(",").map(Number);
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const squaredDifferences = numbers.map(x => Math.pow(x - mean, 2));
    const variance = squaredDifferences.reduce((a, b) => a + b, 0) / (numbers.length - 1);
    const standardDeviation = Math.sqrt(variance);
    alert("Standard Deviation: " + standardDeviation);
}  

function getStandardDeviationUncorrected() {
    const numbers = document.getElementById("numbers").value.split(",").map(Number);
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const squaredDifferences = numbers.map(x => Math.pow(x - mean, 2));
    const variance = squaredDifferences.reduce((a, b) => a + b, 0) / numbers.length;
    const standardDeviation = Math.sqrt(variance);
    alert("Standard Deviation: " + standardDeviation);
}  