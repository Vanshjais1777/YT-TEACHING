import React from 'react'
import Login from './login'

const Navbar = () => {
    return (
        <div>
            <div className='bg-blue-500 flex gap-5 w-screen h-14 justify-around items-center'>
                <div className='flex justify-center items-center bg-yellow-500 p-2 border border-black rounded-md w-24'>
                    <p>Logo</p>
                </div>
                <div>
                    <ul className='flex justify-around gap-5 text-xl text-white'>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Navbar