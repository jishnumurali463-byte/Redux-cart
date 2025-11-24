import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { getAllproducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

  const dispatch = useDispatch()
const { loading, allproducts, error } = useSelector(state => state.productReducer);

  // console.log(allproducts);
  

  useEffect(() => {
    dispatch(getAllproducts())
  }, [])

  return (
    <>
      <Header />
      <div className='container py-5'>
        {
          loading ?
            <div className='text-center my-5 fw-bolder fs-5'>
              <img width="120px" src="https://i.sstatic.net/kOnzy.gif" alt="loading" /> Loading...
            </div>
            :
            <div className="row my-5">

              {
                allproducts?.length > 0 ?
                  allproducts?.map(product => (
                    <div key={product?.id} className="col-md-3 mb-2">
                      <Card>
                        <Card.Img
                          height="250px"
                          variant="top"
                          src={product?.thumbnail}
                        />
                        <Card.Body className="text-center">
                          <Card.Title>{product?.title}</Card.Title>
                          <Link to={`/products/${product?.id}/view`} className='btn btn-secondary'>
                            View More..
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                  :
                  <p className="fs-5 fw-bold my-5">Products not found!!!</p>
              }

            </div>
        }
      </div>
    </>
  )
}

export default Home
