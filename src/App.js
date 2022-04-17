
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/UserPrivecy/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
