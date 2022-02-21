
import Header from "./components/Header"
import SendTweet from "./components/SendTweet"
import {Container, Snackbar} from '@material-ui/core'
import { useEffect, useState } from "react";
import {TWEETS_STORAGE} from "./utils/constants"
import ListTweets from "./components/ListTweets"



function App() {
  const [infoProps, setInfoProps] =useState({ 
    open:false, 
    text: null
  })

  const [allTweets, setAllTweets] = useState([])
  const [reloadTweets, setReloadTweets] = useState(false)



  useEffect(()=>{
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE)
    const allTweetsArray = JSON.parse(allTweetsStorage)
    setAllTweets(allTweetsArray) 
    setReloadTweets(false)   
  },[reloadTweets])

  const deleteTweet=(index)=> {
    allTweets.splice(index, 1)
    setAllTweets(allTweets)
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets))
    setReloadTweets(true)
  }
  
  return (
    <Container className="tweets-simulator maxWidth={false}">
      <Header/>
      <SendTweet setInfoProps={setInfoProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}></ListTweets>

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
