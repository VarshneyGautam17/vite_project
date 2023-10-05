import React from 'react'
import "../Styles/Card.css";
import {GiSteeringWheel} from "react-icons/gi";
import {GoPeople} from "react-icons/go";
import {IoMdSpeedometer} from "react-icons/io";
import {LuFuel} from "react-icons/lu";
import {AiOutlineHeart} from "react-icons/ai";

function Card(props) {
  const {image,price,name,year,fuel,speed}=props;
  return (
    <div className="card mx-2 my-1" style={{ width: "18rem" }}>
  <img className="card-img-top imageclass" src={image} alt="Card image cap" />
  <div className="card-body">
    <div className="d-flex justify-content-between">
      <h5 className="card-title">{name}</h5>
      <span className='year '>{year}</span>
    </div>
    
    <div>
      <div className='d-flex '>
        <span className='w-50'><GoPeople className='icon'/>4 People</span>
        <span className='w-50'><LuFuel className='icon'/>{fuel}</span>
        </div>
      <div className='d-flex justify-content-between'>


      <span className='w-50'><IoMdSpeedometer className='icon'/>{speed}km /1-liter 
        </span>
      <span className='w-50'><GiSteeringWheel className='icon'/>Automatic</span>
      </div>
    </div>

    <div className="border mt-3"></div>
    <div className='footer mt-2 d-flex justify-content-between'>
    <div>
      <h2 className='d-inline-block'>${price}</h2>
      /month
    </div>


    <div>
    <button className='rounded mx-2 btn btn-sm fs-5 p-0 px-1 icon' style={{backgroundColor:"rgb(202, 229, 252)"}}><AiOutlineHeart/></button>
    <a href="#" className="btn btn-sm btn-primary">
      Rent Now
    </a>
    </ div>
    </div>
   
  </div>
</div>

  )
}

export default Card