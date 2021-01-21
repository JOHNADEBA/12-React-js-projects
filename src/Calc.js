import React, { useEffect, useState } from 'react'
const nums = [1,2, 3, 4, 5, 6, 7, 8, 9, '.',0, '='];
const operators = ['/', 'x', '+', '-']

const Calc = () => {
    const [num1, setNum1] = useState('')
    const [signs, setSigns] = useState('')


    // const [num2, setNum2] = useState('')

    useEffect(()=>{
        console.log(num1, '', signs );
    }, [num1, signs])

    const getNum1 = (val) =>{
        setNum1(num1 + val)
    }
    
    const getSigns = (val =>{
        setSigns(signs + val )
    })
    return (
        <article className = 'ma5' >
            <div className='calc-wrapper'>

                <div className= 'result'></div>
                <div className =' keys-wrapper' >
                    <div className =' left-wrapper'>
                    
                        {nums.map((itm, i)=>{
                            return <div onClick={()=>getNum1(itm)} className ='calc-button' key={i}>{itm}</div>
                        })}
                    </div>
                    <div className =' right-wrapper'>
                    
                        {operators.map((itm, i)=>{
                            return <div onClick={()=>getNum1(itm)} className ='calc-signs' key={i}>{itm}</div>
                        })}
                    </div>
                </div>
                <div className='clear'> Clear</div>
            </div>
           
            
            
        </article>
    )
}

export default Calc
