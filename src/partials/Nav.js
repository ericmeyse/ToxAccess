import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PersonIcon from '@material-ui/icons/Person';
import ColorizeOutlinedIcon from '@material-ui/icons/ColorizeOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const drawerWidth = 300; 

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            position: 'relative',
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            left: '0px',
            //top: 56,
            backgroundColor: 'var(--AbbottLightGray)',
            zIndex: theme.zIndex.drawer + 1,
        },
        drawerOpen: {
            left: '0px',
        },
        drawerClosed: {
            left: '-1000px',
        },
        chevronPaper: {
            width: drawerWidth,
            backgroundColor: 'white',
        },
        drawerContainer: {
            overflow: 'auto',
        },
        userIcon: {
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            background: 'transparent',
            border: '6px solid #ccc',
        },
        menuBox: {
            backgroundColor: 'white',
        },
        menuBoxList: {
            paddingTop: '0px',
            paddingBottom: '0'
        },
        menuIconList: {
            paddingTop: '0',
            paddingBottom: '0',
        },
        menuBoxListItem: {
        },
        menuIconListItem: {
            borderBottom: '1px solid var(--AbbottLightGray)',
        },
        menuItemPad:{
            paddingLeft: '1rem',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }
});

export default function Nav({isMenuOpen}) {



    const classes = useStyles();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <Box className={classes.drawerContainer}>
            <CssBaseline />
            
            <Drawer 
                open={isMenuOpen}
                className={
                    classes.drawer
                }
                elevation={1}
                variant="temporary" 
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Box align="right" className={classes.chevronPaper}>
                    <ChevronLeftIcon  style={{ fontSize: 40, color: '#666' }}  /> 
                </Box>
                <Box align="center" className={classes.menuBox} sx={{pt:2,pb:2,mb:2}} >
                    <Box className={classes.userIcon} sx={{mb:2}}>
                        <PersonIcon style={{ fontSize: 80, color:'#ccc' }} />
                    </Box>
                    <Typography variant="h5" >Pete Carpenter</Typography>
                    <Typography >Demo Agency</Typography>
                </Box>      
                <Box className={classes.menuBox} sx={{ mb:2 }}>
                    <List className={classes.menuIconList}>
                        <ListItem button className={classes.menuIconListItem}>
                            <ListItemIcon className={classes.menuItemPad}><ColorizeOutlinedIcon/></ListItemIcon>
                            <ListItemText>Collections</ListItemText>
                        </ListItem>
                        <ListItem button className={classes.menuIconListItem}>
                            <ListItemIcon className={classes.menuItemPad}><AssignmentOutlinedIcon/></ListItemIcon>
                            <ListItemText >Results</ListItemText>
                        </ListItem>
                        <ListItem button className={classes.menuIconListItem}>
                            <ListItemIcon className={classes.menuItemPad}><SupervisorAccountIcon /></ListItemIcon>
                            <ListItemText>Donors</ListItemText>
                        </ListItem>
                    </List>
                </Box>

                <Box className={classes.menuBox}>
                    <List className={classes.menuBoxList}>
                        <ListItem button className={classes.menuBoxListItem}>
                            <ListItemText className={classes.menuItemPad}>Password Settings</ListItemText>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItem}>
                            <ListItemText className={classes.menuItemPad}>About</ListItemText>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItem}>
                            <ListItemText className={classes.menuItemPad}>Help</ListItemText>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItem}>
                            <ListItemText className={classes.menuItemPad}>Privacy Policy</ListItemText>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItem}>
                            <ListItemText className={classes.menuItemPad}>Terms of Use</ListItemText>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItem}>
                            <ListItemText className={classes.menuItemPad}>Log Out</ListItemText>
                        </ListItem>
                    </List>
                </Box>

            </Drawer >
        </Box>
    )
}
