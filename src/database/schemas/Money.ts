import { schema, SchemaTypes } from 'beapi-core'
import type { Money } from '../../index.js'

export const moneySchema = schema<Money>({
  player: SchemaTypes.String,
  money: SchemaTypes.Number,
})
