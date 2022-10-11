import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home/>
            },
            {
                path: 'statistics',
                element: <Statistics/>
            },
            {
                path: 'blog',
                element: <Blog/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])