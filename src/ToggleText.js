import { useEffect, useState } from "react"
// import {fakeapi} from './fakeapi'

const ToggleText = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    const fetches = ()=>{
         fetch(url)
   .then(res =>{
       if(res.status >=200 && res.status <=299){
        return res.json()
       }else {
           setLoading(false)
           setError(true)
           throw new Error(res.statusText)
       }
    })
   .then(data => {
       setTours(data)
       setLoading(false) 
    }).catch((err=> console.log(err)))
    }

   useEffect(()=>{
      fetches()

   }, [])

   
   if(loading){
       return <h1>Loading...</h1>
   }

   if(error){
       return <h1>Error...</h1>
   }

   if(tours.length === 0){
       return <div>
           <h1>No tours left</h1>
           <button onClick = {fetches}>Go back to all tours</button>
           </div>
   }

   const switckkeys = (id) =>{
    const filt = tours.filter(tog =>{
        return tog.id !== id
    })
    setTours(filt)
   }

      return( 
       <div>
           <h1>{tours.length} STORIES</h1>
           {tours.map(tour =>{
               const {id} = tour
               return <Tour key={id} {...tour}  switckkeys={switckkeys}>
                   

               </Tour>
           })}
       </div>
       )

        }   
        
const Tour = ({name, body, id, switckkeys})=>{
    const [toggle, setToggle] = useState(false)
      return (
        <div>
            <h1>{name}</h1>
                   <p>{toggle? body : `${body.substring(0, 50)}...`}
                     <button onClick={()=>setToggle(!toggle)}>
                        {toggle? 'show less' : 'read more'}
                     </button>
                   </p>
                   <button onClick={()=>switckkeys(id)}>
                        del
                    </button>
        </div>
    )
}


export default ToggleText

