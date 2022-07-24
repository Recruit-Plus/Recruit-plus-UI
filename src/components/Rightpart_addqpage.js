import React from 'react';


import VisibilityIcon from '@mui/icons-material/Visibility';
import {Typography,Button,CssBaseline, Container,Radio,RadioGroup,FormControl,Stack,FormControlLabel,Box,TextField,Grid} from '@mui/material';
import {
    BrowserRouter as Router,
    
    Route,
    Link,
    NavLink,
    Routes
  } from "react-router-dom";
import { borderLeft } from '@mui/system';
const Feed= (props) => {
  const [Questionnext,setqNext]=React.useState("");
  const [op1next,set1Next]=React.useState("");
  const [op2next,set2Next]=React.useState("");
  const [op3next,set3Next]=React.useState("");
  const [op4next,set4Next]=React.useState("");
  const [Answernext,setaNext]=React.useState("");

  const onchange=()=>{
   
  
   

     
  }
  const oneonchange=(event)=>{
   
   
    set1Next(event.target.value)
    ;
    
 
      
   }
   const twoonchange=(event)=>{
   
   
    set2Next(event.target.value);
    
    
 
      
   }
   const threeonchange=(event)=>{
   
    set3Next(event.target.value);
 
      
   }
   const fouronchange=(event)=>{
   
    set4Next(event.target.value);
    
 
      
   }
   function ansonchange (event){
    
    
   
  
   
    setaNext(event.target.value)
  }
  function handleonchange (event){
    setqNext(event.target.value);
    
   
  
   
    
  }
  
  return (
    <>
   <Container style={{paddingTop:60,height:'100%'}}>
   <div style={{paddingTop:30,paddingBottom:10}}>
    <Box>
        <Stack spacing={40} direction='row'>
    <Button variant="contained" style={{backgroundColor:'#696969'}} 
     
       ><VisibilityIcon /></Button>
      <Link to='/Home'>
      <Button variant="contained" 
      style={{backgroundColor:'#696969'}}
       >Close</Button>
</Link>
      <Button variant="contained"  style={{backgroundColor:'#696969'}} onClick={handleonchange} >SAVE&NEXT</Button>
      </Stack>
      </Box>
      </div>
   <Box style={{border:'2px solid black',height:'70%',backgroundColor:'#f8f8f8',margin:'0.6rem auto 0 auto',padding:'37px 2px'}}>
    <Grid container>
    <Grid item xs={2} >
    <Container styles={{borderRight:'2px solid black'}}>
       
  <Stack>
  <p  style={{fontSize:'1.1rem',color:'white',border:'2px solid #696969',backgroundColor:'#696969',cursor:'pointer',margin:'0.4rem 0.4rem ',transition:'0.3s linear all',padding:'1.4rem',width:'80%'}}>Question</p>
  <p style={{color:'white',border:'2px solid #696969',backgroundColor:'#696969',cursor:'pointer',margin:'0.4rem 0.4rem ',transition:'0.3s linear all',padding:'1.4rem',width:'80%'}}>Option 1</p>

  <p style={{color:'white',border:'2px solid #696969',backgroundColor:'#696969',cursor:'pointer',margin:'0.4rem 0.4rem ',transition:'0.3s linear all',padding:'1.4rem',width:'80%'}}>Option 2</p>

  <p style={{color:'white',border:'2px solid #696969',backgroundColor:'#696969',cursor:'pointer',margin:'0.4rem 0.4rem ',transition:'0.3s linear all',padding:'1.4rem',width:'80%'}}>Option 3</p>

  <p style={{color:'white',border:'2px solid #696969',backgroundColor:'#696969',cursor:'pointer',margin:'0.4rem 0.4rem ',transition:'0.3s linear all',padding:'1.4rem',width:'80%'}}>Option 4</p>
  <p style={{color:'white',border:'2px solid #696969',backgroundColor:'#696969',cursor:'pointer',margin:'0.4rem 0.4rem ',transition:'0.3s linear all',padding:'1.4rem',width:'80%'}}>Answer</p>
  </Stack>
 
       
  </Container>

        </Grid>
        <Grid item xs={10}>
        <Container styles={{borderRight:'2px solid black'}}>
       
       <Stack>
       <TextField fullWidth label="Question " value={Questionnext} onChange={handleonchange}
       style={{margin:'0.8rem auto ',color:'black',backgroundColor:'white'}}></TextField>
       <TextField fullWidth label="Option 1" value={op1next} onChange={oneonchange}
        style={{margin:'0.8rem auto ',color:'black',backgroundColor:'white'}}></TextField>
       <TextField fullWidth label="Option 2" value={op2next} onChange={twoonchange}
        style={{margin:'0.8rem auto ',color:'black',backgroundColor:'white'}}></TextField>
       <TextField fullWidth label="Option 3" value={op3next} onChange={threeonchange}
        style={{margin:'0.8rem auto ',color:'black',backgroundColor:'white'}}></TextField>
       <TextField fullWidth label="Option 4" value={op4next} onChange={fouronchange}
        style={{margin:'0.8rem auto ',color:'black',backgroundColor:'white'}}></TextField>
       <TextField fullWidth label="Answer" value={Answernext} onChange={ansonchange}
        style={{margin:'0.8rem auto ',color:'black',backgroundColor:'white'}}></TextField>
      
       </Stack>
      
            
       </Container>
        </Grid>
        </Grid>
        </Box>
       

      </Container>
    </>
    
   
  );
}

export default Feed;