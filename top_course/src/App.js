
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { filterData } from './data';
import { apiUrl } from './data';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Spinner from './Components/Spinner';
function App() {
  const [Course,setCourse]=useState(null)
  const [Loading,setLoading]=useState(true)
  const [category,setCategory]=useState(filterData[0].title)
  async function fetchData()
  {
    setLoading(true)
    try
    {
         let response=await fetch(apiUrl);
         let output=await response.json();
         setCourse(output.data)
    }
    catch(error)
    {
      toast.error("Network Error")
    }
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(category)
  return (
    <div  className="min-h-screen flex flex-col bg-bgDark  bg-opacity-50">
    <div>
      <Navbar/>
    </div>
       <div >
       <div>
      <Filter category={category} setCategory={setCategory} filterData={filterData}></Filter>
    </div>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
      {
        Loading?(<Spinner></Spinner>):(<Cards Course={Course} category={category}></Cards>)
      }
    </div>
       </div>
    </div>
  );
}

export default App;
