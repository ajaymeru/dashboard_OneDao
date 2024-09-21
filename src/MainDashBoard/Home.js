import React, { useState } from 'react';
import Sidebar from './Components/SideBar/SideBar.js';
import Navbar from './Components/Navbar/Navbar.js';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/DashBoard/Dashboard';
import Orders from './Pages/Orders/Orders';
import Rides from './Pages/Rides/Rides';
import Clients from './Pages/Clients/Clients.js';
import Drivers from './Pages/Drivers/Drivers.js';
import Shift from './Pages/Shift/Shift.js';
import LiveMap from './Pages/LiveMap/LiveMap.js';
import CarClasses from './Pages/CarClasses/CarClasses.js';
import Branches from './Pages/Branches/Branches.js';
import Moderators from './Pages/Moderators/Moderators.js';
import Settings from './Pages/Settings/Settings.js';

const Home = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleDrawerToggle = () => {
        setIsCollapsed(prevState => !prevState);
    };

    return (
        <div style={{ display: 'flex', backgroundColor: "black", padding: "1rem", borderRadius: "30px" }}>
            <Sidebar isCollapsed={isCollapsed} />
            <div style={{ flexGrow: 1 }}>
                <Navbar handleDrawerToggle={handleDrawerToggle} />
                <div style={{
                    backgroundColor: "white",
                    padding: "30px"
                }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/rides" element={<Rides />} />
                        <Route path="/clients" element={<Clients />} />
                        <Route path="/drivers" element={<Drivers />} />
                        <Route path="/shift" element={<Shift />} />
                        <Route path="/live-map" element={<LiveMap />} />
                        <Route path="/car-classes" element={<CarClasses />} />
                        <Route path="/branches" element={<Branches />} />
                        <Route path="/moderators" element={<Moderators />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </div >
    );
};

export default Home;
