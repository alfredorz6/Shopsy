import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    
  const personalGreeting = () => (
    
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.name}!</h2>
    </hgroup>
  );

  return currentUser  ? personalGreeting() : "";
};


export default Greeting;
