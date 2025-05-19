import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';

const App = () => {
  return (
      <Router basename="/progetto-react">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ricetta/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
  );
};

export default App;