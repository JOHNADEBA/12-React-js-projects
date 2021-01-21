import React, { useEffect, useState } from 'react'
const url = 'https://api.github.com/users'
 

const Aapi = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        fetch(url)
        .then(response => {
        if(response.status >=200 && response.status <=299){
        return response.json()
        }else{
            setLoading(false)
            setError(true)
            throw new Error(response.statusText())
        }})
        .then(data => {
        setUsers(data)
        setLoading(false)
    })
    .catch((err)=>console.log(err))

    }, [])

    

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Error...</h1>
    }

    if(users){
        return (<ul>
            {users.map(user=>{
                const {id, login, avatar_url, html_url} = user;
                return (<li key={id} >
                    <img src={avatar_url} alt={login}/>
                    <h1>{login}</h1>
                    <p>{html_url}</p>
                </li>)
            })}

        </ul>)
    }

 
}

export default Aapi
