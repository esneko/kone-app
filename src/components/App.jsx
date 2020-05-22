import * as React from 'react'
import { RecoilRoot } from 'recoil'
import Button from '@material/react-button'
import { InputField } from './InputField'
import { stateA, stateB } from '../recoil/atoms'
import Counter from './Counter'
import Summa from './Summa'
import '@material/react-button/dist/button.min.css'
import '@material/react-text-field/dist/text-field.min.css'
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
