import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import OrderForm from "./OrderForm";
import {addOrder} from "../../redux/order/orderSlice";

const Order:FC = () => {
    const userData = useAppSelector((state) => {
        return {
            real_name: state.user.real_name,
            phone_number: state.user.phone_number
        }
    });



    const [name, setName] = useState(userData.real_name);
    const [nameError, setNameError] = useState('');
    const [isNameValid, setNameValid] = useState(true);

    const [phone, setPhone] = useState(userData.phone_number);
    const [phoneError, setPhoneError] = useState('');
    const [isPhoneValid, setPhoneValid] = useState(true);

    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');
    const [isAddressValid, setAddressValid] = useState(false);

    const [note, setNote] = useState('');

    const [isSubmitDisabled, setSubmitDisabled] = useState(true);

    const isOrderFetching = useAppSelector((state) => state.order.isFetching);
    const dispatch = useAppDispatch();

    const handleFieldChange: (name: string, value: string) => void = (name, value) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'note':
                setNote(value);
                break;
        }
    }

    const handleFieldBlur: (field: string) => void = (field) => {
        switch (field) {
            case 'name':
                if(name && name.length < 3 || name && name.length > 255) {
                    setNameError('Too short or long value');
                    setNameValid(false);
                }
                else if (name && !name.match('^[а-яА-ЯёЁa-zA-Z\x20]+$')) {
                    setNameError('The field should contain only characters and spaces');
                    setNameValid(false);
                }
                else {setNameError(''); setNameValid(true)}
                break;
            case 'phone':
                if(!phone) setPhoneError('The field should be completed');
                else if (phone.length < 11) setPhoneError('The field should contain no less than 11 characters');
                else if (!phone.match('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')) setPhoneError('Wrong phone format');
                else {setPhoneError(''); setPhoneValid(true);}
                break;
            case 'address':
                if(address && address.length < 3) {
                    setAddressError('Too short or long value');
                    setAddressValid(false);
                }
                else {setAddressError(''); setAddressValid(true)}
                break;
        }
    }

    const handleOrderSubmit: () => void = () => {
        dispatch(addOrder({name, phone, address, note}))
            .then((res) => {
                if (res.payload.status !== 'error') {
                    setName('');
                    setPhone('');
                    setAddress('');
                    setNote('');
                }
            });
    }

    useEffect(() => {
        if(!isNameValid || !isPhoneValid || !isAddressValid)
            setSubmitDisabled(true);
        else setSubmitDisabled(false);
    }, [isNameValid, isPhoneValid, isAddressValid])

    return(
        <OrderForm handleOrderSubmit={handleOrderSubmit}
                      name={name} phone={phone} address={address} note={note}
                      handleFieldChange={handleFieldChange} handleFieldBlur={handleFieldBlur}
                      nameError={nameError} phoneError={phoneError} addressError={addressError}
                      isOrderFetching={isOrderFetching} isSubmitDisabled={isSubmitDisabled} />
    )
}

export default Order;