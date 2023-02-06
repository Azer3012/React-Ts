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
import List from './components/generics/List';


function App() {


  return (
    <div className="App">
      <List items={['A','B','C']} onClick={(item)=>console.log(item)}/>
      <List items={[1,2,3]} onClick={(item)=>console.log(item)}/>
      <List items={[{id:1},{id:2}]} onClick={(item)=>console.log(item)}/>
    </div>
  );
}

export default App;
