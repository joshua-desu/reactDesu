import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Background from './components/background';



function App() {
  
  return (
    <div className="App" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <Background />
        <Header /> 
        <Navbar />
    </div>
    );
}
    

document.title = "joshuadesu.io";

export default App;
