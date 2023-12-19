import { Select } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name: string
    defaultValue: any
}

const SelectField = forwardRef(( props: InputType, ref) => {
  return (
    <Select
        inputRef={ref}
        fullWidth
        {...props}
    >
    </Select>
  ) 
})

export default SelectField