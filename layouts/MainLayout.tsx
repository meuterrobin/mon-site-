import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans flex flex-col selection:bg-black selection:text-white">
      <Navigation />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
