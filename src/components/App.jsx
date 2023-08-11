import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyles';

import { Routes, Route } from 'react-router-dom';
import { ManePage } from 'pages/MainPage/ManePage';
import { AddPage } from 'pages/AddPage/AddPage';
import { CurrentEvent } from 'pages/CurrentEvent/CurrentEvent';
import { Layout } from './Layout';
export const App = () => {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ManePage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="events/:id" element={<CurrentEvent />} />
        </Route>
      </Routes>

      <GlobalStyle />
      <ToastContainer autoClose={3000} limit={1} />
    </>
  );
};
