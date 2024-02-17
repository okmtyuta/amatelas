import { fromEntries, toEntries } from '@okmtyuta/amatelas-lib'
import { styleSourceRecord } from './style-source-record'

export const classesRecord = fromEntries(
  toEntries(styleSourceRecord).map(([name, source]) => [name, source.classes])
)
