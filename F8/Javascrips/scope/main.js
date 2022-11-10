const cars = ["BMW", "Posrher", "Honda"];

const output = `
  <ul>
    ${cars.map((car) => ` <li>${car}</li>`)}
  </ul>
`;

console.log(` ${cars.map((car) => ` <li>${car}</li>`)}`);
