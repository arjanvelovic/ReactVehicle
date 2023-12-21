import React from 'react'
import VehiclesInfo from '../components/VehiclesInfo'

export default function About() {
  console.log(Object.values(VehiclesInfo['Model 3']['trims']));
  console.log(Object.keys(VehiclesInfo['Model 3']['trims']));
  console.log(Object.entries(VehiclesInfo['Model 3']['trims']));

  for (let key in VehiclesInfo['Model 3']['trims']){
    let value = VehiclesInfo['Model 3']['trims'][key]
    console.log(`This is the key: ${key}, This is the value: ${value}`);
  }


  return (
  
    <div>
    Testing
    </div>
  )
}
