
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import appStore from "../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import Header from "../components/Header"

test('find total buttons', ()=>{
  render(
    <Provider store= {appStore}>
    <BrowserRouter>
       <Header/>
    </BrowserRouter>
      </Provider>
  )
  expect(screen.getAllByRole("button").length).toBe(2);
})
test('find cart', ()=>{
    render(
    <Provider store= {appStore}>
    <BrowserRouter>
       <Header/>
    </BrowserRouter>
      </Provider>
  )
  expect(screen.getByTestId("cart").toBeInTheDocument)

})