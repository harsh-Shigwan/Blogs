import {createBrowserRouter, RouterProvider,Route, Outlet} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./style.scss"
const LayOut =()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router =  createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children:[
          {
            path: "/",
            element: <Home/>,
            },{
            path:"/post/:id",
            element: <Single/>
          },{
            path:"/write",
            element: <Write/>
            }
    ]
  }
  , {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
])


function App() {
  return <div className="app">
  <div className="container">
  <RouterProvider router={router}/>
  </div>
  </div>;
}



export default App;
