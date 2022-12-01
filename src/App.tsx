import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@core';
import { ROUTES, theme } from '@constants';
import { ThemeProvider } from 'styled-components';
import HomePage from '@Pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
          <Route element={<HomePage/>} path={ROUTES.ABOUT_PAGE}/>
          <Route element={<HomePage/>} path={ROUTES.PORTFOLIO}/>
          <Route element={<HomePage/>} path={ROUTES.CONTACTS}/>
        </Routes>
      </ThemeProvider>
    </Router>

  );
};

export default App;
