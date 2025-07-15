import Header from "./src/components/Header"
import Body from "./src/components/Body"
import {createBrowserRouter} from "react-router"
import { RouterProvider } from "react-router"
import ProductsPage from "./src/components/ProductsPage"
import MainSection from "./src/components/MainSection"
const AppLayout = () => {
  return ( 
    <>
    <Header/>
    <Body/>
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
        path: "/products",
        element: <ProductsPage/>
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
