import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addemployee' element={<AddEmployee />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
