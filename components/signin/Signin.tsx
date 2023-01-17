import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {recoverPassword, signin} from "../../redux/auth/authSlice";
import SigninForm from "./SigninForm";
import {authSlice} from "../../redux/auth/authSlice";
import {UISlice} from "../../redux/ui/uiSlice";

const Signin:FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isRecover, setIsRecover] = useState(false);
    const [email, setEmail] = useState('');

    const signinMessage = useAppSelector((state) => state.auth.authMessage);
    const recoverMessage = useAppSelector((state) => state.auth.recoverMessage);
    const recoverError = useAppSelector((state) => state.auth.recoverError);
    const isAuthFetching = useAppSelector((state) => state.auth.isFetching);

    const isShown = useAppSelector((state) => {
        return state.ui.isSigninShown
    });

    const dispatch = useAppDispatch();

    const handleSigninToggle: () => void = () => dispatch(UISlice.actions.toggleSigninShown());

    const handleSignupToggle: () => void = () => {
        dispatch(UISlice.actions.toggleSigninShown());
        dispatch(UISlice.actions.toggleSignupShown());
    }

    const handleRecoverShow:()=>void = () => setIsRecover(true);

    const handleSigninSubmit:()=>void = () => {
        if(login && password) {
            dispatch(signin({login: login, password: password}))
                .then((res) => {
                    if(res.payload.status !== 'error') {
                        setLogin('');
                        setPassword('');
                        handleSigninToggle();
                    }
                });
        } else {
            dispatch(authSlice.actions.setAuthMessage('Логин и пароль должны быть заполнены'));
        }
    }

    const handleRecoverSubmit:()=>void = () => {
        if(email && email.match('^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$')) {
            dispatch(recoverPassword(email))
                .then((res) => {
                    setTimeout(() => {
                        dispatch(authSlice.actions.removeRecoverError());
                        dispatch(authSlice.actions.removeRecoverMessage());
                        setIsRecover(false);
                        handleSigninToggle();
                    }, 5000);
                });
        } else {
            dispatch(authSlice.actions.setRecoverError('Недопустимый формат email'));
        }
    }

    return(
        <SigninForm isShown={isShown} handleClose={handleSigninToggle} handleSigninSubmit={handleSigninSubmit}
                    signinMessage={signinMessage} login={login} password={password} handleLoginChange={setLogin}
                    handlePasswordChange={setPassword} handleEmailChange={setEmail} email={email} handleRecoverShow={handleRecoverShow}
                    recoverMessage={recoverMessage} recoverError={recoverError} isRecover={isRecover} handleSignupShow={handleSignupToggle}
                    handleRecoverSubmit={handleRecoverSubmit} isAuthFetching={isAuthFetching} />
    )
}

export default Signin;