
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
function App() {
  return (
    
    <Router>
      <div className='App'>
      <Login></Login>
      <Routes>        
        <Route  exact path="/signup" element={<Signup/>}></Route>
      </Routes>
      </div>
    </Router>
    

  );
};

export default App;
