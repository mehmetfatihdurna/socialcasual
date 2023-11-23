import React from 'react'

function Footer() {
  return (

    <div className='text-white text-sm bg-black bg-opacity-60 mb-4 rounded-2xl pt-5 pb-4'>

      <div className='flex flex-row justify-center mb-3'>
        <div><img className='w-5' src="/img/instagram.svg" alt="" /></div>
        <div className='hover:underline'><a href="http://instagram.com/socialcasual">socialcasual</a></div>
      </div>

      <div className='flex flex-row justify-center mb-3'>
        <div><img className='w-5' src="/img/instagram.svg" alt="" /></div>
        <div className='hover:underline'><a href="http://instagram.com/2020eskisehir">2020eskisehir</a></div>
      </div>



      <div className='flex flex-row justify-center mt-5'>
        <div className='hover:underline'><a href="https://www.instagram.com/alazyazilim">Powered by alazyazilim</a></div>
      </div>


    </div>
  )
}

export default Footer;