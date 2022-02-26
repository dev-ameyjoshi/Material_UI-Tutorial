import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button 
      onClick ={() => alert("Hello!")} 
      // disabled --> disables the button.
      size ="large" 
      variant="contained" 
      color="secondary">
      Click Here !
      </Button>
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
    </div>
  );
}

export default App;
