import React, { useEffect, useState } from 'react'
import {GiPowerButton} from 'react-icons/gi'
import {AiOutlineQrcode} from 'react-icons/ai'

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);

  const Switcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='fixed z-10 top-0 w-full select-none'>
      {/*<nav className='bg-gray-800 dark:bg-white text-primary dark:text-black grid grid-cols-3 justify-center items-center py-3'>*/}
      <nav className='bg-gray-800 dark:bg-white text-primary dark:text-black flex items-center justify-between px-4 py-3'>
        <div className='text-2xl'><AiOutlineQrcode/></div>
        <div className='text-2xl order-3'><AiOutlineQrcode/></div>
        <div className='cursor-pointer flex items-center gap-2 pl-2' onClick={Switcher}><GiPowerButton/>Dark mode</div>
      </nav>
    </div>
  )
}

export default Navbar