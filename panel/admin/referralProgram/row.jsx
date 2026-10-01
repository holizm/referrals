import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
    <td>{item.state?.title}</td>
</>
