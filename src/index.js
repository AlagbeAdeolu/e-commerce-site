import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import SidebarProvider from './store/SidebarContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <SidebarProvider>
                <App />
            </SidebarProvider>
        </BrowserRouter>
    </Provider>);

