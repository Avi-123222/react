import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from './Components/AboutPage.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Errorpage from './Components/ErrorPage.jsx';
import CountryDetails from './Components/CountryDetails.jsx';

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
            element: <h1>I am the ghost of Uchiha</h1>
          }
        ] 
      },
      {
        index : true,
        Component: Home
      },
      {
        path :':country',
        Component : CountryDetails

      },
      // {
      //   path:':xyz',
      //   element:<h1>Starting with Dynamic routing</h1>
      // }
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