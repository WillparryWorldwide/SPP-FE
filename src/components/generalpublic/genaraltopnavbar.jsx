import React, { useState, useCallback, useEffect } from 'react'
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import LocationCity from '@mui/icons-material/LocationCity';
import TextField from '@mui/material/TextField';
import useSearch from '../../Hooks/useSearch';
import List from '@mui/material/List';
import { Link } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import MenuIcon from '@mui/icons-material/Menu';

const GeneralTopNavigation = ({setDisplayMenu}) => {
    const [searchText, setSearchText] = useState('');
    const [showClearIcon, setShowClearIcon] = useState("none");
    const { searchResource, data, hostUrl, loading } = useSearch();
    const [projectState, setProjectState] = useState(data.project);

    const handleChangeInSearchText = (event) => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
        setSearchText(event.target.value);
        startSearch(event.target.value);
    };

    const handleClearSearchText = () => {
        // TODO: Clear the search input
        setSearchText('');
        setShowClearIcon("none");
        setProjectState(prev => !prev);
    };



    const startSearch = useCallback(async (s) => {
        searchResource(s);
        setProjectState(data);
    });

    useEffect(() => {
        console.log("Rending...");
    }, [searchText]);

    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-light public-nav">
                <div className='w-100'>
                    <ul className="navbar-nav">
                        {/* <Link to="/" className="brand-link position-relative w-fit">
                            <img src={logo} alt="logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-light">SPPA</span>
                        </Link> */}
                    <div onClick={()=> setDisplayMenu(prev => !prev)} className=''>
                        <MenuIcon sx={{
                            width: 20,
                        }} />
                    </div>
                        <div className="search-nav col-md-12 h-search">

                            <FormControl>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    onChange={handleChangeInSearchText}
                                    placeholder="Search anything..."
                                    value={searchText}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment
                                                position="end"
                                                style={{ display: showClearIcon }}
                                                onClick={handleClearSearchText}
                                            >
                                                <ClearIcon sx={{
                                                    ":hover": {
                                                        cursor: "pointer"
                                                    }
                                                }} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </div>
                        {/* <li className="nav-item">
                            <Link className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></Link>
                        </li> */}
                    </ul>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#x" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            {console.log("Project state", projectState, data.project)}
            {
                projectState &&
                <div className={`wrapper position-fixed ${projectState? "d-block": "d-none"}`} style={{ width: "100%", top: 0, zIndex: 9 }}>
                    <div className="content-wrapper public-body p-0" style={{ minHeight: "auto" }}>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {
                                data.project?.items.map(item =>
                                    <Link to={`/project/${item._id}`}className="text-decoration-none text-dark">
                                        <ListItem>
                                            <ListItemAvatar>
                                                <LocationCity />
                                            </ListItemAvatar>
                                            <ListItemText primary={item.name} secondary={item.category} />
                                        </ListItem>
                                    </Link>
                                )
                            }
                        </List>
                    </div>
                </div >
            }
        </>
    )
}

export default GeneralTopNavigation