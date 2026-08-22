import {
    DateTime,
    DialogForm,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='referralsReferralCode'
        property='referralCode'
        required
    />
    <Text
        placeholder='referralsReferredPerson'
        property='referredPerson'
        required
    />
    <DateTime
        placeholder='referralsReferralDate'
        property='referralDate'
        required
    />
</>

export default <DialogForm inputs={inputs} />
