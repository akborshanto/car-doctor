import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './router/Routes';
import AuthProvider from './firebase/Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>

  </React.StrictMode>,
)
