import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./pages/Main/Main";
import PostPage from "./pages/Post/Post";
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="post/:id" element={<PostPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
