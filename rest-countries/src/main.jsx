import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from './Components/AboutPage.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Errorpage from './Components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <Errorpage />, 
    children : [
      {
        path: 'contact',
        element: <p>Contact Works</p>
      },
      {
        path: 'about',
        Component: AboutPage,
        children: [
          { path: 'abc' , 
            element: <p>I am the ghost of Uchiha</p>
          }
        ] 
      },
      {
        index : true,
        Component: Home
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
  // </StrictMode>,

  <>
    <RouterProvider router={router} />
  </>
)