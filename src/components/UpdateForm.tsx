import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import TextFieldInput from "./TextFieldInput"
import SelectField from './SelectField'
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'

interface VehicleFormProps {
  row: {}
  onClose: () => void;
}

const modelBasePrices = {
  'Model 3': 26490,
  'Model S': 70590,
  'Model X': 68090,
  'Model Y': 32390,
  'Cybertruck': 68890
}

const UpdateForm = ( props:VehicleFormProps) => {
  const model = props.row.model
  const BasePrice = modelBasePrices[model]
  const redCost = 500;
  const longRangeCost = 500;
  const plaidCost = 1000;
  const { register, handleSubmit } = useForm({})
  const [cost, setCost] = useState(props.row.cost)
  const [color, setColor] = useState(props.row.color)
  const [trim, setTrim] = useState(props.row.trim)

  const setAddOns = (word:string) => {
    if (word === 'White' || word === 'Black' || word === 'Red'){
      let newColor = word
      setColor(newColor)
      let newTrim = trim

      additionalCost(newColor, newTrim)
    }
    else{
      let newTrim = word
      setTrim(newTrim)
      let newColor = color

      additionalCost(newColor, newTrim)
    }
  }

  const additionalCost = (color2: string, trim2: string) => {
    setTimeout(() => {console.log(`${color2}    ${trim2}`);},1000)
    if (trim2 === 'Basic' && (color2 === 'White' || color2 === 'Black')){
      setCost(BasePrice)
    }
    else if (trim2 === 'Basic' && (color2 === 'Red')){
      setCost(BasePrice + redCost)
    }
    else if (trim2 === 'Long Range' && (color2 === 'White' || color2 === 'Black')){
      setCost(BasePrice + longRangeCost)
    }
    else if (trim2 === 'Long Range' && (color2 === 'Red')){
      setCost(BasePrice + longRangeCost + redCost)
    }
    else if (trim2 === 'Plaid' && (color2 === 'White' || color2 === 'Black')){
      setCost(BasePrice + plaidCost)
    }
    else if (trim2 === 'Plaid' && (color2 === 'Red')){
      setCost(BasePrice + plaidCost + redCost)
    }
    else{
      console.log('This is an invalid trim and color combination');
    }
  }

  const onSubmit = (data: any, event: any) => {
    if (props.row.id && props.row.id.length > 0) {
      server_calls.update(props.row.id, data)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else{
      setTimeout(() => {console.log('This is not a PUT request');}, 1000);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label htmlFor="make">Make</label>
          <TextFieldInput name='make' placeholder="Make"  value = {props.row.make}/>
        </div>
        <div className='my-3'>
          <label htmlFor="year">Year</label>
          <TextFieldInput name='year' placeholder="Year" value = {props.row.year}/>
        </div>
        <div className='my-3'>
          <label htmlFor="model">Year</label>
          <TextFieldInput name='model' placeholder="model" value = {props.row.model}/>
        </div>
        <div className='my-3'>
        <SelectField name='trim' defaultValue={props.row.trim}
        onChange = {(e) => {setAddOns(e.target.value)}}>
          <MenuItem value='none' disabled hidden>Select a Trim</MenuItem>
          <MenuItem value='Basic'>Basic</MenuItem>
          <MenuItem value='Long Range'>Long Range + {longRangeCost}</MenuItem>
          <MenuItem value='Plaid'>Plaid + {plaidCost}</MenuItem>
          </SelectField>
        </div>
        <div className='my-3'>
        <SelectField name='color' defaultValue={props.row.color} onChange = {(e) => {setAddOns(e.target.value)}}>
          <MenuItem value='none' disabled hidden>Select a Color</MenuItem>
          <MenuItem value='White'>White</MenuItem>
          <MenuItem value='Black'>Black</MenuItem>
          <MenuItem value='Red'>Red + {redCost}</MenuItem>
          </SelectField>
        </div>
        <div className='mt-3'>
          <label htmlFor="cost">Cost</label>
          <TextFieldInput name='cost' placeholder="Cost" value = {cost}/>
        </div>
        <div className="flex p-1 text-center justify-center">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateForm