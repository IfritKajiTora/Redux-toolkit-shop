import { Container, Row, Col, Button } from "react-bootstrap"
import '@/styles/banner.css'

const Banner = () => {
  return (
    <section id="banner" className='min-height-100vh d-flex overflow-hidden'>
      <Container className='my-auto py-5' style={{maxWidth: '1600px'}}>
        <Row>
          <Col lg={6} className='align-self-center order-2 order-lg-1 text-center text-lg-start'>
            <h1 className='banner_title'>REDUX Toolkit Shop</h1>
            <div className='banner_content'>
              <h5 className='banner_text'>This is just example shop using React Redux with Redux Toolkit, you can add items to cart, increase or decrease amount of each item in cart, 
                remove each item from cart or clear the cart.<br/>
                Cart data is stored in your local machine using localStorage</h5>
              <p className='banner_bottom_text'>Created with:<br/>React (Vite), React Redux, Redux Toolkit, ReactQuery, Axios, React Bootstrap, React Router Dom, React Toastify</p>
              <Button className='mt-3 banner_button' href='#product-list'>Check the shop</Button>
            </div>
          </Col>
          <Col lg={6} className='align-self-center order-1 order-lg-2'>
            <div className='banner-cart-images text-center p-5 position-relative'>
              <img className='cart-image' src='./banner/koszyk.png'/>
              <img src='./banner/cloud-1.png' className='cloud-1'/>
              <img src='./banner/cloud-2.png' className='cloud-2'/>
              <img src='./banner/bag-1.png' className='bag-1'/>
              <img src='./banner/bag-2.png' className='bag-2'/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner