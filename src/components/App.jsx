import * as React from 'react'
import { RecoilRoot } from 'recoil'
import Counter from './Counter'
import Summa from './Summa'
import '../styles/app.css'

const App = ({ ids = [1, 2] }) => (
  <RecoilRoot>
    <div className="app">
      {ids.map((id) => (
        <Counter id={id} key={id} />
      ))}
      <Summa ids={ids} />
    </div>
  </RecoilRoot>
)

export default App
