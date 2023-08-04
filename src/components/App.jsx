import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { ManePage } from '../pages/MainPage/ManePage';



export const App = () => {
  

  return (
    <>
      <SharedLayout />
        <ManePage></ManePage>
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="events" index element={<ManePage />} />
        </Route>
      </Routes> */}

      <GlobalStyle />
    </>
  );
};