import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import ProductCard from "../components/ProductCard"
import appStore from "../utils/appStore"
import { dummyProducts } from "../utils/dummyData"


test('find title of the product', ()=> {
  render(
    <Provider store={appStore}>
      <ProductCard products={dummyProducts}/>
    </Provider>
  )
   dummyProducts.forEach(product => {
   expect(screen.getByText(product.title)).toBeInTheDocument();
  });
})

test('find total products on the page', ()=> {
  render(
    <Provider store={appStore}>
      <ProductCard products={dummyProducts}/>
    </Provider>
  )
   expect(screen.getAllByTestId('product-card').length).toBe(3);
})