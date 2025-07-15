import useFetchProducts from "../utils/useFetchProducts";
import { useParams } from "react-router";
import { categoryMap } from "../utils/constants";
import ProductCard from "./ProductCard";
const ProductsPage = () => {
const {categoryName} = useParams();
const categories = categoryMap[categoryName] || [categoryName]; // fallback to single category
const products = useFetchProducts(categories);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
      <ProductCard products = {products} />
   
    </div>
  );
};

export default ProductsPage;
