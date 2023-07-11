import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{backgroundImage: 'linear-gradient(181deg, rgb(111 222 255), rgb(106 124 251))', color: 'white'}}>
      <Container>
        <Row>
          <Col sm={6} className='text-center text-sm-start py-1'>
            Redux Toolkit Shop 2023
          </Col>
          <Col sm={6} className='text-center text-sm-end py-1'>
            Created by Damian Paw...
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer