import {typeProduct} from '@/types/products'
import '@/styles/product/productInCart.css'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'
import { useAppDispatch } from '@/redux/store'
import {increaseQuantity, decreaseQuantity, removeItemFromCart} from '@/redux/slices/cart'
import {toast} from 'react-toastify'

const ProductInCart = (props: typeProduct) => {
  const priceXquantity = (props.price * props.quantity).toFixed(2)
  const dispatch = useAppDispatch();

  const removeItem = () =>{
    toast.success(`Item ${props.title} removed from CART`)
    dispatch(removeItemFromCart(props))
  }

  return (
    <div className='productInCart'>
      <Row>

        <Col xs={12} md={3} lg={2} className='align-self-center text-center'>
          <img className='image' src={props.image}/>
        </Col>

        <Col xs={12} md={9} lg={10} className='mt-4 mt-md-0'>
          <Link className='link-to-product' to={`/product/${props.id}`}>
            <h6 className='title pe-4'>{props.title}</h6>
          </Link>

          <Row className='mt-3'>
            <Col xs={12} sm={4} className='text-center text-sm-start align-self-end col-xxs-4 pt-3'>
              <span className='cartActionTitle'>Price:</span>
              <span className='price'>${props.price.toFixed(2)}</span>
            </Col>

            <Col xs={12} sm={4} className='text-center align-self-end pb-1 col-xxs-4 pt-3'>
              <span className='cartActionTitle'>Quantity:</span>
              <div className='pt-2 d-inline-flex'>
                <Button className='quantityButton' onClick={() => dispatch(decreaseQuantity(props))}>-</Button> 
                <span className='quantityNumber'>{props.quantity}</span> 
                <Button className='quantityButton' onClick={() => dispatch(increaseQuantity(props))}>+</Button>
              </div>
            </Col>

            <Col xs={12} sm={4} className='text-center text-sm-end align-self-end col-xxs-4 pt-3'>
              <span className='cartActionTitle'>Total Price:</span>
              <span className='price'>${priceXquantity}</span>
            </Col>
          </Row>
        </Col>
          
        <Button className='buttonRemoveProduct' onClick={removeItem}>X</Button>

      </Row>
    </div>
  )
}

export default ProductInCart