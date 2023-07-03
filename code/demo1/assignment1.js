function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an API call with a 2-second delay
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            resolve(data);
        }, 2000);
    });
}

function displayData(data) {
    console.log("Received data:", data);
}

console.log("Start");
fetchData()
    .then((data) => {
        displayData(data);
        console.log("Data processing completed");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
console.log("End");

