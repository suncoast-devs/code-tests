import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeApp from './ThemeApp';
import { ThemeContextProvider } from './ThemeContext';
import './index.css';

ReactDOM.render(
<BrowserRouter>
    <ThemeContextProvider>
        <ThemeApp />
    </ThemeContextProvider>
</BrowserRouter>,
document.getElementById('root')
);
