import React from 'react';
import AppState from './context/AppState';
import AppRouter from './router/AppRouter';



const App = () => {
    return (

        <AppState>
            <AppRouter />
        </AppState>
    )
}

export default App
