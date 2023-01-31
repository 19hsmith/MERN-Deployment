import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Main from './pages/Main';
import ViewPet from './components/ViewPet'
import CreatePet from './components/CreatePet'
import UpdatePet from './components/UpdatePet'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Main/>}/>
          <Route path ='/pet/:id/Show' element={<ViewPet/>}/>
          <Route path ='/pet' element={<CreatePet/>}/>
          <Route path ='/pet/:id/edit' element={<UpdatePet/>}/>
      </Routes>
    </div>
  );
}

export default App;
