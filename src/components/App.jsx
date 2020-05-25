import * as React from 'react'
import { RecoilRoot } from 'recoil'
import { stateA, stateB } from '../recoil/atoms'
import Counter from './Counter'
import Summa from './Summa'
import '../styles/app.css'

const App = () => (
  <RecoilRoot>
    <div className="app">
      <Counter stateAtom={stateA} />
      <Counter stateAtom={stateB} />
      <Summa />
      <InputField initialValue={0} />
      <Button unelevated onClick={() => console.log('Clicked!')}>
        Summa
      </Button>
    </div>
  </RecoilRoot>
)

export default App
