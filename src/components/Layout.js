import * as React from 'react'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from  '@material-ui/core/styles'

import Header from '../partials/Header'


const useStyles = makeStyles((theme) => {
    return {
        page: {
            width: '100vw',
            height: 'calc(100vh)',
            padding: '0px',
            maxWidth: '100%',
            overflow: 'auto',
        },
        main: {
            width: '100%',
            maxWidth: '1920px',
            minHeight: 'calc(100vh - 56px - 34px)',
            padding: 0
        }
    }
})
export default function Layout ({ children, isMenuOpen  }) {

    const classes = useStyles()

    return (
        <Container className={classes.page} >
            <Header className={classes.navbar}></Header>
            <Box component="main" className={classes.main} >
                
                <Box >
                    {children}
                </Box>

            </Box>
        </Container>
    )
}
