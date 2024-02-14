import { EntryRecorder } from '@okmtyuta/amatelas-lib'
import { styleSourceRecord } from '..'

type Components = keyof typeof styleSourceRecord

const keyProcessor = (
  entry: [Components, (typeof styleSourceRecord)[Components]]
) => {
  return entry[0]
}
const valueProcessor = (
  entry: [Components, (typeof styleSourceRecord)[Components]]
) => {
  return entry[1].classes
}

export const classesRecord = new EntryRecorder(
  styleSourceRecord,
  keyProcessor,
  valueProcessor
).record


