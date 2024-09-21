import React, { useState } from 'react';
import "./UserTable.scss";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Avatar, MenuItem, FormControl, Select } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const UserTable = () => {
    const users = [
        { id: 1, name: 'Maharram Hasanli', phone: '+998 (99) 436-46-15', carComfort: 'Convenient', orderTime: '04.12.2021 12:30', startLocation: '123 Main St', finishLocation: '456 Elm St', income: '300,000 SUM', avatar: 'https://www.kentremovalsstorage.com.au/storage/wp/wp-content/uploads/2020/11/Joanna-Soucek.jpg' },
        { id: 2, name: 'Gina Garza', phone: '+998 (99) 158-10-15', carComfort: 'Simple', orderTime: '05.12.2021 14:20', startLocation: '789 Oak St', finishLocation: '101 Pine St', income: '300,000 SUM', avatar: 'https://www.insfollowup.com/dist/images/homepage/customer1.png' },
        { id: 3, name: 'Brian Reed', phone: '+998 (95) 489-46-20', carComfort: 'Otra', orderTime: '06.12.2021 09:00', startLocation: '234 Maple Ave', finishLocation: '678 Birch St', income: '300,000 SUM', avatar: 'https://www.insfollowup.com/dist/images/homepage/customer3.png' },
        { id: 4, name: 'Tammy Spencer', phone: '+998 (95) 785-10-02', carComfort: 'Convenient', orderTime: '07.12.2021 18:45', startLocation: '123 Willow St', finishLocation: '456 Cedar St', income: '300,000 SUM', avatar: 'https://www.insfollowup.com/dist/images/homepage/customer3.png' },
        { id: 5, name: 'Joseph Brooks', phone: '+998 (99) 436-46-15', carComfort: 'Simple', orderTime: '08.12.2021 16:15', startLocation: '789 Sycamore St', finishLocation: '101 Spruce St', income: '300,000 SUM', avatar: 'https://d33wubrfki0l68.cloudfront.net/f9258475f3cfd4ec991c2fbe4a7bc2f33023beb4/bac74/assets/img/testimonial3.png' },
        { id: 6, name: 'Juan Steward', phone: '+998 (99) 436-46-15', carComfort: 'Otra', orderTime: '09.12.2021 10:30', startLocation: '234 Poplar St', finishLocation: '678 Fir St', income: '300,000 SUM', avatar: 'https://d33wubrfki0l68.cloudfront.net/cf61395a5029addfe25134da3bb6141419f6acad/639f1/assets/img/testimonial1.png' },
        { id: 7, name: 'Alice Cooper', phone: '+998 (95) 111-22-33', carComfort: 'Convenient', orderTime: '10.12.2021 08:20', startLocation: '321 Ash St', finishLocation: '654 Redwood St', income: '300,000 SUM', avatar: 'https://d33wubrfki0l68.cloudfront.net/cf61395a5029addfe25134da3bb6141419f6acad/639f1/assets/img/testimonial1.pnge' },
        { id: 8, name: 'Bob Marley', phone: '+998 (99) 222-33-44', carComfort: 'Simple', orderTime: '11.12.2021 19:50', startLocation: '456 Hemlock St', finishLocation: '789 Cherry St', income: '300,000 SUM', avatar: 'https://www.insfollowup.com/dist/images/homepage/customer3.png' },
        { id: 9, name: 'Charlie Sheen', phone: '+998 (95) 333-44-55', carComfort: 'Otra', orderTime: '12.12.2021 13:40', startLocation: '123 Palm St', finishLocation: '456 Magnolia St', income: '300,000 SUM', avatar: 'https://d33wubrfki0l68.cloudfront.net/f9258475f3cfd4ec991c2fbe4a7bc2f33023beb4/bac74/assets/img/testimonial3.png' },
        { id: 10, name: 'Diana Ross', phone: '+998 (99) 444-55-66', carComfort: 'Convenient', orderTime: '13.12.2021 15:25', startLocation: '789 Dogwood St', finishLocation: '101 Walnut St', income: '300,000 SUM', avatar: 'https://www.insfollowup.com/dist/images/homepage/customer3.png' }
    ];

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    // Paginate users
    const paginatedUsers = users.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <div className='user-table'>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Checkbox /></TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Car Comfort</TableCell>
                            <TableCell>Order Time</TableCell>
                            <TableCell>Start Location</TableCell>
                            <TableCell>Finish Location</TableCell>
                            <TableCell>Income</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell><Checkbox style={{ width: "13px", height: "13px", border: "0.1px solid rgba(212, 212, 212, 1)", background: "rgba(255, 255, 255, 1)" }} /></TableCell>
                                <TableCell>
                                    <div className="profile" style={{ display: "flex", alignItems: "center" }}>
                                        <div className="img">
                                            <Avatar alt={user.name} src={user.avatar} style={{ marginRight: '10px' }} />
                                        </div>
                                        <div className="info" style={{ display: "flex", flexDirection: "column" }}>
                                            <p>{user.name}</p>
                                            <p>{user.phone}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{user.carComfort}</TableCell>
                                <TableCell>{user.orderTime}</TableCell>
                                <TableCell>{user.startLocation}</TableCell>
                                <TableCell>{user.finishLocation}</TableCell>
                                <TableCell className='income-cell'><p>{user.income}</p></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination and Rows Per Page Control */}
            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>
                {/* Rows Per Page Selection */}
                <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                    <Select
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Rows per page' }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                    </Select>
                </FormControl>
                <Stack spacing={2} className="pagination-stack">
                    <Pagination style={{backgroundColor:""}}
                        count={Math.ceil(users.length / rowsPerPage)}
                        page={page}
                        onChange={handlePageChange}
                        shape="rounded"
                    />

                </Stack>
            </div>
        </div>
    );
};

export default UserTable;
