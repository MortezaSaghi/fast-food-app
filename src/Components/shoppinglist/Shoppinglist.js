import React from "react";
import "./Shoppinglist.css";
// import Nummberorder from "../button/Nummberorder";


export default function Shoppinglist({numberofproduct,shoppinglist,removeHander,showShoppinglist,totalprice,addHandler}) {

   
  return (
    <div className="main-shoop-card">
      <div className="shoop-card">
        <table className="table-orders">
          
          <tbody>
            {numberofproduct!==0 && shoppinglist.map((order) => (
              <tr key={order.id}>
                <td className="artikel-img">
                  <img src={order.pic} alt="" />
                </td>
                <td className="titel-order">{order.name}</td>
                {/* <td className="titel-order"><Nummberorder id={order.id} num={order.nummer} addHandler={addHandler} /></td> */}
                <td className="price-order">Price : {order.price}$</td>
                <td>
                  <button className="Remove-order" onClick={()=>removeHander(order.id)}>Remove</button>
                </td>
              </tr>
            ))}
            {
              !numberofproduct && (<tr> <td>basket ist leer ...</td></tr>)
            }
            
               <tr className="sum-box" ><td></td></tr> 
             {
              numberofproduct!==0 && (<tr className="sum-box" ><td  colSpan={5}>Total Price : {totalprice!==0? totalprice+'$':''}</td></tr> )
             }  
               
          </tbody>
        </table>
        <div className="btn-section">
            <button className="btn-buy">Buy</button>
            <button className="btn-buy" onClick={showShoppinglist}>Close</button>
            </div>
      </div>
    </div>
  );
}

// {props.shoppingcart.map((order) => (
//     <div key={order.id} className="card-order">
//       <div className="artikel-img">
//         <img src={order.pic} alt="" />
//       </div>
//       <div className="titel-order">{order.name}</div>
//       <div className="order">
//         <div className="description">sehr lekker ...</div>
//         <div className="order-price">{order.price}$</div>
//       </div>
//       <button className="Remove-order">Remove</button>
//     </div>
//   ))}
