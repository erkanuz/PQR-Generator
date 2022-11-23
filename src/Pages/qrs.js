import React, { useState } from 'react'
import QRcode from 'qrcode'

const Qrs = () => {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQR = () => {
    QRcode.toDataURL(url, {
      margin: 1
    },(err, url) => {
     if (url === 0) throw err
      setQrcode(url)
    })
  };

  return (
    <div className='grid shadow-2xl dark:shadow-cyan-300/50 px-8 py-2 w-full items-center text-center bg-white dark:bg-black text-black dark:text-white transition ease-in duration-300 select-none'>
      <h2 className='text-4xl px-1'>QR Code Generator</h2>
      <input type='text' placeholder="Write here ..." value={url} onChange={(e) => setUrl(e.target.value)} className='m-1 text-center italic border-2 border-solid rounded-lg shadow-inner outline-none text-black'/>
      <img src={qrcode} alt='' className='gird justify-self-center h-full my-4 border-black dark:border-white sm:border-0 md:border-4 border-dashed'/>
      <button onClick={GenerateQR} className='self-end p-1 m-1 bg-secondary dark:bg-white dark:text-black border rounded-lg text-primary transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Generate QR Code</button>
    </div>
  )
}

export default Qrs