import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import HeadingComponent from './components/HeadingComponent';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import Counter from './components/Counter';
import { ThemeContextProvider } from './context/ThemeContext';
import Box from './context/Box';
import { UserContextProvider } from './context/UserContext';
import User from './context/User';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';


function App() {


  return (
    <div className="App">
      <Private isLoggedIn={true} Component={Profile} />
    </div>
  );
}

export default App;
