import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  image: {
    left :50,
    marginTop : 60,
    width: 500,
    height: 500,
    float:"left",
  },
  root: {
    maxWidth: 450,
    overflow: "hidden",
    float :"left",
    marginTop : 130,
    marginLeft : 130,
    borderRadius: 16,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    padding : 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));