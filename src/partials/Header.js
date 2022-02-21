import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import { IconButton, List, ListItem, ListItemIcon, makeStyles } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ColorizeOutlinedIcon from '@material-ui/icons/ColorizeOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link } from 'react-router-dom'

const drawerWidth = 300; 

const useStyles = makeStyles((theme) => {   
    return {
        appbar: {
            background: 'var(--AbbottPrimary)',
            maxWidth: '1920px',
            width: '100vw',
            margin: 'auto',
            padding: '0 1rem 0 1rem',
            zIndex: theme.zIndex.drawer + 2,
        },
        app: {
            display: 'flex',
            flexGrow: '1',
        },
        appName: {
            font: 'Calibri, sans-serif',
            fontWeight: '800',
            textTransform: 'none'
        },
        appLogo: {
            width: '90px'   
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
            paddingTop: '.5rem',
            paddingBottom: '.5rem',
        },
        menuIconList: {
            paddingTop: '0',
            paddingBottom: '0',
        },
        menuBoxListItemDense: {
            padding: '.5rem 0 .5rem 1rem',
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
        menuLink: {
            textDecoration: 'none',
            lineHeight: 'inherit',
            display: 'inline-block',
            paddingBottom: '4px'
        }
    }
})



export default function Header() {

    const classes = useStyles()
    const anchor = "left"
    const [state, setState] = React.useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
    
        <AppBar position="static" elevation={0}  className={classes.appbar} >
            <Toolbar disableGutters>
                <IconButton
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(anchor, true)}
                >
                    <MenuIcon />
                </IconButton>
                <Box className={classes.app}>
                    <Typography component="h1" variant="h5" className={classes.appName}>
                        ToxAccess
                    </Typography>
                </Box>

                <img className={classes.appLogo} src="../../images/AbbottLogoWhite.png" alt="eScreen logo" />
            </Toolbar>

            <Drawer 
                anchor={anchor} 
                open={state[anchor]} 
                onClose={toggleDrawer(anchor, false)}
                className={classes.drawer}
                //elevation={1}
                variant="temporary" 
                classes={{paper: classes.drawerPaper,}}
            >
                <Box align="right" className={classes.chevronPaper}>
                    <ChevronLeftIcon  style={{ fontSize: 40, color: '#666' }} onClick={toggleDrawer(anchor, false)}  /> 
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
                        <ListItem button className={classes.menuIconListItem} onClick={toggleDrawer(anchor, false)}>
                            <ListItemIcon className={classes.menuItemPad}><ColorizeOutlinedIcon/></ListItemIcon>
                            <Link to="/Collections" className={classes.menuLink} >
                                Collections
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuIconListItem} onClick={toggleDrawer(anchor, false)}>
                            <ListItemIcon className={classes.menuItemPad}><AssignmentOutlinedIcon/></ListItemIcon>
                            <Link to="/Results" className={classes.menuLink} >
                                Results
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuIconListItem} onClick={toggleDrawer(anchor, false)}>
                            <ListItemIcon className={classes.menuItemPad}><SupervisorAccountIcon /></ListItemIcon>
                            <Link to="/Donors" className={classes.menuLink}>
                                Donors
                            </Link>
                        </ListItem>
                    </List>
                </Box>

                <Box className={classes.menuBox}>
                    <List className={classes.menuBoxList}>
                        <ListItem button className={classes.menuBoxListItemDense}>
                            <Link href="/Account" to="" className={classes.menuItemPad} onClick={toggleDrawer(anchor, false)}>
                                Password Settings
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItemDense}>
                            <Link href="/NoAccount" to="" className={classes.menuItemPad} onClick={toggleDrawer(anchor, false)}>
                                About
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItemDense}>
                            <Link href="/Help" to="" className={classes.menuItemPad} onClick={toggleDrawer(anchor, false)}>
                                Help
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItemDense}>
                            <Link href="/Privacy" to="" className={classes.menuItemPad} onClick={toggleDrawer(anchor, false)}>
                                Privacy Policy
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItemDense}>
                            <Link href="/Terms" to="" className={classes.menuItemPad} onClick={toggleDrawer(anchor, false)}>
                                Terms of Use
                            </Link>
                        </ListItem>
                        <ListItem button className={classes.menuBoxListItemDense}>
                            <Link href="/Welcome" to="" className={classes.menuItemPad} onClick={toggleDrawer(anchor, false)}>
                                Log Out
                            </Link>
                        </ListItem>
                    </List>
                </Box>

            </Drawer >
        </AppBar>
    )
}
