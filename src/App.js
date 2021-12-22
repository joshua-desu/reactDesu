import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
          <>
        <Navbar />
        <Header />
        </>
      </div>
    </div>
    );
}

export default App;
