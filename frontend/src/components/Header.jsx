import { Navbar, Button } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
 

export default function Header() { 
    const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Fidelity</span>
            Hackathon
        </Link>

        <div className='flex gap-2 md:order-2'>
            <Link to='signup'>
                <Button gradientDuoTone={'purpleToBlue'} outline>
                    Sign Up
                </Button>
            </Link>
            <Link to='signin'>
                <Button gradientDuoTone={'purpleToBlue'} outline>
                    Sign In
                </Button>
            </Link>
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
            <Navbar.Link active={path === "/"} as={'div'}>
                <Link to='/dashboard'>
                    Dashboard
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
