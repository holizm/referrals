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
        placeholder='code'
        property='code'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
    />
    <DateTime
        placeholder='endDate'
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
        placeholder='rewardType'
        property='referrerRewardType'
        required
    />
    <Numeric
        placeholder='rewardValue'
        property='referrerRewardValue'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
