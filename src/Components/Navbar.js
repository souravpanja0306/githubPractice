import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-around items-center bg-slate-700 w-full'>
            <div className='p-2 cursor-pointer hover:text-slate-400 text-white'>
                <h1>Notional System Private Limited</h1>
            </div>
            <div>
                <ul className='flex'>
                    <li className='p-2 cursor-pointer hover:text-slate-400 text-white'><Link to="/">Home</Link></li>
                    <li className='p-2 cursor-pointer hover:text-slate-400 text-white'><Link to="/">Contact</Link></li>
                    <li className='p-2 cursor-pointer hover:text-slate-400 text-white'><Link to="/">About</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar