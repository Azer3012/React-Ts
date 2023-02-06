import React from 'react'


type GreetProps={
    name:string,
    messageCount?:number,
    isLogin:boolean
}

const Greet = (props:GreetProps) => {
  return (
    <div>
        <h2>Welcome {props.name}</h2>
        
    </div>
  )
}

export default Greet