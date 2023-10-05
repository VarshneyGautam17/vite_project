import React from 'react'
import '../Styles/Footer.css';
export default function Footer({data1,setlist,curindex,setcurindex}) {
    const handleclick=(value)=>{
        if(value=="left")
        {
            if(curindex-6<0)
            setcurindex(0);
        else
        setcurindex(curindex-6);
        console.log(curindex);
        }
        else if (value=="1")
        {
            // console.log("1");
            setcurindex(0);
        console.log(curindex);


        }
        else if (value=="2")
        {
            setcurindex(6);
        console.log(curindex);


        }
        else if (value=="3")
        {
            // console.log("3");
            setcurindex(12);
        console.log(curindex);



        }
        else
        {
            if(curindex+6>16)
            setcurindex(0);
            else
            setcurindex(curindex+6);
            console.log(curindex);

            
        }
    }
  return (
    <div className='d-flex justify-content-between'>
        <div></div>
        <div>

            <button  className='btn btn-sm button' onClick={()=>{handleclick("left")}}>&larr;</button>
            <button  className='btn btn-sm button' onClick={()=>{handleclick("1")}}>1</button>
            <button  className='btn btn-sm button' onClick={()=>{handleclick("2")}}>2</button>
            <button  className='btn btn-sm button' onClick={()=>{handleclick("3")}}>3</button>
            <button  className='btn btn-sm button' onClick={()=>{handleclick("right")}} >&rarr;</button>

        </div>
    </div>
  )
}
