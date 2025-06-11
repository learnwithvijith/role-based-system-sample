import { useDispatch } from "react-redux"
import { logout } from "../redux/authSlice"
import { Navigate } from "react-router-dom"
import { addProduct } from "../redux/productSlice"


const AdminPanel = () => {
  const dispatch = useDispatch()

  const handleSubmit =(e)=>{
    e.preventDefault()
    const newProduct = {
      id:Date.now(),
      name:e.target.product_name.value,
      price :parseFloat(e.target.product_price.value),
      count : parseInt(e.target.product_stock.value)
    }

    dispatch(addProduct(newProduct))
  }

  return (
    <>

     <button onClick={() => {
        dispatch(logout())
        Navigate('/')
      }}>Logout</button>
      <h2>Admin Dashboard</h2>

      <form onSubmit={handleSubmit}>

        <input name="product_name"  type=" text" placeholder="Product Name" />

         <input name="product_price" type=" number" placeholder="Product Price" />

         <input name="product_stock" type=" number" placeholder="Stock" />
         <button type="submit">Add product</button>

      </form>
    </>
  )
}
export default AdminPanel