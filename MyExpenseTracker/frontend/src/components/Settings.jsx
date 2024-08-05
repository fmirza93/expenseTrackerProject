import React from 'react';
import Button from './Button';
import avatar from '../assets/avatar.png';

const Settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="flex h-fit w-full items-stretch gap-x-4">
      <aside className="w-[20%] flex flex-col items-center h-full border-r-2 border-primary">

        {/* User image and greeting */}
        <div className="flex flex-col items-center my-12">
          <img src={avatar} alt="avatar" className="mb-4" />
          <h2 className="text-center text-xl font-bold text-primary">Hi, Username</h2>
        </div>

        <div className='flex-1'>
          <ul className="space-y-4 h-[70%] flex flex-col items-center justify-evenly text-primary">
            <li className="list-item cursor-pointer text-center">
              <a href="/dashboard">Home</a>
            </li>
            <li className="list-item cursor-pointer text-center">
              <a href="/settings">Settings</a>
            </li>
            <li className="list-item cursor-pointer text-center">
              <a href="/" onClick={() => alert('Logging out...')}>Logout</a>
            </li>
          </ul>
        </div>
      </aside>
      <section className="flex-1 h-full">
        <div className='w-[80%] md:w-[50%] mx-auto -mt-8'>
          <h2 className="text-4xl font-black tracking-tighter mb-4 text-left text-primary">Settings</h2>
          
          {/* Change Photo Section */}
          <div className='flex flex-col items-center mb-6'>
            <img src={avatar} alt="Profile Avatar" className='w-24 h-24 rounded-full mb-4' />
            <Button onClick={() => alert('Change Photo functionality to be implemented')}>
              Change Photo
            </Button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-primary rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthly-income">
                Monthly Income:
              </label>
              <input
                id="monthly-income"
                type="number"
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-primary rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
                Currency:
              </label>
              <input
                id="currency"
                type="text"
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-primary rounded-lg"
                required
              />
            </div>
            <div className="flex justify-center w-full mt-6">
              <button type="submit" className="bg-primary text-white py-2 px-6 rounded-lg">
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Settings;
