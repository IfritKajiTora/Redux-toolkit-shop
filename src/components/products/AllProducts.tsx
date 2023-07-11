import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {getTypeProducts} from '@/types/products'
import Product from '@/components/products/Product'
import { Container, Row } from 'react-bootstrap'
import Loading from '@/components/Loading'


const AllProducts = () => {
  const {isLoading, isError, error, data: product} = useQuery<getTypeProducts, Error>(
    ['products'],
    () => axios.get('https://fakestoreapi.com/products'),
    {
      cacheTime: 9999999999,
      staleTime: 9999999999
    }
  )

  if(isLoading) return <Container className='py-5'><Loading/></Container>
  if(isError) return <Container className='py-5'><h1>{error.message}</h1></Container>

  return (
    <>
    <section id="product-list">
    <Container className='py-5'>
      <h2 className='text-center mb-4 primary-title'>All products</h2>
      <Row>
      {product?.data.map(product => {
        return <Product key={product.id} {...product}/>
      })}
      </Row>
    </Container>
    </section>
    </>
  )
}

export default AllProducts