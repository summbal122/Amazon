import { useState } from "react";
import { useSearchParams } from "react-router";
import ProductCard from "./ProductCard";
import useFetchSearchProducts from "../utils/useFetchSearchProducts";
import { useSelector } from "react-redux";
const SearchProducts = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search").toLowerCase();
  useFetchSearchProducts(query);
  const products = useSelector((store)=> store.search.searchedProducts);

  return (
    <div className="p-6 bg-white">  
     <h2 className="text-lg mb-6">Results for <span className="text-sm text-red-600">"{query}" </span></h2>
    <ProductCard products = {products} />
    </div>
  )
}

export default SearchProducts
