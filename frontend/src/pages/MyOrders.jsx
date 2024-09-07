import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from "../context/StoreContext";
import axios from 'axios';
import { assets } from '../assets/assets';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
    setData(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  return (
    <div className='my-12 mx-4'>
      <h2 className='font-semibold text-2xl mb-6'>My Orders</h2>
      <div className='flex flex-col gap-5'>
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 p-4 border border-orange-500 rounded-md'
            >
              <img src={assets.parcel_icon} alt='parcel' className='w-12 mx-auto sm:mx-0' />
              <p className='text-center sm:text-left'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className='text-center sm:text-left'>${order.amount}.00</p>
              <p className='text-center sm:text-left'>Items: {order.items.length}</p>
              <p className='text-center sm:text-left'>
                <span className='text-orange-500'>&#x25cf;</span>{' '}
                <b className='font-semibold text-[#454545]'>{order.status}</b>
              </p>
              <button className='border-none py-2 px-4 rounded bg-[#ffe1e1] cursor-pointer text-[#454545] hover:bg-orange-100'>
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MyOrders;
