//your JS code here. If required.
const output = document.getElementById("output");

// Create a promise with a random delay between 1 and 3 seconds
function createPromise() {
  const time = Math.random() * 2 + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

// Record the start time
const startTime = performance.now();

// Create 3 promises
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

// Wait until all promises are resolved
Promise.all([promise1, promise2, promise3]).then((results) => {
  const endTime = performance.now();

  // Calculate total elapsed time
  const totalTime = (endTime - startTime) / 1000;

  // Remove Loading...
  output.innerHTML = "";

  // Add promise results
  results.forEach((time, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;

    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");

  totalRow.innerHTML = `
    <th>Total</th>
    <th>${totalTime.toFixed(3)}</th>
  `;

  output.appendChild(totalRow);
});