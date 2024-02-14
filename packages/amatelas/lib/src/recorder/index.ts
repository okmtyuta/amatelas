import { strictEntries } from '../strict-entries'


type RecordKey = string | number | symbol
type KeyProcessor<Argument, Key extends RecordKey> = (arg: Argument) => Key
type ValueProcessor<Argument, Value> = (arg: Argument) => Value

/**
 * @description 任意の配列の各値に対して，その値からkey，valueを構成したdictを型とともに構成する
 */
export class Recorder<Source, Key extends RecordKey, Value> {
  private _record = {}

  constructor(
    array: Source[],
    keyProcessor: KeyProcessor<Source, Key>,
    valueProcessor: ValueProcessor<Source, Value>
  ) {
    array.forEach((item) => {
      this._record = {
        ...this._record,
        [keyProcessor(item)]: valueProcessor(item)
      }
    })
  }

  get record() {
    return this._record as Record<
      ReturnType<KeyProcessor<Source, Key>>,
      ReturnType<ValueProcessor<Source, Value>>
    >
  }
}

/**
 * @description Recorderをrecordに対応させたもの
 * @extends { Recorder<[EntryKey, EntryValue], Key, Value> }
 */
export class EntryRecorder<
  EntryKey extends RecordKey,
  EntryValue,
  Key extends RecordKey,
  Value
> extends Recorder<[EntryKey, EntryValue], Key, Value> {
  constructor(
    record: Record<EntryKey, EntryValue>,
    keyProcessor: KeyProcessor<[EntryKey, EntryValue], Key>,
    valueProcessor: ValueProcessor<[EntryKey, EntryValue], Value>
  ) {
    const entires: [EntryKey, EntryValue][] = strictEntries(record)
    super(entires, keyProcessor, valueProcessor)
  }
}
