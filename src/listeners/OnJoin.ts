import { Client } from 'beapi-core'
import { moneyModal } from '../index.js'
export class OnJoin {

  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }
  Listen() {
    this.client.on('OnJoin', (player) => {
      const check = moneyModal.findAll({}).find((x) => x.player = player.getName())
      if (check) return
    
      moneyModal.write({
        player: player.getName(),
        money: 0,
      })
    })
  }
}
