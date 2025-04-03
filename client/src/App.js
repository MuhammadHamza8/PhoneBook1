import './App.css';
import CreateContact from './components/CreateContact';
import ViewContact from './components/ViewContact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    
<Router>

<Routes>


<Route path="/add" exact element={< CreateContact/>} />

<Route path="/view" exact element={<ViewContact/>} />


</Routes>
</Router>       
 );
}

export default App;
