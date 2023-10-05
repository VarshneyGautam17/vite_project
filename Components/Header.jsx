import React from 'react'
import "../Styles/Header.css"
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineDown} from "react-icons/ai";

export default function Header({data1,setlist}) {
  // const [inpvalue,setinpvalue]=useState('');
  const handleChange=(event)=>{

    let newList=data1.filter((item)=>{  
      return item.name.includes(event.target.value);
    });
      // if(newList.length==0)
      // {setlist(data1);}
      // else
      // {
      setlist(newList);
    // }
      // console.log(event.target.value);
  }
  return (
    <nav className="navbar" >
    <div className="container d-flex justify-content-start">
      <div className='d-flex'>
      <input
          className="searchbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id='searchbar'
          onChange={handleChange}
        />
        <div className='icon1'>
        <AiOutlineSearch className='fs-3 p-1' />
      </div>
      </div>
      <div className='mx-2 others'>Relevance <AiOutlineDown/></div>
      <div className='mx-2 others '>All Brands <AiOutlineDown/></div>

        
    </div>
  </nav>
  
  )
}
