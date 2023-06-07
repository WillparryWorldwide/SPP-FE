import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import { grey } from "@mui/material/colors";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * ### ItemList
 * A list of items
 * dataArray Pass in an array of project or spp
 */
export default function ItemList({ dataArray, isLoading }) {
	const navigate = useNavigate();

	const handelClick = (id) => {
		navigate("/spp/dashboard/projects/view/" + id);
	}
	
	return (
		<List sx={{ width: "100%", bgcolor: "background.paper", position: "absolute", top: 0, left: 0, zIndex: 9999 }}>
			{
				!isLoading? dataArray.map(item =>
					<ListItem className="transition-all" sx={{
						':hover': {
							backgroundColor: grey[100],
							cursor: "pointer"
						}
					}}
					onClick={() => handelClick(item._id)}>
						<ListItemAvatar>
							<Avatar>
								<WorkIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={item.name} secondary={item.description} />
					</ListItem>
				): 
				<CircularProgress />
			}
		</List>
	);
}