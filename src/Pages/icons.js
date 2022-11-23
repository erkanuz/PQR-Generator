import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Icons = () => {
  return (
    <div className='grid md:my-8 max-sm:my-20 select-none'>
      <h2 className='flex italic justify-center mb-4 text-2xl dark:text-white'>PQR Generator</h2>
        <div className='flex relative justify-center flex-row my-2 gap-4'>
          <a href="https://www.linkedin.com/in/erkan-uz-lil/" target="_blank" rel="noopener noreferrer" className="bg-white transform hover:translate-y-3 hover:scale-150 transition duration-300"><FaLinkedin /></a>
          <a href="https://github.com/erkanuz" target="_blank" rel='noopener noreferrer' className="bg-white hover:translate-y-3 hover:scale-150 transition duration-300"><FaGithub /></a>
          <a href="https://www.instagram.com/" target="_blank" rel='noopener noreferrer' className="bg-white decoration-zinc-500 transform hover:translate-y-3 hover:scale-150 transition duration-300"><FaInstagram /></a>
        </div>
    </div>
  )
}

export default Icons