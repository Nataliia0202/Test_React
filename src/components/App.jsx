import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { ManePage } from 'pages/MainPage/ManePage';
import { AddPage } from 'pages/AddPage/AddPage';
import { CurrentEvent } from 'pages/CurrentEvent/CurrentEvent';
import { Layout } from './Layout';
export const App = () => {
  

  return (
    <>
      {/* <SharedLayout />
      <ManePage></ManePage> */}
      {/* <AddPage /> */}
      {/* <CurrentEvent/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ManePage />} />
          <Route path="add" element={<AddPage />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
