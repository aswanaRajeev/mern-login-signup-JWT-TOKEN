import Dashboard from './Daahboard';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';

function App() {

  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/register" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>

    </Routes>
   </BrowserRouter>
     
  )
}

export default App
