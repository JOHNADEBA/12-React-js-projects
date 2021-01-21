import {useState} from 'react'
import {allMenus} from './allMenus'


const Menu = () => {
    const [all, setAll ] = useState(allMenus)

    const filtMeals = (type)=>{        
        const meals = allMenus.filter(menu =>{
            return menu.type === type
        })
        setAll(meals)
    };
    
    return (
        <>
            <header>
                <h1 className = ' head f1 ma0 mt4 '>Our Menu</h1>
                <hr />
            </header>

            <nav>
                <ul className='list '>
                    <li><button onClick={()=>setAll(allMenus)}>All</button></li>
                    <li><button onClick={()=>filtMeals('breakfast')}>Breakfast</button></li>
                    <li><button onClick={()=>filtMeals('lunch')}>Lunch</button></li>
                    <li><button onClick={()=>filtMeals('dinner')}>Dinner</button></li>
                    
                </ul>

            </nav>

            <div className=' food ma0'>
                 {all.map(menu=>{
                     const {id, pic, title, price, desc} = menu
                return <div key={id} className='menu dib ma3'>
                    <div>
                        <img className='image' src={pic} alt={title}/>
                    </div>

                    <div className='right'>
                        <div className=' second'>
                            <h3>{title}</h3>
                            <h3 className='price'>{price}</h3>
                        </div>
                        <div>
                        <p className='tc pr3 para'>{desc}</p>
                        </div>
                    </div>    

                </div>
                })}

            </div>
           
                
        </>
    )
}

export default Menu;
