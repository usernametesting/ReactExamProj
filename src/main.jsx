import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <RouterProvider router={routes}></RouterProvider>
  </Provider>
)
