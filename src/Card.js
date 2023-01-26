import React from 'react'
import ButtonDel from './ButtonDel';

const Card = (props) => {
  return (
    <div>
        {props.title}
        <input type={"checkbox"} checked={props.completed} 
        value={props.completed}
        onChange={(e)=>props.onToggleChange(props.id)}/>
        
        <ButtonDel id={props.id} onDelete={props.onDelete}/>
      
    </div>
  )
}

export default Card;