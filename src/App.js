
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/UserPrivecy/Login/Login';
import Register from './Component/UserPrivecy/Register/Register';
import Schedule from './Component/Schedule/Schedule';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/schedule/:id' element={<Schedule></Schedule>}></Route>
      </Routes>
    </div>
  );
}

export default App;
