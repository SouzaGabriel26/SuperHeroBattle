import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/hero-profile" element={<h1>Hero Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
