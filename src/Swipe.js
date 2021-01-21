import { useEffect, useState } from "react";

const Swipe = ()=>{
    const [profile, setProfile] = useState([])
    const [index, setIndex] = useState(0)

    const fetches = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res => res.json())
        .then(data => setProfile(data[index]))
    }

    useEffect(()=>{
        fetches()
    })

    const validateNo = (no) =>{
        if(no > profile.length - 1){
            return 0
        }

        if(no < 0){
            return profile.length - 1
        }
        return no;
    }

    const nextP =()=>{
        setIndex(index=>{
          let newindex =  index + 1
        //   return (newindex) ; 
          return validateNo(newindex) ; 
        })
    }
    
    const prevP =()=>{
       setIndex(index =>{
           let newindex = index - 1
        return validateNo(newindex) ;
        })
    }

    const randProfile = ()=>{
        let rand = Math.floor(Math.random() * profile.length)
        if(rand === index){
            rand = index + 1
        }
        // setIndex(validateNo(rand))
        setIndex(rand)
    }

    return(
        <div>
            <h1> {profile.name}</h1>
            <p>{profile.body}</p>
             <button onClick={prevP}>-</button>
             <button onClick={nextP}>+</button>
            
         
         <div>
         <button onClick={randProfile}>random</button>
            </div>
        </div>
        
    )
}
export default Swipe;