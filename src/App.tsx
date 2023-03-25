import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';

const About = lazy(() => import("./pages/About/About"));
const Home = lazy(() => import("./pages/Home/Home"));
const Error = lazy(() => import("./pages/Error/Error"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/error">Error</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
