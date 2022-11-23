import React from 'react'
import {AiOutlineQrcode} from 'react-icons/ai'
import {FaPhoneAlt, FaVoicemail} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='grid bg-gray-800 shadow-2xl dark:shadow-cyan-300/100 dark:bg-white text-primary dark:text-black md:rounded-tl-3xl md:rounded-br-3xl sm:rounded-none md:grid-cols-3 sm:grid-cols-1 sm:justify-start md:space-x-8 sm:space-x-0 p-4 transition ease-in duration-300 select-none'>
      
      <div className='text-xs'>
        <h3 className='flex items-center text-sm font-bold gap-x-1 py-2'><AiOutlineQrcode/>PQR Generator</h3>
        <p>San Bruno, CA, USA</p>
        <p>Are you tired to thinking about new PA & QR, then try this !</p>
      </div>

      <div className='grid md:justify-center'>
        <h3 className='text-sm font-bold py-2'>About us</h3>
        <ul className='text-xs leading-5'>
          <li className='hover:scale-x-125 transition-all'>Details</li>
          <li className='hover:scale-x-125 transition-all'>Details</li>
          <li className='hover:scale-x-125 transition-all'>Details</li>
        </ul>
      </div>

      <div className='grid md:justify-end'>
        <h3 className='text-sm font-bold py-2'>Contacts</h3>
        <div className='grid items-center md:justify-center sm:justify-start text-xs leading-5'>
          <p className='flex items-center gap-x-1'><FaPhoneAlt/> + 123 456 7890</p>
          <p className='flex items-center gap-x-1'><FaVoicemail/> - pqr&generator@gmail.com</p>
        </div>
      </div>

      <div></div>

      <p className='place-content-center mt-8 text-center text-xs italic'>&#169; Erkan Uz. All right reserved</p>

    </footer>
  )
}

export default Footer