import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles, InputBase } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MenuFooter from '../components/MenuFooter'

import SearchIcon from '@material-ui/icons/Search';
//import FilterListIcon from '@material-ui/icons/FilterList';
//import TodayIcon from '@material-ui/icons/Today';
import PeopleIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles({
	root: {
		paddingTop: '2rem',
		paddingLeft: '2rem',
		paddingRight: '2rem',
		width: '100vw',
	},
	page: {
		paddingTop: '80vw',
		paddingLeft: '1rem',
		paddingRight: '1rem',
		width: '100%',

	},
	searchBar: {
		backgroundColor: '#009cde',  /* {primary} */
		padding: '1rem',
		marginLeft: '-1rem',
		width: 'calc(100% + 2rem)',
		textAlign: 'center',
		position: 'relative',
	},
	headingBar: {
		backgroundColor: '#f7f7f6',
		padding: '1rem',
		marginLeft: '-1rem',
		width: '100vw',
		position: 'relative',
	},
	field: {
		marginBottom: '1rem',
		display: 'block'
	},
	searchField: {
		width: '100%',
		maring: 'auto',
		borderRadius: '1.5rem',
		padding: '1rem',
		paddingLeft: '3rem',
		height: '2.5rem',
		backgroundColor: 'white',
	},
	searchIcon: {
		position: 'absolute',
		left: '3rem',
		top: '1.6rem',
		color: '#666',
		zIndex: '10'
	},
	filterButton: {
		position: 'absolute',
		right: '1rem',
		padding: '0'
	},
	dateIcon: {
		marginRight: '1rem',
		display: 'inline-block',
	},
	dateText: {
		height: '1rem',
		verticalAlign: 'top',
		display: 'inline-block',
	},
	gridBox: {
		width: 'calc(100vw)',
		margin: '0 0 5rem -1rem',
		padding: '0',
		background: '#ffffff',
	},
	gridBoxItem: {
		padding: '1rem',
		borderBottom: '1px solid #ccc',
	},
	addButton: {
		zIndex: '1000',
		position: 'fixed',
		backgroundColor: 'var(--AbbottPrimaryBlue)',
		right: '2rem',
		bottom: '6rem',
		width: '60px',
		height: '60px',
		borderRadius: '50%',
		color: 'white',
		padding: '0',
	},
	addButtonIcon: {
		color: 'white',
		fontSize: '30px',
		fontWeight: '800',
	},
    IconContainer: {
        position: 'relative',
        padding: 0,
    },
    pageIcon: {
        position: 'absolute',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
    }
})

export default function Donors() {

    const classes = useStyles()

    return (
        <Container >
            <Box className={classes.searchBar}>
                <SearchIcon className={classes.searchIcon} />
                <InputBase
                    className={classes.searchField}
                    inputProps={{ 'aria-label': 'search by donor or unique ID' }}
                    placeholder="Search by donor or unique ID"
                />
            </Box>
            {/* 
            <Box  className={classes.headingBar}>
                <Typography  
                    className={classes.heading}
                    variant="h5"
                    component="h2"
                    color="primary"
                    gutterBottom
                >Donors</Typography>
            </Box> */}

            <Box component="div" textAlign="center" color="#63666a">
                <Box className={classes.page}>
                    <Typography variant="h2" component="div" className={classes.IconContainer}>
                        <PeopleIcon fontSize="inherit"  className={classes.pageIcon} />
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <div>Search</div>
                    </Typography>
                </Box>
				<Box  style={{ width:'70%', margin:'auto' }} >
					<Typography align="center" fontSize="1.2rem" >
					You can lookup a donor using their name or unique ID
					</Typography>
				</Box>
            </Box>

            <MenuFooter activeItem="Donors" />

        </Container >
    )
}
