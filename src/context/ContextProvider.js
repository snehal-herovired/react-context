// this is context provider , and it is a wrapper function which will help us to provide the context data throught the application
// children prop is a special prop which is used generally in wrapper function.
// in wrapper function chidren prop helps them to wrap around the other components.
import React ,{useState}from 'react'
import DataContext from './DataContext'
export default function ContextProvider({children}) {
    let a =10;
    const [name,setName] =useState("hero")
  return (
    <DataContext.Provider value={{a,name,setName}}>
     {children}

    </DataContext.Provider>





  )
}
