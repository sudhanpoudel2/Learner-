import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (a) => {
  rl.question("What is your age? ", (b) => {
    rl.question("What is your favorite color? ", (c) => {
      console.log(`${a} is ${b} years old and has ${c} as favorite color.`);
      rl.close();
    });
  });
});