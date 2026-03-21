import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export function Layout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet /> 
      </main>
    </>
  );
}