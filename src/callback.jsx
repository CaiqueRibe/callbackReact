import { useState } from "react"

const Callback = ({ getColor }) => {
   const [activeColor, setActivecolor] = useState("")

   const handleChage = (e) => {
      // this is the function that will be called when the input changes
      const { value } = e.target // this is the value of the input
      setActivecolor(value) // this sets the state of the child component
      getColor(value) // this is the callback function that will be passed down to the parent component
   }

   return (
      <>
         <input
            type="text"
            id="input"
            aria-label="input"
            onChange={handleChage} // this is the callback function that will be called when the input changes
            value={activeColor} // this is the state of the child component
         />
      </>
   )
}

export default Callback
