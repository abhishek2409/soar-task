import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/settings/*" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
