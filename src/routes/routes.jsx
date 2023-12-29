import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componet/Home/Home";
import Blog from "../componet/Blog/Blog";
import RecipeDetails from "../componet/RecipeDetails/RecipeDetails";


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
            },
            {
                path:'/details/:id',
                element:<RecipeDetails></RecipeDetails>,
                loader: ({params}) =>fetch(`http://localhost:4000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;