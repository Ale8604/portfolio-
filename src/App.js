import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About } from './Components/Page/about/AboutMe';
import { Portfolio } from './Components/Page/portfolio/Portfolio';

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<About/>}></Route>
            <Route path='/Portfolio' element={<Portfolio/>}></Route>
        </Routes>
    </>
  );
}

export default App;
