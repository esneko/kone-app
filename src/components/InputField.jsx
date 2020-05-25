import React, { useState } from 'react'
import TextField, { Input } from '@material/react-text-field'
import '@material/react-text-field/dist/text-field.min.css'

export const InputField = ({ initialValue }) => {
  const [state, setState] = useState({
    total: initialValue
  })

  const onChange = (e) => {
    setState({ total: e.target.value })
  }

  return (
    <TextField label="Total" outlined>
      <Input value={state.total} onChange={onChange} />
    </TextField>
  )
}
