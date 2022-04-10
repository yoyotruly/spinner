const spinner = "|/-\\|";
let delay = 100;
for (const spin of spinner) {
  setTimeout(() => process.stdout.write(`\r${spin}  `), delay);
  delay += 200;
};