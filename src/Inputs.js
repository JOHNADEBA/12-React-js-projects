import React, { useState } from 'react'

const Inputs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
       
        if(name && email){
             const person = {name, email}
            setPeople([person]) 
                       
           
        }
        else{
            console.log('no entries')
        }
        
    }
  return(
      <>
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <label htmlFor="email">Email: </label>
          <input type="text" name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <button >SHOW</button>
      </form>
     
      {people.map((person, i) =>{
          return <div key={i}>
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
      })}

      </>
  )
}

export default Inputs
