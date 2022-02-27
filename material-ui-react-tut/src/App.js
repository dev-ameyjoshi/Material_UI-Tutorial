import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import  TextField  from '@material-ui/core/TextField';

import {makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green,orange} from '@material-ui/core/colors';
import 'fontsource-roboto';

import  Typography  from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root:{
    background:'linear-gradient(45deg,#FF6B8B,#3FFA)',
    border:0,
    marginBottom:15,
    borderRadius:5,
    color:'white',
    padding:'5px 20px'
  }
})

const theme = createMuiTheme({
  typography:{
    h2:{
      fontSize:36,
      marginBottom:15,
    }
  },
  palette:{
    primary:{
      main:green[400],

    },
    secondary:{
      main:orange[400],
    }
  }
})


function ButtonStyled(){
  const classes = useStyles();
  return <Button className = {classes.root}>Test Styled Button
  
  </Button>
}
function CheckboxExample(){
  const  [checked,setChecked] = React.useState(true) 
  return(  
    <FormControlLabel 
      control={
      <Checkbox 
        checked={checked}
        icon={<SaveIcon />} // 26:40 if -> <DeleteIcon /> --> then save changes to that logo.
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        // color = "primary"
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
    <ThemeProvider theme = {theme}>
    <div className="App">
      <header className="App-header">
      <Typography variant='h2'>
      {/* component="div" is also another 
      parameter if u want to use apart from 
      regular component independently */}
      Welcome to MUI
      </Typography>
      <Typography variant='subtitle1'>
      {/* here variant can aslo be h1,h2... */}
      Learn how to use material UI
      </Typography>
      <ButtonStyled /> 

      {/* TextField component */}
      <TextField 
      variant='filled'
      color='secondary'
      type = 'email'
      label="Email"
      placeholder ="test@test.com"
      
      // above placeholder can also be value 
      //type can be changed to date,time,email

      />


      {/* Checkbox Component */}
      <CheckboxExample />

      {/* Button Component */}
      <ButtonGroup variant="contained" color="primary">
        <Button 
            startIcon={<SaveIcon />} 
            //to apply icon at the start and similarly at the end.
            // endIcon={<SaveIcon />}
            onClick ={() => alert("Saved!")} 
            // disabled --> disables the button.
            style ={{
              fontSize : 15
            }}
            size ="large" >
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
            size ="large" >
              Discard
        </Button>
      </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      
    </div>
    </ThemeProvider>
  );
 
}

export default App;
