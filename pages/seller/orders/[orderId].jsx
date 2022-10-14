import Page from '../../../components/Page';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CalendarDaysIcon } from '@heroicons/react/20/solid';
import orders from './orders';

const OrderDetails = () => {
  const router = useRouter()
  const { orderId } = router.query
  const [order, setOrder] = useState([])

  useEffect(() => {
    if (router.isReady) {
      setOrder(orders.find(order => order.id === orderId))
    }
  }, [router.query.orderId, router.isReady]);
  
  return (
    <Page name={`Order Details`}
      options={
        <button 
          className="text-sm max-w-[8rem] font-semibold px-9 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md"
        >
          Invoice
        </button>
      }
    >
        <div className="bg-dimmed-black rounded-md p-3 flex flex-col text-brand-lavender">
          <div className='flex justify-between p-3'>
            <p className='font-bold '>#{orderId}</p>
            <div className='flex gap-2 px-2 font-3xl'>
              <CalendarDaysIcon className='w-5'/>
              <h1>{order.date}</h1>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/60"></div>
        </div>
    </Page>
  )
}

export default OrderDetails;