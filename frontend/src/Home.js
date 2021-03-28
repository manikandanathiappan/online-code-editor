import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import CodeInput from './CodeInput';

const Home = (props) => {
const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }
return (
    <div>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      { 
        props.loggedInStatus ? 
        <Link to='/code-editor'>Code Editor</Link> : 
        null
      }
      <br/>
      { 
        props.loggedInStatus ? 
        <Link to='/react-code-editor'>React Code Editor</Link> : 
        null
      }
      <br/>
      { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
        null
      }
    </div>
  );
};
export default Home;
