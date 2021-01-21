import { useEffect, useState } from "react"

const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
 const SideProfile = ()=>{
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState([])
    const [index, setIndex] = useState(0)
    const [error, setError] = useState(false)

     useEffect(()=>{

        fetch(url)
        .then(res => {
            if(res.status >=200 && res.status <=299 ){
              return  res.json()
        }else{
            setLoading(false)
            setError(true)
            throw new Error(res.statusText())
        }})
        .then(data => {
            setProfile(data)
            setLoading(false)
        })
        .catch((err)=>console.log(err))
     })

     if(loading){
         return <h1>Loading...</h1>
     }
     if(error){
         return <h1>Error...</h1>
     }

     const {email, body} = profile[index]

     return <div className='flex justify-between w-75 center'>
         <div className='flex flex-column items-center mt3'>
            {profile.map((item, i)=>{
                return <button key={item.id}
                onClick={()=>setIndex(i)}
                className={`ma2 pointer  ${index === i && 'button'}`}>
                    {item.name.substring(0, 5)}

                </button>
            })}
         </div>

         <div className='tl mh2 mt3'>
         <h2 className='red'>{email}</h2>
         <p>{body}</p>
         </div>

     </div>
 }

export default SideProfile
