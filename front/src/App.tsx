import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./pages/Main/Main";
import PostPage from "./pages/Post/PostPage";
import AboutPage from "./pages/About/About";
import NavBar from "./components/navbar/NavBar";
function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="post/:id" element={<PostPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
