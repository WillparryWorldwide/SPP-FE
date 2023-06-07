import { DoneAllRounded, ElectricBoltRounded, PauseCircle, Store } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { CircularProgress, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import * as React from 'react';
import useUpdateProject from '../../../Hooks/useupdateproject';

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color:
			theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity,
				),
			},
		},
	},
}));

export default function CustomizedMenus({ id, name }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const {data, loading, upDAteProject} = useUpdateProject();


	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const projectStatus = [
		{ name: "ONGOING", icon: <ElectricBoltRounded /> },
		{ name: "COMPLETED", icon: <DoneAllRounded /> },
		{ name: "NOT STARTED", icon: <Store /> },
		{ name: "PAUSED", icon: <PauseCircle /> },
		{ name: "CLOSED", icon: <StopCircleIcon /> }
	];

	const handleClose = (val) => {
		upDAteProject(id, {status: val});
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="demo-customized-button"
				aria-controls={open ? 'demo-customized-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				variant="contained"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				{name}
			</Button>
			<StyledMenu
				id="demo-customized-menu"
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{
					projectStatus.map(status => {
						if (status.name.toLowerCase() === name.toLowerCase()) return null;
						return <MenuItem key={status.name} onClick={() => handleClose(status.name)} disableRipple>
							{status.icon}
							{status.name}
						</MenuItem>
					})
				}
			</StyledMenu>
		</div>
	);
}