import React from 'react';
import Header from './components/Header';

import AuthForm from './components/auth';

function App() {
    return (
      <>
        <Header />
        <AuthForm />
        {/* Здесь будет остальное содержимое */}
      </>
    );
}

export default App;