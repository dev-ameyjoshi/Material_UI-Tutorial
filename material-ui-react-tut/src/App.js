import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CheckboxExample(){
  const  [checked,setChecked] = React.useState(true) 
  return(  
    <FormControlLabel 
      control={
      <Checkbox 
      checked={checked}
      icon={<SaveIcon />} // if -> <DeleteIcon /> --> then save changes to that logo.
      checkedIcon={<SaveIcon />}
      onChange={(e) => setChecked(e.target.checked)}
      color = "primary"
      inputProps={{
      'aria-label': 'secondary checkbox'
      }}

    />}
    label="Testing Checkbox"
    />
    
    
    
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CheckboxExample />
      <ButtonGroup variant="contained" color="primary">
        <Button 
        startIcon={<SaveIcon />} //to apply icon at he start and similarly at the end.
        // endIcon={<SaveIcon />}
        onClick ={() => alert("Saved!")} 
        // disabled --> disables the button.
        style ={{
          fontSize : 15
          
        }}
        size ="large" 
        
        >
              Save
        </Button>
        
        <Button 
        startIcon={<DeleteIcon />} //to apply icon at he start and similarly at the end.
        // endIcon={<SaveIcon />}
        onClick ={() => alert("Deleted!")} 
        // disabled --> disables the button.
        style ={{
          fontSize : 15
        }}
        size ="large" 
         
        >
            Discard
        </Button>
      </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
