
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import CategoriesSection from "../components/CatogeriesSection"

test("find total categories", ()=> {
  render(
    <BrowserRouter> 
    <CategoriesSection/>
    </BrowserRouter> 
  )
  expect(screen.getAllByTestId("category").length).toBe(8);
})