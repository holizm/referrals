import {
    DateTime,
    DialogForm,
    Text,
} from 'form'

const inputs = <>
    <Text
        referralCode
        required
    />
    <Text
        referredPerson
        required
    />
    <DateTime
        referralDate
        required
    />
</>

export default <DialogForm inputs={inputs} />
