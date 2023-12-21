import { Select } from '@mui/material'
import { forwardRef } from 'react'
import MenuItem from '@mui/material/MenuItem';

interface InputType {
    name: string
    defaultValue: any
    AddOns: {}
}

const SelectField = forwardRef(( props: InputType, ref) => {
  const AddOns = props.AddOns
  const name = props.name
  const options = Object.entries(AddOns[name])
  return (
    <Select inputRef={ref} fullWidth {...props}>
      <MenuItem value='none' disabled hidden>Select a {name}</MenuItem>
      {options.map((option) => (
        <MenuItem
        value={option[0]}
        key={option[0]}
        >
          {option[0]} + (${option[1]})
        </MenuItem>
      ))}
    </Select>
  ) 
})

export default SelectField