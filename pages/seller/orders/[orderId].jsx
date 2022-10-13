import Page from '../../../components/Page';
import { useRouter } from 'next/router';
import orders from './orders';

const OrderDetails = () => {
  const router = useRouter()
  const id = router.query.orderId
  return (
    <Page name={`Order Details`}>
        <div className="bg-dimmed-black rounded-md p-3 flex flex-col ">
            {id}
        </div>
    </Page>
  )
}

export default OrderDetails;