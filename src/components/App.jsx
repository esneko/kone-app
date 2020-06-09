import * as React from 'react'
import { RecoilRoot } from 'recoil'
import Counter from './Counter'
import Summa from './Summa'
import RecoilLogger from './Logger'
import '../styles/app.css'

const App = ({ initial = [1, 2, 3] }) => (
  <RecoilRoot>
    <RecoilLogger />
    <div className="app">
      {initial.map((id) => (
        <Counter id={id} key={id} />
      ))}
      <Summa type={'active'} itemIds={[1, 2]} />
      <Summa type={'total'} itemIds={initial} />
    </div>
  </RecoilRoot>
)

export default App
