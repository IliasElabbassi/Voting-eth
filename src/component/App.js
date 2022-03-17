import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import getBlockchain from '../ethereum.js';
import Navbar from './Navbar'

import Home from './Home'
import NotFound from './PageNoteFound'
import Create_vote from './create_vote';
import Display_all_votes from './display_all_votes';

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

  if(typeof voting === 'undefined') {
    return (
      <div>
        Loading...
      </div>
    )
  }else{

    return (
      <div className="container">
        <h1>Voting app</h1>
        <BrowserRouter>
        <Navbar /> 
        <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/createvote" element={<Create_vote voting={voting} />} />
              <Route path="/votes" element={<Display_all_votes voting={voting} />} />
              <Route element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;