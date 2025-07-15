  import { useEffect, useState } from "react";

  const useFetchProducts = (categories = []) => {
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
  
     setProducts(combined);
     console.log(combined)
     }
    fetchProducts();
   }, [categories]);
   return products;
  
  };
  export default useFetchProducts;