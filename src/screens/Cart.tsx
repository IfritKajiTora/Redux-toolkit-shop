import { useAppDispatch, useAppSelector } from "@/redux/store"
import { Button, Container } from "react-bootstrap"
import ProductInCart from "@/components/products/ProductInCart";
import { typeProduct } from "@/types/products";
import { removeAllItemsFromCart } from "@/redux/slices/cart";
import {toast} from 'react-toastify'

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cart);

  const removeAllItems = () => {
    dispatch(removeAllItemsFromCart());
    toast.success('All products removed from your CART')
  }

  return (
    <section className='min-height-100vh-solo d-flex'>
      <Container className='py-5 m-auto'>
       
        {cartData.cartItems.length != 0
        ? <> 
          <h1 className='text-center mb-4 primary-title'>Cart</h1>
          {cartData.cartItems.map((product: typeProduct) => {
            return <ProductInCart key={product.id} {...product}/>
          })}
          <Button onClick={removeAllItems}>Remove all items from Cart</Button>
          <div className='text-end'>
            <span className='cartActionTitle'>Total items: </span><span className="totalItems"> {cartData.cartTotalQuantity}</span>
            <br/><br/>
            <span className='cartActionTitle'>Total price: </span><span className="primary-title"> ${cartData.cartTotalPrice.toFixed(2)}</span>
            <Button className='checkoutButton'>Go to checkout (placeholder)</Button>
          </div>
          </>
        : <>
          <h1 className='text-center primary-title'>No items in your cart</h1>
          </> 
        }
        
      </Container>
    </section>
  )
}

export default Cart