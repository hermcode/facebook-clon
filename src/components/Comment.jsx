import React from 'react'
import '../styles/Comment.css'

const Comment = ({user, message}) => {
  return (
    <>
      <li className='comment'>
        <span>{user}</span>
        <p>{message}</p>
      </li>
      <div className='comment-reactions'>
        <span>Me gusta</span>
        <span>Responder</span>
      </div>
    </>
  )
}

export default Comment