import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Typography,Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  table: {
    backgroundColor:'white',
      maxWidth:'65rem',
      marginLeft:250,
      marginTop:30,
      justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: '30rem',
      height: '38rem',
      alignItems: 'flex-start',
    },

  },
  paper: {
    maxWidth: '75rem',
    height: '35rem',
    marginLeft:150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0,0,0,0)',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: '30rem',
      height: '38rem',
      alignItems: 'flex-start',
    },
  },
  button: {
    width: '100%',
    maxWidth: '18rem',
    height: '3.2rem',
    borderRadius: '2rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    marginLeft:610,
    textTransform: 'capitalize',
    boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
    textAlign:'center',
    // Add hover color on this button
    hover:{
        backgroundColor:'white'
    }
  },
  heading: {
    marginLeft:650,
    fontWeight: '700',
    marginTop:30,
    marginBottom: theme.spacing(4),
  },

  text: {
//   Add proper font weight and color   
  },
  smallButton:{
  
    height: '1.4rem',
    borderRadius: '2rem',
    maxWidth: '100%',
    fontSize: '1rem',
    fontWeight: '10     ',
  color:'grey',
  backgroundColor:'lightgrey',
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  }
}));

function createData(name, age, gender, email ) {
  return {name, age, gender, email };
}

const rows = [
  createData('gnaepingp daguoaeg', 159, 6.0, 24),
  createData('gnaepingp gnaepingp', 237, 9.0),
  createData('gnaepingp gnaepingp', 262, 16.0),
  createData('gnaepingp gnaepingp', 305, 3.7),
  createData('gnaepingp gnaepingp ', 356, 16.0),
];

export default function Employee() {
  const classes = useStyles();

  return (
      <>
      <Typography variant='h3' className={classes.heading}>
            Employees
        </Typography>
    
        <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style = {{backgroundColor:'lightgrey'}}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">Male</TableCell>
              <TableCell align="right">20</TableCell>
              {/* Add routes to the edit and delete buttons */}
              <TableCell align="right"><a style={{OnHover:'white'}} type='edit'
              color='primary'
              variant='contained'
              className={classes.emailText}>san@san.com</a></TableCell>
              <TableCell align="right"><a style={{OnHover:'white',height: '1.4rem',
    borderRadius: '0.2rem',
    fontSize: '1rem',
  backgroundColor:'white',}} type='edit'
              color='primary'
              variant='contained'
              className={classes.smallButton}>Edit | Delete</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
              type='submit'
              color='primary'
              variant='contained'
              className={classes.button}
            >
            {/* Add routing here */}
            {/* Add + Icon here */}
             +    Add Employee
            </Button></TableContainer>


            </>
  );
}
