import '@/styles/product/singleProduct.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

const LoadingSingleProduct = () => {
  return (
    <section className='min-height-100vh-solo d-flex'>
      <Container className='my-auto'>
        <Row className='py-5 single-product'>

          <Col sm={9} md={6} lg={5} className='mb-4 mx-auto'>
            <div className='loading-image-fake'></div>
          </Col>

          <Col md={6} lg={7} className='align-self-center'>
            <h1 className='title'><div className='loading-text'></div></h1>
            <div className='text'>
              <div className='loading-text'></div>
              <div className='loading-text'></div>
              <div className='loading-text'></div>
              <div className='loading-text'></div>
              <div className='loading-text'></div>
            </div>
            <p className='price'>$???.??</p>
            <Button disabled className='addToCartButton'>
              Add to Cart
            </Button>
            
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default LoadingSingleProduct