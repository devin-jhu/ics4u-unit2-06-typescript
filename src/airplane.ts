/**
 * the stack calling program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-4
 */

class Airplane {
  private speed = 0

  // setter for speed
  setSpeed(speed: number): void {
    this.speed = speed
  }

  // getter for speed
  getSpeed(): number {
    return this.speed
  }
}

// export class
export = Airplane
