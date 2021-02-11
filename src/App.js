import './App.css';
import Home from "./components/homeComponent/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/loginComponent/Login";
import View from "./components/viewComponent/view";
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
