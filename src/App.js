import Router from './Router';
import Navbar from './pages/NavBar';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    padding: "0",
    margin: "0",
  },
});

function App() {
  const classes = useStyle();
  return (
    <div>
      <Navbar />
      <Router/>
    </div>
    
  ); 
}

export default App;
