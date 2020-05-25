import * as React from 'react'
import { RecoilRoot } from 'recoil'
import Counter from './Counter'
import Summa from './Summa'
import '../styles/app.css'

const App = () => (
  <RecoilRoot>
    <div className="app">
      <Counter id={1} />
      <Counter id={2} />
      <Summa />
    </div>
  </RecoilRoot>
)

export default App
