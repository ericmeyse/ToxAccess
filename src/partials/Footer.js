import React from 'react'
import {  makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    footer: {
        background: 'var(--AbbottPrimary)',
        maxWidth: '1920px',
        margin: 'auto',
        padding: '.5rem 2rem'
    },
    copyright: {
        fontSize: '.75rem',
        color: '#ffffff'
    }
})


export default function Footer() {

    const classes = useStyles()

    return (
        <Container maxWidth="xl" className={classes.footer}>
            
            <Typography align="center"  className={classes.copyright} >Copyright 2022</Typography>
            
        </Container>
    )
}
