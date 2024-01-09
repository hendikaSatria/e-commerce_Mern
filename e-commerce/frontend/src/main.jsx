import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/custom.css'
import './assets/index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import { Provider } from 'react-redux'
import store from '../store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomePage/>}/> 
      <Route path='/product/:id' element={<ProductDetails />}/>  
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
