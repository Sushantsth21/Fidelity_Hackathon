import { Navbar, Button } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {signOutSuccess} from '../redux/user/userSlice'


export default function Header() { 
    const path = useLocation().pathname;
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
          const res = await fetch('/api/user/signout', {
            method: 'POST',
          });
          const data = await res.json();
          if (!res.ok) {
            console.log(data.message);
          } else {
            dispatch(signOutSuccess());
          }
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <Navbar className='border-b-2'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Fidelity</span>
                Hackathon
            </Link>

            <div className='flex gap-2 md:order-2'>
            <React.Fragment>
            {currentUser ? (
                <div className="flex items-center space-x-4">
                <div className="text-sm sm:text-base text-white bg-blue-600 py-2 px-4 rounded-full shadow-lg transition duration-300 hover:bg-blue-700">
                    Hello, {currentUser.username}
                </div>
                <button 
                    onClick={handleSignOut} 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300">
                    Sign Out
                </button>
            </div>
            
            ) : (
                <React.Fragment>
                <Link to='/signup'>
                    <Button gradientDuoTone={'purpleToBlue'} outline className="text-white border border-transparent hover:border-purple-700 rounded py-2 px-4">
                    Sign Up
                    </Button>
                </Link>
                <Link to='/signin'>
                    <Button gradientDuoTone={'purpleToBlue'} outline className="ml-2 text-white border border-transparent hover:border-purple-700 rounded py-2 px-4">
                    Sign In
                    </Button>
                </Link>
                </React.Fragment>
            )}
            </React.Fragment>


                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/dashboard"} as={'div'}>
                    <Link to='/dashboard'>
                        Dashboard
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
