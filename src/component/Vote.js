import {Modal, Button, Form, Col, Row } from 'react-bootstrap'
import React, { useEffect, useState } from "react";

function Vote(props) {
    const [voteElement, setVoteElement] = useState([])
    const [voteKey, setVoteKey] = useState(undefined)
    const [voting, setVoting] = useState(undefined);
    const [title, setTitle] = useState(false);
    const [keyVote, setKey] = useState(undefined)
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setVoteElement(props.voteElement)
        setVoting(props.voting);
        setTitle(props.title)
        setKey(props.keyVote)
    },[props.voting, props.voteElement, props.title, props.keyVote]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function vote_tx(){
        const _voteKey = voteKey
        const _key = keyVote
        
        console.log(_key)
        console.log(_voteKey)
        try{
            const voteTx = await voting.vote(_key, _voteKey)
        }catch(err){
            console.log("error: "+err)
        }
    }

    return (
        <div className="container">
            <Button variant="primary" onClick={handleShow}>
                Vote
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Col sm="4"></Col>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        voteElement.map((input, idx) => {
                            return(
                                <Form.Group key={input+"_vote"} as={Row} className="mb-3" className={input+"_vote"}>
                                <Col sm="3"></Col>
                                <Form.Label column sm="2">
                                    {input}
                                </Form.Label>
                                <Col sm="2"></Col>
                                <Col sm="1">
                                    <Form.Control type="radio" placeholder="vote.." className={title+"_radio"} onClick={() => setVoteKey(idx)}/>
                                </Col>
                            </Form.Group>
                            )
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={() => vote_tx()}>
                    Vote
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Vote;