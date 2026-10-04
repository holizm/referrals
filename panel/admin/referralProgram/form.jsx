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
        code
        required
    />
    <DateTime startDate />
    <DateTime endDate />
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
        referrerRewardType
        required
    />
    <Numeric
        placeholder='rewardValue'
        referrerRewardValue
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
