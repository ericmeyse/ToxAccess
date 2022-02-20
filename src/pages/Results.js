import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles, InputBase } from '@material-ui/core'
import MenuFooter from '../components/MenuFooter'

import AddIcon from '@material-ui/icons/Add';
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
	Positive: {
		fontWeight: '600',
		color: '#e4002b',
	},
	Negative: {
		fontWeight: '600',
		color: '#00b140',
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
	col1: {
		flexGrow: '1',
	}, 
	col2: {
		fontSize: '1rem',
		flexBasis: '50px',
		textTransform: 'uppercase',
	}
})

export default function Results() {
	
	const classList = useStyles()
	const[results, setResults] = useState([])	

	useEffect(() => {
		fetch('http://localhost:8000/results')
		.then( res => res.json() )
		.then( data => setResults(data))
	}, [])
	
	return (
		<Container >
			<Box className={classList.searchBar}>
				<SearchIcon className={classList.searchIcon} />
				<InputBase
					className={classList.searchField}
					inputProps={{ 'aria-label': 'search by donor or unique ID' }}
					placeholder="Search by donor or unique ID"
				/>
            </Box>

			<Box  className={classList.headingBar}>

				<Typography  
					className={classList.heading}
					variant="h5"
					component="h2"
					color="primary" 
					gutterBottom
				>Results
					<Button className={classList.filterButton}>
						<FilterListIcon />
						<Typography>Filters</Typography>
					</Button>
				</Typography>

				<Box>
					<TodayIcon color="primary"  className={classList.dateIcon} />
					<Typography display='inline' className={classList.dateText}>February 22, 2022</Typography>
				</Box>
			</Box>
			
			<Box component="div" className={classList.gridBox} >
				{ results.map( result => (
					<Grid container key={result.id} wrap="nowrap" justifyContent="flex-start" alignItems="stretch" className={classList.gridBoxItem} >
						<Grid item className={classList.col1}>
							<Typography variant="h6">
								{result.name}
							</Typography>
							<Typography component="div">
								{result.time}
							</Typography>
						</Grid>
						<Grid  className={classList.col2 } >
							<Typography className={classList.status }>
								{result.status}
							</Typography>
						</Grid>
					</Grid>
				)) }
			</Box> 

			<MenuFooter activeItem="Results" />

			<Button className={classList.addButton}>
				<AddIcon  className={classList.addButtonIcon} />
			</Button>		

		</Container>
	)
}
