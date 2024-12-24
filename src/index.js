import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Обрати внимание на импорт
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>  {/* Обрати внимание на провайдер */}
        <App />
    </AuthProvider>
);