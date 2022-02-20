
import React from 'react'
import { Box, Typography, Container, Paper } from '@material-ui/core'
import { makeStyles } from  '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Footer from '../partials/Footer'

const useStyles = makeStyles({
    root: {
        height: 'calc(100vh - 56px)',
        padding: '0px',
    },
    page: {
        height: 'calc(100vh - 56px - 56px)',
        width: '100%',
        marginTop: '0',
        padding: '2rem 2rem 0 2rem',
    },
    messageBox: {
        background: 'white',
        margin: '3rem auto 2rem',
        padding: '2rem',
        borderRadius: '0',
    },
    messageBoxHead: {
        color: '#009cde',
        fontWeight: 700,
        fontFamily: 'Calibri, sans-serif',
        marginBottom: '1rem',
    },
    paragraph: {
        marginBottom:  '1rem',
    }
});

export default function NoAccount() {

    const classes = useStyles()

    return (
        <Container  maxWidth={false} className={classes.root}>
            <Box className={classes.page}>

                <Paper elevation={3} className={classes.messageBox}>

                    <Typography  component="h5" variant="h6" className={classes.messageBoxHead}  >
                        What is ToxAccess?
                    </Typography>
                    <Typography  className={classes.paragraph} >
                        The ToxAccess<sup>TM</sup> website provides advanced reporting features and collection
                        management options that allow you to quickly and efficiently complete lab test request
                        forms - speed up and improve your drug testing process.
                    </Typography>
                    <Typography  className={classes.paragraph}>
                        Need to Sign Up? Email our team at <a href="mailto:support@redwoodtoxicology.com">support@redwoodtoxicology.com</a> or 
                        call us at <a href="tel:+18002552159">800-255-2159</a>
                    </Typography>
                    
                </Paper>

                <Box textAlign="center" className={classes.paragraph}>
                    <Link to="/Welcome">Return to Login</Link>
                </Box>
            </Box>
            

            <Footer></Footer>
        </Container>
    )
}
