import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Dashboard = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
           <h1 className="text-4xl">Welcome {user?.email}</h1>
           
        </div>
    );
};

export default Dashboard;