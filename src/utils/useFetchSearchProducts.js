import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchedProducts } from "./searchSlice";
const useFetchSearchProducts = (query)  => {
  const dispatch = useDispatch();
  useEffect(()=> {
  const fetchSearchedProducts = async ()=> {
       try {
        let res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        let json = await res.json();
        if (json.products.length === 0) {
          res = await fetch(`https://dummyjson.com/products/category/${query}`);
          json = await res.json();
        }
        dispatch(addSearchedProducts(json.products || []));
      } catch (err) {
        dispatch(addSearchedProducts([]));
      }
    };
     if (query) fetchSearchedProducts();
    },[query])
  }
  export default useFetchSearchProducts;