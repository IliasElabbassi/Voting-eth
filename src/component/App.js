import getBlockchain from '../ethereum.js';
import React, { useEffect, useState } from "react";
import Create_vote from './create_vote';
import Display_all_votes from './display_all_votes';

import { ethers } from 'ethers';

function App() {
  const [voting, setVoting] = useState(undefined);
  const [addressConnected, setAddress] = useState(undefined)
  const [votes, setVotes] = useState([])

  useEffect(() => {
    const init = async () => {
      const { signerAddress, voting} = await getBlockchain();
      console.log(signerAddress)
      console.log(voting)
      setVoting(voting);
      setAddress(signerAddress)
    };
    init()
  }, []);

  async function getVotes(){
    try{
      const votes = await voting.getVote(0);
      // console.log(votes)
      setVotes(votes)
    }catch(err){
      // console.log("error: "+err)
    }
  }
  
  if(typeof voting === 'undefined') {
    return 'Loading...'
  }else{

    return (
      <div className="App">
        Voting app: <br/>
        addr : {addressConnected} <br />
        title : {votes[0]}        <br />
        names : {votes[2]}        <br />

        <div>
          <button onClick={()=> setVotes("Asseul")}>set vote</button>
          <button onClick={() => getVotes()}>get votes</button>
        </div>

        <br />
        <Create_vote voting={voting} />

        <br />
        <Display_all_votes voting={voting} />

      </div>
    )
  }
}

export default App;