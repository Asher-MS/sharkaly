import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper';





function App() {
  let [question,setQuestion]=useState("");
  let [answer,setAnswer]=useState("");
  const BOT_URL="http://192.168.1.13:8080/search"
  function handleClick(){
    let body={"data":[question],"top_k":3}
    
    axios.post(BOT_URL,body).then((resp)=>{handleAnswer(resp.data["data"]["docs"][0]["matches"][0]["text"])})
  }

  function handleAnswer(ans){
    setAnswer(ans);
  }
  return (
    <div className="App">
      <div className="Question" >
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <img src="heading.png" width={395} height={222}/>
          <Paper elevation={0}><h4>Ask me about Sharks!!</h4></Paper>
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
        <Grid item xs={12}>
        <TextField id="question-box" label="Question" fullWidth onChange={(e)=>{setQuestion(e.target.value)}}></TextField>
        </Grid>
        <Grid item xs={12}>
        <Button variant="outlined"  onClick={handleClick}>
            <SearchIcon/>
          Search
        </Button>
        </Grid>
        <Grid item xs={12}>
        <Paper elevation={3} variant="outlined"><h3>{answer}</h3></Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default App;
