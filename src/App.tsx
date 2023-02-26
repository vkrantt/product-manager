import React from 'react'
import Header from './components/header/Header'
import TableBoard from './components/table/Table'
import { Container } from 'react-bootstrap'

const App = () => {
  alert('This app using redux so data will not remain longer.')
  return (
    <Container>
      <Header />
      <h4 className='my-4'>All Products data will show here.</h4>
      <TableBoard />
    </Container>
  )
}

export default App