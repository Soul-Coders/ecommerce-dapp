import Page from '../../../components/Page';
import { useRouter } from 'next/router';
const OrderDetails = () => {
  const router = useRouter()
  const id = router.query.orderId
  return (
    <Page name={`Order Details`} parent="seller">

    </Page>
  )
}

export default OrderDetails;