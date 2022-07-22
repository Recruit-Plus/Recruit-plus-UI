import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import DialogActions from '@mui/material/DialogActions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link} from 'react-router-dom';
import EditQuestionPage from './EditQuestionPage';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const ariaLabel = { 'aria-label': 'description' };
  return (
        <div align="center">
        
        <Button variant="outlined" onClick={handleClickOpen} style={{backgroundColor:'black',color:'white'}}>
           <EditIcon/>
        </Button>
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative',backgroundColor:'#d50000' }}>
            <Toolbar>
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
                <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
    
                </Typography>
                
            </Toolbar>
            </AppBar>
        <Box
            alignItems="center"
        component="form"
        sx={{
            '& > :not(style)': { m:1},
        }}
        noValidate
        autoComplete="off"
        >
        <div >
        <Input TextField style ={{width: '100%'}} 
        defaultValue=" Which keyword is used for accessing the features of a package? " inputProps={ariaLabel} />
        </div>
        </Box>
        <Box
        component="form"
        noValidate
        sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr' },
            gap: 1,
        }}
        >
        <div className='container my-2 mx-3'>
        <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
            </InputLabel>
            <BootstrapInput defaultValue="import" id="bootstrap-input" />
            <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
            </InputLabel>
            <BootstrapInput defaultValue="export" id="bootstrap-input" />
            <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
            </InputLabel>
            <BootstrapInput defaultValue="extends" id="bootstrap-input" />
        </FormControl>
        <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
            </InputLabel>
            <BootstrapInput defaultValue="package" id="bootstrap-input" />
        </FormControl>
        <div className='my-3'></div>
            <h5> correct answer: </h5>
        <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input"> 
            </InputLabel>
            <BootstrapInput defaultValue="import" id="bootstrap-input" />
        </FormControl>
        </FormControl>
        </FormControl>

        </div>
        
        </Box>
        <div className='container my-3 mx-3' >
        <h4>Difficulty Level</h4>
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
            <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            
        </RadioGroup>
        </div>
        
        <DialogActions>
    </DialogActions>
    <div className='abc' align="center">
    <Link to="/Home">
    <Button style={{backgroundColor:'black',color:'white'}} >
            Update
    </Button>
    </Link>

        </div>
        </Dialog>
        </div>
  );
}