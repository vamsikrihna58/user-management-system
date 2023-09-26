
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {   Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Registration';

import Welcome from './Welcome';
import Next from './Next';
import Vamsi from './Vamsi';
import Createtask from './Createtask';
import Updatetask from './Updatetask';
import Delete from './Delete';
import Search from './Search';
import Filter from './Filter';
import All from './All';


function App() {
  
  return (
    <div>
    
    
     <Router>
     <Welcome />
      <Routes>
        <Route path='/login' element={<Registration />} />
        <Route path='/Next' element={<Next />} />
        <Route path='/home' element={<Vamsi />} />
        <Route path='/create' element={<Createtask />} />
        <Route path='/update' element={<Updatetask />} />
        <Route path='/delete' element={<Delete />} />
        <Route path='/search' element={<Search />} />
        <Route path='/filter' element={ <Filter />} />
        <Route path='/all' element={ <All />} />
      </Routes>
     </Router>
      
    </div>

 
   
  );
}

export default App;
