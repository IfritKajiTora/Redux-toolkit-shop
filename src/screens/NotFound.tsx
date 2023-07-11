import { Container } from "react-bootstrap"

const NotFound = () => {
  return (
    <section className='min-height-100vh-solo d-flex'>
      <Container className='py-5 m-auto text-center'>
        <h1 className='primary-title'>NOT FOUND 404</h1>
        <h4>Sorry page not found</h4>
      </Container>
    </section>
  )
}

export default NotFound