import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Routes } from './Routes.jsx';

const router = createBrowserRouter(createRoutesFromElements(Routes));

function App() {
  return <RouterProvider router={router} />;
}

export default App;