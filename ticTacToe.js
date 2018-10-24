const readline = require('readline');
let board = {
  '1' : 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
};
const printBoard = `\n ${board[1]} | ${board[2]} | ${board[3]} \n___|___|___\n ${board[4]} | ${board[5]} | ${board[6]} \n___|___|___\n ${board[7]} | ${board[8]} | ${board[9]} \n   |   |   `;

let player = 'X';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// check for solution

// prompt user

const prompt = () => {
  console.log(`\n ${board[1]} | ${board[2]} | ${board[3]} \n___|___|___\n ${board[4]} | ${board[5]} | ${board[6]} \n___|___|___\n ${board[7]} | ${board[8]} | ${board[9]} \n   |   |   `);

  rl.question(`Enter a number Player ${player}:  `, (answer) => {
    if (board[answer] === answer) {
      prompt();
    } else {
      board[answer] = player;
      player = player === 'X' ? 'O' : 'X';
    }
    prompt();

  });
} 

prompt();