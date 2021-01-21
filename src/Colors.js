import { useEffect, useState } from 'react'
import Values from 'values.js'

const Colors = () => {

       const [colors, setColors] = useState('')
    const [error, setError] = useState(false)
    const [colorList, setColorList] = useState(new Values('#d67a74').all(10))
    
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        try {
        let color = new Values(colors).all(10)
        setColorList(color)
            console.log(color)
        } catch(error){
            setError(true)
            console.log(error)
        }
    }

    
    return (
        <>
        <h1 className='red f2'>GET YOUR FAV COLOURS</h1>
            <form className='flex w-100 center flex-column items-center mb2 ' onSubmit={handleSubmit}>
                <input type="text" placeholder='#d67a74'
                value ={colors} onChange={(e)=>setColors(e.target.value)}
                className={error? 'error' : null}
                />
                <button className=' mv3 center'>
                    Get Colours
                </button>
            </form>

            <section className='flex flex-wrap justify-center'>
                {colorList.map((item, i)=>{
                    return <ColorList hexa={item.hex} i={i} {...item} key={i}/>
                })}
            </section>
        </>
    )
}

const ColorList = ({rgb, weight, i, hexa})=>{
    const [copy, setCopy] = useState(false)
    
    useEffect(()=>{
      const timeOut = setTimeout(()=>{
            setCopy(false)
        }, 3000)

        return ()=>clearTimeout(timeOut)

    },[copy])
    const copyColor = ()=>{
        setCopy(true)
        navigator.clipboard.writeText(hexa)
        
    }
     const hexas = `#${hexa}`

    return <div onClick={copyColor} 
                    className = {`${i > 10 && 'white'} color relative `}
                    key={i} style={{backgroundColor : `rgb(${rgb})`}}>
                    <p style={{fontSize : '10px'}} className= {`{i > 10? 'white ' : null} absolute top-0 left-2`}>{copy && 'copied to clipboard'}</p>
                    <p  className= ' pt4' >{weight}%</p>
                    <p>{hexas}</p>
             </div>
}


export default Colors
