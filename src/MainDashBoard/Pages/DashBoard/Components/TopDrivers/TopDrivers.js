import React from 'react';
import "./TopDrivers.scss";
import Avatar from '@mui/material/Avatar';

const TopDrivers = () => {
    const drivers = [
        {
            name: 'Maharram Hasanli',
            phone: '+998 (99) 436-46-15',
            orders: 5,
            income: '$98',
            img: 'http://kodytecklimited.com/wp-content/uploads/2019/11/team.jpg' 
        },
        {
            name: 'Gina Garza',
            phone: '+998 (99) 158-10-15',
            orders: 5,
            income: '$15',
            img: 'https://medyanotu.com/wp-content/uploads/2022/11/Chiefs-WR-JuJu-Smith-Schuster-sarsinti-protokolune-girdi.jpg' 
        },
        {
            name: 'Brian Reed',
            phone: '+998 (95) 489-46-20',
            orders: 5,
            income: '$23',
            img: 'https://0.academia-photos.com/121238756/30148205/27973365/s200_danny.pinkley17as.jpg' 
        },
        {
            name: 'Tammy Spencer',
            phone: '+998 (95) 785-10-02',
            orders: 5,
            income: '$98',
            img: 'https://300hours.com/wp-content/uploads/avatars/4862/606cc5ac93dfe-bpfull.jpg' 
        },
        {
            name: 'Joseph Brooks',
            phone: '+998 (99) 436-46-15',
            orders: 5,
            income: '$98',
            img: 'https://photo.isu.pub/donaldblair22/photo_large.jpg' 
        },
        {
            name: 'Juan Steward',
            phone: '+998 (99) 436-46-15',
            orders: 5,
            income: '$98',
            img: 'https://images.ctfassets.net/v8ge0a4910bh/2EPTxAaHEQhhDVBktIsZik/19565a3419559adcc40aad3552ab6dba/64.jpeg?fit=fill&fm=webp&h=240&q=90&w=240' 
        }
    ];

    return (
        <div className='top-drivers'>
            <div className="titile">
                <h2>Top Drivers</h2>
                <p>&gt;</p>
            </div>
            <div className="card-container">
                {drivers.map((driver, index) => (
                    <div key={index} className="card">
                        <div className="imgTitleNum">
                            <div className="img">
                                <Avatar className='avatar' alt={driver.name} src={driver.img} style={{ width: 60, height: 60 }} />
                            </div>
                            <div className="titnum">
                                <h3>{driver.name}</h3>
                                <p>{driver.phone}</p>
                            </div>
                        </div>
                        <div className="orderincome">
                            <p>Orders: <span>{driver.orders}</span></p>
                            <h6>Income: <span>{driver.income}</span></h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopDrivers;
