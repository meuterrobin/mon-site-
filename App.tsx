import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import TestPage from './pages/TestPage';
import NervousSystemGuide from './pages/NervousSystemGuide';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TestPage />} />
          <Route path="guide" element={<NervousSystemGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}