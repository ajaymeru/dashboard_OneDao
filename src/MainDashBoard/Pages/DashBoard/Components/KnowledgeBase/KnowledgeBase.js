import React from 'react';
import "./KnowledgeBase.scss";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const KnowledgeBase = () => {
    const cardData = [
        { title: 'Total Orders', className: 'card-orders' },
        { title: 'Total Earnings', className: 'card-earnings' },
        { title: 'Profit', className: 'card-profit' },
    ];

    return (
        <div className='knowledge-base'>
            <h2>Knowledge Base</h2>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <div key={index} className={`card ${card.className}`}>
                        <CreateNewFolderIcon />
                        <h3>{card.title}</h3>
                        <p>&#x279B;</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KnowledgeBase;
