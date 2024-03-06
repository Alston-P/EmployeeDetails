import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addemployee' element={<AddEmployee />} />
      <Route path='/editemployee/:id' element={<EditEmployee />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
