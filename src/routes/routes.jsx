import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SelectedCard from '../components/SelectedCard/SelectedCard';
import App from '../App';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/country',
    element: <SelectedCard />
  },

]);

export default routes;