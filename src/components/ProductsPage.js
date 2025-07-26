import useFetchProducts from "../utils/useFetchProducts";
import { useParams } from "react-router";
import { categoryMap } from "../utils/constants";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
const ProductsPage = () => {
const {categoryName} = useParams();
const categories = categoryMap[categoryName] || [categoryName]; // fallback to single category
 const [selectedCategories, setSelectedCategories] = useState(categories);

   // Sync selectedCategories when categoryName changes
  useEffect(() => {
    setSelectedCategories(categories);
  }, [categoryName]);
useFetchProducts(selectedCategories); 
const products = useSelector((store) => store.products.products)
const handleProducts = (subCategory) => {
  setSelectedCategories([subCategory]);
};
  return (
    <div className="p-6 bg-white">
      <h2 className="text-lg mb-6">Results for <span className="text-sm text-red-600">"{categoryName}" </span></h2>
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Sidebar with subcategories */}
        <div className="lg:w-2/12 space-x-3 space-y-2">
        <button onClick={()=> setSelectedCategories(categories)}
        className="lg:w-full text-left px-4 py-2 bg-gray-light/50 border border-transparent hover:border hover:border-black hover:cursor-pointer rounded font-medium text-sm">
          All</button>
         {categories.map((subCat, index) => (
     <button
      onClick={() => handleProducts(subCat)}
      key={index}
      className="lg:w-full text-left px-4 py-2 bg-gray-light/50 border border-transparent hover:border hover:border-black hover:cursor-pointer rounded font-medium text-sm"
      >
     {subCat.replace("-", " ")}
     </button>
    ))}
      </div>
      <div className="lg:w-10/12">
        {products.length === 0 ? (
        <ShimmerCard/>) : (
        <ProductCard products = {products} />)} 
        </div>
      </div>
      
   
    </div>
  );
};

export default ProductsPage;
