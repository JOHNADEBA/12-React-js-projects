import React, { useState } from 'react'
import {oryxapi} from './oryxapi'

const Oryx = () => {
    const [menu, setMenu] = useState(oryxapi)
    const [index, setIndex] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const {submenu} = menu[index]
    return (
        <>

        <div class="nav">
            <nav>
                <div class="main-nav fist">
                <i class="icon fa fa-envelope-open" ></i>
                <a href="#">help@gocardless.com</a>
                </div> 

                <div class="main-nav">
                <i class=" icon  fa fa-phone" ></i>
                <a href="#">020 7183 8674</a>
                <p className='para'>(9am-6pm Mon-Fri)</p>
                </div> 

                <div class="main-nav">
                <i class=" icon fas fa-comment" aria-hidden="true"></i>
                <a href="#">Developer chat room</a>
                </div> 

                <div class="main-nav">
                <i className=" icon fas fa-info"></i>
                <a href="#">Help center</a>
                </div>  

                 <div className='bar'
                  onClick={()=>setShowMenu(!showMenu)}
                >
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                 </div>      
            </nav>
            
        </div>


        <main className='main '>
             <section className='sect '>
                
           { menu.map((itm, i) =>{
               return <div key={itm.id}>
                   <h5 className={`${index === i && 'observess'} ${showMenu && 'shows'}`} 
                onClick={()=>{
                   setShowMenu(false)
                   setIndex(i)}}>
                   {itm.title}
               </h5>
               </div> 
           })}
           </section>

           <aside className=' aside'>
                {submenu.map((itm, i)=>{
                    return <p key={i}>
                        <a href="#">{itm}</a></p>
                })} 
            </aside>
        </main>

        </>
    )
}
// const Body = ({title, submenu})=>{
//     const [aside, setAside] = useState(false)

    
//     return(
//         <main className='main '>
//             <section className='sect '>
//                 <h5 className={`aside && 'observe'`} onClick={()=>setAside(!aside)}>{title}</h5>
//             </section>
//             <aside className=' aside'>
//                 <p >{ submenu}</p>
//             </aside>
           
//         </main>
//     )
// }

export default Oryx
