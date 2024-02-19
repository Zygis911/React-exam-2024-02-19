import { useState } from "react"

export const Registration = () => {
    
    const [inputValue, setInputValue] = useState()
 
    const handleInputChange = (event) => {
        console.log('event', event.target.value)
        setInputValue(event.target.value)
    }
 
    return (

   

    <>
      <form>
        <label>
          Input form
          <input type='text' value={inputValue} onChange={handleInputChange} />
        </label>
      </form>
      <p>{inputValue}</p>
    </>
  );
};