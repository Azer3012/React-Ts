import React from 'react'

type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = (props:InputProps) => {
  return (
    <input value={props.value} onChange={props.handleChange} type="text" />
  )
}

export default Input