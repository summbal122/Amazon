import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./productsSlice";
  const useFetchProducts = (categories = []) => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
   useEffect( () => {
    const fetchProducts = async () => {
      const results = await Promise.all (
        categories.map( async (category) => {
       const data = await fetch(`https://dummyjson.com/products/category/${category}`);
          const json = await data.json();
          return json.products || []
        })
      );
      const combined = results.flat();
       dispatch(addProducts(combined));
     }
    fetchProducts();
   }, [categories, dispatch]);
   return products;
  
  };
  export default useFetchProducts;