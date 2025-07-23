import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ProductCard from "../components/ProductCard";
import appStore from "../utils/appStore";
import { dummyProducts } from "../utils/dummyData";

describe("ProductCard Component", () => {
  const renderProductCard = () =>
    render(
      <Provider store={appStore}>
        <ProductCard products={dummyProducts} />
      </Provider>
    );

  it("renders all product titles", () => {
    renderProductCard();
    dummyProducts.forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it("renders the correct number of product cards", () => {
    renderProductCard();
    const cards = screen.getAllByTestId("product-card");
    expect(cards.length).toBe(dummyProducts.length);
  });
});
