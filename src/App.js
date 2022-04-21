import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to='user/add' element={<AddUser></AddUser>}></Route>
        <Route to='home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
