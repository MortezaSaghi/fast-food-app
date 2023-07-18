import React from 'react'
import './Article.css'

export default function Article({id,name,price,pic,nummer,addHandler}) {
  return (
    <div>
      <div className="card">
        <div className="img-box"><img src={pic} alt="" /></div>
        <div className="content">
          <div className="content-desc">
            <h2 className="name">{name}</h2>
            <p className="price">{price}$</p>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, similique
            </p>
          </div>
          <p>
            <button onClick={()=>addHandler({id,name,price,pic,nummer})}>Add</button>
          </p>
        </div>
      </div>
    </div>
  )
}
