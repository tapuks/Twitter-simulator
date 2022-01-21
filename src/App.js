
import Header from "./components/Header"
import SendTweet from "./components/SendTweet"

import {Container, Snackbar} from '@material-ui/core'
import { useEffect, useState } from "react";



function App() {
  const [infoProps, setInfoProps] =useState({ 
    open:false, 
    text: null
  })

  useEffect(()=>{
    console.log(infoProps);
  },[infoProps])
  return (
    <Container className="tweets-simulator maxWidth={false}">
      <Header/>
      <SendTweet setInfoProps={setInfoProps} />

      
      <Snackbar
        
        open={infoProps.open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message={infoProps.text}
      />
    </Container>
  );
}

export default App;
