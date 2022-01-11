import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Background from './components/background';



function App() {

  
  return (
    <div className="App" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Routes>
      </Routes>
        <Background />
        <Header />
        <Navbar />
    </div>
    );

}



export default App;
