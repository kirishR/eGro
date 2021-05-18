import React from 'react';
import Layout from "../../components/Layout";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";







export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <Layout>

<div style={{ marginLeft: "250px", marginRight: "250px", marginTop: "50px", marginBottom: "100px" }}>
                <div id="PaymentForm">
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
<div style={{marginLeft:"150px" , marginRight: "150px" , marginTop: "50px"}}>
<Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Credit Card Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="number"
                                    placeholder="Card Number"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </Form.Group>


                        </Form.Row>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Expiry</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="expiry"
                                    placeholder="mm / yy "
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>cvc</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cvc"
                                    placeholder="..."
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </Form.Group>
                        </Form.Row>


                        <Link to="/account/orders" >
                            <Button variant="primary" type="submit">
                                Submit
                               
                        </Button>
                        </Link> 
                    
                    </Form>

</div>
                    
                </div>


            </div >

            </Layout>
           
        );
    }
}

