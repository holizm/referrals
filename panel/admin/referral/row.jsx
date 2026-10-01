import { DateTime } from 'list'

export default item => <>
    <td>{item.referralCode?.referrer?.title}</td>
    <td>{item.referredPerson?.title}</td>
    <DateTime value={item.referralDate} />
    <td>{item.state?.title}</td>
</>
