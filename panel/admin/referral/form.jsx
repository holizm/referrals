import {
    DateTime,
    DialogForm,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='referralCode'
        property='referralCode'
        required
    />
    <Text
        placeholder='referredPerson'
        property='referredPerson'
        required
    />
    <DateTime
        placeholder='referralDate'
        property='referralDate'
        required
    />
</>

export default <DialogForm inputs={inputs} />
