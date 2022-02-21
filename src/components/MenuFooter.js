import React from 'react'
import Box from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

import CollectionIcon from '@material-ui/icons/ColorizeOutlined';
import DonorsIcon from '@material-ui/icons/PeopleAlt';
import ResultsIcon from '@material-ui/icons/AssignmentOutlined';

const useStyles = makeStyles({
	root: {
		height: '75px',
		margin: '0',
		padding: '0 1rem',
		backgroundColor: '#004f71',
		border: '2px solid #004f71 ',
		borderTop: '0' ,
		position: 'fixed',
		bottom: '0',
		zIndex: '1000',
	},
	menuGrid: {
		width: '100%',
		height: '100%',
		margin: '0',
		padding: '0',
		color: '#d9d9d6',
	},
	menuGridItem: {
		textAlign: 'center',
		overflow: 'hidden',
		height: '100%',
		paddingTop: '.5rem',
		textDecoration: 'none',
		fontWeight: '600'
	},
	menuGridItemActive: {
		textAlign: 'center',
		overflow: 'hidden',
		height: '100%',
		paddingTop: '.5rem',
		textDecoration: 'none',
		fontWeight: '600',
		borderBottom: '4px solid #ffffff',
	},
	iconMenuLinkActive: {
		display: 'inline-block',
		height: '100%',
		textAlign: 'center',
		color: '#ffffff',
		textDecoration: 'none',
	},
	iconMenuLink: {
		display: 'inline-block',
		height: '100%',
		textAlign: 'center',
		color: '#d9d9d6',
		paddingBottom: '3px',
		textDecoration: 'none',
	},
	iconMenuLinkText: {
		fontSize: '1rem',
		bottom: '.5rem',
	},
	icon: {
		fontSize: '30px',
		color: '#d9d9d6',
	},
})

export default function MenuFooter(props) {

	const classes = useStyles()
	const activeItem = props.activeItem;

	return (
		<Box component="div" disableGutters className={classes.root}>
			<Grid container wrap="nowrap" justifyContent="space-evenly" alignItems="flex-start" className={classes.menuGrid}>
				<Grid item xs={4} className={ activeItem === "Collections" ? classes.menuGridItemActive : classes.menuGridItem } >

					<Link href="/Collections" to="" className={classes.iconMenuLinkActive}  alt="Collections">
						<CollectionIcon fontSize="large" className={classes.icon} />	
						<Typography className={classes.iconMenuLinkText}>Collections</Typography>
					</Link>

				</Grid>
				<Grid item xs={4} className={ activeItem === "Results" ? classes.menuGridItemActive : classes.menuGridItem } >

					<Link href="/Results" to="" className={classes.iconMenuLink} alt="Results">
						<ResultsIcon fontSize="large" className={classes.icon} />
						<Typography className={classes.iconMenuLinkText}>Results</Typography>
					</Link>

				</Grid>
				<Grid item xs={4} className={ activeItem === "Donors" ? classes.menuGridItemActive : classes.menuGridItem } >

					<Link href="/Donors" to="" className={classes.iconMenuLink} alt="Donors">
						<DonorsIcon fontSize="large" className={classes.icon} />
						<Typography className={classes.iconMenuLinkText}>Donors</Typography>
					</Link>

				</Grid>
			</Grid>
		</Box>
	)
}
