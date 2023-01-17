import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {signup} from "../../redux/auth/authSlice";
import SignupForm from "./SignupForm";
import {UISlice} from "../../redux/ui/uiSlice";

const Signup:FC = () => {
    const [login, setLogin] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isLoginValid, setLoginValid] = useState(false);

    const [realName, setRealName] = useState('');
    const [realNameError, setRealNameError] = useState('');
    const [isRealNameValid, setRealNameValid] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isEmailValid, setEmailValid] = useState(false);

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [isPhoneValid, setPhoneValid] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(false);

    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');
    const [isPasswordConfirmValid, setPasswordConfirmValid] = useState(false);

    const [isSubmitDisabled, setSubmitDisabled] = useState(true);

    const signupMessage = useAppSelector((state) => state.auth.signupMessage);
    const isAuthFetching = useAppSelector((state) => state.auth.isFetching);

    const isShown = useAppSelector((state) => {
        return state.ui.isSignupShown
    });

    const dispatch = useAppDispatch();

    const handleSignupToggle: () => void = () => {
        dispatch(UISlice.actions.toggleSignupShown());
    }

    const handleFieldChange: (name: string, value: string) => void = (name, value) => {
        switch (name) {
            case 'login':
                setLogin(value);
                break;
            case 'realName':
                setRealName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'passwordConfirm':
                setPasswordConfirm(value);
                break;
        }
    }

    const handleFieldBlur: (name: string) => void = (name) => {
        switch (name) {
            case 'login':
                if(!login) setLoginError('Field should be filled');
                else if (login.length < 3 || login.length > 12) setLoginError('Field should contain 3 - 15 symbols');
                else if (!login.match('^[a-zA-Z0-9]+$')) setLoginError('Field should contain only latin letters and numbers');
                else {setLoginError(''); setLoginValid(true);}
                break;
            case 'realName':
                if(realName && realName.length < 3 || realName && realName.length > 255) {
                    setRealNameError('Too long or too short value');
                    setRealNameValid(false);
                }
                else if (realName && !realName.match('^[а-яА-ЯёЁa-zA-Z\x20]+$')) {
                    setRealNameError('Field should contain only letters and spaces');
                    setRealNameValid(false);
                }
                else {setRealNameError(''); setRealNameValid(true)}
                break;
            case 'email':
                if(!email) setEmailError('Field should be filled');
                else if (email.length < 3 || email.length > 30) setEmailError('Field should contain 3 - 30 symbols');
                else if (!email.match('^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$')) setEmailError('Недопустимый формат e-mail');
                else {setEmailError(''); setEmailValid(true);}
                break;
            case 'phone':
                if(!phone) setPhoneError('Field should be filled');
                else if (phone.length < 11) setPhoneError('Field should contain not less than 11 symbols');
                else {setPhoneError(''); setPhoneValid(true);}
                break;
            case 'password':
                if(!password) setPasswordError('Field should be filled');
                else if (password.length < 8 || password.length > 25) setPasswordError('Field should contain 8 - 25 symbols');
                else if (!password.match('^[a-zA-Z0-9]+$')) setPasswordError('Use latin letters and numbers for password');
                else {setPasswordError(''); setPasswordValid(true);}
                break;
            case 'passwordConfirm':
                if(passwordConfirm !== password) setPasswordConfirmError("Passwords don't match");
                else {setPasswordConfirmError(''); setPasswordConfirmValid(true);}
                break;
        }
    }

    const handleSignupSubmit:()=>void = () => {
            dispatch(signup({
                login: login,
                realName: realName,
                email: email,
                phone: phone,
                password: password,
                passwordConfirm: passwordConfirm
            }))
                .then((res) => {
                    if(res.payload.status !== 'error') handleSignupToggle();
                });
    }

    useEffect(() => {
        if(!isLoginValid || !isRealNameValid || !isEmailValid || !isPhoneValid || !isPasswordValid || !isPasswordConfirmValid)
            setSubmitDisabled(true);
        else setSubmitDisabled(false);
    }, [isLoginValid, isRealNameValid, isEmailValid, isPhoneValid, isPasswordValid, isPasswordConfirmValid])

    return(
        <SignupForm isShown={isShown} handleClose={handleSignupToggle} handleSignupSubmit={handleSignupSubmit} handleFieldChange={handleFieldChange}
                    handleFieldBlur={handleFieldBlur} signupMessage={signupMessage} login={login} loginError={loginError} realName={realName}
                    realNameError={realNameError} email={email} emailError={emailError} phone={phone} phoneError={phoneError} password={password}
                    passwordError={passwordError} passwordConfirm={passwordConfirm} passwordConfirmError={passwordConfirmError} isSubmitDisabled={isSubmitDisabled}
                    isAuthFetching={isAuthFetching}/>
    )
}

export default Signup;