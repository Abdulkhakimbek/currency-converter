import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import Home from "./routes/Home"
import CurrentExchangeRates from './routes/CurrentExchangeRates';

// const Layout = lazy(() => import('./components/Layout'))
// const Home = lazy(() => import('./routes/Home'));
// const CurrentExchangeRates = lazy(() => import('./routes/CurrentExchangeRates'))

const App = () => (
  <>
    <Layout>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange-rates" element={<CurrentExchangeRates />} />
          </Routes>
        </Suspense>
      </Router>
    </Layout>
  </>

);

export default App;
