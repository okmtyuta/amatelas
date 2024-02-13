// sum.test.js
import { expect, test, describe } from 'vitest'

import { RGBArray } from '../../theme/color/types/RGBArray'
import { HexString } from '../../theme/color/types/HexString'
import { Hex } from '../../theme/color'

type Property = {
  name: string
  rgb: RGBArray
  hex: HexString

  lighten: {
    amount: number
    rgb: RGBArray
    hex: HexString
  }[]

  darken: {
    amount: number
    rgb: RGBArray
    hex: HexString
  }[]
}

const properties: Property[] = [
  {
    name: 'black',
    rgb: [0, 0, 0],
    hex: '#000000',
    lighten: [{ amount: 0.1, rgb: [25, 25, 25], hex: '#191919' }],
    darken: [{ amount: 0.1, rgb: [0, 0, 0], hex: '#000000' }]
  },
  {
    name: 'white',
    rgb: [255, 255, 255],
    hex: '#ffffff',
    lighten: [{ amount: 0.1, rgb: [255, 255, 255], hex: '#ffffff' }],
    darken: [{ amount: 0.1, rgb: [229, 229, 229], hex: '#e5e5e5' }]
  },
  {
    name: 'red',
    rgb: [255, 0, 0],
    hex: '#ff0000',
    lighten: [{ amount: 0.1, rgb: [255, 25, 25], hex: '#ff1919' }],
    darken: [{ amount: 0.1, rgb: [229, 0, 0], hex: '#e50000' }]
  },
  {
    name: 'green',
    rgb: [0, 255, 0],
    hex: '#00ff00',
    lighten: [{ amount: 0.1, rgb: [25, 255, 25], hex: '#19ff19' }],
    darken: [{ amount: 0.1, rgb: [0, 229, 0], hex: '#00e500' }]
  },
  {
    name: 'blue',
    rgb: [0, 0, 255],
    hex: '#0000ff',
    lighten: [{ amount: 0.1, rgb: [25, 25, 255], hex: '#1919ff' }],
    darken: [{ amount: 0.1, rgb: [0, 0, 229], hex: '#0000e5' }]
  },
  {
    name: 'gray',
    rgb: [127, 127, 127],
    hex: '#7f7f7f',
    lighten: [{ amount: 0.1, rgb: [139, 139, 139], hex: '#8b8b8b' }],
    darken: [{ amount: 0.1, rgb: [114, 114, 114], hex: '#727272' }]
  }
]

describe('get hex string', () => {
  for (const property of properties) {
    test(`when ${property.name} rgb`, () => {
      const rgb = new Hex(property.hex)
      expect(rgb.hexString).toBe(property.hex)
    })
  }
})

describe('get rgb array', () => {
  for (const property of properties) {
    test(`when ${property.name} rgb`, () => {
      const rgb = new Hex(property.hex)
      expect(rgb.rgbArray).toEqual(property.rgb)
    })
  }
})

describe('lighten', () => {
  for (const property of properties) {
    test(`when ${property.name} rgb`, () => {
      const rgb = new Hex(property.hex)
      for (const lighten of property.lighten) {
        expect(rgb.lighten(lighten.amount).rgbArray).toEqual(lighten.rgb)
        expect(rgb.lighten(lighten.amount).hexString).toEqual(lighten.hex)
      }
    })
  }
})

describe('darken', () => {
  for (const property of properties) {
    test(`when ${property.name} rgb`, () => {
      const rgb = new Hex(property.hex)
      for (const darken of property.darken) {
        expect(rgb.darken(darken.amount).rgbArray).toEqual(darken.rgb)
        expect(rgb.darken(darken.amount).hexString).toEqual(darken.hex)
      }
    })
  }
})
