import React, { useEffect, useState } from 'react';
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
import Product from './components/Vlad/Product';
import axios from 'axios';
import { IProduct } from './components/Vlad/model';



function App() {
const [products,setProducts]=useState<IProduct[]>([])


const getProducts=async()=>{
  try {
    const response=await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=3')
    setProducts(response.data)
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(()=>{
  getProducts()
},[])
  return (
    <div className="App">
      {
        products.map(product=>(<Product product={product}/>))
      }
    </div>
  );
}

export default App;
