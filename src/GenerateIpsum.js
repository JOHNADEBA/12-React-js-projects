import { useState } from "react"
import {text} from './text'

const GenerateIpsum = () => {
   const [count, setCount] = useState(0)
   const [texts, setTexts] = useState([])

   const handleSubmit = (e) =>{
       e.preventDefault()

       let amount = parseInt(count)
       if(count <=0){
           amount = 1
       }
       if(count >7){
           amount = 7
       }
       setTexts(text.slice(0, amount))
   }
    return(
       <div>
           <h1>Generate Text</h1>

           <form>
               <label htmlFor="para">Paragraph: </label>
               <input type="number" id='para' value={count} onChange={(e)=>console.log(setCount(e.target.value))}/>
                <button onClick={handleSubmit}>
                    Generate
                </button>
           </form>

           <div>
               {texts.map((itm, i) =>{
                   return <p key={i}>{itm} </p>
               })}
               
           </div>
       </div>
   )
}

export default GenerateIpsum
