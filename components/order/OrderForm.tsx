import {FC} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import WithSpinnerOverlay from "../withSpinnerOverlay";

type OrderProps = {
    handleOrderSubmit: ()=>void,
    handleFieldChange: (name: string, value: string) => void,
    handleFieldBlur: (name: string) => void,
    name: string,
    nameError: string,
    phone: string,
    phoneError: string,
    address: string,
    addressError: string,
    note: string,
    isSubmitDisabled: boolean
    isOrderFetching: boolean
}

const OrderForm:FC<OrderProps> = (props) => (
    <Form onSubmit={(e) => {
        e.preventDefault();
        props.handleOrderSubmit()}}>
        <Form.Group className="mb-3" controlId="orderFormName">
            <Form.Label>Customer name</Form.Label>
            <Form.Control type="text" name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                props.handleFieldChange(e.target.name, e.target.value)} onBlur={(event) => props.handleFieldBlur(event.target.name)} value={props.name} />
            <Form.Text className="text-danger">{props.nameError}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="orderFormPhone">
            <Form.Label>Contact phone</Form.Label>
            <Form.Control type="text" name="phone" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                props.handleFieldChange(e.target.name, e.target.value)} onBlur={(event) => props.handleFieldBlur(event.target.name)} value={props.phone} />
            <Form.Text className="text-danger">{props.phoneError}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="orderFormAddress">
            <Form.Label>Delivery address</Form.Label>
            <Form.Control type="text" name="address" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                props.handleFieldChange(e.target.name, e.target.value)} onBlur={(event) => props.handleFieldBlur(event.target.name)} value={props.address} />
            <Form.Text className="text-danger">{props.addressError}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="orderFormNote">
            <Form.Label>Extra info</Form.Label>
            <Form.Control className="mb-3" as="textarea" rows={5} name="note" onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                props.handleFieldChange(e.target.name, e.target.value)} value={props.note} />
        </Form.Group>
        <Button variant="success" type="submit" disabled={props.isSubmitDisabled}>
            Submit
        </Button>
        {props.isOrderFetching && <WithSpinnerOverlay />}
    </Form>
)

export default OrderForm;