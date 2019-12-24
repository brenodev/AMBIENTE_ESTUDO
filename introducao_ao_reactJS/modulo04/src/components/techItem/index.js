import React from 'react'

const techItem = ({ tech, onDelete }) => {
  return (
    <>
      <li>{tech}
        <button onClick={onDelete} type='button'>Remover</button>
      </li>
    </>
  )
}

export default techItem
