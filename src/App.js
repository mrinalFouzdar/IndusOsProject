
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Emojis from './Component/Emojis';
import List from './Component/List';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Emojis/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>

    </div>
  );
}

export default App;
