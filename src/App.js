import './App.css';
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import View from "./components/view";
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
