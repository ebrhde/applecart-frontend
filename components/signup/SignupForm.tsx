import {Modal, Button, Form, Alert, FormControl} from "react-bootstrap";
import {FC, FocusEventHandler} from 'react';
import WithSpinnerOverlay from "../withSpinnerOverlay";


type SignupProps = {
    isShown: boolean,
    handleClose: ()=>void,
    handleSignupSubmit: ()=>void,
    handleFieldChange: (name: string, value: string) => void,
    handleFieldBlur: (name: string) => void,
    signupMessage: string,
    login: string,
    loginError: string,
    realName: string,
    realNameError: string,
    email: string,
    emailError: string,
    phone: string,
    phoneError: string,
    password: string,
    passwordError: string,
    passwordConfirm: string,
    passwordConfirmError: string,
    isSubmitDisabled: boolean
    isAuthFetching: boolean
}

const SigninForm:FC<SignupProps> = (props) => {
    return (
        <Modal show={props.isShown} onHide={props.handleClose}>
            <Form onSubmit={(e) => {
                e.preventDefault();
                props.handleSignupSubmit()}}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formLogin">
                        <Form.Label>Username <span className="text-danger">*</span></Form.Label>
                        <Form.Control onBlur={(event) => props.handleFieldBlur(event.target.name)} onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} value={props.login} type="text" name="login" />
                        <Form.Text className="text-danger">{props.loginError}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRealName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control onBlur={(event) => props.handleFieldBlur(event.target.name)} onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} value={props.realName} type="text" name="realName" />
                        <Form.Text className="text-danger">{props.realNameError}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                        <Form.Control onBlur={(event) => props.handleFieldBlur(event.target.name)} onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} value={props.email} type="email" name="email" />
                        <Form.Text className="text-danger">{props.emailError}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone number <span className="text-danger">*</span></Form.Label>
                        <Form.Control onBlur={(event) => props.handleFieldBlur(event.target.name)} onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} placeholder="+7 (999) 999-99-99" value={props.phone} type="tel" name="phone" />
                        <Form.Text className="text-danger">{props.phoneError}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                        <Form.Control onBlur={(event) => props.handleFieldBlur(event.target.name)} onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} value={props.password} type="password" name="password" />
                        <Form.Text className="text-danger">{props.passwordError}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPasswordConfirm">
                        <Form.Label>Confirm password <span className="text-danger">*</span></Form.Label>
                        <Form.Control onBlur={(event) => props.handleFieldBlur(event.target.name)} onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} value={props.passwordConfirm} type="password" name="passwordConfirm" />
                        <Form.Text className="text-danger">{props.passwordConfirmError}
                        </Form.Text>
                    </Form.Group>
                    {props.signupMessage &&
                        <Alert variant={'danger'} className="text-center">
                            {props.signupMessage}
                        </Alert>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit" disabled={props.isSubmitDisabled}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
            {props.isAuthFetching && <WithSpinnerOverlay />}
        </Modal>
    )
}

export default SigninForm;