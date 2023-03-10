import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='py-10 flex  justify-between'>
      <div className='logo'>
        <Link to='/' className='text-xl hover:text-violet-500 duration-300 font-semibold'>Envelop</Link>
      </div>
      <nav>
        <div className='flex gap-5'>
          <Link to='/login' className='hover: text-violet-500 hover:underline underline-offset duration-75'> Login</Link>
          <Link to='/register' className='hover: text-violet-500 hover:underline  underline-offset duration-75'> Register</Link>
        </div>
        {/* <div>
          <p>
            Logged in as: <span>Rafiul islam</span>
          </p>
        </div> */}
      </nav>
    </header>
  )
}

export default Navbar