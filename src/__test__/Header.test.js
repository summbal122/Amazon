import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header Component", () => {
  const renderHeader = () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

  it("renders exactly 2 buttons", () => {
    renderHeader();
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });

  it("renders the cart element", () => {
    renderHeader();
    const cart = screen.getByTestId("cart");
    expect(cart).toBeInTheDocument();
  });
});
