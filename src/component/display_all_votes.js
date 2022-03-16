import getBlockchain from '../ethereum.js';
import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

function Display_all_votes(props) {
    const [voting, setVoting] = useState(undefined);
    const [votes, setVotes] = useState([])

    useEffect(()=>{
        setVoting(props.voting);
    },[props.voting]);
    
    async function getVotes(){
        try{
            console.log(props.voting)
            const votes = await props.voting.getAllVotes();
            setVotes(votes)
        }catch(err){
            console.log("error: "+err)
        }
    }

    return (
        <div className="Display_all_votes">
            <button onClick={() => getVotes()}>Display all votes</button>

            {
                votes.map((vote)=>{
                return (
                    <div>
                        <p>title: {vote[0]}</p>
                        {
                            vote[2].map((elements)=>{
                                return (<li>{elements}</li>)
                            }) 
                        }
                    </div>
                )
                })
            }
        </div>
    )
}

export default Display_all_votes;