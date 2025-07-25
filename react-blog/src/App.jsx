import { createElement } from "react"

function App() {

  return createElement("div",{id:"rootdiv"},createElement("h1",{class:'h1tag'},"Heading"))
}


export default App