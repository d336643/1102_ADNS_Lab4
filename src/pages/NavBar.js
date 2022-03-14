import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {AppBar, Toolbar, Button, Avatar, Typography} from '@mui/material';
import imgSrc from "../image/me_avater.JPG";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Link } from "react-router-dom";

const theme = createTheme();


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    cnt: {
        flexGrow: 1,
    },
    toolbarTitle: {
        flexGrow: 1,
        '& *': {
            margin: theme.spacing(1, 1.5),
            textDecoration: 'none',
            color: "#ffffff"
        },
    },
});


function NavBar(){
    const classes = useStyles();
    const activeStyle = {
        fontWeight: "bold",
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [viewCnt, setViewCnt] = useState(0);

    const handleClick = event => {
        setViewCnt(viewCnt + 1);
        console.log(viewCnt)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Button href="#"><Avatar src={imgSrc} className={classes.menuButton}/></Button>
                <Typography variant="h6" className={classes.title}>
                    網路攻防實習
                </Typography>
                <Typography className={classes.cnt}>
                    瀏覽人數：{viewCnt}
                </Typography>
                <button onClick={handleClick}>addCnt</button>
                <nav className={classes.toolbarTitle}>
                    <Link to="chat">聊天室</Link>
                    </nav>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default NavBar;

