/**
 * the stack calling program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-4
 */

import Airplane from './airplane'

class Jet extends Airplane {
  private readonly MULTIPLIER = 2

  // speed setter
  setSpeed(speed: number): void {
    super.setSpeed(speed * this.MULTIPLIER)
  }

  // acceleration getter
  acceleration(): void {
    super.setSpeed(super.getSpeed() * this.MULTIPLIER)
  }
}

// export class
export = Jet
