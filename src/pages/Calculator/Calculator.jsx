import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import { width } from '@mui/system';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Calculator() {
  
  const [equation, setEquation] = React.useState("")
  const [item, setItem] = React.useState("")
 
  const handleKeyClicked = (key) => {
    if (key == '=') {
      setEquation("")
      setItem(eval(equation + Number(item)));
    } else if (key === '+' || key === '-') {
      setEquation(equation + Number(item) + key);
      setItem("");
    } else {
      if (item === '' && key === '.' ) {
        setItem('0.');
      } else if (key === '.' && item.indexOf('.') !== -1){

      
      }else {
        setItem(item + key);
      }  
    }

  }

  return (
    <Container sx={{width: '300px'}}><Box sx={{ width: '100%',  }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        <Grid item xs={4} onClick={() => handleKeyClicked('1')}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('2')}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('3')}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('4')}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('5')}>
          <Item>5</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('6')}>
          <Item>6</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('7')}>
          <Item>7</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('8')}>
          <Item>8</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('9')}>
          <Item>9</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('.')}>
          <Item>.</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('0')}>
          <Item>0</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('=')}>
          <Item>=</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('+')}>
          <Item>+</Item>
        </Grid>
        <Grid item xs={4} onClick={() => handleKeyClicked('-')}>
          <Item>-</Item >
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={8}>
        <TextField id="outlined-basic" label="Result" variant="outlined" value={equation + item} />  
        </Grid>
      </Grid>
    </Box></Container>
  );
}