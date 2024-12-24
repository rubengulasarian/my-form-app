import React, { createContext, useState, useEffect } from 'react';

// Создаем контекст
export const AuthContext = createContext(null);

// Создаем провайдер контекста
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser){
        setUser(JSON.parse(storedUser));
        setIsAuth(true)
        }
        }, [])

    const register = (userData) => {
        // Mock registration logic (we will replace this later)
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setIsAuth(true);
    };

    const login = (userData) => {
        // Mock login logic (we will replace this later)
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setIsAuth(true);
    };

    const logout = () => {
        // Mock logout logic (we will replace this later)
         localStorage.removeItem('user');
        setUser(null);
        setIsAuth(false)
    };

    const contextValue = {
        user,
        isAuth,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;