import React from 'react'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCircleXmark, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
   const userCart = useSelector(state=>state.cartReducer)

     const handleCart = (product)=>{
       const existingProduct = userCart?.find(item=>item.id==product.id)
       dispatch(addToCart(product))
      dispatch(removeWishlist(product.id))


        Swal.fire({
     title: 'Completed!',
     text: existingProduct?`quantity of ${product.title}, is updated successfully`: 'Product added to your cart... ' ,
     icon: 'success',
     confirmButtonText: 'ok'
        })
   
      }

  return (
    <>
      <Header/>
      <div className='container py-5'>
        {
          userWishlist?.length > 0 ?
            <div className="row my-5">
              {
                userWishlist?.map(product => (
                  <div key={product.id} className="col-md-3 mb-2">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img
                        height={'250px'}
                        variant="top"
                        src={product?.thumbnail}
                      />
                      <Card.Body className='text-center'>
                        <Card.Title>{product?.title}</Card.Title>

                        <div className="d-flex justify-content-evenly my-1">
                          <button onClick={()=>dispatch( removeWishlist(product?.id))} className="btn text-danger fs-4">
                            <FontAwesomeIcon icon={faHeartCircleXmark} />
                          </button>

                          <button onClick={()=>handleCart(product)} className="btn text-success fs-4">
                            <FontAwesomeIcon icon={faCartPlus} />
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                )) 
              }
            </div>
          :
            <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
              <img className='w-25' src="https://grocarto.com/assets/images/User/gif/cartGif.gif" alt="empty wishlist" />
              <h3>Wishlist is empty</h3>
              <Link to={'/'} className='btn btn-primary'>Add More</Link>
            </div>
        }
      </div>
    </>
  )
}

export default Wishlist
