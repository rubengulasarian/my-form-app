import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './authcontext/Authcontext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>  
        <App />
    </AuthProvider>
);