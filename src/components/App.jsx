import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { fetchEvents } from 'redux/operations';
import { ManePage } from 'pages/MainPage/ManePage';
// const ManePage = lazy(() => import('../pages/MainPage/ManePage'));

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path="/events" element={<ManePage />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
