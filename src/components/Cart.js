import { useSelector, useDispatch } from "react-redux"
import BestSellersSection from "./BestSellersSection";
import { incrementQuantity, decrementQuantity, clearItems, removeItem } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
 const total =
  cartItems.length > 0
    ? cartItems.reduce((sum, item) => {
   const price = Number(item.price) || 0;   
        const quantity = Number(item.quantity) || 0; 
        return sum + price * quantity;
      }, 0).toFixed(2)
    : 0;
 
  return (
    <div className="px-1 py-2 lg:px-5 lg:py-4 grid lg:grid-cols-12 gap-5">
      <div className="lg:col-span-9 space-y-6">
      <div className=" bg-white p-4 lg:p-6">
          <h1 className="md:text-3xl font-thick">Shopping Cart</h1>
          <p className="text-end text-sm text-gray-600">Price</p>
          <hr className="text-gray-light"/>
          {cartItems.length > 0 ? (
            <div>  
            {cartItems.map((item, index) => (
        <div className="flex border-b border-gray-light bg-white items-center gap-4 text-[10px] md:text-lg" key={index}>
        <img className="w-20 md:w-60 p-4" src={item.image}/>
        <div className="w-full space-y-3">
        <div className="flex justify-between">
         <div className="leading-4">
        <p className="font-medium">{item.title}</p>
        <span className="text-xs text-green-700">In Stock</span>
        </div>
        <span className="font-bold md:text-lg" >${item.price}</span>
        </div>
        <div className="border-3 border-yellow-light inline px-3 py-1 rounded-2xl space-x-4 font-semibold  md:text-sm">
          {item.quantity === 0 ?
          ( <i onClick={()=> dispatch(removeItem(item.id))} className="fa-regular fa-trash-can hover:cursor-pointer"></i>  )
          : 
          ( <i onClick={()=> dispatch(decrementQuantity(item.id)) } className="fa-solid fa-minus hover:cursor-pointer"></i> )
          }
         <span>{item.quantity}</span>
        <i onClick={()=> dispatch(incrementQuantity(item.id))} className="fa-solid fa-plus hover:cursor-pointer"></i>
        </div>
        </div>
        </div>
      ))}</div>) : <p className="text-center text-xs md:text-lg mt-2 text-gray-600 font-thin">No items</p> }
     
      <p className="text-end font-light text-xs md:text-xl mt-2">Subtotal ({cartItems.length} item): <span className="font-bold text-xs md:text-lg">${total}</span> </p>
      </div>
      <div className="h-20 bg-white">
      </div>
      <p className="p-2 text-xs 2xl:text-xl mb-15">
      The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn more
      Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
      </p>
      </div>

      {/* right section for checkout */}
      <div className="lg:col-span-3 space-y-4">
      {cartItems && (
        <div className="bg-white p-6 flex flex-col gap-2  items-center">
          <p className="text-end text-xs md:text-lg  mt-2">Subtotal ({cartItems.length} item): <span className="font-bold text-xs md:text-lg">${total}</span> </p>
          <button className="bg-yellow-light font-medium text-xs 2xl:text-lg px-14 py-2.5 rounded-3xl hover:cursor-pointer hover:bg-yellow-400 lg:w-full"> Proceed to checkout</button>
          <p onClick={()=> {
            dispatch(clearItems())
          }} className="text-red-600 text-xs md:text-sm mt-4 hover:cursor-pointer">Clear Cart</p>
        </div>
      )}
      <BestSellersSection/>
    </div>
    </div>
  )
}

export default Cart
