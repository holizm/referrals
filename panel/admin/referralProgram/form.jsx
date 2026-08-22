import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='referralsCode'
        property='code'
        required
    />
    <DateTime
        placeholder='referralsStartDate'
        property='startDate'
    />
    <DateTime
        placeholder='referralsEndDate'
        property='endDate'
    />
    <Select
        options={[
            'discount',
            'credit',
            'points',
            'giftCard',
            'commission',
            'other',
        ]}
        placeholder='referralsRewardType'
        property='referrerRewardType'
        required
    />
    <Numeric
        placeholder='referralsRewardValue'
        property='referrerRewardValue'
    />
    <LongText
        placeholder='referralsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
