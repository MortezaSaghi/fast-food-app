import {useContext} from 'react'
//----- import reactbootstrap
import {Button, ButtonGroup} from 'react-bootstrap'
//---- import Context
import {ShopContext} from '../../context/ShopContext'




export default function ButtonChangCoantity({id,quantity}) {
    const shopContext = useContext(ShopContext);
  return (
    <ButtonGroup >
        <Button size='sm' variant='outline-dark'onClick={()=>{shopContext.removeFoodFromShoppinglist(id)}}>-</Button>
        <label className='px-1 fw-bold'>{quantity}</label>
        <Button size='sm' variant='outline-dark'onClick={()=>{shopContext.addShopToShoppinglist(id)}}>+</Button>
    </ButtonGroup>
  )
}
