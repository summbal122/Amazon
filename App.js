import Header from "./src/components/Header"
import Body from "./src/components/Body"
import {createBrowserRouter} from "react-router"
import { RouterProvider } from "react-router"
import ProductsPage from "./src/components/ProductsPage"
import MainSection from "./src/components/MainSection"
import Footer from "./src/components/Footer"
import CatogeriesSection from "./src/components/CatogeriesSection"
const AppLayout = () => {
  return ( 
    <>
    <Header/>
    <Body/>
    <CatogeriesSection/>
    <Footer/>
    
    </>
  )
};

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element : <AppLayout/>,
    children: [
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "/products/category/:categoryName",
        element: <ProductsPage />
      }
    ]
  }
])


const App = () => {
  return (

    <RouterProvider router = {appRouter} />

  )
}
export default App
