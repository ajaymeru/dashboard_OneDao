import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import maharam from './assets/maharram.png';
import { List, ListItem, ListItemText, Avatar, Typography, Divider, ListItemIcon } from '@mui/material';
import "./SideBar.scss";

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MapIcon from '@mui/icons-material/Map';
import CommuteIcon from '@mui/icons-material/Commute';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ isCollapsed }) => {
    const location = useLocation();

    const menuItems = [
        { text: 'Dashboard', path: '/', icon: <DashboardIcon /> },
        { text: 'Orders', path: '/orders', icon: <ShoppingCartIcon /> },
        { text: 'Rides', path: '/rides', icon: <DirectionsCarIcon /> },
        { text: 'Clients', path: '/clients', icon: <GroupIcon /> },
        { text: 'Drivers', path: '/drivers', icon: <PeopleAltIcon /> },
        { text: 'Shift', path: '/shift', icon: <ScheduleIcon /> },
        { text: 'Live Map', path: '/live-map', icon: <MapIcon /> },
        { text: 'Car Classes', path: '/car-classes', icon: <CommuteIcon /> },
        { text: 'Branches', path: '/branches', icon: <LocationCityIcon /> },
        { text: 'Moderators', path: '/moderators', icon: <SupervisorAccountIcon /> },
        { text: 'Settings', path: '/settings', icon: <SettingsIcon /> }
    ];

    return (
        <div className='sidebar' style={{ width: isCollapsed ? '80px' : '250px' }}>
            <div className='avatar'>
                <Avatar
                    alt="Maharram"
                    src={maharam}
                    style={{ width: '40px', height: '40px', border: "2px solid rgba(223, 224, 235, 1)", padding: "3px" }}
                />
                {!isCollapsed && (
                    <div style={{ marginLeft: '15px' }}>
                        <Typography variant="h6" style={{ fontSize: "18px", fontWeight: "600" }}>
                            Maharram
                        </Typography>
                        <Typography variant="body2" style={{ color: "white", fontSize: "11px", fontWeight: "400" }}>
                            +998 (99) 436-46-15
                        </Typography>
                    </div>
                )}
            </div>

            <Divider />

            {!isCollapsed && (
                <Typography className='mainmenu'>
                    Main Menu
                </Typography>
            )}

            <List className='links'>
                {menuItems.map((item, index) => (
                    <ListItem
                        className={`item ${location.pathname === item.path ? 'active' : ''}`}
                        button
                        key={index}
                        component={Link}
                        to={item.path}
                    >
                        <ListItemIcon className='links-item'>{item.icon}</ListItemIcon>
                        {!isCollapsed && <ListItemText className='links-item' primary={item.text} />}
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Sidebar;
