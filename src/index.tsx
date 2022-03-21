import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import Form from './components/Form';
import Success from './components/Success';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <NotificationsProvider position="bottom-right" zIndex={2077}>
          <Routes>
            <Route path="/" element={<App />} /> 
            <Route path="/:id/:secret" element={<Form />} />
            <Route path="thank-you" element={<Success />} />
          </Routes>
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
