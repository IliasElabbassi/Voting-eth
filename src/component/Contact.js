import React, { useEffect, useState } from "react";
import {Form, Button} from 'react-bootstrap'
import emailjs from '@emailjs/browser';

function Contact() {
    const [to, setTo] = useState("iliaselabbassi@outlook.fr")
    const [from, setFrom] = useState(undefined)
    const [text, setText] = useState(undefined)

    function send(){
        setFrom(document.getElementById("email.from").value)
        setText(document.getElementById("email.text").value)

        if(from && text){
            console.log("TODO: send email")
            console.log(from)
            console.log(text)
        }
    }

    return (
        <div className="container">
            <Form>
            <Form.Group className="mb-3" controlId="email.from">
                <Form.Label>Your Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email.text">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={10} />
            </Form.Group>
            </Form>

            <Button variant="primary" onClick={() => send()}>
                    Send
            </Button>
        </div>
    )
}

export default Contact;