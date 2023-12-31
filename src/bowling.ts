// bowling.ts
export class BowlingGame {
    private rolls: number[] = [];  // roll array
  
    roll(pins: number): void {        //pins defined as number and number of pins knocked down is added to rolls array
      this.rolls.push(pins);
    }
  
    score(): number {           // calculates and returns total score 
      let score = 0;             //initialise score to zero.
      let rollIndex = 0;         //initialise rollIndex to zero, rollIndex to track current roll
  
      for (let frame = 0; frame < 10; frame++) {       // Iterate through 10 frames

       
            // Add log for current roll value and index
          if (this.isStrike(rollIndex)) {
           // Strike scenario: Add 10 points plus the bonus from the next two rolls
           score += 10 + this.strikeBonus(rollIndex);
          rollIndex += 1;
        } else if (this.isSpare(rollIndex)) {
           // Spare scenario: Add 10 points plus the bonus from the next roll
            score += 10 + this.spareBonus(rollIndex);
          rollIndex += 2;
        } else {
            // Open frame scenario: Add the total pins knocked down in the current and next roll
              score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
          rollIndex += 2;
        }
        }
       console.log("" + score);
      return score;
    }

    // Check if the current roll and the next roll resulted in a spare (total 10 pins knocked down)
    private isStrike(rollIndex: number): boolean {
      return this.rolls[rollIndex] === 10;
    }
  
    private isSpare(rollIndex: number): boolean {
      return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
   
     // Calculate the bonus points for a strike (next two rolls)
 
    private strikeBonus(rollIndex: number): number {
      return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
   
      // Calculate the bonus points for a spare (next roll)
    private spareBonus(rollIndex: number): number {
       return this.rolls[rollIndex + 1];
    }
  }
  