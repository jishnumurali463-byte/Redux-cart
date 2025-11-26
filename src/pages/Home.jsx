import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const dispatch = useDispatch()
  const { loading, allProducts, error } = useSelector(state => state.productReducer)

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  const totalPages = Math.ceil(allProducts.length / productsPerPage)

  const pageItemLastIndex = currentPage * productsPerPage

  const pageItemStartIndex = pageItemLastIndex - productsPerPage

  const visibleProductArray = allProducts?.slice(pageItemStartIndex, pageItemLastIndex)
  
 



  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const navigateNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

    const navigatePrevPage = () => {
  if (currentPage!=1 ) {
    setCurrentPage(currentPage-1)
  }
}

  return (
    <>
      <Header insideHome={true} />
      <div className='container py-5'>
        {
          loading ?
            <div className='text-center my-5 fw-bolder fs-5'>
              <img width="120px" src="https://i.sstatic.net/kOnzy.gif" alt="loading" /> Loading...
            </div>
            :
            <div className="row my-5">
              {
                allProducts?.length > 0 ?
                  visibleProductArray.map(product => (
                    <div key={product.id} className="col-md-3 mb-2">
                      <Card>
                        <Card.Img height="250px" variant="top" src={product.thumbnail} />
                        <Card.Body className="text-center">
                          <Card.Title>{product.title}</Card.Title>
                          <Link to={`/products/${product.id}/view`} className='btn btn-secondary'>
                            View More..
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                  :
                  <p className="fs-5 fw-bold my-5">Products not found!!!</p>
              }

              {/* Pagination Buttons */}
              <div className="my-3 text-center">
                <button onClick={navigatePrevPage}  className="btn">
                  <FontAwesomeIcon icon={faBackward} />
                </button>
                <span className="fw-bolder mx-3"> {currentPage} of {totalPages} </span>
                <button onClick={navigateNextPage} className="btn">
                  <FontAwesomeIcon icon={faForward} />
                </button>
              </div>

            </div>
        }
      </div>
    </>
  )
}

export default Home
