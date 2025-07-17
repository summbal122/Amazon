import Header from "./src/components/Header"
import Body from "./src/components/Body"
import {createBrowserRouter} from "react-router"
import { RouterProvider } from "react-router"
import ProductsPage from "./src/components/ProductsPage"
import MainSection from "./src/components/MainSection"
import Footer from "./src/components/Footer"
import { Provider } from "react-redux"
import appStore from "./src/utils/appStore"
const AppLayout = () => {
  return ( 
    <>
    <Header/>
    <Body/>
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
<Provider store ={appStore}>
    <RouterProvider router = {appRouter} />
  </Provider>

  )
}
export default App
