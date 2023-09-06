import { useState } from "react"
import "./App.css"
import Callback from "./callback.jsx"

// whats the easiest way to pass down a prop from a parent to a child component?

export default function App() {
   const [UIcolor, setUIColor] = useState(null)

   const getColor = (color) => {
      // this is the callback function that will be passed down to the child component
      setUIColor(color) // arrow function that will set the state of the parent component
   } // it returns the value of the child component's state to a variable in the parent component (UIcolor)

   return (
      <>
         <div style={{ background: `${UIcolor}`, height: "100px" }}>
            <Callback getColor={getColor} />
         </div>
      </>
   )
}
