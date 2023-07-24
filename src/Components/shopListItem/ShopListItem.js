import {useContext} from 'react'
//------ import react bootstrap
import { Button, Row, Col } from "react-bootstrap"
//-------import Context
import {ShopContext} from '../../context/ShopContext'
//-------import fooddata function
import {getFoodData} from '../../data/items'
//-----import Components
import ButtonChangCoantity from '../button/ButtonChangCoantity'

export default function ShopListItem({id,quantity}) {
    const shopContext=useContext(ShopContext)
    const foodData=getFoodData(id)
  return (
    <>
        <Row key={id}>
                  <Col xs={3}>{foodData.name}</Col>
                  <Col xs={3}><ButtonChangCoantity id={id} quantity={quantity}/></Col>
                  <Col xs={2}>{foodData.price} $</Col>
                  <Col xs={2}>
                    {quantity * foodData.price} $
                  </Col>
                  <Col xs={2}>
                    <Button
                      className="mb-1"
                      size="sm"
                      variant="outline-danger"
                      onClick={() =>
                        shopContext.deleteFromshoppinglist(id)
                      }
                    >
                      Delete
                    </Button>
                  </Col>
                  <hr />
                </Row>
    </>
  )
}
