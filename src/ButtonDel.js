import React from 'react'


const ButtonDel = (props) => {
  return <button onClick={()=>props.onDelete(props.id)}>Delete</button>
}

export default ButtonDel
