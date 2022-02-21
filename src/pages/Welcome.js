
import React from 'react'
import { Box, Typography, Paper } from '@material-ui/core'
import { makeStyles } from  '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { TextField, FormControl, FormControlLabel, Checkbox, Button } from '@material-ui/core'

import Footer from '../partials/Footer'

const useStyles = makeStyles({
    root: {
        width: '100vw',
        //minHeight: '80vh',
        margin: '0',
        padding: 0,
    },
    welcomeBox: {
        padding: '2rem 2rem 5rem 2rem',
        width: '100%',
        background: 'var(--AbbottPrimary)',
        color: '#ffffff',
        lineHeight: '1.1em',
    },
    welcomeHead: {
        font: 'Calibri, sans-serif', 
        fontWeight: '800',
        marginBottom: '.5rem',
    },
    authbox: {
        background: 'white',
        margin: '0px 2rem 0 2rem ',
        padding: '1rem 2rem',
        position: 'relative',
        top: '-3rem',
        borderRadius: 0
    },
    authboxHead: {
        color: 'var(--AbbottPrimary)',
        fontWeight: '600',
        margin: '0 0 1rem 0'
    },
    authboxLinks: {
        fontSize: '.8rem',
        textDecoration: 'none'
    },
    footer: {
    }
    
})

export default function Welcome() {

    const classes = useStyles()

    return (
        <Box id="WelcomePage" className={classes.root} >
            <Box className={classes.welcomeBox}>
                <Typography component="h3" variant="h5" className={classes.welcomeHead}>
                    Welcome!
                </Typography>
                <Typography>
                    Use your ToxAccess credentials to view results or perform a collection.
                </Typography>
            </Box>
            <Box className={classes.authContainer}>
                <Paper elevation={3} className={classes.authbox}>

                    <Typography component="h5" variant="h6" align="center" className={classes.authboxHead} >
                        Login
                    </Typography>

                    <form noValidate autoComplete="off" /*onSubmit={handleSubmit}*/ >
                        <Box>
                            <Typography align="right">
                                <Link to="/forgotuser" className={classes.authboxLinks} >Forgot Username?</Link>
                            </Typography>
                            <TextField 
                                //onChange={ (e) => setTitle(e.target.value)}
                                className={classes.field}
                                label="Username"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                required
                                autoComplete='username'
                                sx={{ pt: 1, pb: 1}}
                                //error={titleError}
                            />
                        </Box>
                        <Box>
                            <Typography align="right">
                                <Link to="/forgotpw" className={classes.authboxLinks} >Forgot Password?</Link>
                            </Typography>
                            <TextField 
                                //onChange={ (e) => setTitle(e.target.value)}
                                className={classes.field}
                                type="password"
                                label="Password"
                                variant="outlined"
                                color="secondary"   
                                fullWidth
                                required
                                autoComplete='current-password'
                                sx={{ pt: 1, pb: 1}}
                                //error={titleError}
                            />
                        </Box>
                        <Box sx={{ pb: '3'}}>
                            <FormControl component="fieldset">
                                <FormControlLabel
                                    value="true"
                                    control={<Checkbox color="primary" defaultChecked />}
                                    label="Remember Me"
                                    labelPlacement="end"
                                    className={classes.authboxLinks}
                                />
                            </FormControl>
                        </Box>

                        <Box align="center" sx={{ mt:2, mb:2 }}>
                            <Button 
                                fullWidth
                                type="submit"
                                variant="contained"  
                                color="primary"
                                disableElevation
                            >
                                Login
                            </Button>
                        </Box>

                        <Typography align="center">
                            <Link to="/NoAccount" className={classes.authboxLinks} >Don't have an account?</Link>
                        </Typography>
                        
                    </form>
                    
                </Paper>
            </Box>
        </Box>
    )
}
