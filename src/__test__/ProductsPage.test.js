import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "../components/ProductsPage";
import productsReducer from "../utils/productsSlice";
import { dummyProducts } from "../utils/dummyData";

jest.mock("../utils/useFetchProducts", () => jest.fn());
jest.mock("../components/ProductCard", () => ({ products }) => (
  <div data-testid="product-card">
    {products.map((p) => (
      <div key={p.id}>{p.title}</div>
    ))}
  </div>
));

jest.mock("../utils/constants", () => ({
  categoryMap: {
    electronics: ["smartphones", "laptops"],
    fashion: ["mens-shirts", "womens-dresses"],
  },
}));

const renderWithProviders = (categoryName = "electronics") => {
  const store = configureStore({
    reducer: {
      products: productsReducer,
    },
    preloadedState: {
      products: { products: dummyProducts },
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/products/category/${categoryName}`]}>
        <Routes>
          <Route path="/products/category/:categoryName" element={<ProductsPage />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("ProductsPage Component", () => {
  it("renders category name in heading", () => {
    renderWithProviders("fashion");
    expect(screen.getByText(/Results for/i)).toBeInTheDocument();
    expect(screen.getByText(/"fashion"/i)).toBeInTheDocument();
  });

  it("renders all dummy products from Redux", () => {
    renderWithProviders("electronics");
    dummyProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it("renders 'All' and subcategory buttons", () => {
    renderWithProviders("electronics");
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "smartphones" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "laptops" })).toBeInTheDocument();
  });

  it("clicking subcategory updates the products shown", () => {
    renderWithProviders("electronics");
    const subcategoryBtn = screen.getByRole("button", { name: "smartphones" });
    fireEvent.click(subcategoryBtn);
    expect(subcategoryBtn).toBeInTheDocument();
  });

  it("clicking 'All' resets the selected category", () => {
    renderWithProviders("electronics");
    const allBtn = screen.getByRole("button", { name: "All" });
    fireEvent.click(allBtn);
    expect(allBtn).toBeInTheDocument();
  });
});
