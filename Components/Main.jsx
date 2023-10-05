import React from 'react'
import Card from './Card'
export default function Main({data1,curindex,setcurindex}) {
  const newdata= data1.slice(curindex,curindex + 6);
 
  return (
    <div className='container d-flex justify-content-center flex-wrap' >
      
      
      {newdata.map((item)=>{
        return <Card image={item.image} price={item.price} name={item.name} year={item.year} fuel={item.fuel} speed={item.speed} />
      })}
    </div>
  )
}
