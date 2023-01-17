import {Modal, Button, Form, Alert, OverlayTrigger, Popover, Row, Col} from "react-bootstrap";
import { FC } from 'react';
import WithSpinnerOverlay from "../withSpinnerOverlay";
import ClientCaptcha from "react-client-captcha";
import {useState} from "react";


type FeedbackProps = {
    handleFeedbackSubmit: ()=>void,
    handleFieldChange: (name: string, value: string) => void,
    handleFieldBlur: (name: string) => void,
    setCaptchaCode: (captchaCode: string) => void,
    feedbackResponse: {status: string, data: string},
    name: string,
    nameError: string,
    email: string,
    emailError: string,
    message: string,
    messageError: string,
    enteredCaptchaCode: string,
    enteredCaptchaCodeError: string,
    isSubmitDisabled: boolean
    isFeedbackFetching: boolean
}

const FeedbackForm:FC<FeedbackProps> = (props) => {
    const [alertShow, setAlertShow] = useState(true);

    return (
        <div>
            {props.feedbackResponse.data && alertShow &&
                <Alert variant={props.feedbackResponse.status == 'ok' ? 'success' : 'danger'} className="text-center" onClose={() => setAlertShow(false)} dismissible>
                    {props.feedbackResponse.data}
                </Alert>
            }
            <Form onSubmit={(e) => {
                e.preventDefault();
                props.handleFeedbackSubmit()}}>
                <Row className="mb-3">
                    <Col>
                        <Form.Control type="text" name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} onBlur={(event) => props.handleFieldBlur(event.target.name)} value={props.name} placeholder="Full Name"/>
                        <Form.Text className="text-danger">{props.nameError}
                        </Form.Text>
                    </Col>
                    <Col>
                        <Form.Control type="text" name="email" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} onBlur={(event) => props.handleFieldBlur(event.target.name)} value={props.email} placeholder="Email"/>
                        <Form.Text className="text-danger">{props.emailError}
                        </Form.Text>
                    </Col>
                </Row>
                <Form.Control className="mb-3" as="textarea" rows={6} name="message" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                    props.handleFieldChange(e.target.name, e.target.value)} onBlur={(event) => props.handleFieldBlur(event.target.name)} value={props.message} placeholder="Enter your message..."/>
                <Form.Text className="text-danger">{props.messageError}
                </Form.Text>
                <Row className="mb-3">
                    <Col>
                        <ClientCaptcha captchaCode={code => props.setCaptchaCode(code)} charsCount={6} width={200}
                                       fontFamily="Rubik Puddles" fontSize={32}/>
                    </Col>
                    <Col>
                        <Form.Control onBlur={(event) => props.handleFieldBlur(event.target.name)} type="text" placeholder="Enter the CAPTCHA" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                            props.handleFieldChange(e.target.name, e.target.value)} value={props.enteredCaptchaCode} name="enteredCaptchaCode"/>
                        <Form.Text className="text-danger">{props.enteredCaptchaCodeError}
                        </Form.Text>
                    </Col>
                </Row>
                <Button variant="success" type="submit" disabled={props.isSubmitDisabled}>
                    Submit
                </Button>
                {props.isFeedbackFetching && <WithSpinnerOverlay />}
            </Form>
        </div>
    )
}

export default FeedbackForm;