import server2 from "../api/server2";
import TextFieldInput from "./TextFieldInput"
import SelectField from './SelectField'
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const modelBasePrices = {
  'Model 3': 26490,
  'Model S': 70590,
  'Model X': 68090,
  'Model Y': 32390,
  'Cybertruck': 68890
}

interface CreateFormProps {
    model: string
  }

const CreateForm = (props:CreateFormProps) => {
  const model = props.model
  const BasePrice = modelBasePrices[model]
  const redCost = 500;
  const longRangeCost = 500;
  const plaidCost = 1000;
  // const { register, handleSubmit } = useForm({})
  const [cost, setCost] = useState(BasePrice)
  const [color, setColor] = useState('none')
  const [trim, setTrim] = useState('none')

  const {POSTData, status} = server2();

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
    if ((trim2 === 'Basic' || trim2 === 'none') && (color2 === 'White' || color2 === 'Black' || color2 === 'none')){
      setCost(BasePrice)
    }
    else if ((trim2 === 'Basic' || trim2 === 'none') && (color2 === 'Red')){
      setCost(BasePrice + redCost)
    }
    else if (trim2 === 'Long Range' && (color2 === 'White' || color2 === 'Black' || color2 === 'none')){
      setCost(BasePrice + longRangeCost)
    }
    else if (trim2 === 'Long Range' && (color2 === 'Red')){
      setCost(BasePrice + longRangeCost + redCost)
    }
    else if (trim2 === 'Plaid' && (color2 === 'White' || color2 === 'Black' || color2 === 'none')){
      setCost(BasePrice + plaidCost)
    }
    else if (trim2 === 'Plaid' && (color2 === 'Red')){
      setCost(BasePrice + plaidCost + redCost)
    }
    else{
      console.log('This is an invalid trim and color combination');
    }
  }

  if (status === "success") {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <button className= 'mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
        <Link to='/cart'>Cart</Link></button>
      </>
    );
    ;
  }

  if (status === "error") {
    return (
      <>
        <div className="text-2xl">Error</div>
        <meta httpEquiv="refresh" content="5"/>
      </>
    );
    ;
  }

  return (
    <form
      onSubmit={POSTData}
      method="POST">
        <div className='mb-3'>
          <label htmlFor="make">Make</label>
          <TextFieldInput name='make' placeholder="Make"  value = 'Tesla'/>
        </div>
        <div className='my-3'>
          <label htmlFor="year">Year</label>
          <TextFieldInput name='year' placeholder="Year" value = '2024'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="Model">Model</label>
          <TextFieldInput name='model' placeholder="Model"  value = {props.model}/>
        </div>
        <div className='my-3'>
        <SelectField name='trim' defaultValue={'none'} onChange = {(e) => {setAddOns(e.target.value)}}>
          <MenuItem value='none' disabled hidden>Select a Trim</MenuItem>
          <MenuItem value='Basic'>Basic</MenuItem>
          <MenuItem value='Long Range'>Long Range + ${longRangeCost}</MenuItem>
          <MenuItem value='Plaid'>Plaid + ${plaidCost}</MenuItem>
          </SelectField>
        </div>
        <div className='my-3'>
        <SelectField name='color' defaultValue={'none'} onChange = {(e) => {setAddOns(e.target.value)}}>
          <MenuItem value='none' disabled hidden>Select a Color</MenuItem>
          <MenuItem value='White'>White</MenuItem>
          <MenuItem value='Black'>Black</MenuItem>
          <MenuItem value='Red'>Red + ${redCost}</MenuItem>
          </SelectField>
        </div>
        <div className='mt-3'>
          <label htmlFor="cost">Cost</label>
          <TextFieldInput  name='cost' placeholder="Cost" value={cost}/>
        
        </div>
        <div className="flex p-1 text-center justify-center">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white" type="submit">
            Submit
          </button>
        </div>
    </form>
  );
};

export default CreateForm;