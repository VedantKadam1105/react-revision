import Header from "./Header"
import {Login} from "./UserComponent"
function App() {
  return(
    <>
    <h1>Hello</h1>
    <h1>Code step by step</h1>
    <Header></Header>
    <Fruit></Fruit>
    <Colour></Colour>
    <Login></Login>
    {sum(30,20)}
    </>
    
  )
}


function Fruit() {
  return(
    <>
    <h1>Apple</h1></>
  )
}

function Colour() {
  return(
    <>
    <h1>Red</h1></>
  )
}

function sum(i,j) {
  return i+j;
}
export default App