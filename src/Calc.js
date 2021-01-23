import React, { useEffect, useState } from 'react'
const nums = [1,2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '±', '%', 'Clear'];
const operators = ['/', 'x', '+', '-', '=']

const Calc = () => {
    const [result, setResult] = useState('0')
    const [operator, setOperator] = useState('')
    const [storage, setStorage] = useState(undefined)

    const getNum = (e) =>{
        const numb = e.target.innerText

        if(!Number.isNaN(Number(numb))){
            if(result === '0' ){
               return setResult(numb)
            }
            else{
               return setResult(result + (numb) )
            }
            
        }
        if(numb === 'Clear'){
            setResult('0')
            setStorage(undefined)
            return;

        }        
        if (numb === '%'){
             setResult(result / 100)
             setOperator(undefined)             
             setStorage(undefined)

             return;
        }
        if (numb === '.'){
             if(!result.includes('.')){
             setResult(result + numb)
             }
             return;
        }
        if (numb === '±'){
             setResult(result * -1)             
             return;
        }
        if (numb === '/'){
            setStorage(result)
            setOperator('/')
            setResult('0')
             return;
        }     
        if (numb === 'x'){
            setStorage(result)
            setOperator('x')
            setResult('0')
             return;
        }        
        if (numb === '+'){
            setStorage(result)
            setOperator('+')
            setResult('0')
             return;
        }        
        if (numb === '-'){
            setStorage(result)
            setOperator('-')
            setResult('0')
             return;
        }             
        if (numb === '='){

            if(!operator) return;

            switch(operator){
                case '/':
                    setResult(Number(storage / result))
                    break;
                case 'x':
                    setResult(Number(storage * result))
                    break;
                case '+':
                    setResult(Number(storage + result))
                    break;
                case '-':
                    setResult(Number(storage - result))
                    break;
            }
            setStorage(undefined)
            setOperator(undefined)
            
             return;
        }             
           


    }  
    
     
    return (
        <article className = 'ma5' >
            <div className='calc-wrapper'>

                <div className= 'result'>{result}</div>
                <div className =' keys-wrapper' >
                    <div className =' left-wrapper'>
                    
                        {nums.map((itm, i)=>{
                            return <div  onClick={getNum} className ={` ${itm === 'Clear' && 'clear'} calc-button`} key={i}>{itm}</div>
                        })}
                    </div>
                    <div className =' right-wrapper'>
                    
                        {operators.map((itm, i)=>{
                            return <div onClick={getNum} className ='calc-signs' key={i}>{itm}</div>
                        })}
                    </div>
                </div>
                
            </div>    
        </article>
    )
}

export default Calc
