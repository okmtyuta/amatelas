export class Recorder<Key extends string | number | symbol, Value> {
  private _record = {}

  constructor(array: Key[], processor: (arg: Key) => Value) {
    array.forEach((item) => {
      this._record = { ...this._record, [item]: processor(item) }
    })
  }

  get record() {
    return this._record as Record<Key, Value>
  }
}