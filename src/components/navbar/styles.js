import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    webkitBoxShadow: "0px 2px 4px rgba(38, 50, 56, 0.16)",
    webkitBoxShadow :"0px 4px 8px rgba(38, 50, 56, 0.08)",
    height : 60,
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  image: {
    // marginRight: '100px',
    // padding : 10,
    position: "absoulte",
    height : 40,
    left : 215,
    top : -12,
  },
}));