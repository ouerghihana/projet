
import './App.css';
import{Routes,Route} from 'react-router-dom'
import PageAcceuil from './components/HomePage/PageAcceuil';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ListUser from './components/Admin/ListUsers/ListUser';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Admin/Dashboard';

import Privateroute from './components/PrivateRoute/Privateroute';
import AddMovie from './components/Addmovies/AddMovie';

import UpdateMovie from './components/UpdateMovie/UpdateMovie';
import MovieList from './components/Movies/MovieList';

function App() {
  return (
    <div className="App">
    <Routes>
   
      <Route path='/' element ={<PageAcceuil/>}/>
      <Route path='/register' element ={<Register/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/nav' element ={<Navbar/>}/>
      <Route path='/app/PrivateRoute' element ={<Privateroute/>}/>
      
    {/* routes Admin*/}
    <Route path='/dashbord' element ={<Dashboard/>}/>
    <Route path='/listuser' element ={<ListUser/>}/>
    <Route path='/listMovie' element={<MovieList/>}/>
     <Route path='/Admin/AddMovies'  element = {<AddMovie/>}/>
     <Route path='/updatemovie/:id'  element ={<UpdateMovie/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
