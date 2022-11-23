import React, { useState } from 'react'
import {numbers, symbols, uppercase, lowercase} from './data'

const Pwd = () => {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [Number, setNumber] = useState(false);
  const [Symbols, setSymbols] = useState(false);
  const [Uppercase, setUppercase] = useState(false);
  const [Lowercase, setLowercase] = useState(false);

  const Random = () => {
    const x = [];

    if(Number){
      x.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if(Symbols){
      x.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    if(Uppercase){
      x.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }

    if(Lowercase) {
      x.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    
    if (x.length === 0) return "";
    return x[Math.floor(Math.random() * x.length)];
  };

  const Check = () => {
    if(!Number && !Symbols && !Uppercase && !Lowercase) {
      alert("You must select at least one checkbox !")
    }
  }

  const Generate = (g) => {
    g.preventDefault();

    let _password = "";
    for(let i = 0; i < length; i++) {
      _password += Random();
    }
    Check();
    setPassword(_password);
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password)
  }

  const Copy = () => {
    password === "" ? alert("Missing password to copy", true) : copyToClipboard(password) && !password ? alert("Password succesfully copied to clipboard", false) : alert("Password succesfully copied to clipboard", true) 
  }

  const increase = (g) => {
    g.preventDefault();

    if(length < 20) {
      setLength((x) => x + 1);
    }
  };

  const decrease = (g) => {
    g.preventDefault();

    if(length > 6) {
      setLength((x) => x - 1);
    }
  };

  return (
    <div className='select-none grid shadow-2xl dark:shadow-cyan-300/50 pb-2 bg-white dark:bg-black text-black dark:text-white transition ease-in duration-300'>
    <div className='text-center my-5'>
      <h2 className='my-2 text-4xl'>Password Generator</h2>
      <h4 className='text-2xl italic'>{password}</h4>
    </div>

    <form>
      <div className='italic text-sm px-8'>
        <div className='flex justify-between mb-1'>
          <label htmlFor='uppercase'>Include Uppercase</label>
          <input type='checkbox' id='uppercase' name='uppercase' checked={Uppercase} onChange={(g) => setUppercase(g.target.checked)} className='accent-green-200 transition-all hover:scale-110'/>
        </div>
        <div className='flex justify-between mb-1'>
          <label htmlFor='lowercase'>Include Lowercase</label>
          <input type='checkbox' id='lowercase' name='uppercase' checked={Lowercase} onChange={(g) => setLowercase(g.target.checked)} className='accent-green-200 transition-all hover:scale-110'/>
        </div>
        <div className='flex justify-between mb-1'>
          <label htmlFor='numbers'>Include Numbers</label>
          <input type='checkbox' id='numbers' name='uppercase' checked={Number} onChange={(g) => setNumber(g.target.checked)} className='accent-green-200 transition-all hover:scale-110'/>
        </div>
        <div className='flex justify-between mb-1'>
          <label htmlFor='symbols'>Include Symbols</label>
          <input type='checkbox' id='symbols' name='uppercase' checked={Symbols} onChange={(g) => setSymbols(g.target.checked)} className='accent-green-200 transition-all hover:scale-110'/>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center my-1 p-1 rounded'>
        <h4 className='py-4'>Password Length</h4>
        <div>
          <button onClick={decrease} className='w-7 h-7 m-1.5 text-xl bg-black text-white border-solid rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>-</button>
          <span className='inline-block text-md w-9 text-center'>{length}</span>
          <button onClick={increase} className='w-7 h-7 m-1.5 text-xl bg-black text-white border-solid rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>+</button>
        </div>
      </div>

      <div className='flex justify-around gap-x-7 text-sm my-1'>
        <button onClick={Generate} className='w-2/5 h-8 p-1.5 border-none rounded-md bg-black dark:bg-white text-white dark:text-black transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Generate </button>
        <button onClick={Copy} className='w-2/5 h-8 p-1.5 border-none rounded-md bg-black dark:bg-white text-white dark:text-black transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Copy </button>
      </div>
    </form>
    </div>
  );
}

export default Pwd