import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>referralsReferrer</th>
    <th>referralsReferredPerson</th>
    <th>referralsReferralDate</th>
    <th>referralsState</th>
</>

const row = item => <>
    <td>{item.referralCode?.referrer?.title}</td>
    <td>{item.referredPerson?.title}</td>
    <DateTime value={item.referralDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
