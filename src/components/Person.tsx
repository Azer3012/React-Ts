import React from 'react'

type PersonProps={
    name:{
        firstName:string,
        lastName:string,
        age:number
    }
}

const Person = (props:PersonProps) => {
  return (
    <div>
        <p>{props.name.firstName}</p>
        <p>{props.name.lastName}</p>
        <p>{props.name.age}</p>
    </div>
  )
}

export default Person