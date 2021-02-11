import './App.css';
import Home from "./components/home";
import View from "./components/view"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
function App() {
  return (
    <div>
      <Home/>
      <Login/>
      <View/>
    </div>
  );
}

export default App;
