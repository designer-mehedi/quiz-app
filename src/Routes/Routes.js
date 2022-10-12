import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import { loader } from "../components/Loader/Loader";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/', 
                loader: loader,
                element: <Home/>
            },
            {
                path: '/home',
                loader: loader,
                element: <Home/>
            },
            {
                path: 'statistics',
                element: <Statistics/>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: '/quiz/:quizId',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <Quiz/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])