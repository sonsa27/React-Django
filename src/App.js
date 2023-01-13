import logo from './logo.svg';
import './App.css';
import axios from "axios";
import useEffect from "react"
function App() {
    axios.get("http://127.0.0.1:8000/blog/api/articles/1")
}

export default App;
