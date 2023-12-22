import { Select } from '@mui/material'
import { forwardRef } from 'react'
import MenuItem from '@mui/material/MenuItem';

interface InputType {
    name: string
    defaultValue: any
    addons: any
    onChange: any
}

const SelectField = forwardRef(( props: InputType, ref) => {
  const addons = props.addons
  const name = props.name
  const options = Object.entries(addons[name])
  return (
    <Select inputRef={ref} fullWidth {...props}>
      <MenuItem value='none' disabled hidden>Select a {name}</MenuItem>
      {options.map((option:any) => (
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