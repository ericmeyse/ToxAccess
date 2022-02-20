import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles, InputBase } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import TodayIcon from '@material-ui/icons/Today';

const useStyles = makeStyles({
	root: {
		paddingTop: '2rem',
		paddingLeft: '2rem',
		paddingRight: '2rem',
		width: '100vw',
	},
	page: {
		paddingTop: '1rem',
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
	collectionBox: {
		background: '#ffffff',
		marginLeft: '-1rem',
		width: '100vw',
		margin: '0 1rem',
	},
	collectionBoxItem: {
		padding: '1rem 2rem',
		borderBottom: '1px solid #ccc',
	}
	
})

export default function Search() {

	const classes = useStyles()
	const[donors, setDonors] = useState([])	

	useEffect(() => {
		fetch('http://localhost:8000/donors')
		.then( res => res.json() )
		.then( data => setDonors(data))
	}, [])
	
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

			<Box  className={classes.headingBar}>

				<Typography  
					className={classes.heading}
					variant="h5"
					component="h2"
					color="primary" 
					gutterBottom
				>
					Collections
					<Button className={classes.filterButton}>
						<FilterListIcon />
						<Typography>Filters</Typography>
					</Button>
				</Typography>

				<Box>
					<TodayIcon color="primary"  className={classes.dateIcon} />
					<Typography display='inline' className={classes.dateText}>February 22, 2022</Typography>
				</Box>
			</Box>
			
			<Box component="div" className={classes.collectionBox}>
				{donors.map( donor => (
					<Box  key={donor.id}  className={classes.collectionBoxItem} > 
						<Typography variant="h6">
							{donor.name}
						</Typography>
						<Typography component="div">
							{donor.group}
						</Typography>
					</Box>
				))}
			</Box> 

		</Container>
	)
}
