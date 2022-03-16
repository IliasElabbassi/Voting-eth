import getBlockchain from '../ethereum.js';
import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

function Create_vote(props) {
    const [voting, setVoting] = useState(undefined);
    const [title, setTitle] = useState(undefined)
    const [elements, setElements] = useState([])

    useEffect(()=>{
        setVoting(props.voting);
    },[props.voting]);


    async function create_vote_tx(){
        elements.push(document.getElementById("ele1").value)
        elements.push(document.getElementById("ele2").value)
        elements.push(document.getElementById("ele3").value)

        try{
            const createVoteTx = await props.voting.createVote(title, elements);
        }catch(err){
            console.log("error: "+err)
        }
    }

    function addElement(ele){
        if(!elements.includes(ele))
            elements.push(ele)
    }

    return (
        <div className="Create_vote">
            <label>Enter vote title: 
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </label> <br />

            <label>Enter an element:
                <input id="ele1" type="text" />
            </label><br />

            <label>Enter an element:
                <input id="ele2" type="text"/>
            </label><br />

            <label>Enter an element:
                <input id="ele3" type="text"/>
            </label><br />

            <button onClick={() => create_vote_tx()}>create</button>
        </div>
    )
}

export default Create_vote;