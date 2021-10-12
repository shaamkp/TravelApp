
import './App.css';
import Travell from './Components/Screens/Travell';
import Place from './Components/Screens/Place';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <>
    <Switch>
      <Route path='/' exact component={Travell}/>
      <Route path='/view/:id' exact component={Place} />
    </Switch>
    </>
    </Router>
  );
}

export default App;
