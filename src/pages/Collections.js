import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles, InputBase } from '@material-ui/core'
import MenuFooter from '../components/MenuFooter'

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import TodayIcon from '@material-ui/icons/Today';

const useStyles = makeStyles({
	root: {
		paddingTop: '2rem',
		width: '100vw',
	},
	page: {
		paddingTop: '1rem',
		paddingLeft: '1rem',
		paddingRight: '1rem',
		width: '100vw',
	},
	searchBar: {
		backgroundColor: '#009cde',  /* {primary} */
		padding: '1rem',
		textAlign: 'center',
		position: 'relative',
	},
	headingBar: {
		backgroundColor: '#f7f7f6',
		padding: '1rem',
		width: '100%',
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
		left: '2rem',
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
		margin: '0',
		padding: '0',
	},
	gridBoxItem: {
		padding: '1rem',
		borderBottom: '1px solid #ccc',
		background: '#ffffff',
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
	
	
})

export default function Collections() {

	const classes = useStyles()
	const[collections, setCollections] = useState([])	

	useEffect(() => {
		fetch('http://localhost:8000/collections')
		.then( res => res.json() )
		.then( data => setCollections(data))
	}, [])
	
	return (
		<Box  id="CollectionsPage">
			<Box className={classes.searchBar}>
				<SearchIcon className={classes.searchIcon} />
				<InputBase
					className={classes.searchField}
					inputProps={{ 'aria-label': 'search by donor or unique ID' }}
					placeholder="Search by donor or unique ID"
				/>
            </Box>

			<Box id="HeadingBar" className={classes.headingBar}>

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
			
			<Box component="div" className={classes.gridBox}>
				{collections.map( collection => (
					<Box  key={collection.id}  className={classes.gridBoxItem} > 
						<Typography variant="h6">
							{collection.name}
						</Typography>
						<Typography component="div">
							{collection.group}
						</Typography>
					</Box>
				))}
			</Box> 

			<MenuFooter activeItem="Collections" />

			<Button variant="contained" className={classes.addButton}>
				<AddIcon  className={classes.addButtonIcon} />
			</Button>		

		</Box>
	)
}
