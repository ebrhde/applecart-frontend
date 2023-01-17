import {Modal, Button, Form, Alert, OverlayTrigger, Popover} from "react-bootstrap";
import { FC } from 'react';
import Link from "next/link";
import WithSpinnerOverlay from "../withSpinnerOverlay";


type SigninProps = {
    isShown: boolean,
    isRecover: boolean,
    handleClose: ()=>void,
    handleSignupShow: () => void,
    handleRecoverShow: () => void,
    handleSigninSubmit: ()=>void,
    handleRecoverSubmit: ()=>void,
    handleLoginChange: (login: string) => void,
    handlePasswordChange: (password: string) => void,
    handleEmailChange: (email: string) => void,
    signinMessage: string,
    login: string,
    password: string,
    email: string,
    recoverMessage: string,
    recoverError: string,
    isAuthFetching: boolean
}

const SigninForm:FC<SigninProps> = (props) => {
    return (
            <Modal show={props.isShown} onHide={props.handleClose}>
                {!props.isRecover && <Form onSubmit={(e) => {
                    e.preventDefault();
                    props.handleSigninSubmit()}}>
                <Modal.Header closeButton>
                <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="formLogin">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={(e:React.ChangeEvent<HTMLInputElement>) => 
                                props.handleLoginChange(e.target.value)} value={props.login} type="text" name="login" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e:React.ChangeEvent<HTMLInputElement>) => 
                                props.handlePasswordChange(e.target.value)} value={props.password} type="password" name="password" />
                        </Form.Group>
                        <Button variant="link" onClick={() => props.handleRecoverShow()}>Forgot password</Button>
                        {props.signinMessage &&
                            <Alert variant={'danger'} className="text-center">
                            {props.signinMessage}
                        </Alert>}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="success" type="submit">
                        Log in
                    </Button>
                    <Button variant="success" onClick={() => props.handleSignupShow()}>
                        Sign up
                    </Button>
                </Modal.Footer>
                </Form>}
                {props.isRecover && <Form onSubmit={(e) => {
                    e.preventDefault();
                    props.handleRecoverSubmit()}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Password reset</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formLogin">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                                props.handleEmailChange(e.target.value)} value={props.email} type="email" name="email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        {props.recoverMessage &&
                            <Alert variant={'success'} className="text-center">
                                {props.recoverMessage}
                            </Alert>}
                        {props.recoverError &&
                            <Alert variant={'danger'} className="text-center">
                                {props.recoverError}
                            </Alert>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="submit">
                            Reset password
                        </Button>
                    </Modal.Footer>
                </Form>}
                {props.isAuthFetching && <WithSpinnerOverlay />}
            </Modal>
    )
}

export default SigninForm;