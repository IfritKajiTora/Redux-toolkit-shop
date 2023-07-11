
import {getSingleTypeProduct, getTypeProducts, typeProduct} from '@/types/products'
import { Container, Col, Row, Button } from 'react-bootstrap'
import '@/styles/product/singleProduct.css'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import LoadingSingleProduct from '@/components/products/loadingSingleProduct'
import axios from 'axios'
import {useAppDispatch, useAppSelector} from '@/redux/store'
import { addToCart } from '@/redux/slices/cart'
import { toast } from 'react-toastify';

const SingleProduct = () => {
  const {id} = useParams();

  /*const {isLoading, isError, error, data: product} = useQuery<getSingleTypeProduct, Error>(
    ['product'], 
    () => axios.get(`https://fakestoreapi.com/products/${id as string}`),
    {
      cacheTime: 9999999999,
    }
  )*/


    const queryClient = useQueryClient()
    const {isLoading, isError, error, data: product} = useQuery<getSingleTypeProduct, Error>(
      ['products', id],
      () => axios.get(`https://fakestoreapi.com/products/${String(id)}`),{
        cacheTime: 9999999999,
        initialData: () => {
          const productData = queryClient
            .getQueryData<getTypeProducts>(['product'])
            ?.data?.find((product) => product.id === Number(id))

            if(productData){
              return {data: productData}
            } else {
              return undefined
            }
        },
      }
    )

    const selector = useAppSelector((state)=> state.cart)
    let currentItem: typeProduct | undefined;
    if(id){
      const currentItemIndexInCart = selector.cartItems.findIndex((item) => item.id === Number(id));
      if(currentItemIndexInCart >= 0){
        currentItem = selector.cartItems[currentItemIndexInCart];
      }
    }

    const dispatch = useAppDispatch();

    const addItemToCart = (product: getSingleTypeProduct) => {
      if(product){
        toast.success(`Product ${product.data.title} added to CART`)
        dispatch(addToCart(product.data))
      }
    }

  if(isLoading) return <LoadingSingleProduct/>
  if(isError) return <Container>{error.message}</Container>

  return (
    <section className='min-height-100vh-solo d-flex'>
      <Container className='my-auto'>
        <Row className='py-5 single-product'>

          <Col sm={9} md={6} lg={5} className='mb-4 mx-auto'>
            <img className='image pe-0 pe-md-5' src={product?.data.image}/>
          </Col>

          <Col md={6} lg={7} className='align-self-center'>
            <h1 className='title'>{product?.data.title}</h1>
            <p className='text'>{product?.data.description}</p>
            <p className='price'>${product?.data.price.toFixed(2)}</p>
            <Button
              onClick={() => addItemToCart(product)} 
              className='addToCartButton'
            >
              Add to Cart
            </Button>
            {!!currentItem && <span className='inCartText'>{currentItem.quantity} in Cart</span>}
            
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default SingleProduct