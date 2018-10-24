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
const winConditions =() => {
  let boardArray = Object.keys(board).map(key => board[key]);
  if ((boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]) || (boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) || (boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8])) {
    return boardArray[0];
  } else if ((boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) || (boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) || (boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8])) {
    return boardArray[0];
  } else if ((boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) || (boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6])) {
    return boardArray[0];
  }
  return null
}
// prompt user

const newGame = (message = '') => {
  console.log(message);
  rl.question('Would you like to play another game? (Y / N)   ', answer => {
    if (answer === 'Y') {
      board = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
      };
      player = 'X';
      prompt();
    } else if (answer === 'N') {
      console.log('thanks for Playing!');
      rl.close();
    } else {
      newGame('Please enter a valid option. ')
    }
  })
}

const prompt = () => {
  console.log(`\n ${board[1]} | ${board[2]} | ${board[3]} \n___|___|___\n ${board[4]} | ${board[5]} | ${board[6]} \n___|___|___\n ${board[7]} | ${board[8]} | ${board[9]} \n   |   |   `);

  rl.question(`Enter a number Player ${player}:  `, (answer) => {
    if (board[answer] === answer) {
      prompt();
    } else {
      board[answer] = player;
      player = player === 'X' ? 'O' : 'X';
    }
    if (winConditions()) {
      console.log(`Player ${winConditions()} Wins!`);
      newGame();
    }
    prompt();

  });
} 

prompt();