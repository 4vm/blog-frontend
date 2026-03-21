import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Header } from './components/Header/Header';
import { PostDetail } from './pages/PostDetail';
import { CreateEditPost } from './pages/CreateEditPost';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRouter';

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />

        {/* Rotas Privadas (Protegidas) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/create" element={<CreateEditPost />} />
          <Route path="/edit/:id" element={<CreateEditPost />} />        
        </Route>
        <Route path="/admin" element={<AdminDashboard />} />
        
      </Routes>
    </>
  );
}

export default App;