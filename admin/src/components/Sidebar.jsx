import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import "./Siderbar.css"

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-[100vh] border-[1.5px] border-[#a9a9a9] border-t-0'>
      <div className='pt-[50px] pl-[20%] flex flex-col gap-[20px]'>
        <NavLink to="/add" className='sidebar-option flex items-center gap-[12px] border-[1px] border-r-[0] py-[8px] px-[10px] rounded-[(3px, 0px, 0px, 3px)] cursor-pointer'>
            <img src={assets.add_icon} alt='Add items' />
            <p className='hidden sm:block'>Add Items</p>
        </NavLink>
        <NavLink to="/list" className='sidebar-option flex items-center gap-[12px] border-[1px] border-r-[0] py-[8px] px-[10px] rounded-[(3px, 0px, 0px, 3px)] cursor-pointer'>
            <img src={assets.order_icon} alt='List Items' />
            <p className='hidden sm:block'>List Items</p>
        </NavLink>
        <NavLink to="/orders" className='sidebar-option flex items-center gap-[12px] border-[1px] border-r-[0] py-[8px] px-[10px] rounded-[(3px, 0px, 0px, 3px)] cursor-pointer'>
            <img src={assets.order_icon} alt='Order' />
            <p className='hidden sm:block'>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
