import {
    DateTime,
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>referralsProgram</th>
    <th>referralsCode</th>
    <th>referralsStartDate</th>
    <th>referralsEndDate</th>
    <th>referralsState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
