import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  div: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
    color: 'aqua',
  },
  root: {
    width: '100%',
  },
  table: {
    minWidth: 650,
  },
}));

export default function Weather(props) {
  const classes = useStyles();
  function createData(day, name, temp, temp_min, temp_max, humidity) {
    return { day, name, temp, temp_min, temp_max, humidity };
  }

  const rows = [];
  {
    props.data.list &&
      props.data.list.map(day =>
        rows.push(
          createData(
            day.dt_txt,
            day.weather[0].description,
            day.main.temp,
            day.main.temp_min,
            day.main.temp_max,
            day.main.humidity,
          ),
        ),
      );
  }
  return (
    <Paper className={classes.root}>
      <h1 className={classes.title}>
        {props.data.city && props.data.city.name}
      </h1>
      <div className={classes.div}>
        <input value="Tucuman" onClick={props.onChange} type="submit" />
        <input
          value="Cordoba"
          onClick={props.onChange}
          name="Cordoba"
          type="submit"
        />
        <input
          value="Rosario"
          onClick={props.onChange}
          name="Rosario"
          type="submit"
        />
        <input
          value="Corrientes"
          onClick={props.onChange}
          name="Corrientes"
          type="submit"
        />
        <input
          value="Mendoza"
          onClick={props.onChange}
          name="Mendoza"
          type="submit"
        />
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Temp°C&nbsp;</TableCell>
            <TableCell align="right">Temp_min&nbsp;°C</TableCell>
            <TableCell align="right">Temp_max&nbsp;°C</TableCell>
            <TableCell align="right">Humidity&nbsp;%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.day}>
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.temp}</TableCell>
              <TableCell align="right">{row.temp_min}</TableCell>
              <TableCell align="right">{row.temp_max}</TableCell>
              <TableCell align="right">{row.humidity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
