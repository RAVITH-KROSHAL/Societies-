import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import Header from './components/Header';
import AddYakka from './components/AddYakka';
import {BrowserRouter as Routes, Route} from "react-router-dom"



function App() {
  return (
    <div>
        
    <Routes>
 
    <Header />
    <Route exact path="/addYakka" component={AddYakka} />
   
    </Routes>
    </div>

  )
}

export default App;
