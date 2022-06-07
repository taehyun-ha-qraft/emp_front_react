import React from 'react';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import LoginPage from '@pages/LoginPage';
import MainLayout from '@layouts/MainLayout/index';
import ListPage from '@pages/ListPage';
import HomePage from '@pages/HomePage';
import SettingPage from '@pages/SettingPage';
import ContactPage from '@pages/ContactPage';
import DetailPage from '@pages/DetailPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/emp" element={<Navigate replace to="/emp/home" />} />
      <Route path="/emp" element={<MainLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="list/:portfolioId" element={<DetailPage />} />
        <Route path="setting" element={<SettingPage />} />
        <Route path="contactus" element={<ContactPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
      <Route path="*" element={<Navigate replace to="/login" />} />
    </ReactRouterRoutes>
  );
};
