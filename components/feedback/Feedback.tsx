import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {sendFeedback} from "../../redux/feedback/feedbackSlice";
import FeedbackForm from "./FeedbackForm";
import {feedbackSlice} from "../../redux/feedback/feedbackSlice";

const Feedback:FC = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [isNameValid, setNameValid] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isEmailValid, setEmailValid] = useState(false);

    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isMessageValid, setMessageValid] = useState(false);

    const [captchaCode, setCaptchaCode] = useState('');

    const [enteredCaptchaCode, setEnteredCaptchaCode] = useState('');
    const [enteredCaptchaCodeError, setEnteredCaptchaCodeError] = useState('');
    const [isEnteredCaptchaCodeValid, setEnteredCaptchaCodeValid] = useState(false);

    const [isSubmitDisabled, setSubmitDisabled] = useState(true);

    const feedbackResponse = useAppSelector((state) => state.feedback.feedbackResponse);
    const isFeedbackFetching = useAppSelector((state) => state.feedback.isFetching);
    const dispatch = useAppDispatch();

    const handleFieldChange: (name: string, value: string) => void = (name, value) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            case 'enteredCaptchaCode':
                setEnteredCaptchaCode(value);
                break;
        }
    }

    const handleFieldBlur: (field: string) => void = (field) => {
        switch (field) {
            case 'name':
                if(name && name.length < 3 || name && name.length > 255) {
                    setNameError('Too short or long value');
                    setNameValid(false);
                    console.log(nameError);
                }
                else if (name && !name.match('^[а-яА-ЯёЁa-zA-Z\x20]+$')) {
                    setNameError('The field should contain only characters and spaces');
                    setNameValid(false);
                }
                else {setNameError(''); setNameValid(true)}
                break;
            case 'email':
                if(!email) setEmailError('The field should be completed');
                else if (email.length < 3 || email.length > 30) setEmailError('The field should contain form 3 to 30 characters');
                else if (!email.match('^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$')) setEmailError('Wrong email format');
                else {setEmailError(''); setEmailValid(true);}
                break;
            case 'message':
                if(message && message.length < 3) {
                    setMessageError('The message is too short');
                    setMessageValid(false);
                }
                else {setMessageError(''); setMessageValid(true)}
                break;
            case 'enteredCaptchaCode':
                if(enteredCaptchaCode !== captchaCode) setEnteredCaptchaCodeError("Entered CAPTCHA doesn't match");
                else {setEnteredCaptchaCodeError(''); setEnteredCaptchaCodeValid(true);}
                break;
        }
    }

    const handleFeedbackSubmit: () => void = () => {
        dispatch(sendFeedback({name, email, message}))
            .then((res) => {
                if (res.payload.status !== 'error') {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setEnteredCaptchaCode('');
                }
            });
    }

    useEffect(() => {
        if(!isNameValid || !isEmailValid || !isMessageValid || !isEnteredCaptchaCodeValid)
            setSubmitDisabled(true);
        else setSubmitDisabled(false);
    }, [isNameValid, isEmailValid, isMessageValid, isEnteredCaptchaCodeValid])

    return(
        <FeedbackForm handleFeedbackSubmit={handleFeedbackSubmit}
                    feedbackResponse={feedbackResponse} name={name} email={email} message={message} setCaptchaCode={setCaptchaCode}
                    enteredCaptchaCode={enteredCaptchaCode} handleFieldChange={handleFieldChange} handleFieldBlur={handleFieldBlur}
                    nameError={nameError} emailError={emailError} messageError={messageError} enteredCaptchaCodeError={enteredCaptchaCodeError}
                    isFeedbackFetching={isFeedbackFetching} isSubmitDisabled={isSubmitDisabled} />
    )
}

export default Feedback;