
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/UserPrivecy/Login/Login';
import Register from './Component/UserPrivecy/Register/Register';
import Schedule from './Component/Schedule/Schedule';
import Service from './Component/Home/Service/Service';
import NotFound from './Component/Schedule/NotFound/NotFound';
import RequiarAuth from './Component/UserPrivecy/Login/RequiarAuth';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home/service' element={<Service></Service>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/schedule/:id' element={
          <RequiarAuth>
            <Schedule></Schedule>
          </RequiarAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
