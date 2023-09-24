
import './Menufoods.css'

//------import components
import Article from '../../Components/article/Article';
//------ React Bootstarp
import {Container,Row,Col} from 'react-bootstrap';
//------ Data
import { foodList } from '../../data/items';

export default function Menufoods() {
  
  return (
    <>
      <Container className='container-menufood ' >
        <Row>
          {
            foodList.map(food=>
                        (<Col key={food.id} sm={12} md={6} lg={4} xl={3}>
                          <Article  {...food} />
                        </Col>)
                      )
          }
          
        </Row>
      </Container>
    </>
  )
}
