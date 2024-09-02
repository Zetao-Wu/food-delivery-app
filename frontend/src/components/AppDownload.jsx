import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-[100px] text-2xl text-center font-semibold' id='app-download'>
      <p>For Better Experience, Download <br /> <span className='text-orange-500'>Tomato</span> App</p>
      <div className='flex justify-center gap-2 mt-[40px]'>
        <img className='w-[150px] cursor-pointer hover:scale-105' src={assets.play_store} alt='Google Play Store'/>
        <img className='w-[150px] cursor-pointer hover:scale-105' src={assets.app_store} alt='App Store'/>
      </div>
    </div>
  )
}

export default AppDownload
