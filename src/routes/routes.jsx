import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componet/Home/Home";
import Blog from "../componet/Blog/Blog";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

export default router;