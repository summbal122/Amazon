import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import ProductCard from "../components/ProductCard";
import { dummyProducts } from "../utils/dummyData";

describe("ProductCard Component", () => {
  const renderProductCard = () =>
    render(
      <Provider store={appStore}>
        <ProductCard products={dummyProducts} />
      </Provider>
    );

  it("renders correct number of products", () => {
    renderProductCard();
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards.length).toBe(dummyProducts.length);
  });

  it("renders product titles", () => {
    renderProductCard();
    dummyProducts.forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it("renders product prices", () => {
    renderProductCard();
    dummyProducts.forEach(product => {
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    });
  });

  it("renders product ratings", () => {
    renderProductCard();
    dummyProducts.forEach(product => {
      expect(screen.getByText(product.rating.toString())).toBeInTheDocument();
    });
  });

  it("renders product images", () => {
    renderProductCard();
    dummyProducts.forEach(product => {
      const image = screen.getByAltText(product.title); 
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", product.images[0]);
    });
  });
});
