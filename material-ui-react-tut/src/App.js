import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import  TextField  from '@material-ui/core/TextField';

import {makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green,orange} from '@material-ui/core/colors';
import 'fontsource-roboto';

import  Typography  from '@material-ui/core/Typography';
import  Container from '@material-ui/core/Container';
import  Paper  from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import  IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
  // palette:{
  //   primary:{
  //     main:green[400],

  //   },
  //   secondary:{
  //     main:orange[400],
  //   }
  // }
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
      <Container maxWidth="xs">
      {/* xs --> md,lg  */}
      <div className="App">
      <header className="App-header">
        <AppBar color="secondary">
        <Toolbar>
        <IconButton>
        <MenuIcon />
        </IconButton>
        <Typography Variant="h6">
        MUI Theme
        </Typography>
        <Button>
        Login
        </Button>
        </Toolbar>
        </AppBar>

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


      <Grid container spacing={2} justify="center">
          <Grid item xs={3} sm={6}> 
              <Paper style={{height:75,width:'100%',}}/>
          </Grid>
          <Grid item xs={3} sm={6}>
              <Paper style={{height:75,width:'100%',}}/>
          </Grid>
          <Grid item xs={3} sm={6}>
              <Paper style={{height:75,width:'100%',}}/>
              {/* Grid can be a container and an item */}
          </Grid>
      </Grid>


      {/* TextField component */}
      {/* <TextField 
      variant='filled'
      color='secondary'
      type = 'email'
      label="Email"
      placeholder ="test@test.com"
      
      // above placeholder can also be value 
      //type can be changed to date,time,email

      /> */}


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
    </Container>
    </ThemeProvider>
  );
 
}

export default App;
