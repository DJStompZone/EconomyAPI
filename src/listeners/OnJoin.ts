import { client } from 'beapi-core'
import { moneyModal } from '../index.js'

client.on('OnJoin', (player) => {
  const check = moneyModal.findAll({}).find((x) => x.player = player.getName())
  if (check) return

  moneyModal.write({
    player: player.getName(),
    money: 0,
  })
})
