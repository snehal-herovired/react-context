import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState} from "react"
function App() {
// states
// intial 
// hooks : responsible for managing state of our webpage is (useState)
// let [statevariable,statefunction] =useState(defaultstate/intial state)
// const [name,setName]=useState('herovired');
// const [num,setNum]=useState(0)
// // statevariable =this is responsible for storing the state of your component
// //statefunction = this is responsible for manipulating or changing the statevariable according to events.
// console.log("this is name",name);
// console.log("this is statefunction",setName);

// function handleClick(){
// console.log("i am clicking the button");
// // in order to chnage the state of our name , we will use statefuntion
// setName('hero')
// }
// function increment(){
//   console.log("this is number ",num);
//   setNum(num+1);
 
// }

  return (
       //   key    value
  //  <Header myname={name} mynumber={num}/>
  <div>
    <Header/>
    <Footer/>
  </div>
    
  );
}

export default App;

//props :propert or value , which we want to pass from one component to another
// props can be passed from parent to child not from child from parent 
// siblings can not pass props to each other
