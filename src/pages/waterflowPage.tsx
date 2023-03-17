// @ts-ignore
import Waterfall from '@/components/Waterfall'
import { Random } from 'mockjs'
import React, { useMemo, useReducer, useState } from 'react'
import './waterflowPage.css'

export default function App() {
  const [col, setCol] = useState(3)
  const [_, change] = useReducer(s => s + 1, 0)
  const getColor = () => {
    let str = '#';
    let lzp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    for (let i = 0; i < 6; i++) {
      let lut = parseInt(String(Math.random() * 16))
      str += lzp[lut]
    }
    return str
  }
  const source = useMemo(
    () =>
      Array(100)
        .fill('')
        .map((_, i) =>
          Random.image(
            `${Math.floor(Math.random() * 500)}x${Math.floor(
              Math.random() * 500
            )}`,
            // getColor()
            Random.color()
          )
        ),
    [_]
  )

  return (
    <>
      <button onClick={() => setCol(col - 1)}>col-1</button>
      <button onClick={() => setCol(col + 1)}>col+1</button>
      <button onClick={change}>change</button>
      <Waterfall data={source} wrapClass="container" col={col}>
        {source.map((url, i) => (
          <img src={url} key={i} alt={url} />
        ))}
      </Waterfall>
    </>
  )
}
