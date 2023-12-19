import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name: string,
    placeholder: string
    value?: any
    defaultValue?: any
}

const TextFieldInput = forwardRef(( props: InputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="none"
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
    >
    </TextField>
  ) 
})

export default TextFieldInput