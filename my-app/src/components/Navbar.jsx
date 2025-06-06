import React from 'react'

function Navbar() {
  return (
    <nav className='bg-white shadow-md'>
        <div className='flex justify-between items-center px-8 py-4'>
            <div className='text-2xl font-bold text-green-600'>FOODLY</div>
        <ul className='flex space-x-8'>
            <li><a href="#" className='text-gray-700 hover:text-green-600 font-medium'>Home</a></li>
            <li><a href="#" className='text-gray-700 hover:text-green-600 font-medium'>About</a></li>
            <li><a href="#" className='text-gray-700 hover:text-green-600 font-medium'>Menu</a></li>
            <li><a href="#" className='text-gray-700 hover:text-green-600 font-medium'>Services</a></li>
            <li><a href="#" className='text-gray-700 hover:text-green-600 font-medium'>Contact</a></li>
        </ul>
</div>
    </nav>
  )
}
export default Navbar