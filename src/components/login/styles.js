import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  rootLogin: {
    height: '100%',
    backgroundColor: 'lightyellow',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  contentLogin: {
    width: '400px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  cardLogin: {
    width: '400px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  inputsLogin: {
    padding: '10px',
    height: '120px',
    width: '300px',
    display: 'grid',
    backgroundColor: 'lightgreen',
  },
  push: {
    height: '50px',
  },
  footer: {
    position: 'absolute',
    height: '50px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'lightblue'
  }
}));