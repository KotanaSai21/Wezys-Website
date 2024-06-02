import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomeLayout = lazy(() => import('./Pages/HomePage'));
const BlogLayout = lazy(() => import('./Pages/BlogPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/blogs" element={<BlogLayout />} />
          <Route path="/:lang" element={<HomeLayout />} />
          <Route path="/:lang/company" element={<HomeLayout />} />
          <Route path="/:lang/board" element={<HomeLayout />} />
          <Route path="/:lang/revenue" element={<HomeLayout />} />
          <Route path="/:lang/blog" element={<HomeLayout />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;