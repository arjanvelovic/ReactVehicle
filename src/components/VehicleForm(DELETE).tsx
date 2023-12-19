import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseTrim, chooseYear, chooseColor, chooseCost } from "../redux/slices/RootSlice"
import TextFieldInput from "./TextFieldInput"
import SelectField from './SelectField'
import MenuItem from '@mui/material/MenuItem';

interface VehicleFormProps {
  id?: string[]
  onClose: () => void;
}

const VehicleForm = ( props:VehicleFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      console.log(`${ data.make } ${ props.id }`)
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.make } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseTrim(data.trim));
      dispatch(chooseColor(data.color));
      dispatch(chooseYear(data.year));
      dispatch(chooseCost(data.cost));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label htmlFor="make">Make</label>
          <TextFieldInput {...register('make')} name='make' placeholder="Make"  value = 'Tesla'/>
        </div>
        <div className='my-3'>
          <label htmlFor="year">Year</label>
          <TextFieldInput {...register('year')} name='year' placeholder="Year" value = '2024'/>
        </div>
        <div className='my-3'>
          <label htmlFor="model">Year</label>
          <TextFieldInput {...register('model')} name='model' placeholder="model" value = 'Nissan'/>
        </div>
        <div className='my-3'>
        <SelectField {...register('trim')} name='trim'>
          <MenuItem value='none' disabled hidden>Select a Trim</MenuItem>
          <MenuItem value='Basic'>Basic</MenuItem>
          <MenuItem value='Long Range'>Long Range</MenuItem>
          <MenuItem value='Plaid'>Plaid</MenuItem>
          </SelectField>
        </div>
        <div className='my-3'>
        <SelectField {...register('color')} name='color'>
          <MenuItem value='none' disabled hidden>Select a Color</MenuItem>
          <MenuItem value='White'>White</MenuItem>
          <MenuItem value='Black'>Black</MenuItem>
          <MenuItem value='Red'>Red</MenuItem>
          </SelectField>
        </div>
        <div className='mt-3'>
          <label htmlFor="cost">Cost</label>
          <TextFieldInput {...register('cost')} name='cost' placeholder="Cost" value={undefined}/>
        
        </div>
        <div className="flex p-1 text-center justify-center">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default VehicleForm