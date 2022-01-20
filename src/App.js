
import Header from "./components/Header"
import SendTweet from "./components/SendTweet"

import {Container, Snackbar} from '@material-ui/core'



function App() {
  return (
    <Container className="tweets-simulator maxWidth={false}">
      <Header/>
      <SendTweet/>

      
     
    </Container>
  );
}

export default App;
