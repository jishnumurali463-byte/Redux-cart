import React from 'react'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { Link } from 'react-router-dom'




function Home() {
  return (
    <>
     <Header/>
    <div className='container py-5'>
      <div className="row my-5">
        {/* duplicate */}
        <div className="col-md-3 mb-2">
          {/* card-react bootstrap */}
           <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/036/338/515/small/ai-generated-natural-skincare-products-top-view-with-mockup-space-photo.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
        <Link to={`/products/:id/view`} className='btn btn-secondary'>view more...</Link>
       
      </Card.Body>
    </Card>

        </div>

      </div>

    </div>
    </>
  )
}

export default Home