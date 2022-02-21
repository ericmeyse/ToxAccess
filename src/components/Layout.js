import * as React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from  '@material-ui/core/styles'

import Header from '../partials/Header'
import Footer from '../partials/Footer'

const useStyles = makeStyles((theme) => {
    return {
        page: {
            width: '100%',
            height: 'calc(100vh)',
            padding: '0px',
            maxWidth: '100%',
            overflow: 'auto',
        },
        main: {
            width: '100%',
            maxWidth: '1920px',
            minHeight: 'calc(100vh - 65px)',
            padding: '0',
            position: 'relative',
        }
    }
})
export default function Layout ({ children, isMenuOpen  }) {

    const classes = useStyles()

    return (
        <Box id="Layout" className={classes.page} >
            <Header className={classes.navbar}></Header>
            <Box component="main" className={classes.main} >
                
                <Box >
                    {children}
                </Box>

            </Box>
            <Footer></Footer>
        </Box>
    )
}
