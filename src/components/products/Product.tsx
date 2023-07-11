
import {typeProduct} from '@/types/products'
import { Col } from 'react-bootstrap'
import '@/styles/product/product.css'
import { Link } from 'react-router-dom'

const Product = (props: typeProduct) => {
  return (
    <Col sm={6} md={4} lg={3} className='mb-4 col-xxs-6'>
      <Link className='product-link' to={`/product/${props.id}`}>
      <div className='product'>
        <div className='image-container'>
          <img className='image' src={props.image}/>
        </div>
        <h6 className='title'>{props.title}</h6>
        <div className='bottom-content'>
          <p className='price'>${props.price.toFixed(2)}</p>
        </div>
      </div>
      </Link>
    </Col>
  )
}

export default Product