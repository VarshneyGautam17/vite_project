import { useState } from 'react'
import './App.css'
import Header from '../Components/Header'
import Main from '../Components/Main'
import data from '../src/Utils/data.json'
import Footer from '../Components/Footer'

function App() {
  const [list,setlist]=useState(data);
  const [curindex,setcurindex]=useState(0);
  return (
    <>
        <Header data1={data} setlist={setlist}/> 
        <Main data1={list} curindex={curindex} setcurindex={setcurindex}/>
        <Footer data1={list} setlist={setlist} curindex={curindex} setcurindex={setcurindex}/>
    </>
  )
}

export default App
