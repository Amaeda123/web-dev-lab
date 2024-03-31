const myPromise = new Promise((resolve, reject) => {
  return resolve(1);
});

function getData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      // Simulating successful completion
      resolve(data);
      // Simulating failure
      // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
  });
}
// Consuming the Promise
getData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    console.log("Random Number:", randomNumber);

    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        reject(new Error("Promise rejected for even number."));
      } else {
        resolve("Promise resolved for odd number.");
      }
    }, 5000); // 5 seconds timeout
  });
}

// Usage
randomPromise()
  .then((result) => console.log("Success:", result))
  .catch((error) => console.error("Error:", error.message));
