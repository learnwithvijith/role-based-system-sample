import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/authSlice"
import { Navigate } from "react-router-dom"
import { addToCart } from "../redux/cartSlice"


const UserPanel = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const cart = useSelector(state => state.cart)

  const getCartQty = (id) => cart?.find(prod => prod?.id === id)?.quantity || 0



  const handleCart = (item) => {

    const cartQty = getCartQty(item?.id)

    if (cartQty < item?.count) {
      dispatch(addToCart(item))

    } else {
      alert('No more stock availabe')
    }

  }


  return (
    <>
      <button onClick={() => {
        dispatch(logout())
        Navigate('/')
      }}>Logout</button>
      <h2>User Dashboard</h2>

      {products?.map((item) => {
        const cart_quantity = getCartQty(item.id)
        return (
          <ul key={item?.id}>

            <li>{item?.name} - {item?.price}  | Stock : {item?.count-cart_quantity}
              <img src={item?.img_url} alt="" />
              <button onClick={() => handleCart(item)} disabled={cart_quantity>=item?.count} >Add to cart</button>
            </li>



          </ul>
        )
      })}


    </>
  )
}
export default UserPanel