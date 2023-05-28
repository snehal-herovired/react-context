import React ,{useContext}from 'react'
import DataContext from '../context/DataContext'
export default function Footer() {
  let ctx =useContext(DataContext)
  return (
    <div>
     I am in footer component
     <div>

     {ctx.name}
     </div>
    </div>
  )
}
