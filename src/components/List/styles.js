import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    color: '#feffff'
  },

  inputLabel: {
    color: '#17252a',
  },

   select: {
    color: '#17252a',
    backgroundColor: '#feffff',
   },

   menuItem: {
    color: '#17252a',
   },

  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '.7em',
   },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },

  container: {
    padding: '1em',
  },

  // marginBottom: {
  //   marginBottom: '30px',
  // },

  list: {
    height: '75vh', overflow: 'auto',
  },
}));