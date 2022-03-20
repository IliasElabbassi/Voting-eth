import React, { useState } from "react";
import {Form, Button, Alert, Col, Row} from 'react-bootstrap'
import emailjs from '@emailjs/browser';

function Contact() {
    const [from, setFrom] = useState(undefined)
    const [text, setText] = useState(undefined)
    const [object, setObject] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [alertOn, setAlert] = useState(false)

    function send(){
        setObject(document.getElementById("email.object").value)
        setFrom(document.getElementById("email.from").value)
        setText(document.getElementById("email.text").value)
        setName(document.getElementById("email.name").value)

        if( (typeof name !== 'undefined') &
            (typeof from !== 'undefined') &
            (typeof text !== 'undefined') &
            (typeof object !== 'undefined')){

            console.log("sending email ...")

            var templateParams = {
                'name': name,
                'email': from,
                'message': text,
                'subject': object
            }

            console.log(templateParams)

            emailjs.send('service_31osfnv', 'template_dc3zxxg', templateParams, 'NWcNs8o5HAnj_3F4v')
            .then((result) => {
                console.log(result.text)
                handleAlertShow()
                closeAlert()
            }, (error) => {
                console.log(error.text)
            })
        }
    }

    async function closeAlert(){
        setTimeout(function() {
            handleAlertClose()
        }, 10000)
    }

    const handleAlertClose = () => setAlert(false)
    const handleAlertShow = () => setAlert(true)

    return (
        <div className="container">
            <Row>
                <Col sm={2}>
                </Col>
                <Col sm={8}>
                <Alert variant="success" hidden={!alertOn} transition >
                    <Alert.Heading>Email Sent !</Alert.Heading>
                    <hr/>
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => handleAlertClose()} variant="outline-success">
                        Close
                    </Button>
                    </div>
                </Alert>
                <Form>
                <Form.Group className="mb-3" controlId="email.name">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" name="name"  onChange={(e) => setName(e.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email.from">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email"  onChange={(e) => setFrom(e.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email.object">
                    <Form.Label>Object</Form.Label>
                    <Form.Control type="text" placeholder="Object of your mail" name="subject"  onChange={(e) => setObject(e.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email.text" >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={10} name="message"  onChange={(e) => setText(e.value)} />
                </Form.Group>
                </Form>

                <Button variant="primary" type="submit" onClick={() => send()} >
                    Submit
                </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Contact;