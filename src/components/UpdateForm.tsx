import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import TextFieldInput from "./TextFieldInput"
import { useState } from 'react'
import SelectField from './SelectField';
import VehiclesInfo from './VehiclesInfo';

interface VehicleFormProps {
  row: any
  onClose: () => void;
}

const UpdateForm = ( props:VehicleFormProps) => {
  const { register, handleSubmit } = useForm({})
  const model = props.row.model
  const ModelInfo = VehiclesInfo[model]
  const BaseCost = ModelInfo['baseCost']
  const [cost, setCost] = useState(props.row.cost)
  const [color, setColor] = useState(props.row.color)
  const [trim, setTrim] = useState(props.row.trim)

  const setAddOns = (target:any) => {
    if (target['name'] === 'color'){
      let currentColor = target['value']
      setColor(currentColor)
      let currentTrim = trim

      let colorCost = ModelInfo['color'][currentColor]
      if (currentTrim === 'none'){
        let trimCost = 0
        setCost(BaseCost+colorCost+trimCost)
        console.log(`${currentColor}...${currentTrim}...${BaseCost+colorCost+trimCost}`);
      }
      else {
        let trimCost = ModelInfo['trim'][currentTrim]
        setCost(BaseCost+colorCost+trimCost)
        console.log(`${currentColor}...${currentTrim}...${BaseCost+colorCost+trimCost}`);
      }
    }
    else{
      let currentTrim = target['value']
      setTrim(currentTrim)
      let currentColor = color

      let trimCost = ModelInfo['trim'][currentTrim]   
      if (currentColor === 'none'){
        let colorCost = 0
        setCost(BaseCost+colorCost+trimCost)
        console.log(`${currentColor}...${currentTrim}...${BaseCost+colorCost+trimCost}`);
      }
      else {
        let colorCost = ModelInfo['color'][currentColor]
        setCost(BaseCost+colorCost+trimCost)
        console.log(`${currentColor}...${currentTrim}...${BaseCost+colorCost+trimCost}`);
      }
    }
  }

  const onSubmit = (data: any, event: any) => {
    data['cost'] = {cost}.cost;
    // console.log(data)}
    server_calls.update(props.row.id, data);
    setTimeout(() => {window.location.reload()}, 1000);
    event.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label htmlFor="make">Make</label>
          <TextFieldInput {...register('make')} name='make' placeholder="Make"  value = {props.row.make}/>
        </div>
        <div className='my-3'>
          <label htmlFor="year">Year</label>
          <TextFieldInput {...register('year')} name='year' placeholder="Year" value = {props.row.year}/>
        </div>
        <div className='my-3'>
          <label htmlFor="model">Year</label>
          <TextFieldInput {...register('model')} name='model' placeholder="model" value = {props.row.model}/>
        </div>
        <div className='my-3'>
        <SelectField {...register('trim')} name='trim' defaultValue={props.row.trim} addons={ModelInfo} onChange={(e:any) => {setAddOns(e.target)}}></SelectField>
        </div>
        <div className='my-3'>
        <SelectField {...register('color')} name='color' defaultValue={props.row.color} addons = {ModelInfo} onChange = {(e:any) => {setAddOns(e.target)}}></SelectField>
        </div>
        <div className="flex p-1 text-center justify-center">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </button>
        </div>
      </form>
      <div className='mt-3'>
          <label htmlFor="cost">Cost</label>
          <div>{cost}</div>
        </div>
    </div>
  )
}

export default UpdateForm