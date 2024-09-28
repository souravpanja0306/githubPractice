import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-around items-center bg-slate-700 w-full'>
            <div className='p-2 cursor-pointer hover:text-slate-400 text-white'>
                <Link to="/">
                    <h1>Notional System Private Limited</h1>
                </Link>
            </div>
            <div>
                <ul className='flex'>
                    <li className='p-2 cursor-pointer hover:text-slate-400 text-white'><Link to="/">Home</Link></li>
                    <li className='p-2 cursor-pointer hover:text-slate-400 text-white'><Link to="/contact">Contact</Link></li>
                    <li className='p-2 cursor-pointer hover:text-slate-400 text-white'><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div>
                <ul className='flex'>
                    <li className='p-2 cursor-pointer hover:text-slate-400 text-white'><Link to="/">Sign In</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar