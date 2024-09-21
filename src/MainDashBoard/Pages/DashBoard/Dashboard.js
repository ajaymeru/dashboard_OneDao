import React from 'react';
import KnowledgeBase from './Components/KnowledgeBase/KnowledgeBase.js';
import ProgressScoreGraph from './Components/ProgressScoreGraph/ProgressScoreGraph.js';
import TopDrivers from './Components/TopDrivers/TopDrivers.js';
import UserTable from './Components/UserTable/UserTable.js';
import "./Dashboard.scss";

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="dashboard-top">
                <div className="dashboard-left">
                    <div className="dashboard-item">
                        <KnowledgeBase />
                    </div>
                    <div className="dashboard-item">
                        <ProgressScoreGraph />
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="dashboard-item">
                        <TopDrivers />
                    </div>
                </div>
            </div>

            <div className="dashboard-bottom">
                <div className="dashboard-item">
                    <UserTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
