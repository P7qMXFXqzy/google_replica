import { Navigate, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FirstPage from './pages/first_page'
import LoginPage from './pages/login'
import SearchPage from "./pages/search"

function App() {
  const undefined_main_page_route = "/index/" + undefined + "/" + undefined;
  return (
    <Router>
    <Routes>
      <Route path="/index/:user/:password" element={<FirstPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/search/:keyword" element={<SearchPage/>}/>
      <Route path="*" element={<Navigate to={undefined_main_page_route}/>} />
    </Routes>
  </Router>
  );
}

export default App;
