// bowling.ts
export class BowlingGame {
    rolls = []; // roll array
    roll(pins) {
        this.rolls.push(pins);
    }
    score() {
        let score = 0; //initialise score to zero.
        let rollIndex = 0; //initialise rollIndex to zero, rollIndex to track current roll
        for (let frame = 0; frame < 10; frame++) { // Iterate through 10 frames
            if (this.isStrike(rollIndex)) {
                // Strike scenario: Add 10 points plus the bonus from the next two rolls
                score += 10 + this.strikeBonus(rollIndex);
                rollIndex += 1;
            }
            else if (this.isSpare(rollIndex)) {
                // Spare scenario: Add 10 points plus the bonus from the next roll
                score += 10 + this.spareBonus(rollIndex);
                rollIndex += 2;
            }
            else {
                // Open frame scenario: Add the total pins knocked down in the current and next roll
                score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
                rollIndex += 2;
            }
        }
        return score;
    }
    // Check if the current roll and the next roll resulted in a spare (total 10 pins knocked down)
    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }
    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
    // Calculate the bonus points for a strike (next two rolls)
    strikeBonus(rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
    // Calculate the bonus points for a spare (next roll)
    spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2];
    }
}
