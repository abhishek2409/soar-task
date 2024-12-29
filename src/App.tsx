import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '@/components/Layout';
import Loader, { LoaderType } from '@/components/Loader';
import { SidebarProvider, ToastProvider } from '@/providers';
import Toast from './components/Toast';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Settings = lazy(() => import('@/pages/Settings'));

const App = () => {
  return (
    <Suspense fallback={<Loader type={LoaderType.PAGE_LOADER} />}>
      <ToastProvider>
        <SidebarProvider>
          <Router>
            <Routes>
              <Route path={'/'} element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/settings/*" element={<Settings />} />
              </Route>
            </Routes>
          </Router>
        </SidebarProvider>
        <Toast />
      </ToastProvider>
    </Suspense>
  );
};

export default App;
