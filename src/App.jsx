// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ApiPage from './pages/ApiPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}

export default App;