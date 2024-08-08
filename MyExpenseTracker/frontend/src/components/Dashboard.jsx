import React, { useState } from 'react';
import avatar from '../assets/avatar.png';
import Summary from './Summary';
import Settings from './Settings';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = useState('summary');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'summary':
        return <Summary />;
      case 'settings':
        return <Settings />;
      default:
        return <Summary />;
    }
  };

  return (
    <div className="flex h-fit w-full items-stretch gap-x-4">
      <aside className="w-[20%] flex flex-col items-center  h-full border-r-2 border-primary">

        {/* User image that will be fetched from the database */}

        <div className="flex flex-col items-center my-12">
          <img src={avatar} alt="avatar" className="mb-4" />
          <h2 className="text-center text-xl font-bold text-primary">Hi, Username</h2>
        </div>
        <div className='flex-1'>
          <ul className=" space-y-4 h-[70%] flex flex-col items-center justify-evenly text-primary">
          <li className="list-item  cursor-pointer text-center" onClick={() => setActiveComponent('summary')}>
              <Link to="#">Home</Link>
            </li>
            <li className="list-item  cursor-pointer text-center" onClick={() => setActiveComponent('settings')}>
              <Link to="/settings">Settings</Link>
            </li>
            <li className="list-item  cursor-pointer text-center">
              <Link to="/" onClick={() => navigate('/')}>Logout</Link>
            </li>
          </ul>
        </div>
      </aside>
      <section className="flex-1 h-full ">
        {renderComponent()}
      </section>
    </div>
  );
};

export default Dashboard;
