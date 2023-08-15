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
     /*
     game.roll(4);: In the first frame, the player knocks down 4 pins in the first roll.
     game.roll(6);: In the same frame, the player knocks down the remaining 6 pins in the second roll, 
                      achieving a spare. This means they knocked down all pins with both rolls of that frame.
     game.roll(10);: In the second frame, the player achieves a strike by knocking down all 10 pins
                     with a single roll.
     game.roll(5);: In the third frame, the player knocks down 5 pins in the first roll.
     game.roll(3);: In the same frame, the player knocks down 3 pins in the second roll.
     */
   
  game.roll(4);   // First frame, first roll: 4 pins
  game.roll(6);   // First frame, second roll: Spare (10 pins + 5 bonus)
  game.roll(10);  // Second frame, first roll: Strike (10 pins + 5 + 3 bonus)
  game.roll(5);   // Third frame, first roll: 5 pins
  game.roll(3);   // Third frame, second roll: 3 pins
  game.roll(4);   // 4 frame, first roll: 4 pins
  game.roll(6);   // 4 frame, second roll: Spare (10 pins + 5 bonus)
  game.roll(10);  // 5 frame, first roll: Strike (10 pins + 5 + 3 bonus)
  game.roll(5);   // 6 frame, first roll: 5 pins
  game.roll(3);   // 6 frame, second roll: 3 pins
  game.roll(4);   // 7 frame, first roll: 4 pins
  game.roll(6);   // 7 frame, second roll: Spare (10 pins + 5 bonus)
  game.roll(10);  // 8 frame, first roll: Strike (10 pins + 5 + 3 bonus)
  game.roll(5);   // 9 frame, first roll: 5 pins
  game.roll(3);   // 9 frame, second roll: 3 pins
  game.roll(4);   // 10 frame, first roll: 4 pins
  game.roll(6);   // 10 frame, second roll: Spare (10 pins + 5 bonus)

    expect(game.score()).toBe(142); // Calculate the expected score for this scenario
  });

