import './App.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import SecondPage from './Components/SecondPage';

function App() {
  return (
    <div className="App">
       <Router>
       <Routes>

       <Route path="/" element={<Header />} />
       <Route path="/dish" element={<SecondPage />} />
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
