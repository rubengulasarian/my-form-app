import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Создаем контекст
export const AuthContext = createContext(null);

// Создаем провайдер контекста
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiUrl = "http://localhost:3000/api" // Замените на свой адрес сервера

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            const storedUser = JSON.parse(localStorage.getItem('user'));
           setUser(storedUser);
           setIsAuth(true);
        }
    }, [])


    const register = async (userData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${apiUrl}/register`, userData);
            const {user, token} = response.data
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
            setIsAuth(true);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            console.error("Error during registration:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (userData) => {
        setIsLoading(true);
         setError(null);
         try {
            const response = await axios.post(`${apiUrl}/login`, userData);
            const {user, token} = response.data
             localStorage.setItem('token', token);
             localStorage.setItem('user', JSON.stringify(user));
             setUser(user);
             setIsAuth(true);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            console.error("Error during login:", err);
        } finally {
              setIsLoading(false);
         }
    };

    const logout = async () => {
         setIsLoading(true);
        setError(null);
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            setIsAuth(false);
            //Optional request to backend
            //await axios.delete(`${apiUrl}/logout`);
        }
         catch (err) {
             setError(err.response?.data?.message || err.message);
            console.error("Error during logout:", err);
        }
        finally{
            setIsLoading(false);
        }
    };

    const contextValue = {
        user,
        isAuth,
        register,
        login,
        logout,
         isLoading,
         error
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;