import React, { useEffect, useState } from "react";
import {Card, Button} from 'react-bootstrap'


function Display_all_votes(props) {
    const [voting, setVoting] = useState(undefined);
    const [votes, setVotes] = useState([])

    useEffect(()=>{
        setVoting(props.voting);
        getVotes()
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
        <div className="container row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center">

            {
                votes.map((vote)=>{
                return ( 
                    <div>
                        <Card class="col my-3" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title key={vote[0]}>{vote[0]}</Card.Title>
                                <Card.Text>
                                    {
                                        vote[2].map((ele)=>{
                                            return (<li>{ele}</li>)
                                        })
                                    }
                                </Card.Text>
                                <Button variant="primary">Vote</Button>
                            </Card.Body>
                        </Card>

                        <br></br>
                    </div> 
                )
            })
            }
     
        </div>
    )
}

export default Display_all_votes;