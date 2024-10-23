import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App'; // Import the main App component
import './App.css'; // Default CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
