import { createBrowserRouter } from "react-router-dom";

import Home from "../componet/Home/Home";
import Blog from "../componet/Blog/Blog";
import RecipeDetails from "../componet/RecipeDetails/RecipeDetails";
import Login from "../componet/Login/Login";
import LoginLayout from "../layout/LoginLayout";
import Register from "../componet/Login/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[

            
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/details/:id',
                element:<RecipeDetails></RecipeDetails>,
                loader: ({params}) =>fetch(`http://localhost:4000/chefs/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            
        ]
    }
])

export default router;