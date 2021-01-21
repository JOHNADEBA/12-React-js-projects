import { useState } from 'react'
import {fakeapi} from './fakeapi'

const Accordion = () => {
    const [accord, setAccord] = useState(fakeapi)
    
return(
    <div className='center pt3'>
        <h1 className='light-blue mt0'><span className='red'>+</span> ACCORDION... <span className='red'>-</span></h1>
       {accord.map(item =>{
           const {id} = item
        return  <Accord key={id} {...item} />
       })}
    </div>
)

}
const Accord = ({title, body})=>{
    const [showText, setShowText] = useState(false)
    return(
         <div className='shadow-5 br3 mt1 w-50 center '>
            <h3 className='red pt2 relative'>{title.substring(0, 10)}
                <button className='btn absolute right-0 top-0 btn f3 '  onClick={()=>setShowText(!showText)}>
                    {showText? '-' : '+'}
                </button>
            </h3>
            <p className='green pb3 ph2 mt1 '>{showText && body}</p>
           </div>
    )
}
export default Accordion
