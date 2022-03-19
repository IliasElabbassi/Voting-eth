import {Form, Col, Row, Button, Alert} from 'react-bootstrap'
import React, { useEffect, useState} from "react";

function Create_vote(props) {
    const [inputs, setInputs] = useState(['ele1', 'ele2', 'ele3'])
    const [voting, setVoting] = useState(undefined);
    const [title, setTitle] = useState(undefined)
    const [elements, setElements] = useState([])
    const [alertOn, setAlert] = useState(false)
    const [voteTx, setVoteTx] = useState(false)
    const [,setState] = useState(); // used to re-render 



    useEffect(()=>{
        if(voting === 'undefined')
            setVoting(props.voting);
    },[props.voting]);


    async function create_vote_tx(){
        for(let i = 0; i < inputs.length; i++)
            elements.push(document.getElementById(inputs[i]).value)
        console.log(elements)
        try{
            const createVoteTx = await props.voting.createVote(title, elements);
            setVoteTx(createVoteTx.hash)
            handleAlertShow()
            closeAlert()
        }catch(err){
            console.log("error: "+err)
        }
    }

    // used to re-render 
    function handleUpdate() {
       setState({});
    }

    function addInput(){
        const size = inputs.length+1
        const name = 'ele'+size
        inputs.push(name) 
        
        setInputs(inputs)
        console.log(inputs)
        handleUpdate()
    }

    function removeInput(){
        if(inputs.length > 2)
            inputs.pop()
        
        setInputs(inputs)
        console.log(inputs)
        handleUpdate()
    }

    async function closeAlert(){
        setTimeout(function() {
            handleAlertClose()
        }, 10000)
    }

    const handleAlertClose = () => setAlert(false);
    const handleAlertShow = () => setAlert(true);

    return (
        <div className='container'>
            <Alert variant="success" hidden={!alertOn} transition >
                <Alert.Heading>Vote created !</Alert.Heading>
                <p>at : {voteTx}</p>
                <hr/>
                <div className="d-flex justify-content-end">
                <Button onClick={() => handleAlertClose()} variant="outline-success">
                    Close
                </Button>
                </div>
            </Alert>
            <br/>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextTitle">
                <Form.Label column sm="2">
                    Vote title
                </Form.Label>
                <Col sm="10">
                    <Form.Control  defaultValue="This is a vote about..." onChange={(e) => setTitle(e.target.value)} />
                </Col>
            </Form.Group>
            
            {
                inputs.map(input => {
                    return(
                        <Form.Group key={input} as={Row} className="mb-3" controlId={input}>
                        <Form.Label column sm="2">
                            {input}
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="vote.." />
                        </Col>
                    </Form.Group>
                    )
                })
            }

            <Button variant="primary" onClick={() => create_vote_tx()}>Create</Button>&nbsp;
            <Button variant="success" onClick={() => addInput()}>add input</Button>&nbsp;
            <Button variant="secondary" onClick={() => removeInput()}>remove input</Button>

        </div>
    )
}

export default Create_vote;