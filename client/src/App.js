import React, { useState, useEffect } from 'react';
import GetArray from './Components/GetArray';

import './App.css';

const App = () => {
  const [ response, setResponse ] = useState('');
  const [ responseToPost,setResponseToPost ] = useState('');

  useEffect(() => {
    callApi()
    .then(res => setResponse(res.logs))
    .catch(error => console.log(error));
    const objDiv = document.getElementById('logger');
        objDiv.scrollTop = objDiv.scrollHeight;
  });

  const callApi = async () => {
    const response = await fetch('/api/getlogs');
    const body = response.json();

    if(response.status !== 200) throw Error(body.message);
    return body;
  }

  const getTime = async () => {
    const response = await fetch('/api/getcurrenttime',{
      method: 'POST',
      headers:{'Content-Type':'Application/json'},
    });
    const body = await response.json();
    setResponseToPost(body.date);
  }


  return(
    <div>
        <h3>Logs</h3>
      <div className="logger" id="logger">
        <p>{response.split("\n")}</p>
      </div>
      <div className="content">
        <div className="time">
          <button onClick={getTime}>Get Current Time</button>
          <label>Current time is : {responseToPost}</label>
        </div>
        <GetArray />
      </div>
    </div>
    );
}

export default App;
