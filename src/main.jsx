import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './Context/AuthContext.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>

    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>

        <App />

      </QueryClientProvider>
    </AuthContextProvider>

  </BrowserRouter>







)
