import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FirstPage from './pages/first_page'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<FirstPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
