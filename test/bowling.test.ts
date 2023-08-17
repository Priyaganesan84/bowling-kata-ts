// bowling.test.ts
const { BowlingGame } = require('../src/bowling');

describe('BowlingGame', () => {
   test('Perfect game scores 300', () => {

     const game = new BowlingGame();
     for (let i = 0; i < 12; i++) {
       game.roll(10);
     }
   
     expect(game.score()).toBe(300);
   });

  test('All misses score zero', () => {
     const game = new BowlingGame();
     for (let i = 0; i < 20; i++) {
       game.roll(0);
     }
     expect(game.score()).toBe(0);
   });
});

  test('Game with spares and strikes', () => {
    const game = new BowlingGame();
     // Roll sequence:
    
   
  game.roll(4);   // 1st frame, first roll: 4 pins
  game.roll(6);   // 1st frame, second roll: Spare 
  game.roll(10);  // 2nd frame, first roll: Strike 
  game.roll(5);   // 3rd frame, first roll: 5 pins
  game.roll(3);   // 3rd frame, second roll: 3 pins
  game.roll(4);   // 4th frame, first roll: 4 pins
  game.roll(6);   // 4th frame, second roll: Spare 
  game.roll(10);  // 5th frame, first roll: Strike 
  game.roll(5);   // 6th frame, first roll: 5 pins
  game.roll(3);   // 6th frame, second roll: 3 pins
  game.roll(4);   // 7th frame, first roll: 4 pins
  game.roll(6);   // 7th frame, second roll: Spare 
  game.roll(10);  // 8th frame, first roll: Strike
  game.roll(5);   // 9th frame, first roll: 5 pins
  game.roll(3);   // 9th frame, second roll: 3 pins
  game.roll(4);   // 10th frame, first roll: 4 pins
  game.roll(6);   // 10th frame, second roll: Spare 

    expect(game.score()).toBe(142); // Calculate the expected score for this scenario
  });

