const baseSpinner = ["/", "-", "\\", "|"];

const spinTimes = 5;
const spinner = [].concat(...Array(spinTimes).fill(baseSpinner));
spinner.map((spin, index) => {
  const delay = 100 + index * 200;
  setTimeout(() => process.stdout.write(`\r${spin}  `), delay);
});