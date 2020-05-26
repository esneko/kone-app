import * as React from 'react'
import { RecoilRoot } from 'recoil'
import Counter from './Counter'
import Summa from './Summa'
import '../styles/app.css'

const App = ({ initial = [1, 2, 3] }) => (
  <RecoilRoot>
    <div className="app">
      {initial.map((id) => (
        <Counter id={id} key={id} />
      ))}
      <Summa key={'active'} />
      <Summa key={'total'} />
    </div>
  </RecoilRoot>
)

export default App
