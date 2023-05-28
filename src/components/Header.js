import React ,{useContext}from 'react'
import Footer from './Footer'
// tell which context you want to use
import DataContext from '../context/DataContext';
export default function Header() {

  const ctx = useContext(DataContext);
  console.log(ctx);

  function handlechange(e){
   ctx.setName(e.target.value)
  }
    //desturcting the props 
  return (
    <div>
       <input placeholder='username' onChange={handlechange}/>
    </div>

  )
}
