import React, {useEffect, useState} from 'react'

const getLocalStorage = () =>{
  let allWeather = localStorage.getItem('allWeather')

  if(allWeather){
    return JSON.parse(localStorage.getItem('allWeather'))
  }
  else {
    return []
  }
}
 
const Weather = () => {
    const [cityName, setCityName] = useState('')
    const [allWeather, setAllWeather] = useState([])
    const [showModal, setshowModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const url = 'https://api.openweathermap.org/data/2.5/weather?'
    const key = 'efc9d0403b1c7c4c9cd96535b01e6a00'
// const resp = async 

    useEffect(()=>{
        localStorage.setItem('allWeather', JSON.stringify(allWeather) )
    },[allWeather])


    const getWeather = (e) =>{
        e.preventDefault()
setLoading(true)
        if(cityName){
             fetch(`${url}q=${cityName}&appid=${key}&units=metric`)
            .then(res => {
                if(res.status >=200  && res.status <=299){
                  return res.json()
                }else{
                    setLoading(false)
                    setError(true)
                    throw new Error(res.statusText)
                }
            })
            .then(data => {
                setAllWeather(data)
                setLoading(false)
                console.log(data)
                setCityName(''); 
                setshowModal(true)
            })
            .catch((err)=>console.log(err))


        }
        else{
            console.log('no entries')
        }
 
        
    }

    if(loading){
        return   <div className='mt5 f1 green'>Loading Data...</div>
    }
    if(error){
        return   <div > 
        <h1 className='mt5 f1 red'>Error...</h1>
        <a className='f5' href="/">Go Back</a>
        </div>
    }


    return (
        <>

            <h1 className='light-blue'>WEATHER CRUISE</h1>
            <form  onSubmit= {getWeather}>
                <input type="text" value={cityName} placeholder='e.g Ljubljana'
                onChange= {(e)=>setCityName(e.target.value)} />
                {/* <button > Get Weather </button> */}
            </form>

        {showModal &&    <div className='modal absolute top-0'>
                <div className= 'absolute top-1 right-1'>
                  <button onClick={()=>setshowModal(false)}><i className=" f3 red fas fa-times "></i></button>  
                </div>
                <div className='card bg-light-blue shadow-5'>
                    
                    <div>
                        <p className='f2 ma0 '>{allWeather.name}, {allWeather.sys.country}</p>
                        <p > {allWeather.weather[0].description}</p>
                        <p className= {` ${allWeather.main.temp > 15 && 'red' } f1 pa0 ma0`}> {Math.round(allWeather.main.temp)}&deg;C</p>

                        <div className='flex justify-around  center f6 b'>
                            <p className='red '> H: {Math.round(allWeather.main.temp_max)}&deg;C</p>
                            <p> L: {Math.round(allWeather.main.temp_min)}&deg;C</p>
                        </div>
                        <div className='flex justify-around flex-wrap items-center justify-center '>
                           <p className='ma0 f6' >Feels Like: <span className={` ${allWeather.main.feels_like > 15 && 'red'}`}>{Math.round(allWeather.main.feels_like)}&deg;C</span> </p>
                        <img src={`http://openweathermap.org/img/wn/${allWeather.weather[0].icon}@2x.png`} alt="icon"/> 
                        </div>
                    </div>
                    <div>
                        <p className='f6'>Today: {allWeather.weather[0].description} currently. It's {Math.round(allWeather.main.temp)}&deg;; the high today is forecast as {Math.round(allWeather.main.temp_max)}&deg;. </p>
                    </div>
                    <div className='flex justify-around flex-wrap items-center justify-center '>
                        <div>
                            <p className='head-weather green b '>HUMIDITY</p>
                            <p className=' bot-weather  '>{Math.round(allWeather.main.humidity)}%</p>
                        </div>
                        <div>
                            <p className='head-weather red b'>PRESSURE</p>
                            <p className=' bot-weather'>{Math.round(allWeather.main.pressure)} hPa</p>
                        </div>

                        <div>
                            <p className='head-weather b blue'>VISIBILITY</p>
                            <p className=' bot-weather  '>{allWeather.visibility}</p>
                        </div>
                        <div>
                            <p className='head-weather purple b '>WIND</p>
                            <p className=' bot-weather  '>{Math.round(allWeather.wind.speed)} km/hr</p>
                        </div>

                    </div>
                        
                </div>
            </div>
            }

                                            
        </>
    )
    }

    

export default Weather
