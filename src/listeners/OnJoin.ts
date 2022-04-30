// Type Imports
import type { Economy } from '../economy/index.js'
import type { Player } from 'beapi-core'

// Regular Imports
import { moneyModal } from '../index.js'

export class OnJoin {
  private core: Economy
  public previous: Player

  public constructor(core: Economy) {
    this.core = core
    this.core.getClient().on('OnJoin', (player) => {
      const check = moneyModal.findAll({}).find((x) => x.player = player.getName())
      if (check) return
    
      this.previous = player
      moneyModal.write({
        player: player.getName(),
        money: 0,
      })
    })
  }
}
