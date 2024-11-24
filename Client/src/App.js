import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { News } from "./components/News";
import './App.css';
function App() {
  return (
    <BrowserRouter>
       <Navbar title='NewsApp'/>
       <Routes>

        <Route index element={<News key='general' category='general'/>} />
        <Route path='/sports' element={<News key='sports' category='sports'/>} />
        <Route path='/business' element={<News key='business' category='business'/>} />
        <Route path='/entertainment' element={<News key='entertainment' category='entertainment'/>} />
        <Route path='/general' element={<News key='general' category='general'/>} />
        <Route path='/health' element={<News key='health' category='health'/>} />
        <Route path='/science' element={<News key='science' category='science'/>} />
        <Route path='/technology' element={<News key='technology' category='technology'/>} />

       </Routes>
    </BrowserRouter>
  );
}

export default App;
