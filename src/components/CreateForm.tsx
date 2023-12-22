import createServer from "../api/createServer";
import TextFieldInput from "./TextFieldInput"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import VehiclesInfo from "./VehiclesInfo";
import SelectField from "./SelectField";

interface CreateFormProps {
    model: string
  }

const CreateForm = (props:CreateFormProps) => {
  const model = props.model
  const ModelInfo = VehiclesInfo[model]
  const BaseCost = ModelInfo['baseCost']
  const [cost, setCost] = useState(BaseCost)
  const [color, setColor] = useState('none')
  const [trim, setTrim] = useState('none')

  const {POSTData, status} = createServer();

  const setAddOns = (target:any) => {
    if (target['name'] === 'color'){
      let currentColor = target['value']
      setColor(currentColor)
      let currentTrim = trim

      let colorCost = ModelInfo['color'][currentColor]
      if (currentTrim === 'none'){
        let trimCost = 0
        setCost(BaseCost+colorCost+trimCost)
      }
      else {
        let trimCost = ModelInfo['trim'][currentTrim]
        setCost(BaseCost+colorCost+trimCost)
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
      }
      else {
        let colorCost = ModelInfo['color'][currentColor]
        setCost(BaseCost+colorCost+trimCost)
      }
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
          <TextFieldInput name='model' placeholder="Model"  value = {model}/>
        </div>
        <div className='my-3'>
        <SelectField name='trim' defaultValue='none' addons={ModelInfo} onChange={(e:any) => {setAddOns(e.target)}}></SelectField>
        </div>
        <div className='my-3'>
        <SelectField name='color' defaultValue='none' addons={ModelInfo} onChange={(e:any) => {setAddOns(e.target)}}></SelectField>
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