import logo from './logo.svg';
import Router from './Router';
import Navbar from './pages/NavBar';
import Login from './pages/Login';
import { makeStyles } from '@material-ui/styles';

import HomePage from "./pages/HomePage";


const useStyle = makeStyles(theme => ({
  root: {
    padding: "0",
    margin: "0",
  },

}));

function App() {
  const classes = useStyle();
  return (
    <div>
      <h1>hello</h1>
      <Navbar />
      <Router/>
    </div>
    
  ); 
}

export default App;
