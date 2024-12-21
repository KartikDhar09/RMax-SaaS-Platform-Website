import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import Layout from './Layout.jsx';
import { LandingPage, Pricing, SupportPage } from './components/pages';

function WithScrollToTop({ children }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  
  return children;
}

export const Routes = (
  <Route path="/" element={
    <WithScrollToTop>
      <Layout />
    </WithScrollToTop>
  }>
    <Route index element={<LandingPage />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="support" element={<SupportPage />} />
  </Route>
);