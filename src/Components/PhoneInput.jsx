import React, { useState } from 'react';
import InputMask from 'react-input-mask'

function Input(props) {
    return (
        <InputMask placeholder={'Введите номер'} className={props.name}
            mask='+\9\96(999) 999-999'
            value={props.value}
            onChange={props.onChange}>
        </InputMask>
    );
}
const PhoneInput = ({ tel = '', name }) => {
    const [phone, setPhone] = useState(tel);
    const handleInput = ({ target: { value } }) => {
        setPhone(value)
        // alert(2)
    };
    return (
        <Input
            name={name}
            value={phone}
            defaultValue={tel}
            alwaysShowMask={true}
            onChange={handleInput}>
        </Input>
    );
};

export default PhoneInput;