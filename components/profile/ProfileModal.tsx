import {Modal, Button, ListGroup} from "react-bootstrap";
import { FC } from 'react';


type profileModalProps = {
    isShown: boolean,
    userData: {
        username: string,
        real_name: string,
        email: string,
        phone_number: string
    }
    handleClose: ()=>void,
}

const ProfileModal:FC<profileModalProps> = (props:profileModalProps) => {
    return (
        <Modal size='lg' show={props.isShown} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="text-center mb-5">User info: {props.userData.username}</h4>
                    <ListGroup className="mb-5">
                        <ListGroup.Item>Full Name: {props.userData.real_name}</ListGroup.Item>
                        <ListGroup.Item>Email: {props.userData.email}</ListGroup.Item>
                        <ListGroup.Item>Phone number: {props.userData.phone_number}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="success" type="submit">
                        Edit data
                    </Button>
                    <Button variant="success">
                        Change password
                    </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default ProfileModal;