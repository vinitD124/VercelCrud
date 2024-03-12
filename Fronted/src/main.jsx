import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { AppContextProvider } from './contexts/AppContext.jsx';
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById('root')).render(
<AppContextProvider>
    <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
</AppContextProvider>
 
)
