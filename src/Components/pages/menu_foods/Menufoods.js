import React from 'react'
import './Menufoods.css'

//------import components
import Article from '../../article/Article'

export default function Menufoods({foods,addHandler}) {
  console.log(foods)
  return (
    <div className='container'>
      <div className="foodList">
          {
            foods.map(food=>
              (<Article key={food.id} {...food} addHandler={addHandler} />)
            )
          }
      </div>
    </div>
  )
}
