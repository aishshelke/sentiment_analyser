import { makeStyles } from "@material-ui/core/styles";
import { ArrowRight } from "@material-ui/icons";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    webkitBoxShadow: "0px 2px 4px rgba(38, 50, 56, 0.16)",
    webkitBoxShadow: "0px 4px 8px rgba(38, 50, 56, 0.08)",
    height: 60,
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  image: {
    marginRight: "100px",
    padding: 10,
    position: "absoulte",
    height: 40,
    left: 215,
    top: -12,
    flexGrow: 1,
    float: "left",
  },
  
  image1: {
    padding:10,
    width: 653,
    height: 234,
     marginRight: "634px",
    marginLeft:"633px",
    top:"300px",
    flexGrow: 1,
    float: "center",
  },
  grow: {
    flexGrow: 1,
  },
  profile: {
    marginLeft: 1100,
    padding: 10,
    transform: "scale(1.5)",
    display: "block",
    float: "right",
 },
form: {
     marginTop: theme.spacing(10),
    height:"100%",
width: "100%",
 
 },
 textField:{
     marginLeft:"150px",
  //  marginRight:"593px",
    // marginTop:"480px",
     height:"100px",
     width:"1040px",
     padding:"10px",


 }, 
 submit:{ 
  //  marginLeft: 1342,
  //  marginRight:295,
  //  marginTop:481,
   height:"55px",
   width:"283px",
   margin: theme.spacing(3, 0, 3),

 },
 title:{height:"52px",
  width: "133px",
  left:"217px",
  top: "18px",
   },
 result:{
    height: "78.125px",
    width: "300px",
    left:"142px",
    top: "127px",
     
   },
   rcard:{
    height: "220px",
    width: "500px",
    marginLeft:160,
    top:"673px",
     
   }, 
   emojicard:{
    height: "220px",
width: "500px",
left: "544px",
top: "673px",
 marginLeft:744,
 margin: theme.spacing(3, 0, 3),

   },
   
  paper: {
    padding : 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },

}));
