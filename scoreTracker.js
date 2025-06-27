/**
 * scoreTracker - Simple Score Management System
 * Author: IlReDelTrucco
 * License: Custom
 */

class scoreTracker {
    /**
     * Initializes the score system.
     * @param {string} playerName - Name of the player.
     */
    constructor(playerName) {
        if (typeof playerName !== 'string' || playerName.trim() === '') {
            throw new Error('[scoreTracker] Invalid player name.');
        }
        this.playerName = playerName;
        this.score = 0;
    }

    /**
     * Increases the score by a given amount.
     * @param {number} points - Number of points to add.
     */
    add(points) {
        if (typeof points !== 'number' || points <= 0) {
            console.error('[scoreTracker] Invalid point value.');
            return;
        }
        this.score += points;
        console.log(`[scoreTracker] ${this.playerName} earned ${points} points. Total: ${this.score}`);
    }

    /**
     * Resets the score to zero.
     */
    reset() {
        this.score = 0;
        console.log(`[scoreTracker] ${this.playerName}'s score has been reset.`);
    }

    /**
     * Returns the current score.
     * @returns {number}
     */
    getScore() {
        return this.score;
    }
}

// Example usage:
// const tracker = new scoreTracker('Player1');
// tracker.add(10);
// tracker.add(5);
// console.log(tracker.getScore()); // Output: 15
// tracker.reset();

module.exports = scoreTracker;
