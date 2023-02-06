import React from 'react'
import Person from './Person'


type PersonListProps={
    nameList:{
        firstName:string,
        lastName:string,
        age:number
    }[]
}

const PersonList = (props:PersonListProps) => {
  return (
    <div>
        {props.nameList.map((person,index)=>(
            <Person name={person}/>
        ))}
    </div>
  )
}

export default PersonList