import React from 'react';
import './blog.css'; 

const Blog = () => {
    return (
        <div className='lg:px-32 md:px-10 bg-zinc-100 py-10 blog'>
            <div className='blog-posts w-[80%] m-auto'>
                <div className='post-1 lg:flex gap-5 
                shadow-lg rounded-lg  border-2 border-indigo-600'>
                    <div className='lg:w-1/2'>
                        <img className='rounded-lg h-full' src="https://crowdbotics.ghost.io/content/images/2019/07/react-router.jpg" alt="" />
                    </div>
                    <div className='text-left lg:w-1/2 p-5'>
                        <h2 className='text-2xl font-semibold mb-3'>What is the purpose of react router?</h2>
                        <p># React Router is a standard library for routing in React.It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. After installing react-router-dom, add its components to your React application.
                        Adding React Router Components: The main Components of React Router are:
                        BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
                        Routes: It's a new component introduced in the v6 and a upgrade of the component.
                        The main advantages of Routes over Switch are:
                        Relative s and s
                        Routes are chosen based on the best match instead of being traversed in order.
                        Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
                        Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.</p>
                    </div>
                </div>
                <div className='sm:grid-cols-1  grid lg:grid-cols-2 gap-5 mt-10'>
                    <div className='post-2 border-2 border-indigo-600 rounded-lg text-left'>
                        <img className='h-[278px] rounded-lg mt-[-1px] sm:w-full' src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" alt="" />
                        <div className='p-5'>
                            <h2 className='text-2xl font-semibold mb-3'>How does context api works?</h2>
                            <p># The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                        </div>
                    </div>
                    <div className='post-2 border-2 border-indigo-600 rounded-lg text-left'>
                        <img className='h-[278px] rounded-lg mt-[-1px] sm:w-full' src="https://blog.openreplay.com/static/765b86c192a56ebfa836ae1b4d5fed15/6050d/hero.png" alt="" />
                        <div className='p-5'>
                            <h2 className='text-2xl font-semibold mb-3'>What is useRef?</h2>
                            <p># The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called . The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

<img src="" alt="" />

/**
 * 1. What is the purpose of react router?
#React Router is a standard library for routing in React.It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. After installing react-router-dom, add its components to your React application.
Adding React Router Components: The main Components of React Router are:
BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
Routes: It’s a new component introduced in the v6 and a upgrade of the component. 
The main advantages of Routes over Switch are:
Relative s and s
Routes are chosen based on the best match instead of being traversed in order.
Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.

2. How does context api works?
# The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.

3. What is useRef?
# The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called . The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
 **/