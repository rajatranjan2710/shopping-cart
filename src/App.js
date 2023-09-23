import './styles/app.css'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Shop from './components/Shop';
// import Header from './components/Header';


function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
  </Router>
}

export default App;
