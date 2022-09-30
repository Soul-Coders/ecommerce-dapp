import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import orders from './orders';
const localizer = momentLocalizer(moment)

import "react-big-calendar/lib/css/react-big-calendar.css";

const Scheduler = (props) => (
  <div className='p-4 rounded-md bg-dimmed-black h-[80vh] text-2xl'>
    <Calendar
      localizer={localizer}
      events={orders}
      startAccessor="start"
      endAccessor="end"
      style= {{
       borderBlockWidth: 0,
       borderBottomColor: 'red'
      }}
    />
  </div>
)

export default Scheduler;