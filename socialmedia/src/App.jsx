import './App.css'
import Body from './components/Body';
import Home from './components/Home';
import {Toaster} from "react-hot-toast"

function App() {

  return (
    <div>
      <Body />
      <Toaster/>
    </div>
  );
}
export default App;